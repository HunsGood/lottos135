const fortuneContent = document.getElementById('fortune-content');

const zodiacFortunes = {
    "쥐": {
        summary: "총명함과 빠른 판단력이 빛을 발하는 날입니다. 새로운 기회를 포착하고 적극적으로 행동에 옮기기 좋은 시기입니다.",
        love: "새로운 인연보다는 기존의 관계에 충실하는 것이 좋습니다. 연인과의 작은 이벤트가 관계를 더욱 돈독하게 만들어 줄 것입니다.",
        money: "재물운이 점차 상승하는 추세입니다. 단기적인 이익보다는 장기적인 관점에서 투자 계획을 세우는 것이 유리합니다.",
        health: "규칙적인 식습관과 가벼운 운동으로 건강을 유지하기 좋은 날입니다. 특히 소화기 계통 관리에 신경 쓰세요."
    },
    "소": {
        summary: "성실함과 꾸준함이 결실을 맺는 날입니다. 주변의 인정을 받고 명예가 상승할 수 있습니다. 조급해하지 말고 자신의 페이스를 유지하세요.",
        love: "당신의 듬직한 모습이 이성에게 매력적으로 어필하는 날입니다. 진솔한 대화를 통해 마음을 표현해보세요.",
        money: "안정적인 재물운을 유지합니다. 큰 지출은 피하고 현재의 자산을 잘 관리하는 데 집중하는 것이 좋습니다.",
        health: "피로가 누적되기 쉬운 날입니다. 충분한 휴식과 수면을 통해 컨디션을 조절하는 것이 중요합니다."
    },
    "호랑이": {
        summary: "리더십과 추진력이 돋보이는 하루입니다. 주변 사람들을 이끌고 목표를 향해 나아갈 때 좋은 성과를 얻을 수 있습니다.",
        love: "자신감 있는 모습이 연애운을 상승시킵니다. 마음에 드는 상대가 있다면 망설이지 말고 다가가 보세요.",
        money: "과감한 도전이 예상치 못한 행운을 가져다줄 수 있습니다. 하지만 충동적인 투자는 금물입니다.",
        health: "활기찬 에너지를 주체하기 어려울 수 있습니다. 스포츠 활동을 통해 에너지를 긍정적으로 발산해보세요."
    },
    "토끼": {
        summary: "예술적 감각과 섬세함이 빛을 발하는 날입니다. 창의적인 활동이나 취미 생활을 통해 만족감을 느낄 수 있습니다.",
        love: "부드럽고 다정한 태도가 상대방의 마음을 사로잡습니다. 낭만적인 데이트를 계획해보는 것도 좋습니다.",
        money: "문화생활이나 자기계발을 위한 지출은 아끼지 마세요. 장기적으로 더 큰 가치를 가져다줄 것입니다.",
        health: "정서적인 안정이 건강에 중요한 영향을 미칩니다. 명상이나 조용한 음악 감상으로 마음을 다스려보세요."
    },
    "용": {
        summary: "자신감이 하늘을 찌르는 날입니다. 어떤 어려움도 극복할 수 있다는 긍정적인 마음으로 새로운 도전을 시작해보세요.",
        love: "화려하고 매력적인 당신의 모습에 많은 사람들이 끌리게 됩니다. 다양한 만남의 기회가 찾아올 수 있습니다.",
        money: "스케일이 큰 계획을 세우고 실행하기에 좋은 날입니다. 대담한 투자가 큰 성공으로 이어질 수 있습니다.",
        health: "에너지가 넘치는 만큼 과로하기 쉽습니다. 활동과 휴식의 균형을 맞추는 것이 중요합니다."
    },
    "뱀": {
        summary: "지혜와 통찰력이 빛을 발하여 복잡한 문제를 해결하는 데 능력을 발휘하는 날입니다. 신중한 결정이 좋은 결과로 이어집니다.",
        love: "신비로운 매력이 이성의 호기심을 자극합니다. 깊이 있는 대화를 통해 지적인 매력을 어필해보세요.",
        money: "정보를 분석하고 활용하는 능력이 재물운을 상승시킵니다. 주변의 소문에 흔들리지 말고 자신만의 판단을 믿으세요.",
        health: "정신적인 스트레스 관리가 필요한 날입니다. 혼자만의 시간을 가지며 생각을 정리하는 것이 도움이 됩니다."
    },
    "말": {
        summary: "자유로운 영혼과 넘치는 에너지를 마음껏 발산하기 좋은 날입니다. 새로운 곳으로 떠나거나 새로운 경험을 시도해보세요.",
        love: "솔직하고 열정적인 당신의 모습에 상대방이 매료됩니다. 망설이지 말고 적극적으로 마음을 표현하세요.",
        money: "활동량이 많은 만큼 지출도 늘어날 수 있습니다. 계획적인 소비 습관을 기르는 것이 중요합니다.",
        health: "야외 활동을 통해 건강을 증진시키기 좋은 날입니다. 부상에 주의하며 안전하게 즐기세요."
    },
    "양": {
        summary: "따뜻하고 온화한 마음씨가 주변 사람들에게 안정감을 주는 날입니다. 주변 사람들과의 협력이 좋은 결과로 이어집니다.",
        love: "배려심 깊은 당신의 모습이 사랑을 키워나갑니다. 상대방의 이야기에 귀 기울여주는 것만으로도 큰 힘이 됩니다.",
        money: "안정적인 재물운을 유지하지만, 다른 사람의 부탁을 거절하지 못해 손해를 볼 수 있으니 주의가 필요합니다.",
        health: "평화로운 마음을 유지하는 것이 건강의 비결입니다. 좋아하는 사람들과 함께 편안한 시간을 보내세요."
    },
    "원숭이": {
        summary: "재치와 유머 감각이 빛을 발하며, 주변 분위기를 즐겁게 만드는 역할을 하게 됩니다. 사교적인 활동에 적극적으로 참여해보세요.",
        love: "당신의 유쾌한 매력이 많은 이성에게 호감을 줍니다. 가벼운 만남보다는 진지한 관계로 발전할 가능성을 열어두세요.",
        money: "순발력과 아이디어를 활용하여 새로운 수익을 창출할 기회가 생길 수 있습니다. 기회를 놓치지 마세요.",
        health: "긍정적인 마음가짐이 건강을 유지하는 데 도움이 됩니다. 웃음은 최고의 보약임을 잊지 마세요."
    },
    "닭": {
        summary: "꼼꼼하고 계획적인 성격이 빛을 발하는 날입니다. 미뤄왔던 일을 처리하거나 새로운 계획을 세우기에 좋은 시기입니다.",
        love: "성실하고 책임감 있는 모습이 상대방에게 신뢰를 줍니다. 화려함보다는 진솔함으로 다가가는 것이 중요합니다.",
        money: "계획적인 소비와 저축으로 재산을 늘려나가기 좋은 날입니다. 가계부를 작성하는 습관을 들여보세요.",
        health: "규칙적인 생활 패턴을 유지하는 것이 건강에 중요합니다. 정해진 시간에 잠자리에 드는 습관을 기르세요."
    },
    "개": {
        summary: "정직함과 신의가 주변 사람들에게 믿음을 주는 날입니다. 어려운 상황에 처한 친구나 동료를 돕는다면 좋은 평판을 얻게 될 것입니다.",
        love: "한결같은 당신의 사랑이 상대방에게 깊은 감동을 줍니다. 변치 않는 마음을 보여주는 것이 중요합니다.",
        money: "안정적인 재물운을 유지하지만, 가까운 사람과의 금전 거래는 피하는 것이 좋습니다. 공과 사를 구분하세요.",
        health: "책임감과 스트레스로 인해 지치기 쉬운 날입니다. 반려 동물과 시간을 보내거나 산책을 통해 마음의 안정을 찾으세요."
    },
    "돼지": {
        summary: "긍정적이고 낙천적인 태도가 행운을 불러오는 날입니다. 주변 사람들과 음식을 나누며 즐거운 시간을 보내기에 좋습니다.",
        love: "푸근하고 편안한 매력이 이성에게 안정감을 줍니다. 함께 맛있는 음식을 먹으며 데이트를 즐겨보세요.",
        money: "식복이 있어 생각지 못한 곳에서 대접받을 기회가 생길 수 있습니다. 베푸는 만큼 더 큰 복이 돌아옵니다.",
        health: "과식을 주의해야 하는 날입니다. 즐겁게 먹되, 적당량을 유지하며 건강을 챙기는 것이 중요합니다."
    }
};

