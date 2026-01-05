# Guía para Escribir Nuevos Posts del Blog

Esta guía te explica cómo agregar nuevos posts al blog de IAFCJ App.

## Estructura del Blog

El blog está implementado en el archivo `index.html` y requiere hacer cambios en 3 lugares:

1. **Lista de posts** (línea ~841): Agregar la entrada en la página principal del blog
2. **Contenido del post** (después de línea ~1341): Crear la página completa del post
3. **JavaScript** (línea ~2305 y ~2344): Agregar las rutas en el código JavaScript

## Pasos para Agregar un Nuevo Post

### Paso 1: Preparar la Información del Post

Antes de empezar, necesitas:
- **Título**: El título del post
- **Slug**: Una versión URL-friendly del título (ej: "mi-nuevo-post")
- **Fecha**: Fecha de publicación (formato: "DD de mes, YYYY")
- **Categoría**: Una de estas opciones:
  - `Lanzamiento` (azul)
  - `Actualización` (verde)
  - `Desarrollo` (morado)
  - `Mejoras` (naranja)
  - O crea una nueva categoría
- **Resumen**: Una descripción corta para la lista del blog
- **Contenido**: El contenido completo del post

### Paso 2: Agregar la Entrada en la Lista del Blog

1. Abre `index.html`
2. Busca la sección `<!-- Página: Blog -->` (alrededor de la línea 825)
3. Dentro del `<div class="space-y-8">`, agrega tu nuevo post **al principio** (para que aparezca primero)

**Template para la entrada en la lista:**

```html
<!-- Post X -->
<article class="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
  <div class="flex items-center space-x-2 mb-4">
    <span class="text-sm text-gray-500">[FECHA]</span>
    <span class="text-gray-300">•</span>
    <span class="text-sm text-[COLOR]-600 font-medium">[CATEGORÍA]</span>
  </div>
  <h2 class="text-2xl font-bold mb-3 text-gray-900">
    <a href="/blog/[SLUG]" onclick="showBlogPost(event, '[SLUG]')" class="hover:text-blue-600 transition-colors">
      [TÍTULO]
    </a>
  </h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    [RESUMEN]
  </p>
  <a
    href="/blog/[SLUG]"
    onclick="showBlogPost(event, '[SLUG]')"
    class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
  >
    Leer más →
  </a>
</article>
```

**Colores disponibles para categorías:**
- `text-blue-600` - Lanzamiento
- `text-green-600` - Actualización
- `text-purple-600` - Desarrollo
- `text-orange-600` - Mejoras

### Paso 3: Crear la Página Completa del Post

1. Busca el último post completo (alrededor de la línea 1341, busca `blog-post-mejoras-plataforma`)
2. Después del cierre de ese div (`</div>`), agrega tu nuevo post

**Template para el post completo:**

```html
<!-- Post: [TÍTULO] -->
<div id="blog-post-[SLUG]" class="relative z-10 pt-20" style="display: none;">
  <div class="max-w-4xl mx-auto px-6 py-12 md:py-16">
    <article>
      <a href="/blog" onclick="showBlog(event)" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium">
        ← Volver al blog
      </a>
      
      <div class="flex items-center space-x-2 mb-6">
        <span class="text-sm text-gray-500">[FECHA]</span>
        <span class="text-gray-300">•</span>
        <span class="text-sm text-[COLOR]-600 font-medium bg-[COLOR]-50 px-3 py-1 rounded-full">[CATEGORÍA]</span>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
        [TÍTULO]
      </h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          [INTRODUCCIÓN]
        </p>

        <section class="mb-10">
          <h2 class="text-3xl font-semibold mb-6 text-gray-900">[TÍTULO DE SECCIÓN]</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            [CONTENIDO]
          </p>
        </section>

        <!-- Agrega más secciones según necesites -->
      </div>
    </article>
  </div>
</div>
```

**Elementos útiles para el contenido:**

- **Cajas destacadas con colores:**
```html
<div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
  <h3 class="text-xl font-semibold mb-3 text-gray-900">🔍 Título</h3>
  <p class="text-gray-700 leading-relaxed">
    Contenido
  </p>
</div>
```

