const uno = () => {return "I am One"};
const dos = async() => {
    setTimeout(() => {return "I am two"},3000);
}
const tres = () => {return "I am three"};

const dos_1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I am two");
        },3000);
    })
}


const callMe = async() => {
    let one = uno();
    console.log(one);
    let two =  dos();
    console.log(two);
    let two_1 = await dos_1();
    console.log(two_1);
    let three = tres();
    console.log(three);
}
callMe();