const todayFortunes = [
    "오늘은 새로운 가능성이 열리는 날입니다. 망설였던 일이 있다면 용기를 내어 도전해보세요. 당신의 잠재력이 빛을 발할 것입니다.",
    "뜻밖의 행운이 찾아올 수 있습니다. 긍정적인 마음으로 주변을 둘러보세요. 작은 변화가 큰 기쁨으로 이어질 수 있습니다.",
    "꾸준한 노력이 드디어 결실을 맺는 날입니다. 지치지 않고 달려온 당신에게 박수를 보냅니다. 달콤한 보상을 기대해도 좋습니다.",
    "주변 사람들과의 관계가 더욱 깊어지는 날입니다. 따뜻한 말 한마디가 오해를 풀고 신뢰를 쌓는 계기가 될 것입니다.",
    "오늘은 잠시 쉬어가도 괜찮습니다. 재충전의 시간을 통해 몸과 마음에 활력을 불어넣으세요. 휴식은 더 나은 내일을 위한 투자입니다.",
    "당신의 직감을 믿어보세요. 이성적인 판단도 중요하지만, 오늘은 마음이 이끄는 대로 행동하는 것이 더 좋은 결과를 가져올 수 있습니다.",
    "예상치 못한 만남이 기다리고 있습니다. 열린 마음으로 새로운 사람들과의 교류를 즐겨보세요. 좋은 인연으로 발전할 수 있습니다.",
    "금전적인 흐름이 원활해지는 날입니다. 현명한 소비 계획을 세운다면 만족스러운 결과를 얻을 수 있을 것입니다.",
    "창의적인 아이디어가 샘솟는 날입니다. 메모하는 습관을 통해 번뜩이는 영감을 놓치지 마세요. 새로운 프로젝트의 시작이 될 수 있습니다.",
    "건강에 조금 더 신경 써야 하는 날입니다. 균형 잡힌 식사와 충분한 수면으로 몸의 균형을 맞추는 것이 중요합니다."
];

