const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(e);
    console.log("clicked!");
});

