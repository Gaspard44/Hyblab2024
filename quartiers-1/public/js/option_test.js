const updateButton = document.getElementById("RenneDetails");
const RenneDialog = document.getElementById("RenneDialog");
const outputBox = document.querySelector("output");
const selectEl = RenneDialog.querySelector("select");
const confirmBtn = RenneDialog.querySelector("#confirmBtn");


if (typeof RenneDialog.showModal !== "function") {
  RenneDialog.hidden = true;

}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof RenneDialog.showModal === "function") {
    RenneDialog.showModal();
  } else {
    outputBox.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});

selectEl.addEventListener("change", (e) => {
  fetch('data/option.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(json => {
      let selectedOption = selectEl.value;
      if (json[selectedOption] && json[selectedOption].length > 0) {
        console.log(json[selectedOption][0])
        outputBox.value = json[selectedOption][0];
      }
    })
    .catch(function() {
      outputBox.value = "An error occurred while trying to fetch the JSON data.";
    });
});

// test
RenneDialog.addEventListener("close", () => {
  outputBox.value = `${
    RenneDialog.returnValue
  } button clicked - ${new Date().toString()}`;
});