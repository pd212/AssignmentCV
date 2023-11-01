function descendingSort(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [5, 2, 9, 1, 3];
const sortedArray = descendingSort(inputArray);
console.log(sortedArray);
