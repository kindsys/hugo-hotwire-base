# hugo-hotwire-base

This Hugo (https://gohugo.io/) template project contains Hotwire Turbo (https://hotwire.dev/), Stimulus (https://stimulus.hotwire.dev/), as well as, Tailwind CSS (https://tailwindcss.com/).

### Asset Processing and JS Transpilation
SCSS/CSS files that are processed through the Hugo Pipes (https://gohugo.io/hugo-pipes/) asset pipeline live in the `./themes/*/assets/css` directory.

JS files are bundled and transpiled and polyfilled using Webpack.  The source files live in the `./src` directory. 
Webpack generates a `./data/webpack.json` file that is used to set the file name on the script tag's `src` attribute.

Live reload in dev server handled by Hugo; webpack-dev-server is not used.

## Quickstart
Rename the theme to match folder to match your project and update the config.toml file.

Install dependencies
```bash
yarn install
```

## Development Server
Development
To start the development server, run the following command and open a browser to http://localhost:1313
```bash
yarn start
```

To start a preview development server (`hugo server --buildDrafts --buildFuture`), use
```bash
yarn preview
```

## Production Build
To build a static version of the website to the `public` folder, run
```bash
yarn build
```

To build a static preview version of posts or articles not yet published, run
```bash
yarn build:preview
```
