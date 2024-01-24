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
  # My GitHub Profile

  ## Recent Articles
  ${recentArticles.map((article) => `- [${article.title}](${article.link})`).join('\n')}
  `;

  // Write to README.md
  fs.writeFileSync('README.md', readmeContent);
}

fetchRecentArticles();
