docker build -t 22211tt4921vinhnguyen/devops-backend .

docker run -d --restart=always --name=devops-backend -p 8080:3000 22211tt4921vinhnguyen/devops-backend

docker login -u 22211tt4921vinhnguyen

docker push 22211tt4921vinhnguyen/devops-backend:latest

docker image tag 22211tt4921vinhnguyen/devops-backend 22211tt4921vinhnguyen/devops-backend:1.0

docker push 22211tt4921vinhnguyen/devops-backend:1.0

# List running containers
docker ps

# List all containers
docker ps -a

# Lifecycle container
docker stop devops-backend

docker start devops-backend

docker rm -f devops-backend

# Clean up disk
docker image prune -a

# Show log of a container
docker logs devops-backend