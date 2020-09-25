---
layout: page
title: Instalación de Jekyll y dependencias para crear sitios estáticos
type: texto
permalink: /tutorial-jekyll-github-pages/
---

Este tutorial está dirigido a quienes deseen instalar todos los componentes para crear un sitio gratuito, seguro y fácil de mantener con [Jekyll](https://jekyllrb.com/). 

- [Antes de la instalación](#section1)
  - [Sistemas operativos](#section1-0)
  - [Línea de comandos](#section1-2)
- [Instalación de Jekyll y dependencias](#section2)
  - [En Windows](#sectionWindows)
  - [En Mac](#sectionMac)
    - [Herramientas de línea de comandos: Xcode](#xcode)
    - [Homebrew](#homebrew)
    - [Ruby & Ruby Gems](#ruby-gems)
    - [Jekyll](#jekyll)

## Antes de la instalación {#section1}

### Sistemas operativos  {#section1-0}

Este tutorial está destinado a usuarios de Windows y Mac (Jekyll también funciona en Linux pero no es abordado en este tutorial). La instalación es diferente según el sistema operativo, por favor referirse a la sección correspondiente cuando se indique.

### Línea de comandos  {#section1-2}

La línea de comandos es una forma de interactuar con la computadora usando texto: permite escribir instrucciones (comandos) para que sean ejecutadas por la computadora, por ejemplo "mostrar una lista de los archivos en este directorio" o "eliminar este archivo", así como comportamientos más complejos. 

A veces hay buenas alternativas visuales para dar estas instrucciones a la computadora, es lo que se conoce como "interfaz gráfica de usuario" (o GUI, "graphical user interface"). Cualquier programa en el que las interacciones usuario-computadora se dan a través de íconos, imágenes, hacer clic con el mouse, etc. es una GUI. **¿Por qué usaríamos la línea de comandos si existen las GUI? Muchas veces es más simple y rápido escribir (o cortar y pegar de un tutorial) una serie de comandos en la línea de comandos que hacer lo mismo usando una GUI. Otras veces, hay cosas para las cuales nadie ha creado una GUI y solo es posible hacerlas a través de la línea de comandos.**

El programa de línea de comandos predeterminado se llama "Terminal" en Mac (ubicado en *Aplicaciones > Utilidades*) y "Cmd" (o "Símbolo del sistema"), "Windows Power Shell" o "Git Bash" en Windows.

A continuación, se muestra cómo se ve una línea de comandos en Windows (usando Cmd). Verás algo como *C:\Users\Gabriel Calarco>*. Ese texto se llama "prompt" ("solicitud", porque solicita que el usuario ingrese comandos). En esta captura de pantalla, *C:* es el nombre de la unidad de disco y *Gabriel Calarco* es la cuenta de usuario actualmente conectada (el prompt muestra diferentes nombres para cada computadora y usuario).

![linea-de-comandos-windows](/assets/img/capturas_jekyll_windows/jekyll_1.png)

En Mac, el prompt es como *Macbook-Air:~DrJekyll$*. *Macbook-Air* es el nombre de la computadora y *DrJekyll* es la cuenta de usuario actualmente conectada.

![captura-de-pantalla-linea-de-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-0.png)

Algunas cosas a tener en cuenta sobre la línea de comandos:

1. **Los comandos que debes escribir (o copiar-pegar) en la línea de comandos tienen el siguiente formato:** `ejemplo de formato de código`. Cada fragmento de código formateado debe copiarse y pegarse en la línea de comandos, seguido de "Enter".

2. **Debes dejar que los procesos de instalación se ejecuten *completamente* antes de ingresar nuevos comandos.** A veces, escribir un comando y presionar "Enter" produce un resultado instantáneo; otras veces, una gran cantidad de texto comenzará a llenar la ventana de la línea de comandos o parecerá que la línea de comandos no está haciendo nada pero algo está sucediendo detrás de escena, como descargar un archivo. Por eso es importante que **al escribir un comando y presionar Enter, esperemos que ese comando termine por completo *antes de escribir otra cosa***, de lo contrario, podríamos detener un proceso por la mitad y generar problemas. 

    {0}. ¿Cómo saber cuándo se ha completado un comando? Cuando la línea de comandos emite nuevamente el "prompt". La captura de pantalla a continuación muestra un ejemplo de varias interacciones con la línea de comandos:

    ![captura-de-pantalla-comandos](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

3. Algo muy útil cuando escribimos los mismos comandos muchas veces o queremos recordar algo que escribimos antes: podemos presionar **↑** (flecha hacia arriba) en la línea de comandos para desplazarnos por los comandos recientemente escritos y presionar "Enter" después de que aparezca el que deseamos usar.

## Instalación de Jekyll y dependencias {#section2}

A continuación, vamos a instalar algunas dependencias de software (es decir, programas de los que depende Jekyll para poder trabajar) usando la línea de comandos ya que no hay una interfaz visual para hacerlo. 

*Esta sección se divide en instrucciones para Windows e instrucciones para Mac, así que ve a la sección de [instalación de dependencias en Mac](#sectionMac) si estás usando Mac.*

### En Windows {#sectionWindows}

1. Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll (Ruby Gems agrega algunas cosas para simplificar las instalaciones de Ruby). Ahora instalaremos Ruby (esto tomará unos minutos):

2. Ve a [Ruby Gems](https://rubyinstaller.org/downloads/) y descargá la versión más completa que es Ruby+Devkit 2.6.6-1 (x64) (la tercera de las opciones de la columna WITH DEVKIT) y procede con la instalación, como con cualquier software.
   
Una vez instalado, la consola se va a abrir automáticamente y te pedirá que selecciones qué componentes deseas instalar, presioná “Enter” para instalar todo.

Este proceso se repetirá en dos oportunidades. La segunda vez la consola se va a cerrar automáticamente.

Una vez finalizada la instalación deberás comprobar que se realizó correctamente, para ello abre la consola o CMD y escribe:

   `ruby -v`

3. Cierra la línea de comandos y vuelve a abrirla (Ruby no funcionará si no se reinicia la línea de comandos).

4. [Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. Ahora instalaremos Jekyll por consola. Primero, escribe en el cuadro de búsqueda de Windows o abre “Cmd”, tecleando el siguiente comando, haciendo “Enter” y esperando unos minutos hasta que se descarguen todas las gemas de Jekyll:

   `gem install jekyll`

5. Finalmente, aparecerá como última frase “26 gems installed”, y luego volverá a titilar el prompt en C:\WINDOWS\system32>. Asegúrate que Jekyll se instaló ejecutando el siguiente comando y presionando “Enter”:

   `jekyll -v`

6. Ahora vamos a hacer la última instalación de Jekyll, que se llama Bundler, necesario en Ruby para rastrear e instalar las gemas y versiones necesarias. Escribe el siguiente comando y presiona “Enter”:
   
   `gem install bundler`

7. La última frase de la instalación será “1 gem installed” y el prompt volverá a aparecer, por lo cual deberás escribir el último comando para finalizar la instalación:

   `bundle install`

8. Con todo ello instalado ya podrás visualizar tu sitio en local.

**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear nuestro sitio web! Omita los siguientes pasos (que son solo para usuarios de Mac).**

### En Mac {#sectionMac}

Abre una ventana de línea de comandos (*Aplicaciones > Utilidades > Terminal*) y sigue los pasos a continuación teniendo en cuenta [las sugerencias de uso de la línea de comandos detalladas más arriba](#section1-4).

#### Herramientas de línea de comandos: Xcode {#section2-1}

Primero vamos a instalar Xcode, las "herramientas de línea de comandos" de Mac, para poder usar [Homebrew](http://brew.sh/). Homebrew permite descargar e instalar software de código abierto desde la línea de comandos (es un "administrador de paquetes"). Ten en cuenta que la instalación de Xcode es un proceso largo.

En "Terminal", pega el siguiente comando:

`xcode-select --install`

Va a aparecer un mensaje como el siguiente, seguido de una ventana emergente:

![captura-de-pantalla-popup](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-1.png)

![captura-de-pantalla-popup-instalar](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.png)

En la ventana emergente, haz clic en "Install".

Una vez que termine la instalación, va a aparecer un mensaje de instalación exitosa:

![captura-de-pantalla-fin-instalacion](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-2.5.png)

#### Homebrew {#homebrew}

Al terminar la instalación de Xcode, regresa a la ventana de la línea de comandos y copia el siguiente texto para instalar [Homebrew](http://brew.sh/):

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Presiona "Enter" cuando sea necesario e ingresa la contraseña de tu computadora cuando se solicite. A modo de referencia, mostramos una captura de pantalla del proceso de instalación en la línea de comandos:

  ![Screenshot](https://programminghistorian.org/images/building-static-sites-with-jekyll-github-pages/building-static-sites-with-jekyll-github-pages-4.png)

#### Ruby & Ruby Gems {#ruby-gems}

Jekyll está construido a partir del [lenguaje de programación Ruby](https://es.wikipedia.org/wiki/Ruby). [Ruby Gems](https://rubygems.org/) es un administrador de paquetes que facilita la configuración de programas Ruby tales como Jekyll.

En la línea de comandos, ingresa:

`brew install ruby` 

Espera hasta que el "prompt" vuelva a aparecer para ingresar el siguiente comando:

`gem install rubygems-update`

#### Jekyll {#jekyll}

[Jekyll](https://jekyllrb.com/) es el programa que crea nuestro sitio web, simplificando ciertas tareas comunes, como usar la misma plantilla (mismo logotipo, menú, información del autor, etc.) en todas las páginas de nuestro blog. 

En la línea de comandos, ingresa:

`gem install jekyll`


**¡Felicitaciones, hemos terminado de instalar todo lo necesario para crear un sitio web!**

Tutorial basado en _Building a static website with Jekyll and GitHub pages_, de Amanda Visconti, publicado originalmente en inglés en [The Programming Historian](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages), (2016-04-18).