

function findMinAndRemoveSorted(array) {
    let min = array[0];
    let i = 0;
    const arrayLength = array.length;
    while (i != arrayLength) {
        if (array[i] <= min) {
            min = array[i];
            array.splice(i, 1);
        }
        i++;
    }
    return min;
}

function merge(array1, array2) {
    let min = 0;
    let i = 0;
    let merged_array = []
    let totalLength = array1.length + array2.length;

    while (i < totalLength) {
        if (array1.length !== 0 && (array1[0] < array2[0]) || array2.length === 0) {
            min = findMinAndRemoveSorted(array1);
        } else if (array2.length !== 0 || array1.length === 0) {
            min = findMinAndRemoveSorted(array2);
        }

        if (min) merged_array.push(min);
        i++;
    }
    return merged_array
}

function mergeSort(array) {
    let midpoint = array.length/2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    if (array.length < 2) {
        return array;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }


}