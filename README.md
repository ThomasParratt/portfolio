# Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, and React Router. It highlights projects, includes an about section, and ships with small interactive Pong demos.

## Features

- Multi-page layout with React Router
- Responsive, modern UI with Tailwind CSS
- Projects and about sections
- Interactive Pong demos (standard and face-tracking variant)
- Social/contact links

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS
- ESLint

## Docker Deployment Over SSH (Auto Redeploy On Push)

This repo includes a GitHub Actions workflow that redeploys the site to my home server whenever I push to `main`.

### 1) One-time setup on my server

Install Docker and Docker Compose plugin on the server, then create a deploy directory:

```bash
mkdir -p /opt/portfolio
```

### 2) Create a deploy SSH key pair

On your local machine:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/portfolio_deploy_key
```

Add the public key to my server user:

```bash
ssh-copy-id -i ~/.ssh/portfolio_deploy_key.pub user@your-server-ip
```

### 3) Add GitHub Actions secrets (Repository -> Settings -> Secrets and variables -> Actions)

- `SSH_HOST`: my public IP or domain
- `SSH_USER`: ssh user on the server
- `SSH_PRIVATE_KEY`: contents of `~/.ssh/portfolio_deploy_key`
- `DEPLOY_PATH`: deploy directory, for example `/opt/portfolio`

### 4) Push to deploy

Every push to `main` triggers [deploy workflow](.github/workflows/deploy.yml), which:

1. Copies my repo to the server over SSH.
2. Runs `docker compose up -d --build --remove-orphans` remotely.
3. Prunes old dangling images.

### 5) Access my site

The container exposes port `8080` by default (`WEB_PORT` in [docker-compose.yml](docker-compose.yml)).

- LAN test: `http://SERVER_LAN_IP:8080`
- Internet: forward router port `8080` (or place it behind a reverse proxy on `80/443`)