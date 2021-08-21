const asyncFunction = async() => {
    console.log("Saludo");
}


console.log(1)
asyncFunction();
console.log(2)

const asyncGreeting = async() => 'Greetings';

const promiseGreeting = () => new Promise(((resolve) =>{
    resolve('Greetings');
}));

asyncGreeting().then(result => console.log(result + ' 1'));
promiseGreeting().then(result => console.log(result + ' 2'));