- **Listas:**
```html
<ul class="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- **Colores disponibles para cajas:**
  - `bg-blue-50 border-blue-100` - Azul
  - `bg-green-50 border-green-100` - Verde
  - `bg-purple-50 border-purple-100` - Morado
  - `bg-orange-50 border-orange-100` - Naranja
  - `bg-gray-50` - Gris

### Paso 4: Actualizar el JavaScript

Necesitas actualizar el JavaScript en **dos lugares**:

#### 4.1. Agregar la ruta en `pathMap` (línea ~2305)

Busca la función `showBlogPost` y agrega tu slug al objeto `pathMap`:

```javascript
const pathMap = {
  'lanzamiento-himnario-digital': '/blog/lanzamiento-himnario-digital',
  'nuevas-funcionalidades-himnario': '/blog/nuevas-funcionalidades-himnario',
  'proximas-herramientas': '/blog/proximas-herramientas',
  'mejoras-plataforma': '/blog/mejoras-plataforma',
  '[TU-SLUG]': '/blog/[TU-SLUG]'  // ← Agrega esta línea
};
```

#### 4.2. Agregar la ruta en el detector de rutas iniciales (línea ~2344)

Busca el bloque que detecta la ruta inicial y agrega:

```javascript
} else if (path === '/blog/[TU-SLUG]') {
  document.getElementById('blog-post-[TU-SLUG]').style.display = 'block';
```

## Ejemplo Completo

Supongamos que quieres crear un post llamado "Nueva Versión del Himnario":

**Slug:** `nueva-version-himnario`  
**Fecha:** `30 de enero, 2025`  
**Categoría:** `Actualización` (verde)

### 1. Entrada en la lista (agregar después de línea 842):

```html
<!-- Post 1 -->
<article class="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
  <div class="flex items-center space-x-2 mb-4">
    <span class="text-sm text-gray-500">30 de enero, 2025</span>
    <span class="text-gray-300">•</span>
    <span class="text-sm text-green-600 font-medium">Actualización</span>
  </div>
  <h2 class="text-2xl font-bold mb-3 text-gray-900">
    <a href="/blog/nueva-version-himnario" onclick="showBlogPost(event, 'nueva-version-himnario')" class="hover:text-blue-600 transition-colors">
      Nueva Versión del Himnario
    </a>
  </h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Hemos lanzado una nueva versión del Himnario Digital con mejoras significativas en la interfaz y nuevas funcionalidades.
  </p>
  <a
    href="/blog/nueva-version-himnario"
    onclick="showBlogPost(event, 'nueva-version-himnario')"
    class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
  >
    Leer más →
  </a>
</article>
```

### 2. Post completo (agregar después del último post):

```html
<!-- Post: Nueva Versión del Himnario -->
<div id="blog-post-nueva-version-himnario" class="relative z-10 pt-20" style="display: none;">
  <div class="max-w-4xl mx-auto px-6 py-12 md:py-16">
    <article>
      <a href="/blog" onclick="showBlog(event)" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium">
        ← Volver al blog
      </a>
      
      <div class="flex items-center space-x-2 mb-6">
        <span class="text-sm text-gray-500">30 de enero, 2025</span>
        <span class="text-gray-300">•</span>
        <span class="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">Actualización</span>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
        Nueva Versión del Himnario
      </h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          Estamos emocionados de anunciar el lanzamiento de la versión 2.0 del Himnario Digital IAFCJ, con mejoras significativas en la experiencia de usuario y nuevas funcionalidades.
        </p>

        <section class="mb-10">
          <h2 class="text-3xl font-semibold mb-6 text-gray-900">Nuevas Características</h2>
          <div class="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 class="text-xl font-semibold mb-3 text-gray-900">🎵 Modo Oscuro</h3>
            <p class="text-gray-700 leading-relaxed">
              Ahora puedes cambiar entre modo claro y oscuro para una mejor experiencia de lectura en diferentes condiciones de iluminación.
            </p>
          </div>
        </section>
      </div>
    </article>
  </div>
</div>
```

### 3. JavaScript (actualizar pathMap):

```javascript
const pathMap = {
  'lanzamiento-himnario-digital': '/blog/lanzamiento-himnario-digital',
  'nuevas-funcionalidades-himnario': '/blog/nuevas-funcionalidades-himnario',
  'proximas-herramientas': '/blog/proximas-herramientas',
  'mejoras-plataforma': '/blog/mejoras-plataforma',
  'nueva-version-himnario': '/blog/nueva-version-himnario'
};
```

### 4. JavaScript (actualizar detector de rutas):

```javascript
} else if (path === '/blog/nueva-version-himnario') {
  document.getElementById('blog-post-nueva-version-himnario').style.display = 'block';
```

## Consejos

1. **Orden de los posts**: Los posts más recientes deben ir primero en la lista
2. **Slugs**: Usa solo letras minúsculas, números y guiones. No uses espacios ni caracteres especiales
3. **Fechas**: Mantén un formato consistente: "DD de mes, YYYY"
4. **Contenido**: Usa secciones (`<section>`) para organizar el contenido largo
5. **Pruebas**: Después de agregar un post, prueba:
   - Que aparezca en la lista del blog
   - Que se pueda hacer clic y ver el contenido completo
   - Que el botón "Volver al blog" funcione
   - Que la URL directa funcione (ej: `/blog/tu-slug`)

## ¿Necesitas Ayuda?

Si tienes problemas o preguntas sobre cómo agregar un post, revisa los posts existentes en `index.html` como referencia.
