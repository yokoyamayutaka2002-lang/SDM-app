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
 * 保存
 ***********************/
function saveNormal(slide, idx) {
  answers[slide.id] = Array.from(container.querySelectorAll(".summary-item")).map(item => {
    const checked = item.querySelector('input[type="radio"]:checked');
    return {
      text: item.querySelector(".summary-text").textContent,
      choice: checked ? checked.value : null,
      question: item.querySelector("textarea").value.trim(),
      slideNo: idx + 1
    };
  });
}

function saveAsk() {
  askAnswers.length = 0;
  container.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(cb => askAnswers.push(cb.value));
}

/***********************
 * 描画
 ***********************/
function render() {
  container.innerHTML = "";
  const slide = slides[page];
  container.scrollTop = 0;

  if (slide.type === "consent") {
    container.innerHTML = `
      <img src="${slide.image}" class="slide-image">
      <div class="summary">
        <h3>${slide.title}</h3>
        ${slide.texts.map(t => `<p>・${t}</p>`).join("")}
        <label><input type="checkbox" id="consent"> 同意します</label>
      </div>
    `;
    const cb = document.getElementById("consent");
    cb.checked = consentGiven;
    nextBtn.disabled = !consentGiven;
    cb.onchange = e => {
      consentGiven = e.target.checked;
      nextBtn.disabled = !consentGiven;
    };
  }

  else if (slide.type === "normal") {
    container.innerHTML = `
      <img src="${slide.image}" class="slide-image">
      <div class="summary">
        <h3>${slide.title}</h3>
        ${slide.texts.map((t,i)=>`
          <div class="summary-item">
            <p class="summary-text">${t}</p>
            <label><input type="radio" name="${slide.id}-${i}" value="ok"> 理解できた</label>
            <label><input type="radio" name="${slide.id}-${i}" value="concern"> 気になる</label>
            <label><input type="radio" name="${slide.id}-${i}" value="question"> 質問したい</label>
            <textarea></textarea>
          </div>
        `).join("")}
      </div>
    `;
    nextBtn.disabled = true;
    container.querySelectorAll('input[type="radio"]').forEach(r =>
      r.addEventListener("change", () => nextBtn.disabled = false)
    );
  }

  else if (slide.type === "ask") {
    container.innerHTML = `
      <div class="summary">
        <h3>${slide.title}</h3>
        ${slide.questions.map(q =>
          `<label><input type="checkbox" value="${q}"> ${q}</label><br>`
        ).join("")}
      </div>
    `;
    nextBtn.disabled = false;
  }
}

/***********************
 * ナビ
 ***********************/
nextBtn.onclick = () => {
  const slide = slides[page];
  if (slide.type === "normal") saveNormal(slide, page);
  if (slide.type === "ask") saveAsk();
  page++;
  page < slides.length ? render() : renderSummary();
};

backBtn.onclick = () => {
  if (page > 0) {
    page--;
    render();
  }
};

/***********************
 * サマリー + 医療者記録 + PDF
 ***********************/
function renderSummary() {
  const understood = [];
  const concerns = [];
  const questions = [];

  Object.values(answers).forEach(list => {
    list.forEach(a => {
      if (a.choice === "ok") understood.push(a.text);
      if (a.choice === "concern") concerns.push(a.text);
      if (a.choice === "question") {
        questions.push(`${a.text}${a.question ? "（" + a.question + "）" : ""}`);
      }
    });
  });
  askAnswers.forEach(q => questions.push(q));

  const today = new Date().toLocaleDateString("ja-JP");

  container.innerHTML = `
    <div class="summary print-area">
      <h3>重症喘息 ディシジョンエイド｜サマリー</h3>
      <p>作成日：${today}</p>

      <h4>患者さんの意思・理解</h4>

      <h5>質問したいこと</h5>
      ${questions.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}

      <h5>気になること</h5>
      ${concerns.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}

      <h5>理解した</h5>
      ${understood.map(t => `<p>・${t}</p>`).join("") || "<p>なし</p>"}

      <hr>

      <h4>医療者による最終判断（共同意思決定の記録）</h4>

      <div class="medical-decision">
        <label><input type="radio" name="finalDecision" value="導入"> 導入</label>
        <label><input type="radio" name="finalDecision" value="保留"> 保留</label>
        <label><input type="radio" name="finalDecision" value="見送り"> 見送り</label>

        <p>
          判断日：
          <input type="date" value="${new Date().toISOString().slice(0,10)}">
        </p>

        <p>
          判断理由・補足（医療者記録）<br>
          <textarea placeholder="例：患者と相談の上、今回は保留。次回再評価。"></textarea>
        </p>
      </div>
    </div>

    <div class="print-controls">
      <button id="pdfBtn">📄 A4でPDF出力</button>
    </div>
  `;

  document.getElementById("pdfBtn").onclick = () => window.print();
  nextBtn.disabled = true;
  backBtn.disabled = false;
}

/***********************
 * 初期表示
 ***********************/
render();
