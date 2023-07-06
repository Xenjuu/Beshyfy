const textInput = document.querySelector("#text-input");
const outputContainer = document.querySelector("#output-container");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copy");
const emoji = "🤸";

document.querySelector("#submit").addEventListener("click", () => {
  const sentence = textInput.value;
  const words = sentence.split(" ");

  if (sentence === "") {
    alert("Stupid ka beshy ko");
  } else {
    output.textContent = "";

    words.forEach((word) => {
      output.textContent += `${word} ${emoji} `;
    });

    copyButton.style.display = "block";
  }
});

document.querySelector("#copy").addEventListener("click", () => {
  const textToCopy = output.textContent.trim();
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Na copy na beshy ko!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

document.querySelector("#clear").addEventListener("click", () => {
  textInput.value = "";
  output.textContent = "";
  copyButton.style.display = "none";
});
