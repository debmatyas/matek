// Segédfüggvény véletlenszerű hosszúsággeneráláshoz vegyes mértékegységekkel (cm, dm, m)
function getRandomLength(min, max) {
    const units = [
        { name: 'cm', toCm: 1 },
        { name: 'dm', toCm: 10 },
        { name: 'm', toCm: 100 }
    ];
    const unitObj = units[Math.floor(Math.random() * units.length)];
    let val = Math.floor(Math.random() * (max - min + 1)) + min;
    return {
        val: val,
        unit: unitObj.name,
        cm: val * unitObj.toCm
    };
}

const shapes = [
    { 
        id: 'deltoid', 
        name: 'deltoid', 
        file: 'deltoid.png', 
        formulaFile: 'deltoid_terulet.png',
        calc: () => {
            let eObj = getRandomLength(4, 12);
            let fObj = getRandomLength(4, 12);
            let areaCm2 = (eObj.cm * fObj.cm) / 2;
            return { 
                text: `Határozd meg a deltoid területét, ha az átlói e = ${eObj.val} ${eObj.unit} és f = ${fObj.val} ${fObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'derekszogu_haromszog', 
        name: 'derékszögű háromszög', 
        file: 'derekszogu_haromszog.png', 
        formulaFile: 'haromszog_terulet.png',
        calc: () => {
            let aObj = getRandomLength(3, 12);
            let bObj = getRandomLength(3, 12);
            let areaCm2 = (aObj.cm * bObj.cm) / 2;
            return { 
                text: `Mennyi a derékszögű háromszög területe, ha a befogói a = ${aObj.val} ${aObj.unit} és b = ${bObj.val} ${bObj.unit}?`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'haromszog', 
        name: 'általános háromszög', 
        file: 'haromszog.jpg', 
        formulaFile: 'haromszog_terulet.png',
        calc: () => {
            let aObj = getRandomLength(4, 15);
            let maObj = getRandomLength(3, 10);
            let areaCm2 = (aObj.cm * maObj.cm) / 2;
            return { 
                text: `Számítsd ki a háromszög területét, ha az alapja a = ${aObj.val} ${aObj.unit}, a hozzá tartozó magasság pedig m<sub>a</sub> = ${maObj.val} ${maObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'hurtrapez', 
        name: 'húrtrapéz', 
        file: 'hurtrapez.png', 
        formulaFile: 'trapez_terulet.png',
        calc: () => {
            let aObj = getRandomLength(6, 14);
            let cObj = getRandomLength(2, 6);
            let mObj = getRandomLength(3, 8);
            let areaCm2 = ((aObj.cm + cObj.cm) * mObj.cm) / 2;
            return { 
                text: `Határozd meg a húrtrapéz területét, ha az alapjai a = ${aObj.val} ${aObj.unit}, c = ${cObj.val} ${cObj.unit}, a magassága pedig m = ${mObj.val} ${mObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'kor', 
        name: 'kör', 
        file: 'kor.jpg', 
        formulaFile: 'kor_terulet.png',
        calc: () => {
            let rObj = getRandomLength(2, 8);
            // Itt most fixen 3.14-gyel számolunk
            let areaCm2 = rObj.cm * rObj.cm * 3.14;
            return { 
                text: `Mennyi a kör területe, ha a sugara r = ${rObj.val} ${rObj.unit}? (Használd a π ≈ 3.14-et)`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'negyzet', 
        name: 'négyzet', 
        file: 'negyzet.jpg', 
        formulaFile: 'negyzet_terulet.png',
        calc: () => {
            let aObj = getRandomLength(2, 12);
            let areaCm2 = aObj.cm * aObj.cm;
            return { 
                text: `Számítsd ki a négyzet területét, ha az oldala a = ${aObj.val} ${aObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'paralelogramma', 
        name: 'paralelogramma', 
        file: 'paralelogramma.png', 
        formulaFile: 'paralelogramma_terulet.png',
        calc: () => {
            let aObj = getRandomLength(3, 12);
            let mObj = getRandomLength(2, 10);
            let areaCm2 = aObj.cm * mObj.cm;
            return { 
                text: `Mennyi a paralelogramma területe, ha az oldala a = ${aObj.val} ${aObj.unit}, a tartozó magasság pedig m = ${mObj.val} ${mObj.unit}?`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'rombusz', 
        name: 'rombusz', 
        file: 'rombusz.png', 
        formulaFile: 'rombusz_terulet.png',
        calc: () => {
            let eObj = getRandomLength(4, 12);
            let fObj = getRandomLength(4, 12);
            let areaCm2 = (eObj.cm * fObj.cm) / 2;
            return { 
                text: `Számítsd ki a rombusz területét, ha az átlói e = ${eObj.val} ${eObj.unit} és f = ${fObj.val} ${fObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'teglalap', 
        name: 'téglalap', 
        file: 'teglalap.jpg', 
        formulaFile: 'teglalap_terulet.png',
        calc: () => {
            let aObj = getRandomLength(2, 12);
            let bObj = getRandomLength(2, 12);
            let areaCm2 = aObj.cm * bObj.cm;
            return { 
                text: `Mennyi a téglalap területe, ha az oldalai a = ${aObj.val} ${aObj.unit} és b = ${bObj.val} ${bObj.unit}?`, 
                answerCm2: areaCm2 
            };
        }
    },
    { 
        id: 'trapez', 
        name: 'trapéz', 
        file: 'trapez.png', 
        formulaFile: 'trapez_terulet.png',
        calc: () => {
            let aObj = getRandomLength(6, 14);
            let cObj = getRandomLength(2, 6);
            let mObj = getRandomLength(3, 8);
            let areaCm2 = ((aObj.cm + cObj.cm) * mObj.cm) / 2;
            return { 
                text: `Határozd meg a trapéz területét, ha az alapjai a = ${aObj.val} ${aObj.unit}, c = ${cObj.val} ${cObj.unit}, a magassága pedig m = ${mObj.val} ${mObj.unit}!`, 
                answerCm2: areaCm2 
            };
        }
    }
];

let score = 0;
let total = 0;
let currentShape = null;
let currentCalculation = null;

const shapeImage = document.getElementById('shapeImage');
const optionsContainer = document.getElementById('options-container');
const calcContainer = document.getElementById('calc-container');
const calcInput = document.getElementById('calcInput');
const calcUnitSelect = document.getElementById('calcUnitSelect');
const calcSubmitBtn = document.getElementById('calcSubmitBtn');
const nextBtn = document.getElementById('next-btn');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const modeSelect = document.getElementById('modeSelect');
const questionText = document.getElementById('questionText');
const quizContainer = document.getElementById('quiz-container');
const formulaContainer = document.getElementById('formula-container');
const scoreContainer = document.getElementById('score-container');

function initQuiz() {
    nextBtn.style.display = 'none';
    
    calcInput.value = '';
    calcInput.disabled = false;
    calcUnitSelect.disabled = false;
    calcSubmitBtn.disabled = false;
    
    currentShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeImage.src = currentShape.file;
    
    const mode = modeSelect.value;
    
    if (mode === 'recognition') {
        optionsContainer.style.display = 'grid';
        calcContainer.style.display = 'none';
        questionText.innerText = "Milyen síkidom látható a képen?";
        
        let options = [currentShape.name];
        while (options.length < 4) {
            let randomShape = shapes[Math.floor(Math.random() * shapes.length)].name;
            if (!options.includes(randomShape)) {
                options.push(randomShape);
            }
        }
        options.sort(() => Math.random() - 0.5);
        
        optionsContainer.innerHTML = '';
        options.forEach(optionVal => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = optionVal;
            btn.addEventListener('click', () => selectRecognitionAnswer(btn, optionVal));
            optionsContainer.appendChild(btn);
        });
        
    } else if (mode === 'area_quiz') {
        optionsContainer.style.display = 'grid';
        calcContainer.style.display = 'none';
        questionText.innerText = `Mennyi a(z) ${currentShape.name} területe?`;
        
        let options = [currentShape.formulaFile];
        while (options.length < 4) {
            let randomShape = shapes[Math.floor(Math.random() * shapes.length)].formulaFile;
            if (!options.includes(randomShape)) {
                options.push(randomShape);
            }
        }
        options.sort(() => Math.random() - 0.5);
        
        optionsContainer.innerHTML = '';
        options.forEach(optionVal => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            const img = document.createElement('img');
            img.src = optionVal;
            img.alt = "Terület képlet";
            img.style.maxWidth = "100%";
            img.style.maxHeight = "50px";
            img.style.objectFit = "contain";
            btn.appendChild(img);
            
            btn.addEventListener('click', () => selectAreaQuizAnswer(btn, optionVal));
            optionsContainer.appendChild(btn);
        });
        
    } else if (mode === 'calculation') {
        optionsContainer.style.display = 'none';
        calcContainer.style.display = 'flex';
        
        currentCalculation = currentShape.calc();
        questionText.innerHTML = currentCalculation.text;
        
        setTimeout(() => calcInput.focus(), 50);
    }
}

function selectRecognitionAnswer(selectedBtn, selectedVal) {
    total++;
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === currentShape.name) {
            btn.classList.add('correct');
        }
    });
    
    if (selectedVal === currentShape.name) {
        score++;
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        setTimeout(initQuiz, 500);
    } else {
        selectedBtn.classList.add('incorrect');
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        nextBtn.style.display = 'block';
    }
}

function selectAreaQuizAnswer(selectedBtn, selectedVal) {
    total++;
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.querySelector('img').src.includes(currentShape.formulaFile)) {
            btn.classList.add('correct');
        }
    });
    
    if (selectedVal === currentShape.formulaFile) {
        score++;
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        setTimeout(initQuiz, 500);
    } else {
        selectedBtn.classList.add('incorrect');
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        nextBtn.style.display = 'block';
    }
}

function checkCalculation() {
    const userVal = parseFloat(calcInput.value.replace(',', '.'));
    if (isNaN(userVal)) return;

    total++;
    calcSubmitBtn.disabled = true;
    calcInput.disabled = true;
    calcUnitSelect.disabled = true;

    const unitMultiplier = parseFloat(calcUnitSelect.value);
    const userCm2 = userVal * unitMultiplier;
    const correctCm2 = currentCalculation.answerCm2;

    if (Math.abs(userCm2 - correctCm2) < 0.2 * Math.max(1, correctCm2)) {
        score++;
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        setTimeout(initQuiz, 800);
    } else {
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        const displayCorrect = parseFloat(correctCm2.toFixed(2));
        questionText.innerHTML += `<br><span style="color: #721c24; font-weight: bold;">Helytelen! A helyes válasz kb. ${displayCorrect} cm²</span>`;
        nextBtn.style.display = 'block';
        nextBtn.focus();
    }
}

calcSubmitBtn.addEventListener('click', checkCalculation);
calcInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkCalculation();
});

function renderFormulaGuide() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    formulaContainer.style.display = 'block';
    
    formulaContainer.innerHTML = '';
    const uniqueFormulas = [...new Map(shapes.map(s => [s.formulaFile, s])).values()];
    
    uniqueFormulas.forEach(shape => {
        const item = document.createElement('div');
        item.className = 'formula-item';
        item.innerHTML = `
            <span class="formula-name">${shape.name}</span>
            <img src="${shape.formulaFile}" alt="Képlet" style="max-height: 40px; object-fit: contain;">
        `;
        formulaContainer.appendChild(item);
    });
}

modeSelect.addEventListener('change', () => {
    const mode = modeSelect.value;
    if (mode === 'formula_guide') {
        renderFormulaGuide();
    } else {
        quizContainer.style.display = 'block';
        scoreContainer.style.display = 'block';
        formulaContainer.style.display = 'none';
        score = 0;
        total = 0;
        scoreSpan.innerText = score;
        totalSpan.innerText = total;
        initQuiz();
    }
});

nextBtn.addEventListener('click', () => {
    initQuiz();
    if (modeSelect.value === 'calculation') {
        calcInput.focus();
    }
});

initQuiz();