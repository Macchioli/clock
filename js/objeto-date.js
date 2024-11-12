
//! Pruebas de objeto date

// const fecha = new Date();

// // console.log(fecha)

// // console.dir(fecha)

// console.log(fecha.getDate())

// console.log(fecha.getDay())

// console.log(fecha.getMonth())

// console.log(fecha.getFullYear())

// console.log(fecha.getMinutes())

// console.log(fecha.getTime())


// /* Posibilidades con fecha */

// const hora = fecha.getHours();
// const minutos = fecha.getMinutes();
// const segundos = fecha.getSeconds();

// const mes = fecha.getMonth() +1;
// const dia = fecha.getDate();
// const year = fecha.getFullYear();


// console.log(`Fecha actual: ${dia}/${mes}/${year}`)
// console.log(`Hora actual: ${hora}:${minutos}:${segundos}`)


//! Ejercicio de reloj

let nombreDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
let nombresMeses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]


function setClock(){

    const fecha = new Date()

    const mes = fecha.getMonth();
    const diaSemana = fecha.getDay()


    let hora = formatClockValue(fecha.getHours());
    
    let minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes();

    let segundos = fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds() ;

    const horaHTML = document.getElementById("hora")

    const minutosHTML = document.getElementById("minutos")

    const segundosHTML = document.getElementById("segundos")

    horaHTML.innerText = hora;

    minutosHTML.innerText = minutos;

    segundosHTML.innerText = segundos;

    const nombreDiaSemana = nombreDiasSemana[diaSemana]

    const nombreMes = nombresMeses[mes]

    const dia = fecha.getDate();
    const year = fecha.getFullYear();

    const dateHTML = document.getElementById("date")

    dateHTML.innerText = `Bienvenido/a,\n Hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} del ${year}`;
    

}

function formatClockValue(value){

    if(value < 10){
        return "0" + value
    }

    return value;

}


setClock();

setInterval(() => {
    setClock();
}, 1000)


//? Time Out
// setTimeout(() => {

//     alert("Este alert se ejecuto 3 segundos despues")

// }, 3000)


//? Interval
// setInterval(()=>{

//     const i = 0;
//     console.log("Set interval", i+1)

// }, 3000)


