    const allQuestions = [
    {
        pregunta: `Si Pedro tiene un llavero con 4 llaves y solo una de ellas abre una puerta. ¿Cuál es la probabilidad de que si prueba las llaves, logre abrir la puerta al tercer intento sin usar una llave más de una vez?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">4</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">4</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">16</span></span></span>'
        ],
        correcta: 0
    },
    {
        pregunta: `<p>Se consultó a un grupo de 50 personas acerca de su sabor favorito de cierto tipo de helado. En la tabla adjunta se registran los resultados obtenidos.</p> 
        <table border="1" style="margin: 15px auto; border-collapse: collapse; text-align: center;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th>Sabor</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Chocolate</td><td>15</td></tr>
            <tr><td>Vainilla</td><td>9</td></tr>
            <tr><td>Frutilla</td><td>6</td></tr>
            <tr><td>Manjar</td><td>20</td></tr>
            </tr>
        </tbody>
        </table>
        <p>Si se elige a una de estas personas al azar, ¿cuál es la probabilidad de que su sabor favorito sea de vainilla o de frutilla?</p>`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">10</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">50</span></span></span>∙<span class="math-expr"><span class="fraction"><span class="num">6</span><span class="den">50</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">55</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">15</span></span></span>'
        ],
        correcta: 0
    },
    {
        pregunta: `En una carrera de 100 metros planos, compiten cuatro atletas: A, B, C y D. Si A tiene el doble de probabilidad de ganar que B; C tiene la mitad que B de ganar y la probabilidad de D es igual a la de A. ¿Cuál(es) de las siguientes afirmaciones es(son) verdadera(s)?
        <br>I) La probabilidad de ganar C es <span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">11</span></span></span>
        <br>II) La probabilidad de que A no gane es de <span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">11</span></span></span>
        <br>III) La probabilidad de que A o C ganen es de <span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">11</span></span></span>`,
        opciones: ['Solo I', 'Solo II', 'Solo III', 'Solo I y II', 'Solo II y III'],
        correcta: 4
    },
    {
        pregunta: `En una bolsa hay en total 22 bolitas del mismo tipo numeradas en forma correlativa del 1 al 22. Si se extrae al azar una bolita de la bolsa, ¿cuál es la probabilidad de que esta tenga un número de un dígito o un número múltiplo de 10?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">9</span></span></span>∙<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">22</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">21</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">9</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">22</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">22</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">22</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">22</span></span></span>'
        ],
        correcta: 3
    },
    {
        pregunta: `Se tiene una urna con fichas numeradas del 1 al 15. Si se elige una ficha al azar, ¿cuál es la probabilidad de que la ficha contenga un número que sea múltiplo de 2?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">15</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">15</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">15</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `Se tienen dos dados, el primero tiene números del 1 al 5, con una cara vacía; mientras que, el segundo dado tiene números del 5 al 8, con dos caras vacías. Si se lanzan los dos dados juntos. ¿Cuál es la probabilidad de que la suma de sus dígitos sea un número primo?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">11</span><span class="den">36</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">36</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">15</span><span class="den">36</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `Según cierta información de prensa del año 2002, el tenista nacional Fernando González tenía un 45% de probabilidad de ganar al “Chino” Ríos y del 60% de ganar al “Nico” Massú. Si en un torneo de aquél año hubiese enfrentado a ambos, ¿cuál es la probabilidad de que hubiese ganado sólo a uno de ellos?`,
        opciones: ['24%', '25%', '45%', '51%', '55%'],
        correcta: 3
    },
    {
        pregunta: `En una sala con 100 alumnos, 30 usan lentes, 40 son hombres y de estos 15 usan lentes. Al seleccionar un alumno al azar, ¿cuál es la probabilidad que sea mujer y no use lentes?`,
        opciones: ['0,45', '0,60', '0,70', '0,85'],
        correcta: 0
    },
    {
        pregunta: `Se tiene un dado de doce caras (dodecaedro regular), numeradas del 1 al 12. ¿Cuál es la probabilidad de que al lanzarlo una vez, el número obtenido sea un cuadrado perfecto o un múltiplo de 3?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">12</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">12</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `Se elige al azar un número entero positivo del 1 al 19. ¿Cuál es la probabilidad de que el número sea múltiplo de 3 o de 5?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">19</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">8</span><span class="den">19</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">6</span><span class="den">19</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">19</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">19</span></span></span>'
        ],
        correcta: 1
    },
    {
        pregunta: `En una muestra gastronómica la comida está repartida en tres mesas: la primera de comida salada, la segunda de comida dulce y la tercera de comida agridulce. En cada mesa hay 30 porciones de comida fría y 50 de comida caliente. Al elegir un plato al azar, ¿cuál es la probabilidad de que este sea una comida dulce fría o una comida caliente?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">40</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">4</span></span></span>'
        ],
        correcta: 3
    },
    {
        pregunta: `Si en un experimento se observa que un evento sucede en q de los casos y NO sucede en r de los mismos casos, entonces ¿cuál es la probabilidad de que el evento suceda?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">q</span><span class="den">q+r</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">r</span><span class="den">q+r</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">r</span><span class="den">q</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">q+r</span><span class="den">q</span></span></span>'
        ],
        correcta: 0
    },
    {
        pregunta: `En una fiesta de cumpleaños a cada invitado se le regala un “raspe”, repartiéndose 40 en total, de los cuales el 15% tiene premio. Si se eligen tres invitados al azar, ¿cuál es la probabilidad de que los tres tengan un raspe premiado?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">40</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">15</span><span class="den">40</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">494</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">247</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `Si se escoge un número al azar entre los primeros 30 números naturales, ¿cuál es la probabilidad de que éste sea un número primo?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">30</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">10</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `En una caja hay en total siete bolitas, de las cuales tres son blancas y cuatro son negras, todas del mismo tipo. Si se extraen al azar dos bolitas sin reposición, ¿cuál es la probabilidad de que la primera sea negra y la segunda sea blanca?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">7</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">12</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">42</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">12</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">12</span><span class="den">49</span></span></span>'
        ],
        correcta: 0
    },
    {
        pregunta: `Se realizó una encuesta sobre las preferencias de un grupo de personas respecto a su pasatiempo favorito, tal que cada persona eligió solo un pasatiempo. En esta encuesta 30 personas indicaron que su pasatiempo favorito es leer, 48 personas indicaron que es hacer deporte y n personas indicaron que es ver películas. Al elegir una persona al azar de este grupo, la probabilidad de que su pasatiempo favorito no sea hacer deporte es 0,6. ¿Cuál es la cantidad de personas que indicaron ver películas?`,
        opciones: ['22', '42', '52', '117'],
        correcta: 1
    },
    {
        pregunta: `Una caja contiene 3 esferas verdes y 2 amarillas. Si se sacan sucesivamente 2 esferas, sin devolverlas a la caja, ¿cuál es la probabilidad de que éstas sean de distinto color?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">10</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">10</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `Una urna o caja contiene 4 bolas negras y 3 blancas. La probabilidad de extraer dos bolas blancas con reposición es:`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">4</span><span class="den">7</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">7</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">12</span><span class="den">49</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">49</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">7</span></span></span>'
        ],
        correcta: 3
    },
    {
        pregunta: `En un joyero hay 6 pulseras de plata y 4 de oro, si se sacan dos pulseras al azar, ¿cuál es la probabilidad de que al menos una sea de oro?`,
        opciones: [
            '1',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">6</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `En una panadería hay 18 hombres y 22 mujeres. Se sabe que 13 de esos hombres y 10 de esas mujeres prefieren empanadas de pino y el resto prefiere empanadas de queso. Si se elige una persona al azar, ¿cuál es la probabilidad de que esa persona sea hombre y prefiera las empanadas de queso?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">40</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">8</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">18</span></span></span>'
        ],
        correcta: 1
    },
    {
        pregunta: `Al lanzar un dado, ¿cuál es la probabilidad de que el resultado sea impar y divisor de 6?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span>'
        ],
        correcta: 1
    },
    {
        pregunta: `Un reloj análogo perdió dos de sus punteros, quedando sólo el segundero. ¿Cuál es la probabilidad de obtener un múltiplo de 3 al mirar una vez el reloj?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">9</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">18</span></span></span>'
        ],
        correcta: 1
    },
    {
        pregunta: `Un curso mixto está compuesto por 6 varones y 4 mujeres. Si se escogen dos alumnos sucesivamente a una interrogación, ¿cuál es la probabilidad de que estos sean de distinto sexo?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">8</span><span class="den">10</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">8</span><span class="den">15</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">24</span><span class="den">90</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">24</span><span class="den">100</span></span></span>'
        ],
        correcta: 1
    },
    {
        pregunta: `Si una persona tiene 5 hijos, ¿cuál es la probabilidad de que 3 sean hombres y 2 sean mujeres?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">32</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">16</span></span></span>'
        ],
        correcta: 3
    },
    {
        pregunta: `Se lanzan dos dados normales. ¿Cuál es la probabilidad de que la suma de los valores obtenidos sea igual a su producto?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">6</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">18</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">36</span></span></span>'
        ],
        correcta: 3
    },
    {
        pregunta: `Hay 7 fichas azules y 5 fichas verdes en la bolsa A, mientras que en la bolsa B hay 5 fichas azules y 15 fichas verdes. Al sacar una ficha de cada bolsa, ¿cuál es la probabilidad que ambas sean verdes?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">48</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">48</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">16</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">16</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `27.	Ramiro y Gonzalo están matriculados en un curso de fotografía. Desde que comenzó el curso, la asistencia a clases de Ramiro ha sido de un 80% y la de Gonzalo de un 60%, siendo independientes sus ausencias. Si se elige un día al azar en que se haya impartido el curso, ¿cuál es la probabilidad de que al menos uno de ellos haya asistido a clases?`,
        opciones: ['0,70', '0,75', '0,82', '0,92'],
        correcta: 3
    },
    {
        pregunta: `La probabilidad de que un alumno universitario apruebe la asignatura A es 0,8 y la probabilidad de que apruebe la asignatura B es 0,9, siendo independiente los resultados que se obtengan en cada una de las asignaturas. ¿Cuál es la probabilidad de que apruebe al menos una de estas asignaturas?`,
        opciones: ['0,85', '0,98', '0,92', '0,96'],
        correcta: 1
    },
    {
        pregunta: `Se tienen tres cajas, A, B y C. La caja A contiene 3 fichas blancas y 9 rojas, la caja B contiene 4 fichas blancas y 8 rojas y la caja C contiene 8 fichas blancas y 4 rojas. Si se saca al azar una ficha de cada caja, entonces ¿cuál es la probabilidad que las tres fichas sean del mismo color?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">18</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">6</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">9</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">108</span></span></span>'
        ],
        correcta: 2
    },
    {
        pregunta: `En una caja hay seis ampolletas, dos de 25 W y cuatro de 40 W. Se extraen dos al azar. ¿Probabilidad de que ambas sean de 40 W?`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">5</span></span></span>',
            '<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">5</span></span></span>'
        ],
        correcta: 2
    }
];
initQuiz();