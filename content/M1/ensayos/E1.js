const CURSO     = 'M1';
const ENSAYO_ID = 'E1';
    const questions = [
    {
        pregunta: `¿Cuál es el valor de 1 - (-3)(-2 - 6)?`,
        opciones: [
            "-32",
            "-23",
            "-16",
            "-4"
        ],
        correcta: 1
    },
    {
        pregunta: `Consuelo y dos amigas comieron en un restaurante. La cuenta total fue de 44.400 pesos. Consuelo consumió un sándwich de 8.900 pesos y una bebida de 2.500 pesos. Sus dos amigas consumieron cada una un sándwich de 8.900 pesos y una bebida de 2.500 pesos, además compartieron una orden de sopaipillas de 4.800 pesos que acordaron dividir en partes iguales. ¿Cuánto tiene que pagar Consuelo?`,
        opciones: [
            "$8.900",
            "$9.000",
            "$12.000",
            "$22.200"
        ],
        correcta: 1
    },
    {
        pregunta: `Para calcular el valor de la expresión <span class='fraction'><span class='num'>-2(4·5) - (30 - 2·3)</span><span class='den'>12</span></span>, se realizan los siguientes pasos, cometiéndose un error.<br><br>Paso 1: se reescribe -2(4·5) como (-8)·(-10), obteniéndose <span class='fraction'><span class='num'>(-8)·(-10) - (30 - 2·3)</span><span class='den'>12</span></span><br>Paso 2: se resuelve (30 - 2·3), obteniéndose <span class='fraction'><span class='num'>(-8)·(-10) - 24</span><span class='den'>12</span></span><br>Paso 3: se resuelve el numerador, obteniéndose <span class='fraction'><span class='num'>56</span><span class='den'>12</span></span><br>Paso 4: se simplifica la fracción del paso anterior, obteniéndose <span class='fraction'><span class='num'>14</span><span class='den'>3</span></span><br><br>¿En cuál de los pasos se cometió el error?`,
        opciones: [
            "En el Paso 1",
            "En el Paso 2",
            "En el Paso 3",
            "En el Paso 4"
        ],
        correcta: 0
    },
    {
        pregunta: `En un juego, en cada partida un jugador debe responder 10 preguntas. Cuando el jugador da una respuesta correcta gana una ficha blanca que vale 1 punto, y cuando da una respuesta incorrecta gana una ficha negra que vale -1 punto. En la primera partida obtuvo 5 blancas y 5 negras, en la segunda partida obtuvo 5 blancas y 4 negras, y en la tercera partida obtuvo 4 blancas y 2 negras. ¿Cuál de las siguientes expresiones representa el puntaje final de este jugador?`,
        opciones: [
            "(5·1 - 5·(-1)) + (5·1 - 4·(-1)) + (4·1 - 2·(-1))",
            "(5·1 + 5·(-1)) + (5·1 + 4·(-1)) + (4·1 + 2·(-1))",
            "(5·(-1) + 5·1) + (5·(-1) + 4·1) + (4·(-1) + 2·1)",
            "(5·1 + 5·1) + (5·1 + 4·1) + (4·1 + 2·1)"
        ],
        correcta: 1
    },
    {
        pregunta: `Una persona tiene una caja con 12 huevos y realiza lo siguiente: aparta <span class='fraction'><span class='num'>1</span><span class='den'>2</span></span> del total para una tortilla y <span class='fraction'><span class='num'>1</span><span class='den'>6</span></span> del total para huevos revueltos, utiliza la mitad de los huevos restantes para preparar un queque y al guardar la caja se le rompe un huevo y lo elimina. ¿Cuántos huevos le quedan?`,
        opciones: [
            "1 huevo",
            "2 huevos",
            "3 huevos",
            "4 huevos"
        ],
        correcta: 1
    },
    {
        pregunta: `Se prepararán 200 copas de un cóctel. Cada copa requiere 3 onzas de bebida gaseosa y 1/2 onza de jugo de limón. Si se considera que 1 onza equivale a 30 mL, ¿cuántos mL de jugo de limón se necesitarán en total?`,
        opciones: [
            "300 mL",
            "7.500 mL",
            "9.000 mL",
            "21.000 mL"
        ],
        correcta: 0
    },
    {
        pregunta: `La masa molar de un compuesto químico se calcula sumando las masas molares de todos los átomos que lo conforman. El ácido sulfúrico tiene 2 átomos de hidrógeno (masa molar 1 g/mol cada uno), 1 átomo de azufre (masa molar 32 g/mol) y 4 átomos de oxígeno (masa molar 16 g/mol cada uno). ¿Cuál de las siguientes expresiones representa la masa molar del ácido sulfúrico?`,
        opciones: [
            "(1 + 32 + 16) g/mol",
            "(2 + 4) · (32 + 16) g/mol",
            "(2·1 + 1·32 + 4·16) g/mol",
            "(1 + 2 + 4) · (1 + 32 + 16) g/mol"
        ],
        correcta: 2
    },
    {
        pregunta: `Una hoja de papel de 20 cm de ancho y 30 cm de largo se dobla sucesivamente por la mitad del lado más largo. Después de cada doblez se forma un nuevo rectángulo. ¿Cuántos dobleces se le deben hacer para conseguir un rectángulo de 2,5 cm de ancho y 3,75 cm de largo?`,
        opciones: [
            "3",
            "4",
            "5",
            "6"
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones permite justificar que 5 es el 25% de 20?`,
        opciones: [
            "Que 20 + 5 = 25",
            "Que 5, 20 y 25 son múltiplos de 5",
            "Que 5 es divisor de 20",
            "Que 5 es la cuarta parte de 20"
        ],
        correcta: 3
    },
    {
        pregunta: `Un círculo está dividido en 9 partes iguales y 8 de ellas se pintaron de color gris. ¿Qué porcentaje de la figura se pintó de color gris?`,
        opciones: [
            "11,1%",
            "12,5%",
            "80%",
            "88,8%"
        ],
        correcta: 3
    },
        {
        pregunta: `En una tienda, el precio de un artículo es 24.000 pesos. Si se aplica un descuento del 15% por compra al contado y luego un recargo del 10% por envío a domicilio, ¿cuál es el precio final que debe pagar un cliente que compra al contado y solicita envío?`,
        opciones: [
            "$22.440",
            "$22.800",
            "$23.160",
            "$24.000"
        ],
                correcta: 0
    },
    {
        pregunta: `En un tablero de ajedrez las casillas tienen de lado 5 cm. El diámetro de la base del rey debe medir entre un 75% y un 80% del lado de la casilla para cumplir con el estándar. ¿Entre qué valores debe estar el diámetro de la base del rey?`,
        opciones: [
            "Entre 15 cm y 16 cm",
            "Entre 4,2 cm y 4,25 cm",
            "Entre 3,75 cm y 4 cm",
            "Entre 1,875 cm y 2 cm"
        ],
        correcta: 2
    },
    {
        pregunta: `Una cafetería ofrece la promoción "4 cafés al precio de 3". Un grupo de cinco personas compra esta promoción y desean dividir el total a pagar en partes iguales. ¿Qué porcentaje de descuento obtuvo cada persona al pagar por su café?`,
        opciones: [
            "4%",
            "5%",
            "20%",
            "25%"
        ],
        correcta: 2
    },
    {
        pregunta: `En una elección, el 45% de los electores no votó y el candidato ganador obtuvo 6 de cada 10 votos emitidos. ¿Qué porcentaje del total de electores votó por el candidato ganador?`,
        opciones: [
            "2,7%",
            "3,3%",
            "27%",
            "33%"
        ],
        correcta: 3
    },
    {
        pregunta: `En una encuesta realizada a 200 personas, el 35% prefiere el producto A, el 45% prefiere el producto B y el resto prefiere el producto C. ¿Cuántas personas prefieren el producto C?`,
        opciones: [
            "20",
            "30",
            "40",
            "50"
        ],
        correcta: 2
    },
    {
        pregunta: `En un gráfico circular, la alternativa A fue seleccionada por 80 personas, la B por 40 personas, la C por 120 personas y la D por 60 personas. Considerando que todas las personas marcaron solo una alternativa, ¿cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            "Más del 50% de las personas marcó las alternativas C o D",
            "Exactamente un 25% de las personas marcó la alternativa C",
            "Exactamente un 4% de las personas marcó la alternativa B",
            "Menos del 25% de las personas marcó las alternativas B o C"
        ],
        correcta: 0
    },
    {
        pregunta: `Una persona compra 5 cajas de huevos, cada caja contiene 6 bandejas y cada bandeja tiene 30 huevos. Se quebraron el 1% de los huevos comprados. Si para cada bizcochuelo ocupa 6 huevos, ¿cuántos bizcochuelos puede preparar con los huevos que le quedaron?`,
        opciones: [
            "150",
            "149",
            "148",
            "135"
        ],
        correcta: 1
    },
    {
        pregunta: `Se comienza un cultivo con 100 bacterias que duplican su cantidad cada hora. ¿Cuántas bacterias habrá en el cultivo después de 24 horas?`,
        opciones: [
            "200·25",
            "200·24",
            "100·2²⁴",
            "100·2²⁵"
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el valor de 2 · 2√5?`,
        opciones: [
            "2√10",
            "4√5",
            "10",
            "4√10"
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el valor de <span class='fraction'><span class='num'>2³ · 3⁴</span><span class='den'>2 · 9</span></span>?`,
        opciones: [
            "36",
            "72",
            "625",
            "1296"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de (-2)⁶?`,
        opciones: [
            "-64",
            "-12",
            "12",
            "64"
        ],
        correcta: 3
    },
    {
        pregunta: `La suma de dos números es 45 y su diferencia es 15. ¿Cuál es el valor del número mayor?`,
        opciones: [
            "15",
            "20",
            "25",
            "30"
        ],
        correcta: 2
    },
    {
        pregunta: `La diagonal de un prisma recto de base rectangular se calcula como √(a² + b² + c²), con a, b y c las medidas de sus aristas. La diagonal de un prisma mide √83 cm y dos de sus aristas miden 3 cm y 5 cm. ¿Cuánto mide la arista faltante?`,
        opciones: [
            "4 cm",
            "7 cm",
            "19 cm",
            "49 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `Para representar la expresión (4·125)³ como producto de potencias de base 2 y 5, se realiza el siguiente procedimiento, cometiéndose un error.<br><br>Paso 1: se reescribe como (2²·5³)³<br>Paso 2: se aplica propiedad, obteniéndose (2²)³·(5³)³<br>Paso 3: se aplica potencia de una potencia, obteniéndose 2⁽²⁺³⁾·5⁽³⁺³⁾<br>Paso 4: se resuelve, obteniéndose 2⁵·5⁶<br><br>¿En cuál de los pasos se cometió el error?`,
        opciones: [
            "En el Paso 1",
            "En el Paso 2",
            "En el Paso 3",
            "En el Paso 4"
        ],
        correcta: 2
    },
    {
        pregunta: `En el año 2020, la capacidad mundial de almacenamiento alcanzó los 6,7 zettabytes. Se estima que aumentará a un ritmo del 20% anualmente entre 2020 y 2025. La capacidad en 2025 se puede proyectar por el modelo 6,7·(1,2)ᴺ. ¿Qué representa el parámetro N?`,
        opciones: [
            "El cociente entre 2025 y 2020",
            "La diferencia entre 2025 y 2020",
            "La capacidad en que aumentó el almacenamiento entre 2020 y 2025",
            "La capacidad en que aumentó el almacenamiento entre 2020 y 2021"
        ],
        correcta: 1
    },
    {
        pregunta: `Si la edad actual de Pedro es m años, ¿cuál de las siguientes expresiones representa "la edad de Pedro hace n años disminuida en 3 años"?`,
        opciones: [
            "<span class='fraction'><span class='num'>m - n</span><span class='den'>3</span></span>",
            "m - n - 3",
            "m - (n - 3)",
            "(m + n) - 3"
        ],
        correcta: 1
    },
    {
        pregunta: `En meses de menor demanda, el metro traslada 2.600.000 personas cada día, recibiendo 2 mil millones de pesos diarios por pasaje. En meses de mayor demanda, traslada 100.000 personas más por día. Si el precio del pasaje es el mismo, ¿cuánto dinero recibe diariamente en meses de mayor demanda?`,
        opciones: [
            "$2.000.100.000",
            "$2.076.923.077",
            "$2.100.000.000",
            "$2.700.000.000"
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es igual a (2x - 3)² - (2x - 3)(2x + 3)?`,
        opciones: [
            "18",
            "0",
            "-6x + 18",
            "-12x + 18"
        ],
        correcta: 3
    },
    {
        pregunta: `Para preparar un cereal instantáneo para bebé, las instrucciones indican 5 cucharadas (cada cuchara de 5 gramos) por 200 mL de leche tibia. Si se quiere preparar usando solo 120 mL de leche, manteniendo las proporciones, ¿cuántas cucharadas se deben agregar?`,
        opciones: [
            "3",
            "4",
            "6",
            "9"
        ],
        correcta: 0
    },
    {
        pregunta: `En un estacionamiento se cobra de manera proporcional al tiempo. Por 1 minuto se pagan 12 pesos, por 2 minutos 24 pesos, por 3 minutos 36 pesos, por 4 minutos 48 pesos. ¿Cuál expresión representa el precio por pagar por x minutos?`,
        opciones: [
            "12x",
            "12 + x",
            "x + 11",
            "x + 12"
        ],
        correcta: 0
    },
    {
        pregunta: `Javier y David compraron una bolsa de 24 dulces a 2.100 pesos. Javier aportó 1.400 pesos y David el resto. Venden cada dulce a 200 pesos y se reparten las ganancias proporcionalmente a lo aportado. ¿Cuánto recibirá Javier?`,
        opciones: [
            "$1.600",
            "$2.400",
            "$2.700",
            "$3.200"
        ],
        correcta: 3
    },
    {
        pregunta: `Pedro ahorró durante 8 semanas con dinero que su abuela le daba semanalmente (siempre el mismo monto). Luego, en los dos meses siguientes recibió $10.000 cada mes y trabajó 6 sábados ganando $15.000 diarios. Si juntó $210.000 en total, ¿cuánto le daba la abuela semanalmente?`,
        opciones: [
            "$12.500",
            "$15.000",
            "$23.125",
            "$26.250"
        ],
        correcta: 0
    },
    {
        pregunta: `La solución de una inecuación es el intervalo que va desde 1 hasta 3, incluyendo ambos extremos. ¿Cuál de los siguientes intervalos representa esta solución?`,
        opciones: [
            "[1, 3]",
            "]1, 3[",
            "[1, 3[",
            "]1, 3]"
        ],
        correcta: 0
    },
    {
        pregunta: `La dosis de un medicamento es efectiva si se suministran como mínimo 25 mg por kilogramo una vez al día, pero no puede ser mayor a 2000 mg diarios. ¿Cuántos kilogramos, como máximo, debe tener un paciente para que el medicamento sea efectivo y no supere la dosis diaria?`,
        opciones: [
            "25 kg",
            "55 kg",
            "80 kg",
            "105 kg"
        ],
        correcta: 2
    },
    {
        pregunta: `El índice HOMA-IR se calcula como <span class='fraction'><span class='num'>insulinemia · glucemia</span><span class='den'>22,5</span></span>. Valores inferiores a 1,96 indican sin resistencia a la insulina. Si una persona tiene glucemia de 5,6 mmol/L, ¿cuál desigualdad representa la condición para que su insulinemia (x) esté sin resistencia?`,
        opciones: [
            "x < <span class='fraction'><span class='num'>1,96·22,5</span><span class='den'>5,6</span></span>",
            "x < <span class='fraction'><span class='num'>1,96·5,6</span><span class='den'>22,5</span></span>",
            "x > <span class='fraction'><span class='num'>1,96·22,5</span><span class='den'>5,6</span></span>",
            "x > <span class='fraction'><span class='num'>1,96·5,6</span><span class='den'>22,5</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Una persona compró una camisa y un pantalón pagando 50.000 pesos en total. La camisa costó el 30% del total pagado, mientras que el pantalón tenía ya un descuento del 20% sobre su precio original. En el sistema: <span class='fraction'><span class='num'>A</span><span class='den'>50.000</span></span> = <span class='fraction'><span class='num'>30</span><span class='den'>100</span></span> y B·<span class='fraction'><span class='num'>80</span><span class='den'>100</span></span> + A = 50.000, ¿qué representa B?`,
        opciones: [
            "El precio original del pantalón",
            "El precio final del pantalón",
            "La suma del precio original de ambas prendas",
            "La suma del precio final de ambas prendas"
        ],
        correcta: 0
    },
    {
        pregunta: `Una empresa vende poleras: personalizadas a 8.500 pesos y de catálogo a 7.500 pesos, con envío a domicilio de 2.500 pesos. En un día se vendieron 18 poleras en 10 envíos, recaudando 146.000 pesos solo por las poleras. Para determinar cuántas personalizadas se vendieron, se plantea el sistema:<br>x + y = 18<br>8.500x + 7.500y = 146.000<br><br>¿Cuál sería el siguiente paso correcto para resolver el sistema?`,
        opciones: [
            "Multiplicar la primera ecuación por 8.500",
            "Despejar y = 18 - x y reemplazar en la segunda",
            "Sumar ambas ecuaciones",
            "Restar ambas ecuaciones"
        ],
        correcta: 1
    },
    {
        pregunta: `Considera la función g definida por g(x) = 8x - 5. Si g(x) = 35, ¿cuál es el valor de x?`,
        opciones: [
            "15",
            "5",
            "240",
            "275"
        ],
        correcta: 1
    },
    {
        pregunta: `Para pintar líneas en una carretera se usaron máquinas idénticas que pintan 5 km por hora cada una. El trabajo duró 6 horas: las primeras 4 horas trabajó solo una máquina, y las siguientes 2 horas trabajaron dos máquinas simultáneamente. ¿Cuántos kilómetros de línea se pintaron en total?`,
        opciones: [
            "20 km",
            "30 km",
            "40 km",
            "50 km"
        ],
        correcta: 1
    },
    {
        pregunta: `En una imprenta cobran 115 pesos por página más una tarifa fija de 27.000 pesos por el servicio. ¿Cuál función modela el precio por empastar una tesis de x páginas?`,
        opciones: [
            "f(x) = 115x",
            "g(x) = 115x + 27.000",
            "h(x) = (115 + 27.000)x",
            "k(x) = 115 + 27.000x"
        ],
        correcta: 1
    },
    {
        pregunta: `La distancia de reacción f y la rapidez del vehículo se relacionan mediante f(x) = ax. A 110 km/h la distancia es 33 m, y a 70 km/h es 21 m. ¿Cuál es la distancia de reacción a 30 km/h?`,
        opciones: [
            "15 m",
            "10 m",
            "9 m",
            "1 m"
        ],
        correcta: 2
    },
    {
        pregunta: `En 2021 se produjeron 57,4 millones de toneladas de basura tecnológica y en 2022 fueron 59,4 millones. Si el aumento anual es constante, ¿cuántos millones se producirían en 2030?`,
        opciones: [
            "77,4",
            "75,4",
            "73,4",
            "71,4"
        ],
        correcta: 0
    },
    {
        pregunta: `Una empresa construye casas en terrenos rectangulares donde el largo mide 5 m más que el ancho. Si el área de un terreno es 104 m², ¿cuál es su perímetro?`,
        opciones: [
            "62 m",
            "42 m",
            "31 m",
            "21 m"
        ],
        correcta: 1
    },
    {
        pregunta: `La función h(t) = -5t² + 30t representa la altura de un chorro de agua en función de la distancia horizontal t (en cm). ¿Cuál es la altura máxima alcanzada?`,
        opciones: [
            "25 cm",
            "30 cm",
            "45 cm",
            "60 cm"
        ],
        correcta: 2
    },
    {
        pregunta: `Una malla rectangular está formada por cuadrados de lado 2 cm. Tiene 100 cuadrados de alto y 200 cuadrados de largo. ¿Cuál es su perímetro?`,
        opciones: [
            "600 cm",
            "1.200 cm",
            "40.000 cm",
            "160.000 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `Una figura está formada por 10 cuadrados congruentes y su área total es 160 cm². Para calcular su perímetro se cuenta la cantidad de lados exteriores. Si se determinó que hay 28 lados exteriores, ¿cuál es el perímetro?`,
        opciones: [
            "112 cm",
            "116 cm",
            "120 cm",
            "124 cm"
        ],
        correcta: 0
    },
    {
        pregunta: `Una repisa tiene dos tensores formando triángulos rectángulos. La distancia horizontal desde la pared hasta el borde de la repisa es 150 cm, y la altura desde el suelo hasta la repisa es 200 cm. ¿Cuál expresión permite calcular la longitud de cada tensor?`,
        opciones: [
            "√(200² - 150²)",
            "√(200² + 150²)",
            "200² - 150²",
            "200² + 150²"
        ],
        correcta: 1
    },
    {
        pregunta: `Un rectángulo tiene un largo que es el triple de su ancho. Si su perímetro es 48 cm, ¿cuál es su área?`,
        opciones: [
            "72 cm²",
            "96 cm²",
            "108 cm²",
            "144 cm²"
        ],
        correcta: 2
    },
    {
        pregunta: `Un mueble con forma de prisma recto de base rectangular mide 80 cm de alto, 60 cm de ancho y 40 cm de profundidad. Se debe pintar el exterior sin incluir la base inferior. ¿Cuál es la superficie a pintar?`,
        opciones: [
            "12.800 cm²",
            "14.400 cm²",
            "16.000 cm²",
            "17.600 cm²"
        ],
        correcta: 3
    },
    {
        pregunta: `Para hacer figuras con papel, se dobla a la mitad, se marca la mitad de la figura, se recorta y se desdobla. ¿Qué tipo de simetría se obtiene?`,
        opciones: [
            "Simetría axial",
            "Simetría central",
            "Rotación",
            "Traslación"
        ],
        correcta: 0
    },
    {
        pregunta: `Un barco realiza los siguientes movimientos: 5 km al oeste, 4 km al norte, 3 km al este, 9 km al sur, 6 km al oeste. ¿Cuál es su ubicación final respecto a la inicial?`,
        opciones: [
            "8 km al oeste y 5 km al sur",
            "14 km al oeste y 13 km al norte",
            "8 km al este y 5 km al norte",
            "14 km al este y 13 km al sur"
        ],
        correcta: 0
    },
    {
        pregunta: `A una figura se le aplica una reflexión y luego una traslación. La imagen del vértice (x, y) es (x + 2, 6 - y). Si (-1, -2) es un vértice de la figura, ¿cuáles son las coordenadas de su imagen?`,
        opciones: [
            "(1, 8)",
            "(1, -8)",
            "(-1, -8)",
            "(-1, 8)"
        ],
        correcta: 0
    },
    {
        pregunta: `En una tabla de frecuencias se tiene: puntaje 1 con frecuencia 2, puntaje 2 con frecuencia 4, puntaje 3 con frecuencia 4, puntaje 4 con frecuencia 5, puntaje 5 con frecuencia 7, puntaje 6 con frecuencia 3, puntaje 7 con frecuencia 5. ¿Cuál es el total de estudiantes?`,
        opciones: [
            "7",
            "21",
            "30",
            "63"
        ],
        correcta: 2
    },
    {
        pregunta: `En una semana, Gonzalo vendió 5, 6, 4, 7, 5 celulares diarios; Camilo 4, 5, 5, 6, 4; Antonia 6, 7, 5, 8, 6; Fabiola 3, 4, 5, 4, 3. La meta es vender al menos 5 en un día. ¿Quién cumplió la meta más veces?`,
        opciones: [
            "Gonzalo",
            "Camilo",
            "Antonia",
            "Fabiola"
        ],
        correcta: 2
    },
    {
        pregunta: `En una tienda de jardinería se vendieron: flores 120, árboles 80, semillas 40, tierra 60, arbustos 100. ¿Cuál fue el total de artículos vendidos?`,
        opciones: [
            "500",
            "400",
            "300",
            "200"
        ],
        correcta: 1
    },
    {
        pregunta: `En primeros medios hay 20 con baja asistencia y 60 sin baja; en segundos medios 25 baja y 100 sin baja; en terceros medios 20 baja y 100 sin baja; en cuartos medios 25 baja y 150 sin baja. Se elegirá el nivel con mayor porcentaje de baja asistencia. ¿Con cuál se comienza?`,
        opciones: [
            "Primeros medios",
            "Segundos medios",
            "Terceros medios",
            "Cuartos medios"
        ],
        correcta: 0
    },
    {
        pregunta: `En un gráfico de barras de un supermercado, las barras del año 2020, 2021 y 2022 tienen alturas de 10%, 15% y 20% respectivamente. En otro supermercado, las barras tienen alturas de 20%, 25% y 30% pero la escala del eje vertical es diferente. ¿Qué dificulta la comparación?`,
        opciones: [
            "Los gráficos están graduados en distintas escalas",
            "Los porcentajes están escritos a distintas alturas",
            "Los porcentajes aumentaron en el tiempo",
            "Las barras están juntas"
        ],
        correcta: 0
    },
    {
        pregunta: `Las edades de los futbolistas de Irán son: 24, 25, 26, 27, 28, 29; de España: 22, 23, 24, 25, 26, 27, 28; de EE.UU.: 21, 22, 23, 24, 25, 26, 27, 28; de Ghana: 23, 24, 25, 26, 27, 28, 29, 30. ¿Qué país tiene el mayor promedio de edad?`,
        opciones: [
            "Irán",
            "España",
            "EE.UU.",
            "Ghana"
        ],
        correcta: 3
    },
    {
        pregunta: `Las precipitaciones mensuales (mm) son: ene 0, feb 12, mar 13, abr 42, may 54, jun 25, jul 44, ago 73, sep 61, oct 67, nov 21, dic 21. ¿Cuál es el promedio de junio, julio, agosto y septiembre?`,
        opciones: [
            "20,09 mm",
            "38,25 mm",
            "41,50 mm",
            "76,50 mm"
        ],
        correcta: 3
    },
    {
        pregunta: `En un diagrama de cajón, el mínimo es 80, el primer cuartil 140, la mediana 270, el tercer cuartil 350 y el máximo 450. ¿Qué afirmación es correcta?`,
        opciones: [
            "El promedio es 270",
            "La mitad de los estudiantes tiene 270 seguidores",
            "Hay 60 estudiantes entre 80 y 140",
            "Al menos un 25% tiene entre 140 y 270 seguidores"
        ],
        correcta: 3
    },
    {
        pregunta: `Dados los datos: 18, 19, 20, 21, 21, 27, 30, 30, 31, 34, 35. ¿Cuál es el valor del primer cuartil?`,
        opciones: [
            "19",
            "20",
            "20,5",
            "21"
        ],
        correcta: 1
    },
    {
        pregunta: `En una encuesta, área científica: 7 hombres, 10 mujeres; humanista: 4 hombres, 6 mujeres; matemática: 8 hombres, 9 mujeres; artística: 3 hombres, 5 mujeres. Si se selecciona al azar, ¿probabilidad de que sea mujer y del área artística?`,
        opciones: [
            "<span class='fraction'><span class='num'>5</span><span class='den'>52</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>5</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>8</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>30</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `En un juego se escoge un número entre 2 y 12, se lanzan dos dados y se suma. Si la suma coincide con el número escogido, se obtiene un punto. ¿Qué número da mayor probabilidad de ganar?`,
        opciones: [
            "12",
            "10",
            "7",
            "6"
        ],
        correcta: 2
    },
    {
        pregunta: `En un dado cargado, las probabilidades son: 1: 0,2; 2: 0,1; 3: 0,1; 4: 0,1; 5: 0,4; 6: 0,1. ¿Cuál afirmación es verdadera?`,
        opciones: [
            "P(1 o 2) es igual que en un dado común",
            "P(6) es igual que en un dado común",
            "P(número > 4) = 0,5",
            "P(número par) = 0,1"
        ],
        correcta: 2
    },
    {
        pregunta: `Un juego consiste en lanzar tres monedas. El puntaje es c - 2s, donde c y s son cantidad de caras y sellos. ¿Cuál es la probabilidad de obtener un puntaje negativo?`,
        opciones: [
            "<span class='fraction'><span class='num'>1</span><span class='den'>8</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>4</span></span>",
            "<span class='fraction'><span class='num'>3</span><span class='den'>8</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>2</span></span>"
        ],
        correcta: 3
    }
];
        
        // Escala de puntajes PAES (para 60 preguntas)
        const paesScores = [100, 178, 202, 224, 244, 264, 283, 300, 315, 329, 343, 358, 373, 388, 401, 411, 420, 430, 441, 454, 468, 482, 494, 503, 510, 517, 524, 535, 547, 562, 576, 587, 596, 603, 610, 617, 627, 640, 655, 669, 681, 691, 700, 709, 720, 734, 749, 764, 779, 792, 806, 821, 839, 858, 878, 898, 920, 945, 973, 1000, 1000];