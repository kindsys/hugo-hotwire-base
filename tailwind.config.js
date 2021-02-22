const typography = require('@tailwindcss/typography');

module.exports = {
  important: true, // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./hugo_stats.json', './layouts/**/*.html', './src/js/**/*.js'],
    extractors: [
      {
        extractor: (content) => {
          const els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ['json'],
      },
    ],
    mode: 'all',
  },
  plugins: [typography],
};
