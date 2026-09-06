const projects = [
    {
        id: 'p1',
        title: 'School Management System (MVP)',
        description: 'A full-stack school management system for handling users, courses, class sessions, and enrollments with role-based dashboards for instructors and students.',
        para1: 'The School Management System is a production-ready, full-stack enterprise web application designed to optimize the administration of courses, class sessions, and student enrollments. Inspired by real-world feedback from students and employees at a local language school, the platform features a secure JWT-based authentication system and strict role-based access control (RBAC) across three distinct user archetypes: Administrators, Instructors, and Students.\n\nThe architecture pairs an Express and Prisma (PostgreSQL) backend with a type-safe React, TypeScript, and Vite frontend. Built with environment parity in mind, the entire ecosystem is containerized with Docker, fully documented via the OpenAPI Specification, and guarded by an automated Vitest testing suite triggered via GitHub Actions.',
        para2: '• Type-Safe Full-Stack Architecture:\nConnected a tightly typed TypeScript frontend to a structured relational backend API, ensuring compile-time safety.\n\n• Relational Data Modeling:\nArchitected complex database schemas and many-to-many relationships using Prisma ORM, ensuring strict data integrity.\n\n• Granular Role-Based Authorization:\nImplemented robust backend middleware and dynamic frontend routing to securely separate data management workflows.\n\n• Production-Grade DevOps Workflows:\nUtilized Docker Compose to eliminate environment configuration drift and engineered an automated CI pipeline.',
        tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt', 'Docker'],
        repo: 'https://github.com'
    },

    {
        id: 'p2',
        clickable: false,
        title: 'Pong!',
        description: 'My version of the classic Pong game written in TypeScript. Can be played alone (vs Computer) or with a friend.',
        tech: ['React', 'TypeScript', 'Node'],
        liveInternal: '/pong'
    },
    {
        id: 'p3',
        clickable: false,
        title: 'Timetable App',
        description: 'Enables the user to create an A4 printable classroom schedule for Berlitz Helsinki.',
        tech: ['React', 'JavaScript', 'Node'],
        repo: 'https://github.com/ThomasParratt/day_schedule',
        live: 'https://day-schedule.vercel.app/'
    },
    {
        id: 'p4',
        clickable: false,
        title: 'CLI Word Guesser',
        description: 'A CLI version of Wordle written in C++. Just clone, compile, execute and play!',
        tech: ['C++'],
        repo: 'https://github.com/ThomasParratt/word_game'
    },
    {
        id: 'p5',
        clickable: false,
        title: 'React Word Guesser',
        description: 'My version of Wordle written in React and Tailwind CSS.',
        tech: ['React', 'JavaScript', 'Tailwind CSS'],
        repo: 'https://github.com/ThomasParratt/portfolio',
        live: 'https://word-guesser-iota.vercel.app/'
    },
    {
        id: 'p6',
        clickable: false,
        title: 'Portfolio',
        description: 'Check out the code for this site.',
        tech: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/ThomasParratt/portfolio'
    }
]

export default projects