function solution(s) {
    let arr = [0, 0];
    let len = 0;
    
    while(s.length > 1) {
        len = s.length;
        s = s.split('0').join('');
        arr[0]++;
        arr[1] += (len - s.length);
        s = s.length.toString(2);
    }
    
    return arr;
}