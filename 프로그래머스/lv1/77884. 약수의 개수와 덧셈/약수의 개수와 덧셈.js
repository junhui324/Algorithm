const getDivisors = (num) => {
    const divisors = [];
    
    for(let i = 1 ; i <= num/2 ; i++){
        if(num % i === 0) divisors.push(i);
    }
    
    return [...divisors, num];
}

function solution(left, right) {
    let answer = 0;
    let arr = [];
    
    for(i=left; i<=right; i++){
        arr = getDivisors(i);
        if(arr.length % 2 === 0){
            answer += i;
        } else {
            answer -= i;
        }
    }
    
    return answer;
}