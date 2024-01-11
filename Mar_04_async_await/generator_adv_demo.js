function*fetchNextElement(){
    console.log("inside generatot");
    const x=10;
    yield 11;
    console.log("enter after a yield");
    const y= x+(yield 30);

    console.log("value of y", y);

}
console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next(10));
console.log("second", iter.next());
console.log("third", iter.next(30));
