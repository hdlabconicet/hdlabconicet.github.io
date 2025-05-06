# Explora

La metodología del análisis textual digital presupone que los textos adquieren significado no de forma aislada, sino como un sistema, un gran corpus. En los grandes corpus textuales digitales pueden aparecen una y otra vez elementos que la lectura humana pasaría por alto al concentrarse únicamente en el detalle y lo lineal. El macroanálisis, la lectura maquínica o lectura distante, en palabras de Mathew Jockers, Stephen Ramsay o Franco Moretti, hace intervenir al elemento computacional y algorítmico y pone en juego métodos cuantitativos que no descartan los métodos cualitativos, pero donde la cantidad siempre precede a la calidad: primero las computadoras procesan datos y luego (idealmente) los humanos los leemos y entendemos en tanto texto.

En esta sección, ofrecemos algunas experiencias de análisis textual en textos de nuestra [Biblioteca Digital]({{site.baseurl}}/biblioteca-digital/): La [_Relación de las cosas sucedidas en el Río de la Plata_][pero-site] de Pero Hernández, la [_Relación de un viaje al Río de la Plata_][acarete-site] de Acarete du Biscay, [_La Argentina Manuscrita_][ruy-diaz-site] de Ruy Díaz de Guzmán y [_Argentina y la conquista del Río de la Plata_][centenera-site] poema histórico de Martín del Barco Centenera y [_Viaje al Río de la Plata_][ulrich-site] de Ulrico Schmidel.

