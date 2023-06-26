function solution(absolutes, signs) {
    let count = 0;
    const answer = signs.map((sign, index) => sign ? absolutes[index] : -absolutes[index]);
    for(i=0; i<answer.length; i++) {
        count += answer[i];
    } 
    return count;
}