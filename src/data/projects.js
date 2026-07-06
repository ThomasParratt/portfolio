const projects = [
    {
        id: 'p1',
        title: 'School Management System',
        description: 'A full-stack school management system for handling users, courses, class sessions, and enrollments with role-based dashboards for instructors and students.',
        para1: 'School Management System is a full-stack web application built to simplify the administration of courses, class sessions, and student enrollments in a school environment. The platform includes secure JWT-based authentication, role-based access control, and separate experiences for instructors and students. Instructors can manage users, create and update courses, organize sessions, and oversee enrollments, while students can view their enrolled courses and upcoming lessons through a dedicated dashboard.\n\nThe project combines an Express and Prisma backend with a React, TypeScript, and Vite frontend, and it is designed to run cleanly in Docker for easy setup and deployment. It also includes OpenAPI documentation, automated testing with Vitest, and Bruno API collections for exploring and validating the API.',
        para2: 'This project strengthened my understanding of full-stack application design, especially how to connect a typed frontend to a structured backend API. I learned how to model real-world relationships such as users, courses, sessions, and enrollments in Prisma, and how to keep business rules consistent across routes, validation, and tests.\n\nI also gained practical experience with role-based UI and backend authorization, Docker-based development workflows, and API documentation and testing. Building both the admin and student experiences helped me think more carefully about user needs, data flow, and maintainability across the entire stack.',
        tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt', 'Docker'],
        repo: 'https://github.com/ThomasParratt/school-system'
    },
    {
        id: 'p2',
        title: 'Pong!',
        description: 'My version of the classic Pong game written in TypeScript. Can be played alone (vs Computer) or with a friend.',
        tech: ['React', 'TypeScript', 'Node'],
        liveInternal: '/pong'
    },
    {
        id: 'p3',
        title: 'Timetable App',
        description: 'Enables the user to create an A4 printable classroom schedule for Berlitz Helsinki.',
        tech: ['React', 'JavaScript', 'Node'],
        repo: 'https://github.com/ThomasParratt/day_schedule',
        live: 'https://day-schedule.vercel.app/'
    },
    {
        id: 'p4',
        title: 'CLI Word Guesser',
        description: 'A CLI version of Wordle written in C++. Just clone, compile, execute and play!',
        tech: ['C++'],
        repo: 'https://github.com/ThomasParratt/word_game'
    },
    {
        id: 'p5',
        title: 'React Word Guesser',
        description: 'My version of Wordle written in React and Tailwind CSS.',
        tech: ['React', 'JavaScript', 'Tailwind CSS'],
        repo: 'https://github.com/ThomasParratt/portfolio',
        live: 'https://word-guesser-iota.vercel.app/'
    },
    {
        id: 'p6',
        title: 'Portfolio',
        description: 'Check out the code for this site.',
        tech: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/ThomasParratt/portfolio'
    }
]

export default projects