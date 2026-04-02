import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding Your Welfare Rights: A Complete Guide',
    excerpt: 'Learn about the rights and protections available to you under Nigerian law, including access to services, safety, and legal support.',
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
    title: 'Stories of Change: How People Are Fighting Back',
    excerpt: 'Real stories from people who faced violations, reported them, and successfully sought justice. Names changed to protect privacy.',
    date: 'March 5, 2024',
    author: 'Anonymous',
    category: 'Stories',
    readTime: 10,
    featured: true,
  },
  {
    id: 4,
    title: 'Election Duties: Know Your Rights and Responsibilities',
    excerpt: 'A comprehensive guide to your duties, rights, and protections while serving as an election officer.',
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
        <HeroSection
          title="Blog & Stories"
          description="Resources, guides, and stories from the HRVC community to help you understand your rights and stay informed."
          primaryCta={{ label: 'Explore the latest', href: '#latest' }}
        />

        <section className="py-6 md:py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base text-foreground/70">
              Read reliable guidance on rights, reporting, and wellbeing from corps members, legal advisors, and our community.
            </p>
          </div>
        </section>

        {featuredPosts.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Featured Stories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="bg-card border border-border rounded-[1.75rem] overflow-hidden hover:border-accent hover:shadow-2xl transition-all h-full flex flex-col">
                      <div className="h-52 bg-linear-to-br from-accent/10 to-secondary/5 flex items-center justify-center">
                        <div className="text-6xl opacity-25">📖</div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-foreground/65 text-sm mb-4 flex-1 line-clamp-3">
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

        <section id="latest" className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Latest Articles
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="bg-card border border-border rounded-3xl p-6 hover:border-accent hover:shadow-lg transition-all group">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-foreground/65 leading-7">
                          {post.excerpt}
                        </p>
                      </div>

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

                      <div className="flex items-center gap-2 text-accent font-semibold">
                        Read <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border/70 bg-card p-10 shadow-2xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent/80 mb-3">
                  Stay connected
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Never miss a new guide or story.
                </h2>
                <p className="text-foreground/70 leading-8 max-w-2xl mx-auto">
                  Join our newsletter for practical rights guidance, safety tips, and inspiring stories tailored to people who care about justice.
                </p>
              </div>

              <form className="mt-10 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="blog-email">
                  Email address
                </label>
                <input
                  id="blog-email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 rounded-2xl border border-border bg-background px-5 py-4 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-5 text-sm text-foreground/60 text-center">
                We respect your privacy and only send updates that help you stay safe, informed, and supported.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Browse by Category
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Rights', 'Stories', 'Reporting', 'Guide', 'Wellness', 'News'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-card border border-border rounded-2xl text-foreground hover:border-accent hover:bg-muted/30 transition-colors font-medium"
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
