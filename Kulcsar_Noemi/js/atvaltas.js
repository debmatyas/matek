const categories = {
    length: [
        { from: 'mm', to: 'cm', factor: 10, op: 'div' },
        { from: 'cm', to: 'mm', factor: 10, op: 'mul' },
        { from: 'cm', to: 'dm', factor: 10, op: 'div' },
        { from: 'dm', to: 'cm', factor: 10, op: 'mul' },
        { from: 'dm', to: 'm', factor: 10, op: 'div' },
        { from: 'm', to: 'dm', factor: 10, op: 'mul' },
        { from: 'm', to: 'km', factor: 1000, op: 'div' },
        { from: 'km', to: 'm', factor: 1000, op: 'mul' },
        { from: 'mm', to: 'dm', factor: 100, op: 'div' },
        { from: 'dm', to: 'mm', factor: 100, op: 'mul' },
        { from: 'mm', to: 'm', factor: 1000, op: 'div' },
        { from: 'm', to: 'mm', factor: 1000, op: 'mul' },
        { from: 'cm', to: 'm', factor: 100, op: 'div' },
        { from: 'm', to: 'cm', factor: 100, op: 'mul' }
    ],
    area: [
        { from: 'mm<sup>2</sup>', to: 'cm<sup>2</sup>', factor: 100, op: 'div', rawFrom: 'mm²', rawTo: 'cm²' },
        { from: 'cm<sup>2</sup>', to: 'mm<sup>2</sup>', factor: 100, op: 'mul', rawFrom: 'cm²', rawTo: 'mm²' },
        { from: 'cm<sup>2</sup>', to: 'dm<sup>2</sup>', factor: 100, op: 'div', rawFrom: 'cm²', rawTo: 'dm²' },
        { from: 'dm<sup>2</sup>', to: 'cm<sup>2</sup>', factor: 100, op: 'mul', rawFrom: 'dm²', rawTo: 'cm²' },
        { from: 'dm<sup>2</sup>', to: 'm<sup>2</sup>', factor: 100, op: 'div', rawFrom: 'dm²', rawTo: 'm²' },
        { from: 'm<sup>2</sup>', to: 'dm<sup>2</sup>', factor: 100, op: 'mul', rawFrom: 'm²', rawTo: 'dm²' },
        { from: 'm<sup>2</sup>', to: 'km<sup>2</sup>', factor: 1000000, op: 'div', rawFrom: 'm²', rawTo: 'km²' },
        { from: 'km<sup>2</sup>', to: 'm<sup>2</sup>', factor: 1000000, op: 'mul', rawFrom: 'km²', rawTo: 'm²' },
        { from: 'mm<sup>2</sup>', to: 'dm<sup>2</sup>', factor: 10000, op: 'div', rawFrom: 'mm²', rawTo: 'dm²' },
        { from: 'dm<sup>2</sup>', to: 'mm<sup>2</sup>', factor: 10000, op: 'mul', rawFrom: 'dm²', rawTo: 'mm²' },
        { from: 'mm<sup>2</sup>', to: 'm<sup>2</sup>', factor: 1000000, op: 'div', rawFrom: 'mm²', rawTo: 'm²' },
        { from: 'm<sup>2</sup>', to: 'mm<sup>2</sup>', factor: 1000000, op: 'mul', rawFrom: 'm²', rawTo: 'mm²' },
        { from: 'cm<sup>2</sup>', to: 'm<sup>2</sup>', factor: 10000, op: 'div', rawFrom: 'cm²', rawTo: 'm²' },
        { from: 'm<sup>2</sup>', to: 'cm<sup>2</sup>', factor: 10000, op: 'mul', rawFrom: 'm²', rawTo: 'cm²' }
    ],
    volume: [
        { from: 'mm<sup>3</sup>', to: 'cm<sup>3</sup>', factor: 1000, op: 'div', rawFrom: 'mm³', rawTo: 'cm³' },
        { from: 'cm<sup>3</sup>', to: 'mm<sup>3</sup>', factor: 1000, op: 'mul', rawFrom: 'cm³', rawTo: 'mm³' },
        { from: 'cm<sup>3</sup>', to: 'dm<sup>3</sup>', factor: 1000, op: 'div', rawFrom: 'cm³', rawTo: 'dm³' },
        { from: 'dm<sup>3</sup>', to: 'cm<sup>3</sup>', factor: 1000, op: 'mul', rawFrom: 'dm³', rawTo: 'cm³' },
        { from: 'dm<sup>3</sup>', to: 'm<sup>3</sup>', factor: 1000, op: 'div', rawFrom: 'dm³', rawTo: 'm³' },
        { from: 'm<sup>3</sup>', to: 'dm<sup>3</sup>', factor: 1000, op: 'mul', rawFrom: 'm³', rawTo: 'dm³' },
        { from: 'm<sup>3</sup>', to: 'km<sup>3</sup>', factor: 1000000000, op: 'div', rawFrom: 'm³', rawTo: 'km³' },
        { from: 'km<sup>3</sup>', to: 'm<sup>3</sup>', factor: 1000000000, op: 'mul', rawFrom: 'km³', rawTo: 'm³' },
        { from: 'mm<sup>3</sup>', to: 'dm<sup>3</sup>', factor: 1000000, op: 'div', rawFrom: 'mm³', rawTo: 'dm³' },
        { from: 'dm<sup>3</sup>', to: 'mm<sup>3</sup>', factor: 1000000, op: 'mul', rawFrom: 'dm³', rawTo: 'mm³' },
        { from: 'cm<sup>3</sup>', to: 'm<sup>3</sup>', factor: 1000000, op: 'div', rawFrom: 'cm³', rawTo: 'm³' },
        { from: 'm<sup>3</sup>', to: 'cm<sup>3</sup>', factor: 1000000, op: 'mul', rawFrom: 'm³', rawTo: 'cm³' }
    ],
    mass: [
        { from: 'mg', to: 'cg', factor: 10, op: 'div' },
        { from: 'cg', to: 'mg', factor: 10, op: 'mul' },
        { from: 'cg', to: 'dg', factor: 10, op: 'div' },
        { from: 'dg', to: 'cg', factor: 10, op: 'mul' },
        { from: 'dg', to: 'g', factor: 10, op: 'div' },
        { from: 'g', to: 'dg', factor: 10, op: 'mul' },
        { from: 'g', to: 'dkg', factor: 10, op: 'div' },
        { from: 'dkg', to: 'g', factor: 10, op: 'mul' },
        { from: 'dkg', to: 'kg', factor: 100, op: 'div' },
        { from: 'kg', to: 'dkg', factor: 100, op: 'mul' },
        { from: 'kg', to: 't', factor: 1000, op: 'div' },
        { from: 't', to: 'kg', factor: 1000, op: 'mul' },
        { from: 'mg', to: 'g', factor: 1000, op: 'div' },
        { from: 'g', to: 'mg', factor: 1000, op: 'mul' },
        { from: 'g', to: 'kg', factor: 1000, op: 'div' },
        { from: 'kg', to: 'g', factor: 1000, op: 'mul' },
        { from: 'dkg', to: 't', factor: 100000, op: 'div' },
        { from: 'cg', to: 'g', factor: 100, op: 'div' },
        { from: 'g', to: 'cg', factor: 100, op: 'mul' }
    ],
    capacity: [
        { from: 'ml', to: 'cl', factor: 10, op: 'div' },
        { from: 'cl', to: 'ml', factor: 10, op: 'mul' },
        { from: 'cl', to: 'dl', factor: 10, op: 'div' },
        { from: 'dl', to: 'cl', factor: 10, op: 'mul' },
        { from: 'dl', to: 'l', factor: 10, op: 'div' },
        { from: 'l', to: 'dl', factor: 10, op: 'mul' },
        { from: 'l', to: 'hl', factor: 100, op: 'div' },
        { from: 'hl', to: 'l', factor: 100, op: 'mul' },
        { from: 'ml', to: 'dl', factor: 100, op: 'div' },
        { from: 'dl', to: 'ml', factor: 100, op: 'mul' },
        { from: 'ml', to: 'l', factor: 1000, op: 'div' },
        { from: 'l', to: 'ml', factor: 1000, op: 'mul' },
        { from: 'cl', to: 'l', factor: 100, op: 'div' },
        { from: 'l', to: 'cl', factor: 100, op: 'mul' },
        { from: 'dl', to: 'hl', factor: 1000, op: 'div' },
        { from: 'hl', to: 'dl', factor: 1000, op: 'mul' }
    ]
};