Para una lectura macroanalítica más completa, los invitamos a consultar esta [notebook](https://colab.research.google.com/drive/1l487LB-PUqgs24DFqSTq2tPZ0OrTUbHB?usp=sharing).

## Etiquetado morfosintáctico
El etiquetado morfosintáctico es un procedimiento de anotación automática que asigna una categoría gramatical (o parte del discurso, part-of-speech) a cada token de un texto. Esta técnica de permite visualizar dependencias sintácticas o investigar la correlación entre una determinada clase de palabras y otras características discursivas como polaridad de sentimientos o calidad de escritura.

![dependencias acarete]({{site.baseurl}}/assets/img/explora/dependencias-dubiscay.png)

Las categorías gramaticales identificadas en el etiquetado morfosintático pueden utilizarse para el análisis de coocurrencias y así lograr una aproximación rápida del contenido de un corpus textual. El análisis de coocurrencias mide la aparición de dos o más tokens dentro de un mismo contexto (oración, párrafo, etc.). El cálculo de coocurrencias de sustantivos en la _Relación de un viaje al Río de la Plata_, ilustrado en el siguiente grafo, por ejemplo, permite comprender fácilmente la relevancia de la dimensión comercial y de la descripción del territorio en el texto de Acarete du Biscay a través de la alta frecuencia de los pares "barco-mercadería", "mina-plata", "corona-libra", en un caso, y "legua-río", "ciudad-río", "montaña-plata", en el otro.

![grafo cooc acarete]({{site.baseurl}}/assets/img/explora/cooc_sust_sust_dubiscay.png)


## Etiquetado semántico
La anotación semántica normalmente busca distinguir las categorías de persona, lugar y evento. Pero también puede servirse de una taxonomía para identificar clases más específicas como [jerarquías profesionales](https://github.com/hdcaicyt/Relacion-de-las-cosas-sucedidas/blob/master/assets/taxonomia-personajes-pero-hernandez.pdf), divisiones administrativas o tipos de accidentes geográficos. 

![bar plot facciones]({{site.baseurl}}/assets/img/explora/conteo_personajes_categ.png)

Este enriquecimiento semántico permite, por ejemplo, contabilizar la cantidad de personajes según origen, facción o cargo o trazar los cruces entre estas categorías a lo largo de la trama textual, como en el siguiente [diagrama de narrativa](http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/) de [_Relación de las cosas sucedidas en el Río de la Plata_](http://hdlab.space/Relacion-de-las-cosas-sucedidas/):

<a href="http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/" target="_blank"><img src="http://hdlab.space/Relacion-de-las-cosas-sucedidas/assets/img/narrative-chart.png" alt="narrative chart"></a>


## Topic modeling
El topic modeling es un método de organización de grandes corpus basado en aprendizaje automático. Esta técnica permite detectar los tópicos presentes en una colección textual, los documentos que responden a cada tópico y las palabras que lo representan sin necesidad de datos etiquetados.

![topics pelagios]({{site.baseurl}}/assets/img/explora/topic_texts_pelagios.png)

El siguiente gráfico muestra las diez palabras más representativas de cada tópico para una experiencia de modelización de tópicos para _Relación de las cosas sucedidas_, _Relación de un viaje al Río de la Plata_ y _La Argentina Manuscrita_. El tópico 2 presenta palabras muy representativas de la _Relación de las cosas sucedidas_ (el texto da cuenta del enfrentamiento entre Domingo de Irala y el Gobernador, Álvar Núñez) y el tópico 1 muestra palabras como “capitán” y “pedro”, muy caractrísticas de _La Argentina Manuscrita_ (el texto relata la fundación de Asunción realizada por uno de los capitanes de Pedro de Mendoza). Es importante señalar que encontramos palabras repetidas entre tópicos (“río”, “indios”, “plata”), lo cual es lógico si tenemos en cuenta que los textos seleccionados tocan temas en común ya que todos tratan sobre la colonización de zona del Río de la Plata a fines del siglo XVI - principios del siglo XVII.

![topics pelagios]({{site.baseurl}}/assets/img/explora/topic_words_pelagios.png)


## Análisis estilométrico con Stylo

La estilometría es el estudio cuantitativo del estilo lingüístico de textos escritos. Este campo tiene diversos usos, como la determinación de la autoría de una obra y la autenticidad de textos o la clasificación de documentos, entre otros. El programa _Stylo_, desarrollado por Maciej Eder, Jan Rybicki, Mike Kestemont y Steffen Pielstroem permite realizar análisis estilométrico de manera sencilla y generar representaciones gráficas que facilitan la tarea de evaluar y visualizar similitudes o diferencias estilísticas.

Para una experiencia de análisis con Stylo, sumamos al corpus de nuestra Biblioteca Digital las siguientes obras:

* _Descripción e Historia del Paraguay y del Río de la Plata_, Félix de Azara
* _Días de ocio_, William H. Hudson
* _Viaje a la Patagonia Austral_, Francisco Pascasio Moreno
* _Primer viaje alrededor del mundo_, Antonio Pigafetta
* _Diario de un viaje a la costa de Patagonia, para reconocer los puntos en donde establecer poblaciones_, Antonio de Viedma
* _Relación de la entrada de los Chiriguanos_, Ruy Díaz de Guzmán.

En el siguiente dendrograma podemos observar los textos agrupados según su grado de cercanía estilística:

![macroanalisis1]({{site.baseurl}}/assets/img/explora/macroanalisis-ngram-eder-delta.png)

Los textos que se grafican en una misma rama poseen mayores similitudes estilísticas, mientras que las distancias mayores entre nodos representan diferencias estilísticas más marcadas. Así, en este análisis se pueden observar dos grandes ramas, en la superior se agrupan la mayoría de los textos, mientras que en la inferior, y más pequeña, se presenta un nodo que reúne dos obras estilísticamente similares por pertener a un mismo autor: _La Argentina Manuscrita_ de Rui Díaz de Guzmán y un texto identificado como _Chiriguanos_, que corresponde a la “Relación de la entrada de los Chiriguanos” escrita por el mismo autor entre 1617 y 1618.

Es posible complementar y confirmar este análisis sometiendo el corpus a otros algoritmos de análisis estilométrico. Los árboles de consenso, por ejemplo, son producidos por algoritmos iterativos que aseguran resultados más robustos.

![macroanalisis2]({{site.baseurl}}/assets/img/explora/macroanalisis-consensus-tree.png)

El árbol de consenso de nuestro corpus confirma la autoría del texto _Chiriguanos_ al agruparlo junto a la otra obra de Díaz de Guzmán analizada. Este modelo es una herramienta poderosa para la estilometría que facilita la comparación y verificación de autorías.


[pero-site]: https://hdlab.space/Relacion-de-las-cosas-sucedidas
[acarete-site]: https://hdlab.space/Relacion-de-un-viaje
[ruy-diaz-site]: https://hdlab.space/La-Argentina-Manuscrita/
[centenera-site]: https://hdlab.space/argentina-y-conquista-del-rio-de-la-plata/
[ulrich-site]: https://hdlab.space/viaje-al-rio-de-la-plata/