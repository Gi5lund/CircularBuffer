   

class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity).fill(-1);
        this.readIndex = 0;
        this.writeIndex =0 ;

    }
    add(data) {
        this.buffer[this.writeIndex] = data;
        this.writeIndex++;
        
    }
    remove() {
        const data = this.buffer[this.readIndex];
        this.buffer[this.readIndex] = null;
        this.readIndex++;
        return data;

    }
    peek() {
        const data = this.buffer[this.readIndex];
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