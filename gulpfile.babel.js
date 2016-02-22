import gulp from 'gulp'
import browserSync from 'browser-sync'
import nodemon from 'gulp-nodemon'
import babel from 'gulp-babel'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import concat from 'gulp-concat'

gulp.task('build', () => {
    return gulp.src('app/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-react-jsx']
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('concat', ['build'], () => {
    return gulp.src('./dist/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('browserify', ['concat'], () => {
    return browserify('./dist/all.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'))
})

gulp.task('serve', ['browserify'] , () => {
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001
    })
})

gulp.task('nodemon', ['serve'], () => {
    return nodemon({
        script: 'server/main.js',
        ext: 'js',
        ignore: ['./node_modules/**'],
        exec: 'babel-node'
    })
    .on('restart', () => {
        console.log("Eh yo I'm restarting")
    })
})

gulp.task('default', ['nodemon'])