function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("Light")) {
    // se tiver light mode, adicionar a imagem light  
    img.setAttribute("src", "./assets/gabriel-fortuna.png")
  } else {
  // se tiver sem light mode, manter a imagem normal 
   img.setAttribute("scr", "./assets/Night.png")   
  }


   
 
 
}