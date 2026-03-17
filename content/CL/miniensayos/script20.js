const text1 = `
<p>Santiago, Chile — A pesar de los avances en legislación ambiental, Chile sigue enfrentando grandes desafíos en materia de reciclaje de plásticos. Según datos del Ministerio del Medio Ambiente, solo el 8% de los residuos plásticos generados en el país se recicla efectivamente, mientras que el resto termina en vertederos, rellenos sanitarios o, en el peor de los casos, en el océano.
<p>La Ley de Responsabilidad Extendida del Productor (REP), promulgada en 2016 y que comenzó a implementarse plenamente en 2023, establece metas ambiciosas para el reciclaje de envases y embalajes. Sin embargo, diversas organizaciones ambientales han señalado que las metas actuales son insuficientes y que la infraestructura para el reciclaje sigue siendo deficiente, especialmente en regiones alejadas de la capital.
<p>"Necesitamos un cambio cultural profundo", señala María González, vocera de la Fundación Chile Recicla. "No basta con tener contenedores de colores si la ciudadanía no separa correctamente sus residuos y si no existen plantas de reciclaje suficientes para procesarlos. Actualmente, muchas comunas del país ni siquiera cuentan con sistemas de recolección selectiva".
<p>Por su parte, la industria del plástico ha defendido sus avances. Andrés Fuentes, gerente de la Asociación de Industriales del Plástico (ASIPLA), destaca que "las empresas han invertido fuertemente en ecodiseño y en la incorporación de material reciclado en sus productos. La ley REP nos exige metas progresivas y estamos trabajando para cumplirlas".
<p>Un punto crítico es el reciclaje de plásticos de un solo uso. La Ley 21.368, conocida como Ley de Plásticos de Un Solo Uso, prohibió desde febrero de 2022 la entrega de bombillas, revolvedores y cubiertos de plástico en establecimientos de comida, y desde agosto de 2023, los envases de plumavit. Sin embargo, la implementación ha sido desigual y persisten dudas sobre la fiscalización.
<p>La infografía adjunta presenta los siguientes datos visuales:

<h3>Composición de residuos plásticos por tipo de producto</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 60%; font-family: Arial, sans-serif; text-align: left;">
  <thead style="background-color: #f2f2f2; font-weight: bold;">
    <tr>
      <th style="padding: 10px;">Tipo de producto</th>
      <th style="padding: 10px;">Porcentaje</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Envases y embalajes</td><td>42%</td></tr>
    <tr style="background-color: #f9f9f9;"><td>Bolsas plásticas</td><td>18%</td></tr>
    <tr><td>Productos de un solo uso (cubiertos, bombillas, etc.)</td><td>15%</td></tr>
    <tr style="background-color: #f9f9f9;"><td>Otros plásticos (juguetes, artículos de hogar, etc.)</td><td>25%</td></tr>
  </tbody>
</table>

<h3>Tasas de reciclaje por región</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 50%; font-family: Arial, sans-serif; text-align: left;">
  <thead style="background-color: #f2f2f2; font-weight: bold;">
    <tr>
      <th style="padding: 10px;">Región</th>
      <th style="padding: 10px;">Tasa de reciclaje</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Región Metropolitana</td><td>12%</td></tr>
    <tr style="background-color: #f9f9f9;"><td>Región de Valparaíso</td><td>9%</td></tr>
    <tr><td>Región del Biobío</td><td>10%</td></tr>
    <tr style="background-color: #f9f9f9;"><td>Región de Antofagasta</td><td>5%</td></tr>
    <tr><td>Región de La Araucanía</td><td>4%</td></tr>
    <tr style="background-color: #f9f9f9;"><td><strong>Promedio nacional</strong></td><td><strong>8%</strong></td></tr>
  </tbody>
</table>

<h3>Composición de residuos plásticos por tipo de producto</h3>
<div style="max-width:400px; margin:15px auto;">
    <canvas id="chart-composicion"></canvas>
</div>

<h3>Tasas de reciclaje por región</h3>
<div style="max-width:500px; margin:15px auto;">
    <canvas id="chart-regiones"></canvas>
</div>

<h3>Evolución de la tasa de reciclaje en Chile</h3>
<div style="max-width:500px; margin:15px auto;">
    <canvas id="chart-evolucion"></canvas>
</div>

<h3>Comparación internacional (países OCDE)</h3>
<div style="max-width:500px; margin:15px auto;">
    <canvas id="chart-ocde"></canvas>
</div>

<h3>Metas de la Ley REP para envases y embalajes</h3>
<div style="max-width:400px; margin:15px auto;">
    <canvas id="chart-rep"></canvas>
</div>

<p><small>Fuente: Ministerio del Medio Ambiente de Chile (2023) y OCDE (2022).</small></p>
<p>El artículo periodístico y la infografía se complementan para ofrecer una visión completa del problema. Mientras el texto presenta las opiniones de actores clave (ambientalistas, industriales) y describe el marco legal, la infografía proporciona datos concretos que permiten dimensionar el problema: la baja tasa de reciclaje (8%), las disparidades regionales, la lenta evolución en el tiempo y el rezago de Chile respecto a otros países de la OCDE. La infografía también contextualiza las metas de la Ley REP, mostrando que las metas para 2030 (30%) aún están lejos del promedio de la OCDE (32%).
<i>Fuente: Adaptado de artículos de El Mercurio, La Tercera y datos del Ministerio del Medio Ambiente (2023-2024)</i>
`;

