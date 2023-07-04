function solution(s){
    let stack = 0;
    for (const char of s) {
        if (char === '(') {
            stack++;
        } else {
            stack--;
        }
        if (stack < 0) {
            return false;
        }
    }
    return !stack;
}