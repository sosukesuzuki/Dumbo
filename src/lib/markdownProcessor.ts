import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

export default remark()
  .use(html)
  .use(highlight);
