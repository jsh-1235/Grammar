const initialState = () => {
  console.log("This is null.");
};

function printLater_callback(number, fn = initialState) {
  setTimeout(function () {
    console.log(number);
    fn();
  }, 1000);
}

// Callback Hell
function callback_hell() {
  printLater_callback(1, function () {
    printLater_callback(2, function () {
      printLater_callback(3, function () {
        printLater_callback(4);
      });
    });
  });
}

function printLater_promise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 3) {
        return reject(`number is greater than ${number - 1}`);
      } else {
        console.log(number);
        resolve(); // promise is ended.
      }
    }, 1000);
  });
}

// Callback Hell
function callback_promise() {
  printLater_promise(1)
    .then(() => printLater_promise(2))
    .then(() => printLater_promise(3))
    .then(() => printLater_promise(4))
    .catch((err) => console.log(err));
}
