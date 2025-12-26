import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogs';

const Blog = () => {
    return (
        <>
            <SEO
                title="Blog | Offket Tech"
                description="Insights, updates, and tech trends from the Offket Tech team."
            />

            <PageHeader
                title="Our Blog"
                subtitle="Latest news, insights, and technological trends from industry experts."
                pattern="dots"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(blogPosts).map((post, index) => (
                            <BlogCard
                                key={index}
                                {...post}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
