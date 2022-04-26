//dom/practice4.js

document.addEventListener('DOMContentLoaded', function(){
  let showDiv = document.querySelector('#show');
  showDiv.style.width = '150px';
  showDiv.style.height = '150px';
  showDiv.style.backgroundColor = 'yellow';

  let inputTag = document.getElementById('userName');
  inputTag.addEventListener('change', function(){
    let span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.innerHTML = document.querySelector('userName').value;
    showDiv.appendChild(span);

    document.querySelector('#userName').value = '';
  })


  let add = document.querySelector('#addBtn');
  add.addEventListener('click', function(){
    let span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.innerHTML = document.querySelector('userName').value;
    showDiv.appendChild(span);

    document.querySelector('#userName').value = '';


  })
});