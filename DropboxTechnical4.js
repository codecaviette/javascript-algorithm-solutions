function solution(binaryString, requests) {
    let answers = [];

    for (let i = 0; i < requests.length; i++) {
        if (requests[i] === 'count') {
            let numberOf1s = 0;
            for (let j = 0; j < binaryString.length; j++) {
                if (binaryString[j] == '1') numberOf1s++;
            }
            answers.push(numberOf1s);
        } else {
            let index = 0,
                newBinaryString = '';
            for (let k = 0; k < binaryString.length; k++) {
                if (binaryString[k] === '1') {
                    index = k;
                    break;
                }
            }
            for (let l = 0; l < index; l++) {
                binaryString[l] === '0' ? newBinaryString += '1' : newBinaryString += '0';
                console.log(newBinaryString)
            }
            binaryString = newBinaryString + binaryString.substr(index);
            console.log(binaryString);
            newBinaryString = '';
            answers.push(index);
        }
    }
    console.log(answers);
    return answers;
}

let binaryString = '0000101',
    requests = ['count','flip','flip','flip','count'];

solution(binaryString, requests);