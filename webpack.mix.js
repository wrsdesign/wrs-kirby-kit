/**
 * Instalation
 * 1. Init package.json
 *    npm init -y
 *
 * 2. Install dependencies
 *    npm add --save-dev cross-env laravel-mix svg-spritemap-webpack-plugin
 *
 * 3. Add npm scripts to package.json
 *
      "dev": "npm run development",
      "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
      "watch": "npm run development -- --watch",
      "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
      "prod": "npm run production",
      "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
 *
 * 4. Edit conf object
 *
 * 5. Add additional npm dependencies
 *    npm add tailwindcss alpinejs @ryangjchandler/spruce gsap swup @swup/preload-plugin scroll-lock lazysizes smoothscroll-polyfill unfetch
 *
 */

const conf = {
  sprite: {
    enabled: false,
    icons: "src/icons/*.svg",
    name: "sprite.svg",
  },
  scripts: "src/js/index.js", // String or Array
  styles: "src/scss/index.scss", // String or Array
  static: "src/static", // Static files images, icons etc.
  public: "assets",
  watch: [
    "site/templates/**/*.php",
    "site/snippets/**/*.php",
    "assets/**/*.{css,js}",
  ],
  aliases: {
    "@utils": "src/js/utils",
    "@components": "src/js/components",
    "@vendors": "src/js/vendors",
  },
};

/**
 * Global imports
 * Mix (https://laravel-mix.com/docs/5.0/installation)
 * Path (https://nodejs.org/api/path.html)
 */
const mix = require("laravel-mix");
const path = require("path");

const inProduction = mix.inProduction();

/**
 * Returns a new object with the values at each key mapped using callback function
 * @param {object} object Object for reduce
 * @param {function} fn Callback function for every object's key
 */
function objectMap(object, fn) {
  return Object.keys(object).reduce((result, key) => {
    result[key] = fn(object[key]);
    return result;
  }, {});
}

/**
 * Create js folders aliases and remove ../../../ hell
 * https://webpack.js.org/configuration/resolve/
 */
if (conf.aliases) {
  mix.webpackConfig({
    resolve: {
      alias: objectMap(conf.aliases, (value) => path.resolve(__dirname, value)),
    },
  });
}

/**
 * Build .js files
 * https://laravel-mix.com/docs/5.0/mixjs
 */
if (conf.scripts) {
  if (conf.scripts instanceof Array) {
    conf.scripts.forEach((file) => {
      mix.js(file, path.resolve(__dirname, conf.public)).extract();
    });
  } else {
    mix
      .js(
        path.resolve(__dirname, conf.scripts),
        path.resolve(__dirname, conf.public)
      )
      .extract();
  }
}

/**
 * Build .scss files
 * https://laravel-mix.com/docs/5.0/css-preprocessors
 */
if (conf.styles) {
  if (conf.styles instanceof Array) {
    conf.styles.concat(conf.styles).forEach((file) => {
      mix.sass(file, path.resolve(__dirname, conf.public), {
        additionalData: `$debug: ${!inProduction};`,
        sassOptions: { outputStyle: "expanded" },
      });
    });
  } else {
    mix.sass(
      path.resolve(__dirname, conf.styles),
      path.resolve(__dirname, conf.public),
      {
        additionalData: `$debug: ${!inProduction};`,
        sassOptions: { outputStyle: "expanded" },
      }
    );
  }
}

if (conf.static) {
  mix.copyDirectory(conf.static, path.join(conf.public, "static"));
}

/**
 * Browsersync
 * Mix (https://laravel-mix.com/docs/5.0/browsersync)
 * BrowserSync (https://browsersync.io/docs/options)
 */
const projectName = path.basename(path.resolve(__dirname)).concat(".test");
mix.browserSync({
  ghostMode: false,
  notify: false,
  files: conf.watch || [],
  proxy: projectName,
});

/**
 * Generate svg-sprite from conf.icons folder
 */
if (conf.sprite.sprite) {
  const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

  mix.webpackConfig({
    plugins: [
      new SVGSpritemapPlugin(conf.sprite.icons, {
        styles: false,
        output: {
          filename: conf.sprite.name || "spritemap.svg",
          chunk: { keep: true },
        },
        sprite: {
          prefix: false,
          generate: {
            title: false,
          },
        },
      }),
    ],
  });
}

/**
 * Misc
 */
mix
  .disableNotifications()
  .setPublicPath(conf.public || "")
  .options({
    processCssUrls: false,
    postCss: [
      require("tailwindcss")(path.resolve(__dirname, "tailwind.config.js")),
    ],
  });

if (inProduction) {
  mix.version();
}
