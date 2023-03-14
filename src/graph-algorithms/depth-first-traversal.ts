// Uses a stack

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const depthFirstPrintIterative = (graph, startingNode) => {
    const stack = [startingNode];

    while (stack.length > 0) {
        const current = stack.pop() // Remove top of the stack and return it
        console.log(`Current: ${current}`)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }

        console.log(`Stack: \n`)
        stack.slice().reverse().forEach(entry => console.log(`${entry}\n`))
        console.log(`__\n`)
    }
}

depthFirstPrintIterative(graph, 'a')
