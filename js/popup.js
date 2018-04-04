

  var link = document.querySelector(".proposal-button");
  var popup = document.querySelector(".trip");
  var close = document.querySelector(".proposal-button");
  var form = popup.querySelector("form");
  var checkin = popup.querySelector("[name=check-in]");
  var checkout = popup.querySelector("[name=check-out]");

 var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("checkin");
  } catch (err) {
    isStorageSupport = false;
  }

    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("trip-show");
    popup.classList.remove("modal-error");

    if (storage) {
      checkin.value = storage;
      checkout.focus();
    } else {
      checkin.focus();
    }
});

  form.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести дату заезда и выезда");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("checkin", checkin.value);
      }
    }
  });


