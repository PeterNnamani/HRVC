import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding Your Welfare Rights: A Complete Guide',
    excerpt: 'Learn about every benefit and allowance you are entitled to as an NYSC corps member, including insurance, housing, and medical care.',
    date: 'March 15, 2024',
    author: 'HRVC Team',
    category: 'Rights',
    readTime: 8,
    featured: true,
  },
  {
    id: 2,
    title: 'How to Report a Violation Safely and Effectively',
    excerpt: 'Step-by-step guide on documenting violations, protecting your identity, and submitting reports through the right channels.',
    date: 'March 10, 2024',
    author: 'Legal Advisor',
    category: 'Reporting',
    readTime: 6,
    featured: true,
  },
  {
    id: 3,
    title: 'Stories of Change: How Corps Members Are Fighting Back',
    excerpt: 'Real stories from corps members who faced violations, reported them, and successfully sought justice. Names changed to protect privacy.',
    date: 'March 5, 2024',
    author: 'Anonymous',
    category: 'Stories',
    readTime: 10,
    featured: true,
  },
  {
    id: 4,
    title: 'Election Duties: Know Your Rights and Responsibilities',
    excerpt: 'A comprehensive guide to your duties, rights, and protections while serving as an election officer during NYSC service.',
    date: 'February 28, 2024',
    author: 'HRVC Team',
    category: 'Rights',
    readTime: 7,
  },
  {
    id: 5,
    title: 'Mental Health During Service: Resources and Support',
    excerpt: 'Managing stress, anxiety, and emotional challenges during service year. Available counseling services and self-care strategies.',
    date: 'February 20, 2024',
    author: 'Counselor',
    category: 'Wellness',
    readTime: 6,
  },
  {
    id: 6,
    title: 'Camp Orientation: What to Expect and How to Navigate It',
    excerpt: 'Preparing for orientation camp. Learn about camp life, what to bring, rules, and how to handle common challenges.',
    date: 'February 15, 2024',
    author: 'HRVC Team',
    category: 'Guide',
    readTime: 5,
  },
];

export default function Blog() {
  const featuredPosts = BLOG_POSTS.filter((post) => post.featured);
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          title="Blog & Stories"
          description="Resources, guides, and stories from the HRVC community to help you navigate your service year."
        />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Featured Stories
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center">
                        <div className="text-6xl opacity-30">📖</div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-foreground/60 text-sm mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="space-y-3 border-t border-border pt-4 mt-auto">
                          <div className="flex items-center justify-between text-xs text-foreground/60">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {post.date}
                              </span>
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                          <div className="flex items-center text-accent font-semibold text-sm">
                            Read More <ArrowRight size={16} className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className={`py-16 md:py-20 ${featuredPosts.length > 0 ? 'bg-muted/30' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Latest Articles
            </h2>

            <div className="space-y-6">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2 hover:text-accent transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-foreground/60 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            {post.author}
                          </div>
                          <div>{post.readTime} min read</div>
                        </div>
                      </div>

                      <div className="flex-shrink-0 text-accent font-semibold flex items-end">
                        Read <ArrowRight size={18} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest articles, resources, and stories delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Browse by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Rights', 'Stories', 'Reporting', 'Guide', 'Wellness', 'News'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-accent hover:bg-muted/30 transition-colors font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
