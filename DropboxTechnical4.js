function solution(binaryString, requests) {
    let answers = [];
    let copyBinaryString = binaryString.slice();

    for (let i = 0; i < requests.length; i++) {
        if (requests[i] === 'count') {
            let numberOf1s = 0;
            for (let j = 0; j < copyBinaryString.length; j++) {
                if (copyBinaryString[j] == '1') numberOf1s++;
            }
            answers.push(numberOf1s);
        } else {
            let index = 0;
            for (let k = 0; k < copyBinaryString.length; k++) {
                if (copyBinaryString[k] === '1') {
                    index = k;
                    break;
                }
            }

            for (let l = 0; l < copyBinaryString[index]; l++) {
                console.log(copyBinaryString);

                if (copyBinaryString[l] === '0') {
                    copyBinaryString[l] = '1';
                } else copyBinaryString[l] = '0';
            }
            answers.push(index);
        }
    }
    console.log(answers);
    return answers;
}

let binaryString = '0000101',
    requests = ['count','flip','flip','flip','count'];

solution(binaryString, requests);