// ─────────────────────────────────────────────
//  SLEEPOVER SECRETS — game.js
//  All story data + state management logic
// ─────────────────────────────────────────────

const scenes = {

  // ── ACT 1: ARRIVAL ──────────────────────────

  s1: {
    title: "Scene 1 — Arrival",
    time: "9:00 PM",
    narrator: "Everyone has gathered at Maya's house. Her parents are away for the weekend. Six friends, sleeping bags, and a box of cold pizza.",
    speaker: "MAYA",
    text: "Okay, everyone's here! Mom left pizza in the kitchen. But… has anyone seen my locket? The gold one with the photo inside. I left it on my dresser this morning and now it's gone.",
    choices: [
      { label: "Offer to help search the house", next: "s2a", trust: 1, suspicion: 0 },
      { label: "Watch everyone's reaction carefully", next: "s2b", trust: 0, suspicion: 1 },
      { label: "Ask who arrived first", next: "s2c", trust: 0, suspicion: 1 }
    ]
  },

  // ── ACT 2: BRANCHING ────────────────────────

  s2a: {
    title: "Scene 2 — The Search",
    time: "9:20 PM",
    narrator: "You lead the group upstairs. As you pass the bathroom, you notice something odd.",
    speaker: "YOU",
    text: "I'll check Maya's room first. But as I climb the stairs, I notice something — the bathroom light is off, but there are wet footprints on the hallway floor. Someone was up here recently.",
    clue: "Wet footprints in the hallway — someone came upstairs alone before the search began.",
    choices: [
      { label: "Point the footprints out to everyone", next: "s3", trust: 1, suspicion: 1 },
      { label: "Photograph them secretly on your phone", next: "s3b", trust: 0, suspicion: 2, item: "Footprint Photo" },
      { label: "Say nothing and keep searching", next: "s3c", trust: 0, suspicion: 0 }
    ]
  },

  s2b: {
    title: "Scene 2 — Watching",
    time: "9:20 PM",
    narrator: "You study each face as Maya speaks.",
    speaker: "NARRATOR",
    text: "Priya jumps up almost too fast — 'I'll check the living room!' Jordan stares at the floor. When you catch her eye, she looks away quickly. The pizza sits untouched on the table.",
    clue: "Jordan avoids eye contact when the locket is mentioned.",
    choices: [
      { label: "Sit beside Jordan and gently ask if she's okay", next: "s3d", trust: 1, suspicion: 1 },
      { label: "Follow Priya to the living room", next: "s3e", trust: 0, suspicion: 1 },
      { label: "Announce that someone here knows something", next: "s3f", trust: -1, suspicion: 2 }
    ]
  },

  s2c: {
    title: "Scene 2 — First to Arrive",
    time: "9:20 PM",
    narrator: "The question hangs in the air longer than it should.",
    speaker: "PRIYA",
    text: "I… I was first. I got here around 4. Maya let me in and then went to shower. I was alone downstairs for like… twenty minutes? Why are you asking?",
    clue: "Priya was alone in the house for 20 minutes before anyone else arrived.",
    choices: [
      { label: "Reassure Priya — you're just trying to help", next: "s3", trust: 1, suspicion: 0 },
      { label: "Note this and ask Maya to confirm", next: "s3g", trust: 0, suspicion: 2 },
      { label: "Ask what Priya was doing those 20 minutes", next: "s3h", trust: -1, suspicion: 2 }
    ]
  },

  // ── ACT 3: DEEPER ───────────────────────────

  s3: {
    title: "Scene 3 — The Bedroom",
    time: "9:45 PM",
    narrator: "Maya's room is slightly messy — normal for her. But her jewelry box is open and turned to face the wall.",
    speaker: "MAYA",
    text: "That's weird. I always keep it facing the mirror — I'm superstitious about it. Someone turned it around. But why would anyone do that?",
    clue: "The jewelry box was deliberately turned to face the wall.",
    choices: [
      { label: "Suggest someone was hiding guilt", next: "s4a", trust: 0, suspicion: 2 },
      { label: "Check behind the jewelry box for hidden objects", next: "s4b", trust: 1, suspicion: 1, item: "Folded Note" },
      { label: "Ask if anyone has been in this room before tonight", next: "s4c", trust: 0, suspicion: 1 }
    ]
  },

  s3b: {
    title: "Scene 3 — Silent Evidence",
    time: "9:45 PM",
    narrator: "You pocket the evidence. As the group searches the bedroom, you slip into the bathroom alone.",
    speaker: "NARRATOR",
    text: "Inside the bathroom wastebasket — a balled-up piece of paper. You unfold it under the light. It's a receipt for a pawn shop. Today's date. The item sold: 'gold locket, oval, engraved initials M.K.'",
    clue: "Pawn shop receipt found in bathroom trash. The locket was sold today.",
    choices: [
      { label: "Confront everyone immediately with the receipt", next: "s4_reveal", trust: -1, suspicion: 3, item: "Pawn Receipt" },
      { label: "Pocket the receipt and keep watching", next: "s4d", trust: 0, suspicion: 2, item: "Pawn Receipt" },
      { label: "Tell Maya privately", next: "s4e", trust: 2, suspicion: 1, item: "Pawn Receipt" }
    ]
  },

  s3c: {
    title: "Scene 3 — Moving On",
    time: "9:40 PM",
    narrator: "You say nothing. The group searches without direction. An hour passes.",
    speaker: "NARRATOR",
    text: "Nothing turns up. Around 10pm, Maya sits down looking defeated. You notice Jordan has been very quiet the whole time — and keeps touching the sleeve of her jacket like she's hiding something underneath.",
    choices: [
      { label: "Ask Jordan if she's okay", next: "s3d", trust: 1, suspicion: 0 }
    ]
  },

  s3d: {
    title: "Scene 3 — A Quiet Confession",
    time: "9:45 PM",
    narrator: "You find Jordan alone in the kitchen, staring out the window at the dark yard.",
    speaker: "JORDAN",
    text: "I'm sorry. I borrowed the locket last week for picture day — I asked Maya and she said yes. But then… I lost it on the bus. I've been trying to find it ever since. I didn't say anything because I was scared. I gave it to the lost-and-found at school. It might still be there.",
    clue: "Jordan borrowed the locket with permission and lost it — it may be at school's lost-and-found.",
    choices: [
      { label: "Go with Jordan to tell Maya together", next: "s4f", trust: 3, suspicion: -1 },
      { label: "Ask why she didn't tell Maya right away", next: "s4g", trust: 1, suspicion: 0 },
      { label: "Let Jordan confess on her own terms", next: "s4h", trust: 2, suspicion: 0 }
    ]
  },

  s3e: {
    title: "Scene 3 — The Living Room",
    time: "9:45 PM",
    narrator: "Priya is rifling through cushions with oddly practiced efficiency.",
    speaker: "NARRATOR",
    text: "She's already checked under the couch and behind the TV cabinet — she knows where to look, almost too well. On the mantle, you notice a polaroid photo you don't recognize. Two girls. One of them is Priya. The other's face has been carefully scratched out.",
    clue: "A polaroid with a scratched-out face on Maya's mantle. Priya searches the room like she's done it before.",
    choices: [
      { label: "Ask Priya about the polaroid directly", next: "s4i", trust: 0, suspicion: 2, item: "Polaroid Photo" },
      { label: "Pocket the polaroid for later", next: "s4j", trust: -1, suspicion: 2, item: "Polaroid Photo" },
      { label: "Leave it and help Priya search", next: "s4k", trust: 1, suspicion: 0 }
    ]
  },

  s3f: {
    title: "Scene 3 — Accused",
    time: "9:45 PM",
    narrator: "The room goes cold. Maya looks horrified. Jordan starts crying.",
    speaker: "MAYA",
    text: "That's — you can't just say that! These are my friends. Nobody here would steal from me. I think you should leave.",
    choices: [
      { label: "Apologize and walk back your accusation", next: "s4_recover", trust: -2, suspicion: 0 },
      { label: "Stand your ground — someone is lying", next: "s4_standoff", trust: -2, suspicion: 2 }
    ]
  },

  s3g: {
    title: "Scene 3 — Verification",
    time: "9:45 PM",
    narrator: "Maya nods slowly.",
    speaker: "MAYA",
    text: "Yeah, Priya's always early. She helped me set up the sleeping bags actually. She was in my room for a while — said she was picking a good spot.",
    clue: "Priya was unsupervised in Maya's bedroom before the others arrived.",
    choices: [
      { label: "Find Priya alone and ask what she saw in the bedroom", next: "s4i", trust: 0, suspicion: 2 },
      { label: "Keep this in mind and gather more evidence first", next: "s3", trust: 0, suspicion: 1 },
      { label: "Tell Maya your suspicion about Priya", next: "s4_priya", trust: -1, suspicion: 2 }
    ]
  },

  s3h: {
    title: "Scene 3 — Confrontation",
    time: "9:50 PM",
    narrator: "Priya's eyes fill with tears. Maya steps between you.",
    speaker: "MAYA",
    text: "Hey — she's my best friend. Back off. Priya wouldn't steal anything, ever. You're ruining the whole night.",
    choices: [
      { label: "Apologize to both of them", next: "s4_recover", trust: -2, suspicion: 0 },
      { label: "Quietly back away and refocus", next: "s3", trust: -1, suspicion: 1 }
    ]
  },

  // ── ACT 4: THE TURN ─────────────────────────

  s4a: {
    title: "Scene 4 — Midnight",
    time: "11:30 PM",
    narrator: "Everyone is sitting in a circle. Tensions are high. Then your phone buzzes.",
    speaker: "NARRATOR",
    text: "It's a text from an unknown number: 'Stop asking questions or the locket isn't the only secret that comes out tonight.' Your hands go cold. Someone at this sleepover sent that.",
    clue: "Anonymous threat received — the thief is in the room right now.",
    choices: [
      { label: "Show the text to Maya immediately", next: "ending_truth", trust: 2, suspicion: 2 },
      { label: "Ask if anyone needs to use the bathroom — and check their phones", next: "ending_caught", trust: 0, suspicion: 3 },
      { label: "Text back: 'I already know who you are'", next: "ending_bluff", trust: 0, suspicion: 2 }
    ]
  },

  s4b: {
    title: "Scene 4 — The Note",
    time: "11:00 PM",
    narrator: "Behind the jewelry box, folded tight — a note on pink paper.",
    speaker: "NARRATOR",
    text: "The handwriting is loopy and careful: 'I borrowed it. I'll put it back before morning. Please don't hate me. — P.' Priya. She borrowed it without asking. But where is it now?",
    clue: "Note from Priya — she borrowed the locket intending to return it before anyone noticed.",
    choices: [
      { label: "Find Priya alone and let her explain", next: "ending_compassion", trust: 2, suspicion: 1 },
      { label: "Read the note aloud to the whole group", next: "ending_exposed", trust: -1, suspicion: 3 },
      { label: "Give the note to Maya privately", next: "ending_truth", trust: 2, suspicion: 1 }
    ]
  },

  s4c: {
    title: "Scene 4 — Before Tonight",
    time: "10:00 PM",
    narrator: "Maya thinks for a moment.",
    speaker: "MAYA",
    text: "Priya was here this afternoon. She came over early to help set up. She was in my room for maybe half an hour before I came up. I thought she was just picking where to sleep.",
    clue: "Priya had unsupervised access to Maya's room earlier today.",
    choices: [
      { label: "Find Priya and ask about this quietly", next: "s4i", trust: 0, suspicion: 1 },
      { label: "Ask Maya if anything else seemed off today", next: "s4a", trust: 1, suspicion: 1 }
    ]
  },

  s4d: {
    title: "Scene 4 — Watching and Waiting",
    time: "11:00 PM",
    narrator: "You sit on the evidence while the night deepens.",
    speaker: "NARRATOR",
    text: "Midnight creeps closer. Someone keeps checking their phone. Someone keeps not meeting your eyes. The receipt burns a hole in your pocket.",
    choices: [
      { label: "Reveal the receipt now", next: "s4_reveal", trust: 0, suspicion: 2 },
      { label: "Confront the most suspicious person directly", next: "s4i", trust: -1, suspicion: 2 }
    ]
  },

  s4e: {
    title: "Scene 4 — A Private Word",
    time: "10:45 PM",
    narrator: "You find a quiet moment to pull Maya aside.",
    speaker: "YOU",
    text: "Maya, I found something in the bathroom. You need to see it.",
    choices: [
      { label: "Show her the receipt", next: "ending_truth", trust: 2, suspicion: 1 }
    ]
  },

  s4f: {
    title: "Scene 4 — Together",
    time: "11:00 PM",
    narrator: "You and Jordan find Maya in the kitchen.",
    speaker: "JORDAN",
    text: "Maya, I have to tell you something. I'm so sorry. I borrowed your locket for picture day — I asked you and you said yes, but then I lost it on the bus. I gave it to the lost-and-found at school. I should have told you right away. I'm really sorry.",
    choices: [
      { label: "Wait quietly while Maya processes this", next: "ending_healing" },
      { label: "Remind Maya that Jordan came forward willingly", next: "ending_healing", trust: 1 }
    ]
  },

  s4g: {
    title: "Scene 4 — Understanding",
    time: "10:00 PM",
    narrator: "Jordan wraps her arms around herself.",
    speaker: "JORDAN",
    text: "I didn't want to ruin the night. Or the friendship. Maya lent it to me like it was nothing and I… I lost it. I felt so ashamed.",
    choices: [
      { label: "Help Jordan face it together", next: "s4f", trust: 2 }
    ]
  },

  s4h: {
    title: "Scene 4 — Her Moment",
    time: "10:15 PM",
    narrator: "You give Jordan space. Twenty minutes later, you hear her voice from the kitchen.",
    speaker: "NARRATOR",
    text: "'Maya? Can we talk?' You slip away quietly. Some things need to happen without witnesses.",
    choices: [
      { label: "Wait outside the kitchen", next: "ending_healing" }
    ]
  },

  s4i: {
    title: "Scene 4 — The Polaroid",
    time: "11:15 PM",
    narrator: "Priya stares at the polaroid in your hand. Her face drains of color.",
    speaker: "PRIYA",
    text: "That's… please. Don't show that to Maya. The girl in the photo — that's her sister. The one who moved away after the fight. Maya doesn't know I still talk to her. The locket has her sister's picture inside. I was trying to get it back before anyone noticed.",
    clue: "Priya has secretly maintained contact with Maya's estranged sister.",
    choices: [
      { label: "Agree to let Priya handle it — it's not your secret", next: "ending_compassion" },
      { label: "Tell Maya everything — she deserves to know the truth", next: "ending_revelation" },
      { label: "Ask Priya where the locket is right now", next: "ending_caught" }
    ]
  },

  s4j: {
    title: "Scene 4 — The Evidence",
    time: "10:45 PM",
    narrator: "The polaroid is safely in your pocket.",
    speaker: "NARRATOR",
    text: "You watch Priya for the rest of the evening. She knows something. Around 11pm, she disappears upstairs alone for ten minutes.",
    choices: [
      { label: "Follow her", next: "s4i" },
      { label: "Ask where she went when she returns", next: "s4i" }
    ]
  },

  s4k: {
    title: "Scene 4 — Playing It Cool",
    time: "10:30 PM",
    narrator: "You help search. Hours pass. Then Priya suddenly says she has to leave early.",
    speaker: "PRIYA",
    text: "I just… have to go. Tell Maya I'm sorry. About everything.",
    choices: [
      { label: "Stop her at the door and ask what she means", next: "s4i", trust: 0, suspicion: 2 }
    ]
  },

  s4_reveal: {
    title: "Scene 4 — The Receipt Drops",
    time: "11:45 PM",
    narrator: "The receipt hits the coffee table. Everyone stares.",
    speaker: "NARRATOR",
    text: "The room goes deadly silent. Then a voice — barely above a whisper — 'I can explain.' All eyes turn to Priya. She's shaking.",
    choices: [
      { label: "Let Priya speak", next: "ending_priya_explains" },
      { label: "Demand answers now", next: "ending_exposed", trust: -2 }
    ]
  },

  s4_recover: {
    title: "Scene 4 — Recovering",
    time: "10:30 PM",
    narrator: "The tension slowly thaws after your apology.",
    speaker: "YOU",
    text: "You back down and help with the search more quietly. An hour later, you see Jordan slip out to the hallway — and follow her.",
    choices: [
      { label: "Follow Jordan and listen", next: "s3d", trust: 0, suspicion: 1 }
    ]
  },

  s4_standoff: {
    title: "Scene 4 — Standoff",
    time: "10:30 PM",
    narrator: "Nobody backs down. The silence stretches unbearably.",
    speaker: "NARRATOR",
    text: "Then Jordan stands up slowly. 'Fine. I'll tell you. But not like this — not with everyone staring.' She looks at you. 'Just you.'",
    choices: [
      { label: "Follow Jordan", next: "s3d" }
    ]
  },

  s4_priya: {
    title: "Scene 4 — The Accusation",
    time: "10:30 PM",
    narrator: "Maya's expression shifts from concern to hurt.",
    speaker: "MAYA",
    text: "Priya? You think Priya took it? She's been my best friend since third grade. Why would she— no. I don't believe it.",
    choices: [
      { label: "Show what you know, carefully", next: "s4i", trust: -1, suspicion: 1 },
      { label: "Admit you might be wrong", next: "s4_recover", trust: 0, suspicion: 0 }
    ]
  },

  s4g_b: {
    title: "Scene 4 — The Question",
    time: "10:00 PM",
    narrator: "Jordan wraps her arms around herself.",
    speaker: "JORDAN",
    text: "I didn't want to ruin the night. Or the friendship. Maya lent it to me like it was nothing and I… I lost it. I felt so ashamed.",
    choices: [
      { label: "Help Jordan face it together", next: "s4f", trust: 2 }
    ]
  },

  // ── ENDINGS ─────────────────────────────────

  ending_healing: {
    title: "Ending — The Truth Heals",
    time: "12:15 AM",
    isEnding: true,
    endTitle: "The Locket Comes Home",
    endBody: "Maya cries. Jordan cries. You cry a little too. After a long silence, Maya says, 'I wish you'd just told me.' Jordan nods. The locket is found at school on Monday, exactly where Jordan said. Some secrets, it turns out, hurt less when they're finally spoken. The four of you fall asleep at 2am, closer than before."
  },

  ending_compassion: {
    title: "Ending — Quiet Loyalty",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "Some Secrets Are Kept",
    endBody: "You decide it's not your place. Priya handles it. The locket appears on Maya's pillow by midnight — no explanation given. Maya finds it, holds it tight, and doesn't ask questions. Some things have a way of resolving themselves. You never tell anyone what you found. But Priya catches your eye across the room and nods once."
  },

  ending_truth: {
    title: "Ending — Honesty Wins",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "No More Secrets",
    endBody: "The note — or the receipt — surfaces. There are tears, and a long awkward silence, and then a conversation that goes until 3am. By the end of it, everyone knows something they didn't before. The locket is returned. More importantly, so is trust. You wake up in the morning to pancakes and a group photo — all six of you, no one scratched out."
  },

  ending_exposed: {
    title: "Ending — The Fallout",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "What Secrets Do",
    endBody: "The accusation lands like a stone in still water. Priya leaves in tears. Maya doesn't look at anyone. The rest of the night passes in near silence. The locket turns up three days later at the lost-and-found — a total coincidence. In the group chat, nobody talks for two weeks. You learn something: being right and being kind are not always the same thing."
  },

  ending_caught: {
    title: "Ending — Caught",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "The Phone Doesn't Lie",
    endBody: "You find the sent text in Priya's phone history. She breaks down immediately. Turns out the locket was borrowed to photograph the picture inside — Maya's estranged sister had asked for it. Priya was the go-between. She'd been keeping the secret for months. Maya is devastated — not about the locket, but about being the last to know. The sleepover ends early. But the conversation it starts changes everything."
  },

  ending_bluff: {
    title: "Ending — Checkmate",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "The Bluff Pays Off",
    endBody: "Your phone buzzes immediately. 'Meet me in the hallway.' It's Priya. She tells you everything — the sister, the locket, the plan. She begs you not to say anything. You think for a long moment. Then you say: 'Tell Maya yourself. Tonight. Or I will.' She does. It is brutal and beautiful and honest. The locket comes back. So does something else — the truth, after a long time away."
  },

  ending_revelation: {
    title: "Ending — The Whole Truth",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "A Door Opens",
    endBody: "You tell Maya everything. About the polaroid. About the sister. About Priya's secret. Maya is silent for so long you think she might ask you to leave. Then she says, 'Can I see the photo?' She looks at it for a long time. 'I miss her.' The locket is the least important thing in the room now. Something older and deeper has finally been uncovered. The night ends with Maya sending one text — to her sister."
  },

  ending_priya_explains: {
    title: "Ending — Her Side of It",
    time: "12:00 AM",
    isEnding: true,
    endTitle: "Two Truths",
    endBody: "Priya explains through tears: she pawned the locket to pay for a bus ticket — to visit Maya's sister, who is sick and too proud to say so. She was going to get it back before anyone noticed. The room is stunned. Maya stares at Priya for a long time. Then she stands up, and hugs her. Some secrets exist to protect the people we love. The locket is redeemed the next morning. No one talks about it again. Everyone talks about everything else."
  }

};

