// querySelectorAll()
// Trả về một NodeList

const listItems = document.querySelectorAll('.item');

// Truy cập các phần tử bằng chỉ mục
console.log(listItems[1].innerText);

// Đặt màu cho phần tử cụ thể
listItems[1].style.color = 'red';

// Chúng ta có thể sử dụng forEach() trên NodeList
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = ` Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

// getElementsByClassName()
// Trả về một HTMLCollection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);const logo = document.querySelector('img');

  function onClick(e) {
    // Thuộc tính của sự kiện
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
  }
  
  function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
  }
  
  logo.addEventListener('click', onClick);
  logo.addEventListener('drag', onDrag);
  
  // document.body.addEventListener('click', function (e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  // });
  
  // Phương thức e.preventDefault() ngăn chặn hành vi mặc định
  document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Link đã được nhấp');
  });
  
  /*
  - `target` - Phần tử gây ra sự kiện
  - `currentTarget` - Phần tử mà lắng nghe sự kiện được gắn vào (Trong trường hợp này là giống nhau)
  - `type` - Loại sự kiện được gây ra
  - `timeStamp` - Thời điểm sự kiện được gây ra
  - `clientX` - Vị trí x của chuột khi nhấp vào so với cửa sổ
  - `clientY` - Vị trí y của chuột khi nhấp vào so với cửa sổ
  - `offsetX` - Vị trí x của chuột khi nhấp vào so với phần tử
  - `offsetY` - Vị trí y của chuột khi nhấp vào so với phần tử
  - `pageX` - Vị trí x của chuột khi nhấp vào so với trang
  - `pageY` - Vị trí y của chuột khi nhấp vào so với trang
  - `screenX` - Vị trí x của chuột khi nhấp vào so với màn hình
  - `screenY` - Vị trí y của chuột khi nhấp vào so với màn hình
  */
  
});

// getElementsByTagName()

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
