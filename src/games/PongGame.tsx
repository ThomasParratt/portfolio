import { useEffect, useRef } from "react";

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let gameState: 'menu' | 'playing' | 'result' = 'menu'; // Start in menu mode
    let twoPlayerMode = false; // Default is one-player mode

    // Game Constants
    const PADDLE_WIDTH = 15; 
    const PADDLE_HEIGHT = 110;
    const PADDLE_SPEED = 500;
    const BALL_SIZE = 15;
    const BUFFER = 15;
    const MAX_BALL_SPEED = 1500;
    const WINNING_SCORE = 5;
    const AI_UPDATE_INTERVAL = 1000;
    const INITIAL_BALLSPEED_X = 800;
    const INITIAL_BALLSPEED_Y = 25;
    const PONG_UP_1 = 'q';
    const PONG_DOWN_1 = 's';
    const PONG_UP_2 = 'o';
    const PONG_DOWN_2 = 'k';

    let lastTime = performance.now();
    let aiLastUpdateTime: number = 0;
    let aiTargetY = (canvas.height - PADDLE_HEIGHT) / 2; // AI's current target
    const paddleWidth = 10, paddleHeight = 100;
    const ballSize = 10;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    let player1Y = (canvasHeight - paddleHeight) / 2;
    let player2Y = (canvasHeight - paddleHeight) / 2;
    let ballX = canvasWidth / 2, ballY = canvasHeight / 2;
    let ballSpeedX = 5, ballSpeedY = 3;
    const paddleSpeed = 6;
    let playerNames = ["Tom", "Jacob"];
    let player1 = playerNames[Math.floor(Math.random() * 2)];
    let player2 = playerNames[Math.floor(Math.random() * 2)];
    while (player2 === player1) {
    // If player2 is the same as player1, select a new player2
    player2 = playerNames[Math.floor(Math.random() * 2)];
    }
    let winner = player1;
    let player1Score = 0;
    let player2Score = 0;

    // To track which keys are currently pressed
    const keysPressed: { [key: string]: boolean } = {}; // Object to track key presses

    document.addEventListener('keydown', (e) => {
        if (gameState === 'menu') {
            if (e.key === '1') {
                twoPlayerMode = false; // One player mode (AI plays as Player 2)
                player2 = "AI"; // Set player2 to "AI" explicitly
                gameState = 'playing';
                resetGame();
            } else if (e.key === '2') {
                twoPlayerMode = true; // Two-player mode
                player2 = playerNames[Math.floor(Math.random() * 2)];
                // Ensure player2 is not the same as player1
                while (player2 === player1) {
                    player2 = playerNames[Math.floor(Math.random() * 2)];
                }
                winner = player1
                gameState = 'playing';
                resetGame();
            }
        } else {
            if (e.key === 'Escape') {
                gameState = 'menu'; // Return to the menu screen
                resetGame(); // Reset game variables
            } else {
                keysPressed[e.key] = true; // Handle normal game input
            }
        }
    });


    document.addEventListener('keyup', (e) => {
        keysPressed[e.key] = false;
    });

    function resetGame() {
        player1Y = (canvasHeight - paddleHeight) / 2;
        player2Y = (canvasHeight - paddleHeight) / 2;
        ballX = canvasWidth / 2 - BALL_SIZE / 2 + 1.5;
        ballY = canvasHeight / 2;
        ballSpeedX = 0;
        ballSpeedY = 0;
    
        setTimeout(() => {
        if (twoPlayerMode) {
            ballSpeedX = INITIAL_BALLSPEED_X * (Math.random() > 0.5 ? 1 : -1);
            ballSpeedX = INITIAL_BALLSPEED_Y * (Math.random() > 0.5 ? 1 : -1);
        }
        else {
            ballSpeedX = INITIAL_BALLSPEED_X * -1;
            ballSpeedX = INITIAL_BALLSPEED_Y * (Math.random() > 0.5 ? 1 : -1);
        }
        }, 1000); // 1000ms = 1 second delay
        player1Score = 0;
        player2Score = 0;
    }

    // Predict where the ball will go along the Y-axis when it reaches the target X (AI's paddle)
    function predictBallY(ballX: number, ballY: number, ballVX: number, ballVY: number, targetX: number): number {
        while (ballX < targetX) { // as long as the ball hasn't passed the target X position

        // calculates the time it takes for the ball to hit either the top or bottom wall of the canvas
        const timeToWallY = ballVY > 0 
            ? (canvasHeight - ballY - BALL_SIZE) / ballVY 
            : -ballY / ballVY;

        // calculates the time it will take for the ball to travel horizontally to the target X position
        const timeToTargetX = (targetX - ballX) / ballVX;
    
        // simulates ball movement
        if (timeToWallY < timeToTargetX) { // the ball will hit the wall before it reaches the target
            ballX += ballVX * timeToWallY;
            ballY += ballVY * timeToWallY;
            ballVY *= -1; // Ball bounces when it hits the wall
        } 
        else { // the ball will reach the target X before hitting any wall
            ballX += ballVX * timeToTargetX;
            ballY += ballVY * timeToTargetX;
            break ; // ball reaches target
        }
        }
        return ballY; // Return the predicted Y position of the ball
    }


    /*function updatePlayerPositions() {
        // Player 1 movement (W and S keys)
        if (keysPressed['w']) player1Y -= paddleSpeed;
        if (keysPressed['s']) player1Y += paddleSpeed;

        if (twoPlayerMode) {
            // Player 2 movement (ArrowUp and ArrowDown keys)
            if (keysPressed['ArrowUp']) player2Y -= paddleSpeed;
            if (keysPressed['ArrowDown']) player2Y += paddleSpeed;
        } else {
            // AI movement for Player 2
            const lerpSpeed = 0.1; // Smooth movement
            player2Y += (ballY - (player2Y + paddleHeight / 2)) * lerpSpeed;
        }

        // Ensure paddles stay within bounds
        player1Y = Math.max(0, Math.min(canvasHeight - paddleHeight, player1Y));
        player2Y = Math.max(0, Math.min(canvasHeight - paddleHeight, player2Y));
    }*/

    function updatePlayerPositions(deltaTime: number) {
        // Player 1 movement
        if (keysPressed[PONG_UP_1])
            player1Y -= PADDLE_SPEED * deltaTime;
        if (keysPressed[PONG_DOWN_1]) 
            player1Y += PADDLE_SPEED * deltaTime;

        if (twoPlayerMode && player2) {
        // Player 2 movement
        if (keysPressed[PONG_UP_2]) 
            player2Y -= PADDLE_SPEED * deltaTime;
        if (keysPressed[PONG_DOWN_2]) 
            player2Y += PADDLE_SPEED * deltaTime;
        } 
        else {

            if (!player2)
                return ;

            if (ballSpeedX < 0) {
                player1Y = Math.max(0, Math.min(canvasHeight - PADDLE_HEIGHT, player1Y));
                player2Y = Math.max(0, Math.min(canvasHeight - PADDLE_HEIGHT, player2Y));
                return ; //Prevents unnecessary calculations if the ball is moving away from the AI paddle
            }

            const now = performance.now();

            if (now - aiLastUpdateTime >= 1000) {
                aiTargetY = predictBallY(
                    ballX, ballY,
                    ballSpeedX, ballSpeedY,
                    canvasWidth - PADDLE_WIDTH - BUFFER
                );
                aiLastUpdateTime = now;
            }
            // Move paddle smoothly toward predicted Y
            const paddleCenter = player2Y + PADDLE_HEIGHT / 2;

            if (paddleCenter < aiTargetY - PADDLE_SPEED * deltaTime) {
                player2Y += PADDLE_SPEED * deltaTime;
            } else if (paddleCenter > aiTargetY + PADDLE_SPEED * deltaTime) {
                player2Y -= PADDLE_SPEED * deltaTime;
            }
        }
        player1Y = Math.max(0, Math.min(canvasHeight - PADDLE_HEIGHT, player1Y));
        player2Y = Math.max(0, Math.min(canvasHeight - PADDLE_HEIGHT, player2Y));
    }


    // Game Loop
    function gameLoop(currentTime: number) {
        const deltaTime = (currentTime - lastTime) / 1000; // seconds
        lastTime = currentTime;

        if (gameState === 'menu') {
            drawMenu();
        } 
        else if (gameState === 'result') {
            drawResult();
        }
        else {
            update(deltaTime);
            draw();
        }
        requestAnimationFrame(gameLoop);
    }


    //START FROM HERE NOW!!

    function update() {
        updatePlayerPositions();
        // Ball Movement
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Collision with top and bottom
        if (ballY <= 0 || ballY + ballSize >= canvasHeight) ballSpeedY *= -1;

        // Player 1 paddle collision
        if (ballX === paddleWidth + 15 &&
            ballY + ballSize >= player1Y &&
            ballY <= player1Y + paddleHeight) {

                ballSpeedX *= -1;

                /* // Calculate where the ball hit the paddle
                const hitPos = (ballY + ballSize / 2) - (player1Y + paddleHeight / 2); //how far the ball's center is from the paddle's center vertically
                const normalized = hitPos / (paddleHeight / 2); // Value between -1 and 1
                ballSpeedY = normalized * 3; // Max vertical speed */
        }

        // Player 2 paddle collision
        if (ballX + ballSize === canvasWidth - paddleWidth - 15 &&
            ballY + ballSize >= player2Y &&
            ballY <= player2Y + paddleHeight) {

                ballSpeedX *= -1;

                /* // Calculate where the ball hit the paddle
                const hitPos = (ballY + ballSize / 2) - (player2Y + paddleHeight / 2);
                const normalized = hitPos / (paddleHeight / 2); // Value between -1 and 1
                ballSpeedY = normalized * 3; // Max vertical speed */
        }

        // Reset ball if missed and count score
        if (ballX < 0) {
            player2Score++;
            if (player2Score === 5) {
                gameState = 'result';
                winner = player2;
            }
            resetBall();
        }
        if (ballX > canvasWidth) {
            player1Score++;
            if (player1Score === 5) {
                gameState = 'result';
            }
            resetBall();
        }
    }

    function resetBall() {
        ballX = canvasWidth / 2;
        ballY = canvasHeight / 2;
        ballSpeedX = -ballSpeedX;
        ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
    }

    function drawResult() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = 'white';
        ctx.font = "30px 'Courier New', monospace";
        const pong = winner + " is the winner!";
        const pongWidth = ctx.measureText(pong).width;
        ctx.fillText(pong, (canvasWidth * 0.5) - (pongWidth / 2), canvasHeight / 4);
    }

    function drawMenu() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = 'white';
        ctx.font = "100px 'Courier New', monospace";
        const pong = "PONG";
        const pongWidth = ctx.measureText(pong).width;
        ctx.fillText(pong, (canvasWidth * 0.5) - (pongWidth / 2), canvasHeight / 4);

        ctx.font = "30px 'Courier New', monospace"; 
        const text1 = "vs computer (Press '1')";
        const text1Width = ctx.measureText(text1).width;
        const text2 = "vs human (Press '2')";
        const text2Width = ctx.measureText(text2).width;

        ctx.fillText(text1, (canvasWidth * 0.5) - (text1Width / 2), canvasHeight / 2);
        ctx.fillText(text2, (canvasWidth * 0.5) - (text2Width / 2), canvasHeight / 2 + 50);
    }

    function draw() {
        // Clear canvas
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Draw player paddles
        ctx.fillStyle = 'white';
        ctx.fillRect(15, player1Y, paddleWidth, paddleHeight);

        ctx.fillRect((canvasWidth - paddleWidth) - 15, player2Y, paddleWidth, paddleHeight);

        // Draw centre line
        for (let i = 0; i < canvasHeight; i+=canvasHeight/20)
            ctx.fillRect(canvasWidth / 2, i, 3, canvasHeight / 40);

        // Draw ball
        ctx.fillRect(ballX, ballY, ballSize, ballSize);

        //Draw scores
        ctx.font = "50px 'Courier New', monospace";
        
        /* ctx.fillText("" + player1Score, canvasWidth * 0.25, 70);
        ctx.fillText("" + player2Score, canvasWidth * 0.75, 70); */

        // Calculate the width of the text for player 1 and adjust to centre
        const player1Text = player1 + ": " + player1Score;
        const player1TextWidth = ctx.measureText(player1Text).width;
        ctx.fillText(player1Text, (canvasWidth * 0.25) - (player1TextWidth / 2), 70);

        // Calculate the width of the text for player 2 and adjust to centre
        const player2Text = player2 + ": " + player2Score;
        const player2TextWidth = ctx.measureText(player2Text).width;
        ctx.fillText(player2Text, (canvasWidth * 0.75) - (player2TextWidth / 2), 70);
    }

    gameLoop();
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border rounded shadow-md bg-white"
      />
    </div>
  );
}
