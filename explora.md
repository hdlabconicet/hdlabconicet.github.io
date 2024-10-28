---
layout: page
title: Explora
permalink: /explora/
---

# Explora

La metodología del análisis textual digital presupone que los textos adquieren significado no de forma aislada, sino como un sistema, un gran corpus. En los grandes corpus textuales digitales pueden aparecen una y otra vez elementos que la lectura humana pasaría por alto al concentrarse únicamente en el detalle y lo lineal. El macroanálisis, la lectura maquínica o lectura distante, en palabras de Mathew Jockers, Stephen Ramsay o Franco Moretti, hace intervenir al elemento computacional y algorítmico y pone en juego métodos cuantitativos que no descartan los métodos cualitativos, pero donde la cantidad siempre precede a la calidad: primero las computadoras procesan datos y luego (idealmente) los humanos los leemos y entendemos en tanto texto.
Ofrecemos, a continuación, algunas experiencias de análisis textual en textos de nuestra Biblioteca Digital: La [_Relación de las cosas sucedidas en el Río de la Plata_](http://hdlabconicet.github.io/Relacion-de-las-cosas-sucedidas/) de Pero Hernández, la [_Relación de un viaje al Río de la Plata_](https://hdlab.space/Relacion-de-un-viaje/) de Acarete du Biscay y [_La Argentina Manuscrita_](https://hdlab.space/La-Argentina-Manuscrita/) de Ruy Díaz de Guzmán.


## Etiquetado morfosintáctico
El etiquetado morfosintáctico es un procedimiento de anotación automática que asigna una categoría gramatical (o parte del discurso, part-of-speech) a cada token de un texto. Esta técnica de permite visualizar dependencias sintácticas o investigar la correlación entre una determinada clase de palabras y otras características discursivas como polaridad de sentimientos o calidad de escritura.

![dependencias acarete](/_img/dependencias-dubiscay.png)

## Análisis de coocurrencias
Las categorías gramaticales pueden utilizarse para el análisis de coocurrencias y así lograr una aproximación rápida del contenido de un corpus textual. El análisis de coocurrencias mide la aparición de dos o más tokens dentro de un mismo contexto (oración, párrafo, etc.). El cálculo de coocurrencias de sustantivos en la _Relación de un viaje al Río de la Plata_, ilustrado en el siguiente grafo, por ejemplo, permite comprender fácilmente la relevancia de la dimensión comercial y de la descripción del territorio en el texto de Acarete du Biscay a través de la alta frecuencia de los pares "barco-mercadería", "mina-plata", "corona-libra", en un caso, y "legua-río", "ciudad-río", "montaña-plata", en el otro.

![grafo cooc acarete](/_img/cooc_sust_sust_dubiscay.png)


## Etiquetado semántico
La anotación semántica normalmente busca distinguir las categorías de persona, lugar y evento. Pero también puede servirse de una taxonomía para identificar clases más específicas como [jerarquías profesionales](https://github.com/hdcaicyt/Relacion-de-las-cosas-sucedidas/blob/master/assets/taxonomia-personajes-pero-hernandez.pdf), divisiones administrativas o tipos de accidentes geográficos. 

![bar plot facciones](/_img/conteo_personajes_categ.png)

Este enriquecimiento semántico permite, por ejemplo, contabilizar la cantidad de personajes según origen, facción o cargo o trazar los cruces entre estas categorías a lo largo de la trama textual, como en el siguiente [diagrama de narrativa](http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/) de [_Relación de las cosas sucedidas en el Río de la Plata_](http://hdlab.space/Relacion-de-las-cosas-sucedidas/):

<a href="http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/" target="_blank"><img src="http://hdlab.space/Relacion-de-las-cosas-sucedidas/assets/img/narrative-chart.png" alt="narrative chart"></a>


## Topic modeling
El topic modeling es un método de organización de grandes corpus basado en aprendizaje automático. Esta técnica permite detectar los tópicos presentes en una colección textual, los documentos que responden a cada tópico y las palabras que lo representan sin necesidad de datos etiquetados.

![topics pelagios](/_img/topic_texts_pelagios.png)

El siguiente gráfico muestra las diez palabras más representativas de cada tópico para una experiencia de modelización de tópicos para _Relación de las cosas sucedidas_, _Relación de un viaje al Río de la Plata_ y _La Argentina Manuscrita_. El tópico 2 presenta palabras muy representativas de la _Relación de las cosas sucedidas_ (el texto da cuenta del enfrentamiento entre Domingo de Irala y el Gobernador, Álvar Núñez) y el tópico 1 muestra palabras como “capitán” y “pedro”, muy caractrísticas de _La Argentina Manuscrita_ (el texto relata la fundación de Asunción realizada por uno de los capitanes de Pedro de Mendoza). Es importante señalar que encontramos palabras repetidas entre tópicos (“río”, “indios”, “plata”), lo cual es lógico si tenemos en cuenta que los textos seleccionados tocan temas en común ya que todos tratan sobre la colonización de zona del Río de la Plata a fines del siglo XVI - principios del siglo XVII.

![topics pelagios](/_img/topic_words_pelagios.png)

[pelagios-site]: http://commons.pelagios.org/2017/08/pelagios-commons-al-sur-extending-pelagios-to-the-south-of-the-american-continent-2/
[pero-site]: http://hdlab.space/Relacion-de-las-cosas-sucedidas
[acarete-site]: http://hdlab.space/Relacion-de-un-viaje
[ruy-diaz-site]: http://hdlab.space/La-Argentina-Manuscrita/
