// JavaScript source code
"use strict";
window.addEventListener("load",start)
class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity).fill(null);
        this.readIndex = 0;
        this.writeIndex =0 ;

    }
    add(data) {
        this.buffer[this.writeIndex] = data;
        this.writeIndex++;
        console.log(this.writeIndex);
    }
    remove() {
        peek();
        this.buffer[this.readIndex] = null;
        this.readIndex++;
        console.log(this.readIndex);

    }
    peek() {
        const data = this.buffer[this.readIndex];
        console.log(data)
        return data;
    }
    isEmpty() {
        return this.readIndex === this.writeIndex;
    }
    isFull() {
        return (this.writeIndex + 1) % this.capacity === this.readIndex;

    }
    size() {
        if (this.writeIndex >= this.readIndex) {
            return this.capacity - (this.writeIndex - this.readIndex);
        } else {
            return this.readIndex - this.writeIndex;
        }
    }

}
function start() {
    const buffer = new CircularBuffer(10);
}
