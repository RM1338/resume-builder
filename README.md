# 📄 Resume Builder Pro

**Resume Builder Pro** is a professional resume builder web application built using the **MERN stack**, designed to help users create **ATS-optimized resumes** in under 5 minutes. It features a **glassmorphic UI**, **real-time preview**, and **multi-format export options**, combining functionality with elegant design.

---

## 🚀 Overview

Resume Builder Pro empowers users to craft high-quality resumes using intelligent form management, customizable templates, and secure cloud-based storage. Whether preparing for interviews or career transitions, this platform ensures your resume stands out and passes through Applicant Tracking Systems (ATS) seamlessly.

---

## ✨ Key Features

- **User Authentication:** Secure JWT-based registration and login system  
- **10+ Professional Templates:** ATS-optimized templates for multiple industries  
- **Real-Time Editor:** Dynamic live preview with instant updates  
- **Section Management:** Add, edit, reorder, and remove sections easily  
- **Smart Auto-Save:** Automatically saves data every 30 seconds  
- **Multi-Format Export:** Export resumes as PDF, DOCX, and TXT  
- **Resume Dashboard:** Track views and downloads for each resume  
- **Theme Customization:** Choose from multiple color schemes and fonts  
- **Cloud Storage:** MongoDB Atlas for secure and scalable storage  
- **Responsive Design:** Optimized for desktop and mobile  
- **Glassmorphic Interface:** Modern translucent visuals with animations  
- **ATS Optimization:** Structured layout and keyword suggestions

---

## 🛠️ Tech Stack

**Frontend**
- React 18 (Functional Components, Hooks, Context API)
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React
- React Hot Toast
- Date-fns

**Backend**
- Node.js with Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Bcrypt.js
- Express Validator
- Helmet

---

## 📸 UI Highlights

- **Glassmorphic dashboards** for resume management  
- **Side-by-side editor and live preview** interface  
- **Analytics dashboard** with usage insights  
- **Professional color schemes** and **template previews**

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18 or later)
- MongoDB Atlas account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/RM1338/resume-builder-pro.git
cd resume-builder-pro
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:
```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file inside the `client` directory:
```bash
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## 📂 Project Structure
```
resume-builder/
│
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── router.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend Node.js app
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` — Register new user  
- `POST /api/auth/login` — Login user  
- `GET /api/auth/me` — Get current user profile  
- `PUT /api/auth/profile` — Update profile  
- `POST /api/auth/logout` — Logout user  

### Resume
- `GET /api/resumes` — Get all resumes  
- `GET /api/resumes/:id` — Get resume by ID  
- `POST /api/resumes` — Create new resume  
- `PUT /api/resumes/:id` — Update resume  
- `DELETE /api/resumes/:id` — Delete resume  
- `POST /api/resumes/:id/duplicate` — Duplicate resume  

---

## 🧠 Future Enhancements

- PDF/DOCX export with jsPDF and Puppeteer  
- LinkedIn profile import  
- AI-powered resume suggestions  
- Template marketplace  
- Collaborative editing  
- Version history tracking  
- Email-based resume sharing  
- Advanced analytics dashboard  

---

## 🎯 Development Phases

**Phase 1: Core Foundation (✅ Completed)**
- Authentication  
- MongoDB setup  
- Basic CRUD  
- Dashboard  
- Responsive UI  

**Phase 2: Resume Builder (🚧 In Progress)**
- Dynamic form sections  
- Real-time preview  
- Template selection  
- Auto-save  

**Phase 3: Advanced Features (📋 Planned)**
- PDF/DOCX generation  
- Cloud image storage  
- LinkedIn integration  
- Customization options  

---

## 🧑‍💻 Author

**Ronel Abraham Mathew**  
[LinkedIn](https://www.linkedin.com/in/ronelm) • [GitHub](https://github.com/RM1338)

---

## 🤝 Contributing

Contributions are welcome:

```bash
# 1. Fork the repo
# 2. Create a new branch
git checkout -b feature/AmazingFeature
# 3. Commit changes
git commit -m 'Add some AmazingFeature'
# 4. Push branch
git push origin feature/AmazingFeature
# 5. Open a Pull Request
```

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- MongoDB Atlas  
- Vite  
- Tailwind CSS  
- React Community  

---

## 📞 Support

- **Email:** rma80070@gmail.com  
- **LinkedIn:** [Ronel Abraham Mathew](https://www.linkedin.com/in/ronelm)  
- **GitHub Issues:** [Report bugs](https://github.com/RM1338/resume-builder-pro/issues)

---

**⭐ Star this repository if you found it useful!**