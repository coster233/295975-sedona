<script>

  var link = document.querySelector(".proposal-button");
  var popup = document.querySelector(".trip");
  var close= document.querySelector(".proposal-button");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("trip-show");
});



</script>
