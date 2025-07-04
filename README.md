# React Spreadsheet UI

A modern, customizable spreadsheet interface built with React, TypeScript, and Vite.  
Features multiple tabs, custom toolbars, dynamic columns, and a clean, responsive UI.

## ✨ Features

- Spreadsheet-like table with editable cells
- Multiple sheets/tabs support
- Customizable columns and mock data
- Toolbar with spreadsheet actions
- Bottom tab bar navigation
- Reusable UI components (Avatar, Button, Input)
- Built with React, TypeScript, Vite, and Tailwind CSS

## 📁 Project Structure

spreadsheet-ui/
├── public/
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── BottomTabBar.tsx
│ │ ├── SpreadsheetHeader.tsx
│ │ ├── SpreadsheetTabs.tsx
│ │ ├── SpreadsheetToolbar.tsx
│ │ ├── TopHeader.tsx
│ │ └── ui/
│ │ ├── avatar.tsx
│ │ ├── button.tsx
│ │ └── input.tsx
│ ├── data/
│ │ ├── columns.tsx
│ │ └── mockData.ts
│ ├── lib/
│ │ └── utils.ts
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── index.html
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md

## 🚀 Getting Started

1. **Clone the repository:**
git clone https://github.com/Shrey1803/Spreadsheet.git
cd Spreadsheet

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm run dev

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📦 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## ⚖️ Trade-offs

- The UI is closely matched to the Figma design, but advanced interactivity and business logic are minimal.
- Responsiveness and accessibility may require additional work beyond the initial UI translation.
- The focus is on visual fidelity; further enhancements are needed for a production-ready, interactive app.


## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.
