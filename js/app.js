
var mensaje = document.getElementById("mensaje");

var isValidCard = function(){
	var numTarj = document.getElementById("entrada").value; //Obtener el valor de lo que ingresa el usuario
 
  	var arrNum = []; //creamos un array
  	var arrInver = [];
 
  for ( i = 0; i < numTarj.length; i++){ //recorrido de mi numero de tarjeta ingresado 
  	arrNum[i] = numTarj.charAt(i);//mostrare en un array los caracteres devueltos de numTarj
  }
  
  for ( n = 0; n < arrNum.length; n++){//recorrido de mi arrNum para inversar el array 
  	arrInver = arrNum.reverse(n);
		console.log(arrInver);
  }
  
  
  
  //mensaje.innerHTML = arrNum.toString();

};
