import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './Animations';

const BlogCard = ({ title, author, date, excerpt, image, slug }) => {
    return (
        <FadeIn>
            <Link
                to={`/blog/${slug}`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{author}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2 group-hover:text-[#5F27CD] transition-colors">
                        {title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[#5F27CD] font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
};

export default BlogCard;
