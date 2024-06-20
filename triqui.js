let bizqtop=null;
let bmediotop =null;
let bderatop=null;
let bizqmedio=null;
let bmedio=null;
let bdermedio=null;
let bizqbotom=null;
let bmediobotom=null;
let bderboton=null;
let valor=null;
let contador=1;
botones=[];
document.addEventListener('DOMContentLoaded',function(){
botones=document.querySelectorAll('.botonopcion')
botones.forEach(botonselec => {
    botonselec.addEventListener ('click', function() {
        seleccionar(botonselec);
      });
});
});



function seleccionar (botonselec){
let idbotonselec = botonselec.id;
idicono=document.getElementById("p"+idbotonselec)

if(esImpar(contador)){
  valor=`<i class="fa-solid fa-x"></i>`;
  switch (idbotonselec.toString()){
    case "izqtop":
       bizqtop="x";
       break;
    case "mediotop" :
       bmediotop ="x";
       break;
    case "deratop" :
       bderatop="x";
       break;
    case "izqmedio" : 
       bizqmedio="x";
       break;
    case "medio" :
       bmedio="x";
       break;
    case "dermedio": 
       bdermedio="x";
       break;
    case "izqbotom":
       bizqbotom="x";
       break;
    case "mediobotom" :
       bmediobotom="x";
       break;
    case "derboton":
       bderboton="x";
       break;
  }
}
else if (esPar(contador)){
   valor=`<i class="fa-solid fa-o"></i>`
   switch (idbotonselec.toString()){
    case "izqtop":
       bizqtop="o";
       break;
    case "mediotop" :
       bmediotop ="o";
       break;
    case "deratop" :
       bderatop="o";
       break;
    case "izqmedio" : 
       bizqmedio="o";
       break;
    case "medio" :
       bmedio="o";
       break;
    case "dermedio": 
       bdermedio="o";
       break;
    case "izqbotom":
       bizqbotom="o";
       break;
    case "mediobotom" :
       bmediobotom="o";
       break;
    case "derboton":
       bderboton="o";
       break;
  }
}

// caso linea arriba
if (bizqtop=="x" && bmediotop =="x" && bderatop=="x"){
  Swal.fire("ganan las x");
}
else if (bizqtop=="o" && bmediotop =="o" && bderatop=="o"){
  Swal.fire("ganan las o");
}
// caso linea en medio
else if (bizqmedio=="o" && bmedio =="o" && bdermedio=="o"){
  Swal.fire("ganan las o");
}
else if (bizqmedio=="x" && bmedio =="x" && bdermedio=="x"){
  Swal.fire("ganan las x");
}
// caso linea abajo
else if (bizqbotom=="x" && bmediobotom =="x" && bderboton=="x"){
  Swal.fire("ganan las x");
}
else if (bizqbotom=="o" && bmediobotom =="o" && bderboton=="o"){
  Swal.fire("ganan las o");
}
// caso diagonal izquierda
else if (bizqtop=="x" && bmedio =="x" && bderboton=="x"){
  Swal.fire("ganan las x");
}
else if (bizqtop=="o" && bmedio =="o" && bderboton=="o"){
  Swal.fire("ganan las o");
}

// caso diagonal derecha
else if (bderatop=="x" && bmedio =="x" && bizqbotom=="x"){
  Swal.fire("ganan las x");
}
else if (bderatop=="o" && bmedio =="o" && bizqbotom=="o"){
  Swal.fire("ganan las o");
}

// caso vertical izquierda
else if (bizqtop=="x" && bizqmedio =="x" && bizqbotom=="x"){
  Swal.fire("ganan las x");
}
else if (bizqtop=="o" && bizqmedio =="o" && bizqbotom=="o"){
  Swal.fire("ganan las o");
}
// vartical medio
else if (bmediotop=="x" && bmedio =="x" && bmediobotom=="x"){
  Swal.fire("ganan las x");
}
else if (bmediotop=="o" && bmedio =="o" && bmediobotom=="o"){
  Swal.fire("ganan las o");
}

// caso vertical derecha
else if (bderatop=="x" && bdermedio =="x" && bderboton=="x"){
  Swal.fire("ganan las x");
}
else if (bderatop=="o" && bdermedio =="o" && bderboton=="o"){
  Swal.fire("ganan las o");
}

idicono.innerHTML=valor;
console.log(contador);
contador++;
}







function esPar(numero) { 
  return numero % 2 === 0;
}

function esImpar(numero) {
  return numero % 2 !== 0;
}