// ─────────────────────────────────────────────
//  GAME STATE
// ─────────────────────────────────────────────

let state = {
  trust: 5,
  suspicion: 0,
  time: "9:00 PM",
  inventory: [],
  scene: "s1"
};

// ─────────────────────────────────────────────
//  DOM REFS
// ─────────────────────────────────────────────

const titleScreen   = document.getElementById("title-screen");
const gameScreen    = document.getElementById("game-screen");
const endScreen     = document.getElementById("end-screen");
const startBtn      = document.getElementById("start-btn");
const replayBtn     = document.getElementById("replay-btn");

const sceneTitleEl  = document.getElementById("scene-title");
const narratorEl    = document.getElementById("narrator");
const speakerEl     = document.getElementById("speaker");
const storyTextEl   = document.getElementById("story-text");
const storyBox      = document.getElementById("story-box");
const clueBox       = document.getElementById("clue-box");
const clueTextEl    = document.getElementById("clue-text");
const choicesEl     = document.getElementById("choices");
const inventoryEl   = document.getElementById("inventory");
const trustVal      = document.getElementById("trust-val");
const suspicionVal  = document.getElementById("suspicion-val");
const timeVal       = document.getElementById("time-val");
const endTitle      = document.getElementById("end-title");
const endBody       = document.getElementById("end-body");

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

