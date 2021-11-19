var arr2d =
    [[2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]];

function isPresent2d(outer, value) {
    for (var i = 0; i < outer.length; i++) {
        console.log("outer = " + outer[i]);

        for (var j = 0; j < outer[i].length; j++) {
            // console.log("inner = " + inner[j]);

            if (outer[i][j] == value) { //arr2d[i][j]
                console.log("found it");

                return true;
            }
        }
    }
    console.log("didn't find it");

    return false;
}

// isPresent2d(arr2d, 3);


function adjacentValues(arr, value1, value2) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j] == value1 && arr[i][j + 1] == value2) {
                console.log("Found adjacent values!");
            }
        }
    }
    console.log("Couldn't find adjacent values");

}

adjacentValues(arr2d, 2, 7);