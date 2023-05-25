document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("Office-image");
    var image = document.getElementById("office-image");
  
    dropdown.addEventListener("change", function() {
      if (dropdown.value === "Laptop") {
        image.src = "https://media.istockphoto.com/id/1205777625/vector/computer-laptop-with-blank-empty-screen-for-copy-space-text-on-workin-desk-table-or.jpg?s=1024x1024&w=is&k=20&c=7KU_1SOUk8q3QYrpL-ifDF6KMFwOfTVMk6TDfUWlQ4I=";
        image.alt = "Laptop";
      } else if (dropdown.value === "SEO") {
        image.src = "https://images.freeimages.com/images/large-previews/6cf/free-image-for-you-seo-blog-or-web-marketing-website-1636055.jpg";
        image.alt = "SEO";
      } else if (dropdown.value === "Watch") {
        image.src = "https://images.freeimages.com/images/large-previews/141/a-jouney-into-time-1641354.jpg";
        image.alt = "Watch";
      } else if (dropdown.value === "Tablet") {
        image.src = "https://media.istockphoto.com/id/1408937592/photo/close-up-young-asian-businessman-and-businesswoman-look-at-computer-discussing-chart-report.jpg?s=1024x1024&w=is&k=20&c=Gfoth1mQ0O2cWd_unHpYbO2Utg4sb0puo562P8S4PvA=";
        image.alt = "Tablet";
      } else if (dropdown.value === "Office") {
        image.src = "https://media.istockphoto.com/id/472112339/photo/office.jpg?s=1024x1024&w=is&k=20&c=sJhAW1ePrSplk0pH1b49U3BouWHNtVupTGW0VFjANUs=";
        image.alt = "Office";
      }
    });
});
