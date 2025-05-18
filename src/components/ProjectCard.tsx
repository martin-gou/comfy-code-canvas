
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoLink?: string;
  repoLink?: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  demoLink,
  repoLink,
  tags
}: ProjectCardProps) => {
  return (
    <Card className="card-hover overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      {(demoLink || repoLink) && (
        <CardFooter className="flex gap-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-primary hover:underline"
            >
              Source Code
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
