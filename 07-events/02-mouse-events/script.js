const logo = document.querySelector('img');

const onClick = () => console.log('Sự kiện click');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('Sự kiện chuột phải');
const onMouseDown = () => console.log('Sự kiện nhấn chuột');
const onMouseUp = () => console.log('Sự kiện nhả chuột');
const onMouseWheel = () => console.log('Sự kiện cuộn chuột');
const onMouseOver = () => console.log('Sự kiện di chuột lên');
const onMouseOut = () => console.log('Sự kiện di chuột ra');
const onDragStart = () => console.log('Sự kiện bắt đầu kéo');
const onDrag = () => console.log('Sự kiện kéo');
const onDragEnd = () => console.log('Sự kiện kết thúc kéo');

// Bộ lắng nghe sự kiện
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
