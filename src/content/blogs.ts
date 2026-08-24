// PLACEHOLDER CONTENT
// These are structural placeholders so the blog listing and article layouts can be reviewed.
// They are NOT real published articles.
// Replace title, excerpt, body, and date with real content before publishing this section.

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'placeholder-article-one',
    title: 'Placeholder Article Title Goes Here',
    excerpt:
      'This is placeholder text standing in for a real article excerpt. Replace with actual blog content in the next content pass.',
    category: 'Publishing',
    date: 'TBD',
    readTime: '—',
    body: [
      'This is placeholder body copy for the article layout. It exists only to demonstrate spacing, typography, and structure.',
      'Replace this paragraph, and every paragraph in this article, with real content once it is provided.',
    ],
  },
  {
    slug: 'placeholder-article-two',
    title: 'Placeholder Article Title Goes Here',
    excerpt:
      'This is placeholder text standing in for a real article excerpt. Replace with actual blog content in the next content pass.',
    category: 'Writing',
    date: 'TBD',
    readTime: '—',
    body: [
      'This is placeholder body copy for the article layout. It exists only to demonstrate spacing, typography, and structure.',
      'Replace this paragraph, and every paragraph in this article, with real content once it is provided.',
    ],
  },
  {
    slug: 'placeholder-article-three',
    title: 'Placeholder Article Title Goes Here',
    excerpt:
      'This is placeholder text standing in for a real article excerpt. Replace with actual blog content in the next content pass.',
    category: 'Marketing',
    date: 'TBD',
    readTime: '—',
    body: [
      'This is placeholder body copy for the article layout. It exists only to demonstrate spacing, typography, and structure.',
      'Replace this paragraph, and every paragraph in this article, with real content once it is provided.',
    ],
  },
]

export const getBlogBySlug = (slug: string) => blogPosts.find((b) => b.slug === slug)
