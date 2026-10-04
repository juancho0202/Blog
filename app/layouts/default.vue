<template>
  <div class="min-h-screen bg-surface text-foreground">
    <a
      href="#content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface-muted focus:px-4 focus:py-2 focus:text-foreground"
    >
      Skip to content
    </a>

    <header class="sticky top-0 z-40 border-b border-border/80 bg-surface/80 backdrop-blur-sm">
      <div class="page-shell flex items-center justify-between gap-4 py-4">
        <NuxtLink
          to="/"
          class="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-brand"
        >
          Blog
        </NuxtLink>

        <nav
          aria-label="Main navigation"
          class="flex items-center gap-1 rounded-full border border-border bg-surface-muted p-1"
        >
          <NuxtLink
            to="/"
            class="rounded-full px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-brand"
            exact-active-class="bg-surface text-foreground shadow-sm"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="rounded-full px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-brand"
            active-class="bg-surface text-foreground shadow-sm"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="rounded-full px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-brand"
            active-class="bg-surface text-foreground shadow-sm"
          >
            About
          </NuxtLink>
        </nav>

        <ColorModeToggle />
      </div>
    </header>

    <main
      id="content"
      class="page-shell py-8 sm:py-10 lg:py-12"
    >
      <slot />
    </main>

    <footer class="border-t border-border bg-surface-muted/80">
      <div class="page-shell flex flex-col items-center justify-between gap-4 py-6 text-sm text-foreground-muted sm:flex-row">
        <p>© {{ new Date().getFullYear() }} Blog</p>
        <a
          href="https://github.com/juancho0202/Blog"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-brand"
        >
          <Icon
            name="lucide:github"
            class="h-4 w-4"
            aria-hidden="true"
          />
          GitHub
        </a>
      </div>
    </footer>
  </div>
</template>
