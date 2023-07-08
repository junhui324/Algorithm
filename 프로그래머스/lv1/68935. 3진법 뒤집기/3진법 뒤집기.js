function solution(n) {
    let arr = n.toString(3).split(''); //10진수에서 3진수로 변환 & 배열로 저장
    arr = arr.reverse().join(''); //배열 거꾸로 만든 후 다시 문자열로 변환
    return parseInt(arr, 3); //3진수에서 10진수로 변환
}