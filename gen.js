document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("animal-dropdown");
    var image = document.getElementById("animal-image");
  
    dropdown.addEventListener("change", function() {
      if (dropdown.value === "cat") {
        image.src = "pict/cat.jpg";
        image.alt = "cat";
      } else if (dropdown.value === "tiger") {
        image.src = "pict/tiger.jpg";
        image.alt = "tiger";
      } else if (dropdown.value === "elephant") {
        image.src = "pict/elephant.jpg";
        image.alt = "elephant";
      } else if (dropdown.value === "giraffe") {
        image.src = "pict/giraffe.jpg";
        image.alt = "giraffe";
      } else if (dropdown.value === "zebra") {
        image.src = "pict/zebra.jpg";
        image.alt = "zebra";
      }
    });
  });
  