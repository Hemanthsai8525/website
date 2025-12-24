import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { FadeIn } from '../components/Animations';

const blogPosts = {
    'ai-machine-learning-2024': {
        title: 'AI and Machine Learning: Transforming Startup Operations in 2024',
        author: 'Tech Insights Team',
        date: '15 December, 2024',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
        content: `
      <h2>The AI Revolution in Startups</h2>
      <p>In 2024, Artificial Intelligence and Machine Learning have become indispensable tools for startups looking to scale efficiently and compete in the global market. With over $100 billion invested globally in AI this year, the technology has moved from experimental to essential.</p>

      <h3>Key AI Applications for Startups</h3>
      <p><strong>1. Automation and Efficiency</strong><br/>
      AI-powered automation is helping startups reduce operational costs by up to 40%. From customer service chatbots to automated data entry, machine learning algorithms are handling repetitive tasks, allowing human teams to focus on strategic initiatives.</p>

      <p><strong>2. Predictive Analytics</strong><br/>
      Startups are leveraging ML models to predict customer behavior, market trends, and potential risks. This data-driven approach enables better decision-making and resource allocation.</p>

      <p><strong>3. Personalized Customer Experiences</strong><br/>
      AI algorithms analyze user behavior to deliver personalized product recommendations, content, and marketing messages, significantly improving conversion rates and customer satisfaction.</p>

      <h3>Implementation Strategies</h3>
      <p>For startups looking to integrate AI:</p>
      <ul>
        <li>Start with a specific problem that AI can solve</li>
        <li>Use pre-trained models and APIs to reduce development time</li>
        <li>Invest in quality data collection and management</li>
        <li>Partner with experienced AI development firms like Offkettech</li>
      </ul>

      <h3>The Future Outlook</h3>
      <p>As AI technology continues to evolve, startups that embrace these tools early will have a significant competitive advantage. The key is to implement AI strategically, focusing on areas where it can deliver the most value to your business and customers.</p>
    `
    },
    'cloud-computing-strategies': {
        title: 'Cloud Computing Strategies for Scalable Startup Growth',
        author: 'DevOps Weekly',
        date: '10 December, 2024',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
        content: `
      <h2>Why Cloud Computing is Essential for Startups</h2>
      <p>Cloud computing has revolutionized how startups build and scale their infrastructure. Instead of massive upfront investments in hardware, startups can now access enterprise-grade computing resources on-demand, paying only for what they use.</p>

      <h3>Key Cloud Technologies for 2024</h3>
      <p><strong>Serverless Computing</strong><br/>
      Serverless architectures allow developers to focus on code without managing servers. This approach reduces operational overhead and costs while improving scalability. Popular platforms include AWS Lambda, Google Cloud Functions, and Azure Functions.</p>

      <p><strong>Kubernetes Orchestration</strong><br/>
      Container orchestration with Kubernetes has become the standard for deploying and managing microservices. It provides automatic scaling, self-healing, and efficient resource utilization.</p>

      <p><strong>Edge Computing</strong><br/>
      By processing data closer to the source, edge computing reduces latency and bandwidth costs. This is particularly important for IoT applications and real-time services.</p>

      <h3>Cost Optimization Strategies</h3>
      <ul>
        <li>Use auto-scaling to match resources with demand</li>
        <li>Implement reserved instances for predictable workloads</li>
        <li>Leverage spot instances for non-critical tasks</li>
        <li>Monitor and optimize resource usage continuously</li>
      </ul>

      <h3>Security Best Practices</h3>
      <p>Cloud security requires a multi-layered approach:</p>
      <ul>
        <li>Implement identity and access management (IAM)</li>
        <li>Encrypt data at rest and in transit</li>
        <li>Regular security audits and compliance checks</li>
        <li>Use cloud-native security tools and monitoring</li>
      </ul>

      <p>At Offkettech, we help startups design and implement cloud architectures that are secure, scalable, and cost-effective from day one.</p>
    `
    },
    'software-development-best-practices': {
        title: 'Software Development Best Practices: From MVP to Enterprise Scale',
        author: 'Engineering Digest',
        date: '5 December, 2024',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
        content: `
      <h2>Building Scalable Software from the Start</h2>
      <p>The journey from a Minimum Viable Product (MVP) to an enterprise-scale application requires careful planning and adherence to proven development practices. Here's what successful startups are doing right.</p>

      <h3>Agile Methodology</h3>
      <p>Agile development remains the gold standard for startups. By working in short sprints (typically 2 weeks), teams can:</p>
      <ul>
        <li>Deliver working software quickly</li>
        <li>Respond to changing requirements</li>
        <li>Gather user feedback early and often</li>
        <li>Reduce risk through iterative development</li>
      </ul>

      <h3>DevSecOps Integration</h3>
      <p><strong>Security from Day One</strong><br/>
      DevSecOps integrates security practices throughout the development lifecycle rather than treating it as an afterthought. This includes:</p>
      <ul>
        <li>Automated security testing in CI/CD pipelines</li>
        <li>Code scanning for vulnerabilities</li>
        <li>Container security and compliance checks</li>
        <li>Regular penetration testing</li>
      </ul>

      <h3>Multi-Platform Development</h3>
      <p><strong>React Native and Flutter</strong><br/>
      Cross-platform frameworks allow startups to build iOS and Android apps from a single codebase, reducing development time and costs by up to 50%.</p>

      <h3>Code Quality Standards</h3>
      <p>Maintaining high code quality is essential for long-term success:</p>
      <ul>
        <li>Comprehensive unit and integration testing (aim for 80%+ coverage)</li>
        <li>Code reviews for all pull requests</li>
        <li>Automated linting and formatting</li>
        <li>Clear documentation and API specifications</li>
      </ul>

      <h3>Scalability Considerations</h3>
      <p>Design for scale from the beginning:</p>
      <ul>
        <li>Use microservices architecture for complex applications</li>
        <li>Implement caching strategies (Redis, CDN)</li>
        <li>Design stateless services for horizontal scaling</li>
        <li>Use message queues for asynchronous processing</li>
      </ul>

      <p>Offkettech specializes in building software that scales with your business, from MVP to millions of users.</p>
    `
    }
};

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
