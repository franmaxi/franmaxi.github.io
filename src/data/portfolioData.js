export const portfolioData = {
  personal: {
    name: "Tu Nombre", // Aquí irá tu nombre
    role: "Full Stack Developer & Software Builder",
    location: "Argentina",
    statusBadge: "Disponible para nuevos proyectos y oportunidades",
    bio: "Desarrollador enfocado en construir experiencias web rápidas, modernas y escalables. Me apasiona resolver problemas mediante código limpio, arquitecturas sólidas y un diseño visual de alto impacto.",
    yearsExperience: "2+",
    completedProjects: "10+",
    contributions: "300+",
    cvUrl: "#", // Enlace a tu CV en PDF o Google Drive
  },
  
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "mailto:tuemail@ejemplo.com",
    twitter: "https://x.com/"
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: "Avanzado" },
        { name: "JavaScript (ES6+)", level: "Avanzado" },
        { name: "TypeScript", level: "Intermedio" },
        { name: "HTML5 & CSS3", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Avanzado" },
        { name: "Next.js", level: "Intermedio" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Intermedio" },
        { name: "Express", level: "Intermedio" },
        { name: "Python", level: "Intermedio" },
        { name: "RESTful APIs", level: "Avanzado" },
      ]
    },
    {
      category: "Bases de Datos & Cloud",
      items: [
        { name: "PostgreSQL", level: "Intermedio" },
        { name: "MongoDB", level: "Intermedio" },
        { name: "Firebase", level: "Intermedio" },
        { name: "Supabase", level: "Intermedio" },
      ]
    },
    {
      category: "Herramientas & DevOps",
      items: [
        { name: "Git & GitHub", level: "Avanzado" },
        { name: "Docker", level: "Básico" },
        { name: "Linux / Bash", level: "Intermedio" },
        { name: "Vite / Webpack", level: "Avanzado" },
        { name: "Figma", level: "Intermedio" },
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Full Stack",
      description: "Plataforma de comercio electrónico con autenticación de usuarios, pasarela de pago simulada, carrito de compras reactivo y panel de administración.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/",
      liveUrl: "https://demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Task & Project Manager",
      description: "Aplicación de gestión de tareas colaborativa estilo Kanban con soporte para arrastrar y soltar, comentarios en tiempo real y métricas de productividad.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/",
      liveUrl: "https://demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Dashboard de Análisis Financiero",
      description: "Dashboard interactivo para visualizar métricas financieras, cotizaciones en tiempo real e historiales de transacciones con gráficos dinámicos.",
      tags: ["React", "Chart.js", "CSS Modules", "REST API"],
      githubUrl: "https://github.com/",
      liveUrl: "https://demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "API REST de Autenticación & Usuarios",
      description: "Servicio backend seguro con tokens JWT, hashing de contraseñas, refresco de sesión y control de acceso basado en roles (RBAC).",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/",
      liveUrl: "https://demo.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ],

  timeline: [
    {
      period: "2024 - Presente",
      title: "Full Stack Developer Freelance",
      institution: "Proyectos Independientes",
      description: "Desarrollo de aplicaciones web a medida, optimización de rendimiento y diseño de interfaces interactivas para clientes y proyectos personales."
    },
    {
      period: "2023 - 2024",
      title: "Desarrollo de Software & Algoritmos",
      institution: "Formación Académica / Autodidacta",
      description: "Estudio intensivo de estructuras de datos, programación orientada a objetos, bases de datos relacionales y desarrollo frontend moderno."
    }
  ]
};
