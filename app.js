let page = document.getElementById('page');
let list = document.getElementById('list');
let container = document.getElementById('container');

let input = document.getElementById('input');
let textarea = document.getElementById('textarea');
let sendBtn = document.getElementById('send');

sendBtn.addEventListener('click', function () {
    const name = document.createElement('li');
    name.innerText = input.value;
    list.appendChild(name);
});