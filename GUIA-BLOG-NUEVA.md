# Guía para Escribir Nuevos Posts del Blog (Sistema Markdown)

¡Bienvenido al nuevo sistema de blog! Ahora es mucho más fácil agregar nuevos posts usando archivos Markdown.

## 🎉 Ventajas del Nuevo Sistema

- ✅ **Separación de contenido y código**: Los posts están en archivos Markdown separados
- ✅ **Fácil de escribir**: Usa Markdown, un formato simple y legible
- ✅ **Sin tocar código HTML**: Solo creas un archivo `.md` y listo
- ✅ **Escalable**: Puedes tener cientos de posts sin problemas
- ✅ **Versionado**: Los posts son archivos de texto, fáciles de versionar con Git

## 📝 Cómo Agregar un Nuevo Post

### Paso 1: Crear el archivo Markdown

1. Ve a la carpeta `posts/`
2. Crea un nuevo archivo con el nombre del slug (ej: `mi-nuevo-post.md`)
3. El slug debe ser en minúsculas, con guiones en lugar de espacios

### Paso 2: Escribir el contenido

Cada post debe empezar con un "frontmatter" (metadatos) en formato YAML:

```markdown
---
title: "Título del Post"
date: "2025-02-01"
category: "Lanzamiento"
excerpt: "Una descripción corta del post que aparecerá en la lista del blog."
slug: "mi-nuevo-post"
---

Aquí va el contenido del post en Markdown.

## Sección 1

Puedes usar **negritas**, *cursivas*, y [enlaces](https://ejemplo.com).

### Subsección

- Listas con viñetas
- Otro item

1. Listas numeradas
2. Otro item
```

### Paso 3: Agregar al archivo JSON

Abre `posts/posts.json` y agrega la entrada del nuevo post:

```json
{
  "slug": "mi-nuevo-post",
  "title": "Título del Post",
  "date": "2025-02-01",
  "category": "Lanzamiento",
  "excerpt": "Una descripción corta del post que aparecerá en la lista del blog."
}
```

**Importante**: El orden en el JSON no importa, los posts se ordenan automáticamente por fecha (más recientes primero).

### Paso 4: Copiar el archivo a public/

Para que el post se cargue correctamente, copia el archivo Markdown a `public/posts/`:

```bash
cp posts/mi-nuevo-post.md public/posts/
```

O simplemente crea el archivo directamente en ambas carpetas.

## 📋 Categorías Disponibles

Puedes usar estas categorías (cada una tiene un color diferente):

- `Lanzamiento` - Azul
- `Actualización` - Verde  
- `Desarrollo` - Morado
- `Mejoras` - Naranja

O crea una nueva categoría (se mostrará en gris por defecto).

## 📅 Formato de Fecha

Usa el formato ISO: `YYYY-MM-DD`

Ejemplos:
- `2025-02-01`
- `2025-12-25`

## ✍️ Ejemplo Completo

**Archivo: `posts/nueva-funcionalidad.md`**

```markdown
---
title: "Nueva Funcionalidad en el Himnario"
date: "2025-02-01"
category: "Actualización"
excerpt: "Hemos agregado una nueva funcionalidad que permite guardar tus himnos favoritos."
slug: "nueva-funcionalidad"
---

Estamos emocionados de anunciar una nueva funcionalidad en el Himnario Digital.

## ¿Qué es?

Ahora puedes guardar tus himnos favoritos para acceder a ellos rápidamente.

## Cómo usarla

1. Abre cualquier himno
2. Haz clic en el botón de favorito
3. Accede a tus favoritos desde el menú principal

## Beneficios

- **Acceso rápido**: Encuentra tus himnos favoritos en segundos
- **Organización**: Mantén una lista personalizada
- **Sincronización**: Tus favoritos se guardan en tu dispositivo

¿Tienes preguntas? [Contáctanos](/contacto).
```

**Entrada en `posts/posts.json`:**

```json
{
  "slug": "nueva-funcionalidad",
  "title": "Nueva Funcionalidad en el Himnario",
  "date": "2025-02-01",
  "category": "Actualización",
  "excerpt": "Hemos agregado una nueva funcionalidad que permite guardar tus himnos favoritos."
}
```

## 🚀 Después de Crear el Post

1. **Reinicia el servidor de desarrollo** si está corriendo:
   ```bash
   npm run dev
   ```

2. **Verifica que el post aparezca** en `/blog`

3. **Prueba el enlace** haciendo clic en el post

## 💡 Tips

- **Slug único**: Asegúrate de que el slug no esté duplicado
- **Excerpt corto**: El excerpt debe ser de 1-2 oraciones, máximo 200 caracteres
- **Markdown estándar**: Puedes usar todo el Markdown estándar (títulos, listas, enlaces, código, etc.)
- **Imágenes**: Para agregar imágenes, colócalas en `public/images/` y usa: `![Alt text](/images/mi-imagen.jpg)`

## 🔧 Solución de Problemas

### El post no aparece
- Verifica que el archivo esté en `posts/` y `public/posts/`
- Verifica que la entrada esté en `posts/posts.json`
- Verifica que el slug coincida en ambos lugares

### El contenido no se muestra
- Verifica que el archivo Markdown tenga el frontmatter correcto
- Verifica que el archivo esté en `public/posts/`
- Revisa la consola del navegador para errores

### Error de formato
- Verifica que el frontmatter esté entre `---` al inicio
- Verifica que el JSON en `posts.json` sea válido
- Verifica que las comillas en el JSON sean dobles (`"`)

## 📚 Recursos de Markdown

Si no estás familiarizado con Markdown, aquí tienes una guía rápida:

- **Títulos**: `# Título 1`, `## Título 2`, `### Título 3`
- **Negritas**: `**texto**`
- **Cursivas**: `*texto*`
- **Enlaces**: `[texto](url)`
- **Listas**: `- item` o `1. item`
- **Código**: `` `código` `` o ````código```` para bloques

## 🎯 Próximos Pasos

Una vez que te sientas cómodo con este sistema, podrías considerar:

- Agregar un script que automáticamente copie los posts a `public/posts/`
- Usar un plugin de Vite para procesar Markdown en tiempo de build
- Agregar soporte para imágenes y otros assets
- Crear un sistema de tags o etiquetas

¡Disfruta escribiendo posts! 🎉
