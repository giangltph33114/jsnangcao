// Toàn bộ đối tượng window (trình duyệt)
console.log(window);

// Đối tượng document là một phần của window
console.dir(window.document);

// Truy cập các phần tử DOM trực tiếp
console.log(document.body);
console.log(document.links[0]);

// Thiết lập thuộc tính của các phần tử
// document.body.innerHTML = '<h1>Hello from body</h1>';

// Sử dụng document.write() để viết vào tài liệu
document.write('Hello from JS');

// Chọn phần tử một cách trực tiếp hơn
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';