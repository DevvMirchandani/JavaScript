// Immediately Invovked Function Epressions (IIFE)
// sometimes problems occurs due to pollutions of global scope , that's why iife is used for the immediate execution
// to use iife  - wrap the function in () and add (); in the end 
// NOTE : always use ; after using iffe , because it dosen't know where to end 

(function chai () {
    console.log(`DB Connected`)      // named iife
})();


((name) => {
    console.log(`DB Connected Two ${name}`)    // simple iife
})("Dev"); 


