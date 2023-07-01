function solution(s) {
    let answer = s.toLowerCase().split(" ");
    answer = answer.map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    return answer.join(" ");
}