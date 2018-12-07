//创建请求

var gulp = require('gulp');
var uglify = require('gulp-uglify');
const rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');



//创建任务
gulp.task('uglify',function(){
  gulp.src('static/js/*.js')
  .pipe(uglify())
})

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(1+7);
});
gulp.task('minihtml', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩html");
  });
  gulp.task('minicss', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩css");
  });
  gulp.task('miniimg', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩img");
  });
    
  gulp.task('mini', ['minihtml','minicss','miniimg'],function() {
    // 将你的默认的任务代码放在这
    console.log("压缩成功了");
  });