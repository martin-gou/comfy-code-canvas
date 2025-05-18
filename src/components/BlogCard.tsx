
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ id, title, excerpt, date, readTime }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="card-hover h-full">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{excerpt}</p>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex justify-between">
          <span>{date}</span>
          <span>{readTime}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
