function solution(s){
    var answer = true;
    var arr = s.toLowerCase().split('');
    var p = 0;
    var y = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] === 'p'){
            p++;
        }
        if(arr[i] === 'y'){
            y++;
        }
    }
    
    if(p === y) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

//직관적이고 깔끔한 코드 예시
//return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
