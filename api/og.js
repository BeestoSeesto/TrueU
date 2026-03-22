const profiles = {
  a: { name: "The Armor", tag: "Competence as protection", desc: "I protect myself by being the most capable person in the room. What's your program?" },
  h: { name: "The Helper", tag: "Being needed as safety", desc: "I protect myself by being needed. Sound familiar? What's yours?" },
  w: { name: "The Wall", tag: "Distance as safety", desc: "I protect myself by never fully arriving. Which one are you?" },
  p: { name: "The Performer", tag: "Perception as control", desc: "I protect myself by managing how I'm perceived. What's running in you?" }
};

module.exports = (req, res) => {
  const p = (req.query.p || '').toLowerCase();
  const profile = profiles[p];
  const title = profile ? `I got "${profile.name}" — ${profile.tag}` : 'TrueU — Know What\'s Running';
  const desc = profile ? profile.desc : 'You\'re not broken. You\'re running an old program. Find out which one in 5 minutes.';
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html><html><head>
    <title>${title}</title>
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="https://true-u.vercel.app?p=${p}&from=share">
    <meta property="og:type" content="website">
    <meta http-equiv="refresh" content="0;url=https://true-u.vercel.app?p=${p}&from=share">
    </head><body></body></html>`);
};
