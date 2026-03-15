    const allQuestions = [
    {
        pregunta: `El valor central de siete múltiplos consecutivos de 3 ordenados en forma decreciente, coincide con:`,
        opciones: [
            "solo la moda",
            "solo la mediana",
            "solo la media",
            "la media y la mediana"
        ],
        correcta: 3
    },
    {
        pregunta: `Las áreas de tres cuadrados son 16, 49 y 169. Si se considera un solo lado de cada cuadrado, ¿cuál es el promedio (media aritmética) de estas tres longitudes?`,
        opciones: [
            "8",
            "12",
            "24",
            "32"
        ],
        correcta: 0
    },
    {
        pregunta: `Si el número de preguntas contestadas por 10 alumnos fue: 56, 57, 55, 58, 62, 55, 57, 56, 57, 57, ¿cuál(es) de las afirmaciones siguientes es (son) verdadera(s)?<br>I) La mediana es 57.<br>II) El promedio (media) es 57.<br>III) La moda coincide con el promedio.`,
        opciones: [
            "Solo I",
            "Solo I y II",
            "Solo I y III",
            "I, II y III"
        ],
        correcta: 3
    },
    {
        pregunta: `Con respecto a los datos: a + 4, a + 6, a + 2, a + 8, a + 10, a + 2; la mediana es:`,
        opciones: [
            "a + 2",
            "a + 4",
            "a + 5",
            "a + 6"
        ],
        correcta: 2
    },
    {
        pregunta: `Camila ha obtenido las siguientes notas en matemática 5,6; 7,0; 6,1 y 6,3. Si debe rendir su última prueba la cual es coeficiente dos, es decir la nota que obtenga será repetida dos veces, ¿cuánto debe ser la nota para que Camila obtenga exactamente un promedio final de 6,2?`,
        opciones: [
            "6,0",
            "6,1",
            "6,2",
            "6,3"
        ],
        correcta: 0
    },
    {
        pregunta: `De dos cursos en los que se aplicó una evaluación, uno de ellos con 30 alumnos tuvo un promedio de 600 puntos; en el otro con 20 alumnos el promedio fue de 500 puntos. Entonces, ¿cuál es el promedio correspondiente a la totalidad de los alumnos de ambos cursos?`,
        opciones: [
            "560 puntos",
            "570 puntos",
            "580 puntos",
            "590 puntos"
        ],
        correcta: 0
    },
    {
        pregunta: `La semana pasada, Ximena rindió una prueba diariamente de lunes a viernes. Si en la prueba del lunes obtuvo nota n, y en los días siguientes obtuvo nota inferior en 0,3 a la nota obtenida el día inmediatamente anterior, entonces el promedio de las cinco notas es igual a:`,
        opciones: [
            "n - 0,6",
            "n - 6",
            "<span class='fraction'><span class='num'>n - 0,6</span><span class='den'>5</span></span>",
            "<span class='fraction'><span class='num'>5n - 6</span><span class='den'>5</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Si todos los datos de la muestra tienen el mismo valor, distinto de cero, ¿cuál de las siguientes proposiciones es verdadera?`,
        opciones: [
            "La moda es el valor de cualquiera de los datos",
            "Como los datos son distintos de cero, el rango es distinto de cero",
            "La media aritmética es igual al segundo cuartil",
            "La mediana es igual al rango intercuartil"
        ],
        correcta: 2
    },
    {
        pregunta: `En una muestra de trabajadores de una empresa, se tiene la siguiente distribución de cargas familiares: 0 cargas: 6 trabajadores, 1 carga: 9 trabajadores, 2 cargas: 12 trabajadores, 3 cargas: 7 trabajadores, 4 cargas: 4 trabajadores, 5 cargas: 2 trabajadores. La media, la mediana y la moda son, respectivamente:`,
        opciones: [
            "2, 2 y 2",
            "3, 2 y 2",
            "3, 3 y 2",
            "2, 3 y 3"
        ],
        correcta: 0
    },
    {
        pregunta: `Si A es un dato que se encuentra entre el percentil 40 y 50 de una población, con todos los datos distintos entre sí, entonces ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?<br>I) Su valor es superior al 40% de los datos.<br>II) La mediana del conjunto es mayor que el valor de A.<br>III) El valor de A es menor que el tercer cuartil.`,
        opciones: [
            "Solo I",
            "Solo I y II",
            "Solo II y III",
            "I, II y III"
        ],
        correcta: 3
    },
    {
        pregunta: `Se tienen los siguientes datos: 12, 15, 18, 20, 22, 25, 27, 30. ¿Cuál es el valor del primer cuartil?`,
        opciones: [
            "15",
            "16,5",
            "18",
            "20"
        ],
        correcta: 1
    },
    {
        pregunta: `Las notas de un estudiante en cinco pruebas son: 6,0; 5,5; 6,5; 4,5 y 5,0. ¿Cuál es la mediana de estas notas?`,
        opciones: [
            "5,0",
            "5,5",
            "6,0",
            "6,5"
        ],
        correcta: 1
    },
    {
        pregunta: `En una empresa trabajan 20 personas con los siguientes sueldos en miles de pesos: 350, 350, 400, 400, 400, 450, 450, 500, 500, 550, 550, 600, 600, 650, 700, 700, 750, 800, 850, 900. ¿Cuál es la moda de los sueldos?`,
        opciones: [
            "400",
            "450",
            "500",
            "550"
        ],
        correcta: 0
    },
    {
        pregunta: `La tabla muestra la frecuencia de las edades de un grupo de personas. Edad: 15 años (frecuencia 5), 16 años (frecuencia 8), 17 años (frecuencia 12), 18 años (frecuencia 7), 19 años (frecuencia 3). ¿Cuál es la edad promedio del grupo?`,
        opciones: [
            "16,5 años",
            "16,8 años",
            "17,0 años",
            "17,2 años"
        ],
        correcta: 2
    },
    {
        pregunta: `Un estudiante obtuvo las siguientes calificaciones: 5,2; 6,1; 4,8; 5,9 y 6,3. Si necesita un promedio de 5,8 para aprobar, ¿cuánto debe obtener en una sexta prueba (de igual ponderación) para lograr su objetivo?`,
        opciones: [
            "5,9",
            "6,1",
            "6,3",
            "6,5"
        ],
        correcta: 2
    },
    {
        pregunta: `En una muestra de 9 números ordenados: 3, 5, 7, 8, 10, 12, 15, 18, 20. ¿Cuál es el valor del percentil 75?`,
        opciones: [
            "15",
            "16,5",
            "18",
            "19"
        ],
        correcta: 1
    },
    {
        pregunta: `Las edades de los participantes en un taller son: 18, 20, 22, 24, 26, 28, 30. Si se incorpora una persona de 40 años, ¿qué medida de tendencia central experimentará el mayor cambio?`,
        opciones: [
            "La media",
            "La mediana",
            "La moda",
            "El primer cuartil"
        ],
        correcta: 0
    },
    {
        pregunta: `En un conjunto de datos simétricos, ¿qué relación existe entre la media, la mediana y la moda?`,
        opciones: [
            "Son aproximadamente iguales",
            "La media es mayor que la mediana",
            "La mediana es mayor que la moda",
            "No hay relación definida"
        ],
        correcta: 0
    },
    {
        pregunta: `Los puntajes de 10 estudiantes en una prueba fueron: 45, 50, 55, 60, 65, 70, 75, 80, 85, 90. ¿Cuál es el rango intercuartil?`,
        opciones: [
            "20",
            "25",
            "30",
            "35"
        ],
        correcta: 1
    },
    {
        pregunta: `En una encuesta sobre el número de horas diarias que ven televisión, se obtuvieron los siguientes datos: 1, 2, 2, 3, 3, 3, 4, 4, 5. ¿Cuál es la moda?`,
        opciones: [
            "2",
            "3",
            "4",
            "5"
        ],
        correcta: 1
    },
    {
        pregunta: `El sueldo promedio de 5 empleados es 450.000 pesos. Si se incorpora un nuevo empleado con sueldo 550.000 pesos, ¿cuál es el nuevo sueldo promedio?`,
        opciones: [
            "$466.667",
            "$475.000",
            "$483.333",
            "$500.000"
        ],
        correcta: 0
    },
    {
        pregunta: `Las temperaturas máximas registradas durante una semana fueron: 28°, 30°, 29°, 31°, 27°, 28°, 26°. ¿Cuál es la temperatura mediana?`,
        opciones: [
            "27°",
            "28°",
            "29°",
            "30°"
        ],
        correcta: 1
    },
    {
        pregunta: `En un curso, las notas de una prueba fueron: 4,0; 4,5; 5,0; 5,0; 5,5; 6,0; 6,0; 6,0; 6,5; 7,0. ¿Cuál es el tercer cuartil?`,
        opciones: [
            "6,0",
            "6,25",
            "6,5",
            "7,0"
        ],
        correcta: 1
    },
    {
        pregunta: `Un conjunto de datos tiene media 25 y desviación estándar 4. Si se suma 5 a cada dato, ¿cuál es la nueva media?`,
        opciones: [
            "25",
            "29",
            "30",
            "33"
        ],
        correcta: 1
    },
    {
        pregunta: `Las edades de los miembros de un club son: 15, 16, 17, 18, 19, 20, 21, 22, 23, 24. ¿Cuál es el percentil 40?`,
        opciones: [
            "17,6",
            "18,0",
            "18,4",
            "18,8"
        ],
        correcta: 2
    },
    {
        pregunta: `En una muestra de 100 personas, el ingreso promedio es 500.000 pesos. Si el 20% de las personas con mayores ingresos tiene un promedio de 800.000 pesos, ¿cuál es el ingreso promedio del 80% restante?`,
        opciones: [
            "$425.000",
            "$450.000",
            "$475.000",
            "$500.000"
        ],
        correcta: 0
    },
    {
        pregunta: `Los siguientes datos corresponden a las edades de 8 personas: 22, 25, 27, 30, 32, 35, 38, 40. ¿Cuál es la mediana?`,
        opciones: [
            "30",
            "31",
            "32",
            "33"
        ],
        correcta: 1
    },
    {
        pregunta: `En una distribución de frecuencias, si el primer cuartil es 25 y el tercer cuartil es 45, ¿cuál es el rango intercuartil?`,
        opciones: [
            "10",
            "15",
            "20",
            "25"
        ],
        correcta: 2
    },
    {
        pregunta: `Un alumno tiene las siguientes notas: 5,5; 6,0; 4,5; 7,0; 5,0. ¿Cuánto debe obtener en una sexta prueba para que su mediana sea 5,75?`,
        opciones: [
            "5,5",
            "6,0",
            "6,5",
            "7,0"
        ],
        correcta: 1
    },
    {
        pregunta: `La tabla muestra la distribución de frecuencias de las edades: 10 años (5 personas), 11 años (8 personas), 12 años (12 personas), 13 años (7 personas). ¿Cuál es la edad mediana?`,
        opciones: [
            "11 años",
            "11,5 años",
            "12 años",
            "12,5 años"
        ],
        correcta: 2
    },
    {
        pregunta: `En un conjunto de datos, la media es 50 y la mediana es 45. ¿Qué podemos inferir sobre la distribución?`,
        opciones: [
            "Es simétrica",
            "Está sesgada a la izquierda",
            "Está sesgada a la derecha",
            "No se puede inferir nada"
        ],
        correcta: 2
    },
    {
        pregunta: `Las calificaciones de 7 estudiantes son: 4,2; 5,1; 6,3; 4,8; 5,5; 6,0; 5,7. ¿Cuál es el rango?`,
        opciones: [
            "1,8",
            "2,1",
            "2,3",
            "2,5"
        ],
        correcta: 1
    },
    {
        pregunta: `En una empresa, el sueldo promedio de los hombres es 600.000 pesos y el de las mujeres es 500.000 pesos. Si hay igual número de hombres que de mujeres, ¿cuál es el sueldo promedio total?`,
        opciones: [
            "$525.000",
            "$550.000",
            "$575.000",
            "$600.000"
        ],
        correcta: 1
    },
    {
        pregunta: `Los siguientes datos corresponden a las edades de 5 personas: 18, 20, 22, 24, 26. Si se agrega un dato de 30, ¿en cuánto aumenta la media?`,
        opciones: [
            "1",
            "1,5",
            "2",
            "2,5"
        ],
        correcta: 1
    },
    {
        pregunta: `En una muestra de 50 personas, el percentil 80 es 85. Esto significa que:`,
        opciones: [
            "80 personas tienen un valor inferior a 85",
            "El 80% de las personas tiene un valor inferior o igual a 85",
            "El 20% de las personas tiene un valor superior a 85",
            "El 80% de las personas tiene un valor superior a 85"
        ],
        correcta: 1
    },
    {
        pregunta: `Las notas de un curso en una prueba fueron: 3,0; 4,0; 4,5; 5,0; 5,0; 5,5; 6,0; 6,0; 6,5; 7,0. ¿Cuál es el segundo cuartil?`,
        opciones: [
            "5,0",
            "5,25",
            "5,5",
            "6,0"
        ],
        correcta: 1
    },
    {
        pregunta: `Un conjunto de datos tiene media 40 y varianza 25. Si se multiplica cada dato por 2, ¿cuál es la nueva media?`,
        opciones: [
            "40",
            "65",
            "80",
            "100"
        ],
        correcta: 2
    },
    {
        pregunta: `En una encuesta, las edades de los encuestados son: 20, 22, 25, 25, 25, 28, 30, 32, 35. ¿Cuál es la moda?`,
        opciones: [
            "22",
            "25",
            "28",
            "30"
        ],
        correcta: 1
    },
    {
        pregunta: `El peso promedio de 10 personas es 70 kg. Si se retira a la persona más pesada de 90 kg, ¿cuál es el nuevo peso promedio?`,
        opciones: [
            "66,7 kg",
            "67,8 kg",
            "68,9 kg",
            "70 kg"
        ],
        correcta: 1
    },
    {
        pregunta: `Los puntajes de 11 estudiantes en una prueba fueron: 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105. ¿Cuál es la mediana?`,
        opciones: [
            "75",
            "80",
            "85",
            "90"
        ],
        correcta: 1
    },
    {
        pregunta: `En una distribución de frecuencias, el intervalo [30-40) tiene frecuencia 15, [40-50) tiene frecuencia 25, [50-60) tiene frecuencia 20. ¿En qué intervalo se encuentra la mediana?`,
        opciones: [
            "[30-40)",
            "[40-50)",
            "[50-60)",
            "No se puede determinar"
        ],
        correcta: 1
    },
    {
        pregunta: `Las edades de 6 personas son: 18, 22, 25, 28, 30, 35. ¿Cuál es el primer cuartil?`,
        opciones: [
            "21",
            "22",
            "23",
            "24"
        ],
        correcta: 1
    },
    {
        pregunta: `En una muestra, el percentil 25 es 30 y el percentil 75 es 70. ¿Cuál es el rango intercuartil?`,
        opciones: [
            "30",
            "40",
            "50",
            "60"
        ],
        correcta: 1
    },
    {
        pregunta: `Un estudiante obtuvo las siguientes notas: 4,8; 5,2; 5,6; 6,0; 6,4. ¿Cuál es la media?`,
        opciones: [
            "5,4",
            "5,6",
            "5,8",
            "6,0"
        ],
        correcta: 1
    },
    {
        pregunta: `Las alturas de 5 personas son: 1,65 m; 1,70 m; 1,72 m; 1,75 m; 1,80 m. Si se agrega una persona de 1,68 m, ¿cuál es la nueva mediana?`,
        opciones: [
            "1,69 m",
            "1,70 m",
            "1,71 m",
            "1,72 m"
        ],
        correcta: 2
    },
    {
        pregunta: `En una fábrica, los salarios (en miles de pesos) son: 250, 250, 300, 300, 350, 350, 400, 400, 450, 500. ¿Cuál es el salario mediano?`,
        opciones: [
            "325",
            "350",
            "375",
            "400"
        ],
        correcta: 1
    },
    {
        pregunta: `Un conjunto de 8 números tiene media 15. Si se elimina el número 10, ¿cuál es la nueva media?`,
        opciones: [
            "15,7",
            "16",
            "16,3",
            "16,7"
        ],
        correcta: 0
    },
    {
        pregunta: `Las edades de los asistentes a una reunión son: 25, 27, 29, 31, 33, 35, 37, 39. ¿Cuál es el tercer cuartil?`,
        opciones: [
            "35",
            "36",
            "37",
            "38"
        ],
        correcta: 1
    },
    {
        pregunta: `En una distribución de frecuencias, la moda es 25 y la media es 30. Esto sugiere que la distribución es:`,
        opciones: [
            "Simétrica",
            "Sesgada a la izquierda",
            "Sesgada a la derecha",
            "Bimodal"
        ],
        correcta: 2
    },
    {
        pregunta: `Las notas de 7 estudiantes son: 4,0; 4,5; 5,0; 5,5; 6,0; 6,5; 7,0. ¿Cuál es el rango?`,
        opciones: [
            "2,5",
            "3,0",
            "3,5",
            "4,0"
        ],
        correcta: 1
    },
        {
        pregunta: `Las áreas de tres cuadrados son 9, 64 y 256. Si se considera un solo lado de cada cuadrado. ¿Cuál es el promedio (media aritmética) de estas tres longitudes?`,
        opciones: ['7', '8', '9', '10'],
        correcta: 2
    },
    {
        pregunta: `<p>De un grupo de 200 personas consultadas por su nivel educacional se obtuvo la siguiente tabla:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Nivel educacional</th><th>Personas</th></tr>
            <tr><td>Educación Básica</td><td>40</td></tr>
            <tr><td>Educación Media</td><td>80</td></tr>
            <tr><td>Técnico Profesional</td><td>60</td></tr>
            <tr><td>Universitaria</td><td>20</td></tr>
        </table>
        <p>El gráfico circular que representa la información dada en la tabla es</p>`,
        opciones: ['<img src="https://i.ibb.co/G3308SzX/ME11-M1-P2-1.jpg" alt="Pregunta 2-1" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/TBkL2Yx8/ME11-M1-P2-2.jpg" alt="Pregunta 2-2" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/zgW4BWv/ME11-M1-P2-3.jpg" alt="Pregunta 2-3" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/ns9tBXHJ/ME11-M1-P2-4.jpg" alt="Pregunta 2-4" style="max-width: 150px; height: auto;">'],
        correcta: 2
    },
    {
        pregunta: `<p>Carlos y José deciden escalar un monte por separado, pero por el mismo sendero, llegando ambos a la cima que está a 1.300 m. El gráfico de la figura adjunta muestra la distancia recorrida, en función del tiempo, por cada uno hasta la cima.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/Cp992C0q/ME11-M1-P3.jpg" alt="Pregunta 3" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) siempre verdadera(s)?</p>
        <p>I) José demoró en llegar a la cima 210 minutos.</p>
        <p>II) Carlos se detuvo 1 hora.</p>
        <p>III) José y Carlos demoraron el mismo tiempo en llegar a la cima.</p>`,
        opciones: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 1
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de kilometraje de los vehículos seminuevos que están a la venta en una automotora.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Kilometraje</th><th>Frecuencia</th></tr>
            <tr><td>]0, 5]</td><td>2</td></tr>
            <tr><td>]5, 10]</td><td>7</td></tr>
            <tr><td>]10, 15]</td><td>6</td></tr>
            <tr><td>]15, 20]</td><td>9</td></tr>
            <tr><td>]20, 25]</td><td>11</td></tr>
        </table>
        <p>Con respecto a la tabla, ¿cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'Los intervalos se ordenan de menor a mayor frecuencia.',
            'El 20% de los vehículos a la venta pertenecen al segundo intervalo.',
            'Hay 11 vehículos que marcan como mínimo 20 km y como máximo 25 km.',
            'Nueve vehículos muestran menos de 10 kilómetros recorridos.'
        ],
        correcta: 1
    },
    {
        pregunta: `<p>El histograma adjunto presenta los sueldos mensuales de los empleados de una agencia publicitaria, en intervalos de la forma [a, b[.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/7dvjcnrN/ME11-M1-P5.jpg" alt="Pregunta 5" style="max-width: 350px; height: auto;"></p>
        <p>Con los datos disponibles se puede concluir que:</p>`,
        opciones: [
            'Hay 26 empleados en la agencia publicitaria.',
            'El 60% de los empleados gana a lo más $500.000 mensualmente.',
            'El 25% de los empleados gana a lo menos $1.000.000 mensualmente.',
            'Dos empleados ganan más de $2.000.000 mensuales.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En una escuela con 400 alumnos fue hecha una encuesta para verificar cuál era el deporte favorito de los alumnos, pudiendo dar solo una respuesta. Los resultados aparecen representados en la tabla adjunta.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Deporte</th><th>Frecuencia Absoluta</th><th>Frecuencia Relativa</th></tr>
            <tr><td>Fútbol</td><td>155</td><td>38,75%</td></tr>
            <tr><td>Basquetbol</td><td>74</td><td></td></tr>
            <tr><td>Atletismo</td><td>91</td><td>22,75%</td></tr>
            <tr><td>Tenis</td><td>56</td><td></td></tr>
            <tr><td>Natación</td><td></td><td></td></tr>
        </table>
        <p>¿Cuál de las afirmaciones es FALSA?</p>`,
        opciones: [
            'Atletismo es preferido por 91 alumnos.',
            'Seis de cada 100 alumnos prefieren natación.',
            'Los alumnos que prefieren tenis son el 14% de los encuestados.',
            'Fútbol es el deporte preferido por más de 160 alumnos.'
        ],
        correcta: 3
    },
    {
        pregunta: `<p>¿Cuál de los siguientes gráficos representa el histograma que se puede formar con los datos de la tabla adjunta?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Datos</th><th>Frecuencia</th></tr>
            <tr><td>[0, 10[</td><td>4</td></tr>
            <tr><td>[10, 20[</td><td>8</td></tr>
            <tr><td>[20, 30[</td><td>10</td></tr>
            <tr><td>[30, 40[</td><td>18</td></tr>
            <tr><td>[40, 50[</td><td>24</td></tr>
        </table>`,
        opciones: ['<img src="https://i.ibb.co/8LTXBBJ1/ME11-M1-P7-1.jpg" alt="Pregunta 7-1" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/Kc1vCXKv/ME11-M1-P7-2.jpg" alt="Pregunta 7-2" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/BH1PzjVL/ME11-M1-P7-3.jpg" alt="Pregunta 7-3" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/JwDGvW67/ME11-M1-P7-4.jpg" alt="Pregunta 7-4" style="max-width: 150px; height: auto;">'],
        correcta: 1
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de la frecuencia de las edades de los alumnos del 4°A del colegio Mountain.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Edad en años</th><th>Frecuencia</th><th>Frecuencia acumulada</th></tr>
            <tr><td>16</td><td></td><td>8</td></tr>
            <tr><td>17</td><td></td><td>12</td></tr>
            <tr><td>18</td><td>3</td><td></td></tr>
            <tr><td>19</td><td>5</td><td></td></tr>
        </table>
        <p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'El 25% de los alumnos tiene 17 años',
            'Los alumnos de 19 años son mayoría.',
            'Los datos que faltan en la segunda columna suman 20.',
            'El 40% de los alumnos tiene 16 años.'
        ],
        correcta: 3
    },
        {
        pregunta: `<p>A un grupo de mujeres se le preguntó acerca de su masa corporal. Sus respuestas se resumen en el histograma de la figura adjunta.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/fV8gPFyg/ME11-M1-P10.jpg" alt="Pregunta 10" style="max-width: 350px; height: auto;"></p>
        <p>Según la información del gráfico es verdadero que,</p>`,
        opciones: [
            '7 mujeres fueron entrevistadas en total.',
            'exactamente, un 50% de las mujeres entrevistadas tiene una masa corporal que está en el intervalo [64, 70[.',
            'la mediana de las masas corporales está en el intervalo [66, 68[.',
            'las modas de las masas corporales son 65 kg y 71 kg.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene una urna con 4 bolitas numeradas del 1 al 4. Se saca una bolita al azar, se repone y se repite el experimento cierta cantidad de veces obteniéndose los resultados que se muestran en la tabla adjunta. Si la media de los resultados es 2,45, ¿cuántas veces se realizó el experimento?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Número</th><th>Frecuencia</th></tr>
            <tr><td>1</td><td>5</td></tr>
            <tr><td>2</td><td>n</td></tr>
            <tr><td>3</td><td>4</td></tr>
            <tr><td>4</td><td>5</td></tr>
        </table>`,
        opciones: ['6', '12', '20', '22'],
        correcta: 2
    },
    {
        pregunta: `Para calcular la nota final de una asignatura, las tres pruebas del semestre se ponderan con un 30%, 30% y 40%, respectivamente. Isabel tiene un 5 y un 4 en las dos primeras. Si su nota final fue 5,1 entonces en la tercera prueba obtuvo un:`,
        opciones: ['5,1', '5,2', '6,0', '6,3'],
        correcta: 2
    },
    {
        pregunta: `<p>De acuerdo con la información de la siguiente tabla adjunta, la media de la distribución es aproximadamente:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Variable</th><th>Frec. Abs.</th><th>Frec. rel.</th><th>Frec. Abs. Ac.</th></tr>
            <tr><td>2</td><td></td><td></td><td>6</td></tr>
            <tr><td>4</td><td></td><td>0,5</td><td></td></tr>
            <tr><td>6</td><td>5</td><td></td><td></td></tr>
            <tr><td>8</td><td>7</td><td></td><td></td></tr>
        </table>`,
        opciones: ['3,2', '3,8', '4,7', '5'],
        correcta: 2
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de todos los datos de ausentismo laboral que se registra durante un año en una empresa.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Cantidad de días</th><th>Cantidad trabajadores</th><th>Frecuencia relativa</th></tr>
            <tr><td>[0, 3[</td><td>15</td><td>Q</td></tr>
            <tr><td>[3, 6[</td><td>5</td><td>0,2</td></tr>
            <tr><td>[6, 9[</td><td>P</td><td>0,12</td></tr>
            <tr><td>[9, 12]</td><td>2</td><td>R</td></tr>
        </table>
        <p>Según los datos de la tabla, ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) Hubo un total de 25 ausencias durante ese año.</p>
        <p>II) Un 60% de los trabajadores se ausentó menos de 3 días ese año.</p>
        <p>III) 20 trabajadores faltaron menos de 6 días a su trabajo ese año.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo III', 'Solo I y II', 'Solo II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>En una muestra de trabajadores de una empresa, se tiene la siguiente distribución de cargas familiares:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Cargas familiares</th><th>Trabajadores</th></tr>
            <tr><td>0</td><td>6</td></tr>
            <tr><td>1</td><td>9</td></tr>
            <tr><td>2</td><td>12</td></tr>
            <tr><td>3</td><td>7</td></tr>
            <tr><td>4</td><td>4</td></tr>
            <tr><td>5</td><td>2</td></tr>
        </table>
        <p>La media, la mediana y la moda son, respectivamente:</p>`,
        opciones: ['2, 2 y 2', '3, 2 y 2', '3, 3 y 2', '2, 3 y 3'],
        correcta: 0
    },
    {
        pregunta: `La mediana de las edades de un número impar de personas es igual a 25. ¿Cuál de las siguientes afirmaciones es siempre verdadera?`,
        opciones: [
            'La cantidad de datos mayores a 25 es igual a la cantidad de datos menores a 25.',
            'La media es igual a 25.',
            'La moda es igual a 25.',
            'En el grupo por lo menos hay una persona que tiene 25 años.'
        ],
        correcta: 3
    },
    {
        pregunta: `La media aritmética entre (x² + 2), (x² – 4), x² y (x² – 2), con x > 0, es 0. El valor de x es:`,
        opciones: ['0', '1', '2', '3'],
        correcta: 1
    }
];
initQuiz();