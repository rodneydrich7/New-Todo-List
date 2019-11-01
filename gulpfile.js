const gulp                    = require('gulp');
const browserSync             = require('browser-sync');
const sass                    = require('gulp-sass');
const cssnano                 = require('gulp-cssnano');
const rename                  = require('gulp-rename');
const clean                  = require('gulp-clean');
// const del                     = require('del');
const runSequence             = require('run-sequence');

// Project directories and destinations.
const sassInput                       = './assets/scss/**/*.scss';
const mainSassFile                    = './assets/scss/styles.scss';
const sassOutput                      = './assets/css';
const publicDist                      = './dist';

let buildActions = {};

buildActions.hashedCodeGenerator = hashedVal => {
    const getTimeNow = Date.parse(new Date());
    const randNum = Math.random().toString();
    const slicedNum = randNum.slice(3,9);

    return hashedVal + '_' + getTimeNow + slicedNum;
};

gulp.task('run_project', () => {
    browserSync({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('sass', () => {
    return gulp.src(sassInput)
        .pipe(sass())
        .pipe(gulp.dest(sassOutput))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minifystyles', () => {
    let getHashedValue = buildActions.hashedCodeGenerator('css');

    return gulp.src(mainSassFile)
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix: '_' + getHashedValue + '.min'}))
        .pipe(gulp.dest(publicDist + '/css'));
});

gulp.task('watch', () => {
    gulp.watch(sassInput, ['sass']);
    gulp.watch('./index.html', browserSync.reload);
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
    gulp.watch('./assets/js/**/*.js', browserSync.reload);
});

gulp.task('clean', () => {
    return gulp.src(publicDist)
        .pipe(clean({force: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', callback => {
    runSequence(['sass', 'watch', 'run_project'],
        callback
    )
});

// gulp.task('task1', gulp.series('sass', done => {
//     done();
// }));
// gulp.task('task2', gulp.series('watch', done => {
//     done();
// }));
// gulp.task('task3', gulp.series('run_project', done => {
//     done();
// }));
//
// gulp.task('main', gulp.series('task1', 'task2', 'task3', done => {
//     done();
// }));
