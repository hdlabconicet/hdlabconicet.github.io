---
layout: page
title: Instalación de Jekyll y dependencias para la creación de sitios estáticos con Jekyll y GitHub Pages
type: texto
permalink: /tutorial-jekyll-github-pages/
---

En este tutorial, vamos a:
- instalar algunos programas
- usar la línea de comandos para instalar algunas cosas que solo se pueden instalar de esa manera
- ver y personalizar una versión privada de nuestro sitio web
- hacer que nuestro sitio web sea accesible públicamente en Internet. 

## Antes de la instalación

En esta sección, vamos a asegurarnos de tener todo lo necesario para crear un sitio web estático con Jekyll y Github Pages. Para eso, vamos a abordar qué sistema operativo es posible usar (es decir, Mac / Windows / Linux), crear una cuenta de GitHub, instalar la aplicación GitHub, aprender por qué es necesario usar un "editor de texto" para trabajar en nuestro sitio web y cómo usar la línea de comandos.

Todos los elementos que vamos a instalar son herramientas de desarrollo web estándares y confiables, por lo que no es indispensable saber exactamente qué hace cada una antes de instalarla. Trataremos de brindar más información sólo para aquellos elementos que es necesario comprender en profundidad con una breve explicación de cada uno, acompañada de un enlace a más información en caso de que desee saber más sobre lo que está poniendo en su computadora.

### Sistemas operativos

Este tutorial está destinado a usuarios de Windows y Mac. Jekyll también funciona en Linux; sin embargo, a fines pedagógicos, este tutorial utiliza el software GitHub Desktop (disponible para Windows y Mac únicamente) y los usuarios de Linux tienen que usar git en la línea de comandos (no abordado en este tutorial).

