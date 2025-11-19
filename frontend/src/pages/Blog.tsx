import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const publishedPosts = blogPosts.filter((post) => post.published);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              News & Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest happenings, achievements, and stories from our academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <BlogCard key={post.id} {...post} date={post.publishedAt} />
            ))}
          </div>

          {publishedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
