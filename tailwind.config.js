module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-jumbotron' : "url('https://images.unsplash.com/photo-1524134132825-dbe30ff69879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        'bg-tentang-kami' : "url('https://erynimage.s3.ap-southeast-1.amazonaws.com/ku_bg.JPG')",
        'bg-division': "url('/mountbg.jpg')",
        'bg-hutgun': "url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/Hutan+Gunung.JPG')",
        'bg-arjer': "url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/Arung+Jeram.jpg')",
        'bg-panjat': "url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/Panjat+Tebing.jpg')",
        'bg-caving':"url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/Susur+Gua.JPG')",
        'bg-footer-1':"url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/IMG_9781.jpg')",
        'bg-footer-2':"url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/00986.00_00_16_24.Still006.jpg')",
        'bg-footer-3':"url('https://erynimage.s3.ap-southeast-1.amazonaws.com/kompas_usu/00986.00_00_09_40.Still004.jpg')"
      },
      spacing: {
        'custom-1': '400px',
        'half-screen': '50vh'
      }
    },
  },
  plugins: [],
}
