---
title: Guía de escritura para publicaciones técnicas
description: Una publicación de referencia que demuestra componentes MDC, bloques de código destacados y el comportamiento de la tabla de contenidos.
date: 2026-10-05
tags:
  - guía
  - escritura
  - nuxt-content
draft: false
path: /blog/guia-de-escritura
---

Usa esta publicación como referencia al escribir nuevas entradas.

## Callouts

::callout{type="info"}
Usa callouts para proporcionar contexto que deba destacarse del flujo principal.
::

::callout{type="tip"}
Usa `pnpm new` para generar una publicación rápidamente.
::

::callout{type="warning"}
Prefiere secciones cortas con encabezados claros para mantener la tabla de contenidos útil.
::

::callout{type="danger"}
No publiques borradores sin una revisión final.
::

## Bloques de código

### Nombre de archivo y botón de copia

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
})
```

### Resaltar líneas específicas

```ts [app/composables/useReadingTime.ts] {2-4}
export function useReadingTime(body: unknown) {
  const minutes = calculateReadingTime(body)
  return Math.max(1, minutes)
}
```

### Snippets de Diff y shell

```diff [feature.patch]
-const enabled = false
+const enabled = true
```

```bash [commands.sh]
pnpm lint
pnpm typecheck
pnpm generate
```

## Pestañas de grupo de código

::code-group
```bash [pnpm]
pnpm add @vueuse/nuxt
```

```bash [npm]
npm install @vueuse/nuxt
```

```bash [yarn]
yarn add @vueuse/nuxt
```
::

## Figura

::figure{src="/images/blog/notebook.svg" alt="Notebook on a desk" caption="Figure component resolves content image paths with the project base URL."}
::

## Video

:you-tube{id="dQw4w9WgXcQ" title="Sample video embed with privacy-enhanced mode"}

## Encabezados de anclaje y TOC

### Ejemplo de encabezado anidado

Esta sección existe para que la tabla de contenidos pueda mostrar encabezados anidados y el resaltado de la sección activa.
