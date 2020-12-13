var redValue=document.getElementById('redvalue'),
    greenValue=document.getElementById('greenvalue'),
    blueValue=document.getElementById('bluevalue'),
    hexValue=document.getElementById('hexvalue'),
    body=document.querySelector('body')
    
    
  function convert(){
    var red=redValue.value,
        green=greenValue.value,
        blue=blueValue.value,
        
        hexCode= '#' + getHex(red) + getHex(green) + getHex(blue)
    
     hexValue.value=hexCode 
     
     body.style.background=hexCode
        
  }  
  
  function getHex(value){
    var hexa=parseInt(value).toString(16)
    
   return hexa.length == 1 ? '0' + hexa : hexa 
  }
