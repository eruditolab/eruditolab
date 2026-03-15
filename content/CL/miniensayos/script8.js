const text1 = `
Científicos han descubierto un planeta gigante, 13 veces la masa de la Tierra. Este orbita alrededor de una estrella ultrafría llamada LHS 3154, nueve veces menos masiva que nuestro Sol. Este hallazgo desafía las teorías actuales sobre la formación de planetas y sistemas solares, ya que la masa del planeta en relación con su estrella es más de 100 veces mayor que la de la Tierra con respecto al Sol.
El artículo, publicado en Science, destaca la rareza de este objeto y la emoción del descubrimiento. La investigadora, Megan Delamer, de Penn State, indica que las teorías actuales sobre la formación estelar y planetaria enfrentan dificultades para explicar este fenómeno único.
Según las teorías existentes, las estrellas se forman a partir de nubes de polvo y gas, y los planetas se originan en discos no absorbidos y que orbitan la estrella. Sin embargo, LHS 3154 no tiene la masa suficiente para dar origen a un planeta tan grande, lo que desafía las nociones establecidas.
El descubrimiento se produjo mientras el equipo buscaba planetas con agua líquida en la superficie, en busca de posibles mundos habitables. Las estrellas ultrafrías suelen facilitar la detección de tales planetas. El inusual hallazgo obliga ahora a los científicos a reconsiderar las proporciones de polvo a masa y polvo a gas en torno a las estrellas en desarrollo, lo que desafía las teorías actuales sobre la formación planetaria.
Este tipo de descubrimientos son fundamentales para la astronomía porque nos recuerdan que el universo es mucho más diverso y complejo de lo que imaginamos. Cada vez que creemos tener un modelo consolidado sobre cómo funcionan los sistemas solares, aparece un hallazgo como este que nos obliga a replantearlo todo. La investigación continúa y se espera que nuevos estudios con telescopios más potentes puedan arrojar luz sobre cómo se formó este extraño sistema planetario.
<i>Adaptado de "Planeta gigante pone en tela de juicio lo que sabemos del sistema solar" (Science & NASA Exoplanet Exploration, 2023)</i>`;

const text2 = `
En Alemania, un equipo de científicos ha logrado descifrar cerca de 2,000 tablillas cuneiformes antiguas utilizando una innovadora combinación de modelización en 3D e inteligencia artificial (IA). Estas tablillas, que datan de hace 5,000 años y tienen inscripciones cuneiformes, son valiosas para los arqueólogos.
Los investigadores de las universidades Martin Luther, Johannes Gutenberg y la Universidad de Ciencias Aplicadas de Mainz implementaron un sistema ingenioso que combina la modelización en 3D con el reconocimiento óptico de caracteres (OCR) mediante IA.
Las tablillas cuneiformes, provenientes de Mesopotamia, representan los primeros textos escritos hace milenios. La escritura cuneiforme fue utilizada por civilizaciones mesopotámicas, pero se convirtió en un lenguaje perdido hasta su redescubrimiento en el siglo XIX. El proceso de descifrado solía ser lento, pero la combinación de modelización en 3D y reconocimiento óptico de caracteres ha acelerado el proceso.
Utilizando 2,000 tablillas modelizadas en 3D, los investigadores aplicaron técnicas de OCR para mejorar las imágenes escaneadas y facilitar la lectura. Mediante aprendizaje profundo, la IA permitió descifrar los caracteres cuneiformes, abarcando los 12 idiomas antiguos inscritos en las tablillas del Creciente Fértil.
Este avance ayuda a historiadores y arqueólogos a descifrar los antiguos escritos. Ahora se buscará expandir la aplicación de la IA para leer y traducir textos en otros idiomas, marcando un hito importante en la investigación y descifrado de documentos históricos.
Lo más fascinante de este desarrollo tecnológico es que no solo acelera el trabajo de los especialistas, sino que también democratiza el acceso a estos conocimientos. Con las herramientas adecuadas, cualquier investigador del mundo podría en el futuro acceder a estos textos antiguos sin necesidad de años de entrenamiento especializado en lenguas muertas. La tecnología se convierte así en un puente entre nuestro presente y civilizaciones que existieron hace miles de años.
<i>Adaptado de "La inteligencia artificial descifra escritos de la antigua Mesopotamia" (Universidades Martin Luther, Johannes Gutenberg & Mainz, 2023)</i>`;

