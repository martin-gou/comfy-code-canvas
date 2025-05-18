
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ProfileSection from '../components/ProfileSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Weather App",
    description: "A sleek weather application that provides real-time weather data",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "TypeScript", "API"]
  }
];

const latestPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component...",
    date: "May 15, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    excerpt: "Discover the best practices for writing clean TypeScript code...",
    date: "May 10, 2025",
    readTime: "7 min read"
  }
];

const Index = () => {
  useEffect(() => {
    // Add transition effect when scrolling
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <ProfileSection />
      
      <section className="py-12 px-4 bg-projects section-transition">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="flex items-center text-primary hover:underline">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 section-transition">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Link to="/blog" className="flex items-center text-primary hover:underline">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {latestPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-contact section-transition">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in new projects and collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors hover-scale"
          >
            Contact Me
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
