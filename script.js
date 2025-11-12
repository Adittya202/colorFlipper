const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const colorButton=document.getElementById('color-button');
const colorCodeText=document.getElementById('color-code');
const body=document.body;

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);

}

function  generateHexColor(){
    let hexColor='#';
    for(let i=0; i<6;i++){
        hexColor+=hex[getRandomNumber()];
    }
    return hexColor;
}
colorButton.addEventListener('click', function(){
    const newColor= generateHexColor();
    body.style.backgroundColor= newColor;

    colorCodeText.textContent = newColor;
    colorCodeText.style.color= newColor;
});

