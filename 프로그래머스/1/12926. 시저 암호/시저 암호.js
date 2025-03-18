function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' '; // 백은 공백

        const base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0); // 대소문자 범위 따로..
        
        // 유니코드로 변환해서 n만큼 밀고, 다시 유니코드를 문자로 변환
        return String.fromCharCode((char.charCodeAt(0) - base + n) % 26 + base);
    }).join('');
}