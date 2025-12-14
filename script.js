// =========================
// 重症喘息 ディシジョンエイド（MVP）
// PNGスライド版
// 表示順：疫学 → 定義 → 問題点
// =========================

// パート表示用
const PARTS = {
  1: "1）重症喘息とは",
  2: "2）重症喘息の問題点"
};

// =========================
// スライド定義（★順番はここで決まる）
// =========================
const slides = [
  {
    id: "epi",
    part: 1,
    title: "重症喘息の疫学",
    image: "slides/epi.png",
    question: "このスライドを見て、重症喘息がどのくらいの頻度かイメージできましたか？",
    askIf: ["no", "unsure"]
  },
  {
    id: "definition",
    part: 1,
    title: "重症喘息とは",
    image: "slides/definition.png",
    question: "「最大限の治療をしても増悪を繰り返す状態」という説明は理解できましたか？",
    askIf: ["no", "unsure"]
  },
  {
    id: "problems",
    part: 2,
    title: "重症喘息の問題点",
    image: "slides/problems.png",
    question: "重症喘息が今だけでなく将来にも影響する可能性があると理解できましたか？",
    askIf: ["no", "unsure"]
  }
];

// =========================
// 状態管理
// =========================
const state = {
  index: 0,
  answers: {},   // { slideId: "yes | no | unsure" }
  askList: []    // 医師に聞きたい項目
};

// =========================
// DOM取得ショートカット
// =========================
const $ = (id) => document.getElementById(id);

// =========================
// 画面描画
// =========================
function render() {
  const slide = slides[state.index];

  $("partLabel").textContent = PARTS[slide.part];
  $("progress").textContent = `${state.index + 1} / ${slides.length}`;
  $("title").textContent = slide.title;

  // スライド画像表示
  $("content").innerHTML = `
    <img src="${slide.image}" alt="${slide.title}" class="slide-img">
  `;

  $("question").textContent = slide.question;

  $("prevBtn").disabled = state.index === 0;
  $("nextBtn").textContent =
    state.index === slides.length - 1 ? "まとめへ" : "次へ";
}

// =========================
// 回答を記録
// =========================
function recordAnswer(answer) {
  const slide = slides[state.index];
  state.answers[slide.id] = answer;

  // 既存の記録を削除
  state.askList = state.askList.filter(item => item.id !== slide.id);

  // 「いいえ」「迷う」は質問リストへ
  if (slide.askIf.includes(answer)) {
    state.askList.push({
      id: slide.id,
      title: slide.title,
      part: slide.part,
      answer: answer
    });
  }
}

// =========================
// まとめ画面
// =========================
function showSummary() {
  document.querySelector(".card").classList.add("hidden");
  $("summary").classList.remove("hidden");

  const ul = $("askList");
  ul.innerHTML = "";

  if (state.askList.length === 0) {
    ul.innerHTML =
      "<li>特に「分かりにくい」と感じた項目はありませんでした。</li>";
    return;
  }

  state.askList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${PARTS[item.part]}：${item.title}`;
    ul.appendChild(li);
  });
}

// =========================
// イベント設定
// =========================
document.querySelectorAll("[data-answer]").forEach(btn => {
  btn.addEventListener("click", () => {
    recordAnswer(btn.dataset.answer);
    render();
  });
});

$("prevBtn").addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    render();
  }
});

$("nextBtn").addEventListener("click", () => {
  const slide = slides[state.index];

  if (!state.answers[slide.id]) {
    alert("「はい／いいえ／迷う」のいずれかを選んでください。");
    return;
  }

  if (state.index < slides.length - 1) {
    state.index++;
    render();
  } else {
    showSummary();
  }
});

$("backToSlidesBtn").addEventListener("click", () => {
  $("summary").classList.add("hidden");
  document.querySelector(".card").classList.remove("hidden");
  render();
});

// =========================
// 初期表示
// =========================
render();
