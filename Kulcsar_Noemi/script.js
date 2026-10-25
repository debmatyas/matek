const categories = {
    length: [
        // Szomszédosak
        { from: 'mm', to: 'cm', factor: 10, op: 'div' },
        { from: 'cm', to: 'mm', factor: 10, op: 'mul' },
        { from: 'cm', to: 'dm', factor: 10, op: 'div' },
        { from: 'dm', to: 'cm', factor: 10, op: 'mul' },
        { from: 'dm', to: 'm', factor: 10, op: 'div' },
        { from: 'm', to: 'dm', factor: 10, op: 'mul' },
        { from: 'm', to: 'km', factor: 1000, op: 'div' },
        { from: 'km', to: 'm', factor: 1000, op: 'mul' },
        // Nem szomszédosak (km-dm, km-cm, km-mm nélkül)
        { from: 'mm', to: 'dm', factor: 100, op: 'div' },
        { from: 'dm', to: 'mm', factor: 100, op: 'mul' },
        { from: 'mm', to: 'm', factor: 1000, op: 'div' },
        { from: 'm', to: 'mm', factor: 1000, op: 'mul' },
        { from: 'cm', to: 'm', factor: 100, op: 'div' },
        { from: 'm', to: 'cm', factor: 100, op: 'mul' }
    ],
    area: [
        // Szomszédosak
        { from: 'mm²', to: 'cm²', factor: 100, op: 'div' },
        { from: 'cm²', to: 'mm²', factor: 100, op: 'mul' },
        { from: 'cm²', to: 'dm²', factor: 100, op: 'div' },
        { from: 'dm²', to: 'cm²', factor: 100, op: 'mul' },
        { from: 'dm²', to: 'm²', factor: 100, op: 'div' },
        { from: 'm²', to: 'dm²', factor: 100, op: 'mul' },
        { from: 'm²', to: 'km²', factor: 1000000, op: 'div' },
        { from: 'km²', to: 'm²', factor: 1000000, op: 'mul' },
        // Nem szomszédosak (km² elérése nélkül)
        { from: 'mm²', to: 'dm²', factor: 10000, op: 'div' },
        { from: 'dm²', to: 'mm²', factor: 10000, op: 'mul' },
        { from: 'mm²', to: 'm²', factor: 1000000, op: 'div' },
        { from: 'm²', to: 'mm²', factor: 1000000, op: 'mul' },
        { from: 'cm²', to: 'm²', factor: 10000, op: 'div' },
        { from: 'm²', to: 'cm²', factor: 10000, op: 'mul' }
    ],
    volume: [
        // Szomszédosak
        { from: 'mm³', to: 'cm³', factor: 1000, op: 'div' },
        { from: 'cm³', to: 'mm³', factor: 1000, op: 'mul' },
        { from: 'cm³', to: 'dm³', factor: 1000, op: 'div' },
        { from: 'dm³', to: 'cm³', factor: 1000, op: 'mul' },
        { from: 'dm³', to: 'm³', factor: 1000, op: 'div' },
        { from: 'm³', to: 'dm³', factor: 1000, op: 'mul' },
        { from: 'm³', to: 'km³', factor: 1000000000, op: 'div' },
        { from: 'km³', to: 'm³', factor: 1000000000, op: 'mul' },
        // Nem szomszédosak (km³ elérése nélkül)
        { from: 'mm³', to: 'dm³', factor: 1000000, op: 'div' },
        { from: 'dm³', to: 'mm³', factor: 1000000, op: 'mul' },
        { from: 'cm³', to: 'm³', factor: 1000000, op: 'div' },
        { from: 'm³', to: 'cm³', factor: 1000000, op: 'mul' }
    ],
    mass: [
        // Szomszédosak
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
        // Nem szomszédosak (t elérése nélkül)
        { from: 'mg', to: 'g', factor: 1000, op: 'div' },
        { from: 'g', to: 'mg', factor: 1000, op: 'mul' },
        { from: 'g', to: 'kg', factor: 1000, op: 'div' },
        { from: 'kg', to: 'g', factor: 1000, op: 'mul' },
        { from: 'dkg', to: 't', factor: 100000, op: 'div' },
        { from: 'cg', to: 'g', factor: 100, op: 'div' },
        { from: 'g', to: 'cg', factor: 100, op: 'mul' }
    ],
    capacity: [
        // Szomszédosak
        { from: 'ml', to: 'cl', factor: 10, op: 'div' },
        { from: 'cl', to: 'ml', factor: 10, op: 'mul' },
        { from: 'cl', to: 'dl', factor: 10, op: 'div' },
        { from: 'dl', to: 'cl', factor: 10, op: 'mul' },
        { from: 'dl', to: 'l', factor: 10, op: 'div' },
        { from: 'l', to: 'dl', factor: 10, op: 'mul' },
        { from: 'l', to: 'hl', factor: 100, op: 'div' },
        { from: 'hl', to: 'l', factor: 100, op: 'mul' },
        // Nem szomszédosak
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

let currentTasks = [];

const categorySelect = document.getElementById('category');
const startBtn = document.getElementById('start-btn');
const questionsContainer = document.getElementById('questions-container');
const tasksList = document.getElementById('tasks-list');
const submitBtn = document.getElementById('submit-btn');
const resultSummary = document.getElementById('result-summary');

startBtn.addEventListener('click', generateTenTasks);
submitBtn.addEventListener('click', checkAllAnswers);

// Segédfunkció az ezres tagoláshoz (szóközökkel)
function formatNumber(numStr) {
    if (numStr === undefined || numStr === null || numStr === '') return '';
    const parts = numStr.toString().replace(/\s+/g, '').split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}

// Bemeneti mező dinamikus formázása gépelés közben
function handleInputFormatting(e) {
    const input = e.target;
    let val = input.value.replace(',', '.').replace(/[^\d.]/g, '');
    
    // Csak egy tizedespontot engedünk meg
    const parts = val.split('.');
    if (parts.length > 2) {
        val = parts[0] + '.' + parts.slice(1).join('');
    }
    
    input.value = formatNumber(val);
}

function generateTenTasks() {
    const cat = categorySelect.value;
    const rules = categories[cat];
    currentTasks = [];
    tasksList.innerHTML = '';
    resultSummary.innerText = '';

    for (let i = 0; i < 10; i++) {
        const rule = rules[Math.floor(Math.random() * rules.length)];
        
        const randomVal = Math.random() * 500 + 0.1;
        const decimals = Math.random() > 0.4 ? 1 : (Math.random() > 0.7 ? 2 : 0);
        
        let multiplier = parseFloat(randomVal.toFixed(decimals));
        let value = rule.op === 'div' ? parseFloat((multiplier * rule.factor).toFixed(decimals)) : multiplier;
        
        let answer = rule.op === 'div' ? value / rule.factor : value * rule.factor;
        answer = parseFloat(answer.toFixed(4));

        const task = {
            id: i,
            value: value,
            from: rule.from,
            to: rule.to,
            answer: answer,
            attempts: 0
        };
        currentTasks.push(task);

        const row = document.createElement('div');
        row.className = 'task-row';
        row.id = `task-row-${i}`;

        row.innerHTML = `
            <div class="task-main">
                <span class="task-label">${i + 1}) ${formatNumber(task.value)} ${task.from} = </span>
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

            if (task.attempts >= 3) {
                solutionElem.innerText = `Helyes válasz: ${formatNumber(task.answer)} ${task.to}`;
                solutionElem.style.display = 'block';
            }
        }
    });

    resultSummary.innerText = `Eredmény: 10 / ${correctCount} helyes válasz!`;
    resultSummary.style.color = correctCount === 10 ? 'green' : '#333';
}