function displayFortune() {
    // 1. 오늘의 운세 표시
    const todayFortune = todayFortunes[Math.floor(Math.random() * todayFortunes.length)];
    const todaySection = document.createElement('section');
    todaySection.className = 'fortune-section';
    todaySection.innerHTML = `
        <h3 class="fortune-title">✨ 오늘의 총운</h3>
        <p class="fortune-text">${todayFortune}</p>
    `;
    fortuneContent.appendChild(todaySection);

    // 2. 띠별 운세 표시
    const zodiacSection = document.createElement('section');
    zodiacSection.className = 'fortune-section';
    zodiacSection.innerHTML = `<h3 class="fortune-title">띠별 운세</h3>`;

    const zodiacSelector = document.createElement('div');
    zodiacSelector.className = 'zodiac-selector';

    const selectLabel = document.createElement('label');
    selectLabel.for = 'zodiac-select';
    selectLabel.textContent = '당신의 띠를 선택하세요: ';
    zodiacSelector.appendChild(selectLabel);

    const zodiacSelect = document.createElement('select');
    zodiacSelect.id = 'zodiac-select';
    zodiacSelect.innerHTML = Object.keys(zodiacFortunes).map(sign => `<option value="${sign}">${sign}띠</option>`).join('');
    zodiacSelector.appendChild(zodiacSelect);
    
    zodiacSection.appendChild(zodiacSelector);

    const zodiacResult = document.createElement('div');
    zodiacResult.className = 'zodiac-result';

    function updateZodiacFortune() {
        const selectedZodiac = zodiacSelect.value;
        const fortune = zodiacFortunes[selectedZodiac];
        zodiacResult.innerHTML = `
            <h4>${selectedZodiac}띠 총운</h4>
            <p>${fortune.summary}</p>
            <h4>❤️ 애정운</h4>
            <p>${fortune.love}</p>
            <h4>💰 재물운</h4>
            <p>${fortune.money}</p>
            <h4>💪 건강운</h4>
            <p>${fortune.health}</p>
        `;
    }

    zodiacSelect.onchange = updateZodiacFortune;
    fortuneContent.appendChild(zodiacSection);
    zodiacSection.appendChild(zodiacResult);
    
    // 페이지 로드 시 첫 번째 띠의 운세를 기본으로 표시
    updateZodiacFortune();
}

// 기존에 있던 혈액형 궁합 기능은 잠시 보류하고 새로운 운세 기능에 집중합니다.
// 필요하다면 추후 다시 추가할 수 있습니다.
displayFortune();
