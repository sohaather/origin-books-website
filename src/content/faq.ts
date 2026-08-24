export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'What formats do you publish books in?',
    answer:
      'We work across eBook, paperback, and hardcover formats, preparing files that meet the technical requirements of major platforms such as Amazon KDP and IngramSpark.',
  },
  {
    question: 'Do you work with first-time authors?',
    answer:
      'Yes. We work with authors at every stage — from a first manuscript to an established backlist — and tailor our process to where you are.',
  },
  {
    question: 'Can you help if my manuscript still needs editing?',
    answer:
      'Absolutely. Editing and proofreading are core services, and most projects begin there before moving into design, formatting, and publishing.',
  },
  {
    question: 'Do you offer both eBook and print publishing?',
    answer:
      'Yes, we handle eBook, paperback, and hardcover preparation, so you can choose one format or publish across all three.',
  },
  {
    question: 'Where are your authors based?',
    answer:
      'We work with authors worldwide. Our process is designed to run smoothly wherever you are located.',
  },
  {
    question: 'Do I keep the rights to my book?',
    answer:
      'Yes. We provide publishing services on your behalf — you retain ownership and rights to your work.',
  },
]
