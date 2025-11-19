import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, image, date, slug }: BlogCardProps) => {
  return (
    <article className="bg-card rounded-lg overflow-hidden shadow-md hover-lift">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`}>
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
