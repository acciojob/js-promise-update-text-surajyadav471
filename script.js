//your JS code here. If required.
function updateTextAfterDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Usage example
const outputElement = document.getElementById('output');

updateTextAfterDelay()
  .then((result) => {
    outputElement.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });