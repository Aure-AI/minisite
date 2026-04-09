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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzNDk3NTY0Ny9vcmlnaW5hbF80ZjdkYTE4ZDUzOGEyNGIxNjAyMzNlMzY3ZjJiZjc2YS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjEyMDAsImZpdCI6Imluc2lkZSIsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0",
        alt: "armor energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxOTYwNTAzMC9vcmlnaW5hbF85YTVlNmU4ZDcwYTE2NjQ4MmUzZmQzYzU0ZjdkNGQ1Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "disruption energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MTkyMTQ1Ni9vcmlnaW5hbF8zMGYxN2IyNDRjNmVkOTYwMDA3NzMzOWYzNmQ1MjYyZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "command energy",
      },
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzODM0OTczMy9vcmlnaW5hbF83NTE5ZTI4NDIyMTU0Mzk0ZWE2ZjIyZWRlZWU4OWFjZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "command energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://d2w9rnfcy7mm78.cloudfront.net/36273773/original_14b08845b09107491be4f5804199bb8b.gif?1745698356?bc=0",
        alt: "play energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMjc4MjA5NS9vcmlnaW5hbF8zMWMyN2NlNDgzNGJhNTc4YTgzZDhlN2FiODJlYThiNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "craft energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzOTAzOTIyMS9vcmlnaW5hbF9iNGY1ZDhlNzM0NWZhNmY2MzJjMGYwYmJkYWIyOGE1Zi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "ritual energy",
      },
      {
        url: "https://d2w9rnfcy7mm78.cloudfront.net/23151857/original_aa9ff870b3aeeea2df3da845aa54da6e.gif?1692122986?bc=0",
        alt: "ritual energy",
      },
    ],
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
    heroImages: [
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0Mjg2ODI1NC9vcmlnaW5hbF8xZmJhNjQzNDhhYmVmNmUxZmFlN2E0NjFmNzFlZjg0Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0",
        alt: "synthesis energy",
      },
      {
        url: "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIyOTQ2ODEwL29yaWdpbmFsXzA4ODQ1NWM4ODU1YmVkMTZhODUwZGM1Y2ZkZTM1NTU2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJpbnNpZGUiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19?bc=1",
        alt: "synthesis energy",
      },
    ],
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

const energyHeroMobileMq = window.matchMedia("(max-width: 900px)");

function heroesForLayout(heroImages) {
  const list = heroImages ?? [];
  if (energyHeroMobileMq.matches && list.length > 1) {
    return [list[0]];
  }
  return list;
}

function sigilPath(name) {
  return `/assets/sigils/${name}.svg`;
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
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

  const imagesEl = document.getElementById("energy-images");
  const heroes = heroesForLayout(e.heroImages);
  imagesEl.innerHTML = heroes
    .map(
      (h) =>
        `<img src="${escapeAttr(h.url)}" alt="${escapeAttr(h.alt)}" class="outfit-img" loading="lazy" decoding="async" />`
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

energyHeroMobileMq.addEventListener("change", () => {
  renderContent();
});

setEnergy("disruption");
