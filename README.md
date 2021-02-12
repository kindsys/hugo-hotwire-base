# hugo-hotwire-base

This Hugo project contains Hotwire Turbo, Stimulus, as well as, Tailwind CSS.

Rename the theme to match folder to match your project and update the config.toml file.

SCSS/CSS files that are processed through the Hugo pipes asset pipeline live in the `./themes/*/assets/css directory`.

JS files are bundled and transpiled and polyfilled using Webpack.  The source files live in the `./src` directory. 
Webpack generates a `./data/webpack.json` file that is used to set the file name on the script tag's `src` attribute.

Live reload in dev is done by Hugo.

Install dependencies
```bash
yarn install
```

Development
To start the development server, run the following command and open a browser to http://localhost:1313
```bash
yarn start
```

Note that Hugo Pipes is used instead of Webpack development server.

To start a preview development server (`hugo server --buildDrafts --buildFuture`), use
```bash
yarn preview
```

To build a static version of the website to the `public` folder, run
```bash
yarn build
```

To build a static preview version of posts or articles not yet published, run
```bash
yarn build:preview
```
