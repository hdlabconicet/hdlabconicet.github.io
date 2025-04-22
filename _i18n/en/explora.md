# Explora

The methodology used for digital textual analysis assumes that texts acquire meaning not in isolation, but as part of a system, in other terms, a large corpus. In large digital textual corpora, elements can appear repeatedly but human reading might overlook because of focusing solely on detail and linearity. Macroanalysis, machine reading, or distant reading, in the words of Matthew Jockers, Stephen Ramsay, or Franco Moretti, brings in computational and algorithmic elements and applies quantitative methods that do not exclude qualitative approaches: computers process data firstly, and then (ideally) humans read and interpret it as text.

In this section, we offer some experiences in textual analysis using texts from our [Digital Library]({{site.baseurl}}/bibliotecadigital.md): [Relación de las cosas sucedidas en el Río de la Plata](pero-site) by Pero Hernández, la [Relación de un viaje al Río de la Plata](acarete-site) buy Acarete du Biscay, [La Argentina Manuscrita](ruy-diaz-site) by Ruy Díaz de Guzmán, [Argentina y la conquista del Río de la Plata](centenera-site) *Poema histórico* by Martín del Barco Centenera, and [Viaje al Río de la Plara de Ulrico Schmidel](ulrich-site) by Ulrico Schmidel.

For a more in-depth macroanalytical reading, we invite you to consult this [notebook](https://colab.research.google.com/drive/1l487LB-PUqgs24DFqSTq2tPZ0OrTUbHB?usp=sharing).

## Morphosyntactic Tagging

Morphosyntactic tagging is an automatic annotation process that assigns a grammatical category (or part of speech) to each token in a text. This technique allows for the visualization of syntactic dependencies or investigation of the correlation between a certain class of words and other discursive features, such as sentiment polarity or writing quality.

![dependencias acarete](/assets/img/explora/dependencias-dubiscay.png)

The grammatical categories identified through morphosyntactic tagging can be used for co-occurrence analysis, providing a quick overview of the content of a textual corpus. Co-occurrence analysis measures the appearance of two or more tokens within the same context (sentence, paragraph, etc.). For example, analyzing noun co-occurrences in *Relación de un viaje al Río de la Plata*, as shown in the following graph, helps highlight the commercial dimension and territorial description in Acarete du Biscay’s text through the high frequency of pairs like “barco-mercadería” (ship-merchandise), “mina-plata” (mine-silver), “corona-libra” (crown-pound), and also “legua-río” (league-river), “ciudad-río” (city-river), “montaña-plata” (mountain-silver).

![co-occurrence graph – Acarete](/assets/img/explora/cooc_sust_sust_dubiscay.png)


## Semantic Tagging

Semantic annotation typically aims to distinguish categories such as person, place, and event. However, it can also rely on a taxonomy to identify more specific classes, such as [professional hierarchies](https://github.com/hdcaicyt/Relacion-de-las-cosas-sucedidas/blob/master/assets/taxonomia-personajes-pero-hernandez.pdf), administrative divisions, or types of geographical features. 

![bar plot facciones](/assets/img/explora/conteo_personajes_categ.png)

Semantic enrichment allows for, for instance, counting the number of characters by origin, faction, or position, or tracing intersections between these categories throughout the textual narrative, as shown in the following [narrative diagram](http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/) for [_Relación de las cosas sucedidas en el Río de la Plata_](http://hdlab.space/Relacion-de-las-cosas-sucedidas/):

<a href="http://hdlab.space/Relacion-de-las-cosas-sucedidas/narrative-chart/" target="_blank"><img src="http://hdlab.space/Relacion-de-las-cosas-sucedidas/assets/img/narrative-chart.png" alt="narrative chart"></a>


## Topic modeling

Topic modeling is a method for organizing large corpora based on machine learning. This technique identifies the topics present in a collection of texts, the documents related to each topic, and the words that represent them—without the need for labeled data.

![topics pelagios](/assets/img/explora/topic_texts_pelagios.png)

The following chart displays the ten most representative words for each topic identified through topic modeling in _Relación de las cosas sucedidas_, _Relación de un viaje al Río de la Plata_, and _La Argentina Manuscrita_. Topic 2 features words strongly tied to _Relación de las cosas sucedidas_ (the text describes the conflict between Domingo de Irala and the Governor, Álvar Núñez), while Topic 1 includes words like “capitán” (captain) and “pedro,” which are characteristic of _La Argentina Manuscrita_ (which recounts the founding of Asunción by one of Pedro de Mendoza’s captains). It's worth noting that some words appear in multiple topics—“río” (river), “indios” (Indians), “plata” (silver)—which makes sense given that all the texts deal with the colonization of the Río de la Plata region in the late 16th and early 17th centuries.

![topics pelagios](/assets/img/explora/topic_words_pelagios.png)


## Stylometric Analysis with Stylo

Stylometry is the quantitative study of the linguistic style of written texts. It has a variety of applications, such as determining authorship, verifying the authenticity of texts, and classifying documents. The *Stylo* software—developed by Maciej Eder, Jan Rybicki, Mike Kestemont, and Steffen Pielstroem—enables easy stylometric analysis and generates visual representations that help evaluate and compare stylistic similarities or differences.
For a stylometric analysis experience with Stylo, we added the following works from our Digital Library to the corpus:

* _Descripción e Historia del Paraguay y del Río de la Plata_, by by Félix de Azara
* _Días de ocio_, by William H. Hudson
* _Viaje a la Patagonia Austral_, by Francisco Pascasio Moreno
* _Primer viaje alrededor del mundo_, by Antonio Pigafetta
* _Diario de un viaje a la costa de Patagonia, para reconocer los puntos en donde establecer poblaciones_, by Antonio de Viedma
* _Relación de la entrada de los Chiriguanos_, by Ruy Díaz de Guzmán.

The dendrogram below shows the texts grouped according to their degree of stylistic similarity:

![macroanalisis1](/assets/img/explora/macroanalisis-ngram-eder-delta.png)

Texts that appear on the same branch have greater stylistic similarities, while greater distances between nodes represent more marked stylistic differences. Thus, in this analysis, two main branches can be observed: the upper branch contains most of the texts, while the smaller, lower branch contains a node grouping two stylistically similar works by the same author: _La Argentina Manuscrita_ by Rui Díaz de Guzmán and a text identified as _Chiriguanos_, which corresponds to the *Relación de la entrada de los Chiriguanos* written by the same author between 1617 and 1618.

This analysis can be complemented and confirmed by applying other stylometric analysis algorithms. Consensus trees, for example, are produced by iterative algorithms that provide more robust results.

![macroanalisis2](/assets/img/explora/macroanalisis-consensus-tree.png)

The consensus tree of our corpus confirms the authorship of the *Chiriguanos* text by grouping it with the other analyzed work by Díaz de Guzmán. This model is a powerful tool in stylometry, facilitating comparison and verification of authorship.

[pero-site]: https://hdlab.space/Relacion-de-las-cosas-sucedidas
[acarete-site]: https://hdlab.space/Relacion-de-un-viaje
[ruy-diaz-site]: https://hdlab.space/La-Argentina-Manuscrita/
[centenera-site]: https://hdlab.space/argentina-y-conquista-del-rio-de-la-plata/
[ulrich-site]: https://hdlab.space/viaje-al-rio-de-la-plata/