const allQuestions = [
  {
    pregunta: `La solución de la inecuación 6x - 3 < 4x + 7 es:`,
    opciones: [`[5 , +∞[`, `]5, +∞[`, `] -∞, 5]`, `] -∞, 5[`],
    correcta: 3,
  },
  {
    pregunta: `Las edades de 2 hermanos difieren en 7 años. ¿Cuál es la máxima edad que puede tener el hermano menor, si su suma es menor que 20?`,
    opciones: [`5`, `6`, `7`, `8`],
    correcta: 1,
  },
  {
    pregunta: `El índice de masa corporal (IMC), se define como: 
    <p style = "text-align: center;">IMC = <span class = "math-expr"><span class = "fraction"><span class = "num">masa(en kilogramos)</span><span class = "den">altura²(en metros)</span></span></span></p>
    Donde una persona con peso normal, debe tener un IMC entre 18,5 y 24,9. Sabiendo que Xavier mide 166 centímetros. ¿Cuál de las siguientes alternativas podría ser el peso (en kg) que tendría Xavier?`,
    opciones: [`]48 , 65]`, `]42 , 61[`, `]45 , 58]`, `]50 , 63]`],
    correcta: 3,
  },
  {
    pregunta: `Al resolver la inecuación <span class="math-expr"><span class="fraction"><span class="num">3x+273</span><span class="den">-5</span></span></span> < 0, se obtiene como solución:`,
    opciones: [`]91 , +∞[`, `]-∞ , 91[`, `]-91 , +∞[`, `]-∞ , -91[`],
    correcta: 2,
  },
  {
    pregunta: `¿A lo más, cuántos duraznos a 400 pesos cada uno, más dos sandías de 4.400 pesos cada una, se pueden comprar con un billete de 20.000 pesos?`,
    opciones: [`26`, `27`, `28`, `29`],
    correcta: 2,
  },
  {
    pregunta: `Luciana pesa 10 kilogramos más que su hija Pía, pero pesa el doble que su nieta Martina. Si entre las tres suman por lo menos 180 kilogramos, ¿cuál podría ser el peso de Martina?`,
    opciones: [`32`, `34`, `37`, `39`],
    correcta: 3,
  },
  {
    pregunta: `En una autopista, todo auto debe estar en movimiento, pero la máxima velocidad v permitida es de 120 km/h. Al expresar matemáticamente esta proposición, se tiene:`,
    opciones: [`0 < v ≤ 120`, `0 < v < 120`, `v > 120`, `v ≥ 120`],
    correcta: 0,
  },
  {
    pregunta: `Al resolver la inecuación <span class="math-expr"><span class="fraction"><span class="num">-x</span><span class="den">2</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">x</span><span class="den">8</span></span></span> ≤ 5 - <span class="math-expr"><span class="fraction"><span class="num">x</span><span class="den">4</span></span></span>, se obtiene como conjunto solución:`,
    opciones: [
      `{x ∈ ℝ / x ≥ 40}`,
      `{x ∈ ℝ / x ≤ 40}`,
      `{x ∈ ℝ / x ≥ -40}`,
      `{x ∈ ℝ / x ≤ -40}`,
      `∅`,
    ],
    correcta: 2,
  },
  {
    pregunta: `Si p es un número perteneciente al intervalo real [-4, 8] y q es un número entero no negativo y menor que 6, ¿cuál es el mínimo valor que puede tomar la expresión p·q?`,
    opciones: [`-32`, `-20`, `-18`, `-4`],
    correcta: 1,
  },
  {
    pregunta: `¿A cuál intervalo pertenecen los números reales que son mayores que su cuadrado?`,
    opciones: [`]-∞, 1[`, `]0, 1[`, `]0, +∞[`, `]-1, 0[`],
    correcta: 1,
  },
  {
    pregunta: `Don Carlos tiene un carrito donde vende sopaipillas. Las compra en 110 pesos cada una y las vende en 400 pesos cada una. Si en aceite gasta diariamente 2 botellas, cuyo precio es 1.800 pesos cada una, ¿cuántas sopaipillas como mínimo debería vender, si quiere que en una jornada sus ganancias sean mayores a 30.000 pesos?`,
    opciones: [`89`, `90`, `91`, `92`, `93`],
    correcta: 3,
  },
  {
    pregunta: `¿Cuántos son los números naturales que cumplen con la condición que su triple, disminuido en 15 unidades, es mayor que su cuádruple aumentado en 4 unidades?`,
    opciones: [`0`, `1`, `2`, `3`],
    correcta: 0,
  },
  {
    pregunta: `Si el quíntuple de un número no es mayor que el triple del mismo número, más dieciocho unidades, entonces ¿cuántos números naturales existen, que cumplan dicha condición?`,
    opciones: [`12`, `9`, `10`, `Infinitos`],
    correcta: 1,
  },
  {
    pregunta: `Si x > y > z, entonces ¿cuál de las siguientes expresiones es siempre negativa?`,
    opciones: ["y - z", "z - x", "y - x", "z - y - x"],
    correcta: 1,
  },
  {
    pregunta: `Si 0 < a < 1, entonces ¿cuál de las siguientes desigualdades es verdadera?`,
    opciones: [
      "a³ > a²",
      "a² < 1",
      "<span class='fraction'><span class='num'>1</span><span class='den'>a</span></span> < 1",
      "a⁵ > a⁴",
    ],
    correcta: 1,
  },
  {
    pregunta: `La inecuación 3x - 8 < 5x + 6 tiene por solución el intervalo:`,
    opciones: ["]-∞, 7[", "]-∞, -7]", "[-7, +∞[", "]-7, +∞["],
    correcta: 3,
  },
  {
    pregunta: `El conjunto solución de la inecuación -5 - 4(x + 3) > 4(3x - 7) - 5x es:`,
    opciones: [
      "{x ∈ IR / x > 1}",
      "{x ∈ IR / x ≥ 1}",
      "{x ∈ IR / x < 1}",
      "{x ∈ IR / x > -1}",
    ],
    correcta: 2,
  },
  {
    pregunta: `El intervalo que es conjunto solución de la inecuación <span class='fraction'><span class='num'>4 - x</span><span class='den'>5</span></span> - x ≥ 1 + <span class='fraction'><span class='num'>1 - 2x</span><span class='den'>3</span></span> es:`,
    opciones: ["[1, +∞[", "[-1, +∞[", "]-∞, -1]", "]-∞, -1["],
    correcta: 2,
  },
  {
    pregunta: `El conjunto solución de la inecuación <span class='fraction'><span class='num'>x</span><span class='den'>3</span></span> < <span class='fraction'><span class='num'>2x + 5</span><span class='den'>6</span></span> - 4 es:`,
    opciones: ["IR", "∅", "{23}", "]23, +∞["],
    correcta: 3,
  },
  {
    pregunta: `Si x ∈ IR⁺ y <span class='fraction'><span class='num'>3</span><span class='den'>4</span></span> - <span class='fraction'><span class='num'>5</span><span class='den'>x</span></span> > <span class='fraction'><span class='num'>7</span><span class='den'>x</span></span>, entonces todos los números no negativos que NO son solución de la inecuación se encuentran en el intervalo:`,
    opciones: ["]16, +∞]", "[0, 16]", "]0, 16]", "]-∞, 16]"],
    correcta: 1,
  },
  {
    pregunta: `Si -3 < 2x - 1 < 3, entonces ¿entre qué valores está 3x + 1?`,
    opciones: ["]-1, 3[", "]-2, 2[", "]-4, 2[", "]-2, 7["],
    correcta: 3,
  },
  {
    pregunta: `La representación gráfica del conjunto solución de la inecuación <span class='fraction'><span class='num'>3 - x</span><span class='den'>4</span></span> ≤ <span class='fraction'><span class='num'>x + 7</span><span class='den'>2</span></span> + 1 corresponde a:`,
    opciones: [
      "Intervalo [-5, +∞[",
      "Intervalo ]-∞, -5]",
      "Intervalo [5, +∞[",
      "Intervalo ]-∞, 5]",
    ],
    correcta: 0,
  },
  {
    pregunta: `Respecto de los valores enteros de x que satisfacen la inecuación -6 ≤ 2x ≤ 4, es verdad que:`,
    opciones: [
      "son seis, tres negativos, el cero y dos positivos",
      "son siete, tres negativos, el cero y tres positivos",
      "son ocho, cuatro negativos, el cero y tres positivos",
      "son infinitos negativos, el cero e infinitos positivos",
    ],
    correcta: 0,
  },
  {
    pregunta: `En una tienda de mascotas se dispone de un monto máximo de 50.000 pesos para pagar la electricidad que se consume en un mes. La empresa eléctrica que suministra este servicio realiza el cobro, en pesos, mediante la función c(x) = 100x + 5000, siendo x la cantidad de kWh consumidos en el mes. ¿Cuál de los siguientes conjuntos contiene a todos y únicamente los posibles valores del consumo en kWh en el mes que se puede solventar con el monto disponible en esa tienda?`,
    opciones: ["[0, 450]", "[0, 450[", "[0, 550[", "[0, 5500]"],
    correcta: 0,
  },
  {
    pregunta: `¿Cuántos números primos cumplen la condición: "el exceso del quíntuplo del número sobre 34 es menor que 31"?`,
    opciones: ["4", "5", "6", "7"],
    correcta: 1,
  },
  {
    pregunta: `Al arrendar un auto la empresa "CARman" cobra 35.000 pesos diarios, sin tomar en cuenta el kilometraje recorrido. La empresa "CARmen" cobra 5.000 pesos diarios más 200 pesos por kilómetro recorrido. ¿Cuántos kilómetros debe recorrer una persona, en una semana, para que le resulte más conveniente arrendar el auto a la empresa "CARman"?`,
    opciones: ["Menos de 150", "Más de 150", "Menos de 1.050", "Más de 1.050"],
    correcta: 3,
  },
  {
    pregunta: `α y β son ángulos que suman 180°. Si β varía entre 139° y 162°, ¿cuál es la variación que experimentará el complemento de α?`,
    opciones: ["18° y 41°", "31° y 58°", "49° y 72°", "52° y 81°"],
    correcta: 2,
  },
  {
    pregunta: `En una empresa el costo de fabricación de chocolates está dado por C = 25000 + 250x, donde x es la cantidad de chocolates. Si cada chocolate se vende a 500 pesos, ¿cuál es la cantidad mínima de chocolates que se debe vender para tener utilidades?`,
    opciones: ["56", "77", "101", "150"],
    correcta: 2,
  },
  {
    pregunta: `La cantidad mínima recomendada de ingesta diaria de calcio para adultos de entre 19 años y 50 años es de 1.000 mg por día. Una taza (250 ml) de leche entera contiene 280 mg de calcio, aproximadamente, y un vaso (200 ml) de jugo de naranja contiene 50 mg de calcio, aproximadamente. Miguel tiene 40 años y decidió que cierto día solo tomará leche entera y jugo de naranja. Si ese día se tomará solo una taza llena de leche entera y N vasos llenos de jugo de naranja, ¿cuál de las siguientes inecuaciones permite determinar los valores de N para los cuales Miguel cumple la ingesta recomendada de calcio?`,
    opciones: [
      "280 + 50N ≥ 1.000",
      "(280 + 50)N ≤ 1.000",
      "280N + 50 ≥ 1.000",
      "280 + 50N ≥ 1.000",
    ],
    correcta: 3,
  },
  {
    pregunta: `Para el cálculo de la tarifa eléctrica, en pesos, se usa la fórmula T = Px + C, donde T es el valor de la tarifa, P es el precio por kWh consumido, x es el consumo de energía en kWh y C es un cargo fijo. Para una tarifa entre 15.000 y 70.000 pesos, ¿cuál de las siguientes desigualdades representa los posibles valores del consumo?`,
    opciones: [
      "<span class='fraction'><span class='num'>15.000 - C</span><span class='den'>P</span></span> < x < <span class='fraction'><span class='num'>70.000 - C</span><span class='den'>P</span></span>",
      "<span class='fraction'><span class='num'>15.000</span><span class='den'>P</span></span> < x < <span class='fraction'><span class='num'>70.000</span><span class='den'>P</span></span>",
      "15.000 - P < x < 70.000 - P",
      "15.000 + C < x < 70.000 + C",
    ],
    correcta: 0,
  },
  {
    pregunta: `Paula, hace cinco años tenía menos de 40 años y en dos años más, el doble de su edad será superior a 90 años. ¿Cuál es la edad actual de Paula?`,
    opciones: ["40 años", "41 años", "43 años", "44 años"],
    correcta: 3,
  },
  {
    pregunta: `Un artesano tiene x collares que él mismo fabricó, vende 60 y le quedan más de la mitad. Tras esta venta, fabrica 5 collares más, vende 27 y le quedan menos de 40 collares. ¿Cuántos collares fabricó en total?`,
    opciones: [`121`, `122`, `125`, `126`],
    correcta: 0,
  },
  {
    pregunta: `¿Cuál es el menor número entero que es solución de la inecuación <span class='fraction'><span class='num'>3x - 2</span><span class='den'>4</span></span> - <span class='fraction'><span class='num'>x + 1</span><span class='den'>2</span></span> ≥ <span class='fraction'><span class='num'>x - 3</span><span class='den'>3</span></span>?`,
    opciones: ["5", "3", "1", "0"],
    correcta: 3,
  },
  {
    pregunta: `El conjunto solución de la inecuación 2(x - 3) + 5 ≥ 3(x + 1) - 2x es:`,
    opciones: ["]-∞, 4]", "[4, +∞[", "]-∞, -4]", "[-4, +∞["],
    correcta: 0,
  },
  {
    pregunta: `Si 3x - 7 ≤ 5x + 1 ≤ 2x + 9, entonces el conjunto solución es:`,
    opciones: ["[-4, 2]", "[-4, 4]", "[-2, 4]", "[2, 4]"],
    correcta: 0,
  },
  {
    pregunta: `La inecuación <span class='fraction'><span class='num'>x - 2</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>x + 1</span><span class='den'>4</span></span> < <span class='fraction'><span class='num'>x - 3</span><span class='den'>2</span></span> tiene como solución:`,
    opciones: ["x < -1", "x > -1", "x < 1", "x > 1"],
    correcta: 0,
  },
  {
    pregunta: `¿Cuál es el mayor número entero que satisface la inecuación 5 - 3x > 2x - 10?`,
    opciones: ["2", "3", "4", "5"],
    correcta: 1,
  },
  {
    pregunta: `El conjunto solución de la inecuación -4 ≤ 3x + 2 ≤ 5 es:`,
    opciones: ["[-2, 1]", "[-2, 7/3]", "[-6/3, 7/3]", "[-2, 1["],
    correcta: 0,
  },
  {
    pregunta: `Si la base de un rectángulo mide (x + 3) cm y su altura mide (x - 1) cm, ¿para qué valores de x el perímetro del rectángulo es mayor que 20 cm?`,
    opciones: ["x > 4", "x > 5", "x > 6", "x > 7"],
    correcta: 1,
  },
  {
    pregunta: `Un número aumentado en 5 es menor o igual que el triple del mismo número disminuido en 7. ¿Cuál es el menor valor entero que puede tomar dicho número?`,
    opciones: ["5", "6", "7", "8"],
    correcta: 1,
  },
  {
    pregunta: `Si a y b son números reales tales que a < 0 < b, ¿cuál de las siguientes desigualdades es siempre verdadera?`,
    opciones: ["a² < b²", "ab > 0", "a + b < 0", "a - b < 0"],
    correcta: 3,
  },
  {
    pregunta: `La edad de un padre es el triple de la edad de su hijo. ¿Dentro de cuántos años la edad del padre será menor que el doble de la edad del hijo?`,
    opciones: [
      "Nunca",
      "Siempre",
      "Cuando el hijo tenga más de la edad actual del padre",
      "Depende de las edades actuales",
    ],
    correcta: 0,
  },
  {
    pregunta: `Un vendedor recibe un sueldo fijo de 300.000 pesos más una comisión de 5.000 pesos por cada producto vendido. Si desea ganar al menos 650.000 pesos en el mes, ¿cuántos productos debe vender como mínimo?`,
    opciones: ["60", "65", "70", "75"],
    correcta: 2,
  },
  {
    pregunta: `Si -2 < x < 3, entonces ¿entre qué valores está 2x - 1?`,
    opciones: [
      "-5 < 2x - 1 < 5",
      "-3 < 2x - 1 < 4",
      "-4 < 2x - 1 < 3",
      "-5 < 2x - 1 < 4",
    ],
    correcta: 0,
  },
  {
    pregunta: `¿Para qué valores de x se cumple que 3x + 2 > 5x - 4 y 2x - 3 < x + 1 simultáneamente?`,
    opciones: ["x < 3", "x > 3", "x < 4", "3 < x < 4"],
    correcta: 3,
  },
  {
    pregunta: `Un estanque tiene una capacidad de 1.000 litros. Si contiene 350 litros y se abre una llave que vierte 25 litros por minuto, ¿durante cuántos minutos puede permanecer abierta la llave sin que el estanque se desborde?`,
    opciones: [
      "Menos de 26 minutos",
      "Menos de 30 minutos",
      "A lo más 26 minutos",
      "A lo más 30 minutos",
    ],
    correcta: 0,
  },
  {
    pregunta: `El conjunto solución de la inecuación 4(x - 2) - 3(2x + 1) ≥ 5(3x - 4) - 2(x + 1) es:`,
    opciones: ["x ≤ 1", "x ≥ 1", "x ≤ -1", "x ≥ -1"],
    correcta: 0,
  },
  {
    pregunta: `Si 0 < x < 1, entonces ¿cuál de las siguientes expresiones es la mayor?`,
    opciones: ["x", "x²", "1/x", "1/x²"],
    correcta: 3,
  },
  {
    pregunta: `Un rectángulo tiene largo (3x - 2) cm y ancho (x + 1) cm. Si su área es menor que 50 cm², ¿cuál de los siguientes intervalos representa los posibles valores de x?`,
    opciones: ["]-∞, 4[", "]-1, 4[", "]-∞, 3[", "]-1, 3["],
    correcta: 1,
  },
  {
    pregunta: `¿Cuántos números enteros satisfacen la inecuación 2x - 5 < 3x + 2 ≤ 4x - 1?`,
    opciones: ["0", "1", "2", "Infinitos"],
    correcta: 0,
  },
  {
    pregunta: `En un triángulo, un lado mide 8 cm y otro lado mide 5 cm. ¿Cuál es el intervalo posible para la medida del tercer lado?`,
    opciones: ["3 < x < 13", "3 ≤ x ≤ 13", "2 < x < 14", "2 ≤ x ≤ 14"],
    correcta: 0,
  },
  {
    pregunta: `Si el perímetro de un cuadrado es mayor que 20 cm y menor que 36 cm, ¿entre qué valores puede estar su lado?`,
    opciones: ["5 < lado < 9", "4 < lado < 8", "5 ≤ lado ≤ 9", "4 ≤ lado ≤ 8"],
    correcta: 0,
  },
  {
    pregunta: `¿Para qué valores de a la ecuación (a - 2)x = 4 tiene solución positiva?`,
    opciones: ["a > 2", "a < 2", "a > 4", "a < 4"],
    correcta: 0,
  },
  {
    pregunta: `Un número entero positivo es tal que su triple aumentado en 5 es mayor que 20 y su doble disminuido en 3 es menor que 25. ¿Cuántos números cumplen esta condición?`,
    opciones: ["4", "5", "6", "7"],
    correcta: 1,
  },
  {
    pregunta: `Si -5 ≤ 2x - 3 ≤ 7, entonces ¿entre qué valores está x?`,
    opciones: ["-1 ≤ x ≤ 5", "-4 ≤ x ≤ 2", "-2 ≤ x ≤ 4", "-1 ≤ x ≤ 2"],
    correcta: 0,
  },
];
initQuiz();
