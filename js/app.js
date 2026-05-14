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

const retryBtn = document.getElementById("retry");
const modal = document.getElementById("retryModal");

retryBtn.onclick = function () {
  modal.style.display = "flex";
};

document.getElementById("cancelRetry").onclick = function () {
  modal.style.display = "none";
};

document.getElementById("confirmRetry").onclick = function () {
  modal.style.display = "none";

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
// Thay đổi hoặc bổ sung thêm sự kiện cho nút nổi
const btnSubmit = document.getElementById("submit"); // Nút cũ dưới bài
const btnFloating = document.getElementById("floatingSubmit"); // Nút nổi mới

const handleSubmit = function () {
  let correct = gradeQuiz();
  let total = document.querySelectorAll(".question").length;
  document.getElementById("result").innerHTML = `Đúng ${correct}/${total} câu`;

  // Tự động cuộn xuống xem kết quả
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
};

// Gán cho cả 2 nút nếu bạn muốn giữ cả hai
if (btnSubmit) btnSubmit.onclick = handleSubmit;
if (btnFloating) btnFloating.onclick = handleSubmit;
