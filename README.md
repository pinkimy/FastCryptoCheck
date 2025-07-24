# 🚀 FastCryptoCheck

[![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-0f9d58?logo=fastapi)](https://fastapi.tiangolo.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**FastCryptoCheck** — This is an asynchronous, very simple example of a FastAPI service for tracking cryptocurrency rates.

---

## 🔍 Possibilities

- 📡 Get up-to-date cryptocurrency rates
- ⚡ Fast responses through caching
- 📦 Asynchronous requests `aiohttp`
- 💡 Easy to set up and expand

---

## 📁 Project structure

```
FastCryptoCheck/
│
├──frontend/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── src/
│ ├── main.py
│ ├── route.py
│ ├── config.py
│ ├── http_client.py
│ ├── init.py #
│ └── config.py
│
└── README.md

```

---

## ⚙️ Installation

```bash
git clone https://github.com/pinkimy/FastCryptoCheck.git
cd FastCryptoCheck
python -m venv venv
source venv/bin/activate  or venv\Scripts\activate на Windows
pip install -r requirements.txt

```

---

## 🚀 Run

```bash

cd src
uvicorn app:main --reload

```

Go to: http://127.0.0.1:8000/docs - Swagger UI

Or: http://127.0.0.1:8000/currencies — list of currencies

---

## 🪪 License

The project is distributed under the MIT license.
Free to use, distribute and improve 🙌

---
