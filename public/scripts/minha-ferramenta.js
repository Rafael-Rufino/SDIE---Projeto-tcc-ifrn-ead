

function dFunction() {
    document.getElementById("myDropdown-ferramenta").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-ferramenta')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-ferramenta");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  
  
   
  