Jekyll no es oficialmente compatible con Windows, lo que significa que la documentación oficial de Jekyll (las páginas que guían a través de la configuración y que explican su funcionamiento) no aborda el uso de Windows. Este tutorial se basa en [las instrucciones de Windows de David Burela](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/) para las partes de la sección ["Instalación de dependencias"](#section2) en las que los usuarios de Windows deben hacer algo diferente. El resto del tutorial debería funcionar igual para los usuarios de Windows y Mac, aunque las capturas de pantalla que mostramos son todas de una Mac (por lo que pueden verse un poco diferentes para un usuario de Windows).

### Cuenta de usuario de GitHub

*La cuenta de usuario de GitHub nos permite alojar nuestro sitio web (ponerlo a disposición para que otros lo visiten) de forma gratuita en GitHub (desarrollaremos esto más tarde). Como beneficio adicional, también nos permite hacer un seguimiento de las versiones de nuestro sitio y su escritura a medida que crece o cambia con el tiempo.*

1. Visite [GitHub.com](https://github.com/) y haga clic en el botón verde "Sign up" (Registrarse) en la esquina superior derecha. Defina el nombre de usuario deseado. El nombre de usuario es visible para otros usuarios, nos identifica en GitHub y también es parte de la URL de nuestro sitio. Por ejemplo, si el nombre de usuario de GitHub es *hdcaicyt*, la URL del sitio de será http://hdcaicyt.github.io/. (*Tenga en cuenta que uno también puede comprar su propio nombre de dominio y usarlo para este sitio, pero eso no se tratará en este tutorial*). Escriba su dirección de correo electrónico y defina una contraseña y luego haga clic en "Create an account" (Crear una cuenta).
2. En la página siguiente, haga clic en el botón "Choose" (Seleccionar) junto a la opción de plan "Free" (Gratis). Ignore la casilla "Help me set up an organization next" (Ayuda para crear una organización) y haga clic en "Finish sign up" (Finalizar registro).
3. *Opcional*: puede visitar https://github.com/settings/profile para agregar un nombre completo (puede ser su nombre real, nombre de usuario de GitHub u otra cosa) y más información de perfil público, si lo desea.

### <button class="balloon" data-balloon-pos="up" data-balloon-length="large" data-balloon="¿Vamos a usar esto en nuestro curso? Por lo que recuerdo, no, vamos a usar la línea de comandos, así que no sería necesario">Aplicación GitHub Desktop</button> {#sección1-2}

*La aplicación GitHub Desktop facilitará la actualización de nuestro sitio web una vez que esté terminado: es una herramienta visual sencilla y más intuitiva que la línea de comandos.*

1. Visite el [sitio de GitHub Desktop](https://desktop.github.com/) y haga clic en el botón "Download GitHub Desktop" (Descargar GitHub Desktop) para descargar el software de GitHub Desktop a su computadora (disponible para Windows y Mac solamente; los usuarios de Linux deben usar git a través de la línea de comandos, que no será tratada en este tutorial).
2. Una vez que el archivo se haya descargado por completo, descomprímalo y siga las siguientes instrucciones para instalar GitHub Desktop.
3. Haga click en "Sign in" (Registrarse) e ingrese el nombre de usuario y la contraseña para la cuenta de GitHub.com que creó siguiendo los pasos anteriores. Haga clic en "Continue" (Continuar).
4. Ingrese el nombre y la dirección de correo electrónico a los que desea asociar su sitio.
5. En la barra de menú, haga clic en "Github Desktop > Install Command Line Tool" (Instalar herramienta de línea de comandos) e ingrese el nombre de usuario y la contraseña de su computadora, <button class="balloon" data-balloon-pos="up" data-balloon-length="large" data-balloon="A partir de acá no pude seguir con la instalacion porque me dio error"> luego haga clic en el botón "Install Helper" (Instalar ayudante). Después de recibir el mensaje de que todas las herramientas de línea de comandos se han instalado correctamente, haga clic en continuar.</button>
6. <button class="balloon" data-balloon-pos="up" data-balloon-length="large" data-balloon="Desactualizado?">La última página preguntará "Which repositories would you like to use?" (¿Qué repositorios le gustaría usar?). Ignórelo y haga clic en el botón "Done" (Listo).</button>
7. <button class="balloon" data-balloon-pos="up" data-balloon-length="large" data-balloon="Desactualizado?">*Opcional:* siga el paso a paso de GitHub Desktop que aparecerá (esto no es necesario; cubriremos todo lo que necesite hacer con GitHub en este tutorial).</button>

### Editor de texto

Es necesario descargar e instalar un programa de "editor de texto" para realizar pequeñas personalizaciones al código de nuestro sitio Jekyll. Algunas buenas <button class="balloon" data-balloon-pos="up" data-balloon-length="large" data-balloon="Agregar jEdit si dedicimos usarlo para XML TEI">opciones</button> gratuitas incluyen [Atom](https://atom.io/), [SublimeText](https://www.sublimetext.com/3), [Notepad ++](https://notepad-plus-plus.org/) para Windows o [BBedit](http://www.barebones.com/products/bbedit) para Mac. Los procesadores de textos, como Microsoft Word o Word Pad, no son una buena opción porque es fácil olvidar cómo formatear y guardar el archivo, agregando accidentalmente formatos y caracteres extra y/o invisibles que pueden generar problemas en el sitio. Por eso es mejor usar programas que puedan guardar lo que escribimos como texto plano (por ejemplo, HTML, Markdown).

### Línea de comandos

La línea de comandos es una forma de interactuar con la computadora usando texto: permite escribir comandos para acciones de lo más simples como "mostrar una lista de los archivos en este directorio" o "cambiar quién tiene permiso para acceder a este archivo" y para comportamientos más complejos. A veces hay buenas formas visuales para efectuar acciones en la computadora (por ejemplo, la aplicación GitHub Desktop [que instalamos arriba](#sección1-2)), otras veces tendremos que usar la línea de comandos para escribir comandos para indicarle qué hacer a la computadora. Si desea más información de la que se proporciona en este tutorial, The Programming Historian tiene una [lección que explora en profundidad la línea de comandos](https://programminghistorian.org/es/lecciones/introduccion-a-bash) por Ian Milligan y James Baker, pero aquí cubriremos todo lo necesario para completar la creación de nuestro sitio web y solo usaremos la línea de comandos cuando sea necesario o mucho más fácil que una interfaz visual.

Mientras la línea de comandos usa comandos de texto, la mayoría de los usuarios de computadora utilizan una "interfaz gráfica de usuario" (también conocida como GUI, "graphical user interface"). Cualquier programa en el que las interacciones usuario-computadora se dan a través de una interfaz visual que contiene íconos, imágenes, hacer clic con el mouse, etc. es una GUI. Muchas veces es más simple y rápido escribir (o cortar y pegar de un tutorial) una serie de comandos en la línea de comandos, que hacer lo mismo usando una GUI. Otras veces, hay cosas para las cuales nadie ha creado una GUI y solo es posible hacerlas a través de la línea de comandos.

El programa de línea de comandos predeterminado se llama "Terminal" en Mac (ubicado en *Aplicaciones> Utilidades*) y "Símbolo del sistema" (o cmd), "Windows Power Shell" o "Git Bash" en Windows (estas son tres opciones diferentes que difieren cada una en el tipo de comandos que aceptan; las veremos en detalle más adelante).

A continuación se muestra cómo se ve una ventana de línea de comandos en Mac (usando Terminal). Verá algo como el *Macbook-Air:~DrJekyll$*. Ese texto se llama "prompt" (solicitud, porque solicita que el usuario ingrese comandos). En esta captura de pantalla, *Macbook-Air* es el nombre de la computadora de la autora de este tutorial y *DrJekyll* es la cuenta de usuario actualmente conectada (el prompt usará diferentes nombres para su computadora y nombre de usuario).

 ![captura-de-pantalla-linea-de-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-0.png)

Siempre que en este tutorial pidamos abrir una ventana de línea de comandos e ingresar comandos, tenga en cuenta lo siguiente:

1. **Los comandos que debe escribir (o copiar / pegar) en la línea de comandos tienen el siguiente formato:** `ejemplo de formato de código`. Cada fragmento de código formateado debe copiarse y pegarse en la línea de comando, seguido de Enter.

2. **Deje que los procesos de instalación se ejecuten *completamente* antes de ingresar nuevos comandos.** A veces, escribir un comando y presionar enter produce un resultado instantáneo; otras veces, una gran cantidad de texto comenzará a llenar la ventana de la línea de comandos o parecerá que la línea de comandos no está haciendo nada pero algo está sucediendo detrás de escena, como descargar un archivo. Por eso es importante que **al escribir un comando y presionar Enter, esperemos que ese comando termine por completo *antes de escribir otra cosa***, de lo contrario, podríamos detener un proceso por la mitad y generar problemas. 
¿Cómo saber cuándo se ha completado un comando? Cuando la línea de comandos emite nuevamente el prompt (por ejemplo, *Macbook-Air:~DrJekyll$* en la computadora de la autora de este tutorial). Vea la captura de pantalla a continuación para ver un ejemplo de ingreso de un comando, seguido de un texto que le muestra lo que estaba sucediendo mientras se procesaba ese comando (y a veces le pedía que hiciera algo, como ingresar su contraseña), y finalmente la reaparición del prompt para hacerle saber que está bien escribir algo más.

   ![captura-de-pantalla-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

Si necesitamos hacer otra cosa en la línea de comandos y no queremos esperar, podemos abrir una nueva ventana de línea de comandos (en una Mac, presione command-N o vaya a *Shell > Nueva ventana > Nueva ventana con Configuración-Básica*) y trabajar allí mientras esperamos que finalice el proceso en la otra ventana de línea de comandos.

3. Algo muy útil cuando escribimos los mismos comandos muchas veces o queremos recordar algo que escribimos antes: podemos presionar **↑** (flecha hacia arriba) en la línea de comando para desplazarnos por los comandos recientemente escritos y presionar Enter después de que aparezca el que deseamos usar.

## Instalación de dependencias {#section2}

*A continuación, vamos a instalar algunas dependencias de software (es decir, programas de los que depende Jekyll para poder trabajar) usando la línea de comandos ya que no hay una interfaz visual para hacerlo. Esta sección se divide en instrucciones para para [Windows](#sectionWindows) e instrucciones para [Mac](#sectionMac), así que vaya a [En Mac](#sectionMac) ahora si está usando Mac.**

### En Windows {#sectionWindows}

*Las instrucciones para usuarios de Windows difieren de las de los usuarios de Mac en esta sección "Instalación de dependencias". Solo haga lo siguiente si está utilizando Windows.*

1. Necesitamos una herramienta de línea de comandos que reconozca los mismos comandos que las computadoras Mac y Linux (es decir, los sistemas operativos Unix). Visite [https://git-scm.com/downloads](https://git-scm.com/downloads) y haga clic en el enlace "Windows". Una vez que haya terminado la descarga, haga doble clic en el archivo descargado y siga los pasos para instalar Git Bash (deje todas las opciones como están).

2. Abra "Cmd" (abra su Menú de inicio y busque "Cmd" y aparecerá una aplicación que puede abrir).

3. Chocolatey es un "administrador de paquetes": un programa que le permite descargar e instalar fácilmente software de código abierto en Windows desde la línea de comandos. Ahora vamos a instalar Chocolatey (*asegúrese de resaltar y copiar todo el texto a continuación como un conjunto y no como líneas separadas*). Ingrese el código que se muestra en los pasos a continuación (*`el código está formateado como este`*), siguiendo [las sugerencias de uso de la línea de comandos de arriba](# sección1-4):

   `@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`

4. Cierre "Cmd" y abra "Git Bash" (que instalamos recién). **De ahora en adelante, vamos a usar Git Bash cada vez que se mencionemos la línea de comandos.**

5. Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby). Ahora instalaremos Ruby (esto tomará unos minutos):

   `choco install ruby -y`

6. Cierre "Git Bash" y reinícielo (Ruby no funcionará si no se reinicia).

7. [Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web (es decir, "generación del sitio"), simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Ahora instalaremos Jekyll (si Windows Security muestra una ventana emergente de advertencia, ignórela):

   `gem install jekyll`

**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! Omita los siguientes pasos (que son solo para usuarios de Mac)**

### En Mac {#sectionMac}

*Si está utilizando una computadora Mac, siga las instrucciones a continuación.*

Abra una ventana de línea de comandos (*Aplicaciones > Utilidades > Terminal*) e ingrese el código que se muestra en los pasos a continuación (*`el código está formateado así`*) siguiendo [las sugerencias de uso de la línea de comandos detalladas más arriba](#sección1-4).

### Herramientas de línea de comandos

Primero vamos a instalar las "herramientas de línea de comandos" de Mac para poder usar [Homebrew](http://brew.sh/) (que instalaremos a continuación). Homebrew permite descargar e instalar desde la línea de comandos software de código abierto (es un "administrador de paquetes"), lo que facilitará la instalación de Ruby (el lenguaje en el que se basa Jekyll).

1. En Terminal, pegue el siguiente código y presione Enter:

`xcode-select --install`

Va a aparecer un mensaje como el siguiente, seguido de una ventana emergente:

 ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-1.png)

En la ventana emergente, haga clic en "Install":

![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.png)

Una vez que termine la instalación, va a aparecer un mensaje de instalación exitosa:

![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.5.png)

### Homebrew

Al terminar la instalación de las herramientas de la línea de comandos, regrese a la ventana de la línea de comandos y copie el siguiente texto a fin de instalar [Homebrew](http://brew.sh/):

``` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Vaya presionando Enter cuando sea necesario e ingrese la contraseña de su computadora cuando se le solicite. A modo de referencia, mostramos una captura de pantalla del comando ingresado en la línea de comandos de la autora del tutorial, seguido de todo el texto que apareció (incluido el mensaje para presionar Enter e ingresar la contraseña).

![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

### Ruby & Ruby Gems

Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby).

En la línea de comandos:

`brew install ruby` 

Espere hasta que el prompt vuelva a aparecer para ingresar el siguiente comando:

`gem install rubygems-update`

### NodeJS

[NodeJS](https://nodejs.org/en/) (o Node.js) es una plataforma de desarrollo (más específicamente, es un "entorno de desarrollo") que, por ejemplo, ayuda a que Javascript se ejecute más rápido.

En la línea de comandos, ingrese:

`brew install node`

### Jekyll

[Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web (es decir, "generación del sitio"), simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. 

En la línea de comandos, ingrese:

`gem install jekyll`


**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web!**



