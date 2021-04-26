Understanding Event Emitters
Event emitters is a core module for Node developers to implement the observer pattern. The observer pattern has the following: an observer, an event and an event emitter.

The flow goes like this:

A class is created with class
A class inherits from the EventEmitter class using extends
An instance of an object is created from the class with new
An observer (a.k.a. event listener) is created with .on(eventName, eventHandler)
An event is emitted with emit() and the event handler in the observer is executed.

![event emitters](../../imd/event_emitters.png)

Consider this simple observer pattern code which creates a Job class and then instantiates it. Later on, the object created from the class has an observer/event listener attached (job.on('done'...)) and an event is emitted/triggered.

simple.js:

```js
const EventEmitter = require('events')

class Job extends EventEmitter {}
job = new Job()

job.on('done', function(timeDone){
  console.log('Job was pronounced done at', timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()  // remove  all observers
```

The result will be:

Job was pronounced done at


Multiple Event Triggers
Events can be triggered/emitted multiple times. For example, in knock-knock.js the knock event is emitted multiple times.

knock-knock.js:

```js
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.on('knock', function() {
  console.log('Who\'s there?')
})

emitter.on('knock', function() {
  console.log('Go away!')
})

emitter.emit('knock')
emitter.emit('knock')
```

The result will be:

Who's there?
Go away!
Who's there?
Go away!
Executing Observer Code Only once
emitter.once(eventName, eventHandler) will execute observer code just once, no matter how many time this particular event was triggered.

knock-knock-once.js:

```js
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.once('knock', function() {
  console.log('Who\'s there?')
})


emitter.emit('knock')
emitter.emit('knock')
```

The result will be:

Who's there?
