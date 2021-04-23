for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log('WizzWozz');
        } else {
            console.log('Wizz');
        }
    } else if (i % 5 === 0) {
        console.log('Wozz');
    } else {
        console.log(i);
    }
}
