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
