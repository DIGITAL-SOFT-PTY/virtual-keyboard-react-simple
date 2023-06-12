<p>
  <a href="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual.png">
	<img alt="keyboard virtual: Javascript Virtual Keyboard" src="https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/teclado-virtual.png">
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

## 📦 Installation
### with npm
``` 
npm i virtual-keyboard-react-simple --save
``` 
### with yarn
``` 
yarn add virtual-keyboard-react-simple
``` 

## 🚀 Demo
Clone este repositorio [Demo Keyboard](https://github.com/DIGITAL-SOFT-PTY/demo-keyboard-react)

## Usage
``` 
import React, { useRef, useState } from 'react';
import { Keyboard } from 'virtual-keyboard-react-simple/src/keyboard';

const KeyboarComponent = () => <Keyboard />;
``` 

## Props
The props here are specific to this component but one can pass any prop to the underlying video tag eg className, style, muted, etc

<table>
  <thead>
    <tr>
      <td>prop</td>
      <td>type</td>
      <td>required</td>
      <td>notes</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onClick</td>
      <td>function</td>
      <td>true</td>
      <td>aqui nota</td>
    </tr>
    <tr>
      <td>inputRef</td>
      <td>input text</td>
      <td>true</td>
      <td>aqui nota</td>
    </tr>
    <tr>
      <td>backgroundStyle</td>
      <td>object</td>
      <td>true</td>
      <td>contain background of keyboard.
       Example: 
       <code>
       {
            display: 'flex',
            backgroundImage: `url()')`,
            backgroundRepeat: 'no-repeat',
            position: 'fixed',
            width: '1065px',
            height: '361px',
            bottom: '0px',
            padding: '1rem',
            zIndex: '100'
          }
        </code>
       </td>
    </tr>
    <tr>
      <td>backgroundButtonStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
      contain background of button.
       Example: 
       <code>
       {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80px',
            height: '80px',
            cursor: 'pointer',
            color: '#4D4D4F',
            backgroundImage: `url('')`,
            backgroundRepeat: 'no-repeat',
            fontSize: '30px',
            fontWeight: 'bold',
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>rowStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
      contain style row.
       Example: 
       <code>
       {
            display: 'flex',
            height: '80px',
            marginLeft: '0px',
            marginTop: '0px',
            padding: '0px'
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>leftStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
      contain style left column.
       Example: 
       <code>
       {
            background: 'transparent',
            width: '790px'
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>rigthStyle</td>
      <td>object</td>
      <td>true</td>
      <td>contain style rigth column.
       Example: 
       <code>
          {
            background: 'transparent',
            width: '275px'
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>backgroundButtonSpaceStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
        contain style button space.
       Example: 
       <code>
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '475px',
            height: '80px',
            cursor: 'pointer',
            color: '#4D4D4F',
            backgroundImage: `url('')`,
            backgroundRepeat: 'no-repeat',
            fontSize: '30px',
            fontWeight: 'bold'
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>backgroundButtonDeleteStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
      contain style button delete.
       Example: 
       <code>
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '157px',
            height: '80px',
            cursor: 'pointer',
            color: '#4D4D4F',
            backgroundImage: `url('')`,
            backgroundRepeat: 'no-repeat',
            fontSize: '30px',
            fontWeight: 'bold',
          }
        </code>
      </td>
    </tr>
    <tr>
      <td>backgroundButtonPuntoStyle</td>
      <td>object</td>
      <td>true</td>
      <td>
        contain style button punto.
       Example: 
       <code>
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '157px',
            height: '80px',
            cursor: 'pointer',
            color: '#4D4D4F',
            backgroundImage: `url('')`,
            backgroundRepeat: 'no-repeat',
            fontSize: '30px',
            fontWeight: 'bold'
          }
        </code>
      </td>
    </tr>
  </tbody>
</table>


## ❤️ Otras Versiones
- [React.js](https://github.com/hodgef/react-simple-keyboard)
- [Angular Js](https://github.com/parwinder-singh/virtual-keyboard)
- [Vue.js](https://github.com/martywallace/vue-keyboard)


## 🎯 Compatibility
- Internet Explorer 11+
- Edge 16+
- Edge (Anaheim/Edge Chromium) 79+
- Chrome 49+
- Safari 9+
- Firefox 57+

<!-- > Note: If you don't want to support old browsers, you can use the Modern Browsers bundle ([index.modern.js](https://github.com/hodgef/simple-keyboard/blob/master/build)). -->

## ✅ Constribuciones

Los problemas siempre son bienvenidos. Siéntase libre de enviar cualquier problema que tenga en:
[https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/issues](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/issues)

## ★ License
[![license](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/resources/license.svg?style=flat-square)](https://github.com/DIGITAL-SOFT-PTY/virtual-keyboard-react-simple/blob/main/LICENSE)
