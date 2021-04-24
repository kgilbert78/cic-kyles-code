for (let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('WizzWozz');
    } else if (i % 5 === 0) {
            console.log('Wozz');
    } else if (i % 3 === 0) {
        console.log('Wizz');
    } else {
        console.log(i);
    }
}
