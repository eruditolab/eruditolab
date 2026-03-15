    const allQuestions = [

    {
        pregunta: `<p>Se realizó el experimento de lanzar dos dados 200 veces, anotando la suma de los puntos obtenidos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Suma</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
            <tr><th>Frecuencia</th><td>10</td><td>18</td><td>13</td><td>19</td><td>26</td><td>24</td><td>25</td><td>16</td><td>20</td><td>17</td><td>12</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El primer cuartil es 5 puntos.</p>
        <p>II) El percentil 60 es 8 puntos.</p>
        <p>III) El percentil 54 es 7 puntos.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de frecuencias de las notas obtenidas por un curso de 34 alumnos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Nota</th><th>Frecuencia</th></tr>
            <tr><td>[2, 3[</td><td>6</td></tr>
            <tr><td>[3, 4[</td><td>12</td></tr>
            <tr><td>[4, 5[</td><td>9</td></tr>
            <tr><td>[5, 6[</td><td>5</td></tr>
            <tr><td>[6, 7[</td><td>2</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 10 de las notas pertenece al intervalo [2, 3[.</p>
        <p>II) La mediana se encuentra en el intervalo modal.</p>
        <p>III) Al menos un alumno obtuvo nota 7.</p>`,
        opciones: ['Solo I', 'Solo I y II', 'Solo I y III', 'Solo II y III'],
        correcta: 1
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[0 – 30[</td><td>150</td></tr>
            <tr><td>[30 – 60[</td><td>200</td></tr>
            <tr><td>[60 – 90[</td><td>250</td></tr>
            <tr><td>[90 – 120[</td><td>300</td></tr>
            <tr><td>[120 – 150[</td><td>100</td></tr>
        </table>`,
        opciones: [
            'Al 35% de la muestra se le asocia un valor menor a 60.',
            'El primer cuartil se encuentra en el intervalo [30 – 60[.',
            'El percentil 95 se encuentra en el intervalo [90 – 120[.',
            '[90 – 120[ es el intervalo modal.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de un curso.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Estatura (m)</th><th>Curso A</th><th>Curso B</th></tr>
            <tr><td>[1,48 – 1,54[</td><td>3</td><td>4</td></tr>
            <tr><td>[1,54 – 1,60[</td><td>6</td><td>6</td></tr>
            <tr><td>[1,60 – 1,66[</td><td>15</td><td>18</td></tr>
            <tr><td>[1,66 – 1,72[</td><td>6</td><td>2</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el cuartil 1 para el Curso B?</p>`,
        opciones: ['[1,48 - 1,54[', '[1,54 - 1,60[', '[1,60 - 1,66[', '[1,66 - 1,72['],
        correcta: 2
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 2 ; 5 ; 9 ; 3 ; 13 ; 10 ; 11 ; 6 ; 7. ¿Cuál es el valor del tercer cuartil?`,
        opciones: ['5', '9', '10,5', '11'],
        correcta: 2
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            'El tercer cuartil es equivalente al noveno percentil.',
            'La media es equivalente al segundo cuartil.',
            'El tercer cuartil es equivalente al percentil setenta y cinco.',
            'El percentil veinte es equivalente a amplificar por dos el percentil 10.'
        ],
        correcta: 2
    },
    {
        pregunta: `Si se tienen 30 datos negativos distintos, ¿Cuál de las siguientes medidas será positiva?`,
        opciones: ['Media', 'Percentil 45', 'Tercer cuartil', 'Ninguna de las anteriores'],
        correcta: 3
    },
    {
        pregunta: `<p>Los datos {22, 22, 17, 15, 16, 19, 17, 19, 15, 16, 18, 18, 15, 20, 19, 16} se representan en el diagrama de cajón adjunto.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/RG2ZPKxh/ME11-M1-P24.jpg" alt="Pregunta 24" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál es el valor de x?</p>`,
        opciones: ['18', '19', '19,5', '20'],
        correcta: 1
    },
    {
        pregunta: `<p>Las estaturas en cm de un grupo de niños de un curso en un jardín infantil se muestran en la tabla adjunta.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Estatura</th><th>Frecuencia</th></tr>
            <tr><td>80 – 90</td><td>4</td></tr>
            <tr><td>91 – 100</td><td>8</td></tr>
            <tr><td>101 – 110</td><td>6</td></tr>
            <tr><td>111 – 120</td><td>2</td></tr>
        </table>
        <p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'El primer cuartil está en el primer intervalo.',
            'El tercer cuartil está en el tercer intervalo.',
            'El percentil 65 está en el segundo intervalo.',
            'El percentil 80 está en el cuarto intervalo.'
        ],
        correcta: 1
    },
    {
        pregunta: `Se consideran los cuadrados de los números del 1 al 11. Entonces, los valores de los cuartiles 1, 2 y 3 son respectivamente:`,
        opciones: ['5, 6 y 7', '3, 6 y 9', '9, 36 y 121', '9, 36 y 81'],
        correcta: 3
    },
    {
        pregunta: `<p>El diagrama de cajón y bigote de la figura adjunta muestra la distribución de las masas corporales en kilogramos de todos los alumnos del 4°A del colegio Antípodas.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/ycThkK8P/ME11-M1-P27.jpg" alt="Pregunta 27" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) siempre verdadera(s)?</p>
        <p>I) El 50% de los estudiantes tiene a lo menos una masa de 64 kg.</p>
        <p>II) El rango intercuartil de las masas corporales de los alumnos es 11 kg.</p>
        <p>III) En el intervalo [72, 93] hay más alumnos que en el intervalo [58, 61].</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III'],
        correcta: 2
    },
    {
        pregunta: `<p>Se realizó una encuesta sobre el número de horas diarias que un grupo de personas dedica a ver televisión, obteniendo los siguientes resultados:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Horas</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
            <tr><th>Frecuencia</th><td>5</td><td>12</td><td>18</td><td>10</td><td>3</td><td>2</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El primer cuartil es 2 horas.</p>
        <p>II) El percentil 60 es 3 horas.</p>
        <p>III) La mediana es 3 horas.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de frecuencias de las edades de un grupo de personas.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Edad</th><th>Frecuencia</th></tr>
            <tr><td>[15, 20[</td><td>8</td></tr>
            <tr><td>[20, 25[</td><td>12</td></tr>
            <tr><td>[25, 30[</td><td>15</td></tr>
            <tr><td>[30, 35[</td><td>10</td></tr>
            <tr><td>[35, 40[</td><td>5</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 30 de las edades pertenece al intervalo [20, 25[.</p>
        <p>II) La mediana se encuentra en el intervalo [25, 30[.</p>
        <p>III) El intervalo modal es [25, 30[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[10 – 20[</td><td>20</td></tr>
            <tr><td>[20 – 30[</td><td>35</td></tr>
            <tr><td>[30 – 40[</td><td>45</td></tr>
            <tr><td>[40 – 50[</td><td>30</td></tr>
            <tr><td>[50 – 60[</td><td>20</td></tr>
        </table>`,
        opciones: [
            'El 20% de la muestra tiene un valor inferior a 20.',
            'El primer cuartil se encuentra en el intervalo [20 – 30[.',
            'El percentil 80 se encuentra en el intervalo [40 – 50[.',
            'El intervalo modal es [30 – 40[.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de dos cursos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Puntaje</th><th>Curso A</th><th>Curso B</th></tr>
            <tr><td>[0 – 20[</td><td>5</td><td>3</td></tr>
            <tr><td>[20 – 40[</td><td>8</td><td>7</td></tr>
            <tr><td>[40 – 60[</td><td>12</td><td>15</td></tr>
            <tr><td>[60 – 80[</td><td>10</td><td>8</td></tr>
            <tr><td>[80 – 100]</td><td>5</td><td>7</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el tercer cuartil para el Curso A?</p>`,
        opciones: ['[40 – 60[', '[60 – 80[', '[80 – 100]', 'No se puede determinar'],
        correcta: 1
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 12 ; 15 ; 18 ; 20 ; 22 ; 25 ; 27 ; 30 ; 32 ; 35. ¿Cuál es el valor del primer cuartil?`,
        opciones: ['18', '18,5', '19', '20'],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            'El segundo cuartil es equivalente al percentil 50.',
            'La mediana es equivalente al percentil 25.',
            'El tercer cuartil es equivalente al percentil 25.',
            'El percentil 10 es equivalente al primer cuartil.'
        ],
        correcta: 0
    },
    {
        pregunta: `<p>La tabla muestra las estaturas (en cm) de un grupo de estudiantes.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Estatura</th><th>Frecuencia</th></tr>
            <tr><td>[150, 155[</td><td>6</td></tr>
            <tr><td>[155, 160[</td><td>10</td></tr>
            <tr><td>[160, 165[</td><td>14</td></tr>
            <tr><td>[165, 170[</td><td>8</td></tr>
            <tr><td>[170, 175]</td><td>2</td></tr>
        </table>
        <p>¿Cuál es el valor aproximado del percentil 40?</p>`,
        opciones: ['158,5 cm', '160,2 cm', '161,8 cm', '163,4 cm'],
        correcta: 0
    },
    {
        pregunta: `<p>En una empresa, los sueldos mensuales (en miles de pesos) se distribuyen según la tabla:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Sueldo</th><th>Frecuencia</th></tr>
            <tr><td>[300 – 400[</td><td>15</td></tr>
            <tr><td>[400 – 500[</td><td>25</td></tr>
            <tr><td>[500 – 600[</td><td>30</td></tr>
            <tr><td>[600 – 700[</td><td>20</td></tr>
            <tr><td>[700 – 800]</td><td>10</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El primer cuartil se encuentra en el intervalo [400 – 500[.</p>
        <p>II) El percentil 70 se encuentra en el intervalo [500 – 600[.</p>
        <p>III) La mediana se encuentra en el intervalo modal.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `Dado el conjunto de datos ordenados: 3, 5, 7, 8, 10, 12, 15, 18, 20, 22, 25. ¿Cuál es el valor del percentil 75?`,
        opciones: ['18', '19', '20', '21'],
        correcta: 1
    },
    {
        pregunta: `<p>Se realizó una prueba a 50 estudiantes y se obtuvieron los siguientes puntajes:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Puntaje</th><th>Frecuencia</th></tr>
            <tr><td>[0 – 20[</td><td>4</td></tr>
            <tr><td>[20 – 40[</td><td>8</td></tr>
            <tr><td>[40 – 60[</td><td>12</td></tr>
            <tr><td>[60 – 80[</td><td>16</td></tr>
            <tr><td>[80 – 100]</td><td>10</td></tr>
        </table>
        <p>¿En qué intervalo se encuentra el percentil 30?</p>`,
        opciones: ['[20 – 40[', '[40 – 60[', '[60 – 80[', '[80 – 100]'],
        correcta: 1
    },
    {
        pregunta: `<p>La siguiente tabla muestra la distribución de frecuencias de las edades de un grupo de personas.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Edad</th><th>Frecuencia</th></tr>
            <tr><td>[0, 10[</td><td>5</td></tr>
            <tr><td>[10, 20[</td><td>12</td></tr>
            <tr><td>[20, 30[</td><td>18</td></tr>
            <tr><td>[30, 40[</td><td>10</td></tr>
            <tr><td>[40, 50]</td><td>5</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 20 se encuentra en el intervalo [10, 20[.</p>
        <p>II) El intervalo donde se ubica la mediana es [20, 30[.</p>
        <p>III) El intervalo donde se ubica el tercer cuartil es [20, 30[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 2
    },
    {
        pregunta: `Dados los siguientes datos ordenados: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. ¿Cuál es el valor del segundo cuartil?`,
        opciones: ['10', '11', '12', '13'],
        correcta: 1
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[5 – 10[</td><td>8</td></tr>
            <tr><td>[10 – 15[</td><td>12</td></tr>
            <tr><td>[15 – 20[</td><td>20</td></tr>
            <tr><td>[20 – 25[</td><td>16</td></tr>
            <tr><td>[25 – 30]</td><td>4</td></tr>
        </table>`,
        opciones: [
            'El 20% de los datos es inferior a 10.',
            'El primer cuartil se encuentra en el intervalo [10 – 15[.',
            'El percentil 80 se encuentra en el intervalo [20 – 25[.',
            'El intervalo modal es [15 – 20[.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de dos grupos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Peso (kg)</th><th>Grupo A</th><th>Grupo B</th></tr>
            <tr><td>[40 – 50[</td><td>4</td><td>6</td></tr>
            <tr><td>[50 – 60[</td><td>8</td><td>10</td></tr>
            <tr><td>[60 – 70[</td><td>12</td><td>8</td></tr>
            <tr><td>[70 – 80[</td><td>6</td><td>4</td></tr>
            <tr><td>[80 – 90]</td><td>2</td><td>2</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el primer cuartil para el Grupo B?</p>`,
        opciones: ['[40 – 50[', '[50 – 60[', '[60 – 70[', '[70 – 80['],
        correcta: 1
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 5, 7, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30. ¿Cuál es el valor del percentil 25?`,
        opciones: ['8', '9', '10', '11'],
        correcta: 1
    },
    {
        pregunta: `<p>La tabla muestra la distribución de frecuencias de las notas obtenidas en un examen.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Nota</th><th>Frecuencia</th></tr>
            <tr><td>[1, 3[</td><td>5</td></tr>
            <tr><td>[3, 5[</td><td>15</td></tr>
            <tr><td>[5, 7[</td><td>20</td></tr>
            <tr><td>[7, 9[</td><td>8</td></tr>
            <tr><td>[9, 10]</td><td>2</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 10 se encuentra en el intervalo [1, 3[.</p>
        <p>II) La mediana se encuentra en el intervalo [5, 7[.</p>
        <p>III) El intervalo modal es [5, 7[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es FALSA?`,
        opciones: [
            'El percentil 50 coincide con la mediana.',
            'El primer cuartil es mayor que el percentil 20.',
            'El tercer cuartil es menor que el percentil 80.',
            'El rango intercuartil es la diferencia entre el percentil 75 y el percentil 25.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En una encuesta sobre ingresos mensuales (en miles de pesos), se obtuvieron los siguientes datos:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Ingreso</th><th>Frecuencia</th></tr>
            <tr><td>[200 – 300[</td><td>25</td></tr>
            <tr><td>[300 – 400[</td><td>40</td></tr>
            <tr><td>[400 – 500[</td><td>35</td></tr>
            <tr><td>[500 – 600[</td><td>20</td></tr>
            <tr><td>[600 – 700]</td><td>10</td></tr>
        </table>
        <p>¿En qué intervalo se encuentra el percentil 65?</p>`,
        opciones: ['[300 – 400[', '[400 – 500[', '[500 – 600[', '[600 – 700]'],
        correcta: 1
    },
    {
        pregunta: `Dados los siguientes datos ordenados: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23. ¿Cuál es el valor del tercer cuartil?`,
        opciones: ['17', '18', '19', '20'],
        correcta: 1
    },
    {
        pregunta: `<p>La siguiente tabla muestra la distribución de frecuencias de las edades de los participantes en un taller.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Edad</th><th>Frecuencia</th></tr>
            <tr><td>[18, 22[</td><td>10</td></tr>
            <tr><td>[22, 26[</td><td>15</td></tr>
            <tr><td>[26, 30[</td><td>20</td></tr>
            <tr><td>[30, 34[</td><td>12</td></tr>
            <tr><td>[34, 38]</td><td>3</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 40 se encuentra en el intervalo [22, 26[.</p>
        <p>II) La mediana se encuentra en el intervalo [26, 30[.</p>
        <p>III) El intervalo modal es [26, 30[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[0 – 10[</td><td>12</td></tr>
            <tr><td>[10 – 20[</td><td>18</td></tr>
            <tr><td>[20 – 30[</td><td>24</td></tr>
            <tr><td>[30 – 40[</td><td>16</td></tr>
            <tr><td>[40 – 50]</td><td>10</td></tr>
        </table>`,
        opciones: [
            'El 30% de los datos es inferior a 20.',
            'El primer cuartil se encuentra en el intervalo [10 – 20[.',
            'El percentil 80 se encuentra en el intervalo [30 – 40[.',
            'El intervalo modal es [20 – 30[.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de dos equipos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Puntaje</th><th>Equipo A</th><th>Equipo B</th></tr>
            <tr><td>[0 – 10[</td><td>2</td><td>1</td></tr>
            <tr><td>[10 – 20[</td><td>5</td><td>4</td></tr>
            <tr><td>[20 – 30[</td><td>8</td><td>10</td></tr>
            <tr><td>[30 – 40[</td><td>7</td><td>6</td></tr>
            <tr><td>[40 – 50]</td><td>3</td><td>4</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el segundo cuartil para el Equipo B?</p>`,
        opciones: ['[10 – 20[', '[20 – 30[', '[30 – 40[', '[40 – 50]'],
        correcta: 1
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40. ¿Cuál es el valor del percentil 30?`,
        opciones: ['12', '13,6', '14,8', '16'],
        correcta: 1
    },
    {
        pregunta: `<p>La tabla muestra la distribución de frecuencias de los tiempos (en minutos) de atención al cliente.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Tiempo</th><th>Frecuencia</th></tr>
            <tr><td>[0, 5[</td><td>8</td></tr>
            <tr><td>[5, 10[</td><td>15</td></tr>
            <tr><td>[10, 15[</td><td>22</td></tr>
            <tr><td>[15, 20[</td><td>12</td></tr>
            <tr><td>[20, 25]</td><td>3</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 25 se encuentra en el intervalo [5, 10[.</p>
        <p>II) La mediana se encuentra en el intervalo [10, 15[.</p>
        <p>III) El intervalo modal es [10, 15[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            'El primer cuartil es siempre menor que el percentil 20.',
            'El tercer cuartil es siempre mayor que la mediana.',
            'La mediana es siempre igual al percentil 50.',
            'El rango intercuartil contiene siempre el 50% central de los datos.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En una prueba de resistencia, se registraron los siguientes tiempos (en segundos):</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Tiempo</th><th>Frecuencia</th></tr>
            <tr><td>[30 – 40[</td><td>5</td></tr>
            <tr><td>[40 – 50[</td><td>12</td></tr>
            <tr><td>[50 – 60[</td><td>18</td></tr>
            <tr><td>[60 – 70[</td><td>10</td></tr>
            <tr><td>[70 – 80]</td><td>5</td></tr>
        </table>
        <p>¿En qué intervalo se encuentra el percentil 45?</p>`,
        opciones: ['[40 – 50[', '[50 – 60[', '[60 – 70[', '[70 – 80]'],
        correcta: 1
    },
    {
        pregunta: `Dados los siguientes datos ordenados: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30. ¿Cuál es el valor del primer cuartil?`,
        opciones: ['8', '9', '10', '11'],
        correcta: 1
    },
    {
        pregunta: `<p>La siguiente tabla muestra la distribución de frecuencias de las calificaciones de un curso.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Calificación</th><th>Frecuencia</th></tr>
            <tr><td>[1, 3[</td><td>3</td></tr>
            <tr><td>[3, 5[</td><td>8</td></tr>
            <tr><td>[5, 7[</td><td>15</td></tr>
            <tr><td>[7, 9[</td><td>10</td></tr>
            <tr><td>[9, 10]</td><td>4</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 15 se encuentra en el intervalo [3, 5[.</p>
        <p>II) La mediana se encuentra en el intervalo [5, 7[.</p>
        <p>III) El intervalo donde se ubica el tercer cuartil es [5, 7[.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[2 – 4[</td><td>6</td></tr>
            <tr><td>[4 – 6[</td><td>14</td></tr>
            <tr><td>[6 – 8[</td><td>20</td></tr>
            <tr><td>[8 – 10[</td><td>12</td></tr>
            <tr><td>[10 – 12]</td><td>8</td></tr>
        </table>`,
        opciones: [
            'El 20% de los datos es inferior a 4.',
            'El primer cuartil se encuentra en el intervalo [4 – 6[.',
            'El percentil 70 se encuentra en el intervalo [6 – 8[.',
            'El intervalo modal es [8 – 10[.'
        ],
        correcta: 3
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de dos grupos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Altura (cm)</th><th>Grupo X</th><th>Grupo Y</th></tr>
            <tr><td>[140 – 150[</td><td>5</td><td>3</td></tr>
            <tr><td>[150 – 160[</td><td>12</td><td>10</td></tr>
            <tr><td>[160 – 170[</td><td>18</td><td>20</td></tr>
            <tr><td>[170 – 180[</td><td>8</td><td>10</td></tr>
            <tr><td>[180 – 190]</td><td>2</td><td>2</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el tercer cuartil para el Grupo X?</p>`,
        opciones: ['[150 – 160[', '[160 – 170[', '[170 – 180[', '[180 – 190]'],
        correcta: 2
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19. ¿Cuál es el valor del percentil 60?`,
        opciones: ['11', '11,8', '12,2', '13'],
        correcta: 1
    }
];
initQuiz();