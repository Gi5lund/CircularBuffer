   

class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity).fill(-1);
        this.readIndex = 0;
        this.writeIndex =0 ;

    }
    add(data) {
        if (this.isFull()) {
            throw new Error('Buffer is full');
        }else if(this.writeIndex === this.capacity){
            this.writeIndex = 0;
        }
        this.buffer[this.writeIndex] = data;
        this.writeIndex++;
    }
   
    remove() {
        if (this.isEmpty()) {
            throw new Error('Buffer is empty');
        } else {
        const data = this.buffer[this.readIndex];
        this.buffer[this.readIndex] = null;
        if(this.readIndex === this.capacity - 1){
          this.readIndex= 0;  
        }else{
          this.readIndex++;
        }
         return data;
      }

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