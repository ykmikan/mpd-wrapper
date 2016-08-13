import gulp from 'gulp'
import g from 'gulp-load-plugins'
import notifier from 'node-notifier'
import config from '../config'

let $ = g({ lazey: false })
let errorNotification = error => {
  notifier.notify({
    message: error.message,
    title: error.plugin,
    sound: 'Glass'
  })
}

gulp.task('lint', () => {
  return gulp.src([`${config.src}/**`])
    .pipe($.eslint(config.lint.path))
    .pipe($.plumber({ errorHandler: errorNotification }))
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError())
})