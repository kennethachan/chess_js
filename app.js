const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const startPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
]

// const createBoard = () => {
//   startPieces.forEach((startPiece, i) => {
//     const square = document.createElement("div")
//     square.classList.add("square")
//     square.innerHTML = startPiece
//     square.firstChild && square.firstChild.setAttribute("draggable", true)
//     square.setAttribute("square-id", i)

//     const row = Math.floor((63 - i) / 8) + 1
//     if (row % 2 === 0) {
//       square.classList.add(i % 2 === 0 ? "beige" : "brown")
//     } else {
//       square.classList.add(i % 2 === 0 ? "brown" : "beige")
//     }

//     if (i <= 15) {
//       let test = square.firstChild
//       test.firstChild.classList.add("black")
//     }

//     if (i >= 48) {
//       square.firstChild.firstChild.classList.add("white")
//     }

//     gameBoard.append(square)
//   })
// }

// createBoard()

// const allSquares = document.querySelectorAll("#gameboard .square")

// allSquares.forEach((square) => {
//   square.addEventListener("dragstart", dragStart)
//   square.addEventListener("dragover", dragOver)
//   square.addEventListener("drop", dragDrop)
// })

// let startPositionId
// let draggedElement

// const dragStart = (e) => {
//   console.log((startPositionId = e.target.parentNode.getAttribute("square-id")))
//   startPositionId = e.target.parentNode.getAttribute("square-id")
//   draggedElement = e.target
// }

// const dragOver = (e) => {
//   e.preventDefault()
// }

// const dragDrop = (e) => {
//   e.stopPropagation()
//   e.target.append(draggedElement)
//

const createBoard = () => {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement("div")
    square.classList.add("square")
    square.innerHTML = startPiece
    square.firstChild && square.firstChild.setAttribute("draggable", true)
    square.setAttribute("square-id", i)

    const row = Math.floor((63 - i) / 8) + 1
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "beige" : "brown")
    } else {
      square.classList.add(i % 2 === 0 ? "brown" : "beige")
    }

    if (i <= 15) {
      let test = square.firstChild
      test.firstChild.classList.add("black")
    }

    if (i >= 48) {
      square.firstChild.firstChild.classList.add("white")
    }

    gameBoard.append(square)
  })
}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach((square) => {
  square.addEventListener("dragstart", dragStart)
  square.addEventListener("dragover", dragOver)
  square.addEventListener("drop", drop)
})

let draggedPiece

function dragStart(e) {
  const targetSquare = e.target.closest(".square")
  draggedPiece = targetSquare.firstChild
  e.dataTransfer.setData("text/plain", targetSquare.getAttribute("square-id"))
  e.target.classList.add("drag")
}

function dragOver(e) {
  e.preventDefault()
}

function drop(e) {
  const targetSquare = e.target.closest(".square")

  // Check if the target square is empty or contains a different piece
  if (
    !targetSquare.firstChild ||
    targetSquare.firstChild.id !== draggedPiece.id
  ) {
    targetSquare.innerHTML = "" // Clear the target square
    targetSquare.appendChild(draggedPiece) // Append the dragged piece to the target square
  }

  e.target.classList.remove("drag")
}
