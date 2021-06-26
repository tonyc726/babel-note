export default (function (list) {
    return new Promise(function (resolve, reject) {
        if ((list === null || list === void 0 ? void 0 : list.length) === 0) {
            reject(new Error('list is invalided.'));
        }
        setTimeout(function () {
            resolve(list.map(function (val, index) { return "[" + (index + 1) + "/" + list.length + "]: " + JSON.stringify(val); }));
        }, 1000);
    });
});