const chains = {
    length: [
        { name: 'mm', rawName: 'mm', toBase: 0.001 },
        { name: 'cm', rawName: 'cm', toBase: 0.01 },
        { name: 'dm', rawName: 'dm', toBase: 0.1 },
        { name: 'm', rawName: 'm', toBase: 1 },
        { name: 'km', rawName: 'km', toBase: 1000 }
    ],
    area: [
        { name: 'mm<sup>2</sup>', rawName: 'mm²', toBase: 0.000001 },
        { name: 'cm<sup>2</sup>', rawName: 'cm²', toBase: 0.0001 },
        { name: 'dm<sup>2</sup>', rawName: 'dm²', toBase: 0.01 },
        { name: 'm<sup>2</sup>', rawName: 'm²', toBase: 1 },
        { name: 'km<sup>2</sup>', rawName: 'km²', toBase: 1000000 }
    ],
    volume: [
        { name: 'mm<sup>3</sup>', rawName: 'mm³', toBase: 0.000000001 },
        { name: 'cm<sup>3</sup>', rawName: 'cm³', toBase: 0.000001 },
        { name: 'dm<sup>3</sup>', rawName: 'dm³', toBase: 0.001 },
        { name: 'm<sup>3</sup>', rawName: 'm³', toBase: 1 },
        { name: 'km<sup>3</sup>', rawName: 'km³', toBase: 1000000000 }
    ],
    mass: [
        { name: 'mg', rawName: 'mg', toBase: 0.000001 },
        { name: 'cg', rawName: 'cg', toBase: 0.00001 },
        { name: 'dg', rawName: 'dg', toBase: 0.0001 },
        { name: 'g', rawName: 'g', toBase: 0.001 },
        { name: 'dkg', rawName: 'dkg', toBase: 0.01 },
        { name: 'kg', rawName: 'kg', toBase: 1 },
        { name: 't', rawName: 't', toBase: 1000 }
    ],
    capacity: [
        { name: 'ml', rawName: 'ml', toBase: 0.001 },
        { name: 'cl', rawName: 'cl', toBase: 0.01 },
        { name: 'dl', rawName: 'dl', toBase: 0.1 },
        { name: 'l', rawName: 'l', toBase: 1 },
        { name: 'hl', rawName: 'hl', toBase: 100 }
    ]
};

