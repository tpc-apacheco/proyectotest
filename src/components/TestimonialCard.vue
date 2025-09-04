<template>
  <div class="bg-stone-50 rounded-lg p-8 border border-stone-200 h-full">
    <div class="flex items-start mb-4">
      <div class="text-4xl text-stone-300 mr-2">"</div>
    </div>
    
    <blockquote class="text-stone-700 leading-relaxed mb-6 italic">
      {{ quote }}
    </blockquote>
    
    <div class="mt-auto">
      <div class="font-semibold text-stone-800">{{ name }}</div>
      <div class="text-sm text-stone-500">{{ location }}</div>
      <div class="text-xs text-stone-400 mt-1">{{ event }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  }
})
</script>
