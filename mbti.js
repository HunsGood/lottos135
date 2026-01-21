// Data
const qnaList = [
    {
        q: '친구들과의 약속, 나는...',
        a: [
            { answer: '주로 약속을 잡고 계획을 세우는 편이다.', type: ['J'] },
            { answer: '약속이 있는 날, 상황에 맞춰 유연하게 움직이는 편이다.', type: ['P'] },
        ]
    },
    {
        q: '새로운 사람을 만나는 것은...',
        a: [
            { answer: '에너지가 넘치고 즐거운 경험이다.', type: ['E'] },
            { answer: '재미있지만, 금방 지치고 혼자만의 시간이 필요하다.', type: ['I'] },
        ]
    },
    {
        q: '문제가 발생했을 때, 나는...',
        a: [
            { answer: '감정적인 부분보다 객관적인 사실을 바탕으로 해결책을 찾는다.', type: ['T'] },
            { answer: '주변 사람들의 감정과 관계를 우선적으로 고려한다.', type: ['F'] },
        ]
    },
    {
        q: '여행을 계획할 때...',
        a: [
            { answer: '가고 싶은 곳, 맛집, 숙소를 꼼꼼하게 찾아보고 예약한다.', type: ['J'] },
            { answer: '항공권과 숙소만 예약하고, 나머지는 현지에서 마음 가는 대로 결정한다.', type: ['P'] },
        ]
    },
    {
        q: '처음 보는 영화나 책을 고를 때, 나는...',
        a: [
            { answer: '전체적인 줄거리와 결말을 먼저 확인하고 본다.', type: ['S'] },
            { answer: '숨겨진 의미나 상징을 해석하는 것을 즐긴다.', type: ['N'] },
        ]
    },
    {
        q: '친구가 고민을 털어놓을 때, 나는...',
        a: [
            { answer: '객관적인 해결책과 현실적인 조언을 해준다.', type: ['T'] },
            { answer: '먼저 친구의 감정에 공감하고 위로부터 해준다.', type: ['F'] },
        ]
    },
    {
        q: '주말에 나는...',
        a: [
            { answer: '친구들을 만나거나 새로운 활동을 하며 에너지를 얻는다.', type: ['E'] },
            { answer: '집에서 쉬거나 혼자만의 시간을 가지며 재충전한다.', type: ['I'] },
        ]
    },
    {
        q: '나는 무언가를 설명할 때...',
        a: [
            { answer: '구체적인 사실과 실제 경험을 바탕으로 설명한다.', type: ['S'] },
            { answer: '비유나 은유를 사용하여 아이디어를 설명하는 것을 선호한다.', type: ['N'] },
        ]
    },
    {
        q: '나의 책상은...',
        a: [
            { answer: '항상 깔끔하게 정리정돈 되어 있어야 마음이 편하다.', type: ['J'] },
            { answer: '조금 어지러워도 필요한 것은 다 찾을 수 있다.', type: ['P'] },
        ]
    },
    {
        q: '나는 일을 할 때...',
        a: [
            { answer: '사람들과 교류하며 함께 일하는 것을 선호한다.', type: ['E'] },
            { answer: '혼자 조용히 집중해서 일하는 것이 더 효율적이다.', type: ['I'] },
        ]
    },
    {
        q: '나는 결정을 내릴 때...',
        a: [
            { answer: '논리적인 분석과 원칙을 중요하게 생각한다.', type: ['T'] },
            { answer: '결과가 다른 사람들에게 미칠 영향을 더 중요하게 생각한다.', type: ['F'] },
        ]
    },
    {
        q: '내가 더 중요하게 생각하는 것은...',
        a: [
            { answer: '현재 눈앞에 있는 현실적인 문제들.', type: ['S'] },
            { answer: '미래의 가능성과 새로운 아이디어.', type: ['N'] },
        ]
    },
];

