# 🚗 Vehicle Configuration App (MERN Stack + Docker)

A full-stack MERN application to manage car models, variants, colors, features, and accessories.

---

## 📁 Project Structure

```
.
├── backend/
│   ├── Dockerfile.backend
│   ├── .env
│   └── ... (source files)
├── frontend/
│   ├── Dockerfile.frontend
│   ├── .env
│   └── ... (source files)
├── docker-compose.yml
└── README.md

```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Amitgadodiya1/vehicleConfiguration.git
cd vehicleConfiguration
```

### 2. Add `.env` Files

create  the file and place as:

```
backend/.env
frontend/.env
```

- **backend/.env**
```env
MONGO_URI=mongodb://mongo:27017/vehicle_db
API_KEY=b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f
```

- **frontend/.env**
```env
REACT_APP_API_KEY=b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

---

### 3. Build & Run with Docker 

```bash
docker compose up --build
```

- 🚀 Backend: `http://localhost:5000`
- 🌐 Frontend: `http://localhost:3000`

---

## 🔐 Authorization

This project currently uses an x-api-key header to authorize API requests. This approach was chosen to quickly secure endpoints without implementing full-fledged authentication logic during the initial development phase.

All API calls require the following header:
```
x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f
```

**🔒 Future Scope: Use JWT (JSON Web Token) Authentication**

- To transition this application to production-ready standards, we plan to implement JWT-based authentication. JWT allows:

- Secure login and user identification.

- Short-lived, expirable tokens to enhance protection.

Authorization based on user roles and scopes.

Stateless authentication, suitable for microservices and scaling.

API calls will then use the header:
```
Authorization: Bearer <token>
```
----

## 🔌 API Endpoints

> Base URL: `http://localhost:5000/api/`

---

### 📦 Models

#### ➕ Create Model
```bash
curl -X POST http://localhost:5000/api/models \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "LS 500", "description": "Powerful luxury", "image": "https://example.com/image.jpg", "variants": []}'
```

#### 📅 Get All Models
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/models
```

#### 📅 Get Model by ID
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/models/<model_id>
```

#### ✏️ Update Model
```bash
curl -X PUT http://localhost:5000/api/models/<model_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "LS 300", "description": "Powerful luxury", "image": "https://example.com/image.jpg", "variants": []}'
```

#### ❌ Delete Model
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/models/<model_id>
```

---

### 🧹 Variants

#### ➕ Create Variant
```bash
curl -X POST http://localhost:5000/api/variants \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "LS 500h", "model": "<model_id>", "colors": [], "accessories": [], "features": []}'
```

#### 📅 Get All Variants
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/variants
```

#### ✏️ Update Variant
```bash
curl -X PUT http://localhost:5000/api/variants/<variant_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "LS 500h", "model": "<model_id>", "colors": [], "accessories": [], "features": []}'
```

#### ❌ Delete Variant
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/variants/<variant_id>
```

---

### 🎨 Colors

#### ➕ Create Color
```bash
curl -X POST http://localhost:5000/api/colors \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "Matador Red", "hexCode": "#69121d", "price": 8168567}'
```

#### 📅 Get All Colors
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/colors
```

#### ✏️ Update Color
```bash
curl -X PUT http://localhost:5000/api/colors/<color_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "Matador Red Mica", "hexCode": "#69121d", "price": 8168567}'
```

#### ❌ Delete Color
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/colors/<color_id>
```

---

### 🏫 Accessories

#### ➕ Create Accessory
```bash
curl -X POST http://localhost:5000/api/accessories \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "All-Weather Floor Liners", "image": "https://example.com/image.jpg", "category": "<category_id>"}'
```

#### 📅 Get All Accessories
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/accessories
```

#### ✏️ Update Accessory
```bash
curl -X PUT http://localhost:5000/api/accessories/<accessory_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "All-Weather Floor", "image": "https://example.com/image.jpg", "category": "<category_id>"}'
```

#### ❌ Delete Accessory
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/accessories/<accessory_id>
```

---

### ✈️ Features

#### ➕ Create Feature
```bash
curl -X POST http://localhost:5000/api/features \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "ABS", "mediaType": "video", "mediaUrl": "https://youtu.be/abc123", "category": "<category_id>"}'
```

#### 📅 Get All Features
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/features
```

#### ✏️ Update Feature
```bash
curl -X PUT http://localhost:5000/api/features/<feature_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "ABS", "mediaType": "video", "mediaUrl": "https://youtu.be/abc123", "category": "<category_id>"}'
```

#### ❌ Delete Feature
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/features/<feature_id>
```

---

### 🗂 Categories

#### ➕ Create Category
```bash
curl -X POST http://localhost:5000/api/categories \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "Accessories", "type": "accessory"}'
```

#### 📅 Get All Categories
```bash
curl -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/categories
```

#### ✏️ Update Category
```bash
curl -X PUT http://localhost:5000/api/categories/<category_id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" \
  -d '{"name": "Accessories", "type": "accessory"}'
```

#### ❌ Delete Category
```bash
curl -X DELETE -H "x-api-key: b5a1f5d9-7c11-42ee-a8b6-bf3fa14c9d1f" http://localhost:5000/api/categories/<category_id>
```

---

## 🧪 Seeding the Database

```bash
docker exec -it <backend_container_id> node seed.js
```
> Get `backend_container_id` from `docker ps`

---

## 📌 Notes

- MongoDB is only exposed internally to the backend.
- Change ports in `docker-compose.yml` if needed.

---