const hardcodedReferences = {
    length: "1 km = 1 000 m | 1 m = 10 dm | 1 dm = 10 cm | 1 cm = 10 mm",
    area: "1 km<sup>2</sup> = 1 000 000 m<sup>2</sup> | 1 m<sup>2</sup> = 100 dm<sup>2</sup> | 1 dm<sup>2</sup> = 100 cm<sup>2</sup> | 1 cm<sup>2</sup> = 100 mm<sup>2</sup>",
    volume: "1 km<sup>3</sup> = 1 000 000 000 m<sup>3</sup> | 1 m<sup>3</sup> = 1 000 dm<sup>3</sup> | 1 dm<sup>3</sup> = 1 000 cm<sup>3</sup> | 1 cm<sup>3</sup> = 1 000 mm<sup>3</sup>",
    mass: "1 t = 1 000 kg | 1 kg = 100 dkg | 1 dkg = 10 g | 1 g = 10 dg | 1 dg = 10 cg | 1 cg = 10 mg",
    capacity: "1 hl = 100 l | 1 l = 10 dl | 1 dl = 10 cl | 1 cl = 10 ml"
};

let currentTasks = [];

const categorySelect = document.getElementById('category');
const startBtn = document.getElementById('start-btn');
const questionsContainer = document.getElementById('questions-container');
const tasksList = document.getElementById('tasks-list');
const submitBtn = document.getElementById('submit-btn');
const resultSummary = document.getElementById('result-summary');
const referenceContainer = document.getElementById('reference-container');

function updateReferenceText() {
    const cat = categorySelect.value;
    referenceContainer.innerHTML = `<strong>Átváltási szabályok:</strong> ${hardcodedReferences[cat]}`;
}

categorySelect.addEventListener('change', updateReferenceText);
startBtn.addEventListener('click', generateTenTasks);
submitBtn.addEventListener('click', checkAllAnswers);

updateReferenceText();

function formatNumber(numStr) {
    if (numStr === undefined || numStr === null || numStr === '') return '';
    let num = Number(numStr);
    if (!isNaN(num) && Number.isFinite(num)) {
        numStr = Number(num.toFixed(4)).toString();
    }
    const parts = numStr.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}

function handleInputFormatting(e) {
    const input = e.target;
    let val = input.value.replace(',', '.').replace(/[^\d.]/g, '');
    
    const parts = val.split('.');
    if (parts.length > 2) {
        val = parts[0] + '.' + parts.slice(1).join('');
    }
    
    input.value = formatNumber(val);
}

