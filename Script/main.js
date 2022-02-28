
// Regras Do site

function addText(){
  let objC = document.querySelector('.Regra__text').style.display;
  if(objC == "none"){
    document.querySelector('.Regra__text').style.display = 'block';
  }else{
    document.querySelector('.Regra__text').style.display = 'none';
  }

}

// menu moba

function menuMoba (){
    let obj = document.querySelector(".nav");
    obj.classList.toggle('active');
}
 
