const chapters = [
  {
    type: "cover",
    title: "The Lantern at the Edge of Summer",
    subtitle: "A dreamy story of wonder, courage, and belonging",
    author: "By Ernestina S. Berkoh",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    details: [
      "An island mystery",
      "A hidden light",
      "A promise that glows"
    ]
  },
  {
    title: "The Whispering Tide",
    subtitle: "A morning when the ocean began to remember",
    paragraphs: [
      "On the morning the lantern first glowed, Mira woke before the sun had finished dressing itself in gold. Her room smelled of salt and cedar, and a single ribbon of wind slipped beneath the window frame and brushed her face like a quiet friend.",
      "Below the cliffs, the harbor was still, so still that even the gulls seemed to be listening. The boats rocked gently, their ropes humming against the wooden posts. Mira pulled on her coat and stepped outside, following the strange light to the edge of the village where a narrow path bent toward the sea.",
      "There, beside the stone jetty, stood an old brass lantern hanging from a rusted iron hook. It was not lit by any flame she knew, yet it glowed with the color of warm honey. As she lifted it, the tide answered with a wave that curled closer to shore than any wave had in years. It whispered her name as if it had been waiting a long, lonely time."
    ]
  },
  {
    title: "The Map in the Sand",
    subtitle: "The sea left clues behind its silence",
    paragraphs: [
      "Mira knelt in the wet sand and found a pattern there—a spiral of shells, a line of blue pebbles, and a thin zigzag that seemed to point to the west. The village elder later confirmed it was a map used by sailors long before the lighthouse had been built. The lantern, he said, was one of the forgotten guides to the island's hidden coves.",
      "The old man was careful with his words, as if they were a cup of tea too precious to spill. 'Every island has a light it keeps for itself,' he murmured. 'The sea only calls the right person when it is ready to be seen.'",
      "Mira had never thought of the sea as wanting anything. But now, watching the lantern pulse in her palm, she felt an odd and steady certainty: this was not a burden to be carried. It was an invitation."
    ]
  },
  {
    title: "The House of Blue Glass",
    subtitle: "A place where time flickered like rain",
    paragraphs: [
      "That evening she followed the map to a tiny cottage tucked behind a stand of pine trees. Its windows were covered in blue glass, and each pane held a different shade of the sky. Inside, a woman in a patched apron looked up from a table filled with lantern parts and stitched maps, as if she had been expecting Mira for years.",
      "'You found my workshop,' the woman said, smiling without surprise. 'The lantern was never meant for the harbor. It is for the hidden place beyond the cliffs.'",
      "Mira looked around at the shelves lined with tiny brass stars, folded paper birds, and polished shells. Somewhere in the room, a clock ticked in a rhythm that did not match the real world. The woman reached for a silver key from the drawer and pressed it into Mira's hand. 'The island doesn't reveal itself all at once,' she said. 'But it gives a first light to those who can listen.'"
    ]
  },
  {
    title: "The Cliffs Beyond the Last Bell",
    subtitle: "Courage looks different when the road disappears",
    paragraphs: [
      "The path to the cliffs was steep and windy, with wild thyme brushing against Mira's ankles and the lantern throwing a dozen amber shadows over the stone. At the top, she found a ring of old bell posts leaning into the mist. One of them had a small iron door set into it, as if someone had built a secret room into the cliff itself.",
      "When she opened it, a staircase descended into darkness. Not the darkness of absence, but the darkness of waiting. At each step, the lantern brightened, and the sound of the sea below began to change. It no longer crashed. It sang.",
      "At the bottom, she discovered a chamber carved into the living rock. The walls were lined with tiny glass jars, each one containing a memory of the island: a tide chart, a first kiss, a winter storm, a laugh from a vanished child. The lantern was not a guide. It was a keeper of stories."
    ]
  },
  {
    title: "The Summer That Stayed",
    subtitle: "The final light was only the beginning",
    paragraphs: [
      "Mira carried the lantern back up into the evening and lifted it toward the horizon. The sea answered with a brief glittering bloom. From every cove and every harbor wall, tiny lights began to wake. The village, which had fallen quiet for so long, filled again with movement and laughter and the music of summer beginning at the proper hour.",
      "The old elder stood at the dock and bowed his head when he saw her. 'You have found the heart of the island,' he said. 'Now it will remember how to shine.'",
      "Mira looked out over the darkening water. The lantern in her hands was warm, and beneath its glow she felt something ancient and generous settle into her chest: not a secret, exactly, but a promise. That the world could hold wonder without asking for it to disappear. That even a single light, enough to be seen, could be a beginning for everyone."
    ]
  },
  {
    type: "back",
    title: "A Story for Dreamers",
    subtitle: "A tale for anyone who has ever followed a quiet glow",
    summary:
      "In a village shaped by sea wind and old silence, Mira discovers a lantern that remembers the island's deepest stories. As she follows the light beyond the cliffs, she learns that courage is not always loud—it can be gentle, patient, and brave enough to guide others home. This enchanting tale celebrates wonder, memory, and the power of small lights to change a whole world.",
    authorBio:
      "Ernestina S. Berkoh loves to imagine and create, and she expresses that creativity through singing, drawing, and painting. Her work is filled with warmth, wonder, and a love for stories that glow from the inside out.",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80"
    ],
    highlights: [
      "A lyrical island adventure",
      "Themes of hope and belonging",
      "Beautifully paced for dreamers and readers of all ages"
    ]
  }
];

