const fullstack = [
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
        title: 'ft_transcendence (Final Hive project)',
        description: 'A comprehensive full-stack web platform featuring a local multi-player arcade engine, secure social layer, user authentication, and comprehensive metrics tracking.',
        para1: 'ft_transcendence serves as the comprehensive capstone application of the Hive Helsinki curriculum, combining a client-side arcade engine with a modern social network architecture. The platform orchestrates a shared-screen, local multi-player gaming interface (Pong/Block Battle) built around high-frequency frame rendering loops and immediate-input controller polling. Beyond the gameplay layer, the system manages asynchronous friend systems, global match history tables, and interactive leaderboards, all protected by a defense-in-depth security approach featuring secure session management and hashed user storage.\n\nDeveloped as a multi-engineer team project, the platform acts as an excellent study in distributed web architecture. It highlights the successful integration of a component-driven frontend, a relational database model, and a robust RESTful API optimized for data integrity and comprehensive profile tracking.',
        para2: '• Deterministic Game Loop & Physics Engine:\nEngineered a high-frequency client-side rendering loop to manage real-time game states, processing rapid velocity updates, paddle vector adjustments, and precise wall-collision matrices.\n\n• Shared-Device Input Mapping:\nDesigned an asynchronous event listener pipeline to handle concurrent, dual-player input processing on a single keyboard layout, preventing key-jamming conflicts and maintaining deterministic gameplay loops.\n\n• End-to-End Security & Identity:\nEngineered a secure user identity pipeline implementing multi-factor or OAuth2 authentication loops, protected JWT session state handling, and secure database password encryption.\n\n• Complex Relational Schema Design:\nModeled transactional database schemas to seamlessly manage concurrent user records, friend matrices, multi-tiered match histories, and live leaderboard data while preserving relational integrity.\n\n• Agile System Integration:\nCoordinated in an agile team environment to manage cross-cutting features, utilizing continuous integration habits to merge independent UI components and backend route groups into a stable production pipeline.',
        tech: ['TypeScript', 'Node.js / Python', 'PostgreSQL', 'Docker Compose', 'Git', 'CSS / HTML5 Canvas'],
        repo: 'https://github.com/ThomasParratt/ft_transcendence'
    },
    {
        id: 'p3',
        clickable: false,
        title: 'Timetable App',
        description: 'Enables the user to create an A4 printable classroom schedule for Berlitz Helsinki.',
        tech: ['React', 'JavaScript', 'Node'],
        repo: 'https://github.com/ThomasParratt/day_schedule',
        live: 'https://day-schedule.vercel.app/'
    }
]

export default fullstack