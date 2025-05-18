
import React from 'react';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component. This comprehensive guide will walk you through the fundamental concepts of React and help you understand how to structure your applications.",
    date: "May 15, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    excerpt: "Discover the best practices for writing clean TypeScript code. This article covers type definitions, interfaces, generics, and how to effectively use TypeScript to create more maintainable code.",
    date: "May 10, 2025",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Power of CSS Grid",
    excerpt: "An in-depth look at CSS Grid and how it can revolutionize your layouts. Learn how to create complex, responsive layouts with minimal code using this powerful CSS feature.",
    date: "April 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Introduction to TailwindCSS",
    excerpt: "Why TailwindCSS is changing the way developers style their applications. This post explores the utility-first approach of Tailwind and how it can speed up your development process.",
    date: "April 15, 2025",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "State Management in React",
    excerpt: "Comparing different state management solutions for React applications. From useState and useReducer to Redux and Zustand, learn which solution is best for your project needs.",
    date: "April 5, 2025",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Building Accessible Web Applications",
    excerpt: "How to ensure your web applications are accessible to all users. This guide covers ARIA attributes, keyboard navigation, color contrast, and other important accessibility considerations.",
    date: "March 22, 2025",
    readTime: "10 min read"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Thoughts, ideas and guides on web development, design and more
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">More posts coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