const infoList = {
    'ISTJ': { name: '현실적인 전략가', desc: '책임감이 강하고 현실적인 당신! 계획을 세우고 꾸준히 실행하는 능력이 뛰어나며, 신뢰할 수 있는 사람입니다.' },
    'ISFJ': { name: '용감한 수호자', desc: '따뜻한 마음과 책임감을 가진 당신! 주변 사람들을 챙기고 돕는 것에서 큰 기쁨을 느끼는 헌신적인 유형입니다.' },
    'INFJ': { name: '선의의 옹호자', desc: '깊은 통찰력과 이상을 가진 당신! 다른 사람에게 긍정적인 영향을 미치고 세상을 더 나은 곳으로 만들고자 합니다.' },
    'INTJ': { name: '용의주도한 전략가', desc: '전략적인 사고와 풍부한 상상력을 가진 당신! 모든 일에 계획을 세우고, 지식을 탐구하는 것을 즐기는 독립적인 사상가입니다.' },
    'ISTP': { name: '만능 재주꾼', desc: '대담하고 현실적인 당신! 도구와 기계를 다루는 데 능숙하며, 새로운 경험과 도전을 즐기는 탐험가입니다.' },
    'ISFP': { name: '호기심 많은 예술가', desc: '따뜻한 마음과 예술적 감각을 지닌 당신! 현재를 즐기며, 유연하고 즉흥적인 삶을 추구하는 매력적인 모험가입니다.' },
    'INFP': { name: '열정적인 중재자', desc: '이상적인 세상을 꿈꾸는 당신! 따뜻하고 창의적이며, 자신의 가치와 신념에 따라 행동하는 낭만적인 유형입니다.' },
    'INTP': { name: '논리적인 사색가', desc: '끊임없이 지식을 탐구하는 당신! 논리적이고 분석적인 사고를 즐기며, 독창적인 아이디어를 내는 혁신가입니다.' },
    'ESTP': { name: '모험을 즐기는 사업가', desc: '넘치는 에너지와 뛰어난 현실 감각을 가진 당신! 스릴을 즐기며, 직접 부딪혀 문제를 해결하는 것을 선호하는 행동가입니다.' },
    'ESFP': { name: '자유로운 영혼의 연예인', desc: '사교적이고 즉흥적인 당신! 주변 사람들을 즐겁게 해주는 타고난 스타이며, 현재의 순간을 마음껏 즐깁니다.' },
    'ENFP': { name: '재기발랄한 활동가', desc: '열정과 창의력이 넘치는 당신! 사람들과의 교류를 즐기며, 긍정적인 에너지로 주변에 활기를 불어넣는 사교적인 유형입니다.' },
    'ENTP': { name: '뜨거운 논쟁을 즐기는 변론가', desc: '지적인 도전을 즐기는 당신! 똑똑하고 재치 있으며, 기존의 방식에 의문을 제기하고 새로운 가능성을 탐구하는 것을 좋아합니다.' },
    'ESTJ': { name: '엄격한 관리자', desc: '현실적이고 조직적인 당신! 질서와 전통을 중시하며, 사람과 프로젝트를 관리하는 데 뛰어난 능력을 가진 리더입니다.' },
    'ESFJ': { name: '사교적인 외교관', desc: '타인에게 깊은 관심을 가진 당신! 사교적이고 인기가 많으며, 주변 사람들을 돕고 지지하는 데서 큰 보람을 느낍니다.' },
    'ENFJ': { name: '정의로운 사회운동가', desc: '카리스마와 열정을 가진 당신! 다른 사람의 성장을 돕고, 세상을 더 나은 곳으로 만들기 위해 사람들을 이끄는 리더입니다.' },
    'ENTJ': { name: '대담한 통솔자', desc: '타고난 리더십과 대담함을 가진 당신! 도전을 두려워하지 않으며, 목표를 달성하기 위해 사람들을 이끌고 전략을 세우는 데 능숙합니다.' }
};


const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = qnaList.length;
const select = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

function start(){
    main.style.display = "none";
    qna.style.display = "block";
    let qIdx = 0;
    goNext(qIdx);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }

    const qBox = document.querySelector('.question__title');
    qBox.innerHTML = qnaList[qIdx].q;

    const answerBox = document.querySelector('.answer__list');
    answerBox.innerHTML = ''; // Clear previous answers

    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    const status = document.querySelector('.status-bar__progress');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function addAnswer(answerText, qIdx, aIdx){
    const answerBox = document.querySelector('.answer__list');
    const answer = document.createElement('button');
    answer.classList.add('answer__btn');
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        const children = document.querySelectorAll('.answer__btn');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
        }

        setTimeout(() => {
            const target = qnaList[qIdx].a[aIdx].type;
            for(let i = 0; i < target.length; i++){
                select[target[i]]++;
            }
            goNext(++qIdx);
        }, 450);
    }, false);

    answerBox.appendChild(answer);
}

function goResult(){
    qna.style.display = "none";
    result.style.display = "block";

    let mbti = "";
    mbti += select.E > select.I ? "E" : "I";
    mbti += select.N > select.S ? "N" : "S";
    mbti += select.T > select.F ? "T" : "F";
    mbti += select.J > select.P ? "J" : "P";

    const resultName = document.querySelector('.result__title');
    resultName.innerHTML = `${mbti} - ${infoList[mbti].name}`;

    const resultDesc = document.querySelector('.result__desc');
    resultDesc.innerHTML = infoList[mbti].desc;
    
    // You can set a relevant image if you have them
    const resultImg = document.querySelector('.result__img');
    // Example: resultImg.src = `img/${mbti.toLowerCase()}.png`;
    resultImg.style.display = 'none'; // Hide if no image
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    if (main && qna && result) {
        main.style.display = "block";
        qna.style.display = "none";
        result.style.display = "none";
    }
});