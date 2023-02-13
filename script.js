document.getElementById('products').onmouseover = function() {mouseOver}
document.getElementById('products').onmouseout = function() {mouseOut}

function mouseOver () {
  let list = document.getElementById('dropdown-menu').classList
    list.add('show')
}

function mouseOut () {
  let list = document.getElementById('dropdown-menu').classList
    list.remove('show')
}