'use client'
import type React from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import styles from './BlogBentoGrid.module.css';

interface BlogBentoGridProps {
    apiUrl: string;
    limit: number;
}

const BlogBentoGrid: React.FC<BlogBentoGridProps> = ({ apiUrl, limit }) => {
    const { posts, loading, error } = useFetchPosts(apiUrl, limit);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts.</p>;

    return (
        <div className="px-12 py-24 md:p-24 relative flex items-center flex-col w-full h-full gap-5">
            <h1 className="uppercase font-bold text-4xl md:text-6xl">
                News
            </h1>
            <div className={styles.grid}>
                {posts.map(post => (
                    <div key={post.id} className={styles.card}>
                        <img src={`https://picsum.photos/800/500?random${post.id}`} alt={post.title} className={`${styles.image} h-[calc(50vw)]md:h-[calc(15vw)]`}/>
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.excerpt}>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogBentoGrid;
