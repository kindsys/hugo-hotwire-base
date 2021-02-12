# hugo-hotwire-base

This Hugo (https://gohugo.io/) template project contains Hotwire Turbo (https://hotwire.dev/), Stimulus (https://stimulus.hotwire.dev/), as well as, Tailwind CSS (https://tailwindcss.com/).

### Asset Processing and JS Transpilation
SCSS/CSS files are processed through the Hugo Pipes (https://gohugo.io/hugo-pipes/) asset pipeline live in the `./themes/*/assets/css` directory.

JS files are bundled and transpiled and polyfilled using Webpack and saved to the `./static/js` directory. Hugo copies the contents of `./static/js` as is when building the site. The JS source files live in the `./src` directory. As part of the build, Webpack generates a `./data/webpack.json` file that is used to set the file name on the script tag's `src` attribute.

Live reload in dev server handled by Hugo; webpack-dev-server is not used.

## Quickstart
1. Install Hugo. See https://gohugo.io/getting-started/installing/
MacOS/Linux (via Homebrew)
```
brew install hugo
```

Windows with Chocolatey
```
choco install hugo -confirm
```
2. Install Node LTS 12+ (https://nodejs.org/en/download/)
3. Install yarn
```
npm install --global yarn
```
4. Install NPM dependencies
```bash
yarn install
```
5. Rename the `./theme/rename-this-theme` to match folder to match your project and update the `./config.toml` file.

## Development Server
To start the development server to publish current and draft pages, run the following command and open a browser to http://localhost:1313
```bash
yarn start
```

To start a preview development server to publish future pages (`hugo server --buildDrafts --buildFuture`), use
```bash
yarn preview
```

## Production Build
To build a static version with only current pages (no drafts, no future pages) of the website to the `public` folder, run
```bash
yarn build
```

To build a static preview version of posts or articles not yet published, run
```bash
yarn build:preview
```
