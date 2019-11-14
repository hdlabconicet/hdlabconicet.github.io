---
layout: texto
title: La Argentina Manuscrita
permalink: /argentina-manuscrita-indice-paginas/
type: extras
---

## Índice


#### Paratextos
<ul class="idx">
{% for page in site.argentina_manuscrita_pages %}
	{% if page.section == "Paratextos" %}
		<li class="idx"><a href="{{ page.url }}">{{ page.subtitle }}</a> | </li>
	{% endif %}
{% endfor %}
</ul>

#### Libro I

<ul class="idx">
{% for page in site.argentina_manuscrita_pages %}
	{% if page.section == "Libro I" %}
	<li class="idx"><a href="{{ page.url }}">{{ page.subtitle }}</a> | </li>
	{% endif %}
{% endfor %}
</ul>

### Libro II

<ul class="idx">
  {% for page in site.argentina_manuscrita_pages %}
  	{% if page.section == "Libro II" %}
	    <li class="idx"> <a href="{{ page.url }}">{{ page.subtitle }}</a> | </li>
	{% endif %}
  {% endfor %}
</ul>


### Libro III

<ul class="idx">
  {% for page in site.argentina_manuscrita_pages %}
  	{% if page.section == "Libro III" %}
	    <li class="idx"> <a href="{{ page.url }}">{{ page.subtitle }}</a> | </li>
	{% endif %}
  {% endfor %}
</ul>
