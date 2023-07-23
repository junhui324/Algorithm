const fibo = (n) => {
    let fiboNum = [0, 1, 1]; //조건이 2 이상의 n이므로 2까지의 fibo 배열
    for(let i = 3; i <= n; i++) {
        //int 범위 내에 값이 항상 존재할 수 있도록 1234567로 매번 나누어준다.
        fiboNum[i] = (fiboNum[i - 1] + fiboNum[i - 2]) % 1234567;
    }
    return fiboNum[n];
}

function solution(n) {
    const answer = fibo(n) % 1234567;
    return answer;
}