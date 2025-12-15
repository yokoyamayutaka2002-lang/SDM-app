/***********************
 * スライド定義（①〜⑭）
 ***********************/
const slides = [
  {
    id: "title",
    title: "タイトル",
    type: "consent",
    image: "slides/title.png",
    texts: [
      "これから重症喘息についての説明をうけます。",
      "説明を読んで理解できたら、「理解できた」にチェックしてください。",
      "気になる時や質問がある方はそちらにチェックしてください。",
      "後ほど医師と相談することが出来ます。"
    ]
  },
  {
    id: "epi",
    title: "疫学",
    type: "normal",
    image: "slides/epi.png",
    texts: [
      "喘息患者さんの5-10%が重症喘息といわれています。",
      "日本では重症喘息患者さんは推定5～10万人いるといわれています。"
    ]
  },
  {
    id: "definition",
    title: "重症喘息とは（定義）",
    type: "normal",
    image: "slides/definition.png",
    texts: [
      "重症喘息とは吸入薬や内服薬などの最大限の既存治療を行っても増悪を来す喘息です。",
      "重症喘息は時に全身ステロイド（経口ステロイド）が必要となります。"
    ]
  },
  {
    id: "problem",
    title: "重症喘息の問題点",
    type: "normal",
    image: "slides/problem.png",
    texts: [
      "重症喘息は喘息の調子が悪く日常生活に支障が出ることがあります。（咳・痰・息切れ・眠れないなど）",
      "かぜなどをきっかけに喘息が増悪すると医療機関に定期外受診する必要があります。",
      "喘息増悪時の治療である全身ステロイドは症状が改善するが副作用の懸念があります。",
      "全身ステロイドは「少量・短期間」でも「蓄積毒性」があり将来のリスクとなります。",
      "喘息増悪を繰り返すと、肺機能が徐々に低下し「気道の老化」につながります。",
      "肺機能が低下すると、喘息症状は強くなり、次の増悪が起こりやすくなります。"
    ]
  },
  {
    id: "OCSrisk",
    title: "全身ステロイドのリスク",
    type: "normal",
    image: "slides/OCSrisk.png",
    texts: [
      "全身ステロイドを投与することで様々な臓器に対する副作用の可能性があります。",
      "例え全身ステロイド投与が少量・短期間であっても副作用の可能性があります。",
      "全身ステロイドの副作用にはすぐに起こるものと、将来（10-20年後）起こるものがあります。",
      "このような点から、喘息に対する全身ステロイド投与は極力避けられるべきです。"
    ]
  },
  {
    id: "decline",
    title: "肺機能低下（気道の老化）",
    type: "normal",
    image: "slides/decline.png",
    texts: [
      "喘息増悪を繰り返すと、肺機能が低下し気道の老化につながります。",
      "肺機能が低下すればするほど、喘息増悪が起こりやすくなります。",
      "例えば今年に喘息の増悪を来した場合、来年・再来年はさらに喘息の調子が悪くなる可能性があります。",
      "このような点から、喘息の増悪をなるべく起こさないようにすることが重要です。"
    ]
  },
  {
    id: "treatment-options",
    title: "治療選択肢",
    type: "normal",
    image: "slides/treatment-options.png",
    texts: [
      "重症喘息の治療選択肢には「全身ステロイドの屯用」「全身ステロイドの連用」「生物学的製剤」の３つあります。",
      "生物学的製剤は医師が最も推奨する治療となります。",
      "生物学的製剤は「増悪」「症状」「生活の質」を最も改善させ、短期/長期的にも最も副作用が少ない薬です。",
      "生物学的製剤のデメリットは治療費用が高いことです。",
      "全身ステロイドは連用/屯用のいずれにおいても、長期的な副作用が懸念されます。"
    ]
  },
  {
    id: "biologics-mechanism",
    title: "生物学的製剤（仕組み）",
    type: "normal",
    image: "slides/biologics-mechanism.png",
    texts: [
      "生物学的製剤とは喘息増悪の原因となる分子を標的として抑える抗体製剤のことです。",
      "標的（呼吸器）以外への影響が及びにくく、全身ステロイドのような副作用が少ないです。"
    ]
  },
  {
    id: "biologics-effect",
    title: "生物学的製剤（効果）",
    type: "normal",
    image: "slides/biologics-effect.png",
    texts: [
      "コントロール不良な喘息患者さんは喘息症状による負担（疾病負担）が大きいです。",
      "そのため「生活の質」「仕事」「社会活動」への影響が大きいと言われています。",
      "生物学的製剤は「増悪を予防」するだけでなく「普段の喘息の調子も改善」させます。"
    ]
  },
  {
    id: "biologics-selection",
    title: "生物学的製剤（選択）",
    type: "normal",
    image: "slides/biologics-selection.png",
    texts: [
      "生物学的製剤には様々な種類があり、患者さん毎に適する薬剤が異なります。",
      "バイオマーカー（「呼気NO」「血中好酸球値」）を参考に最適な治療薬を医師が推奨します。"
    ]
  },
  {
    id: "QA1",
    title: "Q&A ①",
    type: "normal",
    image: "slides/QA1.png",
    texts: [
      "生物学的製剤は患者さん自身の意思で中止することが出来ます。",
      "生物学的製剤の効果は2～4週程度で得られ、8～12週で効果判定を行います。",
      "治療費用について医療従事者と相談することが出来ます。"
    ]
  },
  {
    id: "QA2",
    title: "Q&A ②",
    type: "normal",
    image: "slides/QA2.png",
    texts: [
      "生物学的製剤の自己注射は難しくなく、きちんと指導しますので安心してください。",
      "自己注射による痛みは多少ありますが、注射の種類や部位によって差があります。",
      "自己注射の副作用としては局所の反応（腫れ、発赤など）が最も多いです。",
      "初回投与は院内で行いしっかりと体調観察しますのでご安心ください。"
    ]
  },
  {
    id: "QA3",
    title: "Q&A ③",
    type: "normal",
    image: "slides/QA3.png",
    texts: [
      "自己注射を打ち忘れた場合は翌日接種し、次回は規定間隔を空けて接種します。",
      "体調が悪い時も基本的に接種しますが、迷う場合はクリニックに相談します。",
      "旅行や出張がある際のスケジュールは事前にご相談ください。"
    ]
  },
  {
    id: "ask",
    title: "医師に聞きたいこと",
    type: "ask",
    questions: [
      "喘息増悪時にステロイドを時々飲むことは体に悪いですか？",
      "注射による副作用が心配です。",
      "今はそこまで困っていませんが注射すべきですか？",
      "医療費の負担に見合う価値はありますか？",
      "すぐ決めた方が良いですか？",
      "過去にステロイドを飲んで問題ありませんでした。",
      "他におすすめの治療はありますか？",
      "日常生活で気を付けることはありますか？",
      "今決めなくても大丈夫ですか？",
      "家族なら生物学的製剤を勧めますか？",
      "来年は大丈夫そうですが様子見でもいいですか？",
      "つらくても我慢した方がいいですか？",
      "落ち着いてから注射を考えてもいいですか？",
      "製剤の違いを教えてください。",
      "一度休んで再開することはできますか？"
    ]
  }
];

