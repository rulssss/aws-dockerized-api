# 🚀 AWS Dockerized API

Project focused on containerizing a simple API and pushing an optimized image to AWS ECR following DevOps best practices.

---

## 🧠 Objective

Build a Docker image that is:

* Lightweight
* Reproducible
* Free of embedded secrets
* Ready for cloud environments

---

## 🧱 Stack

* Node.js (Express)
* Docker
* AWS ECR

---

## 📁 Project Structure

```
.
├── app/
│   ├── index.js
│   └── package.json
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## ⚙️ Features

* `/` endpoint (basic response)
* `/health` endpoint (health check)
* Structured JSON logs
* Environment variables support

---

## 🐳 Build Image

```bash
docker build -t dockerized-api:v1 .
```

---

## ▶️ Run Locally

```bash
docker run -p 3000:3000 dockerized-api:v1
```

Available endpoints:

* http://localhost:3000
* http://localhost:3000/health

---

## ☁️ Push to AWS ECR

```bash
# Login
aws ecr get-login-password --region sa-east-1 | \
docker login --username AWS --password-stdin <account-id>.dkr.ecr.sa-east-1.amazonaws.com

# Tag
docker tag dockerized-api:v1 <account-id>.dkr.ecr.sa-east-1.amazonaws.com/dockerized-api:v1

# Push
docker push <account-id>.dkr.ecr.sa-east-1.amazonaws.com/dockerized-api:v1
```

---

## 🗄️ Database

This project integrates with AWS DynamoDB.

Table:

* name: tasks
* primary key: id (string)

Endpoints:

* POST /tasks → create task
* GET /tasks → list tasks

---

## 🏗 Architecture

Client → ALB → ECS Fargate → Container (Node.js API) → DynamoDB

---

## ☁️ AWS Services Used

* ECS (Fargate)
* ECR
* Application Load Balancer
* DynamoDB
* IAM
* CloudWatch Logs

---

## 🌐 Public Endpoints

* GET /health → returns service status
* GET /tasks → list tasks
* POST /tasks → create task

---

## 🔐 Security

* No secrets in code
* IAM roles for access (Task Role)
* Security Groups configured with least privilege

---

## 🚀 Deployment

1. Build Docker image
2. Push to ECR
3. Update ECS Service
4. Force new deployment

---

## 🧠 Best Practices Applied

* Lightweight base image (`node:alpine`)
* Use of `.dockerignore`
* Layer caching optimization (dependencies separated)
* Non-root user execution
* No credentials inside the image
* Structured JSON logging
* `/health` endpoint for monitoring

---

## 💰 Cost Control

* Fargate tasks scaled to minimum (1 task)
* DynamoDB in on-demand mode
* Resources stopped when not in use

---

## 📦 Result

Versioned Docker image (`v1`) stored in AWS ECR, ready for cloud deployments.

---

## 🎯 Learnings

* Docker image building and optimization
* Working with container registries (ECR)
* Real-world workflow: build → tag → push
* Cloud container best practices

---

## 🧠 Lessons Learned

* Difference between Task Role and Execution Role
* Debugging ALB health checks
* Handling multi-architecture Docker images (ARM vs AMD64)
* Networking issues with Security Groups
