/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todos: () => (/* binding */ todos)\n/* harmony export */ });\n/* harmony import */ var _showTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTodos */ \"./src/showTodos.ts\");\n/* harmony import */ var _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoHtmlElems */ \"./src/todoHtmlElems.ts\");\n/* harmony import */ var _todoValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoValues */ \"./src/todoValues.ts\");\n/* harmony import */ var _utility_dateFormater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/dateFormater */ \"./src/utility/dateFormater.ts\");\nvar _a;\n\n\n\n\n//\nconst localStorageTodos = localStorage.getItem(\"todos\");\nlet todos = (_a = JSON.parse(localStorageTodos)) !== null && _a !== void 0 ? _a : [];\nlet todoId;\nconsole.log(todos);\n//\nconst handleCreateTodo = (event) => {\n    if (!(_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem.value) ||\n        !(_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem.value) ||\n        !(_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem.value)) {\n        alert(\"Sorry you have not filled all the todo information\");\n    }\n    else {\n        const createdTodoIndex = todos.findIndex((todo) => todo.id === todoId);\n        const randomId = Math.floor(Math.random() * 10000);\n        //\n        const todo = {\n            id: randomId,\n            title: _todoValues__WEBPACK_IMPORTED_MODULE_2__.todoTitle,\n            date: _todoValues__WEBPACK_IMPORTED_MODULE_2__.todoDate,\n            description: _todoValues__WEBPACK_IMPORTED_MODULE_2__.todoDescription,\n        };\n        //\n        createdTodoIndex === -1\n            ? todos.push(todo)\n            : todos.splice(createdTodoIndex, 1, todo);\n        // save to local storage\n        localStorage.setItem(\"todos\", JSON.stringify(todos));\n        //\n        (0,_showTodos__WEBPACK_IMPORTED_MODULE_0__.showTodos)();\n    }\n    //\n    _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem.value = \"\";\n    _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem.value = \"\";\n    _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem.value = \"\";\n    //\n    deleteAndEditEventListener();\n};\nconst deleteAndEditEventListener = () => {\n    //\n    const todoDeleteButtonElems = document.querySelectorAll(\".js_delete_todo\");\n    //\n    const todoEditButtonElems = document.querySelectorAll(\".js_edit_todo\");\n    todoDeleteButtonElems === null || todoDeleteButtonElems === void 0 ? void 0 : todoDeleteButtonElems.forEach((todoDeleteButton) => todoDeleteButton.addEventListener(\"click\", handleDeleteTodo));\n    //\n    todoEditButtonElems === null || todoEditButtonElems === void 0 ? void 0 : todoEditButtonElems.forEach((todoEditButton) => todoEditButton.addEventListener(\"click\", handleEditTodo));\n};\n// deletes a single todo list\nconst handleDeleteTodo = (event) => {\n    const deleteButton = event.target;\n    const todoId = deleteButton.getAttribute(\"dataset\");\n    //\n    const remainingTodos = todos.filter((todo) => todo.id !== Number(todoId));\n    todos = remainingTodos;\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n    (0,_showTodos__WEBPACK_IMPORTED_MODULE_0__.showTodos)();\n    deleteAndEditEventListener();\n};\n// edits a single todo\nconst handleEditTodo = (event) => {\n    const editButton = event.target;\n    todoId = Number(editButton.getAttribute(\"dataset\"));\n    //\n    const editedTodo = todos.find((todo) => todo.id === Number(todoId));\n    //\n    if (editedTodo) {\n        //\n        _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem.value = editedTodo.title;\n        _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem.value = (0,_utility_dateFormater__WEBPACK_IMPORTED_MODULE_3__.formateDate)(editedTodo.date);\n        _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem.value = editedTodo.description;\n    }\n};\n//\n(0,_showTodos__WEBPACK_IMPORTED_MODULE_0__.showTodos)();\n//\ndeleteAndEditEventListener();\n// event listeners\n_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoTitleElem.addEventListener(\"change\", _todoValues__WEBPACK_IMPORTED_MODULE_2__.getTodoTitle);\n_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDateElem.addEventListener(\"change\", _todoValues__WEBPACK_IMPORTED_MODULE_2__.getTodoDate);\n_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoDescriptionElem.addEventListener(\"change\", _todoValues__WEBPACK_IMPORTED_MODULE_2__.getTodoDesc);\n_todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.createTodoButtonElem === null || _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.createTodoButtonElem === void 0 ? void 0 : _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.createTodoButtonElem.addEventListener(\"click\", handleCreateTodo);\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/app.ts?");

