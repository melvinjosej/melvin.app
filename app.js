// ============================================================================
// Melvin Johnson — Personal Website Data & Interactive Customizer Logic
// ============================================================================

const PUBLICATIONS = [
  {
    year: 2026,
    title: "Gemma 4 Technical Report",
    url: "https://arxiv.org/abs/2607.02770",
    authors: "Gemma Team, Google DeepMind",
    venue: "arXiv preprint",
    category: "frontier",
    selected: true,
    note: "Open-weights multimodal & reasoning models"
  },
  {
    year: 2024,
    title: "Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context",
    url: "https://arxiv.org/abs/2403.05530",
    authors: "Gemini Team, Google DeepMind",
    venue: "arXiv preprint",
    category: "frontier",
    selected: true,
    note: "Long-context multimodal post-training & architecture"
  },
  {
    year: 2024,
    title: "Capabilities of Gemini Models in Medicine",
    url: "https://arxiv.org/abs/2404.18416",
    authors: "Khaled Saab, Tao Tu, Wei-Hung Weng, Ryutaro Tanno, David Stutz, Ellery Wulczyn, Fan Zhang, Tim Strother, Chunjong Park, Elahe Vedadi, et al. (incl. <strong>Melvin Johnson</strong>)",
    venue: "arXiv preprint",
    category: "frontier",
    selected: false,
    note: ""
  },
  {
    year: 2023,
    title: "Gemini: A Family of Highly Capable Multimodal Models",
    url: "https://arxiv.org/abs/2312.11805",
    authors: "Gemini Team, Google DeepMind",
    venue: "arXiv preprint",
    category: "frontier",
    selected: true,
    note: "Post-training lead contributor"
  },
  {
    year: 2023,
    title: "PaLM 2 Technical Report",
    url: "https://arxiv.org/abs/2305.10403",
    authors: "Rohan Anil, Andrew M. Dai, Orhan Firat, <strong>Melvin Johnson</strong>, Dmitry Lepikhin, Alexandre Passos, Siamak Shakeri, Emanuel Taropa, Paige Bailey, Zhifeng Chen, et al.",
    venue: "arXiv preprint",
    category: "frontier",
    selected: true,
    note: "Core contributor (lead group)"
  },
  {
    year: 2023,
    title: "XTREME-UP: A User-Centric Scarce-Data Benchmark for Under-Represented Languages",
    url: "https://aclanthology.org/2023.findings-emnlp.125/",
    authors: "Sebastian Ruder, Jonathan H. Clark, Alexander Gutkin, Mihir Kale, Min Ma, Massimo Nicosia, Parker Riley, Diana A. G., <strong>Melvin Johnson</strong>, Partha Talukdar, et al.",
    venue: "Findings of EMNLP 2023",
    category: "benchmarks",
    selected: false,
    note: "88 under-represented languages"
  },
  {
    year: 2023,
    title: "The Unreasonable Effectiveness of Few-Shot Learning for Machine Translation",
    url: "https://arxiv.org/abs/2302.01398",
    authors: "Xavier Garcia, Yamini Bansal, Colin Cherry, George Foster, Maxim Krikun, <strong>Melvin Johnson</strong>, Orhan Firat",
    venue: "ICML 2023",
    category: "multilingual",
    selected: true,
    note: "In-context learning for large-scale translation"
  },
  {
    year: 2022,
    title: "Mu²SLAM: Multitask, Multilingual Speech and Language Models",
    url: "https://arxiv.org/abs/2212.09553",
    authors: "Yong Cheng, Yu Zhang, <strong>Melvin Johnson</strong>, Wolfgang Macherey, Ankur Bapna",
    venue: "ICML 2023 / arXiv",
    category: "speech",
    selected: true,
    note: "Joint speech-text pre-training across 100+ languages"
  },
  {
    year: 2022,
    title: "mSLAM: Massively Multilingual Joint Pre-Training for Speech and Text",
    url: "https://arxiv.org/abs/2202.01374",
    authors: "Ankur Bapna, Colin Cherry, Yu Zhang, Ye Jia, <strong>Melvin Johnson</strong>, Yong Cheng, Simran Khanuja, Jason Riesa, Alexis Conneau",
    venue: "arXiv preprint",
    category: "speech",
    selected: false,
    note: ""
  },
  {
    year: 2022,
    title: "XTREME-S: Evaluating Cross-lingual Speech Representations",
    url: "https://www.isca-archive.org/interspeech_2022/conneau22_interspeech.html",
    authors: "Alexis Conneau, Ankur Bapna, Yu Zhang, Min Ma, Patrick von Platen, Anton Lozhkov, Colin Cherry, Ye Jia, Clara Rivera, Mihir Kale, Daan van Esch, Vera Axelrod, Simran Khanuja, Jonathan H. Clark, Orhan Firat, Michael Auli, Sebastian Ruder, Jason Riesa, <strong>Melvin Johnson</strong>",
    venue: "Interspeech 2022",
    category: "benchmarks",
    selected: false,
    note: ""
  },
  {
    year: 2022,
    title: "Multilingual Document-Level Translation Enables Zero-Shot Transfer From Sentences to Documents",
    url: "https://aclanthology.org/2022.acl-long.287/",
    authors: "Kartikay Khandelwal, <strong>Melvin Johnson</strong>, et al.",
    venue: "ACL 2022",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2021,
    title: "XTREME-R: Towards More Challenging and Nuanced Multilingual Evaluation",
    url: "https://aclanthology.org/2021.emnlp-main.802/",
    authors: "Sebastian Ruder, Noah Constant, Jan Botha, Aditya Siddhant, Orhan Firat, Jinlan Fu, Pengfei Liu, Junjie Hu, Dan Garrette, Graham Neubig, <strong>Melvin Johnson</strong>",
    venue: "EMNLP 2021",
    category: "benchmarks",
    selected: false,
    note: ""
  },
  {
    year: 2021,
    title: "SLAM: A Unified Encoder for Speech and Language Modeling via Speech-Text Joint Pre-Training",
    url: "https://arxiv.org/abs/2110.10329",
    authors: "Ankur Bapna, Yu-an Chung, Nan Wu, Anmol Gulati, Ye Jia, Jonathan H. Clark, <strong>Melvin Johnson</strong>, Jason Riesa, Alexis Conneau, Yu Zhang",
    venue: "arXiv preprint",
    category: "speech",
    selected: false,
    note: ""
  },
  {
    year: 2021,
    title: "nmT5 — Is Parallel Data Still Relevant for Pre-training Massively Multilingual Language Models?",
    url: "https://aclanthology.org/2021.acl-short.87/",
    authors: "Mihir Kale, Aditya Siddhant, Rami Al-Rfou, Linting Xue, Noah Constant, <strong>Melvin Johnson</strong>",
    venue: "ACL 2021",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2021,
    title: "MergeDistill: Merging Language Models using Pre-trained Distillation",
    url: "https://aclanthology.org/2021.findings-acl.254/",
    authors: "Simran Khanuja, <strong>Melvin Johnson</strong>, Partha Talukdar",
    venue: "Findings of ACL 2021",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2021,
    title: "They, Them, Theirs: Rewriting with Gender-Neutral English",
    url: "https://arxiv.org/abs/2102.06788",
    authors: "Tony Sun, Kellie Webster, Apu Shah, William Yang Wang, <strong>Melvin Johnson</strong>",
    venue: "arXiv preprint",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2020,
    title: "XTREME: A Massively Multilingual Multi-task Benchmark for Evaluating Cross-lingual Generalization",
    url: "https://proceedings.mlr.press/v119/hu20b.html",
    authors: "Junjie Hu, Sebastian Ruder, Aditya Siddhant, Graham Neubig, Orhan Firat, <strong>Melvin Johnson</strong>",
    venue: "ICML 2020",
    category: "benchmarks",
    selected: true,
    note: "40 languages, 9 cross-lingual transfer tasks"
  },
  {
    year: 2020,
    title: "Evaluating the Cross-Lingual Effectiveness of Massively Multilingual Neural Machine Translation",
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/6414",
    authors: "Aditya Siddhant, Ankur Bapna, Henry Tsai, Jason Riesa, Karthik Raman, <strong>Melvin Johnson</strong>, Naveen Ari, Orhan Firat",
    venue: "AAAI 2020",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2019,
    title: "Massively Multilingual Neural Machine Translation in the Wild: Findings and Challenges",
    url: "https://arxiv.org/abs/1907.05019",
    authors: "Naveen Arivazhagan, Ankur Bapna, Orhan Firat, Roee Aharoni, <strong>Melvin Johnson</strong>, Wolfgang Macherey, George Foster, Colin Cherry, Mia Chen, Zhifeng Chen, Yonghui Wu",
    venue: "NAACL 2019 / arXiv",
    category: "multilingual",
    selected: true,
    note: "Single model across 103 languages on 25B examples"
  },
  {
    year: 2019,
    title: "Direct Speech-to-Speech Translation with a Sequence-to-Sequence Model",
    url: "https://arxiv.org/abs/1904.06037",
    authors: "Ye Jia, Ron J. Weiss, Fadi Biadsy, Wolfgang Macherey, <strong>Melvin Johnson</strong>, Zhifeng Chen, Yonghui Wu",
    venue: "Interspeech 2019",
    category: "speech",
    selected: true,
    note: "First end-to-end spectrogram-to-spectrogram translation"
  },
  {
    year: 2019,
    title: "Lingvo: A Modular and Scalable Framework for Sequence-to-Sequence Modeling",
    url: "https://arxiv.org/abs/1902.08295",
    authors: "Jonathan Shen, Patrick Nguyen, Yonghui Wu, Zhifeng Chen, Mia X. Chen, Ye Jia, Anjuli Kannan, Tara Sainath, Yuan Cao, Chung-Cheng Chiu, Yanzhang He, Jan Chorowski, Smit H. Mall, <strong>Melvin Johnson</strong>, et al.",
    venue: "arXiv preprint",
    category: "multilingual",
    selected: false,
    note: ""
  },
  {
    year: 2018,
    title: "The Best of Both Worlds: Combining Recent Advances in Neural Machine Translation",
    url: "https://aclanthology.org/P18-1008/",
    authors: "Mia Xu Chen, Orhan Firat, Ankur Bapna, <strong>Melvin Johnson</strong>, Wolfgang Macherey, George Foster, Llion Jones, Mike Schuster, Noam Shazeer, Niki Parmar, Ashish Vaswani, Jakob Uszkoreit, Lukasz Kaiser, Zhifeng Chen, Yonghui Wu, Macduff Hughes",
    venue: "ACL 2018",
    category: "multilingual",
    selected: true,
    note: "RNMT+ combining Transformer & RNN architectures"
  },
  {
    year: 2017,
    title: "Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation",
    url: "https://aclanthology.org/Q17-1024/",
    authors: "<strong>Melvin Johnson</strong>, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Zhifeng Chen, Nikhil Thorat, Fernanda Viégas, Martin Wattenberg, Greg Corrado, Macduff Hughes, Jeffrey Dean",
    venue: "Transactions of the Association for Computational Linguistics (TACL)",
    category: "multilingual",
    selected: true,
    note: "Lead author · Pioneered single-model zero-shot NMT"
  },
  {
    year: 2016,
    title: "Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation",
    url: "https://arxiv.org/abs/1609.08144",
    authors: "Yonghui Wu, Mike Schuster, Zhifeng Chen, Quoc V. Le, Mohammad Norouzi, Wolfgang Macherey, Maxim Krikun, Yuan Cao, Qin Gao, Klaus Macherey, Jeff Klingner, Apurva Shah, <strong>Melvin Johnson</strong>, Xiaobing Liu, Lukasz Kaiser, Stephan Gouws, Taku Kudo, Hideto Kazawa, Keith Stevens, George Kurian, Nishant Patil, Wei Wang, Cliff Young, Jason Smith, Jason Riesa, Alex Rudnick, Oriol Vinyals, Greg Corrado, Macduff Hughes, Jeffrey Dean",
    venue: "arXiv preprint",
    category: "multilingual",
    selected: true,
    note: "Foundational GNMT production system"
  }
];

