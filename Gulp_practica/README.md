# Practica de GULP

# Concat CSS

```js 
function minifyCSS() {
  return src(['app/styles/css1.css', 'app/styles/css2.css'])
    .pipe(concat('styles.css'))
    .pipe(dest('app/dest'));
}
```

# Optimizar CSS 

```js
function optimizeCSS() {
  return src('app/dest/styles.css')
    .pipe(cleanCss())
    .pipe(dest('app/dest/minifiedStyles.css'));
}
```

# Generar mapas de CSS

```js
function generateMaps() {
  return src('app/styles/*.css')
    .pipe(maps.init())
    .pipe(dest('app/styles/maps'));
}
```

# Optimizar imagenes

```js
function generateImageMin() {
  return src('app/apple-touch-icon.png')
    .pipe(imagemin())
    .pipe(dest('dest/images'));
}
```

# Optimizar archivos javascript

```js
function minifyJS() {
  return src('app/scripts/test.js')
    .pipe($.uglify({ compress: { drop_console: true } }))
    .pipe(dest('dest/jss'));
}
```
