const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheckboxes(e) {
  console.log(e);
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }


  lastChecked = this;
}

// click events are also triggered when you push down on the keyboard... WHO KNEW!?
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheckboxes));
