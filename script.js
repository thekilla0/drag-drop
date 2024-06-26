let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let selected = null;

for (let i = 0; i < lists.length; i++) {
  let list = lists[i];

  list.addEventListener('dragstart', function (e) {
    selected = e.target;
  });

  rightBox.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener('drop', function (e) {
    if (selected !== null) {
      rightBox.appendChild(selected);
      selected = null;
    }
  });

  leftBox.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  leftBox.addEventListener('drop', function (e) {
    if (selected !== null) {
      leftBox.appendChild(selected);
      selected = null;
    }
  });
}
