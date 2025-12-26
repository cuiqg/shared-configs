import gulp from 'gulp'
import rename from 'gulp-rename'

const jsons = () => {
  return gulp
    .src('src/biome/index.json')
    .pipe(rename('biome.json'))
    .pipe(gulp.dest('dist'))
}

const watch = () => {
  gulp.watch('src/biome/**/*.json', jsons);
};

export const dev = gulp.series( gulp.parallel(jsons), watch)
export const build = gulp.series(gulp.parallel(jsons))

export default dev
