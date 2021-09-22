let Radiologia = [
    {
        Hora:"11:00",
        Especialista:"Ignacio Schulz", 
        Paciente:"Francisca Rojas", 
        Rut:"9878782-1",
        Prevision:"Fonasa",
    },
    {
        Hora:"11:30",
        Especialista:"Federico Subercaseaux", 
        Paciente:"Pamela Estrada", 
        Rut:"15345241-3",
        Prevision:"Isapre",
    },
    {
        Hora:"15:00",
        Especialista:"Fernando Wurthz", 
        Paciente:"Armando Luna", 
        Rut:"16445345-9",
        Prevision:"Isapre",
    },
    {
        Hora:"15:30",
        Especialista:"Ana Maria Godoy", 
        Paciente:"Manuel Godoy", 
        Rut:"17666419-0",
        Prevision:"Fonasa",
    },
    {
        Hora:"16:00",
        Especialista:"Patricia Suazo", 
        Paciente:"Ramon Ulloa", 
        Rut:"14989389-K",
        Prevision:"Fonasa",
    },
];

let Traumatologia = [
    {
        Hora:"8:00",
        Especialista:"Maria Paz Altuzarra", 
        Paciente:"Paula Sanchez", 
        Rut:"15554147-9",
        Prevision:"Fonasa",
    },
    {
        Hora:"10:00",
        Especialista:"Raul Araya", 
        Paciente:"Angelica Navas", 
        Rut:"15444147-9",
        Prevision:"Isapre",
    },
    {
        Hora:"10:30",
        Especialista:"Maria Arriagada", 
        Paciente:"Ana Klapp", 
        Rut:"17789423-9",
        Prevision:"Isapre",
    },
    {
        Hora:"11:00",
        Especialista:"Alejandro Badilla", 
        Paciente:"Felipe Mardones", 
        Rut:"15474236-6",
        Prevision:"Isapre",
    },
    {
        Hora:"11:30",
        Especialista:"Cecilia Budnik", 
        Paciente:"Diego Marre", 
        Rut:"16554741-K",
        Prevision:"Fonasa",
    },
    {
        Hora:"12:00",
        Especialista:"Arturo Cavagnaro", 
        Paciente:"Cecilia Mendez", 
        Rut:"9747535-8",
        Prevision:"Isapre",
    },
    {
        Hora:"12:30",
        Especialista:"Andres Kanacri", 
        Paciente:"Marcial Suazo", 
        Rut:"11254785-5",
        Prevision:"Isapre",
    },
];

let Dental = [
    {
        Hora:"8:30",
        Especialista:"Andres Zuñiga", 
        Paciente:"Marcela Retamal", 
        Rut:"11123425-6",
        Prevision:"Isapre",
    },
    {
        Hora:"11:00",
        Especialista:"Maria Pia Zañartu", 
        Paciente:"Angel Muñoz", 
        Rut:"9878789-2",
        Prevision:"Isapre",
    },
    {
        Hora:"11:30",
        Especialista:"Scarlett Wittig", 
        Paciente:"Mario Kast", 
        Rut:"7998789-5",
        Prevision:"Fonasa",
    },
    {
        Hora:"13:00",
        Especialista:"Francisco Von Teuber", 
        Paciente:"Karin fernandez", 
        Rut:"18887662-K",
        Prevision:"Fonasa",
    },
    {
        Hora:"13:30",
        Especialista:"Eduardo Viñuela", 
        Paciente:"Hugo Sanchez", 
        Rut:"17665461-4",
        Prevision:"Fonasa",
    },
    {
        Hora:"14:00",
        Especialista:"Raquel Villaseca", 
        Paciente:"Ana Sepulveda", 
        Rut:"14441281-0",
        Prevision:"Isapre",
    },
];

function Radio (){
    document.write("Area Radiología:  ")
    document.write(`Primera atención: ${Radiologia[0].Paciente} - ${Radiologia[0].Prevision} | Ultima atención: ${Radiologia[Radiologia.length-1].Paciente} - ${Radiologia[Radiologia.length-1].Prevision}`)
    document.write("<br><br>")
}


function Trauma (){
    document.write("Area Traumatología:  ")
    document.write(`Primera atención: ${Traumatologia[0].Paciente} - ${Traumatologia[0].Prevision} | Ultima atención: ${Traumatologia[Traumatologia.length-1].Paciente} - ${Traumatologia[Traumatologia.length-1].Prevision}`)
    document.write("<br><br>")
}

function Denta (){
    document.write("Area Dental:  ")
    document.write(`Primera atención: ${Dental[0].Paciente} - ${Dental[0].Prevision} | Ultima atención: ${Dental[Dental.length-1].Paciente} - ${Dental[Dental.length-1].Prevision}`)
    document.write("<br><br>")  
}

Radio();
Trauma();
Denta ();

let texto ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"
let texto2 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"
let texto3 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"

for(let i=0; i<Radiologia.length; i++){
    texto += `<tr>
    <td>${Radiologia[i].Hora}</td>
    <td>${Radiologia[i].Especialista}</td>
    <td>${Radiologia[i].Paciente}</td>
    <td>${Radiologia[i].Rut}</td>
    <td>${Radiologia[i].Prevision}</td>
    </tr>`;
}
document.getElementById("cuerpotabla").innerHTML = texto

for(let i=0; i<Traumatologia.length; i++){
    texto2 += `<tr>
    <td>${Traumatologia[i].Hora}</td>
    <td>${Traumatologia[i].Especialista}</td>
    <td>${Traumatologia[i].Paciente}</td>
    <td>${Traumatologia[i].Rut}</td>
    <td>${Traumatologia[i].Prevision}</td>
    </tr>`;
}
document.getElementById("cuerpotabla2").innerHTML = texto2

for(let i=0; i<Dental.length; i++){
    texto3 += `<tr>
    <td>${Dental[i].Hora}</td>
    <td>${Dental[i].Especialista}</td>
    <td>${Dental[i].Paciente}</td>
    <td>${Dental[i].Rut}</td>
    <td>${Dental[i].Prevision}</td>
    </tr>`;
}
document.getElementById("cuerpotabla3").innerHTML = texto3
