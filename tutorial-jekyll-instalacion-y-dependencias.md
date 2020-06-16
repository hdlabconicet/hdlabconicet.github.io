---
layout: page
title: Instalación de Jekyll y dependencias para crear sitios estáticos con Jekyll y GitHub Pages
type: texto
permalink: /tutorial-jekyll-github-pages/
---

Este tutorial es una traducción al español y adaptación de Building a static website with Jekyll and GitHub pages, de Amanda Visconti, publicado originalmente en inglés en [The Programming Historian] (https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages), (2016-04-18).

Esta lección está dirigida a quienes deseen instalar todos los componentes para crear un sitio web totalmente gratuito, fácil de mantener, preservable y seguro, y sobre el que se tenga control total.
Requisitos: una computadora (Mac / Windows / Linux, aunque esta lección no cubre algunos aspectos del uso de Linux), la capacidad de descargar e instalar software en tu computadora, una conexión a Internet soporte la descarga de software. Los usuarios han informado que necesitan entre 1 y 3 horas para completar toda la lección.

Vamos a:
- instalar algunos programas.
- usar la línea de comandos para instalar dependencias de esos programas.


## Contenidos

- [Antes de la instalación](#section1)
	- [Sistemas operativos](#section1-0)
	- [Cuenta de usuario de Github](#section1-1)
	- [Editor de texto](#section1-3)
	- [Línea de comandos](#section1-4)
- [Instalación de dependencias](#section2)
	- [En Windows](#sectionWindows)
	- [En Mac](#sectionMac)

## Antes de la instalación  {#section1}

En esta sección vamos a asegurarnos de tener todo lo necesario para crear un sitio web estático con Jekyll y Github Pages. Para eso, vamos a abordar:

- [qué sistema operativo es posible usar (es decir, Mac / Windows / Linux)](#section1-0)
- [crear una cuenta de GitHub](#section1-1)
- [por qué es necesario usar un "editor de texto" para trabajar en nuestro sitio web](#section1-3)
- [cómo usar la línea de comandos](#section1-4)

Todos los elementos que vamos a instalar son herramientas de desarrollo web estándar. Se trata de herramientas confiables, por lo que no es indispensable saber exactamente qué hace cada una de ellas. Brindaremos una breve explicación de los elementos que es necesario comprender en profundidad y dejaremos enlaces, en caso de desear saber más sobre lo que se está instalando.

### Sistemas operativos  {#section1-0}

Este tutorial está destinado a usuarios de Windows y Mac. Jekyll también funciona en Linux; sin embargo, a fines pedagógicos, este tutorial utiliza para línea de comandos el software GitHub Desktop (disponible para Windows y Mac únicamente); los usuarios de Linux tienen que usar [git] (https://git-scm.com/docs/gittutorial) para ello (no abordado en este tutorial).

Jekyll no es oficialmente compatible con Windows, lo que significa que la documentación oficial de Jekyll (las páginas que guían a través de la configuración y que explican su funcionamiento) no aborda el uso de Windows. Este tutorial se basa en [las instrucciones de Windows de David Burela](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/) para las partes de la sección [Instalación de dependencias](#section2) en las que los usuarios de Windows deben hacer algo diferente. El resto del tutorial debería funcionar igual para los usuarios de Windows y Mac, aunque las capturas de pantalla que mostramos son todas de una Mac (por lo que pueden verse un poco diferentes en Windows).

### Cuenta de usuario de GitHub  {#section1-1}

*La cuenta de usuario de GitHub nos permite alojar nuestro sitio web (ponerlo a disposición para que otros lo visiten) de forma gratuita en GitHub. Como beneficio adicional, también nos permite hacer un seguimiento de las versiones de nuestro sitio y su escritura a medida que crece o cambia con el tiempo.*

1. Visita [GitHub.com](https://github.com/) y haz clic en el botón verde "Sign up" (Registrarse). 
2. En la página siguiente, define el nombre de usuario deseado. El nombre de usuario es visible para otros usuarios, nos identifica en GitHub y también es parte de la URL de nuestro sitio. Por ejemplo, si el nombre de usuario de GitHub es *hdcaicyt*, la URL del sitio de será http://hdcaicyt.github.io/. (*Tenga en cuenta que uno también puede comprar su propio nombre de dominio y usarlo para este sitio, pero eso no se tratará en este tutorial*). Escribe una dirección de correo electrónico de uso habitual y define una contraseña que contenga al menos un número y una letra minúscula. 
3. En el recuadro "Verify your account", presiona el botón "Verify" (Verificar). Usa las flechas para poner la imagen en el sentido correcto. Finalmente haga clic en "Select a plan" (Seleccionar un plan).
4. En la página siguiente, haz clic en el botón "Choose Free" (Seleccionar gratis).
5. Bajea hasta el final de la siguiente página y haz clic en "Complete Setup" (Completar configuración).
6. Ve a tu email y abre el de Github (si no aparece en la bandeja de entrada, búscalo en correo no deseado). Haz clic en el botón "Verify email address" (Verificar dirección de email).
7. *Opcional*: puedes visitar https://github.com/settings/profile para agregar un nombre completo (puede ser tu nombre real, nombre de usuario de GitHub u otra cosa) y más información de perfil público, si lo deseas.

### Editor de texto  {#section1-3}

Es necesario descargar e instalar un editor de texto para realizar pequeñas personalizaciones al código de nuestro sitio Jekyll. Algunas buenas opciones gratuitas incluyen [jEdit](www.jedit.org), [Atom](https://atom.io/), [SublimeText](https://www.sublimetext.com/3), [Notepad ++](https://notepad-plus-plus.org/) para Windows o [BBedit](http://www.barebones.com/products/bbedit) para Mac. Los procesadores de texto, como Microsoft Word o Word Pad, no son una buena opción porque es fácil olvidar cómo formatear y guardar el archivo, agregando accidentalmente formatos y caracteres extra y/o invisibles que pueden generar problemas en el sitio. Por eso es mejor usar programas que puedan guardar lo que escribimos como texto plano (por ejemplo, HTML o Markdown).

### Línea de comandos  {#section1-4}

La línea de comandos es una forma de interactuar con la computadora usando texto: permite escribir comandos para llevar a cabo acciones de lo más simples como "mostrar una lista de los archivos en este directorio" o "cambiar quién tiene permiso para acceder a este archivo", así como para comportamientos más complejos. A veces hay buenas alternativas visuales para efectuar acciones en la computadora (por ejemplo, la aplicación GitHub Desktop [que instalamos arriba](#section1-2)), otras veces tendremos que usar la línea de comandos para indicarle qué hacer a la computadora. Si deseas más información de la que se proporciona en este tutorial, [The Programming Historian](https://programminghistorian.org/es/) tiene una [lección que explora en profundidad la línea de comandos](https://programminghistorian.org/es/lecciones/introduccion-a-bash), pero aquí cubriremos todo lo necesario para completar la creación de nuestro sitio web y solo usaremos la línea de comandos cuando sea necesario o más sencillo que una interfaz visual.

Mientras la línea de comandos usa comandos de texto, la mayoría de los usuarios de computadora utilizan una "interfaz gráfica de usuario" (también conocida como GUI, "graphical user interface"). Cualquier programa en el que las interacciones usuario-computadora se dan a través de una interfaz visual que contiene íconos, imágenes, hacer clic con el mouse, etc. es una GUI. ¿Por qué usaríamos la línea de comandos si existen las GUI? Muchas veces es más simple y rápido escribir (o cortar y pegar de un tutorial) una serie de comandos en la línea de comandos que hacer lo mismo usando una GUI. Otras veces, hay cosas para las cuales nadie ha creado una GUI y solo es posible hacerlas a través de la línea de comandos.

El programa de línea de comandos predeterminado se llama "Terminal" en Mac (ubicado en *Aplicaciones > Utilidades*) y "Cmd" (o "Símbolo del sistema"), "Windows Power Shell" o "Git Bash" en Windows (estas son tres opciones diferentes que difieren cada una en el tipo de comandos que aceptan).

A continuación, se muestra cómo se ve una ventana de línea de comandos en Mac (usando Terminal). Verás algo como el *Macbook-Air:~DrJekyll$*. Ese texto se llama "prompt" ("solicitud", porque solicita que el usuario ingrese comandos). En esta captura de pantalla, *Macbook-Air* es el nombre de la computadora de la autora de este tutorial en inglés y *DrJekyll* es la cuenta de usuario actualmente conectada (el prompt usará diferentes nombres para su computadora y nombre de usuario).

![captura-de-pantalla-linea-de-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-0.png)

Siempre que en este tutorial pidamos abrir una ventana de línea de comandos e ingresar comandos, ten en cuenta lo siguiente:

1. **Los comandos que debes escribir (o copiar / pegar) en la línea de comandos tienen el siguiente formato:** `ejemplo de formato de código`. Cada fragmento de código formateado debe copiarse y pegarse en la línea de comandos, seguido de "Enter".

2. **Debes dejar que los procesos de instalación se ejecuten *completamente* antes de ingresar nuevos comandos.** A veces, escribir un comando y presionar "Enter" produce un resultado instantáneo; otras veces, una gran cantidad de texto comenzará a llenar la ventana de la línea de comandos o parecerá que la línea de comandos no está haciendo nada pero algo está sucediendo detrás de escena, como descargar un archivo. Por eso es importante que **al escribir un comando y presionar Enter, esperemos que ese comando termine por completo *antes de escribir otra cosa***, de lo contrario, podríamos detener un proceso por la mitad y generar problemas. 
    {0}. ¿Cómo saber cuándo se ha completado un comando? Cuando la línea de comandos emite nuevamente el "prompt" (por ejemplo, *Macbook-Air:~DrJekyll$* en la computadora de la autora de este tutorial). La captura de pantalla a continuación muestra un ejemplo de ingreso de un comando, seguido de un texto que le muestra lo que estaba sucediendo mientras se procesaba ese comando (y a veces le pedía que hiciera algo, como ingresar su contraseña) y finalmente la reaparición del "prompt" para hacerle saber que ya puede escribir algo más.

    ![captura-de-pantalla-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

    Si necesitamos hacer otra cosa en la línea de comandos y no queremos esperar, podemos abrir una nueva ventana de línea de comandos (en una Mac, presionar ⌘-N o ir a *Shell > Nueva ventana > Nueva ventana con Configuración-Básica*) y trabajar allí mientras esperamos que finalice el proceso en la otra ventana de línea de comandos.

3. Algo muy útil cuando escribimos los mismos comandos muchas veces o queremos recordar algo que escribimos antes: podemos presionar **↑** (flecha hacia arriba) en la línea de comandos para desplazarnos por los comandos recientemente escritos y presionar "Enter" después de que aparezca el que deseamos usar.

## Instalación de dependencias {#section2}

*A continuación, vamos a instalar algunas dependencias de software (es decir, programas de los que depende Jekyll para poder trabajar) usando la línea de comandos ya que no hay una interfaz visual para hacerlo. Esta sección se divide en instrucciones para Windows e instrucciones para Mac, así que ve a la sección de [instalación de dependencias en Mac](#sectionMac) si estás usando Mac.*

### En Windows {#sectionWindows}

*En esta sección, las instrucciones para usuarios de Windows difieren de las de los usuarios de Mac. Solo haz lo siguiente si estás utilizando Windows.*

1. Antes que nada, necesitamos una herramienta de línea de comandos que reconozca los mismos comandos que las computadoras Mac y Linux (es decir, los sistemas operativos Unix). Visita [https://git-scm.com/downloads](https://git-scm.com/downloads) y haz clic en el enlace "Windows". Una vez que hayas terminado la descarga, haz doble clic en el archivo descargado y sigue los pasos para instalar Git Bash (deja todas las opciones como están).

2. Abre "Cmd" (abre el Menú de inicio y busca "Cmd" y aparecerá una aplicación que puedes abrir).

3. Chocolatey es un "administrador de paquetes": un programa que te permite descargar e instalar fácilmente software de código abierto en Windows desde la línea de comandos. Ahora vamos a instalar Chocolatey (*asegúrate de resaltar y copiar todo el texto a continuación como un conjunto y no como líneas separadas*). Ingresa el código que se muestra en los pasos a continuación (`el código está formateado como este`), siguiendo [las sugerencias de uso de la línea de comandos vistas arriba](#section1-4):

   `@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`

4. Cierra "Cmd" y abre "Git Bash" (que instalamos recién). **De ahora en adelante, vamos a usar Git Bash cada vez que mencionemos la línea de comandos.**

5. Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby). Ahora instalaremos Ruby (esto tomará unos minutos):

   `choco install ruby -y`

6. Cierra "Git Bash" y reinícialo (Ruby no funcionará si no se reinicia).

7. [Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Ahora instalaremos Jekyll (si Windows Security muestra una ventana emergente de advertencia, ignórala):

   `gem install jekyll`

**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! Omita los siguientes pasos (que son solo para usuarios de Mac).**

### En Mac {#sectionMac}

*Si estás utilizando una computadora Mac, sigue las instrucciones a continuación.*

Abre una ventana de línea de comandos (*Aplicaciones > Utilidades > Terminal*) e ingresa el código que se muestra en los pasos a continuación (`el código es el texto que aparece formateado así`) siguiendo [las sugerencias de uso de la línea de comandos detalladas más arriba](#section1-4).

### Herramientas de línea de comandos  {#section2-1}

Primero vamos a instalar las "herramientas de línea de comandos" de Mac para poder usar [Homebrew](http://brew.sh/) (que instalaremos a continuación). Homebrew permite descargar e instalar desde la línea de comandos software de código abierto (es un "administrador de paquetes"), lo que facilitará la instalación de Ruby (el lenguaje en el que se basa Jekyll).

En "Terminal", pega el siguiente código y presiona Enter:

`xcode-select --install`

Va a aparecer un mensaje como el siguiente, seguido de una ventana emergente:

![captura-de-pantalla-popup](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-1.png)

![captura-de-pantalla-popup-instalar](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.png)

En la ventana emergente, haz clic en "Install".

Una vez que termine la instalación, va a aparecer un mensaje de instalación exitosa:

![captura-de-pantalla-fin-instalacion](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.5.png)

### Homebrew

Al terminar la instalación de las herramientas de la línea de comandos, regresa a la ventana de la línea de comandos y copia el siguiente texto a fin de instalar [Homebrew](http://brew.sh/):

``` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Presiona "Enter" cuando sea necesario e ingresa la contraseña de tu computadora cuando se solicite. A modo de referencia, mostramos una captura de pantalla del comando ingresado en la línea de comandos de la autora del tutorial, seguido de todo el texto que apareció (incluido el mensaje para presionar Enter e ingresar la contraseña).

  ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

### Ruby & Ruby Gems

Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby).

En la línea de comandos, ingresa:

`brew install ruby` 

Espera hasta que el "prompt" vuelva a aparecer para ingresar el siguiente comando:

`gem install rubygems-update`

### NodeJS

[NodeJS](https://nodejs.org/en/) (o Node.js) es una plataforma de desarrollo (más específicamente, es un "entorno de desarrollo") que, por ejemplo, ayuda a que Javascript se ejecute más rápido.

En la línea de comandos, ingresa:

`brew install node`

### Jekyll

[Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. 

En la línea de comandos, ingresa:

`gem install jekyll`


**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear un sitio web!**

<br>

Basado en Amanda Visconti, "Building a static website with Jekyll and GitHub Pages," The Programming Historian 5 (2016), https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages.

