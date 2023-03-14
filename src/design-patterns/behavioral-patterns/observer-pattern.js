// Define a one to many dependency relationships,
// from one object (subject) to many other objects (observers)

function Subject() {
    this.observers = []
}

Subject.prototype = {
    subscribe(fn) {
        this.observers.push(fn)
    },
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove)
    },
    fire() {
        console.log('Subject fired event! Notifying all observers.')
        this.observers.forEach(obs => obs.call())
    },
}

const subject = new Subject()

const obs1 = () => {
    console.log('OBS1: Hello world')
}

const obs2 = () => {
    console.log('OBS2: Hey')
}

subject.subscribe(obs1)
subject.subscribe(obs2)

subject.fire()

subject.unsubscribe(obs2)

subject.fire()
