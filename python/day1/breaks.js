
function breakTest() {
    for (let i = 0; i < 100; i++) {
        if (i == 10) {
            break
        }
        console.log(i + " inside loop");
    }
    console.log("outside loop");
}

breakTest();