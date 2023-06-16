<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

<p>
  <a href="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual.png">
	<img alt="keyboard virtual: Javascript Virtual Keyboard" src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual.png">
  </a>

  <a href="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual.png">
	<img alt="keyboard virtual: Javascript Virtual Keyboard" src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual2.png">
  </a>

  <a href="https://www.npmjs.com/package/virtual-keyboard-react-simple">
    <img src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/npm.svg" alt="npm version">
  </a>
	
  <a href="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/LICENSE">
    <img src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/license.svg" alt="MIT license">
  </a>

  <a href="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/actions">
     <img alt="Build Status" src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/build.svg" />
  </a>
</p>
<blockquote>Teclado Virtual para React js. Compatible con Javascript, React Js y Typescript.</blockquote>

## <i class="fas fa-circle"></i> Installation 
### <i class="fas fa-terminal"></i> with npm
``` 
npm i virtual-keyboard-react-simple --save
``` 
### <i class="fas fa-terminal"></i> with yarn
``` 
yarn add virtual-keyboard-react-simple
``` 

## <i class="fas fa-terminal"></i> Demo
Clone este repositorio [Demo Keyboard](https://github.com/DIGITAL-SOFT-PTY/demo-keyboard-react)

## <i class="fas fa-code"></i> Usage
``` 
import React, { useRef, useState } from 'react';
import { Keyboard } from 'virtual-keyboard-react-simple/src/keyboard';

const KeyboarComponent = () => <Keyboard />;
``` 

## <i class="fas fa-keyboard"></i> Props
The props here are specific to this component, but one can pass any props to the tag, eg onClick, inputRef, backgroundStyle, etc.

prop                          | type     | default      | notes                                                                                   |
| --------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------- |
| onClick                     | function | true         | callback para recibir el nuevo texto.                                                   |
| inputRef                    | input    | true         | contiene el ref del input.                                                              |
| backgroundStyle             | Object   | true         | contiene el style del background del teclado.                                           |
| backgroundButtonStyle       | Object   | false        | contiene el style de background de los botones del teclado (Optional).                  |
| backgroundButtonSpaceStyle  | Object   | false        | contiene el style del botón de espacio (Optional).                                      |


## 🎯 Compatibility
- Internet Explorer 11+
- Edge 16+
- Edge (Anaheim/Edge Chromium) 79+
- Chrome 49+
- Safari 9+
- Firefox 57+

<!-- > Note: If you don't want to support old browsers, you can use the Modern Browsers bundle ([index.modern.js](https://github.com/hodgef/simple-keyboard/blob/master/build)). -->

## <i class="fas fa-check"></i> Constribuciones

Los problemas siempre son bienvenidos. Siéntase libre de enviar cualquier problema que tenga en:
[https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/issues](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/issues)

## <i class="fas fa-star"></i> License
[![license](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/license.svg?style=flat-square)](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/LICENSE)
