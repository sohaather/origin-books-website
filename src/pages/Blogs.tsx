import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import { blogPosts } from '@/content/blogs'

export default function Blogs() {
  return (
    <>
      <Seo
        title="Blog"
        description="Insights on book publishing, editing, and author marketing from Origin Books Publishing."
        path="/blogs"
      />
      <PageHeader
        eyebrow="Blog"
        title="Notes on publishing, editing, and building a readership."
        description="Practical insights on publishing, book production, distribution, marketing, and building a lasting author brand."
      />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <article>
                <Link to={`/blogs/${post.slug}`} className="group block">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-ink-900">
                    <div
                      className="absolute inset-0 opacity-90 transition-transform duration-700 ease-editorial group-hover:scale-105"
                      style={{ background: 'linear-gradient(150deg, #16223A 0%, #0B1220 70%, #080D18 100%)' }}
                    />
                    <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-widest2 text-brass-light">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl text-ink-900 transition-colors duration-300 ease-editorial group-hover:text-brass-dark">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-slate-400">
                    {post.date} · {post.readTime}
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
