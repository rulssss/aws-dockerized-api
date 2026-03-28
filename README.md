# 🚀 AWS Dockerized API

Proyecto enfocado en construir, optimizar y distribuir una API containerizada siguiendo buenas prácticas de DevOps y cloud.

---

## 🧠 Objetivo

Containerizar una API simple y prepararla para entornos reales en la nube.

Este proyecto busca:

* Crear una API mínima pero profesional
* Construir una imagen Docker eficiente
* Versionar la imagen correctamente
* Prepararla para ser subida a un registry (AWS ECR)

---

## 🧱 Stack

* Node.js (Express)
* Docker
* AWS (ECR en siguientes fases)

---

## 📁 Estructura del proyecto

```
aws-dockerized-api/
│
├── app/
│   ├── package.json
│   └── index.js
│
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## ⚙️ Funcionalidades

* API HTTP básica
* Endpoint `/` (respuesta simple)
* Endpoint `/health` (healthcheck para cloud)
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

Endpoints:

* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/health](http://localhost:3000/health)

---

## 🧠 Buenas prácticas aplicadas

### 🔹 Imagen liviana

* Uso de `node:alpine`
* Uso de `.dockerignore`

### 🔹 Builds eficientes

* Separación de dependencias (`package.json`) para aprovechar cache

### 🔹 Seguridad

* No se incluyen secretos en la imagen
* Uso de variables de entorno
* Ejecución como usuario no root

### 🔹 Observabilidad

* Logs estructurados en JSON
* Endpoint de healthcheck para monitoreo

---

## 🚫 Consideraciones

* No incluir credenciales en el código
* Mantener la imagen lo más pequeña posible
* Evitar dependencias innecesarias

---

## 📦 Próximos pasos

* Subir la imagen a AWS ECR
* Versionado de imágenes (v1, v2, latest)
* Integración con CI/CD
* Deploy en contenedores (ECS / Fargate)

---

## 🎯 Objetivo final

Construir una base sólida para aplicaciones cloud-native, siguiendo prácticas reales utilizadas en entornos profesionales.
