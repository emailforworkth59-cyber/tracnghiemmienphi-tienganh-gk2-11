// ===== khởi động quiz =====

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();

  const bubble = document.getElementById("progressBubble");
  const panel = document.getElementById("progressPanel");

  if (bubble) {
    bubble.onclick = () => {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    };
  }
});

// ===== nộp bài =====
// ===== nộp bài =====
document.getElementById("submit").onclick = function () {
  let correct = gradeQuiz();
  let total = document.querySelectorAll(".question").length;

  document.getElementById("result").innerHTML = `Đúng ${correct}/${total} câu`;
};
// ===== làm lại =====

document.getElementById("retry").onclick = function () {
  renderQuiz();

  document.getElementById("result").innerHTML = "";
};

// ===== dark mode =====

const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerText = "SÁNG";
  } else {
    themeToggle.innerText = "TỐI";
  }
};

// ===== xem ảnh phóng to =====

function openImage(img) {
  const modal = document.getElementById("imgModal");
  const preview = document.getElementById("imgPreview");

  preview.src = img.src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}
