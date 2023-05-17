function changeImageView(p1) {
    let imgTag = document.querySelector("#imgid");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "s1.jpg");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "s2.jpg");
    } else if (p1 == 3) {
      imgTag.setAttribute("src", "s3.jpg");
    }
  }