export default (list: Array<string>) =>
  new Promise((resolve, reject) => {
    if (list?.length === 0) {
      reject(new Error('list is invalided.'));
    }
    setTimeout(() => {
      resolve(list.map((val, index) => `[${index + 1}/${list.length}]: ${JSON.stringify(val)}`));
    }, 1000);
  });
