"use strict";
/**
 * Keyboard.ts
 * Ing: Samuel Vasquez
 * Email: samyr0722@gmail.com
 * Date Start: 10-junio-2023 15:00
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
;
var keysMayuscula = [
    "1 2 3 4 5 6 7 8 9 0 ␡",
    "Q W E R T Y U I O P",
    "A S D F G H J K L Ñ",
    "↓ Z X C V B N M ␡",
    "- . Espacio .COM 0 @ -"
];
var keysMinuscula = [
    "1 2 3 4 5 6 7 8 9 0 ␡",
    "q w e r t y u i o p",
    "a s d f g h j k l ñ",
    "↑ z x c v b n m",
    "- . Espacio .com 0 @ -"
];
var keysSpetial = [
    "! # $ % & / ( ) = ?",
    "^ ¿ | ° * ´ { } [ ]",
    "↓ ; , : < > + ~ ␡",
    "- . Espacio .com"
];
var Keyboard = function (_a) {
    var inputRef = _a.inputRef, backgroundStyle = _a.backgroundStyle, backgroundButtonStyle = _a.backgroundButtonStyle, backgroundButtonSpaceStyle = _a.backgroundButtonSpaceStyle, onClick = _a.onClick;
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
                case 'Espacio':
                    return (react_1.default.createElement("div", { key: "".concat(index, "_").concat(indexR), style: backgroundButtonSpaceStyle, onClick: function () {
                            //onClick(item);
                            //if (isValidando)
                            //return;
                        } }, " "));
                default:
                    return (react_1.default.createElement(Button, { key: "".concat(index, "_").concat(indexR), style: backgroundButtonStyle, onClick: function () {
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
                                    var value = inputRef.current.value;
                                    onClick("".concat(value).concat(item).toUpperCase());
                                    inputRef.current.setSelectionRange(value.length + 4, value.length + 4);
                                    setPosition((value.length + 4));
                                }
                                return;
                            }
                            if (item === '␡') {
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
                                return;
                            }
                            if (inputRef.current) {
                                var text = inputRef.current.value;
                                if (text.length <= 0) {
                                    onClick("".concat(text).concat(item));
                                }
                                else {
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
                        } },
                        react_1.default.createElement(Text, null, item)));
            }
        }));
    };
    return (react_1.default.createElement(ContainerMaster, { style: backgroundStyle },
        react_1.default.createElement(ContainerRow, null, keyAlpha && keyAlpha.map(function (item, index) {
            return (react_1.default.createElement(Row, { key: index }, setKey(item, index)));
        }))));
};
exports.Keyboard = Keyboard;
var ContainerMaster = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 1065px;\n  height: 361px;\n  bottom: 0px;\n  padding: 0.5rem;\n  z-index: 100;\n"], ["\n  display: flex;\n  width: 1065px;\n  height: 361px;\n  bottom: 0px;\n  padding: 0.5rem;\n  z-index: 100;\n"])));
var ContainerRow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: transparent;\n  width: 1065px;\n"], ["\n  background: transparent;\n  width: 1065px;\n"])));
var Row = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  margin-left: 0px;\n  margin-top: 0px;\n  padding: 0px;\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  margin-left: 0px;\n  margin-top: 0px;\n  padding: 0px;\n"])));
var Button = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  color: #4D4D4F;\n  font-size: 30px;\n  font-weight: bold;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  color: #4D4D4F;\n  font-size: 30px;\n  font-weight: bold;\n"])));
var Text = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