/***/ }),

/***/ "./src/showTodos.ts":
/*!**************************!*\
  !*** ./src/showTodos.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showTodos: () => (/* binding */ showTodos)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoHtmlElems */ \"./src/todoHtmlElems.ts\");\n\n\n//\nconst showTodos = () => {\n    const todoItems = _app__WEBPACK_IMPORTED_MODULE_0__.todos.map((todo) => {\n        const date = new Date(todo.date);\n        return `\n      <div class=\"todo_list_output\">\n      <h2 class=\"todo_list_output_head\">${todo.title}</h2>\n      <p class=\"todo_list_output_description\">${todo.description}</p>\n      <p class=\"todo_list_output_date\">${date.toDateString()}</p>\n      <div class=\"todo_list_button\">\n      <button dataset=${todo.id} class=\"delete_button js_delete_todo\">Delete</button>\n      <button dataset=${todo.id} class=\"edit_button js_edit_todo\">Edit</button>\n      </div>\n      </div>\n      `;\n    });\n    _todoHtmlElems__WEBPACK_IMPORTED_MODULE_1__.todoOutputElem.innerHTML = todoItems.toLocaleString().split(\",\").join(\"\");\n};\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/showTodos.ts?");

/***/ }),

/***/ "./src/todoHtmlElems.ts":
/*!******************************!*\
  !*** ./src/todoHtmlElems.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoButtonElem: () => (/* binding */ createTodoButtonElem),\n/* harmony export */   todoDateElem: () => (/* binding */ todoDateElem),\n/* harmony export */   todoDescriptionElem: () => (/* binding */ todoDescriptionElem),\n/* harmony export */   todoOutputElem: () => (/* binding */ todoOutputElem),\n/* harmony export */   todoTitleElem: () => (/* binding */ todoTitleElem)\n/* harmony export */ });\n// getting the html elements\nconst todoTitleElem = document.querySelector(\"#text\");\nconst todoDateElem = document.querySelector(\"#date\");\nconst todoDescriptionElem = document.querySelector(\"#text_area\");\nconst createTodoButtonElem = document.querySelector(\"button\");\nconst todoOutputElem = document.querySelector(\".todo_outputs\");\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/todoHtmlElems.ts?");

/***/ }),

/***/ "./src/todoValues.ts":
/*!***************************!*\
  !*** ./src/todoValues.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodoDate: () => (/* binding */ getTodoDate),\n/* harmony export */   getTodoDesc: () => (/* binding */ getTodoDesc),\n/* harmony export */   getTodoTitle: () => (/* binding */ getTodoTitle),\n/* harmony export */   todoDate: () => (/* binding */ todoDate),\n/* harmony export */   todoDescription: () => (/* binding */ todoDescription),\n/* harmony export */   todoTitle: () => (/* binding */ todoTitle)\n/* harmony export */ });\nlet todoTitle;\nlet todoDate;\nlet todoDescription;\n//\nconst getTodoTitle = (event) => {\n    const titleInputElem = event.target;\n    todoTitle = titleInputElem.value;\n};\n//\nconst getTodoDate = (event) => {\n    const dateInputElem = event.target;\n    todoDate = new Date(dateInputElem.value);\n    const currentDate = new Date();\n    const selectedDate = todoDate.getTime();\n    if (currentDate.getTime() > selectedDate &&\n        currentDate.getDate() !== todoDate.getDate()) {\n        alert(\"please the date you entered is not valid\");\n        // \n        dateInputElem.value = \"\";\n    }\n};\n//\nconst getTodoDesc = (event) => {\n    const descriptionTextAreaElem = event.target;\n    todoDescription = descriptionTextAreaElem.value;\n};\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/todoValues.ts?");

/***/ }),

/***/ "./src/utility/dateFormater.ts":
/*!*************************************!*\
  !*** ./src/utility/dateFormater.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formateDate: () => (/* binding */ formateDate)\n/* harmony export */ });\n// formateDate\nconst formateDate = (date) => {\n    const year = date.getFullYear();\n    const month = date.getUTCMonth() + 1 <= 9\n        ? `0${date.getUTCMonth() + 1}`\n        : date.getUTCMonth() + 1;\n    const day = date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();\n    return `${year}-${month}-${day}`;\n};\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/utility/dateFormater.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;