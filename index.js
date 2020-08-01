rxjs.of(1, 2, 3)
  .subscribe(x => {
    const element = document.createElement('div');
    element.innerText = 'Data: ' + x;
    document.body.appendChild(element)
  },
  err => { },
  () => {
    const element = document.createElement('div');
    element.innerText = 'All done';
    document.body.appendChild(element)
  });