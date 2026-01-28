## 🛒 E-Commerce Web App (MERN Stack)

A full-stack e-commerce web application with user and seller dashboards, product management, cart system, and order handling.

## 🚀 Features

👤 User

Browse products by category

--View product details
--Add products to cart
--Add delivery address
--Place and view orders

Login / Signup

🧑‍💼 Seller

--Seller authentication
--Add new products
--View product list
--Manage customer orders

🛠️ Tech Stack

Frontend

React.js
React Router DOM
Tailwind CSS
Context API
Axios
React Hot Toast

Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Multer (for image upload)



## 📂 Project Structure
```
bash
frontend/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── context/
 │   └── App.jsx

backend/
 ├── models/
 ├── routes/
 ├── controllers/
 ├── middleware/
 └── server.js
```

## ⚙️ Installation & Setup
```
bash
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

🔹 Frontend Setup
cd frontend
npm install
npm run dev

Runs the frontend on:
http://localhost:5173


🔹 Backend Setup
cd backend
npm install
npm start

Server runs on:
http://localhost:5000
```

## 🔐 Environment Variables (Backend)
Create a .env file inside the backend folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


## 🔗 API Endpoints (Sample)
Auth
POST /api/user/register
POST /api/user/login
POST /api/seller/login
Products
POST /api/product/add
GET /api/product/list
Cart & Orders
POST /api/cart/add
POST /api/order/place
GET /api/order/user
📸 Screens
Home Page
Product Listing
Product Details
Cart Page
Seller Dashboard
Orders Page


## 🤝 Contributing
Pull requests are welcome.
For major changes, please open an issue first.

## 🧑‍💻 Author
Himanshi Bisht
Frontend & Backend Developer
