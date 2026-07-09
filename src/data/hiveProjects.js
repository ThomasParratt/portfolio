import minishell from "../assets/Minishell.mp4"
import cub3d from "../assets/cub3d.gif"

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
        title: 'cub3D',
        image: cub3d,
        description: 'A raycasting engine written in C that recreates a Wolfenstein-style 3D view from a 2D map, with textured walls, player movement, collision detection, and a toggleable minimap.',
        para1: 'Cube3D was a pair project where we built a small 3D game engine in C using the MLX42 graphics library. The goal was to render a first-person view from a 2D .cub map by casting rays into the scene, detecting wall intersections, and drawing textured wall slices based on the direction the player is facing. The project includes map parsing and validation, texture loading, floor and ceiling colors, movement controls, collision handling, and a minimap that can be shown or hidden during play.\n\nWorking on this project enabled us to discover how classic 3D rendering works under the hood and how a relatively small codebase can still contain a full rendering pipeline, from file parsing all the way to real-time interaction.',
        para2: 'I learned how raycasting transforms 2D map data into a convincing 3D perspective using trigonometry, angles, and distance calculations. I also learned how to manage texture mapping so that wall surfaces stay visually consistent from different viewing angles, and how to structure validation logic to reject malformed maps before the game starts. Because this was a pair project, I also strengthened my teamwork skills by dividing responsibilities, coordinating implementation details, and keeping the codebase consistent across parsing, rendering, and player movement systems.',
        tech: ['C', 'Makefile'],
        repo: 'https://github.com/ThomasParratt/cube3D'
    },
    {
        id: 'p3',
        title: 'ft_irc',
        description: 'A C++ IRC server that manages multiple clients, channels, and core IRC commands (e.g., JOIN, PART, PRIVMSG), with an event-driven server loop and robust message handling.',
        para1: 'This was a group project completed with two other teammates. We implemented a functional IRC-style server in C++ that accepts multiple client connections, maintains channel and user state, parses and routes protocol messages, and supports common IRC commands such as JOIN, PART, PRIVMSG, TOPIC, KICK, MODE, WHO, and INVITE. The server is structured around modular components for client handling, channel management, command processing, and a central event loop to handle I/O and command dispatch. The emphasis was on protocol-correct behavior, clear state management, and resilient handling of edge cases (invalid commands, disconnected clients, permission checks).',
        para2: '- Practical network programming: building a stable server that accepts connections, reads/writes messages, and manages multiple clients concurrently.\n- Event-driven I/O and concurrency trade-offs (select/poll-style loops and careful state coordination).\n- Protocol parsing and robust message handling: validating inputs, formatting responses, and enforcing command semantics.\n- C++ software design: organizing functionality into clean classes and modules, resource management, and debugging complex interactions.\n- Team collaboration: dividing features, coordinating via Git, code review, and integrating different parts into a cohesive system.\n- Testing and hardening: handling edge cases, connection drops, and ensuring predictable server behavior under load.',
        tech: ['C++', 'Makefile'],
        repo: 'https://github.com/ThomasParratt/ft_irc'
    },
    {
        id: 'p4',
        title: 'ft_transcendence',
        description: 'The final project at Hive. A full-stack multiplayer game platform built in a group project, featuring real-time Pong and Block Battle, user accounts, friend management, and match tracking.',
        para1: 'We built ft_transcendence as a multiplayer browser game platform that combines classic arcade gameplay with modern social and account features. The app includes user authentication, profile management, friend requests, online status, game invitations, and real-time gameplay. Players can jump into Pong or Block Battle, track their performance, and interact with others through a shared social layer. As a group project, it required us to divide responsibilities across frontend, backend, game logic, and real-time communication while keeping the whole system consistent and responsive.',
        para2: 'This project taught me how to work on a full-stack application from end to end, especially how the frontend, backend, database, and realtime features depend on each other. I gained experience collaborating in a team, coordinating tasks, and integrating separate parts of the codebase without breaking the overall flow. I also learned more about secure authentication, API design, and building an interface that stays usable across different screen sizes. Most importantly, I learned how to make practical technical decisions as part of a team and keep the user experience in focus while working on a complex project.',
        tech: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'SQLite'],
        repo: 'https://github.com/ThomasParratt/ft_transcendence'
    }
]

export default hiveProjects