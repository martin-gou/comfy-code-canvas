
import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include user authentication, product filtering, cart functionality, and payment processing with Stripe.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Weather App",
    description: "A sleek weather application that provides real-time weather data for any location. Built using React and the OpenWeatherMap API, with a focus on responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "TypeScript", "API"]
  },
  {
    title: "Task Management Dashboard",
    description: "A comprehensive task management system with drag-and-drop functionality, user assignments, due dates, and progress tracking. Built with React, TypeScript, and Firebase.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "Firebase", "TypeScript"]
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set goals. Features include interactive charts and social sharing.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "Chart.js", "Firebase"]
  },
  {
    title: "Recipe Finder",
    description: "An app that helps users discover recipes based on ingredients they have at home. Integration with a food API provides thousands of options with detailed instructions.",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "API", "Tailwind CSS"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dynamic content loading, and a contact form with email integration.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
