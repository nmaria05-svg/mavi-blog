//botoẽs
const botoẽs = document.querySeletorAll('button')

//para cada botão podemos curtir
botoẽs.array.forEach(botão => {
  let curtiu =false;
  
  botão.addEventListener("click",curtir)

  function curtir{

    let num = botão.querySelector('span');
 num.texContent++;
}
    
  }
});