const text3 = `
Un equipo de investigadores argentinos desarrolló un revolucionario kit de diagnóstico del dengue que ofrece resultados en solo 10 minutos. El método utiliza tiras reactivas capaces de detectar la presencia de la inmunoglobulina M (IgM) específica del virus a partir de una pequeña muestra de sangre. Con una sensibilidad del 95% y una especificidad del 90%, este avance permitirá una detección temprana del dengue a bajo costo.
El Ministerio de Salud de Argentina respalda la eficacia de estas tiras reactivas. El test fue desarrollado por un equipo interdisciplinario de la Universidad Nacional de San Martín (UNSAM) y el CONICET. El kit ha recibido la aprobación de la ANMAT para su distribución y comercialización a través de la empresa Chemtest.
Este logro, fruto de cinco años de trabajo y colaboración entre diversos especialistas, representa un avance crucial en la lucha contra el dengue en América Latina. Además de agilizar el diagnóstico, el método brinda la oportunidad de identificar áreas propensas a la presencia de mosquitos portadores del virus. Todo lo cual permite una rápida implementación de medidas preventivas y de control de brotes.
La importancia de este desarrollo no puede subestimarse en una región donde el dengue es endémico y los brotes epidémicos saturan los sistemas de salud. Contar con una prueba rápida, económica y confiable permite a los médicos tomar decisiones inmediatas sobre el tratamiento y evita la hospitalización innecesaria de pacientes que no tienen la enfermedad. Además, al ser una prueba que no requiere equipamiento complejo, puede aplicarse en zonas rurales o apartadas donde los laboratorios clínicos son escasos.
Los investigadores continúan trabajando para mejorar aún más la prueba y adaptarla a otras enfermedades virales que afectan a la región. El éxito de este desarrollo demuestra que la ciencia y la tecnología locales pueden ofrecer soluciones concretas a los problemas de salud pública que enfrentan nuestras comunidades.
<i>Adaptado de "Un test que diagnostica el dengue en 10 minutos" (CONICET & UNSAM, 2024)</i>`;

const textMap = {
    1: { title: "Planeta gigante pone en tela de juicio lo que sabemos del sistema solar", content: text1 },
    2: { title: "La inteligencia artificial descifra escritos de la antigua Mesopotamia", content: text2 },
    3: { title: "Un test que diagnostica el dengue en 10 minutos", content: text3 }
};

