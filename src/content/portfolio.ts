import celesteCover from '@/assets/books/celeste-front.jpeg'
import johnCover from '@/assets/books/john-front.png'
import pennyCover from '@/assets/books/penny-front.png'
import sharonCover from '@/assets/books/sharon-front.png'

export interface PortfolioItem {
  id: string
  category: string
  title: string
  format: string
  description: string
  cover: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'celeste',
    category: 'Published Book',
    title: 'Celeste',
    format: 'Cover Design · Publishing',
    description: 'Published book project by Origin Books Publishing.',
    cover: celesteCover,
  },
  {
    id: 'john',
    category: 'Published Book',
    title: 'John',
    format: 'Cover Design · Publishing',
    description: 'Published book project by Origin Books Publishing.',
    cover: johnCover,
  },
  {
    id: 'penny',
    category: 'Published Book',
    title: 'Penny',
    format: 'Cover Design · Publishing',
    description: 'Published book project by Origin Books Publishing.',
    cover: pennyCover,
  },
  {
    id: 'sharon',
    category: 'Published Book',
    title: 'Sharon',
    format: 'Cover Design · Publishing',
    description: 'Published book project by Origin Books Publishing.',
    cover: sharonCover,
  },
]