function generateTenTasks() {
    const cat = categorySelect.value;
    const rules = categories[cat];
    const chain = chains[cat];
    currentTasks = [];
    tasksList.innerHTML = '';
    resultSummary.innerText = '';

    for (let i = 0; i < 10; i++) {
        let text = '';
        let rawAnswerText = '';
        let answer = 0;
        let targetUnit = '';
        let targetRawUnit = '';

        const isCompound = Math.random() < 0.5;

        if (!isCompound) {
            const rule = rules[Math.floor(Math.random() * rules.length)];
            const randomVal = Math.random() * 500 + 0.1;
            const decimals = Math.random() > 0.4 ? 1 : (Math.random() > 0.7 ? 2 : 0);
            
            let multiplier = parseFloat(randomVal.toFixed(decimals));
            let value = rule.op === 'div' ? parseFloat((multiplier * rule.factor).toFixed(decimals)) : multiplier;
            
            answer = rule.op === 'div' ? value / rule.factor : value * rule.factor;
            answer = Number(answer.toFixed(4));

            text = `${formatNumber(value)} ${rule.from} = `;
            targetUnit = rule.to;
            rawAnswerText = `${formatNumber(answer)} ${rule.rawTo || rule.to}`;
        } else {
            const targetIndex = Math.floor(Math.random() * chain.length);
            targetUnit = chain[targetIndex].name;
            targetRawUnit = chain[targetIndex].rawName;

            const validUnits = chain.filter((_, idx) => idx >= targetIndex);
            if (validUnits.length < 2) {
                validUnits.push(...chain);
            }

            const unit1Obj = validUnits[Math.floor(Math.random() * validUnits.length)];
            let unit2Obj = validUnits[Math.floor(Math.random() * validUnits.length)];
            while (unit2Obj.name === unit1Obj.name && chain.length > 1) {
                unit2Obj = validUnits[Math.floor(Math.random() * validUnits.length)];
            }

            const val1 = Math.floor(Math.random() * 50) + 1;
            const val2 = Math.floor(Math.random() * 90) + 1;

            const base1 = val1 * unit1Obj.toBase;
            const base2 = val2 * unit2Obj.toBase;
            const totalBase = base1 + base2;

            answer = totalBase / chain[targetIndex].toBase;
            answer = Number(answer.toFixed(4));

            text = `${formatNumber(val1)} ${unit1Obj.name} és ${formatNumber(val2)} ${unit2Obj.name} = `;
            rawAnswerText = `${formatNumber(answer)} ${targetRawUnit}`;
        }

        const task = {
            id: i,
            text: text,
            to: targetUnit,
            rawAnswerText: rawAnswerText,
            answer: answer,
            attempts: 0
        };
        currentTasks.push(task);

        const row = document.createElement('div');
        row.className = 'task-row';
        row.id = `task-row-${i}`;

        row.innerHTML = `
            <div class="task-main">
                <span class="task-label">${i + 1}) ${task.text}</span>
                <input type="text" class="task-input" id="input-${i}" placeholder="..." autocomplete="off">
                <span class="task-label" style="text-align: left; flex: 0.3;">${task.to}</span>
            </div>
            <div class="solution-text" id="solution-${i}" style="display: none;"></div>
        `;
        tasksList.appendChild(row);

        document.getElementById(`input-${i}`).addEventListener('input', handleInputFormatting);
    }

    questionsContainer.style.display = 'block';
}

function checkAllAnswers() {
    let correctCount = 0;

    currentTasks.forEach((task, index) => {
        const inputElem = document.getElementById(`input-${index}`);
        const rowElem = document.getElementById(`task-row-${index}`);
        const solutionElem = document.getElementById(`solution-${index}`);
        
        const rawInput = inputElem.value.replace(/\s+/g, '');
        const userVal = parseFloat(rawInput);

        rowElem.classList.remove('correct', 'incorrect');

        if (!isNaN(userVal) && Math.abs(userVal - task.answer) < 0.0001) {
            rowElem.classList.add('correct');
            correctCount++;
            solutionElem.style.display = 'none';
        } else {
            rowElem.classList.add('incorrect');
            task.attempts += 1;

            if (task.attempts >= 5) {
                solutionElem.innerText = `Helyes válasz: ${task.rawAnswerText}`;
                solutionElem.style.display = 'block';
            }
        }
    });

    resultSummary.innerText = `Eredmény: 10 / ${correctCount} helyes válasz!`;
    resultSummary.style.color = correctCount === 10 ? 'green' : '#333';
}