const text2 = `
<p>América Latina enfrenta una paradoja hídrica: posee alrededor del 30% de los recursos de agua dulce del planeta, pero millones de personas carecen de acceso al agua potable y el estrés hídrico afecta a varias de sus principales ciudades. Así lo revela un reciente informe de la Comisión Económica para América Latina y el Caribe (CEPAL) y la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).
<p>El informe, titulado "El agua en América Latina: situación y perspectivas", señala que, si bien la región es rica en recursos hídricos, su distribución es extremadamente desigual. Mientras la cuenca del Amazonas concentra la mayor parte del agua, las zonas áridas y semiáridas del norte de México, el noreste de Brasil y la costa peruana y chilena sufren déficits crónicos.
<p>"El problema no es solo la disponibilidad, sino la gestión", explicó en conferencia de prensa Marta Riquelme, oficial de recursos hídricos de la FAO. "Hay una enorme brecha entre la infraestructura existente y la necesaria, y además se pierde aproximadamente un 40% del agua en sistemas de distribución deficientes. En algunas ciudades, las pérdidas superan el 50%".
<p>El cambio climático agrava la situación. Los glaciares andinos, que son una fuente crucial de agua para millones de personas en Perú, Bolivia, Chile y Argentina, han perdido más del 30% de su superficie en las últimas cuatro décadas. Esta tendencia amenaza con reducir drásticamente el caudal de los ríos en época seca, afectando tanto el consumo humano como la agricultura y la generación hidroeléctrica.
<p>Otro factor preocupante es la contaminación. En muchos países, los ríos y acuíferos reciben descargas de aguas residuales sin tratamiento adecuado, así como contaminantes provenientes de la minería y la agricultura intensiva. El informe de la CEPAL destaca que solo el 40% de las aguas residuales en América Latina reciben algún tipo de tratamiento antes de ser vertidas a los cuerpos de agua.
<p>Frente a este panorama, los expertos llaman a una gestión integrada de los recursos hídricos que considere tanto la oferta como la demanda, y que involucre a todos los actores: gobiernos, sector privado y sociedad civil. "Necesitamos pasar de una cultura de explotación a una cultura de cuidado", concluye Riquelme.

<h3>Consumo de agua per cápita anual (m³/habitante)</h3>
<div style="max-width:500px; margin:15px auto;">
    <canvas id="chart-agua"></canvas>
</div>
<p><small>Fuente: FAO (2022)</small></p>
<p>El artículo periodístico y el gráfico se complementan para ofrecer una visión integral de la situación hídrica en la región. Mientras el texto aborda los problemas estructurales (distribución desigual, pérdidas en sistemas, contaminación, impacto del cambio climático), el gráfico añade una dimensión comparativa fundamental: muestra que el consumo per cápita en la región es muy superior al promedio mundial (1,150 m³ vs 700 m³), con países como Chile, Argentina y Uruguay duplicando o triplicando el consumo de naciones como Guatemala o Haití.
<p>Esta información visual permite inferir que el problema del agua en América Latina no es solo de disponibilidad o gestión, sino también de patrones de consumo. Países con mayor desarrollo relativo (Chile, Argentina) consumen mucha más agua per cápita que países de menor desarrollo, lo que plantea interrogantes sobre la sostenibilidad de esos patrones. El gráfico también revela las profundas desigualdades intraregionales: mientras Chile consume 2,200 m³ por habitante al año, Haití apenas alcanza los 250 m³.
<p>La intención comunicativa del artículo, respaldada por el gráfico, es alertar sobre la necesidad de una gestión más eficiente y equitativa del agua, considerando tanto los problemas estructurales como los patrones de consumo. La fuente (CEPAL y FAO) otorga alta confiabilidad a los datos presentados.
<i>Fuente: Adaptado de informes de CEPAL, FAO y artículos de prensa especializada (2022-2023)</i>
`;

