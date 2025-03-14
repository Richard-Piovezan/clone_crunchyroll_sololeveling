const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function styles() {
    return gulp
        .src("./src/styles/style.scss")
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(gulp.dest("./dist/styles"));
}

function images() {
    return gulp
        .src("./src/images/**/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

function scripts() {
    return gulp
        .src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts))
}