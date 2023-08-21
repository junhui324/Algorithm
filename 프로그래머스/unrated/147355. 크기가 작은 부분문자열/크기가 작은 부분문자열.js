function solution(t, p) {
    const numberP = Number(p);
    let count = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        const slicedT = t.slice(i, i + p.length); //t를 p 길이만큼 잘라서 비교
        const numberT = Number(slicedT); //자른 문자열을 숫자로 변경
        
        if(numberT <= numberP){
            count++;
        }
    }
    
    return count;
}