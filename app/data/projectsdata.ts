export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  features: string[];
  challenges?: string;
  outcome?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'cs2-marketmonitor',
    title: 'CS2 MarketMonitor',
    description: 'Desktop Application for Real-Time Price Monitoring of CS2 Items.',
    longDescription: 'Desktop application developed in .NET 10 with WPF that enables real-time monitoring of Counter-Strike 2 market item prices. Includes an alert system, price history, and trend analysis.',
    technologies: ['.NET 10', 'WPF', 'Entity Framework', 'SQLite'],
    githubUrl: 'https://github.com/JoePinoOG/PriceCheckerCS2',
    images: [
      '/projects/cs2-monitor-1.png',
      '/projects/cs2-monitor-2.png',
      '/projects/cs2-monitor-3.png'
    ],
    features: [
      'Real-time price monitoring',
      'Configurable alert system',
      'Price history and trend charts',
      'Intuitive WPF user interface',
      'Local database powered by SQLite'
    ],
    challenges: 'The main challenge was implementing an efficient real-time update system without overloading the Steam market API.',
    outcome: 'The application reduced the time required to analyze the market for multiple items simultaneously.'
  },
  {
    slug: 'argo-travels',
    title: 'Argo project',
    description: 'Argo project, a travel notes community platform.',
    longDescription: 'Argo is a community platform for sharing travel notes and experiences. Built with .NET 8 for the backend and Angular 19, i worked developing the comment and admin system modules.',
    technologies: ['TypeScript', '.NET 8', 'PostgreSQL', 'Angular 19'],
    githubUrl: 'https://github.com/JoePinoOG',
    images: [
      '/projects/argo-1.png',
      '/projects/argo-2.png',
      '/projects/argo-3.png',
      '/projects/argo-4.png',
      '/projects/argo-5.png',
      '/projects/argo-6.png',
      '/projects/argo-7.png',
      '/projects/argo-8.png',
    ],
    features: [
      'Comment system module',
      'Real-time posts feed',
      'Admin dashboard and moderation tools',
      'likes and user interactions'
    ],
    challenges: 'implementing a scalable comment system that could handle high traffic and user interactions while maintaining performance.',
    outcome: 'The platform pass the estress tests and now supports a growing community of travel enthusiasts.'
  },
  {
    slug: 'mi-portfolio',
    title: 'My Portfolio',
    description: 'Personal portfolio built with Next.js and TailwindCSS.',
    longDescription: 'Personal portfolio developed with modern web technologies, using Next.js 14 with the App Router, TypeScript for type safety, and TailwindCSS for a modern, responsive design.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/JoePinoOG/portfolio',
    images: [
      '/projects/portfolio-1.png',
      '/projects/portfolio-2.png'
    ],
    features: [
      'Responsive, modern design',
      'SEO optimization',
      'Dynamic project pages',
      'Smooth animations'
    ]
  }
];