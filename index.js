function comp(array1, array2) {
    array1.forEach((element) => {
        for (var index = 0; index < array2.length; index++) {
            if (Math.pow(element, 2) == array2[index]) {
                array2.splice(index, 1);
            }
        }
    });
    if (array2.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
