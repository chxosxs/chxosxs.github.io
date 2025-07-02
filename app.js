// โหลดจาก localStorage
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// บันทึกก่อน render
function render() {
  localStorage.setItem('posts', JSON.stringify(posts));
  ...
