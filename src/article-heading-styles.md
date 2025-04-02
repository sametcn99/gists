# Article Styles

## Overview

This CSS snippet provides a comprehensive styling guide for article content in web applications. It defines consistent typography and layout rules for various HTML elements within articles. The styles ensure proper hierarchy through heading sizes, readable paragraph formats, and clear styling for links, lists, and blockquotes. These styles can be applied to any content with the `.article` class wrapper to maintain a professional and consistent reading experience across your website or application.

```css
/* Heading Styles for article */
.article h1 {
  font-size: 2.25rem;
  font-weight: bold;
}

.article h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.article h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

/* Paragraph Styles for article */
.article p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Emphasis for article */
.article em {
  font-style: italic;
}

/* Bold Text for article */
.article strong {
  font-weight: bold;
}

/* Link Styles for article */
.article a {
  text-decoration: none;
}

/* Visited Links for article */
.article a:visited {
}

/* Hovering Over Links for article */
.article a:hover {
  text-decoration: underline;
}

/* Lists for article */
.article ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.article ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
}

.article li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Block Quotes for article */
.article blockquote {
  border-left: 0.25rem solid #333;
  margin: 0;
  padding: 1rem 2rem;
}
```
