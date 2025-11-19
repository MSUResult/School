import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save, Eye, Upload, Trash2 } from "lucide-react";

const BlogEditor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    categories: "",
    headerImage: "",
  });

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setFormData({ ...formData, title, slug });
  };

  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!");
  };

  const handlePublish = () => {
    if (!formData.title || !formData.content) {
      toast.error("Please fill in title and content");
      return;
    }
    toast.success("Post published successfully!");
    setTimeout(() => navigate("/blog"), 1500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, upload to server and get URL
      toast.success("Image uploaded successfully");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Create New Post
            </h1>
            <p className="text-muted-foreground">
              Write and publish your blog content
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-lg font-semibold">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter post title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              {/* Slug */}
              <div>
                <Label htmlFor="slug" className="text-sm font-medium">
                  Slug (URL)
                </Label>
                <Input
                  id="slug"
                  placeholder="post-url-slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              {/* Header Image */}
              <div>
                <Label className="text-sm font-medium">Header Image</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload header image
                    </span>
                  </label>
                </div>
              </div>

              {/* Categories */}
              <div>
                <Label htmlFor="categories" className="text-sm font-medium">
                  Categories (comma-separated)
                </Label>
                <Input
                  id="categories"
                  placeholder="Education, Technology, Sports"
                  value={formData.categories}
                  onChange={(e) =>
                    setFormData({ ...formData, categories: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt" className="text-sm font-medium">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Short description for blog listing"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="mt-2"
                  rows={3}
                />
              </div>

              {/* Content Editor */}
              <div>
                <Label htmlFor="content" className="text-lg font-semibold">
                  Content
                </Label>
                <div className="mt-2 border rounded-lg">
                  <div className="bg-muted p-3 border-b flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline">
                      <strong>B</strong>
                    </Button>
                    <Button size="sm" variant="outline">
                      <em>I</em>
                    </Button>
                    <Button size="sm" variant="outline">
                      <u>U</u>
                    </Button>
                    <Button size="sm" variant="outline">
                      H1
                    </Button>
                    <Button size="sm" variant="outline">
                      H2
                    </Button>
                    <Button size="sm" variant="outline">
                      H3
                    </Button>
                    <Button size="sm" variant="outline">
                      List
                    </Button>
                    <Button size="sm" variant="outline">
                      Link
                    </Button>
                    <Button size="sm" variant="outline">
                      Image
                    </Button>
                    <Button size="sm" variant="outline">
                      Code
                    </Button>
                  </div>
                  <Textarea
                    id="content"
                    placeholder="Write your blog content here... (Supports HTML)"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="min-h-[400px] border-0 focus-visible:ring-0"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: You can use HTML tags for formatting (h2, h3, p, ul, li,
                  blockquote, etc.)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t">
                <Button
                  onClick={handleSaveDraft}
                  variant="outline"
                  className="flex-1 sm:flex-none"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button
                  onClick={() => toast.info("Preview feature coming soon")}
                  variant="outline"
                  className="flex-1 sm:flex-none"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handlePublish}
                  className="flex-1 sm:flex-none bg-accent hover:bg-accent-light"
                >
                  Publish
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1 sm:flex-none ml-auto"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </div>

          {/* API Integration Instructions */}
          {/* <div className="mt-8 bg-muted rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">API Integration</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To persist blog posts, implement the following API endpoints:
            </p>
            <div className="space-y-2 text-sm font-mono">
              <div className="bg-background p-3 rounded">
                POST /api/blogs - Create new blog post
              </div>
              <div className="bg-background p-3 rounded">
                GET /api/blogs - Fetch all blog posts
              </div>
              <div className="bg-background p-3 rounded">
                GET /api/blogs/:slug - Fetch single blog post
              </div>
              <div className="bg-background p-3 rounded">
                PUT /api/blogs/:id - Update blog post
              </div>
              <div className="bg-background p-3 rounded">
                DELETE /api/blogs/:id - Delete blog post
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogEditor;
