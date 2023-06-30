function solution(price, money, count) {
    let total = 0;
    for(i=1; i<=count; i++){
        total += i * price;
    }
    if(money - total > 0){
        return 0;
    }
    return -(money - total);
}