  function showAndHide(sh)
  {
    console.log(sh);
    let val = document.querySelector('#b1');

    console.log(val);
    if(sh)
    {
        val.style.display = "none";
    }
    else{
        val.style.display = "inline";
    }
  }

  function disablebtn(p1)
    {
    let btnval = document.querySelector('#b2');
    if (p1) {
        btnval.setAttribute("disabled", "true");
    } else {
        btnval.removeAttribute("disabled");
    }
  }

  function count()
  {
    let cnttag = document.querySelector('#counter');
    let existingval = cnttag.innerHTML;
    let newval = parseInt(existingval) + 1;
    cnttag.innerHTML = newval;
  }

  function countdec()
  {
    let cnttag = document.querySelector('#counter');
    let existingval = parseInt(cnttag.innerHTML);

    if(existingval >0){
      let newval = existingval - 1;
      cnttag.innerHTML = newval;
    }
  }

  