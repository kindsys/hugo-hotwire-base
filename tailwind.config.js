module.exports = {
  important: true, // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./hugo_stats.json', './layouts/**/*.html'],
    extractors: [
      {
        extractor: content => {
          let els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ['json']
      }
    ],
    mode: 'all'
  },
  plugins: []
};
