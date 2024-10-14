/** @type {import('tailwindcss').Config} */
import p from './src/assets/yarn-ball-seamless-pattern-dog-600nw-2135261977_1_-removebg-preview.png'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {

      backgroundImage:{
"petTheme":"url('https://img.elo7.com.br/product/600x380/2A66A2F/papel-de-parede-pets-cachorro-cachorrinhos-autocolante-papel-de-parede-vintage.jpg')",
"petTheme2":"url('./src/assets/yarn-ball-seamless-pattern-dog-600nw-2135261977_1_-removebg-preview.png')",
"petTheme3":'url("https://png.pngtree.com/background/20230611/original/pngtree-cat-with-a-dog-in-a-dark-room-picture-image_3153708.jpg")',
"petTheme4":'url("https://zippypaws.com/app/uploads/2023/10/shutterstock_1912574842-1024x683.jpg")'


      }
    },
  },
  plugins: [],
}

