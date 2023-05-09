function comp(array1, array2) {
    //targeting every array1 element 
    array1.forEach((element) => {
        //iterating through every element of array 2
        for (var index = 0; index < array2.length; index++) {
        //checking if array1 element^2 is equal to array2 current element. If it s true current element is spliced from array 2
            if (Math.pow(element, 2) == array2[index]) {
                array2.splice(index, 1);
            }
        }
    });
    //if all elkements are spliced return true else return false
    if (array2.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
