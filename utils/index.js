const printMessgae = ({ msg }) => {
    console.log(`Printing the message :: ${msg}`);
}

const printMessageAndGreeting  = ({ msg, greeting }) => {
    console.log(`Printing the greeting :: ${greeting}`);
    console.log(`Printing the message :: ${msg}`);
}   


module.exports = { printMessgae }
