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

  // Lọc thêm loại rewrite
  let rewrite = questions
    .filter((q) => q.type === "rewrite")
    .map((q) => ({ ...q }));

  if (quizConfig.shuffleQuestions) {
    mcq = shuffle(mcq);
    tf = shuffle(tf);
    short = shuffle(short);
    fill = shuffle(fill);
    rewrite = shuffle(rewrite);
  }

  if (quizConfig.shuffleBlocks) {
    reading = shuffle(reading);
  }

  // Gộp tất cả các loại câu hỏi
  currentQuestions = [...mcq, ...tf, ...short, ...fill, ...reading, ...rewrite];

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
      if (q.type === "rewrite") renderRewrite(q, qIndex);

      qIndex++;
    }
  });

  buildProgress();
}

// ===== RENDER REWRITE (Hàm mới) =====
function renderRewrite(q, index) {
  const quiz = document.getElementById("quiz");
  let div = document.createElement("div");
  div.className = "question";

  // Lưu đáp án dưới dạng JSON và đánh dấu loại câu hỏi
  div.dataset.answer = JSON.stringify(q.answer);
  div.dataset.type = "rewrite";

  div.innerHTML = `
    <h3>Câu ${index + 1} (Viết lại câu)</h3>
    <div class="question-text" style="margin-bottom: 10px; font-style: italic;">${q.q}</div>
    <input type="text" 
           name="q${index}" 
           class="rewrite-input" 
           placeholder="Nhập câu trả lời của bạn..." 
           oninput="clearWrong(${index}); markDone(${index})"
           style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px;">
  `;

  quiz.appendChild(div);
}

// ===== grade (Hàm đầy đủ cập nhật logic rewrite) =====
function gradeQuiz() {
  let correct = 0;
  let wrong = [];

  const questionDOM = document.querySelectorAll(".question");

  questionDOM.forEach((qDiv, index) => {
    let radios = qDiv.querySelectorAll("input[type=radio]");
    let checkboxes = qDiv.querySelectorAll("input[type=checkbox]");
    let textInputs = qDiv.querySelectorAll("input[type=text]");

    // Xử lý REWRITE (Ưu tiên kiểm tra theo dataset type)
    if (qDiv.dataset.type === "rewrite") {
      let input = qDiv.querySelector("input[type=text]");
      let userAns = input.value.trim().toLowerCase().replace(/\s+/g, " ");
      let acceptableAnswers = JSON.parse(qDiv.dataset.answer);

      let isCorrect = acceptableAnswers.some(
        (ans) => ans.trim().toLowerCase().replace(/\s+/g, " ") === userAns,
      );

      if (userAns !== "" && isCorrect) {
        correct++;
      } else {
        wrong.push(index);
      }
    }
    // Xử lý MCQ / FILL
    else if (radios.length > 0) {
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
    // Xử lý TRUE FALSE
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
    // Xử lý SHORT (Số học)
    else if (textInputs.length > 0 && qDiv.dataset.type !== "rewrite") {
      let input = textInputs[0];
      let answer = parseFloat(qDiv.dataset.answer);
      let user = parseFloat(input.value);
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
function showDiffResult(qDiv, userSentence, acceptableAnswers) {
  const diffResultDiv = qDiv.querySelector(".diff-result");
  if (!diffResultDiv) return;

  diffResultDiv.style.display = "block";

  // 1. Chuẩn hóa chuỗi để so sánh công bằng
  const cleanUser = userSentence
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\.$/, "");
  // Lấy đáp án đầu tiên làm chuẩn
  const standardAns = acceptableAnswers[0]
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\.$/, "");

  // 2. Sử dụng thư viện Diff (Word-level)
  const diff = Diff.diffWords(cleanUser, standardAns);

  let htmlOutput = "<strong>Gợi ý sửa: </strong><br>";

  diff.forEach((part) => {
    if (part.added) {
      // Có trong đáp án nhưng người dùng thiếu -> Màu xanh
      htmlOutput += `<span class="diff-word missing">${part.value}</span>`;
    } else if (part.removed) {
      // Có trong câu người dùng nhưng đáp án không có -> Sai/Thừa -> Màu đỏ gạch ngang
      htmlOutput += `<span class="diff-word wrong">${part.value}</span>`;
    } else {
      // Khớp hoàn toàn
      htmlOutput += `<span class="diff-word">${part.value}</span>`;
    }
  });

  diffResultDiv.innerHTML = htmlOutput;
}
// ===== grade =====

function gradeQuiz() {
  let correct = 0;
  let wrong = [];

  const questionDOM = document.querySelectorAll(".question");

  questionDOM.forEach((qDiv, index) => {
    let radios = qDiv.querySelectorAll("input[type=radio]");
    let checkboxes = qDiv.querySelectorAll("input[type=checkbox]");
    let textInput = qDiv.querySelector("input[type=text]");
    const diffResultDiv = qDiv.querySelector(".diff-result");

    // Reset hiển thị lỗi trước khi chấm lại
    if (diffResultDiv) {
      diffResultDiv.style.display = "none";
      diffResultDiv.innerHTML = "";
    }

    // ===== MCQ / FILL =====
    if (radios.length > 0) {
      let selected = qDiv.querySelector("input[type=radio]:checked");
      if (!selected) {
        wrong.push(index);
      } else {
        let answer = Number(qDiv.dataset.answer);
        if (Number(selected.value) === answer) correct++;
        else wrong.push(index);
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

    // ===== XỬ LÝ INPUT VĂN BẢN (SHORT & REWRITE) =====
    else if (textInput) {
      let userValue = textInput.value.trim();

      if (qDiv.dataset.type === "rewrite") {
        let acceptableAnswers = JSON.parse(qDiv.dataset.answer);
        let cleanUser = userValue
          .toLowerCase()
          .replace(/\s+/g, " ")
          .replace(/\.$/, "");

        let isCorrect = acceptableAnswers.some((ans) => {
          let cleanAns = ans
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ")
            .replace(/\.$/, "");
          return cleanAns === cleanUser;
        });

        if (userValue !== "" && isCorrect) {
          correct++;
        } else {
          wrong.push(index);
          // Hiển thị chi tiết lỗi sai cho người dùng
          showDiffResult(qDiv, userValue, acceptableAnswers);
        }
      } else {
        // Loại SHORT (So sánh số)
        let answer = parseFloat(qDiv.dataset.answer);
        let user = parseFloat(userValue.replace(",", "."));
        if (!isNaN(user) && Math.abs(user - answer) <= 0.5) correct++;
        else wrong.push(index);
      }
    }
  });

  review(wrong);
  return correct;
}
function renderRewrite(q, index) {
  const quiz = document.getElementById("quiz");
  let div = document.createElement("div");
  div.className = "question";

  div.dataset.answer = JSON.stringify(q.answer);
  div.dataset.type = "rewrite";

  div.innerHTML = `
    <h3>Câu ${index + 1} (Viết lại câu)</h3>
    <div class="question-text">${q.q}</div>
    <input type="text" 
           name="q${index}" 
           class="rewrite-input" 
           placeholder="Nhập câu trả lời của bạn..." 
           autocomplete="off" 
           spellcheck="false"
           oninput="clearWrong(${index}); markDone(${index})"
           style="width: 100%; padding: 12px; margin-top: 10px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
    
    <div class="diff-result" style="display: none; margin-top: 10px; padding: 12px; border-radius: 8px; font-size: 15px; line-height: 1.6;"></div>
  `;

  quiz.appendChild(div);
}
