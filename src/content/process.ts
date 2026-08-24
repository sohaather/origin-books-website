export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Manuscript Review',
    description:
      'We start by reviewing your manuscript and understanding your goals for the book — genre, audience, and the formats you want to publish in.',
  },
  {
    step: '02',
    title: 'Editing & Proofreading',
    description:
      'Your manuscript moves through developmental, line, and copy editing, followed by a final proofread.',
  },
  {
    step: '03',
    title: 'Design & Formatting',
    description:
      'We design your cover and format your interior for the editions you are publishing — eBook, paperback, or hardcover.',
  },
  {
    step: '04',
    title: 'Typesetting & File Preparation',
    description:
      'Interiors are typeset and files are prepared to meet the technical requirements of your chosen publishing and distribution platforms.',
  },
  {
    step: '05',
    title: 'Publishing & Distribution',
    description:
      'We guide you through publishing on platforms such as Amazon KDP and IngramSpark, including ISBN registration where needed.',
  },
  {
    step: '06',
    title: 'Marketing & Author Branding',
    description:
      'Once your book is live, we help you plan a launch and build an author brand and website that supports your next release.',
  },
]
