export default (text: string, elementName = 'pre') => {
  const resultElem = document.createElement(elementName);
  resultElem.innerHTML = text;
  document.body.appendChild(resultElem);
};
