(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(_,e,a){"use strict";var t=a(0),l=a.n(t);e.a=function(_){return l.a.createElement("div",{className:"key key_".concat(_.keyType),onClick:function(){_.onKeyClick(_.keyType)}},_.keyType)}},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_Key__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),OPERATIONS={"/":"Divide","*":"Multiply","-":"Subtract","+":"Add"},NUMBERS={1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,0:!0,".":!0},EQUALS="=",CLEAR="CLEAR",DELETE="DELETE",ERROR="ERROR",KEYBAORD_KEYS_MAP={48:"0",96:"0",49:"1",97:"1",50:"2",98:"2",51:"3",99:"3",52:"4",100:"4",53:"5",101:"5",54:"6",102:"6",55:"7",103:"7",56:"8",104:"8",57:"9",105:"9",106:"*",187:"=",32:"=",13:"=",189:"-",109:"-",107:"+",111:"/",191:"/",110:".",190:".",8:DELETE,27:CLEAR},SHIFT_KEYS_MAP={56:"*",187:"+"},Calculator=function(_Component){function Calculator(props){var _this;return Object(_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this.handleKeyDown=function(_){_.shiftKey&&SHIFT_KEYS_MAP.hasOwnProperty(_.keyCode)?_this.keyClickHandler(SHIFT_KEYS_MAP[_.keyCode]):KEYBAORD_KEYS_MAP.hasOwnProperty(_.keyCode)&&_this.keyClickHandler(KEYBAORD_KEYS_MAP[_.keyCode])},_this.handleClear=function(){_this.setState({displayValue:null})},_this.handleDelete=function(){if(null!==_this.state.displayValue){var _=_this.state.displayValue.substr(0,_this.state.displayValue.length-1);_this.setState({displayValue:_})}},_this.keyClickHandler=function(key){if(key===CLEAR)_this.handleClear();else if(key===DELETE)_this.handleDelete();else if(key===EQUALS){var result=ERROR;try{result=eval(_this.state.displayValue)+""}catch(err){console.log(err)}result.length>11&&(result=result.substr(0,11)+"..."),_this.setState({displayValue:result})}else if(OPERATIONS.hasOwnProperty(key)||NUMBERS.hasOwnProperty(key)){var newDisplayValue=(_this.state.displayValue||"")+key;_this.setState({displayValue:newDisplayValue})}},_this.state={displayValue:null},_this}return Object(_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(_Users_konradgnat_Documents_macbookPro_apps_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator z-depth-5"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_6__.a,{displayValue:this.state.displayValue}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"keyboard"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"top_row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:CLEAR,onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:DELETE,onKeyClick:this.keyClickHandler})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"keyboard_operations"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"/",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"*",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"-",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"+",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"=",onKeyClick:this.keyClickHandler})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"keyboard_numbers"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"7",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"8",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"9",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"4",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"5",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"6",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"1",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"2",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"3",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"-",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:"0",onKeyClick:this.keyClickHandler}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Key__WEBPACK_IMPORTED_MODULE_7__.a,{keyType:".",onKeyClick:this.keyClickHandler}))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},function(_,e,a){"use strict";var t=a(0),l=a.n(t);e.a=function(_){return l.a.createElement("div",{className:"display"},l.a.createElement("span",{className:"display_text"},_.displayValue))}},function(_,e,a){_.exports=a(18)},,,,,,function(_,e,a){},function(_,e,a){"use strict";a.r(e);var t=a(0),l=a.n(t),r=a(8),E=a.n(r),n=(a(17),a(2)),s=a(3),c=a(5),o=a(4),i=a(6),u=a(9),y=function(_){function e(){return Object(n.a)(this,e),Object(c.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(i.a)(e,_),Object(s.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,null))}}]),e}(t.Component);E.a.render(l.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.358cf651.chunk.js.map