export default randomNumber;

async function randomNumber() {
  return JSON.stringify(`${ Math.random() }`.slice(2, 8));
}
