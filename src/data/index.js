import { Code, Cpu, Cloud, Shield, Layout, Settings, Server, Database, Lock, Smartphone } from 'lucide-react';

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export const services = [
    {
        id: 'web-mobile',
        title: 'Web & Mobile Engineering',
        description: 'Development of custom web applications and cross-platform mobile solutions using React, React Native, and Node.js ecosystems.',
        benefits: ['Scalable component-based architecture', 'Type-safe implementations (TypeScript)', 'Performance-optimized rendering'],
        icon: Smartphone,
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
        id: 'ai-ml',
        title: 'AI & Data Solutions',
        description: 'Implementation of machine learning models for predictive analytics, process automation, and natural language processing integration.',
        benefits: ['Automated data processing pipelines', 'Custom model training/fine-tuning', 'API-first integration'],
        icon: Cpu,
        tech: ['Python', 'TensorFlow', 'OpenAI API', 'Pandas']
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & Infrastructure',
        description: 'Design and management of secure cloud environments, CI/CD pipelines, and container orchestration.',
        benefits: ['Infrastructure as Code (Terraform)', 'High-availability architectures', 'Automated deployment workflows'],
        icon: Cloud,
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity & Compliance',
        description: 'Vulnerability assessments, penetration testing, and security code reviews to ensure application integrity.',
        benefits: ['OWASP Top 10 compliance', 'Secure SDLC integration', 'Regular security audits'],
        icon: Shield,
        tech: ['Burp Suite', 'SonarQube', 'OAuth 2.0']
    },
    {
        id: 'ui-ux',
        title: 'Product Design (UI/UX)',
        description: 'User-centered design focused on workflow efficiency, accessibility (WCAG), and consistent design systems.',
        benefits: ['Design system documentation', 'Interactive high-fidelity prototypes', 'Accessibility compliance'],
        icon: Layout,
        tech: ['Figma', 'Storybook', 'Tailwind CSS']
    },
    {
        id: 'enterprise',
        title: 'Enterprise Digital Modernization',
        description: 'Legacy system migration and digital transformation strategies for established organizations.',
        benefits: ['Incremental migration strategies', 'Microservices decomposition', 'Minimal business disruption'],
        icon: Settings,
        tech: ['Java Spring Boot', 'Kafka', 'Microservices']
    }
];

