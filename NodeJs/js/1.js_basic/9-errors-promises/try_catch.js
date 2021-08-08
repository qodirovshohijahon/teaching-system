// Error handling

// try {
//     // code
// } catch {
//     // handling || show error messages
// }

try {
    // console.log('Starting try block');

    // request;
    // // our code


    // console.log('Ending try block');
} catch (err) {
    console.log('Error handling message')
    console.log(err.stack) // debugging
    console.log(err.name)
    console.log(err.message)
}

// throwing errors

try {
    let data = '{"name" : "Ali"}';

    let user = JSON.parse(data);
    if (!user.age) {
        throw new Error('age maydoni yo\'q ');
    }
    console.log(user.age)
} catch (err) {
 //   console.log("Error has occured " + err.message)
}


 Error, ReferenceError, TypeError, SyntaxError

 let error = new Error()
// console.log(error.stack)

let syntaxError = new SyntaxError('Sintaksis xatolik yuz berdi')
// console.log(syntaxError.message)