// State — Default locked to Academic Monograph
const state = {
  design: "monograph",
  mode: "light",
  showPhoto: true,
  pubFilter: "all",
  pubShowAll: false,
  blocks: {
    themes: true,
    publications: true,
    talks: true,
    timeline: true,
    systems: false,
    mentorship: false,
    colophon: true
  }
};

function renderPublications() {
  const listEl = document.getElementById("pub-list");
  const toggleBtn = document.getElementById("pub-scope-toggle");
  const countMeta = document.getElementById("pub-count-meta");
  if (!listEl) return;

  const isEssential = state.design === "essential";

  let filtered = PUBLICATIONS.filter(p => {
    if (isEssential) return p.selected;
    if (state.pubFilter !== "all" && p.category !== state.pubFilter) return false;
    if (!state.pubShowAll && state.pubFilter === "all" && !p.selected) return false;
    return true;
  });

  if (isEssential) {
    filtered = filtered.slice(0, 6);
  }

  listEl.innerHTML = filtered.map(p => `
    <li class="pub-item">
      <span class="pub-year">${p.year}</span>
      <div class="pub-content">
        <div class="pub-title-line">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.title}</a>
        </div>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-venue-line">
          <span class="pub-venue">${p.venue}</span>
          ${p.note ? `<span class="pub-note">· ${p.note}</span>` : ""}
        </div>
      </div>
    </li>
  `).join("");

  if (toggleBtn) {
    if (state.pubFilter !== "all") {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "inline-block";
      toggleBtn.textContent = state.pubShowAll
        ? "Show selected (12)"
        : `Show all publications (${PUBLICATIONS.length})`;
    }
  }

  if (countMeta) {
    countMeta.textContent = state.pubShowAll || state.pubFilter !== "all"
      ? `${filtered.length} papers`
      : `Selected (${filtered.length} of ${PUBLICATIONS.length})`;
  }
}

