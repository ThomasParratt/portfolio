import minishell from "../assets/Minishell.mp4"
import cub3d from "../assets/cub3d.gif"

const systems = [
    {
        id: 'p1',
        title: 'IRC Server (ft_irc)',
        description: 'An asynchronous, Internet Relay Chat (IRC) server engineered in C++ utilizing non-blocking sockets and an event-driven I/O multiplexing loop.',
        para1: 'This project is a fully functional, production-ready IRC-style network server implemented in C++. The architecture is centred around a highly optimized, single-threaded event loop designed to handle massive client concurrency without the overhead of thread context-switching. It manages the low-level serialization, parsing, and routing of protocol frames while enforcing complex IRC state boundaries for multi-user channels, direct messaging, and privilege escalation.\n\nDeveloped as a multi-engineer team project at Hive Helsinki, the system prioritizes protocol-correct behavior, memory safety, and resilience against socket instabilities.',
        para2: '• Non-Blocking I/O Multiplexing:\nEngineered an event-driven network loop using poll() to handle asynchronous read/write states, managing network buffers dynamically to mitigate incomplete or fragmented packets.\n\n• Strict Protocol Parsing & Validation:\nDesigned an efficient lexical parser to isolate, validate, and dispatch incoming standard IRC commands (JOIN, PRIVMSG, MODE, KICK) while mapping automated numeric reply payloads to clients.\n\n• Resilient Connection Hardening:\nImplemented robust exception and signal mitigation paths to elegantly manage unannounced socket drops, connection timeouts, and memory cleanups without compromising server uptime.\n\n• Scalable Git Workflows:\nCoordinated with two teammates to establish feature-branching strategies, conducting asynchronous code reviews to smoothly integrate independent modules into a unified codebase.',
        tech: ['C++', 'Socket Programming', 'POSIX Networking', 'I/O Multiplexing', 'Makefile', 'Git'],
        repo: 'https://github.com/ThomasParratt/ft_irc'
    },
    {
        id: 'p2',
        title: 'Minishell',
        video: minishell,
        description: 'A custom, low-level Unix shell implementation engineered from scratch in C, featuring piping, redirections, custom signal handling, and environment tracking.',
        para1: 'Minishell is a from-scratch architectural recreation of a simplified Unix shell engineered in C. The system reproduces core kernel-to-user-space patterns including raw tokenization, lexical parsing, and process execution. It manages intricate shell syntax semantics such as literal and variable-expanding quoting states, real-time signal trapping (SIGINT, SIGQUIT), and a concurrent heredoc streaming runtime.\n\nDeveloped via strict peer-programming methodologies at Hive Helsinki, the application emphasizes memory safety, defensive system-call management, and explicit cleanups across process lifecycles. It functions as a robust systems-programming exercise built directly upon raw POSIX operational primitives.',
        para2: '• Process Control & Dynamic Piping:\nEngineered concurrent process execution loops using fork(), coordinating asynchronous pipeline rings via pipe() while enforcing strict parent-child synchronization patterns.\n\n• Advanced File Descriptor Engineering:\nImplemented complex input/output stream mutations using dup2(), safely routing system streams for conditional redirections, appends, and isolated heredoc storage without leaking descriptors.\n\n• State & Memory Lifecycle Security:\nEnforced zero-leak memory paradigms within a long-running interactive loop, designing robust cleanup hooks to purge structures during critical exit conditions and runtime failures.\n\n• Collaborative Systems Architecture:\nUtilized peer-programming principles to divide parsing logic from execution runners, conducting thorough cross-reviews to navigate edge-cases like nested error codes ($?) and terminal termios overrides.',
        tech: ['C', 'Makefile', 'POSIX API', 'Git', 'Valgrind', 'Bash Foundations'],
        repo: 'https://github.com/ThomasParratt/minishell'
    },
    {
        id: 'p3',
        title: 'cub3D',
        description: 'A real-world 3D graphics pipeline engineered in C utilizing raycasting principles, featuring dynamic map validation, texture mapping, and collision vector tracking.',
        para1: 'cub3D is a custom, real-time 3D rendering engine built in C leveraging the MLX42 graphical primitives library. Inspired by classic 90s pseudo-3D engines like Wolfenstein 3D, the application implements a mathematical graphics pipeline that translates raw 2D grid vectors into a projected first-person perspective. The software coordinates complex parsing engines to validate customized configuration assets (.cub), loading texture maps, dynamic floor/ceiling hex definitions, and directional coordinate matrices.\n\nEngineered via strict peer-programming methodologies at Hive Helsinki, the engine features fluid, multi-key player movement controls, vector-calculated collision boundaries, and an asynchronous, togglable visual minimap overlay. The resulting platform demonstrates performance-conscious loops running directly on desktop screen buffers.',
        para2: '• Raycasting & Trigonometric Projection\n\n• Texture Mapping & Sampling Engines:\nEngineered a vertical wall-slice sampling algorithm to accurately map wall textures according to spatial orientations (North/South/East/West), maintaining visual scaling at varied coordinates.\n\n• Defensive File Parsing & Validation:\nDesigned an exhaustive state-machine parser to evaluate incoming map matrices, ensuring clean memory bailouts if missing boundaries, duplicate configurations, or disjointed arrays are detected.',
        tech: ['C', 'MLX42', 'Makefile', 'Git'],
        repo: 'https://github.com/ThomasParratt/cube3D'
    },
    {
        id: 'p4',
        clickable: false,
        title: 'CLI Word Guesser',
        description: 'A CLI version of Wordle written in C++. Just clone, compile, execute and play!',
        tech: ['C++'],
        repo: 'https://github.com/ThomasParratt/word_game'
    },
]

export default systems