function getWizzOrWozzOrNumber(number) {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'WizzWozz';
    } else if (i % 3 === 0) {
      return 'Wizz';
    } else if (i % 5 === 0) {
      return 'Wozz';
    } else {
      return i;
    }
  }
  for (let i = 1; i <= 100; i++) {
    const wizzOrWozzOrNumber = getWizzOrWozzOrNumber(i);
    console.log(wizzOrWozzOrNumber);
  }