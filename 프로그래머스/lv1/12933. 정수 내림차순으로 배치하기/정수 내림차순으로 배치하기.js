function solution(n) {
    let arr = String(n);
    arr = arr.split('');
    arr = arr.sort((a, b)=> b - a).join('')
    return Number(arr);
}