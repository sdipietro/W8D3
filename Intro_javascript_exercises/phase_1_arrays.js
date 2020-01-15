Array.prototype.uniq = function() {
    const result = [];

    this.forEach((el)=> {
        if (!result.includes(el)) {
            result.push(el);
        }
    });
    return result;
};

// console.log([1, 2, 2, 3, 3, 3].uniq());
// console.log([1, 4, 5, 3, 3, 3, 10, 10, 3, 1].uniq());

Array.prototype.twoSum = function() {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

// console.log([1, 2, 3, -3, 5, -2, 8].twoSum());

Array.prototype.transpose = function() {
    let i = 0
    const result = [];

    this.forEach((el) => {
        const temp = [];
        this.forEach((el2) => {
            temp.push(el2[i]);
        })
        i++;
        result.push(temp);
    })
    return result;
};

// console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

function squared(num) {
    return num ** 2;
};

// console.log([1, 2, 3, 4].myEach(squared));

Array.prototype.myMap = function(cb) {
    const result = [];

    this.myEach((el) => {
        result.push(cb(el));
    })

    return result;

};

// console.log([1, 2, 3, 4].myMap(squared));

Array.prototype.myReduce = function(cb, initialValue) {
    // debugger
    let i = (initialValue) ? 0 : 1;
    initialValue = initialValue || this[0];

    for (i; i < this.length; i++) {
        initialValue = cb(initialValue, this[i]);
    }
    return initialValue;
};


// without initialValue
console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
})); // => 6

// with initialValue
console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25)); // => 31


/*
    def bubblesort(arr)
        sorted = false
        while (!sorted)
            sorted = true
            (0...arr.length-1).each do |i|
                if arr[i] > arr[i+1]
                    arr[i], arr[i+1] = arr[i+1], arr[i]
                    sorted = false
                end
            end
        end
        return arr
    end
*/

Array.prototype.bubblesort = function(){
    let sorted = false;
    while (!sorted){
        sorted = true;
        for(let i = 0; i < this.length - 1; i++){
            if (this[i] > this[i+1]){
                this[i], this[i+1] = this[i+1], this[i];
                sorted = false;
            }
        }
    }
    return this;
};

console.log([1, 7, 4, 9, 10, 0, 3, 2].bubblesort());