function solution(video_len, pos, op_start, op_end, commands) {
    const videoSec = transferMMSSToSec(video_len)
    const posSec = transferMMSSToSec(pos)
    const opStartToSec =  transferMMSSToSec(op_start)
    const opEndToSec = transferMMSSToSec(op_end)
    let curPos = posSec
    
    // 오프닝 생략 함수
    function openingSkip() {
        if(curPos >= opStartToSec && curPos <= opEndToSec) {
            curPos = opEndToSec
        }
    }
    
    // 시작 부분이 오프닝 부분에 해당한다면 생략
    openingSkip()
    
    for(const command of commands) {
        switch(command) {
            // 명령에 따라 현재 위치를 조정하고 오프닝 및 최대 최소시간 검사
            case 'prev': {
                curPos -= 10
                if(curPos < 0) curPos = 0
                openingSkip()
                break
            }
            case 'next': {
                curPos += 10
                if(curPos > videoSec) curPos = videoSec
                openingSkip()
                break
            }
            default: {
                break
            }
        }
    }
    
    const curMM = Math.floor(curPos/60)
    const curSS = curPos % 60
    // 초 단위의 수를 문자열 분, 초로 변환
    const strCurMM = String(curMM).padStart(2, 0)
    const strCurSS = String(curSS).padStart(2, 0)
    
    return strCurMM + ":" + strCurSS
}

// MM:SS 형태의 문자열을 초 단위로 변환
function transferMMSSToSec(str) {
    const [strMM, strSS] = str.split(":").map(Number)
    return strMM * 60 + strSS
}