const text1 = `
El sueño es un estado fisiológico de la conciencia, activo y reversible, que se caracteriza por una disminución del nivel de alerta y una suspensión relativa de la actividad sensorial y motora. Lejos de ser un proceso pasivo, el sueño cumple funciones vitales para la salud física y mental, como la consolidación de la memoria, la regulación metabólica y la reparación celular.
El sueño se clasifica en dos grandes tipos que alternan cíclicamente a lo largo de la noche: el sueño No REM (NREM) y el sueño REM (Rapid Eye Movement). El sueño No REM, a su vez, se subdivide en tres etapas. La etapa N1 es la transición entre la vigilia y el sueño, un período breve de sueño ligero. La etapa N2 corresponde al sueño de consolidación, donde la frecuencia cardíaca y la temperatura corporal descienden. La etapa N3, también conocida como sueño de ondas lentas o sueño profundo, es la fase más reparadora y difícil de interrumpir. Durante esta etapa, el cuerpo libera hormonas del crecimiento y se lleva a cabo la reparación de tejidos.
El sueño REM, por su parte, es la fase donde ocurren la mayoría de los sueños vívidos. Se caracteriza por movimientos oculares rápidos, una actividad cerebral intensa similar a la vigilia y una atonía muscular temporal que impide que el cuerpo represente físicamente los sueños. Esta fase es crucial para el procesamiento emocional y la consolidación de la memoria procedimental. Un ciclo completo de sueño dura aproximadamente 90 minutos, y una persona adulta suele experimentar entre cuatro y seis ciclos por noche.
<i>Adaptado de "El sueño y sus fases" (National Sleep Foundation & American Academy of Sleep Medicine, 2022)</i>`;

const text2 = `
Vivimos en la era más interconectada de la historia, o al menos eso es lo que nos gusta creer. Las plataformas digitales nos prometen un mundo sin fronteras donde podemos estar en contacto permanente con amigos, familiares y personas afines a nuestros intereses. Sin embargo, cuanto más nos "conectamos" a través de pantallas, más crece una sensación paradójica de soledad y desconexión real.
A diferencia de la interacción cara a cara, donde el lenguaje corporal, el tono de voz y la presencia física crean un vínculo multidimensional, la comunicación digital tiende a ser plana y fragmentada. Un mensaje de texto, por muy bien intencionado que sea, carece de la calidez de un abrazo o de la complicidad de una mirada. Mientras que una conversación presencial nos permite compartir un espacio y un tiempo común, las interacciones virtuales suelen ser asincrónicas y mediatizadas por algoritmos que deciden qué contenido mostrarnos.
La cantidad de "amigos" o "seguidores" se ha convertido en una métrica absurda de popularidad, confundiendo la acumulación de contactos superficiales con la construcción de relaciones profundas. En el mundo analógico, la amistad se cultiva con tiempo, esfuerzo y reciprocidad; en el digital, a menudo se reduce a un "me gusta" fugaz o a un comentario rápido. No es casualidad que las tasas de ansiedad y depresión hayan aumentado entre las generaciones que han crecido inmersas en esta cultura de la hiperconectividad vacía.
<i>Adaptado de "El espejismo de la conexión digital" (Basado en Sherry Turkle, "Alone Together", 2011)</i>`;

