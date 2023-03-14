
const graphToTest = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
}
const hasPathDepthFirst = (graph, source, destination) => {
    if (source === destination) {
        return true
    }

    for (let neighbor of graph[source]) {
        if (hasPathDepthFirst(graph, neighbor, destination)) {
            return true
        }
    }

    return false
}

console.log('hasPath: ', hasPathDepthFirst(graphToTest, 'f', 'k')) // true
console.log('hasPath: ', hasPathDepthFirst(graphToTest, 'k', 'i')) // false

const hasPathBreadthFirst = (graph, source, destination) => {
    const queue = [source]

    while (queue.length > 0) {
        const current = queue.shift()

        if (current === destination) {
            return true
        }

        graph[current].forEach(neighbor => {
            queue.push(neighbor)
        })
    }

    return false
}

console.log('hasPath: ', hasPathBreadthFirst(graphToTest, 'f', 'k')) // true
console.log('hasPath: ', hasPathBreadthFirst(graphToTest, 'k', 'i')) // false
