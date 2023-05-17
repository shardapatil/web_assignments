function applyAvailability(p1) {
    let inputAddToCartTag = document.querySelector("#add-to-cart");
  
    if (p1) {
      inputAddToCartTag.removeAttribute("disabled");
    } else {
      inputAddToCartTag.setAttribute("disabled", "true");
    }
  }