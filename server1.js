
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    console.log(value);
  }
}
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
