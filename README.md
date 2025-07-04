# 📘 BookDev-Technology
![image](https://github.com/user-attachments/assets/e88ebd28-b28d-499d-a96c-80f40f4b92fa)
![image](https://github.com/user-attachments/assets/3b643427-046d-4e43-b24a-c1edc5d4f79a)
![image](https://github.com/user-attachments/assets/efdbedab-ecc7-4880-b3bd-24d83d736a2e)

![FastAPI](https://img.shields.io/badge/FastAPI-async--ready-green?logo=fastapi)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-blue?logo=next.js)
![Transformers](https://img.shields.io/badge/NLP-HuggingFace-orange?logo=huggingface)
![Databases](https://img.shields.io/badge/Database-MongoDB%20%7C%20PostgreSQL-success?logo=postgresql)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**BookDev-Technology** is a full-stack, AI-driven application that showcases the integration of cutting-edge technologies like face recognition, real-time inference, and intelligent language models — designed for performance, scalability, and innovation.

---

## 🚀 Features

### 🔍 Face & Image Intelligence
- Face detection and quality scoring using **InsightFace** and **MTCNN**
- Multi-image comparison to determine the best quality face
- GPU-accelerated image processing (NVIDIA RTX supported)

### 🤖 Language Intelligence (NLP)
- Built-in **transformers** from Hugging Face (e.g. **DialoGPT**)
- Intelligent chatbot responses and text generation APIs

### 🔐 Authentication & Access Control
- Secure login via OAuth2 + JWT tokens
- FastAPI's `Depends()` system for modular auth

### 🔌 Real-Time Communication
- Live interaction with users using **WebSocket** endpoints

### 🗃️ Hybrid Database Architecture
BookDev-Technology combines the strengths of **relational and non-relational databases**:

| Database     | Role                                                                 |
|--------------|----------------------------------------------------------------------|
| **PostgreSQL** | Stores structured data like user credentials, login history, and system logs |
| **MongoDB**     | Stores flexible/unstructured data like face metadata, image results, embeddings, and AI logs |

- MongoDB is accessed asynchronously via [`motor`](https://motor.readthedocs.io/)
- PostgreSQL is managed using native `psycopg2` or optional ORM tools

---

## 🧩 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | [Next.js](https://nextjs.org/) |
| Backend     | [FastAPI](https://fastapi.tiangolo.com/) + [Uvicorn](https://www.uvicorn.org/) |
| AI Models   | InsightFace, MTCNN, TensorFlow |
| NLP Model   | DialoGPT (Hugging Face Transformers) |
| Auth        | OAuth2 + JWT |
| Databases   | **PostgreSQL** + **MongoDB (via Motor)** |
| Realtime    | FastAPI WebSocket |
| GPU Support | RTX 3060 / 4050 ready |
