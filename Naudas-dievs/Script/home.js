document.addEventListener("DOMContentLoaded", function() {
    

  var modal = document.getElementById("myModal");


  var btn = document.getElementById("myBtn");


  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function() {
      modal.style.display = "block";
  }


  span.onclick = function() {
      modal.style.display = "none";
  }


  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function toggleHeader() {
    var headerContent = document.querySelector('.header-content');
    headerContent.classList.toggle('show');
}

