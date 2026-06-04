const scenes = {

  start: {
    label: "9:00 PM in maya's living room",
    text: "Maya is freaking out. Her gold locket — the one with her grandma's photo — is gone. She left it on her dresser this morning. Everyone's here for the sleepover: you, Priya, Jordan, and Lily. One of them was alone in the house earlier.",
    choices: [
      { text: "ask who got here first", go: "who_first" },
      { text: "go search maya's room", go: "search_room" },
      { text: "watch everyone's faces", go: "watch_faces" }
    ]
  },

  who_first: {
    label: "9:15 PM",
    text: "Priya says 'I got here at like 4, Maya let me in then went to shower. I was downstairs alone for maybe 20 minutes.' She says it too fast. Jordan starts picking at her nail polish. Lily is looking at her phone.",
    choices: [
      { text: "ask priya what she was doing alone", go: "priya_alone" },
      { text: "ask jordan why she's being quiet", go: "jordan_quiet" },
      { text: "go search maya's room", go: "search_room" }
    ]
  },

  watch_faces: {
    label: "9:10 PM",
    text: "When Maya says 'locket' Priya's eyes go to Jordan. Just for a second. Jordan immediately looks at the floor. Lily seems genuinely confused. Something is going on between Priya and Jordan.",
    choices: [
      { text: "confront priya about the look", go: "priya_look" },
      { text: "get jordan alone", go: "jordan_alone" },
      { text: "search the house first", go: "search_room" }
    ]
  },

  search_room: {
    label: "9:30 PM in maya's bedroom",
    text: "Maya's jewelry box is open. But it's turned to face the WALL. Maya says she never does that — she's superstitious about mirrors. Weird. Behind the box you find a folded note on pink paper.",
    choices: [
      { text: "read the note out loud to everyone", go: "note_loud" },
      { text: "read it quietly and say nothing", go: "note_secret" },
      { text: "give it directly to maya", go: "note_maya" }
    ]
  },

  priya_alone: {
    label: "9:20 PM",
    text: "'I was just... on my phone.' She won't look at you. Then quietly: 'Look. I know where the locket is. But you have to let me handle it. Please. It's complicated.'",
    choices: [
      { text: "trust her and wait", go: "ending_trust" },
      { text: "tell maya right now", go: "ending_exposed" },
      { text: "demand she explain first", go: "priya_explains" }
    ]
  },

  jordan_quiet: {
    label: "9:25 PM in tha kitchen",
    text: "Jordan grabs your arm and pulls you to the kitchen. She whispers: 'I borrowed the locket last week for school photos. Maya said I could. But I lost it on the bus. I've been panicking all day. I think it's at the school lost and found.'",
    choices: [
      { text: "go tell maya together right now", go: "ending_healing" },
      { text: "ask why she didn't just SAY something", go: "jordan_why" },
      { text: "keep her secret and help her look", go: "ending_trust" }
    ]
  },

  priya_look: {
    label: "9:20 PM",
    text: "'What look? I wasn't— ugh. Fine.' Priya lowers her voice. 'Jordan borrowed the locket and lost it. She asked me not to say anything. I've been covering for her all day. I feel terrible.'",
    choices: [
      { text: "get all three of you to tell maya together", go: "ending_healing" },
      { text: "let priya handle it her way", go: "ending_trust" },
      { text: "go tell maya yourself", go: "ending_exposed" }
    ]
  },

  jordan_alone: {
    label: "9:25 PM in the hallway",
    text: "Jordan is already crying before you even say anything. She lost the locket — borrowed it for school photos, lost it on the bus. She's been too scared to say anything. She looks genuinely miserable.",
    choices: [
      { text: "hug her and go tell maya together", go: "ending_healing" },
      { text: "tell maya without jordan", go: "ending_exposed" }
    ]
  },

  note_loud: {
    label: "9:45 PM in maya's room, everyone watching",
    text: "You read it out loud: 'I borrowed it, I'll put it back by morning, please don't hate me — J'. Jordan bursts into tears. Maya stares at her. The room goes completely silent for like 10 whole seconds.",
    choices: [
      { text: "step back and let them talk", go: "ending_healing" },
      { text: "keep pushing for answers", go: "ending_exposed" }
    ]
  },

  note_secret: {
    label: "9:45 PM",
    text: "The note is from Jordan. She borrowed it for school photos and lost it. She was planning to secretly replace it. You put the note in your pocket. Nobody else saw. Now what.",
    choices: [
      { text: "help jordan tell maya yourself", go: "ending_healing" },
      { text: "give jordan until midnight to confess", go: "ending_trust" },
      { text: "tell maya without jordan", go: "ending_exposed" }
    ]
  },

  note_maya: {
    label: "9:45 PM",
    text: "Maya reads it alone. Her face crumples. She sits down on the bed. After a long pause she says 'I would've said yes. She just had to ask.'",
    choices: [
      { text: "go get jordan so they can talk", go: "ending_healing" }
    ]
  },

  priya_explains: {
    label: "9:30 PM",
    text: "'Jordan borrowed it and lost it on the bus. She's been covering it up all day, she was too scared to tell Maya. I promised I wouldn't say anything.' She looks exhausted. 'I hate keeping secrets.'",
    choices: [
      { text: "the three of you tell maya together", go: "ending_healing" },
      { text: "let priya handle it", go: "ending_trust" }
    ]
  },

  jordan_why: {
    label: "9:30 PM",
    text: "'Because Maya trusted me with it! And I lost it! She's gonna hate me.' She's spiraling. But staying quiet is obviously making everything worse.",
    choices: [
      { text: "tell her the truth is better than this", go: "ending_healing" },
      { text: "help her look before saying anything", go: "ending_trust" }
    ]
  },

  // ENDINGS

  ending_healing: {
    isEnding: true,
    title: "ending: the truth",
    body: "Jordan tells Maya everything. There's crying. Like a lot of crying. But Maya says 'I would've said yes if you just asked' and then they hug for an embarrassingly long time. The locket is at the school lost and found — they pick it up Monday. By midnight everyone is sharing secrets and eating chips and it's honestly the best sleepover ever. Some things are better after you say them out loud."
  },

  ending_trust: {
    isEnding: true,
    title: "ending: the quiet fix",
    body: "You stay out of it. Priya handles it somehow. The locket shows up on Maya's pillow around 11pm with no explanation. Maya hugs it and doesn't ask questions. The rest of the night is movies, snacks, staying up way too late. Nobody talks about the locket. But you and Priya catch eyes once and both kind of smile. Some things fix themselves."
  },

  ending_exposed: {
    isEnding: true,
    title: "ending: the fallout",
    body: "The truth comes out but not gently. Jordan cries and leaves early. Maya is upset — not just about the locket, but about being lied to all day. The rest of the sleepover is weird and quiet. The locket turns up at lost and found three days later. It takes two weeks before the group chat feels normal again. You were right. But sometimes being right isn't the same thing as being kind."
  }

};

function start() {
  document.getElementById("title-screen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  show("start");
}

function show(id) {
  const s = scenes[id];

  if (s.isEnding) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("ending").classList.remove("hidden");
    document.getElementById("end-title").textContent = s.title;
    document.getElementById("end-body").textContent = s.body;
    return;
  }

  document.getElementById("scene-label").textContent = s.label || "";
  document.getElementById("story").textContent = s.text;

  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  s.choices.forEach(ch => {
    const btn = document.createElement("button");
    btn.textContent = "> " + ch.text;
    btn.onclick = () => show(ch.go);
    choicesEl.appendChild(btn);
  });
}

function restart() {
  document.getElementById("ending").classList.add("hidden");
  document.getElementById("title-screen").classList.remove("hidden");
}
