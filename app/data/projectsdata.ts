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
    longDescription: 'Aplicación de escritorio desarrollada en .NET 10 con WPF que permite monitorear en tiempo real los precios de items del mercado de Counter-Strike 2. Incluye sistema de alertas, histórico de precios y análisis de tendencias.',
    technologies: ['.NET 10', 'WPF', 'Entity Framework', 'SQLite'],
    githubUrl: 'https://github.com/JoePinoOG/PriceCheckerCS2',
    images: [
      '/projects/cs2-monitor-1.png',
      '/projects/cs2-monitor-2.png',
      '/projects/cs2-monitor-3.png'
    ],
    features: [
      'Monitoreo en tiempo real de precios',
      'Sistema de alertas configurables',
      'Histórico y gráficos de tendencias',
      'Interfaz intuitiva con WPF',
      'Base de datos local con SQLite'
    ],
    challenges: 'El principal desafío fue implementar un sistema eficiente de actualización en tiempo real sin sobrecargar la API del mercado de Steam.',
    outcome: 'La aplicación logró reducir el tiempo de análisis de mercado para multiples items simultaneamente.'
  },
  {
    slug: 'comunity-app',
    title: 'Comunity Android App',
    description: 'Private Social Application for Community Engagement.',
    longDescription: 'Aplicación móvil social privada construida con Ionic y TypeScript, con backend en Django REST Framework. Permite a comunidades cerradas compartir contenido, eventos y comunicarse de forma segura.',
    technologies: ['TypeScript', 'Django REST Framework', 'PostgreSQL', 'Ionic'],
    githubUrl: 'https://github.com/JoePinoOG/BackendComunity',
    images: [
      '/projects/comunity-1.png',
      '/projects/comunity-2.png',
      '/projects/comunity-3.png'
    ],
    features: [
      'Sistema de autenticación seguro',
      'Feed de publicaciones en tiempo real',
      'Gestión de eventos comunitarios',
      'Chat grupal e individual',
      'Notificaciones push'
    ],
    challenges: 'Implementar un sistema de permisos granular que permitiera diferentes niveles de acceso según el rol del usuario.',
    outcome: 'La app fue adoptada por una junta vecinal local, mejorando la comunicación y participación comunitaria.'
  },
  {
    slug: 'mi-portfolio',
    title: 'My Portfolio',
    description: 'Portfolio personal construido con Next.js y TailwindCSS.',
    longDescription: 'Portfolio personal desarrollado con las últimas tecnologías web, utilizando Next.js 14 con App Router, TypeScript para type safety, y TailwindCSS para un diseño moderno y responsive.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/JoePinoOG/portfolio',
    images: [
      '/projects/portfolio-1.png',
      '/projects/portfolio-2.png'
    ],
    features: [
      'Diseño responsive y moderno',
      'Optimización SEO',
      'Páginas dinámicas para proyectos',
      'Animaciones suaves'
    ]
  }
];