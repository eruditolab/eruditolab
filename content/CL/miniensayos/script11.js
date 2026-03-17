const text1 = `
La población activa de un país se define como el conjunto de personas en edad de trabajar que participan en el mercado laboral, ya sea trabajando (ocupados) o buscando empleo (desocupados). La distribución de esta población por sectores económicos es un indicador clave del nivel de desarrollo de una nación. Los países con economías avanzadas suelen tener un alto porcentaje de población activa en el sector servicios, mientras que los países en desarrollo concentran su fuerza laboral en la agricultura y la industria.
A continuación, se presenta una tabla comparativa de la distribución porcentual de la población activa en tres países hipotéticos (Alpha, Beta y Gamma) para los años 2000 y 2020. Los datos reflejan los cambios en la estructura económica de estas naciones en un período de dos décadas.
<p>TABLA: Distribución de la población activa por sectores (en porcentajes)</p>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; text-align: center;">
  <thead style="background-color: #f2f2f2; font-weight: bold;">
    <tr>
      <th style="padding: 10px;">PAÍS</th>
      <th style="padding: 10px;">AÑO</th>
      <th style="padding: 10px;">SECTOR PRIMARIO<br><small>(Agricultura, ganadería, pesca)</small></th>
      <th style="padding: 10px;">SECTOR SECUNDARIO<br><small>(Industria, construcción)</small></th>
      <th style="padding: 10px;">SECTOR TERCIARIO<br><small>(Servicios, comercio, turismo)</small></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" style="font-weight: bold;">ALPHA</td>
      <td>2000</td>
      <td>45%</td>
      <td>30%</td>
      <td>25%</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>25%</td>
      <td>35%</td>
      <td>40%</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td rowspan="2" style="font-weight: bold;">BETA</td>
      <td>2000</td>
      <td>10%</td>
      <td>25%</td>
      <td>65%</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td>2020</td>
      <td>8%</td>
      <td>22%</td>
      <td>70%</td>
    </tr>
    <tr>
      <td rowspan="2" style="font-weight: bold;">GAMMA</td>
      <td>2000</td>
      <td>5%</td>
      <td>20%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>3%</td>
      <td>15%</td>
      <td>82%</td>
    </tr>
  </tbody>
</table>
Los datos muestran trayectorias de desarrollo diferentes. En Alpha, se observa una disminución significativa del sector primario (del 45% al 25%) y un aumento tanto del sector secundario como del terciario, lo que indica un proceso de industrialización y modernización económica. Beta, que ya partía de una base terciaria sólida en el 2000 (65%), profundiza su perfil de servicios alcanzando el 70% en 2020. Gamma, por su parte, consolida su carácter de economía avanzada con un 82% de su población activa en el sector servicios, mientras que el sector primario se reduce al mínimo (3%).
Estos cambios tienen implicaciones directas en la calidad de vida de la población, los patrones de urbanización y las políticas educativas necesarias para formar a los trabajadores en los sectores en crecimiento.
<i>Fuente: Basado en modelos de preguntas liberadas PISA y datos de desarrollo económico (2024)</i>
`;

