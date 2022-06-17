function solution(operations) {

    let result = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('INSERT')) {
            let text = operations[i].slice(7);
            result.push(text);
        }
        if (operations[i].includes('BACKSPACE')) {
            if (result.length !== 0) {
                let lastLetterRemoved = result[i-1].slice(0,result[i-1].length-1);
                result.push(lastLetterRemoved);
            }
        }
        if (operations[i].includes('UNDO')) {
            if (result.length !== 0) {
                result.push(result[i-2]);
            }
        }
    }
    console.log(result) ;
    return result;

}

let operations = ['INSERT code', 'BACKSPACE','UNDO'];
solution(operations);