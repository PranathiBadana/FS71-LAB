function searchElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

let numbers = [10, 20, 30, 40, 50];
let key = 40;

let index = searchElement(numbers, key);

if (index != -1) {
    console.log("Element found at index", index);
} else {
    console.log("Element not found");
}