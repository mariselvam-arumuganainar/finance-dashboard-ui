# Finance Dashboard UI

A responsive, component-driven Finance Dashboard built with React and Tailwind CSS to demonstrate UI architecture, state management, and data visualization using mock data.

This project is a **frontend-only assignment** focused on clean UI design, reusable components, and structured state flow rather than backend integration.

---

## 🔗 Live Demo

Netlify: https://assignment-finance-dashboard-ui.netlify.app

GitHub Repository: https://github.com/YOUR_USERNAME/finance-dashboard-ui

---

## 🧠 Objective

The goal of this project is to demonstrate:

- UI thinking and layout structure
- Reusable component architecture
- State management using Context API
- Data visualization using charts
- Role-based UI behavior
- Responsive dashboard design
- Clean and readable code structure

---

## ⚙️ Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React (Vite) | Frontend framework            |
| Tailwind CSS | Styling and responsive layout |
| Recharts     | Data visualization            |
| Context API  | Global state management       |
| Mock Data    | Simulated backend data        |

---

## ✨ Features Implemented

- Dashboard summary cards (balance, stats)
- Time-based visualization (revenue trend)
- Categorical visualization (expense split)
- Transaction list with filtering and sorting
- Role-based UI (Admin / Viewer simulation)
- Insights section
- Modal interactions
- Fully responsive layout
- Modular component structure

---

## 🗂️ Project Structure

```
src/
│
├── components/
│   ├── BalanceCard.jsx
│   ├── ExpenseSplitChart.jsx
│   ├── Header.jsx
│   ├── InsightsCard.jsx
│   ├── Modal.jsx
│   ├── RevenueChart.jsx
│   ├── StatsGrid.jsx
│   └── TransactionSection.jsx
│
├── context/
│   └── DashboardContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧩 Architecture & Design Decisions

- **Vite + React** chosen for fast development and minimal configuration.
- **Tailwind CSS** used for rapid UI development and consistent design system.
- **Context API** used for global state since this is a single dashboard application.
- Components are broken down into **small reusable UI units** for scalability.
- Mock data is centralized in context to simulate a real data layer.
- Role-based UI is simulated to show how the interface adapts for different users.

---

## 🚧 Limitations

- No backend/API integration (intentionally frontend-only)
- No authentication or persistence
- Uses mock data for demonstration

The structure is designed so real APIs and authentication can be integrated easily.

---

## ▶️ Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🌍 Deployment

This project is deployed using Netlify.

Build settings used:

- Build command: `npm run build`
- Publish directory: `dist`

---

## 📌 Notes

This dashboard is intentionally designed to highlight frontend engineering practices including component structure, state flow, and responsive UI rather than production-ready backend features.

## 👨‍💻 Author

**Mariselvam A**  
Full Stack Developer

- Portfolio: https://mariselvam-portfolio.netlify.app
- GitHub: https://github.com/mariselvam-arumuganainar
- LinkedIn: https://www.linkedin.com/in/mariselvam-a-/
