const profiles = {
  a: { name: "The Armor", tag: "Competence as protection" },
  h: { name: "The Helper", tag: "Being needed as safety" },
  w: { name: "The Wall", tag: "Distance as safety" },
  p: { name: "The Performer", tag: "Perception as control" }
};

module.exports = (req, res) => {
  const p = (req.query.p || '').toLowerCase();
  const profile = profiles[p];
  const title = profile ? `I got "${profile.name}" on TrueU — ${profile.tag}` : 'TrueU — Know What\'s Running';
  const desc = profile ? `Find out your behavioral profile. Takes 5 minutes.` : 'You\'re not broken. You\'re running an old program. Find out which one.';
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html><html><head>
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="https://true-u.vercel.app?p=${p}&from=share">
    <meta http-equiv="refresh" content="0;url=https://true-u.vercel.app?p=${p}&from=share">
    </head><body></body></html>`);
};