const questionsText1 = [
    {
        pregunta: `Según el texto, ¿cuál es la idea principal del descubrimiento mencionado?`,
        opciones: [
            `Se ha descubierto una nueva estrella más grande que el Sol.`,
            `Se ha encontrado un planeta gigante que desafía las teorías actuales sobre formación planetaria.`,
            `Se ha confirmado que todas las estrellas tienen planetas similares a la Tierra.`,
            `Se ha demostrado que los planetas gigantes son comunes alrededor de estrellas ultrafrías.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué característica del planeta descubierto lo hace excepcional según el texto?`,
        opciones: [
            `Tiene agua líquida en su superficie.`,
            `Tiene 13 veces la masa de la Tierra y orbita una estrella nueve veces menos masiva que el Sol.`,
            `Es el planeta más grande jamás descubierto.`,
            `Se encuentra en nuestro sistema solar.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación de masa se establece entre el planeta descubierto y su estrella?`,
        opciones: [
            `Es similar a la relación entre la Tierra y el Sol.`,
            `Es más de 100 veces mayor que la relación entre la Tierra y el Sol.`,
            `Es menor que la relación entre la Tierra y el Sol.`,
            `No se menciona ninguna relación de masa.`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el texto, ¿qué dificultad enfrentan las teorías actuales?`,
        opciones: [
            `No pueden explicar cómo se forman las estrellas ultrafrías.`,
            `Tienen dificultades para explicar cómo una estrella tan pequeña pudo dar origen a un planeta tan grande.`,
            `No pueden detectar planetas alrededor de estrellas ultrafrías.`,
            `No explican por qué hay planetas con agua líquida.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué explica el texto sobre la formación de estrellas y planetas según las teorías existentes?`,
        opciones: [
            `Las estrellas se forman a partir de otros planetas.`,
            `Las estrellas se forman a partir de nubes de polvo y gas, y los planetas se originan en discos que orbitan la estrella.`,
            `Los planetas se forman primero y luego atraen a las estrellas.`,
            `No hay teorías establecidas sobre este proceso.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Con qué propósito inicial buscaban los científicos este tipo de planetas?`,
        opciones: [
            `Estudiar la composición de estrellas ultrafrías.`,
            `Buscar planetas con agua líquida en la superficie, posibles mundos habitables.`,
            `Confirmar las teorías existentes.`,
            `Encontrar el planeta más grande del universo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué característica de las estrellas ultrafrías facilita la detección de planetas?`,
        opciones: [
            `Son más brillantes que otras estrellas.`,
            `Suelen facilitar la detección de planetas con agua líquida.`,
            `Están más cerca de la Tierra.`,
            `Emiten radiación que revela la presencia de planetas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué consecuencia tiene este hallazgo para las teorías actuales?`,
        opciones: [
            `Las confirma y fortalece.`,
            `Obliga a reconsiderar las proporciones de polvo a masa y polvo a gas en torno a estrellas en desarrollo.`,
            `Demuestra que las teorías eran correctas desde el principio.`,
            `No tiene ninguna consecuencia.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de lenguaje predomina en el texto?`,
        opciones: [
            `Lenguaje técnico y especializado para astrónomos.`,
            `Lenguaje claro y accesible, propio de un artículo de divulgación científica.`,
            `Lenguaje literario con metáforas poéticas.`,
            `Lenguaje jurídico y normativo.`
        ],
        correcta: 1
    },
    {
        pregunta: `Según el último párrafo, ¿por qué son importantes este tipo de descubrimientos?`,
        opciones: [
            `Porque confirman todo lo que ya sabíamos.`,
            `Porque demuestran que el universo es más diverso y complejo de lo que imaginamos.`,
            `Porque permiten viajar a otros planetas.`,
            `Porque muestran que no hay nada nuevo por descubrir.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la mención a la revista Science en el texto?`,
        opciones: [
            `Indicar el precio de la revista.`,
            `Aportar credibilidad al señalar que el descubrimiento fue publicado en una revista científica reconocida.`,
            `Comparar diferentes revistas científicas.`,
            `Mostrar que el descubrimiento no tiene respaldo científico.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre la relación entre la masa de una estrella y los planetas que puede formar según las teorías tradicionales?`,
        opciones: [
            `A mayor masa de la estrella, más pequeños deben ser los planetas.`,
            `Estrellas de baja masa no deberían poder formar planetas de gran tamaño.`,
            `La masa de la estrella es irrelevante para la formación de planetas.`,
            `Las estrellas pequeñas siempre forman planetas gigantes.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué concepto científico se explica implícitamente en el tercer párrafo?`,
        opciones: [
            `La teoría de la relatividad.`,
            `La teoría de la formación planetaria a partir de discos protoplanetarios.`,
            `La teoría del Big Bang.`,
            `La teoría de la evolución estelar.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación causal se rompe con este descubrimiento?`,
        opciones: [
            `La relación entre edad de la estrella y tamaño del planeta.`,
            `La relación esperada entre masa de la estrella y masa del planeta.`,
            `La relación entre distancia y temperatura.`,
            `La relación entre brillo y tamaño.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué recurso divulgativo utiliza el autor al mencionar "13 veces la masa de la Tierra" y "nueve veces menos masiva que nuestro Sol"?`,
        opciones: [
            `Definiciones técnicas complejas.`,
            `Comparaciones con objetos conocidos (Tierra y Sol) para facilitar la comprensión.`,
            `Opiniones personales del autor.`,
            `Narraciones históricas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se espera según el texto para futuras investigaciones?`,
        opciones: [
            `Que el descubrimiento sea olvidado.`,
            `Que nuevos estudios con telescopios más potentes puedan explicar cómo se formó este sistema planetario.`,
            `Que se deje de investigar este tema.`,
            `Que se confirme que las teorías actuales son correctas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tono predomina en la expresión "el universo es mucho más diverso y complejo de lo que imaginamos"?`,
        opciones: [
            `Irónico y burlón.`,
            `Reflexivo y asombrado.`,
            `Indiferente y neutral.`,
            `Negativo y pesimista.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué implicación tiene que el planeta sea 13 veces la masa de la Tierra?`,
        opciones: [
            `Es un planeta de tamaño similar a la Tierra.`,
            `Es un planeta de gran tamaño, comparable a Neptuno o Urano.`,
            `Es un planeta muy pequeño.`,
            `No tiene implicaciones significativas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué papel juega la investigadora Megan Delamer en el texto?`,
        opciones: [
            `Es la autora del artículo de divulgación.`,
            `Es una investigadora de Penn State que comenta la dificultad de explicar el fenómeno con teorías actuales.`,
            `Es la descubridora de la estrella LHS 3154.`,
            `Es una periodista que escribe sobre el tema.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué idea del texto permite inferir que la ciencia es un proceso en constante revisión?`,
        opciones: [
            `Que los descubrimientos confirman lo que ya sabemos.`,
            `Que un hallazgo inesperado puede obligar a replantear teorías establecidas.`,
            `Que las teorías científicas nunca cambian.`,
            `Que solo los descubrimientos esperados son válidos.`
        ],
        correcta: 1
    }
];

const questionsText2 = [
    {
        pregunta: `Según el texto, ¿cuál es el logro principal del equipo de científicos alemanes?`,
        opciones: [
            `Descubrieron nuevas tablillas cuneiformes en Mesopotamia.`,
            `Descifraron cerca de 2,000 tablillas cuneiformes usando modelización 3D e inteligencia artificial.`,
            `Aprendieron a leer escritura cuneiforme manualmente.`,
            `Tradujeron un solo idioma antiguo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué antigüedad tienen las tablillas cuneiformes mencionadas?`,
        opciones: [
            `Aproximadamente 1,000 años.`,
            `Aproximadamente 5,000 años.`,
            `Aproximadamente 10,000 años.`,
            `Aproximadamente 500 años.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué combinación tecnológica utilizaron los investigadores?`,
        opciones: [
            `Fotografía tradicional y traducción manual.`,
            `Modelización en 3D y reconocimiento óptico de caracteres (OCR) mediante IA.`,
            `Escáner 2D y software de edición básico.`,
            `Rayos X y carbono 14.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué universidades participaron en esta investigación?`,
        opciones: [
            `Oxford, Cambridge y Harvard.`,
            `Martin Luther, Johannes Gutenberg y Universidad de Ciencias Aplicadas de Mainz.`,
            `La Sorbona, Bolonia y Salamanca.`,
            `Tokio, Pekín y Seúl.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Por qué la escritura cuneiforme representaba un desafío para los investigadores?`,
        opciones: [
            `Siempre fue fácil de leer.`,
            `Se convirtió en un lenguaje perdido hasta su redescubrimiento en el siglo XIX y su descifrado era lento.`,
            `Nunca se perdió, siempre se mantuvo viva.`,
            `Es un lenguaje moderno.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántas tablillas modelizadas en 3D utilizaron los investigadores?`,
        opciones: [
            `200 tablillas.`,
            `2,000 tablillas.`,
            `20,000 tablillas.`,
            `500 tablillas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuántos idiomas antiguos abarcaban las inscripciones de las tablillas?`,
        opciones: [
            `3 idiomas.`,
            `12 idiomas.`,
            `25 idiomas.`,
            `Solo un idioma.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué beneficio principal aporta este avance a historiadores y arqueólogos?`,
        opciones: [
            `Les permite jubilarse anticipadamente.`,
            `Ayuda a descifrar los antiguos escritos más rápidamente.`,
            `Reemplaza completamente su trabajo.`,
            `Dificulta la investigación.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué planes futuros menciona el texto para esta tecnología?`,
        opciones: [
            `Dejar de usarla por completo.`,
            `Expandir su aplicación para leer y traducir textos en otros idiomas.`,
            `Vender las tablillas descifradas.`,
            `Olvidar el método desarrollado.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de lenguaje predomina en el texto?`,
        opciones: [
            `Lenguaje técnico exclusivo para arqueólogos.`,
            `Lenguaje claro y accesible, propio de un artículo de divulgación científica.`,
            `Lenguaje literario con abundantes metáforas.`,
            `Lenguaje jurídico y normativo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué concepto tecnológico se explica implícitamente al mencionar "aprendizaje profundo"?`,
        opciones: [
            `Es un tipo de memoria de computadora.`,
            `Es una técnica de inteligencia artificial que permite a las máquinas aprender de los datos.`,
            `Es un programa básico de edición.`,
            `Es un hardware especial.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué función cumple la expresión "Creciente Fértil" en el texto?`,
        opciones: [
            `Describir un tipo de cultivo.`,
            `Ubicar geográficamente la región de donde provienen las tablillas.`,
            `Nombrar a un investigador.`,
            `Indicar el título de un libro.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué ventaja adicional menciona el último párrafo sobre esta tecnología?`,
        opciones: [
            `Es más cara que los métodos tradicionales.`,
            `Democratiza el acceso a estos conocimientos, permitiendo que más investigadores accedan sin años de entrenamiento especializado.`,
            `Es menos precisa que la traducción manual.`,
            `Solo funciona con tablillas intactas.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué analogía utiliza el autor al final del texto?`,
        opciones: [
            `Compara la tecnología con un libro.`,
            `Describe la tecnología como un puente entre nuestro presente y civilizaciones antiguas.`,
            `Compara la tecnología con un edificio.`,
            `Describe la tecnología como un enemigo del conocimiento.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre el proceso tradicional de descifrado de tablillas?`,
        opciones: [
            `Era rápido y sencillo.`,
            `Era lento y requería años de especialización.`,
            `No existía antes de esta tecnología.`,
            `Era igual de eficiente que el método actual.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación establece el texto entre tecnología y acceso al conocimiento?`,
        opciones: [
            `La tecnología dificulta el acceso al conocimiento.`,
            `La tecnología puede democratizar y facilitar el acceso a conocimientos que antes eran exclusivos de especialistas.`,
            `No hay relación entre ambos conceptos.`,
            `La tecnología solo sirve para entretenimiento.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué importancia histórica tienen las tablillas cuneiformes según el texto?`,
        opciones: [
            `Son objetos decorativos sin valor histórico.`,
            `Representan los primeros textos escritos hace milenios, valiosos para arqueólogos.`,
            `Son recientes descubrimientos del siglo XXI.`,
            `Son copias modernas de textos antiguos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué papel juega la modelización en 3D en el proceso?`,
        opciones: [
            `Es un paso decorativo sin utilidad.`,
            `Permite mejorar las imágenes escaneadas y facilita la lectura de los caracteres.`,
            `Reemplaza completamente a las tablillas originales.`,
            `Es más lento que la fotografía tradicional.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué idea del texto sugiere que la tecnología puede ser una herramienta democratizadora?`,
        opciones: [
            `Que solo los expertos pueden usar la tecnología.`,
            `Que cualquier investigador podría acceder a estos textos sin años de entrenamiento especializado en lenguas muertas.`,
            `Que la tecnología es demasiado cara para la mayoría.`,
            `Que los resultados son secretos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué valoración general hace el autor del avance tecnológico presentado?`,
        opciones: [
            `Es un avance menor sin importancia.`,
            `Es un hito importante en la investigación y descifrado de documentos históricos.`,
            `Es un fracaso tecnológico.`,
            `Es irrelevante para la historia.`
        ],
        correcta: 1
    }
];

const questionsText3 = [
    {
        pregunta: `Según el texto, ¿cuál es el logro principal de los investigadores argentinos?`,
        opciones: [
            `Descubrieron una vacuna contra el dengue.`,
            `Desarrollaron un kit de diagnóstico del dengue que ofrece resultados en 10 minutos.`,
            `Eliminaron el dengue de Argentina.`,
            `Crearon un tratamiento para curar el dengue.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de tecnología utiliza el kit de diagnóstico?`,
        opciones: [
            `Análisis de sangre por microscopía.`,
            `Tiras reactivas que detectan inmunoglobulina M específica del virus.`,
            `Rayos X.`,
            `Resonancia magnética.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué porcentajes de sensibilidad y especificidad tiene la prueba?`,
        opciones: [
            `50% sensibilidad y 50% especificidad.`,
            `95% sensibilidad y 90% especificidad.`,
            `99% sensibilidad y 99% especificidad.`,
            `70% sensibilidad y 80% especificidad.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué instituciones participaron en el desarrollo de este test?`,
        opciones: [
            `Universidad de Buenos Aires y Ministerio de Educación.`,
            `Universidad Nacional de San Martín (UNSAM) y CONICET.`,
            `Harvard University y MIT.`,
            `Universidad de Chile y Pontificia Universidad Católica.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué organismo aprobó la distribución y comercialización del kit?`,
        opciones: [
            `La OMS (Organización Mundial de la Salud).`,
            `La ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica).`,
            `La FDA (Food and Drug Administration).`,
            `El Ministerio de Educación.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuánto tiempo tomó desarrollar este kit de diagnóstico?`,
        opciones: [
            `Un año.`,
            `Cinco años de trabajo y colaboración entre especialistas.`,
            `Diez años.`,
            `Seis meses.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué beneficio adicional menciona el texto además del diagnóstico rápido?`,
        opciones: [
            `Curar la enfermedad inmediatamente.`,
            `Identificar áreas propensas a la presencia de mosquitos portadores del virus.`,
            `Vacunar a la población.`,
            `Eliminar todos los mosquitos.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué permite la identificación temprana de áreas con mosquitos portadores?`,
        opciones: [
            `Nada, es información inútil.`,
            `La rápida implementación de medidas preventivas y control de brotes.`,
            `Aumentar la población de mosquitos.`,
            `Ignorar el problema.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué característica del dengue en América Latina destaca el texto?`,
        opciones: [
            `Es una enfermedad inexistente en la región.`,
            `Es endémico y los brotes epidémicos saturan los sistemas de salud.`,
            `Es fácil de controlar sin diagnóstico.`,
            `No requiere diagnóstico temprano.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué tipo de lenguaje predomina en el texto?`,
        opciones: [
            `Lenguaje técnico exclusivo para epidemiólogos.`,
            `Lenguaje claro y accesible, propio de un artículo de divulgación científica.`,
            `Lenguaje literario con metáforas poéticas.`,
            `Lenguaje jurídico y normativo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué ventaja tiene esta prueba para zonas rurales o apartadas?`,
        opciones: [
            `Requiere equipamiento complejo y costoso.`,
            `No requiere equipamiento complejo y puede aplicarse donde los laboratorios son escasos.`,
            `Solo funciona en grandes ciudades.`,
            `Necesita personal altamente especializado.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué permite la prueba a los médicos según el texto?`,
        opciones: [
            `Esperar semanas por los resultados.`,
            `Tomar decisiones inmediatas sobre el tratamiento y evitar hospitalizaciones innecesarias.`,
            `Diagnosticar cualquier enfermedad.`,
            `Recetar antibióticos indiscriminadamente.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué concepto médico se explica implícitamente al mencionar "inmunoglobulina M (IgM)"?`,
        opciones: [
            `Es un tipo de bacteria.`,
            `Es un anticuerpo que produce el cuerpo en respuesta a una infección reciente.`,
            `Es un virus modificado.`,
            `Es un medicamento.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué planes futuros tienen los investigadores según el texto?`,
        opciones: [
            `Dejar de investigar.`,
            `Mejorar la prueba y adaptarla a otras enfermedades virales de la región.`,
            `Vender la patente a otro país.`,
            `Olvidar el desarrollo.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué valoración hace el autor del desarrollo científico presentado?`,
        opciones: [
            `Es un avance sin importancia.`,
            `Demuestra que la ciencia local puede ofrecer soluciones concretas a problemas de salud pública.`,
            `Es un fracaso de la investigación.`,
            `Es irrelevante para América Latina.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué relación establece el texto entre diagnóstico temprano y control de brotes?`,
        opciones: [
            `El diagnóstico temprano no tiene relación con el control.`,
            `El diagnóstico temprano permite implementar medidas preventivas y controlar los brotes rápidamente.`,
            `El diagnóstico temprano empeora los brotes.`,
            `El control de brotes es independiente del diagnóstico.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué característica económica del kit se destaca en el primer párrafo?`,
        opciones: [
            `Es muy caro y solo accesible para ricos.`,
            `Es de bajo costo.`,
            `No se menciona el costo.`,
            `Es gratuito.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué se puede inferir sobre el impacto de esta prueba en el sistema de salud?`,
        opciones: [
            `Aumentará la saturación del sistema.`,
            `Puede reducir la saturación al evitar hospitalizaciones innecesarias.`,
            `No tendrá ningún impacto.`,
            `Empeorará la situación.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué idea del texto destaca la importancia de la colaboración interdisciplinaria?`,
        opciones: [
            `El desarrollo fue individual.`,
            `El logro fue fruto de cinco años de trabajo y colaboración entre diversos especialistas.`,
            `No hubo colaboración.`,
            `Fue desarrollado por una sola persona.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Qué mensaje transmite el texto sobre la ciencia en América Latina?`,
        opciones: [
            `No hay ciencia en la región.`,
            `La ciencia local puede producir innovaciones de alto impacto para la salud pública.`,
            `La ciencia local depende completamente de otros países.`,
            `No hay científicos capacitados.`
        ],
        correcta: 1
    }
];