
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="relative w-64 h-64 mx-auto md:mx-0 overflow-hidden rounded-full shadow-xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop"
              alt="Your Name"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="text-center md:text-left" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Your Name</h1>
          <p className="text-xl text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Web Developer & Designer
          </p>
          <p className="mb-8 text-gray-700 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I'm a passionate developer focused on creating beautiful, functional websites and applications.
            With expertise in React, TypeScript, and UI/UX design, I strive to build engaging digital experiences.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="flex items-center gap-2 hover-scale">
                <Github size={20} />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="flex items-center gap-2 hover-scale">
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
