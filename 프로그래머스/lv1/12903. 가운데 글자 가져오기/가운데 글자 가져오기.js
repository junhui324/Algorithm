function solution(s) {
    let answer = ""
    const len = s.length;
    len % 2 === 0 ? answer = s[len / 2 - 1] + s[len / 2] : answer = s[Math.floor(len / 2)];
    return answer;
}