const text2 = `
El crecimiento de la población mundial y el aumento del consumo per cápita de agua potable son dos factores que ejercen una presión creciente sobre los recursos hídricos del planeta. Mientras que la población crece de manera constante, el consumo de agua tiende a aumentar a un ritmo aún mayor debido a factores como la urbanización, el desarrollo industrial y los cambios en los hábitos de consumo.
La siguiente tabla muestra la evolución de la población (en millones de habitantes) y el consumo de agua potable (en miles de millones de metros cúbicos anuales) en una región hipotética durante el período 2000-2025, con proyecciones hasta 2030.
<p>TABLA: Población y consumo de agua (2000-2030)</p>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: monospace; text-align: center;">
  <tr>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">AÑO</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2000</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2005</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2010</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2015</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2020</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2025*</td>
    <td style="padding: 10px; background-color: #f0f0f0; font-weight: bold;">2030*</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Población (millones)</td>
    <td>250</td>
    <td>280</td>
    <td>310</td>
    <td>340</td>
    <td>370</td>
    <td>400</td>
    <td>430</td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="font-weight: bold;">Consumo (miles de millones m³)</td>
    <td>40</td>
    <td>50</td>
    <td>60</td>
    <td>70</td>
    <td>80</td>
    <td>95</td>
    <td>115</td>
  </tr>
  <tr>
    <td colspan="8" style="padding: 5px; text-align: left; font-style: italic;">* Proyecciones estimadas</td>
  </tr>
</table>
<p>1. Crecimiento poblacional: La población de la región ha aumentado de manera constante, pasando de 250 millones en el año 2000 a una proyección de 400 millones para 2025, y se espera que alcance los 430 millones en 2030. Este crecimiento sigue una tendencia lineal con una pendiente moderada.</p>
<p>2. Consumo de agua: El consumo de agua potable ha experimentado un crecimiento más acelerado. En el año 2000, el consumo era de 40 mil millones de metros cúbicos anuales. Para 2025, se proyecta que alcance los 95 mil millones, y para 2030 superará los 115 mil millones.</p>
<p>3. Relación entre variables: La diferencia en las pendientes de ambas curvas indica que el consumo de agua está creciendo a un ritmo superior al del crecimiento poblacional. Esto sugiere que el aumento del consumo no se debe únicamente a que hay más personas, sino también a que cada persona consume más agua (aumento del consumo per cápita).</p>
<p>4. Proyecciones preocupantes: Si la tendencia se mantiene, para 2030 el consumo de agua se habrá casi triplicado con respecto al año 2000 (de 40 a 115 mil millones), mientras que la población apenas habrá aumentado menos del doble (de 250 a 430 millones). Esta divergencia plantea serios desafíos para la sostenibilidad de los recursos hídricos de la región, especialmente en un contexto de cambio climático que podría reducir la disponibilidad de agua.</p>
<p>Los expertos advierten que, de no implementarse medidas de eficiencia hídrica y de control del consumo, la región podría enfrentar episodios de estrés hídrico recurrente en la próxima década.</p>
<i>Fuente: Basado en datos de FAO y CEPAL sobre recursos hídricos (2023)</i>
`;

