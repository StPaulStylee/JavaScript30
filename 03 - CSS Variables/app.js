const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // dataset is a method that pulls all data attributes from the document
  // and packages them into an object
  // the || '' is used because the --base color var doesn't have a data attribute
  const suffix = this.dataset.sizing || '';
  // for each element, set the style propery of the CSS variable to the value selected
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
