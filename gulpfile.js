const babel = require("gulp-babel");
const browserSync = require("browser-sync");
const csso = require("gulp-csso");
const del = require("del");
const gulp = require("gulp");
const gutil = require("gulp-util");
const gulpif = require("gulp-if");
const imagemin = require("gulp-imagemin");
const prefix = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const reload = browserSync.reload;
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack");

// Configuration
const config = {
  dev: gutil.env.dev,
  styles: {
    browsers: "> 1%",
    vendor: {
      src: "src/vendor/vendor.scss",
      dest: "dist",
      watch: "src/vendor/*.scss",
    },
    main: {
      src: "src/main.scss",
      dest: "dist",
      watch: "src/**/*.scss",
    },
  },
  scripts: {
    vendor: {
      src: "./src/vendor/vendor.js",
      dest: "dist",
      watch: "src/vendor/**/*",
    },
    main: {
      src: "./src/main.js",
      dest: "dist",
      watch: "src/**/*",
    },
  },
  fonts: {
    src: "src/fonts/**/*",
    dest: "dist/fonts",
    watch: "src/fonts/**/*",
  },
  images: {
    src: ["src/images/**/*", "src/favicon.ico"],
    dest: "dist/images",
    watch: "src/images/**/*",
  },
  dest: "dist",
};


// Clean
gulp.task("clean", del.bind(null, [config.dest]));


// Styles
gulp.task("styles:vendor", () => {
  gulp.src(config.styles.vendor.src)
  .pipe(gulpif(config.dev, sourcemaps.init()))
  .pipe(sass({
    outputStyle: "compressed",
    includePaths: "./node_modules",
  }).on("error", sass.logError))
  .pipe(prefix(config.styles.browsers))
  .pipe(gulpif(!config.dev, csso()))
  .pipe(gulpif(config.dev, sourcemaps.write()))
  .pipe(rename("vendor.min.css"))
  .pipe(gulp.dest(config.styles.vendor.dest))
  .pipe(gulpif(config.dev, reload({ stream: true })));
});

gulp.task("styles:main", () => {
  gulp.src(config.styles.main.src)
  .pipe(gulpif(config.dev, sourcemaps.init()))
  .pipe(sass({
    outputStyle: "compressed",
    includePaths: "./node_modules",
  }).on("error", sass.logError))
  .pipe(prefix(config.styles.browsers))
  .pipe(gulpif(!config.dev, csso()))
  .pipe(gulpif(config.dev, sourcemaps.write()))
  .pipe(rename("main.min.css"))
  .pipe(gulp.dest(config.styles.main.dest))
  .pipe(gulpif(config.dev, reload({ stream: true })));
});

gulp.task("styles", ["styles:vendor", "styles:main"]);


// Scripts
const webpackConfig = require("./webpack.config")(config);

gulp.task("scripts", (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      gutil.log(gutil.colors.red(err()));
    }
    const result = stats.toJson();
    if (result.errors.length) {
      result.errors.forEach((error) => {
        gutil.log(gutil.colors.red(error));
      });
    }
    done();
  });
});


// Fonts
gulp.task("fonts", () => {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});


// Images
gulp.task("images", ["favicon"], () => {
  return gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));
});

gulp.task("favicon", () => {
  return gulp.src("src/favicon.ico")
  .pipe(gulp.dest(config.dest));
});


// Server
gulp.task("serve", () => {

  browserSync({
    server: {
      baseDir: config.dest,
    },
    notify: false,
  });

  gulp.task("styles:watch", ["styles"], reload);
  gulp.watch([config.styles.vendor.watch, config.styles.main.watch], ["styles:watch"]);

  gulp.task("scripts:watch", ["scripts"], reload);
  gulp.watch([config.scripts.vendor.watch, config.scripts.main.watch], ["scripts:watch"]);

  gulp.task("images:watch", ["images"], reload);
  gulp.watch(config.images.watch, ["images:watch"]);

});


// Default build task
gulp.task("default", ["clean"], () => {

  // define build tasks
  const tasks = [
    "styles",
    //"scripts",
    "fonts",
    "images",
  ];

  // run build
  runSequence(tasks, () => {
    if (config.dev) {
      gulp.start("serve");
    }
  });

});