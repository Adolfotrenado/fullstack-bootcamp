// Conversor de temperaturas de Celsius a Fahrenheit
let fltCelsius;
let fltFahrenheit;
fltCelsius = prompt("Convertidor de Celsius a Fahrenheit");
fltCelsius = parseFloat(fltCelsius);
fltFahrenheit = (fltCelsius * 9 / 5) + 32;
document.write(`${fltFahrenheit}º Fahrenheit`);

// Conversor de temperaturas de Fahrenheita Celsius

fltFahrenheit = prompt("Convertidor de Fahrenheit a Celsius");
fltFahrenheit = parseFloat(fltFahrenheit);
fltCelsius = (fltFahrenheit-32) * 5 / 9;
fltCelsius = fltCelsius.toFixed(2);
document.write(` ${fltCelsius}º Celsius`);

// Conversor años de perro

let fltEdadPerro;
fltEdadPerro = prompt("Cuantos años tiene tu perro?");
fltEdadPerro = parseFloat(fltEdadPerro);
fltEdadPerro = fltEdadPerro * 7;
document.write(` Tu perro tiene ${fltEdadPerro} años en edad de perros`)

// Programa buscador alumnos

let alumnos1 = ["Adolfo", "Sergio", "Diego", "Laura", "Ernesto", "Leonardo", "Alejandro","Samuel", "Alex", "Miguel"];
let resultadoAlumnos1 = prompt("Elige un número del 0 al 9");
resultadoAlumnos1 = parseFloat(resultadoAlumnos1);
resultadoAlumnos1 = alumnos1[resultadoAlumnos1];
document.write(` El alumno se llama ${resultadoAlumnos1}`);

// Programa buscador alumnos nombre + edad

let alumnos2 = [{'nombre': "Adolfo", 'Edad': 30}, {'nombre': "Sergio", 'Edad': 31}, {'nombre':"Diego", 'Edad': 44}, {'nombre':  "Laura", 'Edad': "Deconocida"}, {'nombre':  "Ernesto", 'Edad':"36"}, {'nombre':  "Leonardo", 'Edad': "Desconocida"},{'nombre':  "Alex", 'Edad': 30} ,{'nombre':  "Samuel", 'Edad': 31}, {'nombre':  "Alejandro", 'Edad': 44}, {'nombre':  "Miguel",'Edad':"Desconocida"}];
let resultadoAlumnos2 = prompt("Elige un número del 0 al 9");
resultadoAlumnos2 = parseFloat(resultadoAlumnos2);
resultadoAlumnos2 = alumnos2[resultadoAlumnos2];
document.write(` El alumno se llama ${resultadoAlumnos2["nombre"]} y tiene ${resultadoAlumnos2["Edad"]} años`);

// Ejercicio estructura de datos compleja
let estructuraCompleja = [{"name":"Spain","topLevelDomain":[".es"],"alpha2Code":"ES","alpha3Code":"ESP","callingCodes":["34"],"capital":"Madrid","altSpellings":["ES","Kingdom of Spain","Reino deEspaña"],"region":"Europe","subregion":"Southern Europe","population":46438422,"latlng":[40.0,-4.0],"demonym":"Spanish","area":505992.0,"gini":34.7,"timezones":["UTC","UTC+01:00"],"borders":["AND","FRA","GIB","PRT","MAR"],"nativeName":"España","numericCode":"724","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"de":"Spanien","es":"España","fr":"Espagne","ja":"スペイン","it":"Spagna","br":"Espanha","pt":"Espanha","nl":"Spanje","hr":"Španjolska","fa":"اسپانیا"},"flag":"https://restcountries.eu/data/esp.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"ESP"}];
document.write(` El prefijo de España es ${estructuraCompleja[0].callingCodes} la cual esta en ${estructuraCompleja[0].region} y tiene una población de ${estructuraCompleja[0].population} habitantes`);