const text3 = `
<p>Los resultados de la prueba PISA 2022, dados a conocer esta semana por la Organización para la Cooperación y el Desarrollo Económicos (OCDE), han vuelto a encender las alarmas sobre la calidad de la educación en América Latina. La región se ubica, una vez más, en los últimos lugares del ranking internacional, con puntajes significativamente por debajo del promedio de la OCDE en las tres áreas evaluadas: matemáticas, lectura y ciencias.
<p>El informe, que evalúa a estudiantes de 15 años en 81 países, muestra que ningún país latinoamericano alcanza el promedio de la OCDE en ninguna de las áreas. Chile, tradicionalmente el mejor posicionado en la región, obtiene 412 puntos en matemáticas, muy por debajo del promedio OCDE que es de 472 puntos. En lectura, el panorama es similar: Chile lidera con 448 puntos, frente al promedio OCDE de 476. En ciencias, Chile alcanza 444 puntos, mientras el promedio OCDE es de 485.
<p>"Estos resultados son preocupantes, pero no sorprendentes", declaró a este medio Claudia Martínez, especialista en educación de la CEPAL. "Reflejan décadas de desigualdad, inversión insuficiente y debilidades estructurales en nuestros sistemas educativos. La pandemia profundizó estas brechas, pero los problemas vienen de antes".
<p>Los datos muestran una marcada heterogeneidad en la región. Mientras Chile, Uruguay y Costa Rica se ubican en el grupo de países con desempeño medio-bajo, naciones como Guatemala, Honduras y Nicaragua se sitúan en los últimos lugares del ranking mundial. En matemáticas, por ejemplo, Guatemala obtiene 312 puntos, 160 puntos menos que el promedio OCDE, lo que equivale a varios años de rezago educativo.
<p>El informe también revela que la mayoría de los estudiantes latinoamericanos no alcanzan el nivel básico de competencias (nivel 2) en matemáticas, considerado el mínimo necesario para participar plenariamente en la sociedad. En Chile, el 44% de los estudiantes está por debajo del nivel 2; en Argentina, el 55%; en Perú, el 60%; y en Guatemala, el 85%. En contraste, en países como Estonia o Japón, este porcentaje es inferior al 15%.
<p>Los especialistas coinciden en que estos resultados tienen implicaciones profundas para el desarrollo de la región. "La educación es la base del desarrollo económico y social", señaló Martínez. "Si nuestros jóvenes no adquieren las competencias básicas, estamos hipotecando el futuro. No podemos seguir compitiendo en base a recursos naturales; necesitamos una fuerza laboral calificada para insertarnos en la economía del conocimiento".
<p>Los ministros de educación de la región, reunidos de urgencia en Santiago, emitieron una declaración conjunta comprometiéndose a reforzar las políticas educativas y aumentar la inversión en el sector. Sin embargo, organizaciones de la sociedad civil han recibido el anuncio con escepticismo, recordando que promesas similares se han hecho en el pasado sin resultados concretos.
<h3>Resultados PISA 2022</h3>
<div style="max-width:600px; margin:15px auto;">
    <canvas id="chart-pisa"></canvas>
</div>
<p><small>Fuente: OCDE (PISA 2022)</small></p>
<p>El artículo periodístico y la tabla comparativa se complementan para ofrecer una visión detallada de la crisis educativa en la región. El texto contextualiza los resultados, ofrece opiniones de especialistas y describe las reacciones políticas, mientras que la tabla proporciona datos precisos que permiten comparar el desempeño de los países en las tres áreas evaluadas y visualizar las enormes brechas existentes.
<p>La tabla permite inferir la magnitud del rezago: ningún país latinoamericano alcanza siquiera los 450 puntos en ninguna área, mientras el promedio OCDE ronda los 470-485. También revela la heterogeneidad regional: Chile y Uruguay duplican en puntaje a Nicaragua y Honduras. El indicador de porcentaje de estudiantes por debajo del nivel básico es especialmente revelador: mientras en la OCDE solo el 24% no alcanza las competencias mínimas, en países como Guatemala, Honduras y Nicaragua esa cifra supera el 85%.
<p>La intención del autor del artículo parece ser doble: por un lado, informar objetivamente sobre los resultados; por otro, generar conciencia sobre la gravedad de la crisis educativa y la necesidad de políticas urgentes. La selección de citas (especialistas que hablan de "décadas de desigualdad" y "futuro hipotecado") refuerza esta intención crítica. La fuente (OCDE) es de alta confiabilidad, lo que otorga solidez a los datos presentados.
<i>Fuente: Adaptado de informes de la OCDE (PISA 2022) y notas de prensa de El País, El Mercurio y Clarín (2023)</i>
`;

