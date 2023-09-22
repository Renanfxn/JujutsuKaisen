let count = 1;  //Seta o Contador para a 1 Imagem
document.getElementById("radio1").checked = true;


// Time
setInterval( function(){
    nextImg();
}, 3000)


function nextImg(){
    count++;
    if(count>=4){
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
        count = 0;
        document.getElementById("radio"+count).checked = true;


    }
    document.getElementById("radio"+count).checked = true;
}
