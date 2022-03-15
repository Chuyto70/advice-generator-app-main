const getId = (id, elementHtml) => {
    elementHtml.innerHTML = id;
}
const getAdvice = (advice, elementHtml) => {
    elementHtml.innerHTML = advice;
}
export {
    getId,
    getAdvice
}