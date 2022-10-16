const fs = require ("fs");
const arquivos = document.querySelector('#pasta');

document.getElementById('onClick').addEventListener('click', function(){
        onClick();
})

function onClickButton(){
    if(arquivos.value === ''){
        alert('Escolha o arquivo!');
        return;
    }
  
}

function copiarPara(caminhoInicial, caminhoFinal = ''){
    if (caminhoFinal == ''){caminhoFinal = caminhoInicial}
    fs.copyFile(caminhoInicial, caminhoFinal, (err) => {
        if (err) throw err;
        console.log('File copied!');
      });
} 