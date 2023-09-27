const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Descrição das funções abaixo: 1. A função `styles()` lê todos os arquivos `.scss` na pasta `./src/styles/`. 2. Em seguida, ela compila os arquivos `.scss` para CSS usando o plugin `sass`. O parâmetro `{ outputStyle: 'compressed' }` indica que o CSS resultante deve ser minificado. 3. Por fim, a função `styles()` escreve o CSS minificado na pasta `./dist/css/`.

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

//A função `exports.default = styles;` indica que a função `styles()` é a tarefa padrão do Gulp. Portanto, quando você executa o comando `gulp` no terminal, a função `styles()` será executada. A função `exports.watch = function() { ... }` define uma tarefa adicional chamada `watch`. Essa tarefa monitora a pasta `./src/styles/` e executa a tarefa `styles()` sempre que um arquivo `.scss` é modificado. Isso permite que você veja as alterações no CSS resultante instantaneamente sem precisar executar o comando `gulp` manualmente. O `gulp.parallel(styles)` é uma função do Gulp que permite executar várias tarefas em paralelo. Neste caso, a tarefa `styles` é executada em paralelo com a tarefa `watch`. Isso significa que a tarefa `styles` será executada sempre que um arquivo `.scss` é modificado, mesmo que a tarefa `watch` esteja em execução.

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
