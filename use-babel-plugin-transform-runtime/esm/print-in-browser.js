export default (function (text, elementName) {
    if (elementName === void 0) { elementName = 'pre'; }
    var resultElem = document.createElement(elementName);
    resultElem.innerHTML = text;
    document.body.appendChild(resultElem);
});