const text3 = `
El uso de dispositivos electrónicos entre niños y adolescentes ha aumentado exponencialmente en la última década. Comprender los patrones de consumo es fundamental para diseñar políticas educativas y de salud pública que promuevan un uso equilibrado de la tecnología. A continuación, se presentan dos tablas que resumen los resultados de una encuesta realizada a 2.500 jóvenes de entre 10 y 18 años en cinco ciudades de Latinoamérica.
<p>TABLA: Tiempo diario promedio frente a pantallas (horas)</p>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; text-align: center;">
  <thead style="background-color: #f2f2f2; font-weight: bold;">
    <tr>
      <th style="padding: 10px;">EDAD</th>
      <th style="padding: 10px;">SMARTPHONE</th>
      <th style="padding: 10px;">TABLET</th>
      <th style="padding: 10px;">COMPUTADORA</th>
      <th style="padding: 10px;">VIDEOJUEGOS</th>
      <th style="padding: 10px;">TV</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight: bold;">10-12 años</td>
      <td>3.5 horas</td>
      <td>2.0 horas</td>
      <td>1.0 horas</td>
      <td>2.5 horas</td>
      <td>1.5 horas</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="font-weight: bold;">13-15 años</td>
      <td>5.0 horas</td>
      <td>1.0 horas</td>
      <td>2.0 horas</td>
      <td>2.0 horas</td>
      <td>1.0 horas</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">16-18 años</td>
      <td>6.0 horas</td>
      <td>0.5 horas</td>
      <td>3.0 horas</td>
      <td>1.5 horas</td>
      <td>0.5 horas</td>
    </tr>
  </tbody>
</table>
TABLA: Motivos de uso principal por dispositivo (porcentaje)]
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; text-align: center; margin-top: 20px;">
  <thead style="background-color: #f2f2f2; font-weight: bold;">
    <tr>
      <th style="padding: 10px;">DISPOSITIVO</th>
      <th style="padding: 10px;">REDES SOCIALES</th>
      <th style="padding: 10px;">ESTUDIOS/TRABAJO</th>
      <th style="padding: 10px;">ENTRETENIMIENTO</th>
      <th style="padding: 10px;">COMUNICACIÓN</th>
      <th style="padding: 10px;">JUEGOS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight: bold;">SMARTPHONE</td>
      <td>45%</td>
      <td>10%</td>
      <td>15%</td>
      <td>25%</td>
      <td>5%</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="font-weight: bold;">COMPUTADORA</td>
      <td>15%</td>
      <td>50%</td>
      <td>20%</td>
      <td>5%</td>
      <td>10%</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">TABLET</td>
      <td>20%</td>
      <td>25%</td>
      <td>35%</td>
      <td>5%</td>
      <td>15%</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="font-weight: bold;">CONSOLA</td>
      <td>5%</td>
      <td>0%</td>
      <td>10%</td>
      <td>5%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">TELEVISIÓN</td>
      <td>0%</td>
      <td>0%</td>
      <td>95%</td>
      <td>0%</td>
      <td>5%</td>
    </tr>
  </tbody>
</table>
Los resultados de la encuesta revelan patrones diferenciados por edad y tipo de dispositivo:
<p>1. Smartphone como dispositivo dominante: El teléfono inteligente es el dispositivo más utilizado en todos los grupos de edad, con un aumento significativo del tiempo de uso a medida que los jóvenes crecen. Mientras que los niños de 10-12 años promedian 3.5 horas diarias, los adolescentes de 16-18 alcanzan las 6 horas. El uso principal del smartphone son las redes sociales (45%), seguidas de la comunicación (25%).</p>
<p>2. Transición en la adolescencia temprana: El grupo de 13-15 años muestra un cambio importante: disminuye el uso de tabletas y televisión, mientras que aumenta el uso de computadoras (probablemente asociado a tareas escolares) y se mantiene alto el consumo de videojuegos.</p>
<p>3. Computadora: herramienta de estudio: A diferencia del smartphone, la computadora se utiliza principalmente para estudios o trabajo (50%), especialmente en los grupos de mayor edad. Esto refleja su rol como herramienta productiva más que recreativa.</p>
<p>4. Tableta en declive: El uso de tabletas disminuye drásticamente con la edad, pasando de 2 horas diarias en niños de 10-12 años a solo 30 minutos en adolescentes de 16-18. Esto sugiere que la tableta es un dispositivo de transición que pierde relevancia cuando los jóvenes acceden a smartphones y computadoras más potentes.</p>
<p>5. Videojuegos: actividad transversal: El tiempo dedicado a videojuegos se mantiene relativamente estable, aunque disminuye ligeramente en el grupo de mayor edad. Las consolas se utilizan casi exclusivamente para jugar (80%), mientras que el gaming en smartphone y computadora es más ocasional.</p>
<p>6. Televisión en retroceso: El tiempo dedicado a ver televisión tradicional disminuye consistentemente con la edad, siendo reemplazado por contenido en streaming consumido a través de otros dispositivos.</p>
<p>Los datos muestran una clara fragmentación del consumo de medios entre los jóvenes, con el smartphone como centro de su vida digital. Las implicaciones educativas son relevantes: mientras que la computadora mantiene un perfil académico, el smartphone está fuertemente orientado al ocio y la socialización. Esto plantea desafíos para las instituciones educativas en cuanto a la integración efectiva de la tecnología en los procesos de aprendizaje.</p>
<i>Fuente: Encuesta de hábitos digitales en jóvenes latinoamericanos (Centro de Estudios de la Juventud, 2024)</i>
`;

const textMap = {
    1: { title: "POBLACIÓN ACTIVA POR SECTORES ECONÓMICOS", content: text1 },
    2: { title: "CRECIMIENTO DEMOGRÁFICO Y CONSUMO DE AGUA POTABLE (2000-2025)", content: text2 },
    3: { title: "HÁBITOS DE CONSUMO DE DISPOSITIVOS ELECTRÓNICOS EN JÓVENES (2024)", content: text3 }
};

