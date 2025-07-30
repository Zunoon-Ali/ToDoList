# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Start by watching the video:
🔗 [TodoList App using React, Tailwind & React Icons](https://youtu.be/SBuZSalHLe0?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w)

Keep VS Code open and follow along.

---

### 2. **Create the Project (Vite + React + Tailwind)**

In your terminal:

```bash
npm create vite@latest todolist-app
```

Select:

* Framework: `React`
* Variant: `JavaScript`

Then:

```bash
cd todolist-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. **Setup Tailwind**

Update `tailwind.config.js`:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

Then in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. **Install React Icons**

```bash
npm install react-icons
```

---

### 5. **Start Building the Todo App**

Follow the video tutorial:

* Create components: Input field, Add button, Task list
* Use React state for managing todos
* Use Tailwind for styling
* Use React Icons for delete/edit buttons

# TodoList App 📝

A simple TodoList web application built with React, Tailwind CSS, and React Icons. This project was created by following the [Sigma Web Development Course - Tutorial #114](https://youtu.be/SBuZSalHLe0?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w).

## 🚀 Features

- ✅ Add and delete todos
- 💾 Data stored in React state
- 🎨 Styled using Tailwind CSS
- 🧩 Icons from React Icons library
- ⚡ Built with Vite for fast dev environment

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

## 📷 Screenshot

> _You can add a screenshot here after building the app._

## 📦 Installation

```bash
git clone https://github.com/your-username/todolist-app.git
cd todolist-app
npm install
npm run dev
````

## 📄 License

This project is for educational purposes based on the Sigma Web Development Course.

---

## 🙌 Acknowledgements

Thanks to [CodeWithHarry](https://www.youtube.com/@CodeWithHarry) for the amazing course.

```