function applyStateToDOM() {
  document.documentElement.setAttribute("data-design", state.design);
  document.documentElement.setAttribute("data-mode", state.mode);

  const portrait = document.getElementById("profile-portrait");
  if (portrait) {
    portrait.classList.toggle("hidden", !state.showPhoto);
  }

  document.querySelectorAll(".design-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.designChoice === state.design);
  });

  Object.entries(state.blocks).forEach(([blockKey, visible]) => {
    const sec = document.getElementById(`block-${blockKey}`);
    if (sec) {
      sec.classList.toggle("hidden-block", !visible);
    }
    const chip = document.querySelector(`.block-chip[data-block="${blockKey}"]`);
    if (chip) {
      chip.classList.toggle("active", visible);
      const check = chip.querySelector(".chip-check");
      if (check) check.textContent = visible ? "✓" : "+";
    }
  });

  const modeBtn = document.getElementById("toggle-mode-btn");
  if (modeBtn) {
    modeBtn.textContent = state.mode === "light" ? "Dark Ink" : "Light Paper";
  }

  const photoBtn = document.getElementById("toggle-photo-btn");
  if (photoBtn) {
    photoBtn.textContent = state.showPhoto ? "Hide Photo" : "Show Photo";
  }

  renderPublications();
}

function exportCleanHTML() {
  const clone = document.documentElement.cloneNode(true);
  const studio = clone.querySelector("#studio-bar");
  if (studio) studio.remove();

  clone.querySelectorAll(".hidden-block").forEach(el => el.remove());

  fetch("styles.css")
    .then(r => r.text())
    .then(cssText => {
      const linkEl = clone.querySelector('link[href="styles.css"]');
      if (linkEl) {
        const styleEl = document.createElement("style");
        styleEl.textContent = cssText;
        linkEl.replaceWith(styleEl);
      }
      const htmlString = "<!DOCTYPE html>\n" + clone.outerHTML;
      const blob = new Blob([htmlString], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "index.html";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".design-option").forEach(btn => {
    btn.addEventListener("click", () => {
      state.design = btn.dataset.designChoice;
      applyStateToDOM();
    });
  });

  document.querySelectorAll(".block-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.block;
      state.blocks[key] = !state.blocks[key];
      applyStateToDOM();
    });
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.pubFilter = btn.dataset.filter;
      renderPublications();
    });
  });

  const scopeBtn = document.getElementById("pub-scope-toggle");
  if (scopeBtn) {
    scopeBtn.addEventListener("click", () => {
      state.pubShowAll = !state.pubShowAll;
      renderPublications();
    });
  }

  const modeBtn = document.getElementById("toggle-mode-btn");
  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      state.mode = state.mode === "light" ? "dark" : "light";
      applyStateToDOM();
    });
  }

  const photoBtn = document.getElementById("toggle-photo-btn");
  if (photoBtn) {
    photoBtn.addEventListener("click", () => {
      state.showPhoto = !state.showPhoto;
      applyStateToDOM();
    });
  }

  const minBtn = document.getElementById("minimize-studio-btn");
  const studioBar = document.getElementById("studio-bar");
  if (minBtn && studioBar) {
    minBtn.addEventListener("click", () => {
      const isMin = studioBar.classList.toggle("minimized");
      minBtn.textContent = isMin ? "Customize" : "Minimize";
    });
  }

  const exportBtn = document.getElementById("export-html-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportCleanHTML);
  }

  applyStateToDOM();
});
