/**
 * Spécification : cette fonction prend en paramètre un tableau d'entier et l'incrémente
 * @param {array} Array<Number> Un tableau d'entier (1-9) ['9','9','9']
 * @returns {array} Array<Number> Un tableau d'entier (1-9) incrémenté [1,0,0,0]
*/
const increment = (array) => {
    let array_reverse = array.reverse()
    for (let index = 0; index < array_reverse.length; index++) {

        if ((array_reverse[index]+1)<10){
            array_reverse[index] = array_reverse[index]+1;
            index = array_reverse.length;
        }else{
            array_reverse[index] = 0;
        }
    }
    if(array_reverse[array_reverse.length-1] === 0){
        array_reverse[array_reverse.length]=1;
    }
    return array_reverse.reverse();
}

/**
 * Spécification : cette fonction prend entier et retourne un console.log
 * @param {Number} N<Number> Un un nombre entier 
 * @returns {console.log} 
 * if number can be divided by 3: display **Fizz** ;
 * if number can be divided by 5: display **Buzz** ;
 * if number can be divided by 3 **AND** 5 : display **FizzBuzz** ;
 * else: display the number.
*/
const displayN = (N) => {

    if (N%3==0){
        if (N%5==0){
            console.log('FizzBuzz');
        }else{
            console.log('Fizz');
        }

    }else{
        if (N%5==0){
            console.log('Buzz');
        }else{
            console.log(N);
        }
        
    }
};
/**
 * Dans ce programme le nombre de test maximum est de deux.
 */

