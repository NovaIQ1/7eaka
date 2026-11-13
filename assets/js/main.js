// تتبع التقدّم في الدروس باستخدام localStorage
(function () {
  var STORAGE_KEY = "handmade-academy-progress";

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function setDone(lessonId, done) {
    var progress = getProgress();
    progress[lessonId] = !!done;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {}
  }

  function isDone(lessonId) {
    return !!getProgress()[lessonId];
  }

  // تحديث علامات الإنجاز في بطاقات خارطة الطريق بالصفحة الرئيسية
  function paintRoadmap() {
    var progress = getProgress();
    document.querySelectorAll("[data-lesson-id]").forEach(function (card) {
      var id = card.getAttribute("data-lesson-id");
      if (progress[id]) card.classList.add("done");
    });
  }

  // زر "إنهاء الدرس" داخل صفحة الدرس
  function wireCompleteButton() {
    var btn = document.querySelector("[data-complete-btn]");
    if (!btn) return;
    var id = btn.getAttribute("data-complete-btn");

    function refresh() {
      if (isDone(id)) {
        btn.classList.add("done");
        btn.textContent = "✓ تم إنهاء هذا الدرس";
      } else {
        btn.classList.remove("done");
        btn.textContent = "وضع علامة على الدرس كمُنجَز";
      }
    }

    refresh();
    btn.addEventListener("click", function () {
      setDone(id, !isDone(id));
      refresh();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    paintRoadmap();
    wireCompleteButton();
  });
})();
