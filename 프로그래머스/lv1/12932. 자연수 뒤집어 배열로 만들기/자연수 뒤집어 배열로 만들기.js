function solution(n) {
    var answer = [];
    let arr = String(n);
    for(let i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }
    return answer;
}