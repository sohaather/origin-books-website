export interface Service {
  slug: string
  number: string
  title: string
  summary: string
  description: string
}

export const services: Service[] = [
  {
    slug: 'ghostwriting',
    number: '01',
    title: 'Ghostwriting',
    summary: 'Professional writing support that transforms your ideas, experiences, and stories into a compelling manuscript.',
    description:
      'Have a story to tell but need help putting it into words? Our ghostwriting service transforms your ideas, experiences, expertise, or story into a polished manuscript while preserving your unique voice and vision. From concept development to a complete manuscript, we work closely with you to bring your book to life.',
  },
  {
    slug: 'editing-proofreading',
    number: '02',
    title: 'Editing & Proofreading',
    summary: 'Developmental, line, and copy editing that sharpens your manuscript without losing your voice.',
    description:
      'Every manuscript we take on moves through structured editing and proofreading passes — from big-picture developmental feedback on plot, pacing, and structure, to line-level copy editing and a final proofread. The goal is always the same: a cleaner, stronger book that still sounds like you.',
  },
  {
    slug: 'book-formatting',
    number: '03',
    title: 'Book Formatting',
    summary: 'Interior formatting built for print and digital, so every edition reads beautifully.',
    description:
      'We format manuscripts for print and digital editions with attention to margins, chapter openers, running heads, and readability. Formatting is prepared to meet the technical requirements of major print and eBook platforms.',
  },
  {
    slug: 'typesetting',
    number: '04',
    title: 'Typesetting',
    summary: 'Considered typography and page layout that gives your book an editorial, professional feel.',
    description:
      'Typesetting is where a manuscript becomes a book. We set type with care — considered leading, hierarchy, and page rhythm — so your finished interior feels intentional rather than templated.',
  },
  {
    slug: 'cover-design',
    number: '05',
    title: 'Custom Cover Design',
    summary: 'Original cover concepts designed to work at thumbnail size and on the shelf.',
    description:
      'Your cover is your first impression. We design original covers for print and eBook formats, built to hold up as a small thumbnail online and as a physical object on a shelf or table.',
  },
  {
    slug: 'ebook-publishing',
    number: '06',
    title: 'eBook Publishing',
    summary: 'Clean, validated eBook files prepared for the major digital storefronts.',
    description:
      'We prepare properly structured eBook files — with working navigation, consistent styling, and validated formatting — so your book displays correctly across e-readers and apps.',
  },
  {
    slug: 'paperback-publishing',
    number: '07',
    title: 'Paperback Publishing',
    summary: 'Print-ready paperback files, from trim size to final interior layout.',
    description:
      'From trim size and bleed to interior layout and cover wrap, we prepare complete print-ready paperback files so your book is ready for production.',
  },
  {
    slug: 'hardcover-publishing',
    number: '08',
    title: 'Hardcover Publishing',
    summary: 'Premium hardcover preparation, including jacket and case design considerations.',
    description:
      'For authors who want a premium physical edition, we prepare hardcover-ready files, accounting for jacket design, case wrap, and the production details that make a hardcover feel considered.',
  },
  {
    slug: 'amazon-kdp-publishing',
    number: '09',
    title: 'Amazon KDP Publishing',
    summary: 'Files prepared and formatted to meet Amazon KDP publishing requirements.',
    description:
      'We prepare and format your manuscript and cover files to meet Amazon KDP publishing requirements for both eBook and print formats, guiding you through setup and submission.',
  },
  {
    slug: 'global-publishing',
    number: '10',
    title: 'Global Publishing',
    summary: 'Publishing and distribution support designed to make your book available to readers worldwide.',
    description:
      'We help authors take their books beyond a single marketplace with global publishing and distribution support. From preparing publication-ready files to coordinating international availability, we help make your work accessible to readers across multiple markets.',
  },
  {
    slug: 'isbn-registration',
    number: '11',
    title: 'ISBN Registration',
    summary: 'Guidance through the ISBN registration process for your edition.',
    description:
      'We guide authors through the ISBN registration process for their book editions, helping you understand what each format needs and how to keep your publishing records organized.',
  },
  {
    slug: 'book-marketing',
    number: '12',
    title: 'Book Marketing',
    summary: 'Launch and promotional strategy built around your book and your audience.',
    description:
      'We help authors plan a book marketing approach — from launch positioning to ongoing promotion — tailored to the book, the genre, and the audience it is written for.',
  },
  {
    slug: 'author-branding',
    number: '13',
    title: 'Author Branding',
    summary: 'A consistent visual and voice identity across your books and platforms.',
    description:
      'Your author brand is the thread that connects every book you publish. We help define a consistent visual identity and voice that carries across covers, websites, and promotional materials.',
  },
  {
    slug: 'author-website-design',
    number: '14',
    title: 'Author Website Design',
    summary: 'A dedicated website that gives readers a home to discover you and your books.',
    description:
      'We design author websites that give readers a proper home to discover your books, your story, and how to reach you — built with the same editorial care as your book itself.',
  },
]

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)