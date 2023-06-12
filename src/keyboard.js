"use strict";
/**
 * Keyboard.ts
 * Ing: Samuel Vasquez
 * Email: samyr0722@gmail.com
 * Date Start: 10-junio-2023 15:00
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
var react_1 = __importStar(require("react"));
;
var keysMayuscula = [
    "Q W E R T Y U I O P",
    "A S D F G H J K L Ñ",
    "↓ Z X C V B N M Borrar",
    "- . Espacio .com"
];
var keysMinuscula = [
    "q w e r t y u i o p",
    "a s d f g h j k l ñ",
    "↑ z x c v b n m Borrar",
    "- . Espacio .com"
];
var keysSpetial = [
    "! # $ % & / ( ) = ?",
    "^ ¿ | ° * ´ { } [ ]",
    "↓ ; , : < > + ~ Borrar",
    "- . Espacio .com"
];
var keysNumber = [
    "7 8 9",
    "4 5 6",
    "1 2 3",
    "0 @ -"
];
var Keyboard = function (_a) {
    var inputRef = _a.inputRef, backgroundStyle = _a.backgroundStyle, backgroundButtonStyle = _a.backgroundButtonStyle, rowStyle = _a.rowStyle, leftStyle = _a.leftStyle, rigthStyle = _a.rigthStyle, backgroundButtonSpaceStyle = _a.backgroundButtonSpaceStyle, backgroundButtonDeleteStyle = _a.backgroundButtonDeleteStyle, backgroundButtonPuntoStyle = _a.backgroundButtonPuntoStyle, onClick = _a.onClick;
    var _b = (0, react_1.useState)([]), keyAlpha = _b[0], setKeyAlpha = _b[1];
    var _c = (0, react_1.useState)(0), position = _c[0], setPosition = _c[1];
    (0, react_1.useEffect)(function () {
        setKeyAlpha(keysMinuscula);
        if (inputRef.current) {
            inputRef.current.addEventListener("click", function () {
                var selectionStart = inputRef.current.selectionStart;
                setPosition(selectionStart);
            });
        }
    }, [_this]);
    var setKey = function (itemR, indexR) {
        var key = itemR.split(' ');
        return (key.map(function (item, index) {
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
                case 'Q':
                case 'q':
                case 'W':
                case 'w':
                case 'E':
                case 'e':
                case 'R':
                case 'r':
                case 'T':
                case 't':
                case 'Y':
                case 'y':
                case 'U':
                case 'u':
                case 'I':
                case 'i':
                case 'O':
                case 'o':
                case 'P':
                case 'p':
                case 'A':
                case 'a':
                case 'S':
                case 's':
                case 'D':
                case 'd':
                case 'F':
                case 'f':
                case 'G':
                case 'g':
                case 'H':
                case 'h':
                case 'J':
                case 'j':
                case 'K':
                case 'k':
                case 'L':
                case 'l':
                case 'Ñ':
                case 'ñ':
                case 'Z':
                case 'z':
                case 'X':
                case 'x':
                case 'C':
                case 'c':
                case 'V':
                case 'v':
                case 'B':
                case 'b':
                case 'N':
                case 'n':
                case 'M':
                case 'm':
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
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonStyle, onClick: function () {
                            if (inputRef.current) {
                                var text = inputRef.current.value;
                                if (text.length <= 0) { //esta vacia se agrega al final
                                    onClick("".concat(text).concat(item));
                                }
                                else { //el cursor esta en la última posición
                                    var valueLength = text.length;
                                    onClick("".concat(text).concat(item));
                                    if (position === valueLength) {
                                        onClick("".concat(text).concat(item));
                                    }
                                    else {
                                        var izq = text.substring(0, position);
                                        var der = text.slice(position);
                                        onClick("".concat(izq).concat(item).concat(der));
                                    }
                                }
                                inputRef.current.setSelectionRange(position + 1, position + 1);
                                setPosition((position + 1));
                            }
                        } }, item));
                case '.com':
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonPuntoStyle, onClick: function () {
                            if (inputRef.current) {
                                var value = inputRef.current.value;
                                onClick("".concat(value).concat(item).toUpperCase());
                                inputRef.current.setSelectionRange(value.length + 4, value.length + 4);
                                setPosition((value.length + 4));
                            }
                        } }, ".com"));
                case 'Borrar':
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonDeleteStyle, onClick: function () {
                            if (inputRef.current) {
                                var text = inputRef.current.value;
                                if (text.length > 1) {
                                    var valueLength = text.length;
                                    if (position === valueLength) {
                                        onClick(text.substring(0, (text.length - 1)));
                                    }
                                    else {
                                        if (position > 0) {
                                            var izq = text.substring(0, position - 1);
                                            var der = text.slice(position);
                                            onClick("".concat(izq).concat(der));
                                        }
                                    }
                                    if (position > 0) {
                                        inputRef.current.setSelectionRange(position - 1, position - 1);
                                        setPosition(position - 1);
                                    }
                                    else {
                                        inputRef.current.setSelectionRange(0, 0);
                                        setPosition(0);
                                    }
                                }
                                else { //borra de 1to1 desde el final hacia atraz.
                                    onClick('');
                                    inputRef.current.setSelectionRange(0, 0);
                                    setPosition(0);
                                }
                            }
                        } }, item));
                case '↑':
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonStyle, onClick: function () {
                            setKeyAlpha(keysMayuscula);
                        } }, item));
                case '↓':
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonStyle, onClick: function () {
                            setKeyAlpha(keysMinuscula);
                        } }, item));
                case 'Espacio':
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonSpaceStyle, onClick: function () {
                            //onClick(item);
                            //if (isValidando)
                            //return;
                        } }, " "));
                default:
                    return (react_1.default.createElement("div", { key: "btn_".concat(index, "_").concat(indexR), id: "btn_".concat(index, "_").concat(indexR), style: backgroundButtonStyle, onClick: function () {
                            //onClick(`item`);
                            /*this.props.onClick(`${value}${item}`); */
                        } }, item));
            }
        }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: backgroundStyle },
            react_1.default.createElement("div", { style: leftStyle }, keyAlpha && keyAlpha.map(function (item, index) {
                return (react_1.default.createElement("div", { key: "div_".concat(index), style: rowStyle }, setKey(item, index)));
            })),
            react_1.default.createElement("div", { style: rigthStyle }, keysNumber && keysNumber.map(function (item, index) {
                return (react_1.default.createElement("div", { key: "div_".concat(index), style: rowStyle }, setKey(item, index)));
            })))));
};
exports.Keyboard = Keyboard;
