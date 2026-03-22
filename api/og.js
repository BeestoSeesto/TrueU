const profiles = {
  a: { name: "The Armor", tag: "Competence as protection", desc: "I protect myself by being the most capable person in the room. What's your program?", img: "armor" },
  h: { name: "The Helper", tag: "Being needed as safety", desc: "I protect myself by being needed. Sound familiar? What's yours?", img: "helper" },
  w: { name: "The Wall", tag: "Distance as safety", desc: "I protect myself by never fully arriving. Which one are you?", img: "wall" },
  p: { name: "The Performer", tag: "Perception as control", desc: "I protect myself by managing how I'm perceived. What's running in you?", img: "performer" }
};

module.exports = (req, res) => {
  const p = (req.query.p || '').toLowerCase();
  const profile = profiles[p];
  const title = profile ? `I got "${profile.name}" on TrueU — ${profile.tag}` : 'TrueU — Know What\'s Running';
  const desc = profile ? profile.desc : 'You\'re not broken. You\'re running an old program. Find out which one in 5 minutes.';
  const img = profile ? profile.img : 'armor';
  const image = `https://raw.githubusercontent.com/BeestoSeesto/TrueU/main/images/${img}.png`;
  const dest = `https://true-u.vercel.app/?p=${p}&from=share`;
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html><html><head>
    <title>${title}</title>
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="${dest}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${image}">
    </head>
    <body>
    <script>window.location.href='${dest}';</script>
    <a href="${dest}">Click here to see your result</a>
    </body></html>`);
};
