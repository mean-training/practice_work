const uno = () => {return "I am One"};
const dos = async() => {
    setTimeout(() => {return "I am two"},3000);
}
const tres = () => {return "I am three"};


const callMe = () => {
    let one = uno();
    console.log(one);
    let two = dos();
    console.log(two);
    let three = tres();
    console.log(three);
}
callMe();