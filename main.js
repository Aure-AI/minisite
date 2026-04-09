const ENERGIES = {
  armor: {
    label: "armor",
    short: "Confidence through restraint",
    description:
      "One strong layer does the talking so you do not have to. Protection, texture, confidence; you occupy space without announcing yourself.",
    triggers: [
      "\u201cI want to look good but not like I tried.\u201d",
      "\u201cI do not want to stand out. I just want to feel right.\u201d",
    ],
    color: "#8A8A8A",
  },
  disruption: {
    label: "disruption",
    short: "Breaking rules intentionally",
    description:
      "Taking something structured and running it through something raw. The suit under the military jacket. The formal piece worn casually.",
    triggers: [
      "\u201cI have a dressy thing but I do not want to look corporate.\u201d",
      "\u201cI want to mix things that should not go together.\u201d",
    ],
    color: "#C45C3B",
  },
  command: {
    label: "command",
    short: "The room adjusts to you",
    description:
      "Power, precision, monochrome tailoring. Architectural silhouettes, zero wasted motion. Every seam earns its place.",
    triggers: [
      "\u201cI need to look like I run something.\u201d",
      "\u201cThis meeting matters.\u201d",
    ],
    color: "#E8E0D0",
  },
  play: {
    label: "play",
    short: "Joy without apology",
    description:
      "Color, irreverence, not taking it too seriously. Bold palettes, pattern mixing, warm-weather ease.",
    triggers: [
      "\u201cI want to have fun with this.\u201d",
      "\u201cNot everything needs to be dark and serious.\u201d",
    ],
    color: "#D4A843",
  },
  craft: {
    label: "craft",
    short: "The hand of the maker",
    description:
      "Texture, materiality, artisan energy. Raw fabrics, one-of-a-kind details. Depth over label.",
    triggers: [
      "\u201cI do not care who made it, I care how it was made.\u201d",
      "\u201cI want something that feels like it has a story.\u201d",
    ],
    color: "#7A8B6F",
  },
  ritual: {
    label: "ritual",
    short: "Getting dressed as ceremony",
    description:
      "Preparation, intention, suiting up for something that matters. The energy you bring to putting the outfit on is part of the outfit.",
    triggers: [
      "\u201cThis is important to me.\u201d",
      "\u201cI want to feel like I prepared.\u201d",
    ],
    color: "#6B5B7B",
  },
  synthesis: {
    label: "synthesis",
    short: "Blending references into one voice",
    description:
      "Two different interpretations of the same confidence. Cultures, eras, influences woven together. There is more than one way to show up correct.",
    triggers: [
      "\u201cI pull from a lot of places.\u201d",
      "\u201cI do not fit into one box.\u201d",
    ],
    color: "#4A7B8C",
  },
};

const ENERGY_ORDER = [
  "armor",
  "disruption",
  "command",
  "play",
  "craft",
  "ritual",
  "synthesis",
];

let activeEnergy = "disruption";

function sigilPath(name) {
  return `/assets/sigils/${name}.svg`;
}

function renderPills() {
  const container = document.getElementById("energy-pills");
  container.innerHTML = ENERGY_ORDER.map((key) => {
    const e = ENERGIES[key];
    const isActive = key === activeEnergy;
    const activeClass = isActive ? "pill-active" : "";
    const style = isActive
      ? `background: ${e.color}22; border-color: ${e.color}; color: ${e.color};`
      : "";
    return `<button class="pill ${activeClass}" data-energy="${key}" style="${style}">
      <img src="${sigilPath(key)}" alt="" class="pill-icon" />
      ${e.label}
    </button>`;
  }).join("");
}

function renderContent() {
  const e = ENERGIES[activeEnergy];

  const icon = document.getElementById("energy-icon");
  icon.innerHTML = `<img src="${sigilPath(activeEnergy)}" alt="${e.label} energy" />`;
  icon.style.setProperty("--energy-color", e.color);

  document.getElementById("energy-name").textContent = e.label;

  const short = document.getElementById("energy-short");
  short.textContent = e.short;
  short.style.color = e.color;

  document.getElementById("energy-desc").textContent = e.description;

  const quotes = document.getElementById("energy-quotes");
  quotes.innerHTML = e.triggers
    .map(
      (t) =>
        `<blockquote style="border-color: ${e.color}">${t}</blockquote>`
    )
    .join("");
}

function setEnergy(key) {
  if (key === activeEnergy && document.getElementById("energy-name").textContent) return;
  activeEnergy = key;
  const content = document.getElementById("energy-content");
  content.style.opacity = "0";
  setTimeout(() => {
    renderPills();
    renderContent();
    content.style.opacity = "1";
  }, 120);
}

document.getElementById("energy-pills").addEventListener("click", (ev) => {
  const pill = ev.target.closest("[data-energy]");
  if (pill) setEnergy(pill.dataset.energy);
});

setEnergy("disruption");
