var actualizarHora = ()=>{
	// Obtenemos la fecha actual, incluyendo las horas, minutos, segundos, dia de la semana, dia del mes, mes y año;
	let fecha = new Date(),
		horas = fecha.getHours(),
		ampm = (' '),
		minutos = fecha.getMinutes(),
		segundos = fecha.getSeconds(),
		diaSemana = fecha.getDay(),
		dia = fecha.getDate(),
		mes = fecha.getMonth(),
		year = fecha.getFullYear();
			   	
	// Obtenemos el dia se la semana y lo mostramos
	let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
	let DiadeLaSemana= semana[diaSemana];	
	
	// Obtenemos el dia del mes
	dia.textContent = dia;

	// Obtenemos el Mes y año y lo mostramos
	var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	let mesActual= meses[mes];
		
	// Cambiamos las hora de 24 a 12 horas y establecemos si es AM o PM
	if (horas >= 12) {
		horas = horas - 12;
		ampm = 'PM';
	} else {
		ampm = 'AM';
	}
	ampm.textContent = ampm;

	// Detectamos cuando sean las 0 AM y transformamos a 12 AM
	if (horas == 0 ){
		horas = 12;
	}

	// Si queremos mostrar un cero antes de las horas ejecutamos este condicional
	if (horas < 10){horas = '0' + horas;}
	horas.textContent = horas;	

	// Minutos y Segundos
	if (minutos < 10){ minutos = `0${minutos}`;}
	if (segundos < 10){ segundos = `0${segundos}`;}

	minutos.textContent = minutos;
	segundos.textContent = segundos;

	// pintamos el día y la fecha actual 
	let date= `El día de hoy es ${DiadeLaSemana} ${dia} ${mesActual} del año ${year} `;
	let tiempo= `La hora actual es: ${horas}:${minutos}:${segundos} ${ampm}`;

	// Accedemos a los elementos del DOM para agr`egar mas adelante sus correspondientes valores
	document.getElementById('date').innerHTML=date;
	document.getElementById('tiempo').innerHTML=tiempo;
};

actualizarHora();
var intervalo = setInterval(actualizarHora, 1000);