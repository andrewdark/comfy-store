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
- add DaisyUI [DaisyUI](https://daisyui.com/)
```sh
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest

npm i  -D @tailwindcss/typography
```

- Add the Tailwind directives to your CSS

index.css

```css
@import "tailwindcss";

@plugin "daisyui" {
    themes: light, dark, cupcake, cyberpunk;
    /* themes: all; */
}
```
## Install All Libraries

```sh
npm i axios dayjs @reduxjs/toolkit react-redux @tanstack/react-query @tanstack/react-query-devtools react-icons react-router-dom react-toastify

```