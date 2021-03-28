// everything is set to 0
let b1 = 0
let b2 = 0
let height = 0
let area = 0

// when the button is clicked, the math calculate
document.getElementById('button').addEventListener('click', math)

// this is how to solve the area of a trapezoid
function math () {
  b1 = document.getElementById('base1').value
  b1 = parseInt(b1)
  b2 = document.getElementById('base2').value
  b2 = parseInt(b2)
  height = document.getElementById('height').value
  height = parseInt(height)
  area = (b1 + b2) / 2 * height
  alert(area)
}
