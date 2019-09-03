import remark from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

export const markdown = remark()
    .use(html)
    .use(highlight);