export const technologies = [
    {
        category: 'Frontend',
        icon: Layout,
        items: [
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }, // Inverted for dark mode handling in CSS if needed
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' }
        ]
    },
    {
        category: 'Backend',
        icon: Server,
        items: [
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' }
        ]
    },
    {
        category: 'Database',
        icon: Database,
        items: [
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
            { name: 'AWS S3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
        ]
    },
    {
        category: 'DevOps',
        icon: Cloud,
        items: [
            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
            { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' }
        ]
    },
    {
        category: 'Security & QA',
        icon: Lock,
        items: [
            { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' } // QA specific icons hard to find in devicon, using generic utils
        ]
    }
];

export const portfolio = [
    {
        id: 1,
        title: 'FinTech Transaction System',
        client: 'Confidential Financial Partners',
        category: 'Enterprise Engineering',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000', // More corporate fintech look
        problem: 'Client faced scalability issues with a legacy monolithic application during high-volume trading hours.',
        solution: 'Designed and implemented a microservices architecture using Java Spring Boot and Kafka.',
        tech: ['Java', 'Spring Boot', 'Kafka', 'AWS'],
        outcome: 'System effectively handled 40% increase in load. Processing latency reduced by 200ms.'
    },
    {
        id: 2,
        title: 'Medical AI Diagnostics',
        client: 'HealthTech Startup (NDA)',
        category: 'AI & ML',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000', // Real medical tech look
        problem: 'Requirement to assist radiologists by pre-screening chest X-rays for anomalies.',
        solution: 'Developed a CNN model integrated into a compliant web dashboard.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        outcome: 'Prototype demonstrated 88% accuracy. Project moved to clinical trial phase.'
    },
    {
        id: 3,
        title: 'E-commerce Re-platforming',
        client: 'Mid-sized Retailer',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000', // Modern logistics/ecommerce
        problem: 'Legacy Magento setup was expensive and slow on mobile devices.',
        solution: 'Headless architecture using Next.js storefront and Node.js backend.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        outcome: 'Mobile load times improved by 1.5s. Operational costs reduced by 30%.'
    }
];

export const projects = [
    {
        id: 'fintech-platform',
        title: 'Enterprise FinTech Platform',
        category: 'FinTech',
        client: 'Leading Financial Services Company',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        problem: 'Legacy monolithic system causing performance bottlenecks, unable to scale during peak trading hours, and difficult to maintain.',
        solution: 'Migrated to microservices architecture using Spring Boot and Kafka for event-driven communication. Implemented Redis caching and deployed on AWS EKS for auto-scaling.',
        outcome: 'Achieved 40% performance improvement, 99.9% uptime during peak hours, and reduced deployment time from days to hours. System now handles 10x traffic with same infrastructure cost.',
        tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'AWS', 'Kubernetes', 'PostgreSQL']
    },
    {
        id: 'healthtech-ai',
        title: 'AI-Powered Medical Diagnostics',
        category: 'HealthTech',
        client: 'Healthcare Innovation Startup',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
        problem: 'Manual X-ray analysis was time-consuming and prone to human error. Needed automated solution to assist radiologists in detecting abnormalities.',
        solution: 'Developed deep learning model using TensorFlow and ResNet architecture. Trained on 100,000+ annotated medical images. Built React-based dashboard for radiologists.',
        outcome: '88% accuracy in detecting abnormalities, reducing analysis time by 60%. Currently in clinical trial phase with 3 major hospitals. Potential to save thousands of lives annually.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'AWS SageMaker']
    },
    {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform Re-engineering',
        category: 'E-commerce',
        client: 'Multi-Brand Retail Chain',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        problem: 'Slow page load times (8+ seconds), poor mobile experience, and high cart abandonment rate (75%). Losing customers to competitors.',
        solution: 'Complete rebuild using Next.js for SSR/SSG, implemented CDN caching, optimized images, and created mobile-first responsive design. Integrated Stripe for payments.',
        outcome: '60% faster load times (now under 2 seconds), mobile conversions increased by 45%, cart abandonment reduced to 35%. Revenue increased by 30% in first quarter.',
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Vercel', 'Cloudflare CDN']
    },
    {
        id: 'enterprise-crm',
        title: 'Custom CRM & Analytics Platform',
        category: 'Enterprise',
        client: 'B2B SaaS Company',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        problem: 'Using multiple disconnected tools for sales, marketing, and analytics. Data silos preventing unified customer view. Manual reporting taking days.',
        solution: 'Built unified CRM platform with real-time analytics dashboard. Integrated with existing tools via APIs. Automated reporting with scheduled email digests.',
        outcome: 'Unified customer data across 5 departments, reduced reporting time from days to minutes, increased sales team productivity by 35%. ROI achieved in 6 months.',
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js', 'AWS']
    }
];

export const companyDetails = {
    name: 'Offket',
    legalName: 'OFFKET TECH IT SOLUTIONS PVT. LTD.',
    tagline: 'Engineering Scalable Digital Solutions',
    description: 'Offket Tech is an independent IT services firm specializing in software engineering, digital transformation, and cloud infrastructure.',
    address: '6th Floor, Pranava Business Park, Beside Honda Toyota, Kondapur, Hyderabad, Telangana, India',
    email: 'hr@offkettech.com',
    phone: '+91 81068 86572',
    founded: '2023',
    jurisdiction: 'India',
    operatingModel: 'Hybrid (Remote-First with Hyderabad HQ)',
    linkedin: 'https://www.linkedin.com/company/offket-it-solutions/',
    mapsLink: 'https://maps.app.goo.gl/96r5SWoY3nnNbHEW8',
    social: {
        facebook: 'https://facebook.com/offkettech',
        twitter: 'https://twitter.com/offkettech',
        linkedin: 'https://www.linkedin.com/company/offket-it-solutions/',
        instagram: 'https://www.instagram.com/offket_it_solutions?igsh=MmNsMHlkcmZkb3Yx'
    }
};
