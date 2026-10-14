export const portfolioData = {
  personal: {
    name: "Franco Ibañez",
    role: "Estudiante de Ingeniería en Sistemas | Backend & Arquitectura de Software",
    location: "Buenos Aires,Argentina",
    bio: "Estudiante de Ingeniería en Sistemas de Información (UTN). Apasionado por la arquitectura de servicios, el desarrollo backend y bases de datos, con fuerte enfoque en aprendizaje continuo, calidad y trabajo en equipo.",
    cvUrl: "#", // Enlace a tu CV en PDF o Google Drive
    email: "mailto:francoiba038@gmail.com",
  },
  
  social: {
    github: "https://github.com/franmaxi",
    linkedin: "https://www.linkedin.com/in/franco-iba%C3%B1ez/",
    email: "mailto:francoiba038@gmail.com",
  },

  skills: [
    {
      category: "Backend & Lenguajes",
      items: [
        { name: "Java (Spring Boot)" },
        { name: "JavaScript (Express)" },
        { name: "Golang" },
        { name: "C" },
      ]
    },
    {
      category: "Arquitectura & Servicios",
      items: [
        { name: "Microservicios" },
        { name: "RabbitMQ" },
        { name: "APIs REST" },
        { name: "Autenticación JWT" },
      ]
    },
    {
      category: "Bases de Datos",
      items: [
        { name: "MongoDB" },
        { name: "SQL Server" },
        { name: "MySQL" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React" },
        { name: "Next.js" },
        { name: "HTML5" },
        { name: "CSS3" },
      ]
    },
    {
      category: "Paradigmas de Programación",
      items: [
        { name: "Orientado a Objetos (POO)" },
        { name: "Funcional" },
        { name: "Lógico" },
      ]
    },
    {
      category: "Control de Versiones & Herramientas",
      items: [
        { name: "Git" },
        { name: "GitHub" },
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Sistema Distribuido (Sistemas Operativos)",
      description: "Sistema distribuido modular desarrollado en C para la cátedra de Sistemas Operativos (UTN FRBA). Cuenta con arquitectura Master-Worker, almacenamiento distribuido (Storage) y Query Control, comunicados mediante sockets TCP/IP con concurrencia mediante pthreads y serialización.",
      tags: ["C", "Sistemas Distribuidos", "Sockets TCP/IP", "Pthreads", "Linux"],
      githubUrl: "https://github.com/franmaxi/operativos-succeed",
      featured: true,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Simulador de Sistema Operativo en Go",
      description: "Implementación en Go (Golang) de los componentes centrales de un sistema operativo: planificación de procesos en Kernel, simulación de ciclo de instrucciones en CPU, gestión de memoria virtual y módulos de I/O.",
      tags: ["Go (Golang)", "Kernel", "CPU", "Memoria", "Arquitectura"],
      githubUrl: "https://github.com/franmaxi/operativos-failed",
      featured: true,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sudoku Game & Algorithmic Solver",
      description: "Juego y solucionador algorítmico de Sudoku desarrollado en Go (Golang). Diseñado con arquitectura modular que incluye generador y validador de tableros, resolución mediante algoritmos eficientes e interfaz de interacción.",
      tags: ["Go (Golang)", "Algoritmos", "Estructuras de Datos", "Backtracking"],
      githubUrl: "https://github.com/franmaxi/sudoku",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Juego del Pony (Aventura Interactiva POO)",
      description: "Videojuego interactivo desarrollado en Wollok aplicando diseño de software orientado a objetos. Modela la lógica del juego con diagrama de clases, gestión de estados, recolección de items, detección de colisiones y ciclo de juego dinámico.",
      tags: ["Wollok", "Programación Orientada a Objetos", "Diagrama de Clases", "Game Loop"],
      githubUrl: "https://github.com/franmaxi/ponyGame",
      featured: true,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Sweet Medical (Full Stack Monorepo)",
      description: "Plataforma médica desarrollada como monorepo con npm workspaces para Desarrollo de Software (UTN FRBA). Integra frontend reactivo en React, servidor backend REST en Express, testing automatizado end-to-end con Cypress y flujo Gitflow.",
      tags: ["React", "Node.js", "Express", "Monorepo", "Cypress", "REST API"],
      githubUrl: "https://github.com/franmaxi/sweetmedical",
      featured: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    }
  ],

};
