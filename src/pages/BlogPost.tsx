import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import { getBlogBySlug } from '@/content/blogs'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blogs" replace />
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} />

      <article className="bg-paper pb-24 pt-36 lg:pb-28 lg:pt-44">
        <div className="container-editorial max-w-3xl">
          <Reveal>
            <Link to="/blogs" className="link-underline font-mono text-xs uppercase tracking-widest2 text-slate-500">
              &larr; Back to Blog
            </Link>
            <p className="eyebrow mt-8 text-ink-900/60">{post.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">{post.title}</h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-slate-400">
              {post.date} · {post.readTime}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 aspect-[16/9] w-full bg-ink-900" style={{ background: 'linear-gradient(150deg, #16223A 0%, #0B1220 70%, #080D18 100%)' }} />
          </Reveal>

          <Reveal delay={0.15} className="prose-editorial mt-12 space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </article>
    </>
  )
}
