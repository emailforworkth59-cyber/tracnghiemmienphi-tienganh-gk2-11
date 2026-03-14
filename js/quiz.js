// ===== shuffle =====

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ===== shuffle đáp án =====

function shuffleOptions(question) {
  if (question.type !== "mcq") return question;
  if (!quizConfig.shuffleOptions) return question;

  let arr = question.options.map((op, i) => ({
    text: op,
    correct: i === question.answer,
  }));

  shuffle(arr);

  question.options = arr.map((o) => o.text);
  question.answer = arr.findIndex((o) => o.correct);

  return question;
}

let currentQuestions = [];
let progressItems = [];

// ===== render quiz =====

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  let mcq = questions
    .filter((q) => q.type === "mcq")
    .map((q) => shuffleOptions({ ...q }));

  let tf = questions
    .filter((q) => q.type === "truefalse")
    .map((q) => ({ ...q }));

  let short = questions
    .filter((q) => q.type === "short")
    .map((q) => ({ ...q }));

  let reading = questions
    .filter((q) => q.type === "reading")
    .map((q) => ({ ...q }));

  let fill = questions.filter((q) => q.type === "fill").map((q) => ({ ...q }));

  if (quizConfig.shuffleQuestions) {
    mcq = shuffle(mcq);
    tf = shuffle(tf);
    short = shuffle(short);
    fill = shuffle(fill);
  }

  if (quizConfig.shuffleBlocks) {
    reading = shuffle(reading);
  }

  currentQuestions = [...mcq, ...tf, ...short, ...fill, ...reading];

  let qIndex = 0;

  currentQuestions.forEach((q) => {
    if (q.type === "reading") {
      renderReading(q, qIndex);
      qIndex += q.questions.length;
    } else {
      if (q.type === "mcq") renderMCQ(q, qIndex);
      if (q.type === "truefalse") renderTrueFalse(q, qIndex);
      if (q.type === "short") renderShort(q, qIndex);
      if (q.type === "fill") renderFill(q, qIndex);

      qIndex++;
    }
  });

  buildProgress();
}

// ===== reading =====

function renderReading(block, startIndex) {
  const quiz = document.getElementById("quiz");

  let passage = document.createElement("div");
  passage.className = "reading-passage";

  passage.innerHTML = `
<h3>Reading Passage</h3>
<div class="reading-box">
${block.passage}
</div>
`;

  quiz.appendChild(passage);

  block.questions.forEach((q, i) => {
    let index = startIndex + i;

    let div = document.createElement("div");
    div.className = "question";
    div.dataset.answer = q.answer;
    let html = `<h3>Câu ${index + 1}: ${q.q}</h3>`;

    const letters = ["A", "B", "C", "D"];

    q.options.forEach((op, j) => {
      const text = op.replace(/^[A-D]\.\s*/, "");

      html += `
<label class="option">
<input type="radio" name="q${index}" value="${j}" onchange="clearWrong(${index}); markDone(${index})">
<b>${letters[j]}.</b> ${text}
</label>
`;
    });

    div.innerHTML = html;
    quiz.appendChild(div);
  });
}

// ===== MCQ =====

function renderMCQ(q, index) {
  const quiz = document.getElementById("quiz");

  let div = document.createElement("div");
  div.className = "question";

  // gắn đáp án
  div.dataset.answer = q.answer;

  let html = `
<h3>Câu ${index + 1}</h3>
<div class="question-text">${q.q}</div>
`;

  const letters = ["A", "B", "C", "D"];

  q.options.forEach((op, i) => {
    const text = op.replace(/^[A-D]\.\s*/, "");

    html += `
<label class="option">
<input type="radio" name="q${index}" value="${i}" onchange="clearWrong(${index}); markDone(${index})">
<b>${letters[i]}.</b> ${text}
</label>
`;
  });

  div.innerHTML = html;
  quiz.appendChild(div);
}
// ===== TRUE FALSE =====

function renderTrueFalse(q, index) {
  const quiz = document.getElementById("quiz");

  let div = document.createElement("div");
  div.className = "question";

  let html = `<h3>Câu ${index + 1}: ${q.q}</h3>`;

  const letters = ["A", "B", "C", "D"];

  q.options.forEach((op, i) => {
    const text = op.replace(/^[A-D]\.\s*/, "");

    html += `
<label class="option">
<input type="checkbox" name="q${index}" value="${i}" onchange="clearWrong(${index}); markDone(${index})">
<b>${letters[i]}.</b> ${text}
</label>
`;
  });

  div.innerHTML = html;
  quiz.appendChild(div);
}

