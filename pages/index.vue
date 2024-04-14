<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'supanuxt starter',
  meta: [
    {
      name: 'description',
      content: 'supabase nuxt starter template',
    },
  ],
  link: [
    {
      rel: 'icon',
      href: 'favicon/favicon.ico',
    },
  ],
});
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-16">
    <h1 class="text-5xl text-center font-extrabold w-full">
      Supanuxt
    </h1>
    <h2 class="text-2xl">
      Supabase + Nuxt + TailwindCSS + ShadCN UI
    </h2>
  </div>
</template>
