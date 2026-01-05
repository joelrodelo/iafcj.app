# Instalación del Sistema de Blog

## Dependencias Necesarias

El nuevo sistema de blog requiere las siguientes dependencias:

```bash
npm install react-router-dom react-markdown remark-gfm gray-matter
```

O con yarn:

```bash
yarn add react-router-dom react-markdown remark-gfm gray-matter
```

## Tipos TypeScript (Opcional)

Si usas TypeScript, las dependencias ya incluyen sus tipos. Si necesitas tipos adicionales:

```bash
npm install --save-dev @types/react-router-dom
```

## Verificación

Después de instalar, verifica que todo funcione:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Visita `http://localhost:3000/blog` para ver la lista de posts

3. Haz clic en cualquier post para ver el contenido completo

## Estructura de Archivos

Después de la instalación, tu estructura debería verse así:

```
/
├── posts/
│   ├── posts.json          # Metadatos de todos los posts
│   ├── post-1.md           # Archivos Markdown de los posts
│   └── post-2.md
├── public/
│   └── posts/              # Copias de los .md para carga en runtime
│       ├── post-1.md
│       └── post-2.md
├── components/
│   └── blog/
│       ├── BlogList.tsx    # Componente para lista de posts
│       └── BlogPost.tsx    # Componente para post individual
├── pages/
│   ├── Home.tsx
│   ├── BlogPage.tsx
│   └── BlogPostPage.tsx
└── utils/
    └── blogLoader.ts       # Utilidades para cargar posts
```

## Notas Importantes

- Los archivos Markdown deben estar tanto en `posts/` como en `public/posts/`
- El archivo `posts.json` contiene los metadatos de todos los posts
- Los posts se ordenan automáticamente por fecha (más recientes primero)

## Solución de Problemas

### Error: Cannot find module 'react-router-dom'
- Ejecuta `npm install react-router-dom`

### Error: Cannot find module 'react-markdown'
- Ejecuta `npm install react-markdown remark-gfm`

### Error: Cannot find module 'gray-matter'
- Ejecuta `npm install gray-matter`

### Los posts no se cargan
- Verifica que los archivos `.md` estén en `public/posts/`
- Verifica que `posts.json` tenga las entradas correctas
- Revisa la consola del navegador para errores
