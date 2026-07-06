import minishell from "../assets/Minishell.mp4"

const hiveProjects = [
    {
        id: 'p1',
        title: 'Minishell',
        video: minishell,
        description: 'A C-based Unix shell project that implements command parsing, pipes, redirections, heredocs, environment expansion, built-in commands, and signal handling.',
        para1: 'Minishell is a pair-programmed, from-scratch implementation of a simplified Unix shell written in C. It recreates core shell behavior, including interactive command input, history, tokenization, parsing, execution of external programs, and support for pipes and redirections. It also handles quoting rules, environment variable expansion, heredocs, and built-in commands such as cd, echo, pwd, export, unset, env, and exit.\n\n Working on the project in a pair made the development process more collaborative and iterative, with both of us contributing to design decisions, debugging, and implementation details across parsing, execution, and process management. The project also covers lower-level systems programming topics like file descriptor control, terminal behavior, and signal handling.', 
        para2: 'This project allowed me to discover how a shell works under the hood and how Unix process execution is coordinated. I learned how to manage pipes, redirections, and heredocs while keeping memory and file descriptors under control. It also gave me practical experience working with readline, termios, and signals in a real interactive application.\n\nBecause this was my first group project at Hive, I had the opportunity to improve my communication around technical decisions, review code, and divide complex work into clear responsibilities. Minishell was a strong exercise in low-level C programming, state management, and building reliable behavior from OS primitives.',
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