## Comfy store
- `React`
- `React Router`
- `Redux Toolkit (RTK)`
- `Axios`
- `React Query`
- `Tailwind CSS`
- `Daisy UI`

## Create vite Project

```sh
npm create vite@latest comfy-store -- --template react
cd comfy-store
```

## Install Tailwind and Daisy UI Libraries
- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- add following content

tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
[DaisyUI](https://daisyui.com/)

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.js
```js
{
 plugins: [typography, daisyui],
}
```

## Install All Libraries

```sh
npm i axios dayjs @reduxjs/toolkit react-redux @tanstack/react-query @tanstack/react-query-devtools react-icons react-router-dom react-toastify

```