const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// console.log(autoprefixer().info()); -- This contains information about browsers supported

let source = 'mission1';

gulp.task('sass', function() {
  return gulp.src([source + '/scss/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(source + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src([source + '/*.js', 'node_modules/jquery-slim/dist/jquery.slim.min.js'])
    .pipe(gulp.dest(source + '/js'))
    .pipe(browserSync.stream());
});

/* gulp.task('assets', function() {
  return gulp.src(['src/img/*.+(png|jpg|gif|svg)'])
    .pipe(gulp.dest('src/assets'));
}); */



gulp.task('mission1', gulp.series('sass', function() {
  browserSync.init({
    server: 'mission1',
    port: 5000
  });

  gulp.watch([source + '/scss/*.scss'], gulp.series('sass'));
  gulp.watch(source + '/*.js', gulp.series('js'));
  gulp.watch(source + '/*.html').on('change', browserSync.reload);
}));

gulp.task('mission2', gulp.series('sass', function() {
  source = 'mission2';
  browserSync.init({
    server: source,
    port: 5000
  });

  gulp.watch([source + '/scss/*.scss'], gulp.series('sass'));
  gulp.watch(source + '/*.js', gulp.series('js'));
  gulp.watch(source + '/*.html').on('change', browserSync.reload);
}));

gulp.task('mission3', gulp.series('sass', function() {
  source = 'mission3';
  browserSync.init({
    server: source,
    port: 5000
  });

  gulp.watch([source + '/scss/*.scss'], gulp.series('sass'));
  gulp.watch(source + '/*.js', gulp.series('js'));
  gulp.watch(source + '/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(/* 'assets',  */'js', 'mission1'));



/* function serveTask(taskname) {
  source = taskname;
  console.log(taskname);
  browserSync.init({
    server: taskname,
    port: 5000
  });

  gulp.watch([source + '/scss/*.scss'], gulp.series('sass'));
  gulp.watch(source + '/*.js', gulp.series('js'));
  gulp.watch(source + '/*.html').on('change', browserSync.reload);
  console.log(taskname, 5);
}

console.log('tasks');

gulp.task('mission1', gulp.series('sass', serveTask('mission1')));
console.log('tasks2');
gulp.task('mission2', gulp.series('sass', serveTask('mission2')));
gulp.task('mission3', gulp.series('sass', serveTask('mission3')));
console.log('tasks3'); */
