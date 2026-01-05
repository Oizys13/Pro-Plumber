import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop",
    title: "5 Signs Your Water Heater Needs Replacement",
    excerpt: "Learn the warning signs that indicate it's time to replace your water heater before it fails completely.",
    author: "Michael Johnson",
    date: "Jan 2, 2026",
    category: "Maintenance",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
    title: "Winter Plumbing Tips: Prevent Frozen Pipes",
    excerpt: "Protect your home from costly water damage with these essential winter plumbing maintenance tips.",
    author: "Sarah Williams",
    date: "Dec 28, 2025",
    category: "Tips",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    title: "The Benefits of Regular Drain Cleaning",
    excerpt: "Discover why regular drain cleaning is essential for maintaining a healthy plumbing system.",
    author: "David Martinez",
    date: "Dec 20, 2025",
    category: "Guide",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="animate-enter">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Latest Blog
            </h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Plumbing Tips & <span className="text-accent">Insights</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group animate-enter delay-100"
          >
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover group animate-enter"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
