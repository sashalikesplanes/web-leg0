import supabaseClient from "./db";

const data = [
  {
    "tags": ["react", "javascript"],
    "title": "How to Create a Website with Next.js & React",
    "url-title": "how-to-create-a-website-with-next-js-and-react",
    "date-timestamp": new Date('2020-04-20').toISOString(),
    "thumbnail-image-url": "https://assets.coderrocketfuel.com/coding-blog-react-thumbnail.png",
    "markdown-content": "# Blog Post Content",
    "seo-title-tag": "How to Create a Website with Next.js & React | Coding Blog",
    "seo-meta-description": "A complete guide on how to setup, configure, and build a website using the Next.js React framework."
  },
  {
    "tags": ["nodejs"],
    "title": "Create a REST API With NodeJS",
    "url-title": "create-a-rest-api-with-node-js",
    "date-timestamp": new Date('2020-05-20').toISOString(),
    "thumbnail-image-url": "https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png",
    "markdown-content": "# Blog Post Content",
    "seo-title-tag": "Create a REST API With NodeJS | Coding Blog",
    "seo-meta-description": "A guide on how to build a REST API using Node.js and Express."
  },
  {
    "tags": ["css"],
    "title": "How to Use the CSS calc() Function",
    "url-title": "how-to-use-the-css-calc-function",
    "date-timestamp": new Date('2020-06-20').toISOString(),
    "thumbnail-image-url": "https://assets.coderrocketfuel.com/coding-blog-css-thumbnail.png",
    "markdown-content": "# Blog Post Content",
    "seo-title-tag": "How to Use the CSS calc() Function | Coding Blog",
    "seo-meta-description": "Guide on how to use the CSS calc() function in CSS files."
  },
  {
    "tags": ["html"],
    "title": "How to Put Spaces Between Text in HTML",
    "url-title": "how-to-put-spaces-between-text-in-html",
    "date-timestamp": new Date('2021-04-20').toISOString(),
    "thumbnail-image-url": "https://assets.coderrocketfuel.com/coding-blog-html-thumbnail.png",
    "markdown-content": "# Blog Post Content",
    "seo-title-tag": "How to Put Spaces Between Text in HTML | Coding Blog",
    "seo-meta-description": "Tutorial on adding spacing to HTML text with the <Pre> tag, HTML whitespace characters, and CSS empty span width and margin styling."
  },
  {
    "tags": ["git"],
    "title": "Introduction to Git - Background, Installation, and Usage",
    "url-title": "introduction-to-git-version-control-system",
    "date-timestamp": new Date('2022-04-20').toISOString(),
    "thumbnail-image-url": "https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png",
    "markdown-content": "# Blog Post Content",
    "seo-title-tag": "Introduction to Git - Background, Installation, and Usage | Coding Blog",
    "seo-meta-description": "Introduction to Git version control software. Learn about the background and get a guide on installing and using Git."
  }
]

async function seedData() {
  const { data: supaData, error } = await supabaseClient.from('posts').insert(data);
  console.log(supaData, error);
}

seedData();
