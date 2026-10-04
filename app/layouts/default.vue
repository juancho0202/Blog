<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">
          Blog
        </NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <small>© Blog</small>
    </footer>
  </div>
</template>
