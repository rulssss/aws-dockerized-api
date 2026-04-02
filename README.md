# 🚀 AWS Dockerized API

Proyecto enfocado en containerizar una API simple y subir una imagen optimizada a AWS ECR siguiendo buenas prácticas de DevOps.

---

## 🧠 Objetivo

Construir una imagen Docker que sea:

* Liviana
* Reproducible
* Sin secretos embebidos
* Lista para ser utilizada en entornos cloud

---

## 🧱 Stack

* Node.js (Express)
* Docker
* AWS ECR

---

## 📁 Estructura del proyecto

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

## ⚙️ Funcionalidades

* Endpoint `/` (respuesta básica)
* Endpoint `/health` (healthcheck)
* Logs estructurados en JSON
* Uso de variables de entorno

---

## 🐳 Build de la imagen

```bash
docker build -t dockerized-api:v1 .
```

---

## ▶️ Ejecutar localmente

```bash
docker run -p 3000:3000 dockerized-api:v1
```

Endpoints disponibles:

* http://localhost:3000
* http://localhost:3000/health

---

## ☁️ Subida a AWS ECR

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

## 🧠 Buenas prácticas aplicadas

* Imagen base liviana (`node:alpine`)
* Uso de `.dockerignore`
* Optimización de cache (dependencias separadas)
* Ejecución como usuario no root
* Sin credenciales en la imagen
* Logs estructurados en JSON
* Endpoint `/health` para monitoreo

---

## 📦 Resultado

Imagen Docker versionada (`v1`) almacenada en AWS ECR, lista para ser utilizada en despliegues cloud.

---

## 🎯 Aprendizajes

* Construcción y optimización de imágenes Docker
* Uso de registries (ECR)
* Flujo real: build → tag → push
* Buenas prácticas de contenedores en cloud
