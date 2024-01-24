const fs = require('fs');
const fetch = require('node-fetch');
const Parser = require('rss-parser');

async function fetchRecentArticles() {
  // Fetch your recent articles from the RSS feed
  const response = await fetch('https://cliffordmapesa.hashnode.dev/rss.xml');
  const xml = await response.text();

  // Parse the XML content
  const parser = new Parser();
  const feed = await parser.parseString(xml);

  // Get the recent articles
  const recentArticles = feed.items.slice(0, 5);

  // Update README content
  const readmeContent = `

  <h1 style="font-family:script;" align="center"> Hi there 👋🏿  </h1>

  I'm Clifford Mapesa, I am a creative, detail-oriented software engineer with a deep interest in emerging technologies with a proven track record of creating and implementing successful front and back-end web applications. Looking to bring my skills to a tech company with a global reach. I'm passionate about building great experiences using software.

  <p align="left"> <img src="https://komarev.com/ghpvc/?username=droffilc1&label=Profile%20views&color=0e75b6&style=flat" alt="droffilc1" /> </p>

  <p align="left"> <a href="https://twitter.com/droffilcasepam1" target="blank"><img src="https://img.shields.io/twitter/follow/droffilcasepam1?logo=twitter&style=for-the-badge" alt="droffilcasepam1" /></a> </p>


  <br/>


  ## My Skill Set
  <table><tr><td valign="top" width="33%">



  ### Frontend
  <div align="center">
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="25" />
  </div>

  </td><td valign="top" width="33%">



  ### Backend
  <div align="center">

  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="25" />
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="25" />

  </div>

  </td><td valign="top" width="33%">


  ### DevOps
  <div align="center">
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" alt="AWS" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="25" />
    <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="25" />
  </div>

  </td></tr></table>

  <br/>

  <h1 align="center">Connect</h1>

  <p align="center">
    <a href="https://cliffordmapesa.hashnode.dev/" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=BLOG&color=23555f&style=plastic&logo=hashnode&logo-color=white"/>
    </a>
    <a href="https://www.linkedin.com/in/clifford-mapesa-a98601216/" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=LINKED-IN&color=cdf998&style=plastic&logo=linkedin&logo-color=white"/>
    </a>
    <a href="https://twitter.com/droffilcasepam1" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
    </a>
  </p>

  <p><img width="50%" src="https://github-readme-stats.vercel.app/api?username=droffilc1&show_icons=true&locale=en&title_color=a855f7&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true" alt="droffilc1" /></p>

  <a href="https://github.com/droffilc1" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=droffilc1&langs_count=10&title_color=a855f7&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>


  ## Recent Articles
  ${recentArticles.map((article) => `- [${article.title}](${article.link})`).join('\n')}
  `;

  // Write to README.md
  fs.writeFileSync('README.md', readmeContent);
}

fetchRecentArticles();
