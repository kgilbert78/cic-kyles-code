const items = [5, 6, 7];
// const item1 = items[0];
// const item2 = items[1];
// const item3 = items[2];
const [el1, el2, el3] = items;
console.log(items);

const [title, setTitle] = useState("My Title");
// const stateArray = useState("My Title");
// const title = stateArray[0];
// const setTitle = stateArray[1];
// // setTitle is a function, updates the value of title with useState (imported from react)