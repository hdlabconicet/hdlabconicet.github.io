---

---
// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('layout')
  //this.addField('date')
  this.addField('content')
  this.setRef('id')
});


{% assign count = 0 %}{% for post in site.posts %}
index.addDoc({
  title: {{post.title | jsonify}},
  layout: {{post.layout | jsonify}},
  //date: {{post.date | jsonify}},
  content: {{post.content | jsonify | strip_html}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );

{% for page in site.pages %}
index.addDoc({
  title: {{page.title | jsonify}},
  layout: {{page.layout | jsonify}},
  content: {{page.content | jsonify | strip_html}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );

var store1 = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "layout": {{ post.layout | jsonify }},
  "link": {{post.url | jsonify}},
},
{% endfor %}]

var store2 = [{% for page in site.pages %}{ 
  "title": {{page.title | jsonify}},
  "layout": {{ page.layout | jsonify }},
  "link": {{page.url | jsonify}},
},
{% endfor %}]

let store = store1.concat(store2);

//Query
var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
  var stringloc = url.lastIndexOf("?q=") + 3;
  var searchquery = decodeURIComponent(url.substr(stringloc));
}

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No se encontraron resultados</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  } else {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  }

  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="{{ site.baseurl }}'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (searchquery) {
    $('input#search').val(searchquery);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
