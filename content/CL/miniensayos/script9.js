
const text1 = `
<img src="https://i.ibb.co/YTDY6rty/Info-fibras-alternativas.jpg" alt="infografía 1" style="max-width: 100%; height: auto;">`;

const text2 = `
<img src="https://i.ibb.co/N2Zm4dVD/Info3-ME9.jpg" alt="infografía 2" style="max-width: 100%; height: auto;">`;

const text3 = `
<img src="https://i.ibb.co/TDQ0fgNr/Info1-ME9-imgupscaler-ai-Beta-2-K.jpg" alt="infografía 3" style="max-width: 100%; height: auto;">`;

const textMap = {
    1: { title: "Papel de fibras alternativas", content: text1 },
    2: { title: "Participación de la mujer. Cultura, artes y patrimonio", content: text2 },
    3: { title: "El acceso al agua", content: text3 }
};

const questionsText1 = [
    {
        pregunta: `Según la infografía, ¿cuál es la fuente de fibra más utilizada para la fabricación de papel?`,
        opciones: [
            `El bagazo de caña`,
            `Los árboles cultivados`,
            `El algodón`,
            `El bambú`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué característica tienen los árboles cultivados como fuente de fibra según el texto?`,
        opciones: [
            `No son renovables`,
            `Son una fuente renovable y sustentable`,
            `Son de alta calidad pero escasos`,
            `Son importados principalmente de Asia`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué desventajas se mencionan sobre el uso de la paja para fabricar papel?`,
        opciones: [
            `Es demasiado cara y escasa`,
            `Drenaje lento, mayor potencial de contaminación, costo más alto y menor calidad`,
            `Tiene bajo contenido de celulosa`,
            `No se puede usar comercialmente`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué fibra tiene características técnicas similares a la pulpa de madera?`,
        opciones: [
            `La paja`,
            `El bambú`,
            `El bagazo de caña`,
            `La remolacha`
        ],
        correcta: 1
    },
    {
        pregunta: `¿En qué región del mundo se usa comercialmente el bambú para fabricar papel, aunque en cantidades relativamente pequeñas?`,
        opciones: [
            `América Latina`,
            `Europa`,
            `África`,
            `Asia`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Qué fibras se destacan por tener un alto contenido de celulosa y producir papel de resistencia superior y apariencia lujosa?`,
        opciones: [
            `Paja y bambú`,
            `Algodón y lino`,
            `Remolacha y bagazo`,
            `Árboles cultivados`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la principal desventaja del algodón y el lino para la fabricación de papel?`,
        opciones: [
            `Bajo contenido de celulosa`,
            `Drenaje lento`,
            `Su costo más alto`,
            `Alta contaminación ambiental`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué es la lignina según la infografía?`,
        opciones: [
            `Un tipo de fibra vegetal`,
            `El "pegamento" que une las fibras y causa impurezas en el papel`,
            `Un proceso de fabricación`,
            `Una máquina para hacer papel`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué fibra tiene potencial debido a su bajo contenido de lignina?`,
        opciones: [
            `El bambú`,
            `El bagazo de caña`,
            `La remolacha`,
            `El lino`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Se ha comprobado la eficiencia de la remolacha en producción a gran escala?`,
        opciones: [
            `Sí, es ampliamente utilizada`,
            `No, no se ha comprobado su eficiencia`,
            `Solo en Europa`,
            `Solo para papel de baja calidad`
        ],
        correcta: 1
    },
    {
        pregunta: `Según la infografía, ¿qué fibra alternativa se destaca en Argentina?`,
        opciones: [
            `El bambú`,
            `El algodón`,
            `El bagazo de caña de azúcar`,
            `La paja`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué empresa argentina integra la producción de azúcar y alcohol con la fabricación de papel a partir del bagazo?`,
        opciones: [
            `Grupo Arcor`,
            `Grupo Ledesma`,
            `SanCor`,
            `Techint`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la producción anual de papel a partir de bagazo del grupo Ledesma?`,
        opciones: [
            `50.000 toneladas`,
            `100.000 toneladas`,
            `130.000 toneladas`,
            `200.000 toneladas`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de la producción total de papel en Argentina representa la producción a partir de bagazo?`,
        opciones: [
            `Aproximadamente el 20%`,
            `Aproximadamente el 30%`,
            `Aproximadamente el 40%`,
            `Aproximadamente el 50%`
        ],
        correcta: 2
    },
    {
        pregunta: `Según la infografía, ¿cuál es la proporción habitual de fibras alternativas en la formulación de la pulpa de celulosa?`,
        opciones: [
            `Hasta el 10%`,
            `Hasta el 20%`,
            `Hasta el 30%`,
            `Hasta el 50%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Por qué no es habitual la utilización de fibras alternativas en altas proporciones?`,
        opciones: [
            `Por razones exclusivamente técnicas`,
            `Por razones exclusivamente económicas`,
            `Por razones técnicas y económicas`,
            `Por falta de disponibilidad`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué producto NO se menciona como ejemplo de productos derivados del papel?`,
        opciones: [
            `Periódicos y revistas`,
            `Papel higiénico`,
            `Empaques`,
            `Telas y vestimenta`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Qué se puede inferir sobre la relación entre el contenido de lignina y la calidad del papel?`,
        opciones: [
            `A mayor lignina, mayor calidad`,
            `La lignina causa impurezas, por lo que un bajo contenido es deseable`,
            `La lignina no afecta la calidad`,
            `Solo la remolacha tiene lignina`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la viabilidad comercial de las fibras alternativas?`,
        opciones: [
            `Todas son comercialmente viables`,
            `Solo el bagazo es viable`,
            `Muchas tienen potencial, pero pocas son comercialmente viables por razones técnicas y económicas`,
            `Solo el bambú es viable fuera de Asia`
        ],
        correcta: 2
    },
    {
        pregunta: `Según la fuente citada al final, ¿de qué año es el Fact Sheet de Two Sides?`,
        opciones: [
            `2020`,
            `2021`,
            `2022`,
            `2023`
        ],
        correcta: 1
    }
];


const questionsText2 = [
    {
        pregunta: `Según la infografía, ¿qué porcentaje de las matrículas de carreras de pregrado en formación artística, cultural y patrimonial correspondían a mujeres en 2019?`,
        opciones: [
            `49,9%`,
            `50,1%`,
            `53%`,
            `56,1%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿En qué carrera el 100% de las matrículas corresponden a mujeres?`,
        opciones: [
            `Danza`,
            `Conservación y Restauración`,
            `Bibliotecología`,
            `Artes Escénicas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de matrículas femeninas tiene la carrera de Danza?`,
        opciones: [
            `69,3%`,
            `71,7%`,
            `82,9%`,
            `100%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de matrículas femeninas tiene la carrera de Bibliotecología?`,
        opciones: [
            `56,1%`,
            `62,7%`,
            `69,3%`,
            `71,7%`
        ],
        correcta: 2
    },
    {
        pregunta: `Según la infografía, ¿qué carreras son mencionadas como las más paritarias en 2019?`,
        opciones: [
            `Danza y Bibliotecología`,
            `Arquitectura y Gastronomía`,
            `Animación y Comunicación audiovisual`,
            `Conservación y Restauración`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de mujeres se matriculó en Arquitectura en 2019?`,
        opciones: [
            `49,9%`,
            `53%`,
            `56,1%`,
            `62,7%`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué porcentaje de mujeres se matriculó en Gastronomía en 2019?`,
        opciones: [
            `49,9%`,
            `53%`,
            `56,1%`,
            `62,7%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas mujeres se matricularon en carreras de Técnica en Sonido y Acústica en 2019?`,
        opciones: [
            `99 mujeres`,
            `27,2% del total`,
            `6% del total`,
            `56,1% del total`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué porcentaje de mujeres se matricula en carreras de Animación y Comunicación audiovisual?`,
        opciones: [
            `6%`,
            `27,2%`,
            `33%`,
            `49,9%`
        ],
        correcta: 1
    },
    {
        pregunta: `En Música, ¿qué especialidad tiene el mayor porcentaje de mujeres matriculadas?`,
        opciones: [
            `Interpretación musical instrumental (26,7%)`,
            `Pedagogía y educación (33%)`,
            `Interpretación musical en canto (71%)`,
            `Programas de música general (26,7%)`
        ],
        correcta: 2
    },
    {
        pregunta: `En Música, ¿qué porcentaje de mujeres se matricula en interpretación musical instrumental?`,
        opciones: [
            `26,7%`,
            `33%`,
            `71%`,
            `80,3%`
        ],
        correcta: 0
    },
    {
        pregunta: `Según la infografía, ¿qué porcentaje del total de estudiantes en Arquitectura, diseño y servicios creativos son mujeres?`,
        opciones: [
            `50,1%`,
            `53%`,
            `56,1%`,
            `62,7%`
        ],
        correcta: 2
    },
    {
        pregunta: `En el campo de la música, ¿qué porcentaje de los estudiantes son hombres?`,
        opciones: [
            `26,1%`,
            `71,7%`,
            `80,3%`,
            `6,4%`
        ],
        correcta: 2
    },
    {
        pregunta: `De los hombres en el campo de la música, ¿qué porcentaje tiene título universitario?`,
        opciones: [
            `6,4%`,
            `26,1%`,
            `71,7%`,
            `80,3%`
        ],
        correcta: 1
    },
    {
        pregunta: `De los hombres en el campo de la música, ¿qué porcentaje tiene posgrado?`,
        opciones: [
            `6,4%`,
            `26,1%`,
            `71,7%`,
            `80,3%`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué porcentaje de matrículas en carreras de Artes Escénicas corresponden a mujeres?`,
        opciones: [
            `62,7%`,
            `69,7%`,
            `71,7%`,
            `82,9%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de matrículas en carreras de Artes de la Visualidad corresponden a mujeres?`,
        opciones: [
            `62,7%`,
            `69,7%`,
            `71,7%`,
            `82,9%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de matrículas en carreras de Artes Literarias corresponden a mujeres?`,
        opciones: [
            `56,1%`,
            `62,7%`,
            `69,7%`,
            `71,7%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la participación femenina en carreras técnicas como Sonido y Acústica?`,
        opciones: [
            `Tiene alta participación femenina (más del 50%)`,
            `Tiene muy baja participación femenina (solo 99 mujeres en total)`,
            `Es la carrera con mayor participación femenina`,
            `Tiene participación similar a Danza`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué conclusión general sobre la participación de la mujer en carreras artísticas y culturales se puede extraer de la infografía?`,
        opciones: [
            `Las mujeres están subrepresentadas en todas las carreras artísticas`,
            `Las mujeres tienen mayoría en la mayoría de las carreras artísticas (Danza, Conservación, Bibliotecología, Artes Escénicas, Visuales y Literarias), pero están subrepresentadas en áreas técnicas y audiovisuales`,
            `No hay diferencias significativas por género en ninguna carrera`,
            `Los hombres tienen mayoría en todas las carreras artísticas`
        ],
        correcta: 1
    }
];

const questionsText3 = [
    {
        pregunta: `Según la infografía, ¿qué porcentaje de personas en Asia occidental y África del Norte disponen de instalaciones para lavarse las manos con agua y jabón?`,
        opciones: [
            `15%`,
            `25%`,
            `76%`,
            `50%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de personas en el África subsahariana tiene instalaciones para lavarse las manos con agua y jabón?`,
        opciones: [
            `76%`,
            `50%`,
            `25%`,
            `15%`
        ],
        correcta: 3
    },
    {
        pregunta: `Según la infografía, ¿cuántas personas en el mundo carecían de agua potable en el hogar en 2015?`,
        opciones: [
            `892 millones`,
            `2100 millones (2.100 millones)`,
            `4500 millones (4.500 millones)`,
            `600 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas personas beben agua de fuentes superficiales como ríos o lagos?`,
        opciones: [
            `884 millones`,
            `263 millones`,
            `159 millones`,
            `600 millones`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuántas personas no disponen de servicios básicos de suministro de agua para consumo?`,
        opciones: [
            `159 millones`,
            `263 millones`,
            `884 millones`,
            `892 millones`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuántas personas dedican más de 30 minutos al día en la búsqueda de agua?`,
        opciones: [
            `159 millones`,
            `263 millones`,
            `884 millones`,
            `892 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `Según la infografía, ¿cuántas personas en el mundo carecían de sanitarios para evacuar las excretas en 2015?`,
        opciones: [
            `2100 millones (2.100 millones)`,
            `4500 millones (4.500 millones)`,
            `892 millones`,
            `600 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas personas siguen sin tener acceso a servicios básicos de saneamiento?`,
        opciones: [
            `600 millones`,
            `892 millones`,
            `2300 millones (2.300 millones)`,
            `263 millones`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuántas personas comparten inodoros o letrinas con otras familias?`,
        opciones: [
            `892 millones`,
            `600 millones`,
            `2300 millones (2.300 millones)`,
            `263 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas personas defecan al aire libre según la infografía?`,
        opciones: [
            `600 millones`,
            `892 millones`,
            `2300 millones (2.300 millones)`,
            `159 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `Según la infografía, ¿qué proporción de personas en países con bajos ingresos tiene instalaciones para lavarse las manos en el hogar?`,
        opciones: [
            `3 de cada 4`,
            `1 de cada 2`,
            `1 de cada 4`,
            `1 de cada 10`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué relación se puede establecer entre los datos de acceso a agua potable y saneamiento?`,
        opciones: [
            `Ambos problemas afectan a cifras similares (miles de millones de personas) y están interrelacionados`,
            `El acceso a agua potable es un problema menor que el saneamiento`,
            `El saneamiento es un problema exclusivo de África`,
            `No hay relación entre ambos problemas`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué se puede inferir sobre la situación en el África subsahariana a partir de los datos?`,
        opciones: [
            `Tiene mejores condiciones que Asia occidental`,
            `Es la región más afectada por la falta de instalaciones para lavado de manos (solo 15% de acceso)`,
            `No hay problemas de saneamiento en la región`,
            `Todos tienen acceso a agua potable`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué dato de la infografía permite inferir desigualdades regionales extremas?`,
        opciones: [
            `La comparación entre 76% en Asia occidental vs 15% en África subsahariana`,
            `El dato de 892 millones de personas defecando al aire libre`,
            `El dato de 600 millones compartiendo sanitarios`,
            `El dato de 263 millones buscando agua por más de 30 minutos`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué consecuencia puede tener la defecación al aire libre según el texto de la infografía?`,
        opciones: [
            `Mejora la fertilidad del suelo`,
            `Previene la contaminación de fuentes de agua`,
            `Previene enfermedades y contaminación de fuentes de agua`,
            `No tiene consecuencias negativas`
        ],
        correcta: 2
    },
    {
        pregunta: `Según la infografía, ¿cuál es el reto para 2030?`,
        opciones: [
            `Reducir a la mitad la falta de agua potable`,
            `Proporcionar acceso universal y equitativo a servicios de agua y saneamiento`,
            `Eliminar completamente la defecación al aire libre solo en Asia`,
            `Aumentar el acceso a agua solo en zonas urbanas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de la población que carece de servicios básicos de agua dedica más de 30 minutos a buscarla?`,
        opciones: [
            `Aproximadamente el 10% (88 millones)`,
            `Aproximadamente el 30% (263 millones de 884 millones)`,
            `Aproximadamente el 50%`,
            `Aproximadamente el 70%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación visual existe entre los datos de "agua potable" y "saneamiento" en la infografía?`,
        opciones: [
            `Ambos están presentados con cifras destacadas y se complementan para mostrar la crisis de saneamiento básico`,
            `Son datos contradictorios`,
            `El saneamiento es más importante que el agua`,
            `No hay relación visual entre ambos`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué se puede inferir sobre la calidad de vida en países con bajos ingresos a partir del dato "solo 1 de cada 4 personas tiene instalaciones para lavarse las manos"?`,
        opciones: [
            `Tienen buena calidad de vida`,
            `Las condiciones de higiene son precarias para la mayoría de la población`,
            `No necesitan lavarse las manos`,
            `Todos tienen acceso a agua potable`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué elemento del texto de la infografía explica la importancia de abordar estos problemas?`,
        opciones: [
            `El dato de 159 millones que beben de fuentes superficiales`,
            `El reto de 2030 y la necesidad de prevenir contaminación y enfermedades`,
            `El dato de 600 millones compartiendo sanitarios`,
            `La comparación regional sobre lavado de manos`
        ],
        correcta: 1
    }
];