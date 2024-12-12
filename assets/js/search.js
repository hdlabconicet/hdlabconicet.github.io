---

---
// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('section')
  this.addField('pagenum')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

{% assign count = 0 %}{% for text in site.hdlab.space %}
index.addDoc({
  section: {{text.section | jsonify}},
  pagenum: {{text.pagenum | jsonify}},
  layout: {{text.layout | jsonify}},
  content: {{text.content | jsonify | strip_html}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );

var store = [{% for text in site.hdlab.space %}{
  "section": {{text.section | jsonify}},
  "pagenum": {{text.pagenum | jsonify}},
  "layout": {{ text.layout | jsonify }},
  "link": {{text.url | jsonify}},
},
{% endfor %}]

var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
  // get the index of the parameter, add three (to account for length)
  var stringloc = url.lastIndexOf("?q=") + 3;
  // get the substring (query) and decode
  var searchquery = decodeURIComponent(url.substr(stringloc));
}

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No se encontraron resultados.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  } else {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="{{ site.baseurl }}'+store[ref].link+'?q='+query+'">'+store[ref].section+' - '+store[ref].pagenum+'</a></p></div>';
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
