/**
 * Keyboard.ts
 * Ing: Samuel Vasquez
 * Email: samyr0722@gmail.com
 * Date Start: 10-junio-2023 15:00
 */


import React, { CSSProperties, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface ComponentProps {
  inputRef: any,
  backgroundStyle: CSSProperties;
  backgroundButtonStyle: CSSProperties;
  backgroundButtonSpaceStyle: CSSProperties;
  onClick: (value: string) => void;
  useSund?: boolean;
};

const keysMayuscula: any = [
  "1 2 3 4 5 6 7 8 9 0 ␡",
  "Q W E R T Y U I O P",
  "A S D F G H J K L Ñ",
  "↓ Z X C V B N M ␡",
  "- . Espacio .COM 0 @ -"
];

const keysMinuscula: any = [
  "1 2 3 4 5 6 7 8 9 0 ␡",
  "q w e r t y u i o p",
  "a s d f g h j k l ñ",
  "↑ z x c v b n m",
  "- . Espacio .com 0 @ -"
];

const keysSpetial: any = [
  "! # $ % & / ( ) = ?",
  "^ ¿ | ° * ´ { } [ ]",
  "↓ ; , : < > + ~ ␡",
  "- . Espacio .com"
];

export const Keyboard: React.FC<ComponentProps> = ({
  inputRef,
  backgroundStyle,
  backgroundButtonStyle,
  backgroundButtonSpaceStyle,
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

  const setKey = (itemR: any, indexR: number) => {
    const key = itemR.split(' ');

    return (key.map((item: string, index: any) => {
      switch (item) {
        case 'Espacio':
          return (
            <div key={`${index}_${indexR}`}
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
            <Button key={`${index}_${indexR}`}
              style={backgroundButtonStyle}
              onClick={() => {

                if (item === '↑') {
                  setKeyAlpha(keysMayuscula);
                  return;
                }

                if (item === '↓') {
                  setKeyAlpha(keysMinuscula);
                  return;
                }

                if (item === '.com' || item === '.COM') {
                  if (inputRef.current) {
                    const value = inputRef.current.value;
                    onClick(`${value}${item}`.toUpperCase());
                    inputRef.current.setSelectionRange(value.length + 4, value.length + 4);
                    setPosition((value.length + 4));
                  }
                  return;
                }

                if (item === '␡') {
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
                  return;
                }

                if (inputRef.current) {
                  const text = inputRef.current.value;
                  if (text.length <= 0) {
                    onClick(`${text}${item}`);
                  } else {
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
              }} >
              <Text>{item}</Text>
            </Button>
          );
      }
    }));
  }

  return (
    <ContainerMaster style={backgroundStyle} /* className={`$animate__animated animate__fadeInUp`} */>
      <ContainerRow>
        {keyAlpha && keyAlpha.map((item: string, index: number) => {
          return (
            <Row key={index} >
              {setKey(item, index)}
            </Row>
          );
        })}
      </ContainerRow>
    </ContainerMaster>
  );
};

const ContainerMaster = styled.div`
  display: flex;
  width: 1065px;
  height: 361px;
  bottom: 0px;
  padding: 0.5rem;
  z-index: 100;
`;

const ContainerRow = styled.div`
  background: transparent;
  width: 1065px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin-left: 0px;
  margin-top: 0px;
  padding: 0px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  color: #4D4D4F;
  font-size: 30px;
  font-weight: bold;
`;

const Text = styled.span``;