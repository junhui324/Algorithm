function solution(n) {
    const oneCount = n.toString(2).split("1").length; //2진수 변환 후 1의 개수 구하기
    while (true) {
      n++;
      if (n.toString(2).split("1").length === oneCount) {
          return n;
      }
    }
}