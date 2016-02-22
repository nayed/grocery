import gulp from 'gulp'
import browserSync from 'browser-sync'
import nodemon from 'gulp-nodemon'
import jsx from 'gulp-jsx'

gulp.task('build', () => {
    return gulp.src('./app/*.jsx')
        .pipe(jsx({
            factory: 'React.createClass'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('serve', ['build'] , () => {
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