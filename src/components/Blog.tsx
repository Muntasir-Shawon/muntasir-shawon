import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Coming Soon: Insights on AI & Photography",
      date: "2024",
      readTime: "5 min read",
      excerpt: "Stay tuned for articles exploring the intersection of artificial intelligence and creative photography.",
      category: "AI & Tech",
    },
    {
      title: "Building Intelligent Systems",
      date: "2024",
      readTime: "7 min read",
      excerpt: "Exploring modern approaches to AI model development and real-world applications.",
      category: "Development",
    },
    {
      title: "The Art of Visual Storytelling",
      date: "2024",
      readTime: "4 min read",
      excerpt: "Techniques and perspectives on capturing meaningful moments through photography.",
      category: "Photography",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Blog & Insights
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, creativity, and the journey of building intelligent systems while capturing life's moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-muted rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                {post.title}
              </h3>
              
              <p className="text-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <button className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2 group">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
