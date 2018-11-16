

//Aqui podemos adicionar códigos escritos em Javascript. Nesta aula, faremos as funções Som(), Sub(), Div(), Mlt().

function Som(){
	var a = parseInt(document.getElementById('A').value);
    var b = parseInt(document.getElementById('B').value);
    var resultado = a+b;
    alert("("+a+"+"+b+") = " + resultado);
}




function Sub(){
	var a = parseInt(document.getElementById('A').value);
    var b = parseInt(document.getElementById('B').value);
    var resultado = a-b;
    alert("("+a+"-"+b+") = " + resultado);
}

function Div(){
	var a = parseInt(document.getElementById('A').value);
    var b = parseInt(document.getElementById('B').value);
    var resultado = a/b;
    alert("("+a+"/"+b+") = " + resultado);
}

function Mlt(){
	var a = parseInt(document.getElementById('A').value);
    var b = parseInt(document.getElementById('B').value);
    var resultado = a*b;
    alert("("+a+"*"+b+") = " + resultado);
}