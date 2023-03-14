
const board = [
    ['M', 'S', 'E', 'F'],
    ['R', 'A', 'T', 'D'],
    ['L', 'O', 'N', 'E'],
    ['K', 'A', 'F', 'B'],
]

const input = ['START', 'NOTE', 'SAND', 'STONED']

const checkWord = (board, word) => {
    const stack = [board[0]]

    const numberOfRows = board.length
    const numberOfColumns = board[0].length

    // Find the starting letter of the queue
    let queue = board.reduce((accumulator, row, rowIndex) => {
        row.forEach((letter, columnIndex) => {
            if (letter === word[0]) {
                accumulator.push({ pos: { row: rowIndex, column: columnIndex }, nextIndex: 1, path: [numberOfColumns * rowIndex + columnIndex] })
            }
        })

        return accumulator
    }, [])

    console.log(`Queue started...`)
    console.log(`First letter is ${word[0]}. Found in row: ${queue[0].pos.row}; column: ${queue[0].pos.column}; path: ${queue[0].path[0]}`)

    let exploreWord = (obj, queue) => {
        console.log(`Current letter: ${word[obj.nextIndex]}`)

        let allPossibleMoves = [
            {
                row: obj.pos.row - 1,
                column: obj.pos.column,
            },
            {
                row: obj.pos.row + 1,
                column: obj.pos.column,
            },
            {
                row: obj.pos.row,
                column: obj.pos.column - 1,
            },
            {
                row: obj.pos.row,
                column: obj.pos.column + 1,
            },
            {
                row: obj.pos.row - 1,
                column: obj.pos.column - 1,
            },
            {
                row: obj.pos.row - 1,
                column: obj.pos.column + 1,
            },
            {
                row: obj.pos.row + 1,
                column: obj.pos.column - 1,
            },
            {
                row: obj.pos.row + 1,
                column: obj.pos.column + 1,
            },
        ]

        allPossibleMoves.forEach((possibleMove) => {
            let index = numberOfColumns * possibleMove.row + possibleMove.column

            if (possibleMove.row >= 0 && possibleMove.row < numberOfRows
                && possibleMove.column >= 0 && possibleMove.column < numberOfColumns) {
                    if (board[possibleMove.row][possibleMove.column] === word[obj.nextIndex]
                        && !obj.path.includes(index)) {
                            let cloneObj = {...obj}
                            cloneObj.pos = { row: possibleMove.row, column: possibleMove.column }
                            cloneObj.nextIndex += 1
                            cloneObj.path.push(index)

                            queue.push(cloneObj)
                            console.log(`Current queue: ${JSON.stringify(queue)}`)
                        }
                }
        })
    }

    while (queue.length > 0) {
        let obj = queue.shift()

        if (obj.nextIndex === word.length) {
            return true
        }

        exploreWord(obj, queue)
    }

    return false
}

console.log(checkWord(board, 'NOTE'))
