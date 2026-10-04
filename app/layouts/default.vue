<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">
          Blog
        </NuxtLink>
        <NuxtLink to="/blog">
          Posts
        </NuxtLink>
        <NuxtLink to="/about">
          About
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
