function solution(x) {
    let arr = String(x).split('');
    let sum = 0;
    
    for(let i=0; i<arr.length; i++){
        sum += Number(arr[i]);
    }
    
    if(x % sum === 0){
        return true;
    }
    
    return false;
    
}