<template>
  <div class="group relative bg-stone-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200">
    <!-- Image Container -->
    <div class="aspect-square overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 relative">
      <img 
        :src="image" 
        :alt="name" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      <div class="absolute top-4 right-4 text-2xl bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
        {{ icon }}
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-semibold text-stone-800">{{ name }}</h3>
        <span class="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
          {{ members }} integrantes
        </span>
      </div>
      
      <p class="text-stone-600 text-sm mb-4 leading-relaxed">{{ description }}</p>
      
      <!-- Genres -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="genre in genres" 
          :key="genre"
          class="text-xs text-stone-600 bg-stone-100 px-2 py-1 rounded-full"
        >
          {{ genre }}
        </span>
      </div>
      
      <!-- CTA -->
      <div class="flex items-center justify-between">
        <span class="text-stone-800 font-medium text-sm">Desde ${{ price }}</span>
        <button class="bg-stone-800 text-stone-50 px-4 py-2 rounded hover:bg-stone-700 transition-colors text-sm">
          Ver más
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  members: {
    type: Number,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>
