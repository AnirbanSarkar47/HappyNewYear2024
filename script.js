const randomColour = function (){
    const hex = '0123456789ABCDEF';
    let colourValue = '#';
    for(let i = 0 ; i < 6; i++){
        colourValue += hex[Math.floor(Math.random()*16)];
    }
    
    return colourValue;

};


setInterval(function(){
    document.querySelector('body').style.backgroundColor = randomColour();
},200)
