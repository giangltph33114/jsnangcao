const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Bộ lắng nghe sự kiện JavaScript
clearBtn.onclick = function () {
  alert('Xóa các mục');
};

clearBtn.onclick = function () {
  console.log('Xóa các mục');
};

// Sử dụng addEventListener()
clearBtn.addEventListener('click', () => alert('Xóa các mục'));

// Sử dụng hàm có tên
clearBtn.addEventListener('click', onClear);

// Sử dụng removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Kích hoạt sự kiện từ JS
setTimeout(() => clearBtn.click(), 5000);