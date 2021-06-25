export default async (list: Array<string>) => {
  for await (const [index, item] of list.entries()) {
    console.log(`[${index + 1}/${list.length}]: ${JSON.stringify(item)}`);
  }
};
