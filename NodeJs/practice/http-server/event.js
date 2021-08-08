const EventEmitter = require('events')
const emitter = new EventEmitter()


// register a listener
//addEventListener == on => true

emitter.on('sher', () => {
    console.log(`Listener called`)
})

// Raise an event
console.log(emitter.emit('sher'))