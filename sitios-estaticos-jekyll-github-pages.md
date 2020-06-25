---
layout: page
title: Instalación de Jekyll y dependencias para crear sitios estáticos con Jekyll y GitHub Pages
type: texto
permalink: /traduccion-proghist/
---

<!-- ---
 title: Construir sitios estáticos con Jekyll y GitHub Pages
 collection: lessons
 layout: lesson
 slug:
 date:
 translation_date:
 authors:
 - Amanda Visconti
 reviewers:
 -
 editors:
 -
 translator:
 - Nidia Hernández
 translation-editor:
 -
 translation-reviewer:
 -
 original:
 review-ticket:
 difficulty:
 activity:
 topics:
 abstract:
--- -->

**Esta lección es para ti** si deseas tener un sitio web totalmente gratuito, seguro, fácil de actualizar y de preservar sobre el que tengas control total, como un blog académico, un sitio web de proyecto o un portfolio en línea.

**Al final de esta lección**, tendrás un sitio web básico en funcionamiento donde podrás publicar contenido que otras personas podrán visitar -¡se verá [así](http://amandavisconti.github.io/JekyllDemo/)!- y también tendrás algunos recursos para explorar si deseas personalizar aún más el sitio.

**Requisitos:** computadora (Mac/Windows/Linux están bien, aunque esta lección no cubre algunos aspectos del uso de Linux), capacidad de descargar e instalar software en la computadora, conexión a Internet que soporte la descarga de software. Según los usuarios, se necesitan entre 1 y 3 horas para completar toda la lección.

**Difficulty level:** Intermediate (this lesson includes use of the command line and git, *but* walks you through anything needed to complete this lesson). Forthcoming lessons in the basics of git/GitHub and GitHub Pages will be linked here when available, and provide a good background for anyone wishing for deeper understanding of the technology used in this lesson.

## Contenidos
{:.no_toc}

* TOC
{:toc}

## ¿Qué son los sitios estáticos, Jekyll, etc. y por qué debería importarme? <a id="section0"></a>

*Este tutorial se basa en la [Documentación oficial de Jekyll](http://jekyllrb.com/docs/home/) escrita por la comunidad de Jekyll. Vea la sección ["Leer más"](#sección9-3) al final de la lección si desea profundizar más sobre estos temas.*

### Sitios dinámicos, sitios estáticos & Jekyll <a id="section0-1"></a>

*Los sitios web dinámicos*, como los creados y administrados por sistemas de administración de contenidos tales como [Drupal](https://www.drupal.com/), [WordPress](https://wordpress.org/) y [Omeka](https://omeka.org/), extraen información de una base de datos para completar el contenido de una página web. Cuando buscamos un libro en Amazon.com, por ejemplo, la página de resultados de búsqueda no existía como una página HTML completa; en cambio, Amazon.com tiene una plantilla para la página de resultados de búsqueda que incluye elementos que comparten todas las páginas de resultados (como el menú principal y el logotipo de Amazon) y consulta una base de datos para insertar en esa plantilla los resultados de la búsqueda que nosotros realizamos.

*Los sitios web estáticos*, por otro lado, no usan una base de datos para almacenar información; en cambio, toda la información que se muestra en cada página web ya está contenida en su correspondiente archivo HTML. Las páginas HTML que componen un sitio estático se pueden escribir completamente a mano o se puede delegar parte de este trabajo usando una herramienta como Jekyll.

*Jekyll* es un software que nos ayuda a "generar" o crear un *sitio web estático* (Jekyll muchas veces es caracterizado como un "generador de sitios estáticos"). Jekyll utiliza plantillas de página para aquellos elementos como menues principales y pies de página que normalmente se repiten en todas las páginas que componen un sitio y por ende consumen mucho tiempo si escribimos manualmente el HTML para incluirlos en cada página web. Con Jekyll, estas plantillas se combinan con otros archivos con información específica (por ejemplo, un archivo para cada post de un blog) para generar páginas HTML completas para los visitantes del sitio web. Jekyll no necesita consultar bases de datos y crear una nueva página HTML (o completar una parcial) cuando los usuarios visitan una página web sino que ya tiene las páginas HTML totalmente formadas y solo las actualiza cuando/si alguna vez cambian.

Hay que tener en cuenta que cuando alguien se refiere a un "sitio web de Jekyll", en realidad se refiere a un sitio web estático (HTML puro) que se ha creado utilizando Jekyll. Jekyll es un software que crea sitios web. Jekyll no está "ejecutando" el sitio web en vivo sino que es un "generador de sitios estáticos": es una herramienta que crea los archivos del sitio estático que luego son alojados en un servidor web, como se hace con cualquier otro sitio web HTML.

Dado que los sitios estáticos no son más que archivos de texto (sin base de datos que complique las cosas), es posible *versionarlos* fácilmente, es decir, usar una herramienta para realizar un seguimiento de las diferentes versiones del sitio a lo largo del tiempo rastreando los cambios en los archivos de texto que componen el sitio. El control de versiones es muy útil cuando necesitamos fusionar dos archivos (por ejemplo, dos estudiantes escriben una publicación de blog juntos y deseamos combinar sus dos versiones) o cuando queremos comparar archivos para buscar diferencias entre ellos (por ejemplo, "¿Cómo se describía el proyecto en la página 'Acerca de' original?"). El control de versiones es muy útil cuando se trabaja en equipo (por ejemplo, permite combinar y rastrear el trabajo de diferentes personas) pero también es útil al crear o ejecutar un sitio web por nuestra propia cuenta.

Puedes leer más acerca de [Jekyll](http://jekyllrb.com/docs/home/) o [generadores de sitios estáticos](https://davidwalsh.name/introduction-static-site-generators) (sitios en inglés).

### GitHub & GitHub Pages <a id="section0-2"></a>

*[GitHub Pages](https://pages.github.com/)* es un espacio gratuito para almacenar los archivos que ejecutan un sitio web y alojar ese sitio web para que las personas lo visiten (solo funciona para tipos particulares de sitios web, como sitios HTML básicos o sitios Jekyll y no aloja bases de datos).

*[GitHub](https://github.com/)* es una plataforma visual para utilizar *[git](https://git-scm.com/documentation)*, 
un sistema de *versionado* o, en otras palabras, de registro de cambios realizados en los archivos (código y documentos de texto, entre otros) a través del tiempo (como ya explicamos [más arriba](#section0-1)). Si tienes curiosidad, puedes explorar este [minitutorial de GitHub](https://guides.github.com/activities/hello-world/) (en inglés).

### What are the reasons for using a static website? <a id="section0-3"></a>

Options like [Drupal](https://www.drupal.com/), [WordPress](https://wordpress.org/), and [Omeka](https://omeka.org/) are good for the needs of complex, interactive websites like Amazon or an interactive digital edition of a novel—but for many blogs, project websites, and online portfolios, a static website (such as a website created using Jekyll) can do everything you need while providing some nice perks:

- **Maintenance**: Updates and maintenance are needed far less often (less than once a year vs. weekly-monthly).

- **Preservation:** No database means that the text files making up your site are all you need to save to preserve and replicate your site. It's easy to back your site up or submit it to an institutional repository.

- **Learning:** Because there isn't a database and there aren't a bunch of code files providing features you might not even need, there are far fewer actual pieces of your website—it's easier to go through them all and actually know what each does, should you be so inclined. Therefore, it's much easier to become both a basic and an advanced Jekyll user.

- **More customization possible**: Since learning to master your website is easier, things you'll definitely want to do, like changing the look (the "theme") of a Jekyll-created site, are much easier than altering the look of a WordPress or Drupal site.
- **Free hosting:** While many website tools like Drupal, WordPress, and Omeka are free, hosting them (paying for someone to serve your website's files to site visitors) can cost money. 
- **Versioning:** Hosting on GitHub Pages means your site is linked into GitHub's visual interface for git versioning, so you can track changes to your site and always roll back to an earlier state of any blog post, page, or the site itself if needed. This includes uploaded files you might want to store on the site, like old syllabi and publications. (Versioning is [explained in more detail above](#section0-1).)
- **Security:** There's no database to protect from hackers.
- **Speed:** Minimal website files and no database to query mean a faster page-loading time.

Creating a static website using Jekyll offers more perks in addition to all the benefits of a hand-coded HTML static website:

- **Learning:** It's easier to get started customizing your site and writing its content, since you won't need to learn or use HTML.
- **Built for blogging:** Jekyll was built to support blog posts, so it's easy to blog (add new, date-sorted content) and do related tasks like display an archive of all blog posts by month, or include a link to the three most recent blog posts at the bottom of each post.
- **Templating automates repeated tasks:** Jekyll makes it easy to automate repeated website tasks via its "templating" system: you can create content that should, for example, appear on the header and footer of every page (e.g. logo image, main menu), or following the title of every blog post (e.g. author name and publication date). This templated information will automatically be repeated on every appropriate webpage, instead of forcing you to manually rewrite that information on every webpage where you want it to appear. Not only does this save a lot of copying and pasting—if you ever want to change something that appears on every page of your website (e.g. a new site logo or a new item in the main menu), changing it once in a template will change in on every place it appears on your website.

## Antes de la instalación <a id="section1"></a>

En esta sección, vamos a asegurarnos de tener todo lo necesario para crear un sitio web estático con Jekyll y Github Pages. Para eso, vamos a abordar:

- [qué sistema operativo es posible usar (es decir, Mac / Windows / Linux)](#section1-0)
- [crear una cuenta de GitHub](#section1-1)
- [por qué es necesario usar un "editor de texto" para trabajar en nuestro sitio web](#section1-3)
- [cómo usar la línea de comandos](#section1-4)

Todos los elementos que vamos a instalar son herramientas de desarrollo web estándares y confiables, por lo que no es indispensable saber exactamente qué hace cada una antes de instalarla. Trataremos de brindar más información sólo para aquellos elementos que es necesario comprender en profundidad con una breve explicación de cada uno, acompañada de un enlace a más información en caso de que desee saber más sobre lo que está poniendo en su computadora.

### Sistemas operativos <a id="section1-0"></a>

Este tutorial está destinado a usuarios de Windows y Mac. Jekyll también funciona en Linux; sin embargo, a fines pedagógicos, este tutorial utiliza el software GitHub Desktop (disponible para Windows y Mac únicamente) y los usuarios de Linux tienen que usar git en la línea de comandos (no abordado en este tutorial).

Jekyll no es oficialmente compatible con Windows, lo que significa que la documentación oficial de Jekyll (las páginas que guían a través de la configuración y que explican su funcionamiento) no aborda el uso de Windows. Este tutorial se basa en [las instrucciones de Windows de David Burela](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/) (sitio en inglés) para las partes de la sección [Instalación de dependencias](#section2) en las que los usuarios de Windows deben hacer algo diferente. El resto del tutorial debería funcionar igual para los usuarios de Windows y Mac, aunque las capturas de pantalla que mostramos son todas de una Mac (por lo que pueden verse un poco diferentes en Windows).

### Cuenta de usuario de GitHub <a id="section1-1"></a>

*La cuenta de usuario de GitHub nos permite alojar nuestro sitio web (ponerlo a disposición para que otros lo visiten) de forma gratuita en GitHub. Como beneficio adicional, también nos permite hacer un seguimiento de las versiones de nuestro sitio y su escritura a medida que crece o cambia con el tiempo.*

1. Visite [GitHub.com](https://github.com/) y haga clic en el botón verde "Sign up" (Registrarse). 
2. En la página siguiente, defina el nombre de usuario deseado. El nombre de usuario es visible para otros usuarios, nos identifica en GitHub y también es parte de la URL de nuestro sitio. Por ejemplo, si el nombre de usuario de GitHub es *hdcaicyt*, la URL del sitio de será http://hdcaicyt.github.io/. (*Tenga en cuenta que uno también puede comprar su propio nombre de dominio y usarlo para este sitio, pero eso no se tratará en este tutorial*). Escriba una dirección de correo electrónico de uso habitual y defina una contraseña que contenga al menos un número y una letra minúscula. 
3. En el recuadro "Verify your account", presione el botón "Verify" (Verificar). Use las flechas para poner la imagen en el sentido correcto. Finalmente haga clic en "Select a plan" (Seleccionar un plan).
4. En la página siguiente, haga clic en el botón "Choose Free" (Seleccionar gratis).
5. Baje hasta el final de la siguiente página y haga click en "Complete Setup" (Completar configuración).
6. Vaya a su casilla de email y abra el email de Github (si no aparece en la bandeja de entrada, búsquelo en correo no deseado). Haga click en el botón "Verify email address" (Verificar dirección de email).
7. *Opcional*: puede visitar https://github.com/settings/profile para agregar un nombre completo (puede ser su nombre real, nombre de usuario de GitHub u otra cosa) y más información de perfil público, si lo desea.

### GitHub Desktop app <a id="section1-2"></a>

*The GitHub Desktop app will make updating your live website (one we set it up) easy—instead of using the command line every time you want to update your site, you'll be able to use an easier visual tool to update your site.*

1. Visit the [GitHub Desktop site](https://desktop.github.com/) and click on the "Download GitHub Desktop" button to download the GitHub Desktop software to your computer (Mac and Windows only; Linux users will need to use git just via the command line, which is not covered in this version of the tutorial).
2. Once the file has completely downloaded, double-click on it and use the following directions to install GitHub Desktop...
3. Enter the username and password for the GitHub.com account you created using the steps above. (Ignore the "Add an Enterprise Account" button.) Click "Continue".
4. Enter the name and email address you want the work on your site to be associated with (probably just your public name and work email address, but it's up to you!). 
5. On the same page, click the "Install Command Line Tools" button and enter your computer's username and password if prompted (then click the "Install Helper" button on the prompt). After you get a popup message that all command line tools have successfully installed, click continue.
6. The last page will ask "Which repositories would you like to use?". Ignore this and click the "Done" button. 
7. *Optional:* Follow the walkthrough of the GitHub Desktop app that will appear (this isn't necessary; we will cover anything you need to do with GitHub in this lesson).

### Editor de texto <a id="section1-3"></a>

Es necesario descargar e instalar un programa de "editor de texto" para realizar pequeñas personalizaciones al código de nuestro sitio Jekyll. Algunas buenas opciones gratuitas incluyen [Notepad ++](https://notepad-plus-plus.org/) para Windows o [BBedit](http://www.barebones.com/products/bbedit) para Mac. Los procesadores de texto, como Microsoft Word o Word Pad, no son una buena opción porque es fácil olvidar cómo formatear y guardar el archivo, agregando accidentalmente formatos y caracteres extra y/o invisibles que pueden generar problemas en el sitio. Por eso es mejor usar programas que puedan guardar lo que escribimos como texto plano (por ejemplo, HTML, Markdown).

*Opcional:* Consulte la sección ["Creación en Markdown"](#sección5-2) más abajo para más información sobre un programa de edición específico para Markdown que también puede instalar cuando ya estemos en la etapa de crear páginas web y/o publicaciones de blog.

### Línea de comandos <a id="section1-4"></a>

La línea de comandos es una forma de interactuar con la computadora usando texto: permite escribir comandos para acciones de lo más simples como "mostrar una lista de los archivos en este directorio" o "cambiar quién tiene permiso para acceder a este archivo" así como para comportamientos más complejos. A veces hay buenas alternativas visuales para efectuar acciones en la computadora (por ejemplo, la aplicación GitHub Desktop [que instalamos arriba](#section1-2)), otras veces tendremos que usar la línea de comandos para escribir comandos para indicarle qué hacer a la computadora. Si desea más información de la que se proporciona en este tutorial, [The Programming Historian](https://programminghistorian.org/es/) tiene una [lección que explora en profundidad la línea de comandos](https://programminghistorian.org/es/lecciones/introduccion-a-bash), pero aquí cubriremos todo lo necesario para completar la creación de nuestro sitio web y solo usaremos la línea de comandos cuando sea necesario o más sencillo que una interfaz visual.

Mientras la línea de comandos usa comandos de texto, la mayoría de los usuarios de computadora utilizan una "interfaz gráfica de usuario" (también conocida como GUI, "graphical user interface"). Cualquier programa en el que las interacciones usuario-computadora se dan a través de una interfaz visual que contiene íconos, imágenes, hacer clic con el mouse, etc. es una GUI. ¿Por qué usaríamos la línea de comandos si existen las GUI? Muchas veces es más simple y rápido escribir (o cortar y pegar de un tutorial) una serie de comandos en la línea de comandos que hacer lo mismo usando una GUI. Otras veces, hay cosas para las cuales nadie ha creado una GUI y solo es posible hacerlas a través de la línea de comandos.

El programa de línea de comandos predeterminado se llama "Terminal" en Mac (ubicado en *Aplicaciones > Utilidades*) y "Cmd" (o "Símbolo del sistema"), "Windows Power Shell" o "Git Bash" en Windows (estas son tres opciones diferentes que difieren cada una en el tipo de comandos que aceptan).

A continuación, se muestra cómo se ve una ventana de línea de comandos en Mac (usando Terminal). Verá algo como el *Macbook-Air:~DrJekyll$*. Ese texto se llama "prompt" (solicitud, porque solicita que el usuario ingrese comandos). En esta captura de pantalla, *Macbook-Air* es el nombre de la computadora de la autora de este tutorial y *DrJekyll* es la cuenta de usuario actualmente conectada (el prompt usará diferentes nombres para su computadora y nombre de usuario).

![captura-de-pantalla-linea-de-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-0.png)

Siempre que en este tutorial pidamos abrir una ventana de línea de comandos e ingresar comandos, tenga en cuenta lo siguiente:

1. **Los comandos que debe escribir (o copiar / pegar) en la línea de comandos tienen el siguiente formato:** `ejemplo de formato de código`. Cada fragmento de código formateado debe copiarse y pegarse en la línea de comandos, seguido de Enter.

2. **Deje que los procesos de instalación se ejecuten *completamente* antes de ingresar nuevos comandos.** A veces, escribir un comando y presionar Enter produce un resultado instantáneo; otras veces, una gran cantidad de texto comenzará a llenar la ventana de la línea de comandos o parecerá que la línea de comandos no está haciendo nada pero algo está sucediendo detrás de escena, como descargar un archivo. Por eso es importante que **al escribir un comando y presionar Enter, esperemos que ese comando termine por completo *antes de escribir otra cosa***, de lo contrario, podríamos detener un proceso por la mitad y generar problemas. 
    {0}. ¿Cómo saber cuándo se ha completado un comando? Cuando la línea de comandos emite nuevamente el prompt (por ejemplo, *Macbook-Air:~DrJekyll$* en la computadora de la autora de este tutorial). Vea la captura de pantalla a continuación para ver un ejemplo de ingreso de un comando, seguido de un texto que le muestra lo que estaba sucediendo mientras se procesaba ese comando (y a veces le pedía que hiciera algo, como ingresar su contraseña) y finalmente la reaparición del prompt para hacerle saber que ya puede escribir algo más.

   ![captura-de-pantalla-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

   Si necesitamos hacer otra cosa en la línea de comandos y no queremos esperar, podemos abrir una nueva ventana de línea de comandos (en una Mac, presione ⌘-N o vaya a *Shell > Nueva ventana > Nueva ventana con Configuración-Básica*) y trabajar allí mientras esperamos que finalice el proceso en la otra ventana de línea de comandos.

3. Algo muy útil cuando escribimos los mismos comandos muchas veces o queremos recordar algo que escribimos antes: podemos presionar **↑** (flecha hacia arriba) en la línea de comandos para desplazarnos por los comandos recientemente escritos y presionar Enter después de que aparezca el que deseamos usar.

## Instalación de dependencias <a id="section2"></a>

*A continuación, vamos a instalar algunas dependencias de software (es decir, programas de los que depende Jekyll para poder trabajar) usando la línea de comandos ya que no hay una interfaz visual para hacerlo. Esta sección se divide en instrucciones para Windows e instrucciones para Mac, así que vaya a la sección de [instalación de dependencias en Mac](#sectionMac) ahora si está usando Mac.*


### En Windows <a id="sectionWindows"></a>

*En esta sección, las instrucciones para usuarios de Windows difieren de las de los usuarios de Mac. Solo haga lo siguiente si está utilizando Windows.*

1. Antes que nada, necesitamos una herramienta de línea de comandos que reconozca los mismos comandos que las computadoras Mac y Linux (es decir, los sistemas operativos Unix). Visite [https://git-scm.com/downloads](https://git-scm.com/downloads) y haga clic en el enlace "Windows". Una vez que haya terminado la descarga, haga doble clic en el archivo descargado y siga los pasos para instalar Git Bash (deje todas las opciones como están).

2. Abra "Cmd" (abra su Menú de inicio y busque "Cmd" y aparecerá una aplicación que puede abrir).

3. Chocolatey es un "administrador de paquetes": un programa que le permite descargar e instalar fácilmente software de código abierto en Windows desde la línea de comandos. Ahora vamos a instalar Chocolatey (*asegúrese de resaltar y copiar todo el texto a continuación como un conjunto y no como líneas separadas*). Ingrese el código que se muestra en los pasos a continuación (`el código está formateado como este`), siguiendo [las sugerencias de uso de la línea de comandos vistas arriba](#section1-4):

   `@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`

4. Cierre "Cmd" y abra "Git Bash" (que instalamos recién). **De ahora en adelante, vamos a usar Git Bash cada vez que mencionemos la línea de comandos.**

5. Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby). Ahora instalaremos Ruby (esto tomará unos minutos):

   `choco install ruby -y`

6. Cierre "Git Bash" y reinícielo (Ruby no funcionará si no se reinicia).

7. [Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Ahora instalaremos Jekyll (si Windows Security muestra una ventana emergente de advertencia, ignórela):

   `gem install jekyll`

**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! Omita los siguientes pasos (que son solo para usuarios de Mac).**

### En Mac <a id="sectionMac"></a>

*Si está utilizando una computadora Mac, siga las instrucciones a continuación.*

Abra una ventana de línea de comandos (*Aplicaciones > Utilidades > Terminal*) e ingrese el código que se muestra en los pasos a continuación (`el código es el texto que aparece formateado así`) siguiendo [las sugerencias de uso de la línea de comandos detalladas más arriba](#section1-4).

### Herramientas de línea de comandos <a id="section2-1"></a>

Primero vamos a instalar las "herramientas de línea de comandos" de Mac para poder usar [Homebrew](http://brew.sh/) (que instalaremos a continuación). Homebrew permite descargar e instalar desde la línea de comandos software de código abierto (es un "administrador de paquetes"), lo que facilitará la instalación de Ruby (el lenguaje en el que se basa Jekyll).

En Terminal, pegue el siguiente código y presione Enter:

`xcode-select --install`

Va a aparecer un mensaje como el siguiente, seguido de una ventana emergente:

<figure>
    <img src="https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-1.png" alt="captura-de-pantalla-popup" />
<figcaption>
    <span>En la línea de comandos verá un mensaje así que le pedirá instalar las herramientas de línea de comandos</span>
</figcaption>
</figure>

En la ventana emergente, haga clic en "Install".

![captura-de-pantalla-popup-instalar](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.png)

Una vez que termine la instalación, va a aparecer un mensaje de instalación exitosa:

![captura-de-pantalla-fin-instalacion](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.5.png)

### Homebrew <a id="section2-2"></a>

Al terminar la instalación de las herramientas de la línea de comandos, regrese a la ventana de la línea de comandos y copie el siguiente texto a fin de instalar [Homebrew](http://brew.sh/):

``` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Vaya presionando Enter cuando sea necesario e ingrese la contraseña de su computadora cuando se le solicite. A modo de referencia, mostramos una captura de pantalla del comando ingresado en la línea de comandos de la autora del tutorial, seguido de todo el texto que apareció (incluido el mensaje para presionar Enter e ingresar la contraseña).

  ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

### Ruby & Ruby Gems <a id="section2-3"></a>

Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby).

En la línea de comandos, ingrese:

`brew install ruby` 

Espere hasta que el prompt vuelva a aparecer para ingresar el siguiente comando:

`gem install rubygems-update`

### NodeJS <a id="section2-4"></a>

[NodeJS](https://nodejs.org/en/) (o Node.js) es una plataforma de desarrollo (más específicamente, es un "entorno de desarrollo") que, por ejemplo, ayuda a que Javascript se ejecute más rápido.

En la línea de comandos, ingrese:

`brew install node`

### Jekyll <a id="section2-5"></a>

[Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Vea más información en [Sitios dinámicos, sitios estáticos & Jekyll](#section0-1) y en [why you'd want to use Jekyll to make a static website](#section0-3), más arriba.

En la línea de comandos, ingrese:

`gem install jekyll`


**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! De aquí en adelante, las instrucciones son iguales para Windows y Mac.**


## Configuración de Jekyll <a id="section3"></a>

*Ya hemos instalado todo lo necesario para crear un sitio web. En esta sección, utilizaremos Jekyll para generar una nueva carpeta con los archivos que conforman el sitio web. También ubicaremos esta carpeta en un lugar accesible para la aplicación GitHub Desktop para que estén en el lugar correcto cuando deseamos publicarlos como un sitio web público más adelante en la lección.*

1. Es necesario conocer la ruta de la carpeta GitHub creada por la instalación de GitHub Desktop (la ruta es el texto que indica la ubicación de cierta carpeta o archivo en el árbol de carpetas de una computadora, por ejemplo  /Desktop/MyRecipes/Spaghetti.doc). Si no conoce la ruta de la carpeta GitHub, haga click en la lupa ubicada en la esquina superior derecha de la pantalla (en Mac) o en el campo de búsqueda del Menú de Inicio (en Windows).

<figure>
    <img src="https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-5.png" alt="captura-de-pantalla-lupa" />
<figcaption>
    <span>El ícono de lupa que le permite buscar en una Mac, está en la esquina superior derecha de la pantalla</span>
</figcaption>
</figure>

   En Mac, aparecerá un cuadro de búsqueda en el medio de la pantalla; escriba "GitHub", luego haga doble clic en la opción "GitHub" que aparece debajo de "Carpetas" para revelar la carpeta GitHub en Finder (esto puede verse ligeramente diferente en Windows, pero debería funcionar igual).

   Tenga en cuenta que en algunas computadoras, esta carpeta está etiquetada como "GitHub para Mac" y puede no aparecer en una búsqueda; si los pasos anteriores no ubicaron una carpeta de GitHub, vaya a Biblioteca> Soporte de aplicaciones en Finder y verifique si la carpeta "GitHub para Mac" está allí.

   ![captura-de-pantalla-resultados-lupa](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-6.png)

   Haga click derecho en la carpeta "GitHub" y elija "Copiar 'GitHub'". La ruta de la carpeta GitHub ha sido copiada.

2. En la línea de comandos, escriba `cd`, seguido de espacio, seguido de la ruta a la carpeta GitHub (Command-v para pegar la ruta copiada en el paso previo). En la computadora de la autora, (logeada como *DrJekyll*) esto se ve de la siguiente manera:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-7.png)

   El comando *cd* (**c**hange **d**irectory) le indica a la computadora que se localice en el lugar especificado por la ruta indicada, en este caso, la ruta a la carpeta GitHub creada por la instalación de GitHub Desktop.

3. La URL pública de su sitio tendrá la siguiente forma: http://amandavisconti.github.io/JekyllDemo/ (*amandavisconti* es el usuario de GitHub de la autora y *JekyllDemo* el nombre del sitio que ingresamos en este paso (*es posible pagar y usar su propia [URL personalizada](#section7-2), pero no lo cubriremos en este tutorial*). **Los sitios en mayúsculas y minúsculas **no** dirigen al mismo sitio web**, así que a diferencia del ejemplo **JekyllDemo** es recomendable elegir un nombre todo en minúsculas para asegurarse de que la gente lo escriba correctamente.

   En la línea de comandos, escriba lo siguiente (reemplace *JekyllDemo* con el nombre que desee para su sitio):

   `jekyll new JekyllDemo`

   Este comando le indica a *jekyll* que cree un *nuevo* (new) instalando los archivos necesarios en la carpeta llamada *JekyllDemo*. **De ahora en adelante, llamaremos "carpeta del sitio web" a la carpeta creada en este paso (por ej., *JekyllDemo*).**

4. En la línea de comandos, type in the following to navigate into your site folder (through the rest of this lesson, always replace *JekyllDemo* with whatever name you chose for your site in the previous step):

   `cd JekyllDemo` 

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-8.png)

   If you look in the *GitHub > JekyllDemo* folder in Finder, you'll see that a bunch of new files—the files that will run your website!—have been installed (we'll describe what each does [further on in the lesson](#section4-2)):

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-9.png)

5. Bundler is a Ruby "Gem" (a package of Ruby code that adds some specific feature to your site) that will make testing your site easier; it needs to be installed directly into the website folder we just created (e.g. *JekyllDemo*), which is why we didn't install it earlier in this lesson. En la línea de comandos, enter:

   `gem install bundler` 

   Don't forget to wait until the command prompt appears again to type the following command:

   `bundle init`

   A new file named "Gemfile" will appear in your website folder. The [Gemfile](http://tosbourn.com/what-is-the-gemfile/) helps your site keep track of all the dependencies it requires to run without breaking (dependencies are pieces of code that software *depends* on or requires, if you don't want errors to occur).

6. Navigate to your website folder in Finder (Macs) or your directory folder (Windows), and open the "Gemfile" file; you'll want to open this and any future website files using your [text editor](#section1-3) (e.g. TextWrangler). To force a file to open with your text editor, right-click on the file, then chose "Open with" and select the text editor program (you may need to choose "Other…" to find the text editor if it isn't in the list that appears).

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-12.png)

   You can also drag and drop a text file onto the icon for your text editor program (e.g. on the Dock/menubar).

7. Add the two following lines of text, on separate lines and with the same lower-case formatting (as shown in the screenshot below), then **save**:

   ```
   gem 'jekyll'
   gem 'github-pages'
   ```

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-13.png)

8. En la línea de comandos, type

   `bundle install`

   This will install the *jekyll* and *github-pages* gems you just listed in the Gemfile. (Don't forget to let the entire process finish and the prompt reappear before typing any more commands! This process will take a few minutes, as a number of dependencies are being installed.) 

   You won't need to mess with the Gemfile again, since we'll be hosting your website on GitHub Pages and GitHub Pages does not allow additional site dependencies or plugins (code that adds specific features, like social media buttons after every post; [more on plugins below](#section7-2).)

## Ejecutar un sitio web localmente <a id="section3a"></a>
*This section will describe how to run your website* ***locally****—meaning you'll be able to see what your website will look like in a web browser just on your computer (aka locally), but not anywhere else. Working on a "local" version of a website means that it's private to your computer; no one else can see your website yet (your website isn't "live" or "public": no one can type in the URL and see it in their browser).*

*This means you can experiment all you want, and only publish your site for the world to see when it's ready. Or, once you've made your site live, you can continue to experiment locally with new writing, design, etc. and only add these to the public site once you're happy with how they look on the local site.*

1. En la línea de comandos, type  

    `bundle exec jekyll serve --watch`

   This is the command you'll run whenever you want to view your website locally:

    *jekyll serve* tells your computer to run Jekyll locally.

   *--watch* together with *bundle exec* tells Jekyll to watch for changes to the website's files, such as you writing and saving a new blog post or webpage, and to include these changes on refreshing your web browser. **An exception to this** is the _config.yml file, which I'll discuss in more detail in the next section (any changes made there *won't* show up until you stop and restart Jekyll).

2. After typing in the command in the previous step, you'll notice that the process never finishes. Remember how on the command line, if you type in anything while the previous command is still processing, you can cause problems? Jekyll is now being run from this command line window, so you'll need to open a new command line window if you want to type other commands while your local site is still accessible to you (see [the section on command line usage above](#section1-4).) ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-10.png)

   Reports and error messages caused by changes you make to the files in the website folder will appear in this command line window, and are a good first place to check if something isn't working.

3. To stop running the site locally, press **control-c** (this frees up the command line window for use again). Just enter `bundle exec jekyll serve --watch` again to start running the site locally again.

4. View your locally-running site by visiting **localhost:4000**. You'll see a basic Jekyll website with boilerplate text:

![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-11.png)

### Mini cheatsheet <a id="section3a-1"></a>

- Type `bundle exec jekyll serve --watch` at the command line to start running your website locally. You'd visit **localhost:4000** in a browser to see your local site now, but in the next section we'll be changing things such that you'll need to visit **localhost:4000/JekyllDemo/** to see the site from then on (filling in your website folder name for *JekyllDemo*, and making sure to include the last slash).

- Hit **control-c** at the command line to stop running the website locally.

- While the site is running, after making changes to website files: save the files and refresh the webpage to see the changes—**except for the _config.yml file**, for which you must stop running the website and restart running the website to see changes.

- Typing or pasting in `bundle exec jekyll serve --watch` a lot? Instead, you can type the ↑ (up arrow) at the command line to scroll through recently typed commands; just press enter after the command you want to use appears.

## Tweaking the settings <a id="section4"></a>

*You now have a basic, private website accessible only on your computer. In this section, we'll begin to customize your site by changing the website title and author information, and giving a brief overview of what the different website files do.*

### Basic site settings via _config.yml <a id="section4-1"></a>

1. Navigate to your website folder in Finder (Macs) or the directory folder (Windows. The author's website at */Users/DrJekyll/GitHub/JekyllDemo* (*DrJekyll* is my logged in username, and *JekyllDemo* is the name of my website folder). [Return to the "Setting up Jekyll" section](#section3) if you need help locating your website folder.

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-18.png)

2. We'll start by customizing the main settings file, **_config.yml**. You'll want to open this and any future website files using your text editor (e.g. TextWrangler on Macs or Notepad++ on Windows).

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-14.png)

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-15.png)

   The *_config.yml* file is a file "meant for settings that affect your whole blog, values for which your are expected to set up once and rarely need to edit after that" (as it says inside the file!). *_config.yml* is the place where you can set the title of your site, share information like your email address that you want associated with the site, or add other "basic settings"-type information you want available across your website. 

   The *.yml* file type refers to how the file is written using [YAML](https://en.wikipedia.org/wiki/YAML) (the acronym standing for "YAML Ain't Markup Language"); YAML is a way of writing data that is both easy for humans to write and read, and easy for machines to interpret. You won't need to learn much about YAML, besides keeping the *_config.yml* formatted the way it originally is even as you customize the text it contains (e.g. the title information is on a separate line from your email).

3. You can change the text in this file, save the file, and then visit your local website in a browser to see the changes. **Note that changes to _config.yml**, unlike the rest of your website files, will not show up if made while the website is already running; you need to make them while the website isn't running, *or* after making changes to _config.yml stop then start running the website, to see changes made to this particular file. (*Changes to the _config.yml file were left out of the ability to refresh because this file can be used to declare things like the structure of site links, and altering these while the site is running could badly break things.*)

   Making small changes to website files (one at a time to start with), saving, and then refreshing to see the effect on your site means if you mess anything up, it will be clear what caused the issue and how to undo it.

   - Note that any line that starts with a **#** sign is a *comment*: comments aren't read as code, and instead serve as a way to leave notes about how to do something or why you made a change to the code. 

   - Comments can always be deleted without effect to your website (e.g. you can delete the commented lines 1-6 in *_config.yml* if you don't want to always see this info about Jekyll use).

4. Change the *_config.yml* file according to these instructions:

   - **title**: The title of your website, as you want it to appear in the header of the webpage.
   - **email**: Your email address.
   - **description**: A description of your website that will be used in search engine results and the site's RSS feed.
   - **baseurl**: Fill in the quotation marks with a forward slash followed by the name of your website folder (e.g. "/JekyllDemo") to help locate the site at the correct URL.
   - **url**: Replace "http://yourdomain.com" with "localhost:4000" to help locate your local version of the site at the correct URL.
   - **twitter_username**: Your Twitter username (do not include @ symbol).
   - **github_username**: Your GitHub username.

   The changes you made to the *baseurl* and *url* lines will let your site run from the same files both locally on your computer and live on the Web, but **doing this changed the URL where you'll see your local site from now on** (while [Jekyll is running](#section3-1)) from localhost:4000 to **localhost:4000/JekyllDemo/** (substitute your website folder name for *JekyllDemo* and remembering the last slash mark).

   In the screenshot below, I have deleted the initial commented lines 1-6 as well as the commented text stating what "description" does (not necessary, just to show you can delete comments that you don't care about seeing!) as customized the rest of the file as instructed above:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-16.png)

5. Save the file, and start (or stop and restart if it's currently running) the website, then visit **localhost:4000/JekyllDemo/** (substituting your website folder name for *JekyllDemo* and remembering the last slash mark) to see your customized local site:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-17.png)

### Where (and what) is everything? <a id="section4-2"></a>

To get a sense of how your site works and what files you'd experiment with to do more advanced things, here are some notes on what each folder or file in your current website folder does. Remember to always open and edit any files with a text editor (e.g. TextWrangler) and not a word processor (e.g. not Microsoft Word or anything that lets you add formatting like italic and bold); this prevents invisible formatting characters from being saved in the file and messing up the website. If you just want to start adding content to your site and make it public, you can [skip to the next section](#section5).

![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-18.png)

- **_config.yml** is discussed [above](#section4-1); it provides basic settings information about your site, such as the site's title and additional possibilities we won't cover here, like how to structure links to posts (e.g. should they follow the pattern MySite.com/year/month/day/post-title?).
- **_includes** folder has files that get included on all or certain pages (e.g. code to make the header contain your site title and main menu on every page of the site)
- **_layouts** folder contains code that controls how the pages on your site look (default.html), as well as customizations of that code to further style blog posts (post.html) and pages (page.html)
- **_posts** folder holds the individual files that each represent a blog post on your website. Adding a new post to this folder will make a new blog post appear on your website, in reverse chronological order (newest post to oldest). We'll cover adding blog posts in the [next section](#section5-2).
- **_sass** folder holds SCSS files that control the visual design of the site
- **_site** folder is where the HTML pages that appear on the web are generated and stored (e.g. you'll write and save posts as Markdown files, but Jekyll will convert these to HTML for display in a web browser)
- **about.md** is an example of a Jekyll *page*. It's already linked in the header of your website, and you can customize its text by opening and writing in that file. We'll cover adding more site pages in the [next section](#section5-3).
- **css** folder holds CSS converted from SCSS that controls the visual design of the site
- **feed.xml** lets people follow the RSS feed of your blog posts
- **index.html** controls the structuring of content on your site's homepage


=============================================





## Writing pages and posts <a id="section5"></a>

*This section will describe how to create pages and blog posts on your website.*

**Pages** and **posts** are just two types of written content that's styled differently. Pages are content (like an "About" page) that isn't organized or displayed chronologically, but might be included in your website's main menu; posts are meant to be used for content best organized by publication date. The URLs (links) for pages and posts are also different by default (although you can change this): page URLs look like *MySite.com/about/*, while post URLs look like *MySite.com/2016/02/29/my-post-title.html.*

#### Authoring in Markdown <a id="section5-1"></a>

Markdown is a way of formatting your writing for reading on the web: it's a set of easy-to-remember symbols that show where text formatting should be added (e.g. a # in front of text means to format it as a heading, while a * in front of text means to format it as a bulleted list item). For Jekyll in particular, Markdown means you can write webpages and blog posts in a way that's comfortable to authors (e.g. no need to look up/add in HTML tags while trying to write an essay), but have that writing show up formatted nicely on the web (i.e. a text-to-HTML convertor).

We won't cover Markdown in this lesson; if you're not familiar with it, for now you can just create posts and pages with no formatting (i.e. no bold/italic, no headers, no bulleted lists). But these are easy to learn how to add: there's a handy markdown [reference](http://kramdown.gettalong.org/quickref.html), as well as [a Programming Historian lesson by Sarah Simpkin on the hows and whys of writing with Markdown](http://programminghistorian.org/lessons/getting-started-with-markdown). Check out these links if you'd like to format text (italics, bold, headings, bullet/numbered lists) or add hyperlinks or embedded images and other files.

Make sure any Markdown cheatsheets you look at are for the "[kramdown](http://kramdown.gettalong.org/quickref.html)" flavor of Markdown, which is what GitHub Pages (where we'll be hosting our website) supports. (*There are [various "flavors" of Markdown](https://github.com/jgm/CommonMark/wiki/Markdown-Flavors) that have subtle differences in what various symbols do, but for the most part frequently used symbols like those that create heading formatting are the same—so you're actually probably okay using a markdown cheatsheet that doesn't specify it's kramdown, but if you're getting errors on your site using symbols that aren't included in kramdown might be why*).

You might be interested in "markdown editor" software such as [Typora](http://www.typora.io/) (OS X and Windows; free during current beta period), which will let you use popular keyboard shortcuts to write Markdown (e.g. highlight text and press command-B to make it bold) and/or type in Markdown but have it show as it will look on the web (see headings styled like headings, instead of like normal text with a # in front of them).

### Authoring pages <a id="section5-3"></a>

1. To see an existing page on your website (created as a default part of a Jekyll website [when you created the rest of your website's files](#section3)), navigate to your website folder and open the **about.md** file either in a text editor (e.g. TextWrangler) or a Markdown editor (e.g. Typora) to see the file that creates the "About" page. Also click on the "About" link in the top-right of your webpage to see what the webpage the file creates looks like in a browser.

2. The stuff between the \--- dashes is called "front matter" (*note that opening the file in a Markdown editor might make the front matter appear on a gray background instead of between dashes*). The front matter tells your site whether to format the content below the front matter as a page or blog post, the title of the post, the date and time the post should show it was published, and any categories you'd like the post or page listed under.

   You can change things in the front matter of a page:

   - **layout:** Keep this as-is (it should say page).
   - **title:** Change this to the desired page title (unlike posts, no quotation marks around the title). In the screenshot below, I added a page with the title "Resume".
   - **permalink:** change the text between the two forward slash marks to the word (*or phrase—but you'll need to use hyphens and not spaces!*) that you want to follow your site's main URL to reach the page. For example, **permalink: /about/** locates a page at **localhost:4000/yourwebsitefoldername/about/**

3. The space below the front matter's second — dashes (or below the front matter's gray box, if using a Markdown editor) is where you write the content of your page, using [the Markdown formatting described above](#section5-1).

4. To create a new page in addition to the "About" page that already exists on the site (and can be customized or deleted), create a copy of the *about.md* file in the same folder (the main website folder) and change its filename to the title you wish, using hyphens instead of spaces (e.g. *resume.md* or *contact-me.md*). Also change the title and permalink in the file's front matter, and the content of the file. The new page should automatically appear in the main menu in the site's header:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-22.png)

For reference, you can check out [an example of a page](http://amandavisconti.github.io/JekyllDemo/resume/) on my demo site, or see [the file that's behind that page](https://raw.githubusercontent.com/amandavisconti/JekyllDemo/gh-pages/resume.md).

### Authoring posts <a id="section5-2"></a>

1. In Finder, navigate to your website folder (e.g. *JekyllDemo*) and the *_posts* folder inside it. Open the file inside it with either a text editor (e.g. TextWrangler) or a Markdown editor (e.g. Typora). The file will be named something like *2016-02-28-welcome-to-jekyll.markdown* (the date will match when you created the Jekyll site).

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-19.png)

   As with pages, with posts the stuff between the \--- lines is called "front matter" (*note that opening the file in a Markdown editor might make the front matter appear on a gray background instead of between dashes*). The front matter tells your site whether to format the content below the front matter as a page or blog post, the title of the post, the date and time the post should show it was published, and any categories you'd like the post or page listed under.

2. We're going to write a second post so you can see how multiple posts look on your site. Close the *20xx-xx-xx-welcome-to-jekyll.markdown* file that was open, then right-click on that file in Finder and choose "Duplicate". A second file named *20xx-xx-xx-welcome-to-jekyll copy.markdown* will appear in the _sites folder.

3. Click once on the *20xx-xx-xx-welcome-to-jekyll copy.markdown* file name so that you can edit the file name, then alter it to show today's date and contain a different title, such as *2016-02-29-a-post-about-my-research.markdown* (use hyphens between words, **not** spaces).

4. Now open your renamed file in your text or markdown editor, and customize the following:

   - **layout:** Keep this as-is (it should say *post*).
   - **title:** Change "Welcome to Jekyll!" to whatever title you'd like for your new post (keeping the quotation marks around the title). It's the norm to make the title the same as the words in the filename (except with added spaces and capitalization). This is how the title will appear on the post's webpage).
   - **date:** Change this to when you want the post to show as its publication date and time, making sure to match the date that's part of the filename. (The date *and* time should have occurred already, for your post to show up.)
   - **categories:** Delete the words "jekyll update" for now, and don't add anything else here—the current theme doesn't use these and they mess up the post URLs. (*Other themes can use this field to sort blog posts by categories*.)
   - **The space below the second \--- (or below the gray box, if using a Markdown editor):** This is where you write your blog post, using [the Markdown formatting described above](#section5-1).

   After saving, you should now be able to see your second post on the front page of your site, and clicking on the link should take you to the post's page:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-20.png)

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-21.png)

Notice that **the URL of the post** is your local website URL (e.g. *localhost:4000/JekyllDemo/*) followed by the year/month/date of publication, followed by the title as written in your filename and ending with .html (e.g. *localhost:4000/JekyllDemo/2016/02/29/a-post-about-my-research.html*). Jekyll is converting the Markdown file you authored in the _posts folder into this HTML webpage.

**Deleting a file** from the _posts folder removes it from your website (you can try this with the "Welcome to Jekyll!!" sample post).

**To create further posts**, duplicate an existing file, then remember to change not just the front matter and content inside the post as described above, but also the file name (date and title) of the new file.

For reference, you can check out [an example of a post](http://amandavisconti.github.io/JekyllDemo/2016/02/29/a-post-about-my-research.html) on my demo site, or see [the code running that post](http://raw.githubusercontent.com/amandavisconti/JekyllDemo/gh-pages/_posts/2016-02-29-a-post-about-my-research.markdown).

## Hosting en GitHub Pages <a id="section6"></a>

*Ahora que ya sabes cómo añadir páginas de texto y posteos a tu sitio web; en esta sección moveremos tu sitio local a la Web para que otros puedan visitarlo.* **En este punto, estaremos haciendo una versión de tu sitio que será visible públicamente** *(tanto para motores de búsqueda como para cualquiera que conozca o encuentre casualmente el link).*

*[Anteriormente en esta lección,](#section1-2) instalamos la aplicación GitHub Desktop. Ahora la utilizaremos para mover los archivos de su sitio a un servidor que los presentará como páginas web (GitHub Pages), que el público podrá visitar en línea. Esta será la primera vez en la que subiremos todos los archivos de tu sitio a la Web; en el futuro, utilizarás esta aplicación siempre que hayas realizado cambios en los archivos de tu sitio local y desees que esos cambios se vean reflejados en la versión pública del sitio (al final de esta sección encontrarás una[guía](#section6-1) con información útil para realizar esta tarea).*

1. Abre la aplicación GitHub Desktop y haz clic en el signo “+” (Mac) o en la pestaña “File” (Windows) que se encuentra en la esquina superior izquierda y haz clic en la opción “Add” (o “Add local repository…”) que aparece en la caja que se despliega.

2. Haz clic en el botón "Choose…" y selecciona la carpeta (*JekyllDemo* en nuestro ejemplo) que contiene los archivos de tu sitio local (si estás utilizando Mac y te resulta imposible encontrar esta carpeta, es posible que sea porque se halla oculta; [usa estas indicaciones](http://www.macobserver.com/tmo/article/mavericks-easily-make-user-library-folder-visible) para hacerla visible, y que de esta forma GitHub Desktop pueda ingresar a ella).

3. Luego haz clic en el botón "Create & Add Repository" (Mac) o "Add Repository" (Windows). Ahora verás una lista de los archivos en los que hayas realizado cambios (tanto sean adiciones o sustracciones de archivos o en ellos) desde la última vez en la que hayas copiado el código de tu sitio de tu computadora a Git Hub (*en el caso de que todavía no hayas realizado este proceso, todos los archivos del repositorio aparecerán listados como nuevas adiciones*).

4. Completa el primer campo con una descripción de los cambios hayas realizado en tu sitio desde la última vez en que hayas subido tus archivos a GitHub (ten en cuenta que el espacio es limitado). Para este primer caso, un comentario breve como “Mi primer commit” será suficiente; en el futuro, es posible que deseesser más descriptivo para ayudarte a localizar cuándo fue realizado un determinado cambio — por ejemplo, escribiendo “Se añade nueva página de contacto”.

   Puedes utilizar el área de texto más grande que se encuentra debajo si deseas escribir un mensaje más largo (*opcional*).

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-23.png)

5. En la sección superior de la ventana de GitHub Desktop, haz clic en el tercer ícono desde la izquierda (el mensaje “Add a branch” debería aparecer si colocas el curson encima de él) (Mac), o en recuadro “current branch” y luego el botón “New branch” (Windows). Luego, escribe *gh-pages* en el campo “Name” y haz clic en el botón “Create branch”.

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-24.png)

*A partir de este punto el proceso para publicar nuestro sitio en GitHub Pages difiere en Windows y en Mac*

**Para usuarios de Mac**

6. Haze en el botón “Commit to gh-pages” en la sección inferior izquiera de la ventana de la aplicación.

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-25.png)

7. Haz click en el botón “Publish” en la sección superior derecha.

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-26.png)

8. En la ventana emergente, deja todo como está y haz clic en el botón “Publish repository” en la sección inferior derecha (*tu ventana puede no estar mostrando las opciones relativas a repositorios privados que se muestran en la captura de pantalla*).

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-27.png)

9.  Haz clic en el botón “Sync” que se encuentra en la sección superior derecha.

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-28.png)

**Para usuarios de Windows**

6. Haz clic en el botón “Publish repository” que aparece destacado en azul.

7. Haz clic en el botón “View on GitHub” que aparece en la parte central de la ventana, en tercer lugar.

8. Ya en GitHub, debes cambiar las opciones de visibilidad de tu repositorio para hacerlo público, para esto, accede a la sección de “Settings” y baja hasta el recuadro titulado “Danger Zone”. Haz clic en el botón “Change visibility” y seleccionar la opción “Make public”. 

9. Arriba del recuadro de Danger Zone se encuentran las opciones de GitHub Pages. Allí debes cambiar la opción “Source” y seleccionar la rama (branch) “gh-pages”.  

**Ambos**

10. Ahora ya puedes visitar tu sitio web (¡y compartir el link para que otros lo vean!). La URL sigue la estructura de *tu nombre de usuario de GitHub PUNTO github.io BARRA nombre de tu sitio web BARRA*. (por ejemplo, la URL del sitio de ejemplo de la autora es [amandavisconti.github.io/JekyllDemo/](amandavisconti.github.io/JekyllDemo/)).

## Poniéndonos elegantes <a id="section7"></a>

*Esta lección no cubre el trabajo avanzado para personalizar la apariencia de tu sitio web ni la adición de nuevas funcionalidades, sin embargo, aquí te acercamos algo de información para que puedas comenzar a investigar por tu cuenta.* 

### Diseño visual <a id="section7-1"></a>

El diseño visual de un sitio web es referido usualmente como su *tema* (aunque propiamente, un tema es el conjunto del código y los archivos de imagen que generan un cambio importante en la apariencia de un sitio web. 

Puedes personalizar el tema de tu sitio realizando cambios en los archivos que se encuentran en las carpetas *_sass* y *css*. (lamentablemente, en sus versiones más recientes, Jekyll comenzó a usar SASS en lugar de CSS, lo que hace que sea un poco más difícil para no-diseñadores aprender personalizarlas). También puedes añadir (y luego personalizar, si lo deseas) un tema creado por alguien más, a los que puedes acceder realizando una búsqueda para “Jekyll themes” o en alguno de los siguientes recursos:  

- Tema "Ed" para ediciones digitales mínimas, de Alex Gil (https://elotroalex.github.io/ed/, https://elotroalex.github.io/ed/documentation.html; gratis)
- Tema "Digital Edition", de Rebecca Sutton Koese(https://github.com/emory-libraries-ecds/digitaledition-jekylltheme; gratis)
- El directorio de [Jekyll Themes](http://jekyllthemes.org/) (gratis)
- [JekyllThemes.io](http://jekyllthemes.io/) (gratis y pago)

### Funcionalidad <a id="section7-2"></a>

- Los [plugins de Jekyll](http://jekyllrb.com/docs/plugins/) te permiten añadir pequeños segmentos de código que permiten sumar funcionalidad a tu sitio, tales como [realizar búsquedas de texto](https://github.com/PascalW/jekyll_indextank), [permitir el uso de emojis](https://github.com/yihangho/emoji-for-jekyll), o [crear nubes de palabras](https://gist.github.com/ilkka/710577). 

- Si deseas utilizar GitHub Pages como servidor para tu sitio, como lo hicimos en esta lección, solo podrás utilizar los plugins de Jekyll que ya están incluidos en las gemas de GitHub Pages que instalamos (aquí tienes una [lista completa de lo que hemos instalado](https://pages.github.com/versions/), cuando añadimos la gema de GitHub Pages a nuestro Gemfie anteriormente).


- Si decides hospedar tu sitio de Jekyll en otro servidor que no sea GitHub Pages, puedes utilizar cualquier plugin de Jekyll (las instrucciones para alojar tu sitio varían entre diferentes proveedores de hosting web, y no las desarrollaremos en esta lección, pero [aquí](http://jekyllrb.com/docs/plugins/) tienes una página que explica cómo instalar plugins, una vez que poseas tu sitio con hosting propio). Puedes realizar una búsqueda utilizando “Jekyll plugin” y añadir la funcionalidad que necesites para explorar si hay una herramienta apropiada disponible, o revisar la [documentación sobre plugins](http://jekyllrb.com/docs/plugins/) en el sitio oficial de Jekyll. 
  
- También puedes mantener GitHub Pages como hosting gratuito para tu sitio, pero darle un **nombre de dominio personalizado** (los dominios pueden ser adquiridos por un costo razonable -que suele rondar los 10 dólares anuales- a través de un registrador de dominios como [NearlyFreeSpeech.net](https://www.nearlyfreespeech.net/services/domains)). Por ejemplo, el blog de la autora de este tutorial, LiteratureGeek.com, fue construido con Jekyll y está alojado en GitHub Pages, al igual que sitio que construiste en esta lección, pero utiliza un dominio personalizado que la autora compró y configuró para que condujera a su sitio web. Las instrucciones para establecer un dominio personalizado pueden ser encontradas [aquí](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).   


- Además, puedes **migrar un blog existente** desde varias otras plataformas, incluyendo WordPress, Blogger, Drupal, y Tumblr, para lo cual debes seguir el enlace que se encuentra en el sector derecho de [esta página](https://import.jekyllrb.com/docs/home/). Cuando migres un sitio, asegúrate de tener un back up de tu sitio original, en caso de que necesites realizar más de un intento para que las publicaciones del sitio se encuentren en la misma URL que antes (y que de esta forma se mantenga en los resultados de los buscadores y en los marcadores). 

## Guía <a id="section8"></a>

**Para realizer pruebas en el sitio de forma local** (nuevos plugins, temas, o para ver cómo luce una nueva publicación):

* *Correr el sitio en forma local*: Escribe `bundle exec jekyll serve --watch` en la línea de comandos.
* *Visitar el sitio local*: Abrir **localhost:4000/yourwebfoldername/** en un explorador (por ejemplo: *localhost:4000/JekyllDemo/*). ¡No olvides la barra inclinada al final!
* *Ver los cambios en el sitio local a medida que los vas realizando*:Para visualizar los cambios en los archivos mientras el sitio está abierto en el explorador, debes guardar los archivos modificados y refrescar la página en el explorador; a menos que el cambio se haya realizado en el archivo **_config.yml**, en cuyo caso debes cerrar el sitio en el navegador y luego volver a entrar para ver los cambios.
* *Detener el sitio local*: Presiona **control-c** en la línea de comandos.

**Para trasladar los cambios que realizaste en tu sitio local a la versión online**:

* Abre GitHub Desktop y escribe una breve descripción de los cambios realizados (y de forma opcional también puedes escribir una descripción más larga en el segundo cuadro de texto).
* Haz clic en el botón “commit” que se encuentra debajo del recuadro de texto.
* Una vez que el commit haya finalizado, haz clic en el botón “Sync” en l asección superior derecha de la pantalla (Mac) o en el botón “Push origin” que aparece destacado en azul (Windows).
* Espera un poco a que GitHub reciba los cambios (usualmente entre 10 y 90 segundos) y refresca tu sitio online para ver los cambios allí reflejados.

## Help, credits, & further reading <a id="section9"></a>

### Help <a id="section9-1"></a>

Run into a problem while using this lesson, or found something that should be written more clearly? You can ask questions or submit suggested additions/edits to this lesson in a variety of ways:

1. [Annotating with Hypothesis Via by visiting http://via.hypothes.is/programminghistorian.github.io/ph-submissions/lessons/building-static-sites-with-jekyll-github-pages](http://via.hypothes.is/programminghistorian.github.io/ph-submissions/lessons/building-static-sites-with-jekyll-github-pages)
2. Add comments to [the submission ticket for this lesson](https://github.com/programminghistorian/ph-submissions/issues/3) on GitHub.
3. Email the author at [aviscont@purdue.edu](mailto:aviscont@purdue.edu)

If you review the lesson and make suggestions (or report successful lesson use), we'd like to credit you by name as one of the lesson's reviewers.

If you run into an issue, [Jekyll has a page on troubleshooting](https://jekyllrb.com/docs/troubleshooting/) that might help. If you're working on the command line and get an error message, don't forget to try searching for that specific error message online. Besides search engines, [the StackExchange site](http://stackexchange.com/) is a good place to find questions and answers from people who have run into the same problem as you in the past.

### Credits <a id="section9-2"></a>

Thanks to *Programming Historian* Editor Fred Gibbs for editing, discussing, and reviewing this lesson; Paige Morgan for reviewing this lesson; Scott Weingart and students for testing the lesson with Windows; and Tod Robbins and Matthew Lincoln for suggestions on the [DH Slack](http://tinyurl.com/DHSlack) on what to cover in this lesson.

### Further reading <a id="section9-3"></a>

Check out the following links for documentation, inspiration, and further reading about Jekyll:

* [Official Jekyll Documentation](http://jekyllrb.com/docs/home/)
* Jekyll "unofficially" links to two Windows + Jekyll resources: [http://jekyll-windows.juthilo.com/](http://jekyll-windows.juthilo.com/) and [https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/)
* [https://help.github.com/articles/using-jekyll-with-pages/](https://help.github.com/articles/using-jekyll-with-pages/)
* Amanda Visconti, ["Introducing Static Sites for Digital Humanities Projects (why & what are Jekyll, GitHub, etc.?)"](http://literaturegeek.com/2015-12-08-WhyJekyllGitHub/)
* Alex Gil, ["How (and Why) to Generate a Static Website Using Jekyll, Part 1"](http://chronicle.com/blogs/profhacker/jekyll1/60913)
* Eduardo Bouças, ["An Introduction to Static Site Generators"](https://davidwalsh.name/introduction-static-site-generators)
* [Jekyll Style Guide](http://ben.balter.com/jekyll-style-guide/)
* The [Prose](http://prose.io/) content editor (built on Jekyll)
* [Join the Digital Humanities Slack](http://tinyurl.com/DHslack) (anyone can join, even if you have no DH experience) and check out the #publishing channel for discussions of Jekyll and other DH publishing platforms