const text3 = `
La fotosíntesis es el proceso metabólico mediante el cual las plantas, algas y ciertas bacterias convierten la energía lumínica en energía química, transformando el dióxido de carbono y el agua en azúcares esenciales para su crecimiento y liberando oxígeno como subproducto.
Este proceso se desarrolla principalmente en los cloroplastos, orgánulos celulares que contienen clorofila, el pigmento responsable de captar la luz solar. La fotosíntesis consta de dos fases fundamentales interdependientes. La primera es la fase lumínica o dependiente de la luz, que ocurre en las membranas de los tilacoides. Durante esta etapa, la energía solar excita los electrones de la clorofila, lo que permite generar dos moléculas fundamentales: ATP (trifosfato de adenosina) y NADPH (nicotinamida adenina dinucleótido fosfato). Como resultado de este proceso, se produce también la fotólisis del agua, es decir, la ruptura de moléculas de agua que libera oxígeno a la atmósfera.
La segunda fase es la fase oscura o ciclo de Calvin, que tiene lugar en el estroma de los cloroplastos. Aunque se denomina "oscura", esta fase no requiere luz directa, pero sí utiliza el ATP y el NADPH generados en la etapa anterior. Durante el ciclo de Calvin, el dióxido de carbono atmosférico se fija y se combina con moléculas orgánicas para producir glucosa y otros carbohidratos. Estos compuestos servirán como fuente de energía y materia prima para el crecimiento y desarrollo de la planta.
<i>Fragmento de "Fotosíntesis" (Encyclopaedia Britannica, 2020)</i>`;

const textMap = {
    1: { title: "El sueño y sus fases", content: text1 },
    2: { title: "El espejismo de la conexión digital", content: text2 },
    3: { title: "El proceso de la fotosíntesis", content: text3 }
};

