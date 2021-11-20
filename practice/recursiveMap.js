rMap = (fn, [head, ...tail]) => {
    if (head === undefined) {
        console.log("Head:", head, "&", "Tail:", tail)
        return [];
    } else {
        console.log("Head:", head, "&", "Tail:", tail)
        return [fn(head), ...rMap(fn, tail)];
    }
}

myArray = [1, 2, 3, 4]
double = (x) => x * 2;

rMapOutput = rMap(double, myArray)
console.log(rMapOutput)

mapOutput = myArray.map((x) => x * 2)
console.log(mapOutput)

// https://www.freecodecamp.org/news/implement-array-map-with-recursion-35976d0325b2/