// Uses a queue, usually can't use recursion for that reason

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const breadthFirstPrint = (graph, startingNode) => {
    const queue = [startingNode]

    while (queue.length > 0) {
        const current = queue.shift()
        console.log(`Current: ${current}`)
        
        console.log(`${current} contains: [${graph[current]}]`)
        graph[current].forEach(neighbor => {
            console.log(`-- > push ${neighbor} to the start of the queue`)
            queue.push(neighbor)
        })

        console.log(`Queue: _${queue.slice().reverse()}_`)
    }
}

breadthFirstPrint(graph, 'a')
