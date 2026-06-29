const hiveProjects = [
    {
        id: 'p1',
        title: 'Minishell',
        description: 'A Bash-like Unix shell. Replicates basic shell functionalities including command parsing, execution with pipes and redirections, built-in commands, environment variable management, and signal handling.',
        detailed: 'Minishell is a simplified implementation of a Unix shell written in C. It replicates basic shell functionalities including command parsing, execution with pipes and redirections, built-in commands, environment variable management, and signal handling. This project was developed as part of the 42 school curriculum to deepen understanding of process control, system calls, and memory management in C.', 
        tech: ['C', 'Makefile'],
        repo: 'https://github.com/ThomasParratt/minishell'
    },
    {
        id: 'p2',
        title: 'ft_irc',
        description: 'An Internet Relay Chat server implemented in C++ that follows the IRC protocol.',
        tech: ['C++', 'Makefile'],
        repo: 'https://github.com/ThomasParratt/ft_irc'
    },
    {
        id: 'p3',
        title: 'cub3D',
        description: 'A project that uses raycasting to render a dynamic view within a maze.',
        tech: ['C', 'Makefile'],
        repo: 'https://github.com/ThomasParratt/cube3D'
    },
    {
        id: 'p4',
        title: 'ft_transcendence',
        description: 'The final project at Hive. A full-stack web application that allows users to play two games. Features include user authentication, friend management, real-time multiplayer gaming, and tournament functionality.',
        tech: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'SQLite'],
        repo: 'https://github.com/ThomasParratt/ft_transcendence'
    }
]

export default hiveProjects