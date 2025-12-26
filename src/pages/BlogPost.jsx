import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { FadeIn } from '../components/Animations';

import { blogPosts } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Blog Post Not Found</h1>
                    <Link to="/blog" className="text-[#5F27CD] hover:underline">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO title={post.title} description={post.content.substring(0, 160)} />

            <article className="bg-white">
                {/* Hero Image */}
                <div className="relative h-[400px] md:h-[500px]">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 -mt-32 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                                {/* Back Button */}
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-[#5F27CD] hover:text-[#4A1FA3] mb-6 font-medium"
                                >
                                    <ArrowLeft size={20} /> Back to Home
                                </Link>

                                {/* Meta */}
                                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                    <button className="flex items-center gap-2 hover:text-[#5F27CD] transition-colors ml-auto">
                                        <Share2 size={16} />
                                        <span>Share</span>
                                    </button>
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Content */}
                                <div
                                    className="prose prose-lg max-w-none
                    prose-headings:text-navy-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-navy-900 prose-strong:font-semibold
                    prose-ul:my-6 prose-li:text-slate-600 prose-li:mb-2
                    prose-a:text-[#5F27CD] prose-a:no-underline hover:prose-a:underline"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* CTA */}
                                <div className="mt-12 pt-8 border-t border-slate-200">
                                    <div className="bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] rounded-xl p-8 text-center text-white">
                                        <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Business?</h3>
                                        <p className="mb-6 text-white/90">Let's discuss how we can help you implement these strategies</p>
                                        <Link
                                            to="/contact"
                                            className="inline-block bg-white text-[#5F27CD] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                                        >
                                            Get in Touch
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Related Articles */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-navy-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(blogPosts)
                                .filter(([key]) => key !== slug)
                                .slice(0, 2)
                                .map(([key, relatedPost]) => (
                                    <Link
                                        key={key}
                                        to={`/blog/${key}`}
                                        className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                                    >
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="p-6">
                                            <h3 className="font-bold text-navy-900 mb-2 group-hover:text-[#5F27CD] transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-slate-500">{relatedPost.date}</p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
