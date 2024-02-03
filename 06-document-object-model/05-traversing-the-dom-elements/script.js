let output;

// Lấy các phần tử con từ một phần tử cha

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Con Hai';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Con Một';
parent.lastElementChild.innerText = 'Con Ba';

// Lấy các phần tử cha từ một phần tử con

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Lấy các phần tử anh em

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);