import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import clean from "gulp-clean";
import bs from "browser-sync";

const path = {
  root: "./",
  build: {
    self: "./build/",
    js: "./build/js",
    img: "./build/img",
    fonts: "./build/fonts",
    css: "./build/css",
  },
  js: "./src/js/*.js",
  scss: "./src/scss/*.scss",
  img: "./src/assets/img/**/*",
  fonts: "./src/assets/fonts/**/*",
};

const sass = gulpSass(dartSass);
const browserSync = bs.create();

const jsTask = () => gulp.src(path.js).pipe(gulp.dest(path.build.js));

const imgTask = () => gulp.src(path.img).pipe(gulp.dest(path.build.img));
const fontsTask = () => gulp.src(path.fonts).pipe(gulp.dest(path.build.fonts));

const assetsTask = () => gulp.parallel(imgTask, fontsTask);

const scssTask = () =>
  gulp
    .src(path.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(path.build.css));

const cleanBuild = () =>
  gulp.src(path.build.self, { allowEmpty: true }).pipe(clean());

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: path.root,
    },
    files: [
      path.build.html,
      path.build.css,
      path.build.js,
      {
        match: path.build.img,
        fn() {
          this.reload();
        },
      },
    ],
  });

  callback();
};

gulp.task(
  "default",
  gulp.series(cleanBuild, assetsTask, jsTask, scssTask, server)
);
