import { useEffect, useRef } from "react";

export default function PongGameFace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let gameState: 'playing' | 'result' = 'playing'; // Start in playing mode
    let twoPlayerMode = false; // Default is one-player mode

    const ballImg = new Image();
    ballImg.src = '/me.jpg'; 
    ballImg.onload = () => {
        // Only start the game loop once the image is loaded
        gameLoop(performance.now());
    };
    
    // Optional: handle errors
    ballImg.onerror = () => {
        console.error("Failed to load ball image");
    };

    // Game Constants
    const PADDLE_WIDTH = 15; 
    const PADDLE_HEIGHT = 110;
    const PADDLE_SPEED = 500;
    const BALL_SIZE = 50;
    const BUFFER = 15;
    const MAX_BALL_SPEED = 1500;
    const WINNING_SCORE = 5;
    const AI_UPDATE_INTERVAL = 1000;
    const INITIAL_BALLSPEED_X = 450;
    const INITIAL_BALLSPEED_Y = 20;
    const PONG_UP_1 = 'q';
    const PONG_DOWN_1 = 's';
    const PONG_UP_2 = 'o';
    const PONG_DOWN_2 = 'k';

    let lastTime = performance.now();
    let aiLastUpdateTime: number = 0;
    let aiTargetY = (canvas.height - PADDLE_HEIGHT) / 2; // AI's current target
    const paddleWidth = 10, paddleHeight = 100;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    let player1Y = (canvasHeight - paddleHeight) / 2;
    let player2Y = (canvasHeight - paddleHeight) / 2;
    let ballX = canvasWidth / 2, ballY = canvasHeight / 2;
    let ballSpeedX = INITIAL_BALLSPEED_X * (Math.random() > 0.5 ? 1 : -1);
    let ballSpeedY = INITIAL_BALLSPEED_Y * (Math.random() > 0.5 ? 1 : -1);
    let playerNames = ["Player 1", "Player 2"];
    let player1 = playerNames[0];
    let player2 = playerNames[1];
    let winner = player1;
    let player1Score = 0;
    let player2Score = 0;

    // To track which keys are currently pressed
    const keysPressed: { [key: string]: boolean } = {}; // Object to track key presses

    document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                //gameState = 'menu'; // Return to the menu screen
                resetGame(); // Reset game variables
            } else {
                keysPressed[e.key] = true; // Handle normal game input
            }
    });


    document.addEventListener('keyup', (e) => {
        keysPressed[e.key] = false;
    });

    function resetGame() {
        if (!player1 || !player2)
            return ;

        player1Y = (canvasHeight - PADDLE_HEIGHT) / 2;
        player2Y = (canvasHeight - PADDLE_HEIGHT) / 2;
        ballReset(twoPlayerMode, canvasWidth, canvasHeight);
        player1Score = 0;
        player2Score = 0;

        /*player1Y = (canvasHeight - paddleHeight) / 2;
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
        player2Score = 0;*/
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

            if (now - aiLastUpdateTime >= AI_UPDATE_INTERVAL) {
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

        /*if (gameState === 'menu') {
            drawMenu();
        }*/
        if (gameState === 'result') {
            drawResult();
        }
        else {
            update(deltaTime);
            draw();
        }
        requestAnimationFrame(gameLoop);
    }

    function ballMove(deltaTime: number) {
        ballX += ballSpeedX * deltaTime;
        ballY += ballSpeedY * deltaTime;
    }

    function checkCollisions(player1Y, player2Y, canvasHeight, canvasWidth) {
        // Ball collision with top and bottom
        if (ballY <= 0) {
            ballY = 0; // Push ball back inside. Fixes wall "hugging"
            ballSpeedY *= -1;
        } 
        else if (ballY + BALL_SIZE >= canvasHeight) {
            ballY = canvasHeight - BALL_SIZE; // Push ball back inside. Fixes wall "hugging"
            ballSpeedY *= -1;
        }


        // Player 1 paddle collision
        if (ballX <= PADDLE_WIDTH + BUFFER && ballY + BALL_SIZE >= player1Y && ballY <= player1Y + PADDLE_HEIGHT) {
            //this.currentRallyLen++;
            const hitPos = (ballY + BALL_SIZE / 2) - (player1Y + PADDLE_HEIGHT / 2); // calculates the difference between the centres of the ball and the paddle
            const normalized = hitPos / (PADDLE_HEIGHT / 2); // -1 (top) to 1 (bottom)
        
            const bounceAngle = normalized * Math.PI / 4; // -1 (-45 degrees) to 1 (+45 degrees)
            const speed = Math.sqrt(ballSpeedX ** 2 + ballSpeedY ** 2); // keep same speed after bounce (pythagoras)
        
            const newSpeed = Math.min(speed * 1.025, MAX_BALL_SPEED);
            ballSpeedX = Math.cos(bounceAngle) * newSpeed; // reflected to right
            ballSpeedY = Math.sin(bounceAngle) * speed;
        
            // Make sure ball is moving right
            if (ballSpeedX < 0) 
                ballSpeedX *= -1;
        }

        // Player 2 paddle collision
        if (ballX + BALL_SIZE >= canvasWidth - PADDLE_WIDTH - BUFFER && ballY + BALL_SIZE >= player2Y && ballY <= player2Y + PADDLE_HEIGHT) {
            //this.currentRallyLen++;
            const hitPos = (ballY + BALL_SIZE / 2) - (player2Y + PADDLE_HEIGHT / 2);
            const normalized = hitPos / (PADDLE_HEIGHT / 2);
        
            const bounceAngle = normalized * Math.PI / 4;
            const speed = Math.sqrt(ballSpeedX ** 2 + ballSpeedY ** 2);
        
            const newSpeed = Math.min(speed * 1.025, MAX_BALL_SPEED);
            ballSpeedX = -Math.cos(bounceAngle) * newSpeed; // reflected to left
            ballSpeedY = Math.sin(bounceAngle) * speed;
        
            if (ballSpeedX > 0) 
                ballSpeedY *= -1;
        }
    }

    function ballReset(twoPlayerMode, canvasWidth, canvasHeight) {
        /*if (this.currentRallyLen > this.longestRally)
            this.longestRally = this.currentRallyLen;
        this.totalHits += this.currentRallyLen;
        this.pointsPlayed++;
        this.currentRallyLen = 0;*/
        ballX = canvasWidth / 2 - BALL_SIZE / 2 + 1.5;
        ballY = canvasHeight / 2;
    
        // Pause the ball temporarily
        ballSpeedX = 0;
        ballSpeedY = 0;
    
        setTimeout(() => {
        if (twoPlayerMode) {
            ballSpeedX = INITIAL_BALLSPEED_X * (Math.random() > 0.5 ? 1 : -1);
            ballSpeedY = INITIAL_BALLSPEED_Y * (Math.random() > 0.5 ? 1 : -1);
        }
        else {
            ballSpeedX = INITIAL_BALLSPEED_X * -1;
            ballSpeedY = INITIAL_BALLSPEED_Y * (Math.random() > 0.5 ? 1 : -1);
        }
        }, 1000); // 1000ms = 1 second delay
  }

    function update(deltaTime: number) {
        if (gameState == "playing")
        {
            if (!player1 || !player2)
                return ;
            updatePlayerPositions(deltaTime);
            ballMove(deltaTime);
            checkCollisions(player1Y, player2Y, canvasHeight, canvasWidth);

            // Reset ball if missed and count score
            if (ballX < 0) {
                player2Score++;
                if (player2Score === WINNING_SCORE) {
                    gameState = 'result';
                    //this.averageRally = this.ball.totalHits / this.ball.pointsPlayed;
                    winner = player2;
                    //this.duration = performance.now() - this.startTime;
                }
                ballReset(twoPlayerMode, canvasWidth, canvasHeight);
            }

            if (ballX > canvasWidth) {
                player1Score++;
                if (player1Score === WINNING_SCORE) {
                    gameState = 'result';
                    //this.averageRally = this.ball.totalHits / this.ball.pointsPlayed;
                    winner = player1;
                    //this.duration = performance.now() - this.startTime;
                }
                ballReset(twoPlayerMode, canvasWidth, canvasHeight);
            }
        }
    }

    function drawResult() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = 'white';
        ctx.font = "30px 'font-sans', monospace";
        const pong = winner + " is the winner!";
        const pongWidth = ctx.measureText(pong).width;
        ctx.fillText(pong, (canvasWidth * 0.5) - (pongWidth / 2), canvasHeight / 4);
    }

    /*function drawMenu() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = 'white';
        ctx.font = "100px 'font-sans', monospace";
        const pong = "PONG";
        const pongWidth = ctx.measureText(pong).width;
        ctx.fillText(pong, (canvasWidth * 0.5) - (pongWidth / 2), canvasHeight / 4);

        ctx.font = "30px 'font-sans', monospace"; 
        const text1 = "vs computer (Press '1')";
        const text1Width = ctx.measureText(text1).width;
        const text2 = "vs human (Press '2')";
        const text2Width = ctx.measureText(text2).width;

        ctx.fillText(text1, (canvasWidth * 0.5) - (text1Width / 2), canvasHeight / 2);
        ctx.fillText(text2, (canvasWidth * 0.5) - (text2Width / 2), canvasHeight / 2 + 50);
    }*/

    function draw() {
        // Clear canvas
        //ctx.fillStyle = 'black';
        //ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // 50% transparent white
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw player paddles
        ctx.fillStyle = 'black';
        ctx.fillRect(15, player1Y, paddleWidth, paddleHeight);

        ctx.fillRect((canvasWidth - paddleWidth) - 15, player2Y, paddleWidth, paddleHeight);

        // Draw centre line
        for (let i = 0; i < canvasHeight; i+=canvasHeight/20)
            ctx.fillRect(canvasWidth / 2, i, 3, canvasHeight / 40);

        // Draw ball
        if (ballImg.complete) { // only draw if image loaded
            ctx.drawImage(ballImg, ballX, ballY, BALL_SIZE, BALL_SIZE);
        } else {
            ctx.fillStyle = 'black';
            ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
        }

        //Draw scores
        ctx.font = "50px 'font-sans', monospace";
        
        /* ctx.fillText("" + player1Score, canvasWidth * 0.25, 70);
        ctx.fillText("" + player2Score, canvasWidth * 0.75, 70); */

        // Calculate the width of the text for player 1 and adjust to centre
        //const player1Text = player1 + ": " + player1Score;
        const player1Text = player1Score.toString();
        const player1TextWidth = ctx.measureText(player1Text).width;
        ctx.fillText(player1Text, (canvasWidth * 0.25) - (player1TextWidth / 2), 70);

        // Calculate the width of the text for player 2 and adjust to centre
        //const player2Text = player2 + ": " + player2Score;
        const player2Text = player2Score.toString();
        const player2TextWidth = ctx.measureText(player2Text).width;
        ctx.fillText(player2Text, (canvasWidth * 0.75) - (player2TextWidth / 2), 70);
    }

    //gameLoop(performance.now());
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <canvas
        ref={canvasRef}
        width={600}
        height={450}
        className="border rounded shadow-md bg-transparent"
      />
    </div>
  );
}
