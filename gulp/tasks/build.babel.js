import gulp from 'gulp'
import g from 'gulp-load-plugins'
import notifier from 'node-notifier'
import config from '../config'
import runSequence from 'run-sequence'

let $ = g({ lazey: false })
let errorNotification = error => {
  notifier.notify({
    message: error.message,
    title: error.plugin,
    sound: 'Glass'
  })
}

gulp.task('build', ['lint'], () => gulp.src(`${config.src}/**`)
  .pipe($.plumber({ errorHandler: errorNotification }))
  .pipe($.babel())
  .pipe(gulp.dest(config.dest))
)
