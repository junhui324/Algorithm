function solution(s) {
    let arr = s.split(' ');
    let answer = '';
    for(i=0; i<arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    answer = String(Math.min(...arr)) + ' ' + String(Math.max(...arr));
    return answer;
}