/***********************
 * ユーティリティ
 ***********************/
const circledNumbers = ["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭"];
const slideNo = (idx) => circledNumbers[idx] || "";

/***********************
 * 状態管理
 ***********************/
let page = 0;
let consentGiven = false;
const answers = {};
const askAnswers = [];

/***********************
 * DOM
 ***********************/
const container = document.getElementById("slide-container");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

/***********************
 * 保存（normal）
 ***********************/
function saveNormal(slide, idx) {
  const items = container.querySelectorAll(".summary-item");
  answers[slide.id] = Array.from(items).map(item => {
    const checked = item.querySelector("input:checked");
    const textarea = item.querySelector("textarea");
    return {
      text: item.querySelector(".summary-text").textContent,
      choice: checked ? checked.value : null,
      question: textarea ? textarea.value.trim() : "",
      slideNo: slideNo(idx)
    };
  });
}

/***********************
 * 保存（ask）
 ***********************/
function saveAsk() {
  askAnswers.length = 0;
  container.querySelectorAll("input[type=checkbox]:checked")
    .forEach(cb => askAnswers.push(cb.value));
}

/***********************
 * 描画
 ***********************/
function render() {
  container.innerHTML = "";
  const slide = slides[page];

  if (slide.type === "consent") {
    container.innerHTML = `
      <img src="${slide.image}" class="slide-image">
      <div class="summary">
        ${slide.texts.map(t => `<p>・${t}</p>`).join("")}
        <label><input type="checkbox" id="consent"> 同意します</label>
      </div>`;
    document.getElementById("consent").onchange = e => {
      consentGiven = e.target.checked;
      nextBtn.disabled = !consentGiven;
    };
    nextBtn.disabled = !consentGiven;
  }

  else if (slide.type === "normal") {
    // ★今回修正：stickyをやめて「上下固定2段 + 下だけスクロール」にする
    container.innerHTML = `
      <div style="
        height: calc(100vh - 140px);
        display: flex;
        flex-direction: column;
        gap: 14px;
      ">
        <div style="position: relative; flex: 0 0 auto;">
          <img src="${slide.image}" class="slide-image" style="display:block;">
          <div style="
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 12px;
            font-weight: 700;
            background: rgba(0,0,0,0.45);
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            letter-spacing: 0.5px;
          ">${slideNo(page)}</div>
        </div>

        <div class="summary" style="
          flex: 1 1 auto;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        ">
          ${slide.texts.map((t,i)=>`
            <div class="summary-item">
              <p class="summary-text">${t}</p>
              <label><input type="radio" name="${slide.id}-${i}" value="ok"> 理解できた</label>
              <label><input type="radio" name="${slide.id}-${i}" value="concern"> 気になる</label>
              <label><input type="radio" name="${slide.id}-${i}" value="question"> 質問したい</label>
              <textarea></textarea>
            </div>`).join("")}
        </div>
      </div>`;

    nextBtn.disabled = true;
    container.querySelectorAll("input[type=radio]").forEach(r =>
      r.addEventListener("change", () => nextBtn.disabled = false)
    );
  }

  else if (slide.type === "ask") {
    container.innerHTML = `
      <div class="summary">
        <h3>診察時に医師へ聞きたいこと</h3>
        ${slide.questions.map(q =>
          `<label><input type="checkbox" value="${q}"> ${q}</label><br>`
        ).join("")}
      </div>`;
    nextBtn.disabled = false;
  }
}

