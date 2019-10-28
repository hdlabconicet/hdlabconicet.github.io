---
layout: texto
title: La Argentina Manuscrita
permalink: /argentina-manuscrita-indice-caps/
---

## Índice

#### Paratextos
<ul class="idx">
{% for capitulo in site.argentina_manuscrita %}
	{% if capitulo.section == "Paratextos" %}
		<li class="idx"><a href="{{ capitulo.url }}">{{ capitulo.subtitle }}</a> | </li>
	{% endif %}
{% endfor %}
</ul>

#### Libro I

<ul class="idx">
{% for capitulo in site.argentina_manuscrita %}
	{% if capitulo.section == "Libro I" %}
	<li class="idx"><a href="{{ capitulo.url }}">{{ capitulo.subtitle }}</a> | </li>
	{% endif %}
{% endfor %}
</ul>

### Libro II

<ul class="idx">
  {% for capitulo in site.argentina_manuscrita %}
  	{% if capitulo.section == "Libro II" %}
	    <li class="idx"> <a href="{{ capitulo.url }}">{{ capitulo.subtitle }}</a> | </li>
	{% endif %}
  {% endfor %}
</ul>

### Libro III

<ul class="idx">
  {% for capitulo in site.argentina_manuscrita %}
  	{% if capitulo.section == "Libro III" %}
	    <li class="idx"> <a href="{{ capitulo.url }}">{{ capitulo.subtitle }}</a> | </li>
	{% endif %}
  {% endfor %}
</ul>