const tocEl = document.getElementById("toc");
const chapterContentEl = document.getElementById("chapterContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const themeToggle = document.getElementById("themeToggle");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

let currentChapter = 0;

function renderToc() {
  tocEl.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "toc-button" + (index === currentChapter ? " active" : "");
    const label = chapter.type === "cover"
      ? "Front Cover"
      : chapter.type === "back"
        ? "Final Page"
        : `Chapter ${index}`;
    button.textContent = chapter.type === "cover" || chapter.type === "back" ? label : `${index}. ${chapter.title}`;
    button.setAttribute("aria-label", `Go to ${chapter.title}`);
    button.addEventListener("click", () => {
      currentChapter = index;
      render();
    });
    tocEl.appendChild(button);
  });
}

function renderChapter() {
  const chapter = chapters[currentChapter];

  if (chapter.type === "cover") {
    chapterContentEl.innerHTML = `
      <div class="cover-page">
        <div class="cover-visual" style="background-image: linear-gradient(rgba(24, 26, 39, 0.2), rgba(24, 26, 39, 0.45)), url('${chapter.image}')"></div>
        <div class="cover-copy">
          <div class="chapter-kicker">A story of wonder</div>
          <h2>${chapter.title}</h2>
          <p class="author-line">${chapter.author}</p>
          <p class="chapter-subtitle">${chapter.subtitle}</p>
          <div class="cover-tags">
            ${chapter.details.map((detail) => `<span>${detail}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (chapter.type === "back") {
    chapterContentEl.innerHTML = `
      <div class="back-cover-page">
        <div class="back-cover-gallery">
          ${chapter.images.map((image) => `
            <div class="back-cover-image" style="background-image: url('${image}')"></div>
          `).join("")}
        </div>
        <h2>${chapter.title}</h2>
        <p class="chapter-subtitle">${chapter.subtitle}</p>
        <div class="chapter-body">
          <p>${chapter.summary}</p>
        </div>
        <div class="author-bio">
          <h3>About the Author</h3>
          <p>${chapter.authorBio}</p>
        </div>
        <div class="cover-tags back-tags">
          ${chapter.highlights.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    `;
    return;
  }

  chapterContentEl.innerHTML = `
    <div class="chapter-kicker">Chapter ${currentChapter}</div>
    <h2>${chapter.title}</h2>
    <p class="chapter-subtitle">${chapter.subtitle}</p>
    <div class="chapter-body">
      ${chapter.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  `;
}

function updateProgress() {
  const progress = ((currentChapter + 1) / chapters.length) * 100;
  const currentLabel = chapters[currentChapter].type === "cover"
    ? "Front Cover"
    : chapters[currentChapter].type === "back"
      ? "Final Page"
      : `Chapter ${currentChapter}`;

  progressText.textContent = `${currentLabel} of ${chapters.length}`;
  progressFill.style.width = `${progress}%`;
}

function render() {
  renderToc();
  renderChapter();
  updateProgress();

  prevBtn.disabled = currentChapter === 0;
  prevBtn.style.opacity = currentChapter === 0 ? "0.45" : "1";

  if (currentChapter === chapters.length - 1) {
    nextBtn.textContent = "Start Again";
    return;
  }

  nextBtn.textContent = currentChapter === 0 ? "Begin Reading" : "Next";
}

prevBtn.addEventListener("click", () => {
  if (currentChapter > 0) {
    currentChapter -= 1;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter += 1;
    render();
    return;
  }

  currentChapter = 0;
  render();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Day mode" : "Night mode";
});

render();
