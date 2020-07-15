---
layout: page
title: Creación de sitios estáticos con Jekyll y GitHub Pages
type: texto
permalink: /traduccion-proghist/
---

<!-- ---
 title: Creación de sitios estáticos con Jekyll y GitHub Pages
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
 - Nidia Hernández, Gimena del Rio Riande, Romina De León, Gabriel Calarco, Raffaele Viglianti
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

**Esta lección es para ti** si deseas tener un sitio web totalmente gratuito, seguro, fácil de actualizar y de preservar sobre el que tengas control total, como un blog académico, un sitio web de proyecto, o un portfolio en línea.

**Al final de esta lección**, tendrás un sitio web básico en funcionamiento donde podrás publicar contenido que otras personas podrán visitar -¡se verá [así](http://amandavisconti.github.io/JekyllDemo/)!- y también tendrás algunos recursos para explorar si deseas personalizar aún más el sitio.

**Requisitos:** una computadora (Mac/Windows/Linux están bien, aunque esta lección no cubre algunos aspectos del uso de Linux), capacidad de descargar e instalar software en la computadora, conexión a Internet que soporte la descarga de software. Según los usuarios, se necesitan entre 1 y 3 horas para completar toda la lección.

**Nivel de dificultad:** Intermedio (esta lección incluye el uso de línea de comandos y git, *pero* te ofrece todo lo necesario para que la completes). Las próximas lecciones sobre los conceptos básicos de git / GitHub y GitHub Pages se vincularán con esta cuando estén disponibles, y proporcionarán una buena base para cualquiera que desee una comprensión más profunda de la tecnología utilizada en esta lección.

## Contenidos
{:.no_toc}

* TOC
{:toc}

## ¿Qué son los sitios estáticos, Jekyll, etc. y por qué deberían importarme? <a id="section0"></a>

*Este tutorial se basa en la [Documentación oficial de Jekyll](http://jekyllrb.com/docs/home/) escrita por la comunidad de Jekyll. Revisa la sección ["Leer más"](#sección9-3) al final de la lección si deseas profundizar más sobre estos temas.*

### Sitios dinámicos, sitios estáticos & Jekyll <a id="section0-1"></a>

*Tanto los sitios web dinámicos*, como los creados y administrados por sistemas de administración de contenidos tales como [Drupal](https://www.drupal.com/), [WordPress](https://wordpress.org/) y [Omeka](https://omeka.org/), extraen información de una base de datos para completar el contenido de una página web. Cuando buscamos un libro en Amazon.com, por ejemplo, la página de resultados de búsqueda no existe como una página HTML completa; en cambio, Amazon.com tiene una plantilla para la página de resultados de búsqueda, que incluye elementos que comparten todas las páginas de resultados (como el menú principal y el logotipo de Amazon) y consulta una base de datos para insertar en esa plantilla los resultados de la búsqueda que nosotros realizamos.

*Los sitios web estáticos* no usan una base de datos para almacenar información; por el contrario, toda la información que se muestra en cada página web ya está contenida en su correspondiente archivo HTML. Las páginas HTML que componen un sitio estático se pueden escribir completamente a mano o se puede delegar parte de este trabajo usando una herramienta como Jekyll.

*Jekyll* es un software que nos ayuda a "generar" o crear un *sitio web estático* (Jekyll muchas veces es caracterizado como un "generador de sitios estáticos"). Jekyll utiliza plantillas de página para aquellos elementos como menús principales y pies de página que normalmente se repiten en todas las páginas que componen un sitio y por ende consumen mucho tiempo si escribimos manualmente el HTML para incluirlos en cada página web. Con Jekyll, estas plantillas se combinan con otros archivos con información específica (por ejemplo, un archivo para cada post de un blog) para generar páginas HTML completas para los visitantes de un sitio web. Jekyll no necesita consultar bases de datos y crear una nueva página HTML (o completar una parcial) cuando los usuarios visitan una página web, sino que ya cuenta con las páginas HTML completas y solo las actualiza cuando/si alguna vez cambian.

Hay que tener en cuenta que cuando alguien se refiere a un "sitio web de Jekyll", en realidad se refiere a un sitio web estático (HTML puro) que se ha creado utilizando Jekyll. Jekyll es un software que crea sitios web. Jekyll no está "ejecutando" el sitio web en vivo sino que es un "generador de sitios estáticos": es una herramienta que crea los archivos del sitio estático que luego son alojados en un servidor web, como se hace con cualquier otro sitio web HTML.

Dado que los sitios estáticos no son más que archivos de texto (sin una base de datos que complique las cosas), es posible *versionarlos* fácilmente, es decir, usar una herramienta para realizar un seguimiento de las diferentes versiones del sitio a lo largo del tiempo rastreando los cambios en los archivos de texto que componen el sitio. El control de versiones es muy útil cuando necesitamos fusionar dos archivos (por ejemplo, dos estudiantes escriben una publicación de blog juntos y deseamos combinar sus dos versiones) o cuando queremos comparar archivos para buscar diferencias entre ellos (por ejemplo, "¿Cómo se describía el proyecto en la página 'Acerca de' original?"). El control de versiones es muy útil cuando se trabaja en equipo (por ejemplo, permite combinar y rastrear el trabajo de diferentes personas) pero también es útil al crear o ejecutar un sitio web por nuestra propia cuenta.

Puedes leer más acerca de [Jekyll](http://jekyllrb.com/docs/home/) o [generadores de sitios estáticos](https://davidwalsh.name/introduction-static-site-generators) (sitios en inglés).

### GitHub & GitHub Pages <a id="section0-2"></a>

*[GitHub Pages](https://pages.github.com/)* es un espacio gratuito para almacenar los archivos que ejecutan un sitio web y alojar ese sitio para que las personas lo visiten (solo funciona para tipos particulares de sitios web, como sitios HTML básicos o sitios Jekyll; no aloja bases de datos).

*[GitHub](https://github.com/)* es una plataforma visual para utilizar *[git](https://git-scm.com/documentation)*, 
un sistema de *versionado* o, en otras palabras, de registro de cambios realizados en los archivos (código y documentos de texto, entre otros) a través del tiempo (como ya explicamos [más arriba](#section0-1)). Si tienes curiosidad, puedes explorar este [minitutorial de GitHub](https://guides.github.com/activities/hello-world/) (en inglés).

### ¿Por qué usar sitios estáticos?<a id="section0-3"></a>

Opciones como [Drupal](https://www.drupal.com/), [WordPress](https://wordpress.org/), y [Omeka](https://omeka.org/) son últiles para la creación de sitios web complejos e interactivos como Amazon o una edición digital interactiva de una novela, pero para muchos blogs, sitios web de proyectos y portfolios en línea, un sitio web estático (como un sitio web creado con Jekyll) puede hacer todo lo que se necesita al tiempo que proporciona algunas ventajas:

- **Mantenimiento:** Las actualizaciones y el mantenimiento necesitan realizarse con mucha menos frecuencia (menos de una vez al año).

- **Preservación:** Sin base de datos significa que los archivos de texto que componen tu sitio son todo lo que necesitas guardar para preservar y replicarlo. Resulta sencillo respaldar el sitio o enviarlo a un repositorio institucional.

- **Aprendizaje:** Debido a que no cuenta una base de datos y no hay una gran cantidad de archivos de código que brinden funciones que quizás ni siquiera necesites, hay muchos menos componentes en tu sitio web; es más fácil revisarlos y saber lo que hace cada uno, en caso de que lo desearas. Por lo tanto, es mucho más fácil convertirse en un usuario de Jekyll básico y avanzado.

- **Más personalización**: Dado que aprender a dominar tu sitio web es fácil, cosas que definitivamente querrás hacer, como cambiar el aspecto (el "tema") de un sitio creado por Jekyll, resultan mucho más sencillas que alterar el aspecto de un sitio en WordPress o Drupal.

- **Alojamiento gratuito:** Si bien muchas herramientas de sitios web como Drupal, WordPress y Omeka son gratuitas, alojarlas (pagar a alguien para que muestre los archivos de tu sitio web a los visitantes del sitio) puede costar dinero.

- **Control de versiones:** Hospedar en páginas de GitHub significa que tu sitio está vinculado a la interfaz visual de GitHub para el control de versiones de git, por lo que puede realizarse un seguimiento de los cambios en tu sitio y siempre volver al estado anterior de cualquier publicación de blog, o página, si fuera necesario. Esto incluye archivos cargados que tal vez desees almacenar en el sitio, como programas de estudio y publicaciones antiguas (El control de versiones se explicó [con más detalle anteriormente](#sección0-1)).

- **Seguridad:** No hay una base de datos a la que haya que proteger de los hackers.

- **Velocidad:** Los archivos mínimos del sitio web y la inexistencia de una base de datos para consultar redundan en un tiempo de carga de página más rápida.

La creación de un sitio web estático con Jekyll ofrece aún más ventajas, sin perder las de un sitio web estático HTML codificado a mano:

- **Aprendizaje:** Es más fácil comenzar a personalizar tu sitio y escribir su contenido, ya que no necesitarás aprender o usar HTML.

- **Creado para bloguear:** Jekyll fue creado para permitir publicaciones de blog, por lo que es fácil bloguear (agregar contenido nuevo, ordenado por fecha) y realizar tareas relacionadas, como mostrar un archivo de todas las publicaciones de blog por mes, o incluir un enlace a las tres publicaciones de blog más recientes al final de cada publicación.

- **La plantilla automatiza las tareas repetidas:** Jekyll facilita la automatización de las tareas repetidas del sitio web a través de su sistema de "plantillas": puede crear contenido que, por ejemplo, debe aparecer en el encabezado y pie de página de cada página (por ejemplo, imagen del logotipo o menú principal), o repetir información en cada publicación de blog (por ejemplo, nombre del autor y fecha de publicación). Esta información con plantilla se repetirá automáticamente en las páginas web que desees, en lugar de obligarte a reescribir manualmente esa información. Esto no solo ahorra mucha copia y pegado, si alguna vez deseas cambiar algo que aparece en cada página de tu sitio web (por ejemplo, un nuevo logotipo del sitio o un nuevo elemento en el menú principal), si lo cambias una vez en una plantilla, lo cambiarás en cada lugar que aparece en tu sitio web.

## Antes de la instalación <a id="section1"></a>
¡Estamos listos para trabajar! En el resto de esta lección, vamos a instalar algunos programas en nuestras computadora, usar la línea de comandos para instalar algunas cosas que solo se pueden instalar de esa manera, ver y personalizar una versión privada de tu sitio web, y finalmente, hacer que tu sitio web esté accesible públicamente en la web. Si tienes problemas en algún momento de esta lección, consulta la [sección de ayuda sobre cómo hacer preguntas o informar problemas](#section1-9)

En esta sección, vamos a asegurarnos de tener todo lo necesario para crear un sitio web estático con Jekyll y Github Pages. Para eso, vamos a abordar:

- [qué sistema operativo es posible usar (es decir, Mac / Windows / Linux)](#section1-0)
- [crear una cuenta de GitHub](#section1-1)
- [por qué es necesario usar un "editor de texto" para trabajar en nuestro sitio web](#section1-3)
- [cómo usar la línea de comandos](#section1-4)

Todos los elementos que vamos a instalar son herramientas de desarrollo web estándar. Se trata de herramientas confiables, por lo que no es indispensable saber exactamente qué hace cada una de ellas. Brindaremos una breve explicación de los elementos que es necesario comprender en profundidad y dejaremos enlaces, en caso de desear saber más sobre lo que se está instalando.

### Sistemas operativos <a id="section1-0"></a>

Este tutorial está destinado a usuarios de Windows y Mac. Jekyll también funciona en Linux; sin embargo, a fines pedagógicos, este tutorial utiliza para línea de comandos el software GitHub Desktop (disponible para Windows y Mac únicamente); los usuarios de Linux tienen que usar [git](https://git-scm.com/docs/gittutorial) para ello (no abordado en este tutorial).

Jekyll no es oficialmente compatible con Windows, lo que significa que la documentación oficial de Jekyll (las páginas que guían a través de la configuración y que explican su funcionamiento) no aborda el uso de Windows. Este tutorial se basa en [las instrucciones de Windows de David Burela](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/) para las partes de la sección [Instalación de dependencias](#section2) en las que los usuarios de Windows deben hacer algo diferente. El resto del tutorial debería funcionar igual para los usuarios de Windows y Mac, aunque las capturas de pantalla que mostramos son todas de una Mac (por lo que pueden verse un poco diferentes en Windows).

### Cuenta de usuario de GitHub <a id="section1-1"></a>

*La cuenta de usuario de GitHub nos permite alojar nuestro sitio web (ponerlo a disposición para que otros lo visiten) de forma gratuita en GitHub. Como beneficio adicional, también nos permite hacer un seguimiento de las versiones de nuestro sitio y su escritura a medida que crece o cambia con el tiempo.*

1. Visita [GitHub.com](https://github.com/) y haz clic en el botón verde "Sign up" (Registrarse). 
2. En la página siguiente, define el nombre de usuario deseado. El nombre de usuario es visible para otros usuarios, nos identifica en GitHub y también es parte de la URL de nuestro sitio. Por ejemplo, si el nombre de usuario de GitHub es *hdcaicyt*, la URL del sitio de será http://hdcaicyt.github.io/. (*Tenga en cuenta que uno también puede comprar su propio nombre de dominio y usarlo para este sitio, pero eso no se tratará en este tutorial*). Escribe una dirección de correo electrónico de uso habitual y define una contraseña que contenga al menos un número y una letra minúscula. 
3. En el recuadro "Verify your account", presiona el botón "Verify" (Verificar). Usa las flechas para poner la imagen en el sentido correcto. Finalmente haga clic en "Select a plan" (Seleccionar un plan).
4. En la página siguiente, haz clic en el botón "Choose Free" (Seleccionar gratis).
5. Baja hasta el final de la siguiente página y haz clic en "Complete Setup" (Completar configuración).
6. Ve a tu email y abre el de Github (si no aparece en la bandeja de entrada, búscalo en correo no deseado). Haz clic en el botón "Verify email address" (Verificar dirección de email).
7. *Opcional*: puedes visitar https://github.com/settings/profile para agregar un nombre completo (puede ser tu nombre real, nombre de usuario de GitHub u otra cosa) y más información de perfil público, si lo deseas.

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

Es necesario descargar e instalar un editor de texto para realizar pequeñas personalizaciones al código de nuestro sitio Jekyll. Algunas buenas opciones gratuitas incluyen [jEdit](www.jedit.org), [Atom](https://atom.io/), [SublimeText](https://www.sublimetext.com/3), [Notepad ++](https://notepad-plus-plus.org/) para Windows o [BBedit](http://www.barebones.com/products/bbedit) para Mac. Los procesadores de texto, como Microsoft Word o Word Pad, no son una buena opción porque es fácil olvidar cómo formatear y guardar el archivo, agregando accidentalmente formatos y caracteres extra y/o invisibles que pueden generar problemas en el sitio. Por eso es mejor usar programas que puedan guardar lo que escribimos como texto plano (por ejemplo, HTML o Markdown).
*Opcional:* Consulta la sección ["Creación en Markdown"](#sección5-2) más abajo, para más información sobre un programa de edición específico en Markdown, que también puedes instalar cuando ya estemos en la etapa de crear páginas web y/o publicaciones (posts) de blog.

### Línea de comandos <a id="section1-4"></a>

La línea de comandos puede ser definida como una forma de interactuar con la computadora usando texto: permite escribir comandos para llevar a cabo acciones de lo más simples como "mostrar una lista de los archivos en este directorio" o "cambiar quién tiene permiso para acceder a este archivo", así como para comportamientos más complejos. A veces hay buenas alternativas visuales para efectuar acciones en la computadora (por ejemplo, la aplicación GitHub Desktop [que instalamos arriba](#section1-2)), otras veces tendremos que usar la línea de comandos para indicarle qué hacer a la computadora. Si deseas más información de la que se proporciona en este tutorial, [The Programming Historian](https://programminghistorian.org/es/) tiene una [lección que explora en profundidad la línea de comandos](https://programminghistorian.org/es/lecciones/introduccion-a-bash), pero aquí cubriremos todo lo necesario para completar la creación de nuestro sitio web y solo usaremos la línea de comandos cuando sea necesario o más sencillo que una interfaz visual.

Mientras la línea de comandos usa comandos de texto, la mayoría de los usuarios de computadora utilizan una "interfaz gráfica de usuario" (también conocida como GUI, "graphical user interface"). Cualquier programa en el que las interacciones usuario-computadora se dan a través de una interfaz visual que contiene íconos, imágenes, hacer clic con el mouse, etc. es una GUI. ¿Por qué usaríamos la línea de comandos si existen las GUI? Muchas veces es más simple y rápido escribir (o cortar y pegar de un tutorial) una serie de comandos en la línea de comandos que hacer lo mismo usando una GUI. Otras veces, hay cosas para las cuales nadie ha creado una GUI y solo es posible hacerlas a través de la línea de comandos.

El programa de línea de comandos predeterminado se llama "Terminal" en Mac (ubicado en *Aplicaciones > Utilidades*) y "Cmd" (o "Símbolo del sistema"), "Windows Power Shell" o "Git Bash" en Windows (estas son tres opciones diferentes que difieren cada una en el tipo de comandos que aceptan).

A continuación, se muestra cómo se ve una ventana de línea de comandos en Mac (usando Terminal). Verás algo como el *Macbook-Air:~DrJekyll$*. Ese texto se llama "prompt" ("orden" o "solicitud", porque solicita que el usuario ingrese comandos obligatoriamente para poder continuar). En esta captura de pantalla, *Macbook-Air* es el nombre de la computadora de la autora de este tutorial en inglés y *DrJekyll* es la cuenta de usuario actualmente conectada (el prompt usará diferentes nombres para su computadora y nombre de usuario).

![captura-de-pantalla-linea-de-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-0.png)
<br/>
<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_1.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Promt de la línea de comandos en Windows.</span>
</figcaption>
</figure>
<br/> 

Siempre que en este tutorial pidamos abrir una ventana de línea de comandos e ingresar comandos, ten en cuenta lo siguiente:

1. **Los comandos que debes escribir (o copiar/pegar) en la línea de comandos tienen el siguiente formato:** `ejemplo de formato de código`. Cada fragmento de código formateado debe copiarse y pegarse en la línea de comandos, seguido de Enter.

2. **Debes dejar que los procesos de instalación se ejecuten *completamente* antes de ingresar nuevos comandos.** A veces, escribir un comando y presionar "Enter" produce un resultado instantáneo; otras veces, una gran cantidad de texto comenzará a llenar la ventana de la línea de comandos o parecerá que la línea de comandos no está haciendo nada pero algo está sucediendo detrás de escena, como descargar un archivo. Por eso es importante que **al escribir un comando y presionar Enter, esperemos que ese comando termine por completo *antes de escribir otra cosa***, de lo contrario, podríamos detener un proceso por la mitad y generar problemas. 
    {0}. ¿Cómo saber cuándo se ha completado un comando? Cuando la línea de comandos emite nuevamente la orden (prompt) (por ejemplo, *Macbook-Air:~DrJekyll$* en la computadora de la autora de este tutorial). La captura de pantalla a continuación muestra un ejemplo de ingreso de un comando, seguido de un texto que le muestra lo que estaba sucediendo mientras se procesaba ese comando (y a veces le pedía que hiciera algo, como ingresar su contraseña) y finalmente la reaparición del prompt para hacerle saber que ya puede escribir algo más.

    ![captura-de-pantalla-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

    Si necesitamos hacer otra cosa en la línea de comandos y no queremos esperar, podemos abrir una nueva ventana de línea de comandos (en una Mac, presionar ⌘-N o ir a *Shell > Nueva ventana > Nueva ventana con Configuración-Básica*) y trabajar allí mientras esperamos que finalice el proceso en la otra ventana de línea de comandos.

3. Algo muy útil cuando escribimos los mismos comandos muchas veces o queremos recordar algo que escribimos antes: podemos presionar **↑** (flecha hacia arriba) en la línea de comandos para desplazarnos por los comandos recientemente escritos y presionar Enter después de que aparezca el que deseamos usar.

## Instalación de dependencias <a id="section2"></a>

*A continuación, vamos a instalar algunas dependencias de software (es decir, programas de los que depende Jekyll para poder trabajar) usando la línea de comandos ya que no hay una interfaz visual para hacerlo. Esta sección se divide en instrucciones para Windows e instrucciones para Mac, así que ve a la sección de [instalación de dependencias en Mac](#sectionMac) si estás usando Mac.*


### En Windows <a id="sectionWindows"></a>

*En esta sección, las instrucciones para usuarios de Windows difieren de las de los usuarios de Mac. Solo haz lo siguiente si estás utilizando Windows.*

1. Antes que nada, necesitamos una herramienta de línea de comandos que reconozca los mismos comandos que las computadoras Mac y Linux (es decir, los sistemas operativos Unix). Visita [https://git-scm.com/downloads](https://git-scm.com/downloads) y haz clic en el enlace "Windows". Una vez que hayas terminado la descarga, haz doble clic en el archivo descargado y sigue los pasos para instalar Git Bash (deja todas las opciones como están).

2. Abre Cmd (abre el Menú de inicio y busca "Cmd" y aparecerá una aplicación que puedes abrir). Otra forma sencilla de abrir el "Cmd" en Windows, es hacer clic derecho sobre el botón de inicio que se encuentra en la barra de tareas y seleccionar la opción "Ejecutar", lo que abrirá una ventana emergente en la que debes escribir "cmd" y presionar "Aceptar".

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_2.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Ejecutar Cmd.</span>
</figcaption>
</figure>
<br/> 

3. Chocolatey es un "administrador de paquetes": un programa que te permite descargar e instalar fácilmente software de código abierto en Windows desde la línea de comandos. Ahora vamos a instalar Chocolatey (*asegúrate de resaltar y copiar todo el texto a continuación como un conjunto y no como líneas separadas*). Ingresa el código que se muestra en los pasos a continuación (`el código está formateado como este`), siguiendo [las sugerencias de uso de la línea de comandos vistas arriba](#section1-4):

   `@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`

4. Cierra Cmd y abre Git Bash (que instalamos recién). **De ahora en adelante, vamos a usar Git Bash cada vez que mencionemos la línea de comandos.**

5. Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby). Ahora instalaremos Ruby (esto tomará unos minutos):

   `choco install ruby -y`

6. Cierra "Git Bash" y reinícialo (Ruby no funcionará si no se reinicia).

7. [Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Ahora instalaremos Jekyll (si Windows Security muestra una ventana emergente de advertencia, ignórala):

   `gem install jekyll`

**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! Omite los siguientes pasos (que son solo para usuarios de Mac).**

### En Mac <a id="sectionMac"></a>

*Si estás utilizando una computadora Mac, sigue las instrucciones a continuación.*

Abre una ventana de línea de comandos (*Aplicaciones > Utilidades > Terminal*) e ingresa el código que se muestra en los pasos a continuación (`el código es el texto que aparece formateado así`) siguiendo [las sugerencias de uso de la línea de comandos detalladas más arriba](#section1-4).

### Herramientas de línea de comandos <a id="section2-1"></a>

Primero vamos a instalar las "herramientas de línea de comandos" de Mac para poder usar [Homebrew](http://brew.sh/) (que instalaremos a continuación). Homebrew permite descargar e instalar desde la línea de comandos software de código abierto (es un "administrador de paquetes"), lo que facilitará la instalación de Ruby (el lenguaje en el que se basa Jekyll).

En el Terminal, pega el siguiente código y presiona Enter:

`xcode-select --install`

Va a aparecer un mensaje como el siguiente, seguido de una ventana emergente:

![captura-de-pantalla-popup](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-1.png)


![captura-de-pantalla-popup-instalar](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.png)

En la ventana emergente, haz clic en Install.

Una vez que termine la instalación, va a aparecer un mensaje de instalación exitosa:

![captura-de-pantalla-fin-instalacion](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.5.png)

### Homebrew <a id="section2-2"></a>

Al terminar la instalación de las herramientas de la línea de comandos, regresa a la ventana de la línea de comandos y copia el siguiente texto a fin de instalar [Homebrew](http://brew.sh/):

``` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Presiona "Enter" cuando sea necesario e ingresa la contraseña de tu computadora cuando se solicite. A modo de referencia, mostramos una captura de pantalla del comando ingresado en la línea de comandos de la autora del tutorial, seguido de todo el texto que apareció (incluido el mensaje para presionar Enter e ingresar la contraseña).

  ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)
 
### Ruby & Ruby Gems <a id="section2-3"></a>

Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby).

En la línea de comandos, ingresa:

`brew install ruby` 

Espera hasta que el prompt vuelva a aparecer para ingresar el siguiente comando:

`gem install rubygems-update`

### NodeJS <a id="section2-4"></a>

[NodeJS](https://nodejs.org/en/) (o Node.js) es una plataforma de desarrollo (más específicamente, es un "entorno de desarrollo") que, por ejemplo, ayuda a que Javascript se ejecute más rápido.

En la línea de comandos, ingresa:

`brew install node`

### Jekyll <a id="section2-5"></a>

[Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Encuentras más información en [Sitios dinámicos, sitios estáticos & Jekyll](#section0-1) y en [why you'd want to use Jekyll to make a static website](#section0-3), más arriba.

En la línea de comandos, ingresa:

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

   En Mac, aparecerá un cuadro de búsqueda en el medio de la pantalla;escribe"GitHub", luego haga doble clic en la opción "GitHub" que aparece debajo de "Carpetas" para revelar la carpeta GitHub en Finder (esto puede verse ligeramente diferente en Windows, pero debería funcionar igual).

   Tenga en cuenta que en algunas computadoras, esta carpeta está etiquetada como "GitHub para Mac" y puede no aparecer en una búsqueda; si los pasos anteriores no ubicaron una carpeta de GitHub, vaya a Biblioteca> Soporte de aplicaciones en Finder y verifique si la carpeta "GitHub para Mac" está allí.

   ![captura-de-pantalla-resultados-lupa](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-6.png)

   Haga click derecho en la carpeta "GitHub" y elija "Copiar 'GitHub'". La ruta de la carpeta GitHub ha sido copiada.
<br/> 
<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_3.png" alt="captura-de-pantalla-lupa" />
<figcaption>
  <span>En Windows puedes encontrar la carpeta con los archivos de nuestro repositorio de GitHub seleccionando la pestaña "Repository" del menu superior de GitHub Desktop y en el recuadro que se despliega seleccionar "show in explorer".</span>
  </figcaption>
</figure>
<br/> 

2. En la línea de comandos, escribe `cd`, seguido de espacio, seguido de la ruta a la carpeta GitHub (Command-v para pegar la ruta copiada en el paso previo). En la computadora de la autora, (logeada como *DrJekyll*) esto se ve de la siguiente manera:

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-7.png)

   El comando *cd* (**c**hange **d**irectory) le indica a la computadora que se localice en el lugar especificado por la ruta indicada, en este caso, la ruta a la carpeta GitHub creada por la instalación de GitHub Desktop.

3. En la línea de comandos, escribe el siguiente comando seguido de Enter:

	`gem install jekyll bundler`

	Es necesario esperar a que vuelva a aparecer el prompt para continuar con el siguiente paso.

4. La URL pública de su sitio tendrá la siguiente forma: http://amandavisconti.github.io/JekyllDemo/ (*amandavisconti* es el usuario de GitHub de la autora y *JekyllDemo* el nombre del sitio que ingresamos en este paso (*es posible pagar y usar su propia [URL personalizada](#section7-2), pero no lo cubriremos en este tutorial*). **Los sitios en mayúsculas y minúsculas *no* dirigen al mismo sitio web**, así que a diferencia del ejemplo **JekyllDemo** es recomendable elegir un nombre todo en minúsculas para asegurarse de que la gente lo escribe correctamente.

   En la línea de comandos, escribe lo siguiente (reemplace *JekyllDemo* con el nombre que desee para su sitio):

   `jekyll new JekyllDemo`

   Este comando le indica a *jekyll* que cree un *nuevo* (new) sitio instalando los archivos necesarios en la carpeta llamada *JekyllDemo*. **De ahora en adelante, llamaremos "carpeta del sitio web" a la carpeta creada en este paso (por ej., *JekyllDemo*).**

4. En la línea de comandos, escribe lo siguiente para ir a la carpeta del sitio web (en el resto del tutorial, reemplace *JekyllDemo* por el nombre elegido en el paso previo):

   `cd JekyllDemo` 

   Si miras en la carpeta *GitHub > JekyllDemo* en el explorador de archivos, verás una serie de archivos nuevos -los archvos que ejecutarán tu sitio web- que han sido instalados ([más abajo](#section4-2) explicaremos qué hace cada uno):

   ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-9.png)


## Ejecutar un sitio web localmente <a id="section3a"></a>

*Esta sección describe cómo ejecutar un sitio web ***localmente***. Esto significa que podrás cómo se ve tu sitio web en un navegador pero únicamente en tu computadora (esto es, localmente). Trabajar en una versión local de un sitio web quiere decir que el sitio es privado, nadie puede verlo todavía (el sitio no es público, nadie puede escribir la URL y verlo en su computadora).*

*Así que puedes experimentar todo lo que desees y publicarlo al mundo cuando esté listo. Además, una vez que el sitio esté publicado, puedes seguir experimentando localmente con nuevos contenidos, diseños, etc. y agregar estos cambios una vez que estés conforme con cómo se ven en el sitio local.*

1. En la línea de comandos, escribe  

    `bundle exec jekyll serve --watch`

   Éste es el comando que debes ejecutar cada vez que quieras visualizar tu sitio localmente. 

    *jekyll serve* le indica a la computadora que ejecute Jekyll localmente.

   *--watch* precedido de *bundle exec* le indica a Jekyll que busque cambios en los archivos del sitio web (por ejemplo, nuevos posts o páginas) y que los muestre al actualizar el navegador. **Una excepción** es el archivo _config.yml, que será explicado en detalle en la próxima sección (los cambios realizados en este archivo sólo se muestran luego de detener y reiniciar Jekyll).

2. Luego de escribir el comando previo, aparecerá en el terminal un proceso que no se detiene. ¿Recuerdas que si escribes algo en la línea de comandos mientras todavía se está ejecutando el comando previo se pueden ocasionar problemas? Ahora Jekyll está corriendo en esta línea de comandos, de manera que si deseas ejecutar comandos mientras visualizas tu sitio local, deberás abrir una nueva ventana de línea de comandos (ver la sección acerca del uso de la [línea de comandos](#section1-4))

	<figure>
	    <img src="https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-10.png" alt="captura-de-pantalla-errores-consola" />
	<figcaption>
	    <span>Las advertencias y mensajes de error provocados por cambios realizados por el usuario aparecen en la línea de comandos y son la mejor referencia a consultar cuando algo no funciona en nuestro sitio.</span>
	</figcaption>
	</figure>


3. Para detener la ejecución local de nuestro sitio, debemos presionar **control-c** (esto libera la línea de comandos para usarla nuevaente). Basta con ingresar `bundle exec jekyll serve --watch` nuevamente para volver a ejecutar el sitio localmente.

4. Para visualizar el sitio que se está ejecutando localmente, visita **localhost:4000** en tu navegador. Verás un sitio web Jekyll básico con texto predefinido:

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
<br/> 
<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_4.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>En Windows, al hacer clic derecho sobre el archivo .yml puede aparecer directamente la opción de editar el documento con Notepad++, en caso contrario debe elegirse la opción "abrir con" y seleccionar el editor de texto de una lista de programas.</span>
</figcaption>
</figure>
<br/> 
  
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

*Esta sección describirá como crear páginas o entradas de blog (o posts) en tu sitio web.*

**Páginas** y **entradas de blog** son dos tipos de contenido escrito pero con estilos diferentes. Las páginas son un tipo de contenido (como "Acerca de") que no están organizadas ni se muestran cronológicamente, sin embargo, pueden ser incluidas en el menú principal de tu sitio web; las entradas de blog están pensadas para ser utilizadas como contenido organizado por fecha de publicación. Los URLs (enlaces) para páginas y posts también son diferentes en forma predeterminada (pero tú puedes cambiar eso): la URLs de página se ven como *MySite.com/about/*, mientras que la URLs de entradas se ven como *MySite.com/2016/02/29/my-post-title.html*.

#### Creación en Markdown <a id="section5-1"></a>

Markdown es un lenguaje de marcado para dar formato a tus escritos para su lectura en la web: es un conjunto de símbolos, fáciles de recordar, que muestran dónde debe añadirse el formato del texto (por ejemplo, un # delante del texto significa que se le da formato como encabezado, mientras que un * significa que tendrá formato como elemento de lista con viñetas). Para Jekyll en particular, Markdown permite escribir páginas web y entradas de blog de una manera cómoda para los autores (por ejemplo, no es necesario buscar/añadir etiquetas HTML mientras se intenta escribir un ensayo), pero ese escrito se visualizará bien formateado en la web (es decir, convertido de texto a HTML).

No cubriremos Markdown en esta lección; si no estás familiarizado con él, puedes crear posts y páginas sin formato (es decir, sin negrita/italica, encabezados, lista enumeradas o viñetas). Pero es sencillo aprender a agregarlos: aquí hay una [guía de referencias kramdown](http://kramdown.gettalong.org/quickref.html) de markdown en inglés, también puedes consultar esta guía en [español](https://joedicastro.com/pages/markdown.html), así como la lección en [Programming Historian de Sarah Simpkin sobre el cómo y porque escribir con Markdown](https://programminghistorian.org/es/lecciones/introduccion-a-markdown). Consulta estos enlaces si quieres dar formato al texto(italica, , negrita, encabezados, listas enumeradas o viñetas), añadir hipervínculos, incrustar imágenes u otros archivos.

Asegúrate que la guía de referencias de Markdown que mires sea similar a "[kramdown](http://kramdown.gettalong.org/quickref.html)", porque es lo que admite GitHub Pages (donde alojaremos nuestro sitio web). (*There are [various "flavors" of Markdown](https://github.com/jgm/CommonMark/wiki/Markdown-Flavors) that have subtle differences in what various symbols do, but for the most part frequently used symbols like those that create heading formatting are the same—so you're actually probably okay using a markdown cheatsheet that doesn't specify it's kramdown, but if you're getting errors on your site using symbols that aren't included in kramdown might be why*).

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

*Ahora que ya sabes cómo añadir páginas y publicaciones a tu sitio, en esta sección moveremos tu sitio local a la Web para que otros puedan visitarlo.* **En este punto, estaremos haciendo una versión de tu sitio que será visible públicamente** *(tanto para motores de búsqueda como para cualquiera que conozca o encuentre casualmente el enlace).*

*[Anteriormente en esta lección,](#section1-2) instalamos la aplicación GitHub Desktop. Ahora la utilizaremos para mover los archivos de tu sitio a un servidor que los presentará como páginas web (GitHub Pages), que el público podrá visitar en línea. Esta será la primera vez en la que subiremos todos los archivos de tu sitio a la Web; en el futuro, utilizarás esta aplicación siempre que hayas realizado cambios en los archivos de tu sitio local y desees que esos cambios se vean reflejados en la versión pública del sitio (al final de esta sección encontrarás una [guía](#section8) con información útil para realizar esta tarea).*

1. Abre la aplicación GitHub Desktop y haz clic en el signo “+” (Mac) o en la pestaña “File” (Windows) que se encuentra en la esquina superior izquierda y haz clic en la opción “Add” (o “Add local repository…”) que aparece en la caja que se despliega.

2. Haz clic en el botón "Choose…" y selecciona la carpeta (*JekyllDemo* en nuestro ejemplo) que contiene los archivos de tu sitio local (si estás utilizando Mac y te resulta imposible encontrar esta carpeta, es posible que sea porque se halla oculta; [usa estas indicaciones](http://www.macobserver.com/tmo/article/mavericks-easily-make-user-library-folder-visible) para hacerla visible, y que de esta forma GitHub Desktop pueda ingresar a ella).

3. Luego haz clic en el botón "Create & Add Repository" (Mac) o "Add Repository" (Windows). Ahora verás una lista de los archivos en los que hayas realizado cambios (tanto sean adiciones o sustracciones de archivos o en ellos) desde la última vez en la que hayas copiado el código de tu sitio de tu computadora a GitHub (*en el caso de que todavía no hayas realizado este proceso, todos los archivos del repositorio aparecerán listados como nuevas adiciones*).

4. Completa el primer campo con una descripción de los cambios hayas realizado en tu sitio desde la última vez en que hayas subido tus archivos a GitHub (ten en cuenta que el espacio es limitado). Para este primer caso, un comentario breve como “Mi primer commit” será suficiente; en el futuro, es posible que desees ser más descriptivo para ayudarte a localizar cuándo fue realizado un determinado cambio — por ejemplo, escribiendo “Se añade nueva página de contacto”.

   Puedes utilizar el área de texto más grande que se encuentra debajo si deseas escribir un mensaje más largo (*opcional*).

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_5.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Captura de pantalla de GitHub Desktop en Windows. En la columna izquierda se pueden observar los cambios realizados, los campos de textos para completar y el botón azul que confirma el commit.</span>
</figcaption>
</figure>
<br/>	
<figure>
<img src="https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-23.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Captura de pantalla de GitHub Desktop en Mac.</span>
</figcaption>
</figure>
<br/>	

5. En la sección superior de la ventana de GitHub Desktop, haz clic en el tercer ícono desde la izquierda (el mensaje “Add a branch” debería aparecer si colocas el curson encima de él) (Mac), o en recuadro “current branch” y luego el botón “New branch” (Windows). Luego, escribe *gh-pages* en el campo “Name” y haz clic en el botón “Create branch”.

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_6.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Captura de pantalla de GitHub Desktop en Windows.</span>
</figcaption>
</figure>
<br/>	
<figure>
<img src="https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-24.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Captura de pantalla de GitHub Desktop en Mac.</span>
</figcaption>
</figure>
<br/>	  

*A partir de este punto el proceso para publicar nuestro sitio en GitHub Pages difiere entre Windows y Mac*

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

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_7.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Captura de pantalla de GitHub Desktop en Windows.</span>
</figcaption>
</figure>
<br/>

7. Haz clic en el botón “View on GitHub” que aparece en la parte central de la ventana, en tercer lugar.

8. Ya en GitHub, debes cambiar las opciones de visibilidad de tu repositorio para hacerlo público, para esto, accede a la sección de “Settings” y baja hasta el recuadro titulado “Danger Zone”. Haz clic en el botón “Change visibility” y seleccionar la opción “Make public”. 

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_8.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Ubicacipon de la opciones (settings) del repositorio en GitHub.</span>
</figcaption>
</figure>
<br/>
<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_9.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>"Danger zone" de las opciones de GitHub.</span>
</figcaption>
</figure>
<br/>

9. Arriba del recuadro de Danger Zone se encuentran las opciones de GitHub Pages. Allí debes cambiar la opción “Source” y seleccionar la rama (branch) “gh-pages”. 

<figure>
<img src="https://raw.githubusercontent.com/hdcaicyt/hdcaicyt.github.io/master/assets/img/capturas_jekyll_windows/jekyll_10.png" alt="captura-de-pantalla-lupa" />
<figcaption>
	  <span>Sección de GitHub Pages en las opciones de GitHub.</span>
</figcaption>
</figure>
<br/> 



**Ambos**

10. Ahora ya puedes visitar tu sitio web (¡y compartir el enlace para que otros lo vean!). La URL sigue la estructura de *tu nombre de usuario de GitHub PUNTO github.io BARRA nombre de tu sitio web BARRA*. (por ejemplo, la URL del sitio de ejemplo de la autora es [amandavisconti.github.io/JekyllDemo/](amandavisconti.github.io/JekyllDemo/)).

## Poniéndonos elegantes <a id="section7"></a>

*Esta lección no cubre el trabajo avanzado para personalizar la apariencia de tu sitio web ni la adición de nuevas funcionalidades, sin embargo, aquí te acercamos algo de información para que puedas comenzar a investigar por tu cuenta.* 

### Diseño visual <a id="section7-1"></a>

El diseño visual de un sitio web es referido usualmente como su *tema* (aunque propiamente, un tema es el conjunto del código y los archivos de imagen que generan un cambio importante en la apariencia de un sitio web. 

Puedes personalizar el tema de tu sitio realizando cambios en los archivos que se encuentran en las carpetas *_sass* y *css*. (lamentablemente, en sus versiones más recientes, Jekyll comenzó a usar SASS en lugar de CSS, lo que hace que sea un poco más difícil para no-diseñadores aprender a personalizarlas). También puedes añadir (y luego personalizar, si lo deseas) un tema creado por alguien más, a los que puedes acceder realizando una búsqueda para “Jekyll themes” o en alguno de los siguientes recursos:  

- Tema ["Ed" para ediciones digitales mínimas](https://elotroalex.github.io/ed/), de Alex Gil  (gratis)
- Tema ["Digital Edition"](https://github.com/emory-libraries-ecds/digitaledition-jekylltheme), de Rebecca Sutton Koese (gratis)
- El directorio de [Jekyll Themes](http://jekyllthemes.org/) (gratis)
- [JekyllThemes.io](http://jekyllthemes.io/) (gratis y pago)

### Funcionalidad <a id="section7-2"></a>

- Los [plugins de Jekyll](http://jekyllrb.com/docs/plugins/) te permiten añadir pequeños segmentos de código que permiten sumar funcionalidades a tu sitio, tales como [realizar búsquedas de texto](https://github.com/PascalW/jekyll_indextank), [permitir el uso de emojis](https://github.com/yihangho/emoji-for-jekyll), o [crear nubes de palabras](https://gist.github.com/ilkka/710577). 

- Si deseas alojar tu sitio en GitHub Pages, como lo hicimos en esta lección, solo podrás utilizar los plugins de Jekyll que ya están incluidos en las gemas de GitHub Pages que instalamos (aquí tienes una [lista completa de lo que hemos instalado](https://pages.github.com/versions/), cuando añadimos la gema de GitHub Pages a nuestro Gemfile anteriormente).

- Si decides alojar tu sitio de Jekyll en otro servidor que no sea GitHub Pages, puedes utilizar cualquier plugin de Jekyll (las instrucciones para alojar tu sitio varían entre diferentes proveedores de hosting web, y no las desarrollaremos en esta lección, pero [aquí](http://jekyllrb.com/docs/plugins/) tienes una página que explica cómo instalar plugins, una vez que poseas tu sitio con hosting propio). Puedes realizar una búsqueda utilizando “Jekyll plugin” y añadir la funcionalidad que necesites para explorar si hay una herramienta apropiada disponible, o revisar la [documentación sobre plugins](http://jekyllrb.com/docs/plugins/) en el sitio oficial de Jekyll. 
  
- También puedes mantener GitHub Pages como hosting gratuito para tu sitio, pero darle un **nombre de dominio personalizado** (los dominios pueden ser adquiridos por un costo razonable -que suele rondar los 10 dólares anuales- a través de un registrador de dominios como [NearlyFreeSpeech.net](https://www.nearlyfreespeech.net/services/domains)). Por ejemplo, el blog de la autora de este tutorial, [LiteratureGeek.com](http://literaturegeek.com/), fue construido con Jekyll y está alojado en GitHub Pages, al igual que sitio que construiste en esta lección, pero utiliza un dominio personalizado que la autora compró y configuró para que condujera a su sitio web. Las instrucciones para establecer un dominio personalizado pueden ser encontradas [aquí](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).   


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
* Una vez que el commit haya finalizado, haz clic en el botón “Sync” en la asección superior derecha de la pantalla (Mac) o en el botón “Push origin” que aparece destacado en azul (Windows).
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