// ===== SHORT =====

function renderShort(q, index) {
  const quiz = document.getElementById("quiz");

  let div = document.createElement("div");
  div.className = "question";

  div.innerHTML = `
<h3>Câu ${index + 1}: ${q.q}</h3>
<input type="text" name="q${index}" class="short-input" oninput="clearWrong(${index}); markDone(${index})">
`;

  quiz.appendChild(div);
}

// ===== FILL =====

function renderFill(q, index) {
  const quiz = document.getElementById("quiz");

  let div = document.createElement("div");
  div.className = "question";

  let html = `<h3>Câu ${index + 1}</h3>`;
  html += `<p>${q.text}</p>`;

  q.options.forEach((op, i) => {
    html += `
<label class="option">
<input type="radio" name="q${index}" value="${i}" onchange="clearWrong(${index}); markDone(${index})">
${op}
</label>
`;
  });

  div.innerHTML = html;
  quiz.appendChild(div);
}

// ===== progress =====

function buildProgress() {
  const list = document.getElementById("progressList");
  if (!list) return;

  list.innerHTML = "";
  progressItems = [];

  const questionsDOM = document.querySelectorAll(".question");

  questionsDOM.forEach((q, index) => {
    const item = document.createElement("div");

    item.className = "progress-item";
    item.innerText = index + 1;

    item.onclick = () => {
      q.scrollIntoView({ behavior: "smooth" });
    };

    list.appendChild(item);
    progressItems.push(item);
  });
}

// ===== đánh dấu đã làm =====

function markDone(index) {
  if (progressItems[index]) {
    progressItems[index].classList.add("progress-done");
  }
}

// ===== clear sai =====

function clearWrong(index) {
  let q = document.querySelectorAll(".question")[index];

  if (q) {
    q.classList.remove("wrong");
  }
}

// ===== review =====

function review(wrong) {
  document.querySelectorAll(".question").forEach((q) => {
    q.classList.remove("wrong");
  });

  progressItems.forEach((item) => {
    item.classList.remove("progress-wrong");
  });

  wrong.forEach((i) => {
    let q = document.querySelectorAll(".question")[i];

    if (q) q.classList.add("wrong");

    if (progressItems[i]) {
      progressItems[i].classList.remove("progress-done");
      progressItems[i].classList.add("progress-wrong");
    }
  });
}

// ===== parse number =====

function parseNumber(value) {
  if (!value) return NaN;

  value = value.toString().trim();
  value = value.replace(",", ".");
  value = value.replace("%", "");

  return parseFloat(value);
}

// ===== grade =====

function gradeQuiz() {
  let correct = 0;
  let wrong = [];

  const questionDOM = document.querySelectorAll(".question");

  questionDOM.forEach((qDiv, index) => {
    let radios = qDiv.querySelectorAll("input[type=radio]");
    let checkboxes = qDiv.querySelectorAll("input[type=checkbox]");
    let text = qDiv.querySelector("input[type=text]");

    // ===== MCQ / FILL =====
    if (radios.length > 0) {
      let selected = qDiv.querySelector("input[type=radio]:checked");

      if (!selected) {
        wrong.push(index);
      } else {
        let answer = Number(qDiv.dataset.answer);

        if (Number(selected.value) === answer) {
          correct++;
        } else {
          wrong.push(index);
        }
      }
    }

    // ===== TRUE FALSE =====
    else if (checkboxes.length > 0) {
      let answer = qDiv.dataset.answer.split(",").map(Number);

      let ok = true;

      checkboxes.forEach((box, i) => {
        let should = answer.includes(i);
        if (box.checked !== should) ok = false;
      });

      if (ok) correct++;
      else wrong.push(index);
    }

    // ===== SHORT =====
    else if (text) {
      let answer = parseFloat(qDiv.dataset.answer);
      let user = parseFloat(text.value);

      if (!isNaN(user) && Math.abs(user - answer) <= 0.5) {
        correct++;
      } else {
        wrong.push(index);
      }
    }
  });

  review(wrong);

  return correct;
}