startBtn.addEventListener("click", startGame);
replayBtn.addEventListener("click", resetGame);

function startGame() {
  titleScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderScene("s1");
}

function resetGame() {
  state = { trust: 5, suspicion: 0, time: "9:00 PM", inventory: [], scene: "s1" };
  endScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  titleScreen.classList.remove("hidden");
}

// ─────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────

function renderScene(id) {
  state.scene = id;
  const s = scenes[id];
  if (!s) { console.warn("Scene not found:", id); return; }

  // ENDING
  if (s.isEnding) {
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    endTitle.textContent = s.endTitle;
    endBody.textContent  = s.endBody;
    return;
  }

  // SCENE META
  sceneTitleEl.textContent = s.title    || "";
  narratorEl.textContent   = s.narrator || "";
  speakerEl.textContent    = s.speaker  ? `— ${s.speaker} —` : "";
  storyTextEl.textContent  = s.text     || "";

  // CLUE
  if (s.clue) {
    clueTextEl.textContent = s.clue;
    clueBox.classList.remove("hidden");
  } else {
    clueBox.classList.add("hidden");
  }

  // TIME
  if (s.time) state.time = s.time;

  // STATS
  trustVal.textContent      = clamp(state.trust, 0, 10);
  suspicionVal.textContent  = clamp(state.suspicion, 0, 10);
  timeVal.textContent       = state.time;

  // INVENTORY
  inventoryEl.innerHTML = state.inventory.length
    ? `<strong>Evidence:</strong> ${state.inventory.join(" · ")}`
    : "";

  // CHOICES
  choicesEl.innerHTML = "";
  (s.choices || []).forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn" + ((c.suspicion || 0) >= 2 ? " danger" : "");
    btn.textContent = c.label;
    btn.addEventListener("click", () => makeChoice(c));
    choicesEl.appendChild(btn);
  });

  // ANIMATE
  storyBox.classList.remove("fade-in");
  void storyBox.offsetWidth; // reflow trick
  storyBox.classList.add("fade-in");
}

// ─────────────────────────────────────────────
//  CHOICE HANDLER
// ─────────────────────────────────────────────

function makeChoice(c) {
  if (c.trust)      state.trust      = clamp(state.trust + c.trust, 0, 10);
  if (c.suspicion)  state.suspicion  = clamp(state.suspicion + c.suspicion, 0, 10);
  if (c.item && !state.inventory.includes(c.item)) {
    state.inventory.push(c.item);
  }
  renderScene(c.next);
}

// ─────────────────────────────────────────────
//  UTILITY
// ─────────────────────────────────────────────

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
