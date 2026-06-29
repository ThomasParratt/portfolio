const hiveProjects = [
    {
        id: 'p1',
        title: 'Minishell',
        description: 'A C-based Unix shell project that implements command parsing, pipes, redirections, heredocs, environment expansion, built-in commands, and signal handling.',
        para1: 'Minishell is a from-scratch implementation of a simplified Unix shell written in C. It recreates the core behavior of a real shell, including interactive command input with history, parsing and tokenizing user commands, executing binaries through the system PATH, and managing pipes and redirections. It also supports heredocs, quoted strings, environment-variable expansion, and the $? exit status, while handling built-in commands such as cd, echo, pwd, export, unset, env, and exit. Beyond the visible shell behavior, the project required careful low-level systems work: process management, file descriptor handling, signal control, memory management, and terminal behavior through readline and termios. Minishell was built as part of the 42 curriculum and was a strong exercise in understanding how an operating system executes commands, routes input and output, and coordinates child processes.', 
        para2: 'Beyond the visible shell behavior, the project required careful low-level systems work: process management, file descriptor handling, signal control, memory management, and terminal behavior through readline and termios. Minishell was built as part of the 42 curriculum and was a strong exercise in understanding how an operating system executes commands, routes input and output, and coordinates child processes.',
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