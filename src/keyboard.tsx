/**
 * Keyboard.ts
 * Ing: Samuel Vasquez
 * Email: samyr0722@gmail.com
 * Date Start: 10-junio-2023 15:00
 */


import React, { CSSProperties, useEffect, useState } from 'react';

interface ComponentProps {
  inputRef: any,
  backgroundStyle: CSSProperties;
  backgroundButtonStyle: CSSProperties;
  rowStyle: CSSProperties;
  leftStyle: CSSProperties;
  rigthStyle: CSSProperties;
  backgroundButtonSpaceStyle: CSSProperties;
  backgroundButtonDeleteStyle: CSSProperties;
  backgroundButtonPuntoStyle: CSSProperties;

  onClick: (value: string) => void;
};

const keysMayuscula: any = [
  "Q W E R T Y U I O P",
  "A S D F G H J K L Ñ",
  "↓ Z X C V B N M Borrar",
  "- . Espacio .com"
];

const keysMinuscula: any = [
  "q w e r t y u i o p",
  "a s d f g h j k l ñ",
  "↑ z x c v b n m Borrar",
  "- . Espacio .com"
];

const keysSpetial: any = [
  "! # $ % & / ( ) = ?",
  "^ ¿ | ° * ´ { } [ ]",
  "↓ ; , : < > + ~ Borrar",
  "- . Espacio .com"
];

const keysNumber: any = [
  "7 8 9",
  "4 5 6",
  "1 2 3",
  "0 @ -"
];

export const Keyboard: React.FC<ComponentProps> = ({
  inputRef,
  backgroundStyle,
  backgroundButtonStyle,
  rowStyle,
  leftStyle,
  rigthStyle,
  backgroundButtonSpaceStyle,
  backgroundButtonDeleteStyle,
  backgroundButtonPuntoStyle,
  onClick,
}) => {

  const [keyAlpha, setKeyAlpha] = useState([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setKeyAlpha(keysMinuscula);

    if (inputRef.current) {
      inputRef.current.addEventListener("click", function () {
        const selectionStart = inputRef.current.selectionStart;
        setPosition(selectionStart);
      });
    }
  }, [this]);

  const setKey = (itemR: any, indexR: any) => {
    const key = itemR.split(' ');

    return (key.map((item: any, index: any) => {
      switch (item) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '@':
        case '_':

        case 'Q': case 'q':
        case 'W': case 'w':
        case 'E': case 'e':
        case 'R': case 'r':
        case 'T': case 't':
        case 'Y': case 'y':
        case 'U': case 'u':
        case 'I': case 'i':
        case 'O': case 'o':
        case 'P': case 'p':

        case 'A': case 'a':
        case 'S': case 's':
        case 'D': case 'd':
        case 'F': case 'f':
        case 'G': case 'g':
        case 'H': case 'h':
        case 'J': case 'j':
        case 'K': case 'k':
        case 'L': case 'l':
        case 'Ñ': case 'ñ':

        case 'Z': case 'z':
        case 'X': case 'x':
        case 'C': case 'c':
        case 'V': case 'v':
        case 'B': case 'b':
        case 'N': case 'n':
        case 'M': case 'm':

        case '.':
        case '-':

        case '!':
        case '#':
        case '$':
        case '%':
        case '&':
        case '/':
        case '(':
        case ')':
        case '=':
        case '?':
        case '^':
        case '¿':
        case '|':
        case '°':
        case '*':
        case '´':
        case '{':
        case '}':
        case '[':
        case ']':
        case ';':
        case ',':
        case ':':
        case '<':
        case '>':
        case '+':
        case '~':

          return (
            <div key={`btn_${index}_${indexR}`}
              id={`btn_${index}_${indexR}`}
              style={backgroundButtonStyle}
              onClick={() => {
                if (inputRef.current) {
                  const text = inputRef.current.value;
                  if (text.length <= 0) { //esta vacia se agrega al final
                    onClick(`${text}${item}`);
                  } else { //el cursor esta en la última posición
                    const valueLength = text.length;
                    onClick(`${text}${item}`);
                    if (position === valueLength) {
                      onClick(`${text}${item}`);
                    } else {
                      const izq = text.substring(0, position)
                      const der = text.slice(position);
                      onClick(`${izq}${item}${der}`);
                    }
                  }
                  inputRef.current.setSelectionRange(position + 1, position + 1);
                  setPosition((position + 1));
                }
              }
              }>
              {item}
            </div>
          );

        case '.com':
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonPuntoStyle}
              onClick={() => {
                if (inputRef.current) {
                  const value = inputRef.current.value;
                  onClick(`${value}${item}`.toUpperCase());
                  inputRef.current.setSelectionRange(value.length + 4, value.length + 4);
                  setPosition((value.length + 4));
                }
              }} >
              {`.com`}
            </div>
          );

        case 'Borrar':
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonDeleteStyle}
              onClick={() => {
                if (inputRef.current) {
                  const text = inputRef.current.value;
                  if (text.length > 1) {
                    const valueLength = text.length;
                    if (position === valueLength) {
                      onClick(text.substring(0, (text.length - 1)));
                    } else {
                      if (position > 0) {
                        const izq = text.substring(0, position - 1)
                        const der = text.slice(position);
                        onClick(`${izq}${der}`);
                      }
                    }

                    if (position > 0) {
                      inputRef.current.setSelectionRange(position - 1, position - 1);
                      setPosition(position - 1);
                    } else {
                      inputRef.current.setSelectionRange(0, 0);
                      setPosition(0);
                    }
                  } else { //borra de 1to1 desde el final hacia atraz.
                    onClick('');
                    inputRef.current.setSelectionRange(0, 0);
                    setPosition(0);
                  }
                }
              }}>
              {item}
            </div>
          );
        case '↑':
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonStyle}
              onClick={() => {
                setKeyAlpha(keysMayuscula);
              }}>
              {item}
            </div>
          );
        case '↓':
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonStyle}
              onClick={() => {
                setKeyAlpha(keysMinuscula);
              }}>
              {item}
            </div>
          );

        case 'Espacio':
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonSpaceStyle}
              onClick={() => {
                //onClick(item);
                //if (isValidando)
                //return;
              }}>
              {` `}
            </div>
          );
        default:
          return (
            <div key={`btn_${index}_${indexR}`} id={`btn_${index}_${indexR}`}
              style={backgroundButtonStyle}
              onClick={() => {
                //onClick(`item`);

                /*this.props.onClick(`${value}${item}`); */
              }} >
              {item}
            </div>
          );
      }
    }));
  }


  return (
    <>

      <div style={backgroundStyle} /* className={`$animate__animated animate__fadeInUp`} */>
        <div style={leftStyle}>
          {keyAlpha && keyAlpha.map((item: string, index: number) => {
            return (
              <div key={`div_${index}`}
                style={rowStyle}>
                {setKey(item, index)}
              </div>
            );
          })}
        </div>

        <div style={rigthStyle}>
          {keysNumber && keysNumber.map((item: string, index: number) => {
            return (
              <div key={`div_${index}`} style={rowStyle} >
                {setKey(item, index)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};