/***********************
 * ナビゲーション
 ***********************/
nextBtn.onclick = () => {
  const slide = slides[page];

  if (slide.type === "normal") {
    if (!container.querySelector("input[type=radio]:checked")) return;
    saveNormal(slide, page);
  }

  if (slide.type === "ask") saveAsk();

  page++;
  if (page >= slides.length) {
    renderSummary();
  } else {
    render();
  }
};

backBtn.onclick = () => {
  if (page > 0) {
    page--;
    render();
  }
};

/***********************
 * サマリー
 ***********************/
function renderSummary() {
  const understood = [];
  const concerns = [];
  const questions = [];

  Object.values(answers).forEach(list => {
    list.forEach(a => {
      if (a.choice === "ok") understood.push(a.text);
      if (a.choice === "concern") concerns.push(`${a.text} ${a.slideNo}`);
      if (a.choice === "question") questions.push(`${a.text} ${a.slideNo}`);
    });
  });

  askAnswers.forEach(q => questions.push(q));

  container.innerHTML = `
    <div class="summary">
      <h3>サマリー</h3>

      <h4>質問したいこと</h4>
      ${questions.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}

      <h4>気になること</h4>
      ${concerns.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}

      <h4>理解した</h4>
      ${understood.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}
    </div>`;
}

/***********************
 * 初期表示
 ***********************/
render();
