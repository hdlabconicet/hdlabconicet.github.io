---
<!-- layout: biblioteca -->
layout: page
title: La Argentina Manuscrita
permalink: /argentina-manuscrita/
---

# Edición digital de La Argentina Manuscrita

_La Argentina Manuscrita_ de Rui Díaz de Guzmán forma parte de un corpus de textos producidos durante la Conquista de del Río de la Plata entre los siglos XVI-XVII. Ruy Díaz de Guzmán fue un conquistador mestio guaraní-español y el primer escritor nacido en el virreinato del Río de la Plata. 

Esta edición digital es el resultado del proyecto Pelagios al Sur llevado a cabo gracias al apoyo del consorcio Pelagios Commons.


![relaciones](/assets/img/argentina_manuscrita/relaciones_LAM.png)

![nube](/assets/img/argentina_manuscrita/cirrus_LAM.png)

![trend](/assets/img/argentina_manuscrita/trend_LAM.png)

## Índice

<ul>
  {% for capitulo in site.argentina_manuscrita %}
    <li>
      <a href="{{ capitulo.url }}">{{ capitulo.subtitle }}</a>
    </li>
  {% endfor %}
</ul>

<!-- [Ver edición anotada]({{ site.url }}{{ site.baseurl }}/texts/argmanus-l1-00) -->

<!--[Descargar anotación TEI]({{ site.url }}{{ site.baseurl }}/textos/Ruy_Diaz-La_Argentina_Manuscrita.tei.xml) -->

<!-- [Ver en Recogito](https://recogito.pelagios.org/document/wzqxhk0h3vpikm/part/1/edit) -->

<!-- [Volver](/textosymapas) -->