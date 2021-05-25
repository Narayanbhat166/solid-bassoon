const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = '# Hello \n (https://leetcode.com)'

const links = markdownLinkExtractor(markdown);
console.log(links);