const questionsText1 = [
    {
        pregunta: `Según la tabla, ¿qué porcentaje de la población activa de Alpha en el año 2000 trabajaba en el sector secundario?`,
        opciones: [
            `45%`,
            `30%`,
            `25%`,
            `35%`
        ],
        correcta: 1
    },
    {
        pregunta: `¿En qué país y año se registra el mayor porcentaje de población activa en el sector terciario?`,
        opciones: [
            `Beta, 2020`,
            `Gamma, 2020`,
            `Gamma, 2000`,
            `Alpha, 2020`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país experimentó la mayor reducción porcentual en el sector primario entre 2000 y 2020?`,
        opciones: [
            `Beta (de 10% a 8%)`,
            `Alpha (de 45% a 25%)`,
            `Gamma (de 5% a 3%)`,
            `Todos por igual`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el fragmento explicativo, ¿qué indica una alta concentración de población activa en el sector servicios?`,
        opciones: [
            `Que el país tiene una economía poco desarrollada.`,
            `Que el país tiene una economía avanzada.`,
            `Que el país depende principalmente de la agricultura.`,
            `Que el país está en proceso de industrialización.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿En qué año el sector secundario de Alpha alcanza su máximo porcentaje según la tabla?`,
        opciones: [
            `2000 (30%)`,
            `2020 (35%)`,
            `2000 (45%)`,
            `2020 (40%)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tendencia se observa en Beta entre 2000 y 2020?`,
        opciones: [
            `Aumento del sector primario y disminución del terciario.`,
            `Estabilidad relativa con leve aumento del sector terciario y descenso del secundario.`,
            `Fuerte crecimiento del sector secundario.`,
            `Disminución de todos los sectores.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país mantiene el sector primario por debajo del 10% en ambos años?`,
        opciones: [
            `Alpha`,
            `Beta`,
            `Gamma`,
            `Ninguno`
        ],
        correcta: 2
    },
    {
        pregunta: `Según el texto, ¿qué implicaciones tienen los cambios en la distribución sectorial?`,
        opciones: [
            `Solo afectan la economía, no la calidad de vida.`,
            `Tienen implicaciones en la calidad de vida, urbanización y políticas educativas.`,
            `No tienen implicaciones relevantes.`,
            `Afectan únicamente al comercio exterior.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es la definición de población activa según el fragmento explicativo?`,
        opciones: [
            `Todas las personas que viven en un país.`,
            `Personas en edad de trabajar que participan en el mercado laboral (ocupados o desocupados).`,
            `Solo las personas que tienen empleo.`,
            `Los jóvenes y adultos mayores.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de la población activa de Gamma en 2020 trabajaba en el sector primario?`,
        opciones: [
            `5%`,
            `8%`,
            `3%`,
            `15%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿En qué país el sector terciario creció más de 10 puntos porcentuales entre 2000 y 2020?`,
        opciones: [
            `Alpha (de 25% a 40%)`,
            `Beta (de 65% a 70%)`,
            `Gamma (de 75% a 82%)`,
            `Ninguno`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué relación se puede establecer entre la disminución del sector primario y el aumento del terciario en Alpha?`,
        opciones: [
            `Son fenómenos independientes sin relación.`,
            `La disminución del primario se compensa con el aumento del terciario, indicando una transición económica.`,
            `El sector primario aumenta mientras el terciario disminuye.`,
            `Ambos sectores disminuyen simultáneamente.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué país presenta la estructura económica más estable entre 2000 y 2020, con cambios mínimos?`,
        opciones: [
            `Alpha`,
            `Beta`,
            `Gamma`,
            `Todos presentan cambios similares`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje de la población activa de Alpha en 2000 se dedicaba a actividades no relacionadas con la industria?`,
        opciones: [
            `30%`,
            `70% (sector primario + terciario)`,
            `45%`,
            `25%`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el texto, ¿qué caracteriza a los países con economías avanzadas?`,
        opciones: [
            `Alto porcentaje en sector primario.`,
            `Alto porcentaje en sector secundario.`,
            `Alto porcentaje en sector terciario.`,
            `Distribución equitativa entre los tres sectores.`
        ],
        correcta: 2
    },
    {
        pregunta: `¿En qué país el sector secundario disminuye entre 2000 y 2020?`,
        opciones: [
            `Alpha (aumenta de 30% a 35%)`,
            `Beta (disminuye de 25% a 22%) y Gamma (disminuye de 20% a 15%)`,
            `Solo Gamma`,
            `Ninguno disminuye`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del sector terciario en Gamma en 2020 supera al de Beta en el mismo año?`,
        opciones: [
            `12 puntos porcentuales (82% vs 70%)`,
            `5 puntos porcentuales`,
            `20 puntos porcentuales`,
            `Son iguales`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué conclusión sobre el desarrollo de Alpha se puede extraer de los datos?`,
        opciones: [
            `Es una economía estancada sin cambios.`,
            `Está en proceso de industrialización y modernización económica.`,
            `Depende exclusivamente del sector servicios.`,
            `Ha desindustrializado su economía.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué sector concentraba la mayor parte de la población activa de Beta en 2000?`,
        opciones: [
            `Sector primario (10%)`,
            `Sector secundario (25%)`,
            `Sector terciario (65%)`,
            `Distribución equitativa`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué información adicional aporta el fragmento explicativo que no está en la tabla?`,
        opciones: [
            `Los porcentajes exactos de cada país.`,
            `La definición de población activa y la interpretación de los datos como indicadores de desarrollo.`,
            `Los nombres de los países.`,
            `Los años de medición.`
        ],
        correcta: 1
    }
];

const questionsText2 = [
    {
        pregunta: `Según la tabla, ¿cuál era aproximadamente la población en el año 2000?`,
        opciones: [
            `200 millones`,
            `250 millones`,
            `300 millones`,
            `350 millones`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál era el consumo de agua aproximado en el año 2000?`,
        opciones: [
            `30 mil millones m³`,
            `40 mil millones m³`,
            `50 mil millones m³`,
            `60 mil millones m³`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué proyección de población se espera para 2030?`,
        opciones: [
            `400 millones`,
            `415 millones`,
            `430 millones`,
            `450 millones`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué proyección de consumo de agua se espera para 2030?`,
        opciones: [
            `95 mil millones m³`,
            `105 mil millones m³`,
            `115 mil millones m³`,
            `125 mil millones m³`
        ],
        correcta: 2
    },
    {
        pregunta: `Según el fragmento explicativo, ¿por qué el consumo de agua crece más rápido que la población?`,
        opciones: [
            `Porque hay más personas, pero cada persona consume menos.`,
            `Por el aumento del consumo per cápita debido a urbanización, industria y cambios en hábitos.`,
            `Porque la población está disminuyendo.`,
            `Porque el agua es más abundante.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuánto aumentó aproximadamente el consumo de agua entre 2000 y 2020?`,
        opciones: [
            `De 40 a 60 mil millones (20 de aumento)`,
            `De 40 a 80 mil millones (40 de aumento)`,
            `De 40 a 90 mil millones (50 de aumento)`,
            `De 40 a 100 mil millones (60 de aumento)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuánto aumentó aproximadamente la población entre 2000 y 2020?`,
        opciones: [
            `De 250 a 300 millones (50 de aumento)`,
            `De 250 a 350 millones (100 de aumento)`,
            `De 250 a 370 millones (120 de aumento)`,
            `De 250 a 400 millones (150 de aumento)`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué relación entre las variables se observa en los datos?`,
        opciones: [
            `El consumo crece al mismo ritmo que la población.`,
            `El consumo crece más rápido que la población, indicando aumento del consumo per cápita.`,
            `La población crece más rápido que el consumo.`,
            `No hay relación entre ambas variables.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué consecuencia podría tener la tendencia proyectada según el texto?`,
        opciones: [
            `Aumento de la disponibilidad de agua.`,
            `Episodios de estrés hídrico recurrente en la próxima década.`,
            `Disminución de la población.`,
            `Mayor eficiencia en el uso del agua.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué factores, además del crecimiento poblacional, explican el aumento del consumo de agua?`,
        opciones: [
            `Cambio climático y desertificación.`,
            `Urbanización, desarrollo industrial y cambios en hábitos de consumo.`,
            `Disminución de lluvias.`,
            `Aumento de la superficie terrestre.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué proporción guarda el aumento del consumo con respecto al aumento poblacional en el período 2000-2020?`,
        opciones: [
            `El consumo aumentó menos que la población.`,
            `El consumo aumentó aproximadamente el doble que la población (40 vs 120 millones de aumento).`,
            `El consumo aumentó igual que la población.`,
            `No hay relación entre ambos aumentos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué recomiendan los expertos según el texto?`,
        opciones: [
            `Seguir con las mismas tendencias.`,
            `Implementar medidas de eficiencia hídrica y control del consumo.`,
            `Aumentar la población.`,
            `Reducir la industria.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué factor externo podría agravar el problema del agua según el texto?`,
        opciones: [
            `El crecimiento de la industria.`,
            `El cambio climático.`,
            `La urbanización.`,
            `Los hábitos de consumo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Para cuándo se proyecta que el consumo de agua alcance los 95 mil millones m³?`,
        opciones: [
            `2020`,
            `2025`,
            `2030`,
            `2015`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tendencia muestra la población en todo el período representado?`,
        opciones: [
            `Crecimiento constante y lineal.`,
            `Estancamiento.`,
            `Disminución progresiva.`,
            `Crecimiento exponencial.`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuántas veces mayor será el consumo de agua en 2030 comparado con el año 2000?`,
        opciones: [
            `El doble (2 veces)`,
            `Casi el triple (2.9 veces: de 40 a 115)`,
            `Cuatro veces`,
            `Cinco veces`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas veces mayor será la población en 2030 comparada con el año 2000?`,
        opciones: [
            `1.5 veces (de 250 a 430 millones)`,
            `2 veces`,
            `2.5 veces`,
            `3 veces`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué información adicional aporta el fragmento explicativo que no está en la tabla?`,
        opciones: [
            `Los valores numéricos exactos.`,
            `La interpretación de las causas del fenómeno y las posibles consecuencias futuras.`,
            `Las fechas de medición.`,
            `Los nombres de las regiones.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué año tiene el mayor crecimiento porcentual en consumo respecto al período anterior?`,
        opciones: [
            `2005 (aumento de 10 mil millones)`,
            `2010 (aumento de 10 mil millones)`,
            `2025 (aumento de 15 mil millones)`,
            `2030 (aumento de 20 mil millones)`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Qué se puede inferir sobre la sostenibilidad del consumo si la tendencia continúa después de 2030?`,
        opciones: [
            `Es sostenible porque el agua es renovable.`,
            `Es insostenible y probablemente se requieran medidas drásticas de racionamiento.`,
            `No hay suficiente información para inferir.`,
            `El consumo se estabilizará naturalmente.`
        ],
        correcta: 1
    }
];

const questionsText3 = [
    {
        pregunta: `Según la tabla de tiempo de uso, ¿cuántas horas diarias de smartphone usan los jóvenes de 16-18 años?`,
        opciones: [
            `3.5 horas`,
            `5.0 horas`,
            `6.0 horas`,
            `4.0 horas`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué dispositivo muestra una disminución constante de uso a medida que aumenta la edad?`,
        opciones: [
            `Smartphone`,
            `Computadora`,
            `Tablet`,
            `Videojuegos`
        ],
        correcta: 2
    },
    {
        pregunta: `Según la tabla de motivos de uso, ¿para qué se utiliza principalmente la computadora?`,
        opciones: [
            `Redes sociales (45%)`,
            `Estudios/trabajo (50%)`,
            `Entretenimiento (35%)`,
            `Juegos (80%)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del uso del smartphone se destina a redes sociales?`,
        opciones: [
            `25%`,
            `35%`,
            `45%`,
            `55%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿En qué grupo de edad el tiempo dedicado a videojuegos es mayor?`,
        opciones: [
            `10-12 años (2.5 horas)`,
            `13-15 años (2.0 horas)`,
            `16-18 años (1.5 horas)`,
            `Es igual en todos los grupos`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué dispositivo se utiliza casi exclusivamente para juegos (80%)?`,
        opciones: [
            `Smartphone`,
            `Computadora`,
            `Tablet`,
            `Consola`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuántas horas diarias de televisión ven los adolescentes de 16-18 años?`,
        opciones: [
            `1.5 horas`,
            `1.0 horas`,
            `0.5 horas`,
            `2.0 horas`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué tendencia se observa en el uso de computadora a medida que aumenta la edad?`,
        opciones: [
            `Disminuye constantemente.`,
            `Aumenta progresivamente (de 1.0 a 3.0 horas diarias).`,
            `Se mantiene estable.`,
            `Desaparece en el grupo de mayor edad.`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el fragmento explicativo, ¿por qué disminuye el uso de tabletas con la edad?`,
        opciones: [
            `Porque son más caras.`,
            `Porque pierde relevancia cuando los jóvenes acceden a smartphones y computadoras más potentes.`,
            `Porque se rompen fácilmente.`,
            `Porque las escuelas las prohíben.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del uso de la televisión corresponde a entretenimiento?`,
        opciones: [
            `80%`,
            `90%`,
            `95%`,
            `100%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿En qué grupo de edad el smartphone alcanza su máximo uso diario?`,
        opciones: [
            `10-12 años (3.5 horas)`,
            `13-15 años (5.0 horas)`,
            `16-18 años (6.0 horas)`,
            `Todos por igual`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué porcentaje del uso de la computadora se destina a estudios/trabajo?`,
        opciones: [
            `25%`,
            `35%`,
            `50%`,
            `60%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué actividad concentra el 25% del uso del smartphone según la tabla?`,
        opciones: [
            `Redes sociales`,
            `Comunicación`,
            `Entretenimiento`,
            `Estudios`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué conclusión sobre el rol de la computadora se puede extraer de los datos?`,
        opciones: [
            `Es principalmente un dispositivo de ocio.`,
            `Mantiene un perfil académico y productivo.`,
            `Se usa exclusivamente para redes sociales.`,
            `Su uso es irrelevante para los jóvenes.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del uso de tabletas se destina a entretenimiento?`,
        opciones: [
            `20%`,
            `25%`,
            `35%`,
            `45%`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Qué dispositivo presenta el uso más diversificado (menor concentración en una sola actividad)?`,
        opciones: [
            `Smartphone (45% máximo en redes, repartido el resto)`,
            `Consola (80% en juegos)`,
            `Televisión (95% en entretenimiento)`,
            `Computadora (50% en estudios)`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuántas horas diarias de uso de smartphone tienen los jóvenes de 13-15 años?`,
        opciones: [
            `3.5 horas`,
            `5.0 horas`,
            `6.0 horas`,
            `4.5 horas`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentaje del uso de consolas se destina a actividades NO relacionadas con juegos?`,
        opciones: [
            `20% (5+5+5+5)`,
            `15%`,
            `10%`,
            `5%`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Qué relación existe entre la edad y el tiempo dedicado a televisión?`,
        opciones: [
            `Aumenta con la edad.`,
            `Disminuye consistentemente con la edad.`,
            `Se mantiene estable.`,
            `Aumenta hasta los 15 años y luego disminuye.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué desafío plantean los datos para las instituciones educativas según el texto?`,
        opciones: [
            `Prohibir el uso de todos los dispositivos.`,
            `Integrar efectivamente la tecnología en los procesos de aprendizaje, dado que el smartphone está orientado al ocio.`,
            `Comprar más computadoras para los estudiantes.`,
            `Eliminar las tareas escolares.`
        ],
        correcta: 1
    }
];
