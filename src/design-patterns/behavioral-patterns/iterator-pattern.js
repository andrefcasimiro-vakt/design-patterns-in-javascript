function Iterator(items) {
    this.items = items
    this.index = 0
}

Iterator.prototype = {
    hasNext: function() {
        return this.index < this.items.length
    },
    next: function() {
        return this.items[this.index++]
    }
}

const iterator = new Iterator([1, 'devsage', false, 1.24])

console.log(iterator.next()) // 1
console.log(iterator.next()) // devsage
console.log(iterator.next()) // false
console.log(iterator.hasNext()) // true
