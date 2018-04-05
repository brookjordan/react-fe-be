export default function randomString(length = 10) {
  return Array(length)
    .fill()
    .map(randomChar)
    .join('');
}

function randomChar() {
  return (
    Math.floor(
      Math.random() * 26
    ) + 10
  )
    .toString(36);
}