const textMap = {
    1: { title: "Chile: el desafío del reciclaje de plásticos", content: text1 },
    2: { title: "América Latina: la urgencia de gestionar el agua", content: text2 },
    3: { title: "Resultados PISA en Latinoamérica: una radiografía de la crisis educativa", content: text3 }
};

const questionsText1 = [
    {
        pregunta: `Según el artículo, ¿cuál es la tasa de reciclaje de plásticos en Chile según el Ministerio del Medio Ambiente?`,
        opciones: [
            `5%`,
            `8%`,
            `12%`,
            `15%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué ley establece metas para el reciclaje de envases y embalajes en Chile?`,
        opciones: [
            `Ley de Plásticos de Un Solo Uso (21.368)`,
            `Ley de Responsabilidad Extendida del Productor (REP)`,
            `Ley de Fomento al Reciclaje`,
            `Ley de Basura Cero`
        ],
        correcta: 1
    },
    {
        pregunta: `¿En qué año se promulgó la Ley REP?`,
        opciones: [
            `2010`,
            `2016`,
            `2020`,
            `2023`
        ],
        correcta: 1
    },
    {
        pregunta: `Según María González de Chile Recicla, ¿cuáles son los problemas principales?`,
        opciones: [
            `Falta de leyes y regulaciones`,
            `Falta de cultura ciudadana, sistemas de recolección selectiva deficientes y falta de plantas de reciclaje`,
            `Exceso de reciclaje`,
            `Altos costos de los contenedores`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué productos prohibió la Ley de Plásticos de Un Solo Uso desde febrero de 2022?`,
        opciones: [
            `Bolsas plásticas y envases`,
            `Bombillas, revolvedores y cubiertos de plástico`,
            `Botellas PET`,
            `Todo tipo de plásticos`
        ],
        correcta: 1
    },
    {
        pregunta: `Según la infografía, ¿qué porcentaje de los residuos plásticos corresponden a envases y embalajes?`,
        opciones: [
            `25%`,
            `42%`,
            `18%`,
            `15%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué región de Chile tiene la mayor tasa de reciclaje según la infografía?`,
        opciones: [
            `Valparaíso (9%)`,
            `Metropolitana (12%)`,
            `Biobío (10%)`,
            `Antofagasta (5%)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué región tiene la menor tasa de reciclaje?`,
        opciones: [
            `Antofagasta (5%)`,
            `Biobío (10%)`,
            `La Araucanía (4%)`,
            `Metropolitana (12%)`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cómo ha evolucionado la tasa de reciclaje en Chile entre 2010 y 2023?`,
        opciones: [
            `Ha disminuido de 8% a 4%`,
            `Ha aumentado lentamente de 4% a 8%`,
            `Se ha mantenido constante en 5%`,
            `Ha aumentado de 8% a 15%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país de la OCDE tiene la tasa de reciclaje más alta según la comparación?`,
        opciones: [
            `Corea del Sur (53%)`,
            `Alemania (56%)`,
            `España (35%)`,
            `Chile (8%)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el promedio de reciclaje en la OCDE?`,
        opciones: [
            `25%`,
            `32%`,
            `40%`,
            `50%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué meta de reciclaje establece la Ley REP para 2030?`,
        opciones: [
            `15%`,
            `20%`,
            `30%`,
            `50%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué se puede inferir sobre la evolución del reciclaje en Chile a partir de los datos de la infografía?`,
        opciones: [
            `Chile ha tenido un crecimiento explosivo en reciclaje`,
            `El crecimiento ha sido muy lento (solo 4 puntos porcentuales en 13 años)`,
            `El reciclaje ha disminuido`,
            `Chile ya alcanzó las metas de la OCDE`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se infiere sobre la relación entre las metas de la Ley REP y el promedio de la OCDE?`,
        opciones: [
            `Las metas de Chile para 2030 (30%) superan el promedio de la OCDE`,
            `Las metas de Chile para 2030 (30%) están cerca del promedio OCDE (32%), pero aún por debajo`,
            `Las metas de Chile son mucho más altas que el promedio OCDE`,
            `Chile no tiene metas de reciclaje`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué disparidad regional revela la infografía?`,
        opciones: [
            `Todas las regiones reciclan igual`,
            `La Región Metropolitana recicla tres veces más que La Araucanía (12% vs 4%)`,
            `Las regiones del norte reciclan más que las del sur`,
            `No hay disparidades significativas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué intención comunicativa tiene el artículo al incluir opiniones de diferentes actores (ambientalistas e industriales)?`,
        opciones: [
            `Mostrar que todos están de acuerdo`,
            `Presentar diferentes perspectivas sobre el problema y generar un debate balanceado`,
            `Criticar solo a la industria`,
            `Criticar solo a los ambientalistas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la confiabilidad de las fuentes del artículo?`,
        opciones: [
            `Las fuentes son poco confiables (solo opiniones)`,
            `Las fuentes son confiables (Ministerio del Medio Ambiente, OCDE, ASIPLA, Fundación Chile Recicla)`,
            `No hay fuentes claras`,
            `Solo se usan fuentes anónimas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación existe entre la información del artículo y la infografía?`,
        opciones: [
            `Se contradicen`,
            `La infografía cuantifica y visualiza los datos que el artículo contextualiza y analiza cualitativamente`,
            `Son independientes y no relacionados`,
            `La infografía no aporta información relevante`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de plásticos de un solo uso representa el total de residuos plásticos?`,
        opciones: [
            `42%`,
            `18%`,
            `15%`,
            `25%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué se puede inferir sobre la efectividad de la Ley de Plásticos de Un Solo Uso a partir del artículo?`,
        opciones: [
            `Ha sido completamente efectiva y no hay problemas`,
            `Su implementación ha sido desigual y persisten dudas sobre la fiscalización`,
            `No ha tenido ningún impacto`,
            `Se derogó antes de implementarse`
        ],
        correcta: 1
    }
];

const questionsText2 = [
    {
        pregunta: `Según el artículo, ¿qué porcentaje de los recursos de agua dulce del planeta posee América Latina?`,
        opciones: [
            `10%`,
            `20%`,
            `30%`,
            `50%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de agua se pierde en sistemas de distribución deficientes según la FAO?`,
        opciones: [
            `20%`,
            `30%`,
            `40%`,
            `50%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuánto han perdido los glaciares andinos en las últimas cuatro décadas?`,
        opciones: [
            `10%`,
            `20%`,
            `30%`,
            `40%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje de las aguas residuales en América Latina recibe tratamiento antes de ser vertido?`,
        opciones: [
            `20%`,
            `40%`,
            `60%`,
            `80%`
        ],
        correcta: 1
    },
    {
        pregunta: `Según la tabla, ¿qué país de América Latina tiene el mayor consumo de agua per cápita?`,
        opciones: [
            `Argentina (2,000 m³)`,
            `Uruguay (1,950 m³)`,
            `Chile (2,200 m³)`,
            `Brasil (1,500 m³)`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el consumo de agua per cápita en Haití según la tabla?`,
        opciones: [
            `400 m³`,
            `250 m³`,
            `550 m³`,
            `750 m³`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el promedio regional de consumo de agua en América Latina?`,
        opciones: [
            `700 m³`,
            `1,150 m³`,
            `1,500 m³`,
            `2,000 m³`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el promedio mundial de consumo de agua?`,
        opciones: [
            `500 m³`,
            `700 m³`,
            `900 m³`,
            `1,100 m³`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la relación entre el consumo de agua y el nivel de desarrollo en la región?`,
        opciones: [
            `Los países con mayor desarrollo relativo (Chile, Argentina) consumen más agua per cápita`,
            `Los países más pobres consumen más agua`,
            `No hay relación entre desarrollo y consumo`,
            `Todos los países consumen igual`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué se infiere sobre la sostenibilidad de los patrones de consumo en países como Chile?`,
        opciones: [
            `Son perfectamente sostenibles`,
            `Son preocupantes porque duplican o triplican el consumo de países como Haití y superan ampliamente el promedio mundial`,
            `Son similares a los de países desarrollados`,
            `No hay datos para inferir`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué desigualdad intraregional revela la tabla?`,
        opciones: [
            `No hay desigualdad significativa`,
            `Chile consume casi 9 veces más agua per cápita que Haití (2,200 vs 250 m³)`,
            `Haití consume más que Chile`,
            `Todos los países están en el mismo rango`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué factores agravan la situación hídrica según el artículo?`,
        opciones: [
            `Solo el cambio climático`,
            `El cambio climático, la contaminación y la falta de tratamiento de aguas residuales`,
            `Solo la contaminación`,
            `La sobrepoblación únicamente`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué afirma Marta Riquelme sobre la brecha entre infraestructura y necesidades?`,
        opciones: [
            `No hay brecha, todo funciona bien`,
            `Hay una enorme brecha, con pérdidas de aproximadamente 40% del agua`,
            `La brecha es pequeña y manejable`,
            `La infraestructura es excesiva`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué cambio cultural propone Riquelme?`,
        opciones: [
            `Seguir con la misma cultura de explotación`,
            `Pasar de una cultura de explotación a una cultura de cuidado`,
            `Aumentar la explotación de recursos`,
            `Privatizar el agua`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué intención comunicativa tiene el artículo al incluir datos de CEPAL y FAO?`,
        opciones: [
            `Restar credibilidad al informe`,
            `Otorgar confiabilidad y respaldo institucional a los datos presentados`,
            `Confundir al lector con datos contradictorios`,
            `Mostrar que las organizaciones no se ponen de acuerdo`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación existe entre la tabla y el artículo?`,
        opciones: [
            `Se contradicen`,
            `La tabla añade una dimensión comparativa que complementa el análisis cualitativo del artículo`,
            `Son independientes`,
            `La tabla no aporta información relevante`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la gestión del agua en América Latina a partir de los datos?`,
        opciones: [
            `Es ejemplar y debería ser imitada`,
            `Es deficiente, con grandes pérdidas, desigualdades y falta de tratamiento de aguas residuales`,
            `Es similar a la de Europa`,
            `No hay problemas de gestión`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país consume menos agua per cápita en la región?`,
        opciones: [
            `Bolivia (550 m³)`,
            `Paraguay (500 m³)`,
            `Haití (250 m³)`,
            `Guatemala (400 m³)`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué se puede inferir sobre la relación entre el derretimiento de glaciares y la disponibilidad de agua?`,
        opciones: [
            `El derretimiento aumenta la disponibilidad de agua a largo plazo`,
            `El derretimiento amenaza con reducir drásticamente el caudal de los ríos en época seca`,
            `No hay relación entre glaciares y ríos`,
            `El derretimiento solo afecta a la agricultura`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del agua se pierde en sistemas deficientes en algunas ciudades?`,
        opciones: [
            `30%`,
            `40%`,
            `50%`,
            `60%`
        ],
        correcta: 2
    }
];

const questionsText3 = [
    {
        pregunta: `Según el artículo, ¿qué puntaje obtuvo Chile en matemáticas en PISA 2022?`,
        opciones: [
            `448 puntos`,
            `412 puntos`,
            `444 puntos`,
            `400 puntos`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el promedio de la OCDE en matemáticas?`,
        opciones: [
            `476 puntos`,
            `472 puntos`,
            `485 puntos`,
            `450 puntos`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país latinoamericano lidera en lectura según los resultados?`,
        opciones: [
            `Uruguay (430)`,
            `Chile (448)`,
            `Costa Rica (415)`,
            `México (415)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué puntaje obtuvo Guatemala en matemáticas?`,
        opciones: [
            `350 puntos`,
            `312 puntos`,
            `375 puntos`,
            `385 puntos`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué puntaje obtuvo Nicaragua en ciencias?`,
        opciones: [
            `320 puntos`,
            `305 puntos`,
            `315 puntos`,
            `330 puntos`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de estudiantes chilenos está por debajo del nivel 2 en matemáticas?`,
        opciones: [
            `55%`,
            `44%`,
            `60%`,
            `85%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de estudiantes guatemaltecos está por debajo del nivel 2 en matemáticas?`,
        opciones: [
            `60%`,
            `72%`,
            `85%`,
            `90%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el porcentaje de estudiantes por debajo del nivel 2 en matemáticas en el promedio de la OCDE?`,
        opciones: [
            `15%`,
            `24%`,
            `30%`,
            `44%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué países obtienen los puntajes más bajos en la región según la tabla?`,
        opciones: [
            `Chile, Uruguay y Costa Rica`,
            `Guatemala, Honduras y Nicaragua`,
            `México, Perú y Colombia`,
            `Brasil y Argentina`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la heterogeneidad educativa en América Latina a partir de la tabla?`,
        opciones: [
            `Todos los países tienen resultados similares`,
            `Hay enormes diferencias: Chile y Uruguay duplican en puntaje a Nicaragua y Honduras`,
            `No hay diferencias significativas`,
            `Los países pequeños tienen mejores resultados`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se infiere sobre la gravedad de la crisis educativa en Centroamérica?`,
        opciones: [
            `No hay crisis, están al nivel de la OCDE`,
            `Es muy grave: más del 85% de los estudiantes no alcanza las competencias mínimas en matemáticas`,
            `Están ligeramente por debajo del promedio regional`,
            `Tienen mejores resultados que Chile`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué factor NO menciona Claudia Martínez como causa de los resultados?`,
        opciones: [
            `Décadas de desigualdad`,
            `Inversión insuficiente`,
            `Debilidades estructurales`,
            `Falta de interés de los estudiantes`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Qué efecto tuvo la pandemia según la especialista?`,
        opciones: [
            `Mejoró los resultados educativos`,
            `Profundizó las brechas existentes`,
            `No tuvo ningún efecto`,
            `Igualó a todos los países`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué implica no alcanzar el nivel 2 en matemáticas según el artículo?`,
        opciones: [
            `No tener acceso a la universidad`,
            `No alcanzar las competencias básicas necesarias para participar plenamente en la sociedad`,
            `Ser un mal estudiante`,
            `No poder leer ni escribir`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación establece la especialista entre educación y desarrollo?`,
        opciones: [
            `No hay relación entre educación y desarrollo`,
            `La educación es la base del desarrollo económico y social; sin competencias básicas, se hipoteca el futuro`,
            `El desarrollo puede lograrse sin educación`,
            `La educación solo sirve para el desarrollo cultural`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cómo reaccionaron los ministros de educación de la región?`,
        opciones: [
            `Ignoraron los resultados`,
            `Emitieron una declaración conjunta comprometiéndose a reforzar políticas y aumentar inversión`,
            `Renunciaron a sus cargos`,
            `Criticaron la metodología de PISA`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué escepticismo expresan las organizaciones de la sociedad civil?`,
        opciones: [
            `Que los datos de PISA son falsos`,
            `Que promesas similares se han hecho en el pasado sin resultados concretos`,
            `Que los ministros no tienen capacidad`,
            `Que la educación no es importante`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué intención comunicativa tiene el artículo al incluir el indicador de "porcentaje por debajo del nivel 2"?`,
        opciones: [
            `Complicar innecesariamente la información`,
            `Mostrar de manera contundente la magnitud del fracaso educativo en la región`,
            `Comparar solo a los mejores estudiantes`,
            `Ocultar los malos resultados`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la confiabilidad de la fuente del artículo?`,
        opciones: [
            `Es poco confiable porque solo usa opiniones`,
            `Es altamente confiable porque los datos provienen de la OCDE, una organización reconocida internacionalmente`,
            `No tiene fuentes claras`,
            `Las fuentes son anónimas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país latinoamericano tiene el menor porcentaje de estudiantes por debajo del nivel 2 en matemáticas?`,
        opciones: [
            `Uruguay (46%)`,
            `Chile (44%)`,
            `Costa Rica (52%)`,
            `México (55%)`
        ],
        correcta: 1
    }
];