const questionsText1 = [
    {
        pregunta: `¿Qué procedimiento textual predomina en el primer párrafo del texto 1?`,
        opciones: [
            `Narración de un proceso.`,
            `Definición del sueño y sus características.`,
            `Argumentación sobre la importancia del sueño.`,
            `Descripción de un experimento.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza principalmente en el segundo párrafo?`,
        opciones: [
            `Comparación entre el sueño humano y animal.`,
            `Clasificación del sueño en tipos y etapas.`,
            `Enumeración de causas del insomnio.`,
            `Evaluación de tratamientos para trastornos del sueño.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la función principal del tercer párrafo?`,
        opciones: [
            `Describir las características del sueño REM y su función.`,
            `Narrar la historia del descubrimiento del sueño REM.`,
            `Argumentar que el sueño REM es más importante que el No REM.`,
            `Comparar el sueño de adultos y niños.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué tipo de estructura presenta el texto en su conjunto?`,
        opciones: [
            `Estructura argumentativa: tesis, argumentos y conclusión.`,
            `Estructura expositiva: definición general y luego clasificación detallada.`,
            `Estructura narrativa: secuencia temporal de eventos.`,
            `Estructura dialógica: pregunta y respuesta.`
        ],
        correcta: 1
    },
    {
        pregunta: `En el segundo párrafo, ¿qué función cumplen los términos "etapa N1", "etapa N2" y "etapa N3"?`,
        opciones: [
            `Describir problemas del sueño.`,
            `Comparar diferentes tipos de sueño.`,
            `Enumerar y clasificar las subdivisiones del sueño No REM.`,
            `Evaluar la calidad de cada etapa.`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor explicar la diferencia entre sueño No REM y sueño REM?`,
        opciones: [
            `La definición de cada uno por separado y la descripción de sus funciones.`,
            `La comparación directa entre ambos tipos de sueño.`,
            `La narración de un ciclo completo de sueño.`,
            `La ejemplificación con casos clínicos.`
        ],
        correcta: 0
    },
    {
        pregunta: `En la frase "el sueño es un estado fisiológico de la conciencia, activo y reversible", ¿qué procedimiento se emplea?`,
        opciones: [
            `Una comparación con otros estados de conciencia.`,
            `Una definición del concepto de sueño.`,
            `Una enumeración de sus características negativas.`,
            `Una opinión personal del autor.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la información sobre la duración de los ciclos (90 minutos) al final del texto?`,
        opciones: [
            `Introducir un nuevo tema no relacionado.`,
            `Proporcionar un dato complementario sobre la organización temporal del sueño.`,
            `Argumentar que los adultos necesitan más sueño que los niños.`,
            `Evaluar la calidad del sueño en diferentes edades.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual predomina en la explicación de la etapa N3 (sueño profundo)?`,
        opciones: [
            `Descripción de sus funciones reparadoras.`,
            `Comparación con las otras etapas.`,
            `Argumentación sobre su superioridad.`,
            `Narración de un caso de estudio.`
        ],
        correcta: 0
    },
    {
        pregunta: `Según la organización del texto, ¿cuál es la relación entre el primer párrafo y los siguientes?`,
        opciones: [
            `El primer párrafo presenta un problema y los siguientes ofrecen soluciones.`,
            `El primer párrafo define el tema general y los siguientes lo desarrollan mediante clasificación y descripción.`,
            `El primer párrafo narra un evento y los siguientes explican sus consecuencias.`,
            `El primer párrafo expone una opinión y los siguientes la argumentan.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué intención comunicativa predomina en el texto?`,
        opciones: [
            `Convencer al lector de que duerma más horas.`,
            `Informar objetivamente sobre las características y fases del sueño.`,
            `Narrar la historia de la investigación sobre el sueño.`,
            `Criticar los malos hábitos de sueño de la sociedad moderna.`
        ],
        correcta: 1
    },
    {
        pregunta: `En el tercer párrafo, la frase "es la fase donde ocurren la mayoría de los sueños vívidos" cumple una función:`,
        opciones: [
            `Argumentativa, para defender la importancia del sueño REM.`,
            `Descriptiva, para caracterizar una de las propiedades del sueño REM.`,
            `Narrativa, para contar una experiencia onírica.`,
            `Comparativa, para diferenciarlo del sueño No REM.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza al mencionar que "el sueño No REM, a su vez, se subdivide en tres etapas"?`,
        opciones: [
            `Una comparación.`,
            `Una clasificación jerárquica.`,
            `Una definición.`,
            `Una ejemplificación.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumplen expresiones como "consolidación de la memoria" o "regulación metabólica" en el primer párrafo?`,
        opciones: [
            `Ejemplificar trastornos del sueño.`,
            `Enumerar las funciones vitales que cumple el sueño.`,
            `Comparar el sueño con otros estados.`,
            `Describir el proceso de conciliación del sueño.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de lenguaje predomina en el texto?`,
        opciones: [
            `Lenguaje coloquial con expresiones subjetivas.`,
            `Lenguaje técnico pero accesible, propio de un texto divulgativo.`,
            `Lenguaje literario con metáforas y figuras retóricas.`,
            `Lenguaje jurídico con tecnicismos legales.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación existe entre la atonía muscular y el sueño REM según el texto?`,
        opciones: [
            `La atonía muscular es la causa del sueño REM.`,
            `La atonía muscular es una característica que impide representar físicamente los sueños.`,
            `La atonía muscular es una consecuencia negativa del sueño REM.`,
            `No existe relación entre ambos conceptos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor explicar que el sueño "no es un proceso pasivo"?`,
        opciones: [
            `Una negación seguida de una afirmación de sus funciones activas.`,
            `Una comparación con procesos activos de la vigilia.`,
            `Una narración de experimentos que lo demuestran.`,
            `Una opinión personal respaldada por evidencia.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué función cumple la expresión "Lejos de ser un proceso pasivo" al inicio del primer párrafo?`,
        opciones: [
            `Introducir una opinión controvertida.`,
            `Refutar una concepción errónea común sobre el sueño.`,
            `Comparar el sueño con otros procesos fisiológicos.`,
            `Narrar el descubrimiento de la naturaleza activa del sueño.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la función del segundo párrafo en relación con el tercero?`,
        opciones: [
            `El segundo párrafo introduce la clasificación general y el tercero profundiza en uno de los tipos clasificados.`,
            `El segundo párrafo presenta un problema y el tercero su solución.`,
            `El segundo párrafo narra un hecho y el tercero sus consecuencias.`,
            `El segundo párrafo compara y el tercero evalúa.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza para explicar el concepto de "atonía muscular"?`,
        opciones: [
            `Una definición implícita a través de su función: "impide que el cuerpo represente físicamente los sueños".`,
            `Una comparación con la parálisis del sueño.`,
            `Una enumeración de sus causas.`,
            `Una narración de un caso clínico.`
        ],
        correcta: 0
    }
];

const questionsText2 = [
    {
        pregunta: `¿Qué procedimiento textual predomina en el primer párrafo del texto 2?`,
        opciones: [
            `Definición de un concepto.`,
            `Comparación entre conexión digital y conexión real.`,
            `Planteamiento de una paradoja o contradicción.`,
            `Narración de una experiencia personal.`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza principalmente en el segundo párrafo?`,
        opciones: [
            `Enumeración de beneficios de la tecnología.`,
            `Comparación entre comunicación digital y comunicación presencial.`,
            `Definición de algoritmo.`,
            `Clasificación de tipos de interacción social.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué elementos se comparan explícitamente en el segundo párrafo?`,
        opciones: [
            `Redes sociales y videojuegos.`,
            `Comunicación digital y comunicación cara a cara.`,
            `Jóvenes y adultos.`,
            `Teléfonos móviles y ordenadores.`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el segundo párrafo, ¿qué diferencia fundamental existe entre ambos tipos de comunicación?`,
        opciones: [
            `La digital es más rápida que la presencial.`,
            `La presencial crea un vínculo multidimensional, mientras que la digital es plana y fragmentada.`,
            `La digital permite compartir espacio físico, la presencial no.`,
            `No hay diferencias significativas entre ambas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza en el tercer párrafo?`,
        opciones: [
            `Comparación entre la amistad en el mundo analógico y en el digital.`,
            `Definición de "amigo" y "seguidor".`,
            `Narración de la historia de las redes sociales.`,
            `Clasificación de tipos de usuarios digitales.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué consecuencias negativas de la cultura digital menciona el tercer párrafo?`,
        opciones: [
            `Pérdida de empleo y desindustrialización.`,
            `Aumento de las tasas de ansiedad y depresión.`,
            `Disminución de la productividad laboral.`,
            `Aislamiento geográfico.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la expresión "no es casualidad" en el tercer párrafo?`,
        opciones: [
            `Introducir una comparación.`,
            `Establecer una relación causal entre la cultura digital y los problemas de salud mental.`,
            `Definir un concepto complejo.`,
            `Narrar un evento histórico.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de estructura presenta el texto en su conjunto?`,
        opciones: [
            `Estructura expositiva: definición y clasificación.`,
            `Estructura argumentativa: planteamiento de un problema y desarrollo de argumentos.`,
            `Estructura narrativa: secuencia de eventos en el tiempo.`,
            `Estructura descriptiva: enumeración de características.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la tesis principal del texto?`,
        opciones: [
            `Las redes sociales son beneficiosas para la sociedad.`,
            `La hiperconectividad digital genera una paradoja de mayor soledad y desconexión real.`,
            `La tecnología debe eliminarse por completo.`,
            `Los jóvenes deberían usar menos el teléfono móvil.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor contrastar la "cantidad" y la "calidad" en las relaciones?`,
        opciones: [
            `Una definición de ambos términos.`,
            `Una comparación implícita entre acumulación de contactos y relaciones profundas.`,
            `Una enumeración de contactos superficiales.`,
            `Una narración de experiencias personales.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumplen ejemplos como "un mensaje de texto" o "un abrazo" en el segundo párrafo?`,
        opciones: [
            `Definir conceptos abstractos.`,
            `Ejemplificar y contrastar los dos tipos de comunicación.`,
            `Enumerar formas de comunicación.`,
            `Argumentar a favor de la comunicación digital.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué intención comunicativa predomina en el último párrafo?`,
        opciones: [
            `Informar objetivamente sobre datos de uso tecnológico.`,
            `Invitar a la reflexión sobre el papel de la tecnología en nuestras vidas.`,
            `Describir las características de las nuevas generaciones.`,
            `Narrar una experiencia personal del autor.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación establece el autor entre "amigos digitales" y "relaciones profundas"?`,
        opciones: [
            `Son equivalentes y sinónimos.`,
            `Existe una relación de oposición: los primeros son superficiales, las segundas requieren tiempo y esfuerzo.`,
            `Los amigos digitales siempre se convierten en relaciones profundas.`,
            `No hay relación entre ambos conceptos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza al mencionar "el lenguaje corporal, el tono de voz y la presencia física"?`,
        opciones: [
            `Una definición de comunicación.`,
            `Una enumeración de elementos que caracterizan la interacción cara a cara.`,
            `Una comparación entre diferentes tipos de lenguaje.`,
            `Una argumentación sobre la superioridad de lo presencial.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tono predomina en la expresión "el espejismo de la conexión digital"?`,
        opciones: [
            `Optimista y esperanzador.`,
            `Crítico y desengañado.`,
            `Neutral y objetivo.`,
            `Humorístico y divertido.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la palabra "paradójica" en el primer párrafo?`,
        opciones: [
            `Describir una situación lógica y esperable.`,
            `Señalar una contradicción aparente entre conectarse más y sentirse más solo.`,
            `Comparar diferentes tipos de soledad.`,
            `Definir un concepto psicológico.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor desarrollar su crítica a las plataformas digitales?`,
        opciones: [
            `La comparación sistemática entre lo prometido y lo realmente ocurrido.`,
            `La definición técnica de algoritmo.`,
            `La narración de la historia de Internet.`,
            `La clasificación de usuarios digitales.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué recurso argumentativo se utiliza al mencionar las "tasas de ansiedad y depresión"?`,
        opciones: [
            `Una definición de trastornos mentales.`,
            `Un dato que respalda la tesis sobre las consecuencias negativas de la cultura digital.`,
            `Una comparación entre generaciones.`,
            `Una enumeración de enfermedades.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué postura adopta el autor respecto a la tecnología?`,
        opciones: [
            `Es tecnófobo y propone eliminar toda tecnología.`,
            `Reconoce su existencia pero critica sus efectos negativos en la calidad de las relaciones.`,
            `Es acríticamente favorable a toda innovación digital.`,
            `Es indiferente al tema.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual predomina en el tercer párrafo al hablar de "amistad en el mundo analógico" y "en el digital"?`,
        opciones: [
            `Definición de amistad.`,
            `Comparación entre ambos tipos de amistad.`,
            `Narración de experiencias de amistad.`,
            `Clasificación de tipos de amigos.`
        ],
        correcta: 1
    }
];

const questionsText3 = [
    {
        pregunta: `¿Qué procedimiento textual predomina en el primer párrafo del texto 3?`,
        opciones: [
            `Una narración histórica.`,
            `Una definición de la fotosíntesis.`,
            `Una comparación entre plantas y algas.`,
            `Una argumentación sobre la importancia de las plantas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza principalmente en el segundo párrafo?`,
        opciones: [
            `Descripción de un proceso (fase lumínica).`,
            `Clasificación de tipos de plantas.`,
            `Comparación entre fotosíntesis y respiración.`,
            `Evaluación de la eficiencia fotosintética.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué procedimiento textual predomina en el tercer párrafo?`,
        opciones: [
            `Descripción de un proceso (fase oscura).`,
            `Definición de glucosa.`,
            `Comparación entre día y noche.`,
            `Argumentación sobre la importancia del CO2.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué tipo de estructura presenta el texto en su conjunto?`,
        opciones: [
            `Estructura argumentativa: tesis y argumentos.`,
            `Estructura de proceso: secuencia ordenada de fases o etapas.`,
            `Estructura comparativa: semejanzas y diferencias.`,
            `Estructura de problema-solución.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumplen los términos "fase lumínica" y "fase oscura"?`,
        opciones: [
            `Comparar dos procesos opuestos.`,
            `Clasificar y organizar la explicación del proceso fotosintético en dos etapas.`,
            `Definir conceptos complejos.`,
            `Evaluar la importancia de cada fase.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación temporal existe entre ambas fases según el texto?`,
        opciones: [
            `Son simultáneas e independientes.`,
            `La fase lumínica ocurre primero y genera los productos que utiliza la fase oscura.`,
            `La fase oscura ocurre antes que la lumínica.`,
            `No tienen relación temporal, pueden ocurrir en cualquier orden.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza para explicar la fotólisis del agua?`,
        opciones: [
            `Una definición seguida de su resultado (liberación de oxígeno).`,
            `Una comparación con otros procesos químicos.`,
            `Una narración de su descubrimiento.`,
            `Una argumentación sobre su importancia.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué aclaración importante hace el autor sobre la "fase oscura"?`,
        opciones: [
            `Que ocurre exclusivamente durante la noche.`,
            `Que no requiere luz directa, aunque se denomine "oscura".`,
            `Que es menos importante que la fase lumínica.`,
            `Que solo ocurre en plantas superiores.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumplen las siglas ATP y NADPH en el texto?`,
        opciones: [
            `Son ejemplos de moléculas sin importancia.`,
            `Son los nombres de las moléculas fundamentales generadas en la fase lumínica.`,
            `Son comparaciones con otras moléculas.`,
            `Son definiciones de conceptos abstractos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué producto final de la fotosíntesis menciona el texto?`,
        opciones: [
            `Dióxido de carbono y agua.`,
            `Glucosa y oxígeno.`,
            `ATP y NADPH.`,
            `Clorofila y luz solar.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor explicar dónde ocurre cada fase?`,
        opciones: [
            `Comparación entre diferentes orgánulos.`,
            `Descripción de la ubicación (tilacoides y estroma) asociada a cada fase.`,
            `Narración del recorrido de una molécula.`,
            `Argumentación sobre la importancia de los cloroplastos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la expresión "es decir" en el primer párrafo?`,
        opciones: [
            `Introducir una comparación.`,
            `Introducir una reformulación o aclaración de lo dicho anteriormente.`,
            `Enumerar consecuencias.`,
            `Argumentar una tesis.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de lenguaje predomina en el texto?`,
        opciones: [
            `Lenguaje coloquial con expresiones subjetivas.`,
            `Lenguaje técnico-científico adaptado para divulgación.`,
            `Lenguaje literario con metáforas poéticas.`,
            `Lenguaje jurídico normativo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual se utiliza para explicar el ciclo de Calvin?`,
        opciones: [
            `Descripción de sus etapas y función (fijar CO2 para producir glucosa).`,
            `Comparación con otros ciclos metabólicos.`,
            `Narración del descubrimiento de Calvin.`,
            `Argumentación sobre su eficiencia.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué función cumple la expresión "por su parte" al inicio del tercer párrafo?`,
        opciones: [
            `Introducir una comparación o contraste con lo anterior.`,
            `Enumerar causas.`,
            `Definir un concepto.`,
            `Concluir el texto.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué relación existe entre la clorofila y la captación de luz solar según el texto?`,
        opciones: [
            `La clorofila es el pigmento responsable de captar la luz solar.`,
            `La clorofila es un producto de la fotosíntesis.`,
            `La luz solar destruye la clorofila.`,
            `No hay relación entre ambos.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué intención comunicativa predomina en el texto?`,
        opciones: [
            `Convencer al lector de la importancia de las plantas.`,
            `Explicar de manera clara y ordenada cómo funciona el proceso de la fotosíntesis.`,
            `Narrar la historia del descubrimiento de la fotosíntesis.`,
            `Comparar la fotosíntesis en diferentes organismos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué procedimiento textual permite al autor organizar la información sobre los productos de cada fase?`,
        opciones: [
            `Comparación entre fases.`,
            `Enumeración de los productos generados en cada etapa.`,
            `Definición de cada producto.`,
            `Argumentación sobre su utilidad.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la aclaración sobre que la fase oscura "no requiere luz directa"?`,
        opciones: [
            `Corregir una posible mala interpretación del término "oscura".`,
            `Comparar con la fase lumínica.`,
            `Definir el concepto de oscuridad.`,
            `Argumentar que puede ocurrir de noche.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué tipo de secuencia textual predomina en el segundo y tercer párrafo?`,
        opciones: [
            `Secuencia argumentativa.`,
            `Secuencia descriptiva de procesos.`,
            `Secuencia narrativa.`,
            `Secuencia dialogada.`
        ],
        correcta: 1
    }
];