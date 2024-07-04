'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const useFetchPosts = (url: string, limit: number, interval = 60000) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(`${url}?_limit=${limit}`);
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    const intervalId = setInterval(fetchPosts, interval);

    return () => clearInterval(intervalId);
  }, [url, limit, interval]);

  return { posts, loading, error };
};

export default useFetchPosts;
