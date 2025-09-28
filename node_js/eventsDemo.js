import { EventEmitter } from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

function greetHandler(name) {
    console.log(`Hello, ${name}!`);
}

function goodbyeHandler(name) {
    console.log(`Goodbye, ${name}!`);
}

// Register event listeners
eventEmitter.on('greet', greetHandler);
eventEmitter.on('goodbye', goodbyeHandler);

// Emit events
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('goodbye', 'Bob');

// Error handling
eventEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

// Emit an error event
eventEmitter.emit('error', new Error('Something went wrong!'));