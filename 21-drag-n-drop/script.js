const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
  console.log('dragstart')
}

function dragEnd() {
  this.className = 'fill'
  console.log('dragend')
}

function dragOver(e) {
  e.preventDefault()
  console.log('dragover')
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
  console.log('dragenter')
}

function dragLeave() {
  this.className = 'empty'
  console.log('dragleave')
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
  console.log('dragdrop')
}
