# 📘 BookDev-Technology

![FastAPI](https://img.shields.io/badge/FastAPI-async--ready-green?logo=fastapi)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-blue?logo=next.js)
![Transformers](https://img.shields.io/badge/NLP-HuggingFace-orange?logo=huggingface)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**BookDev-Technology** is a full-stack, AI-driven application that showcases the integration of cutting-edge technologies like face recognition, real-time inference, and intelligent language models — designed for performance, scalability, and innovation.

---

## 🚀 Features

### 🔍 Face & Image Intelligence
- Face detection and quality scoring using **InsightFace** and **MTCNN**
- Multi-image comparison to determine the best quality face
- GPU-accelerated image processing (NVIDIA RTX compatible)

### 🤖 Language Intelligence (NLP)
- Integrates Hugging Face’s `transformers` (e.g., **DialoGPT**) for:
  - AI chat responses
  - Smart suggestions
  - Text generation

### 🔐 Authentication & Access Control
- OAuth2 login with **JWT token**
- Modular `Auth` system using FastAPI dependencies

### 🌐 Real-Time Communication
- **WebSocket** support via FastAPI for live chat and streaming responses

### 🛢️ Hybrid Database System
- **PostgreSQL** for relational data
- **MongoDB** (via `motor`) for flexible, async-ready NoSQL storage

---

## 🧩 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | [Next.js](https://nextjs.org/) |
| Backend     | [FastAPI](https://fastapi.tiangolo.com/) + [Uvicorn](https://www.uvicorn.org/) |
| AI Models   | InsightFace, MTCNN, TensorFlow |
| NLP Model   | DialoGPT (via [Hugging Face Transformers](https://huggingface.co/transformers/)) |
| Auth        | OAuth2 + JWT |
| Database    | PostgreSQL + MongoDB (Motor) |
| Realtime    | FastAPI WebSocket |
| GPU Support | RTX 3060 / 4050 compatible |

---

## 🧪 Example Endpoints

### 🔐 Login
```http
POST /login
