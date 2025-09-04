<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
    <!-- Navegación -->
    <nav class="w-full px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img src="/vite.svg" alt="Logo" class="w-8 h-8">
          <span class="text-xl font-bold text-gray-800">Mi Sitio Vue</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#inicio" class="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#acerca" class="text-gray-600 hover:text-blue-600 transition-colors">Acerca</a>
          <a href="#proyectos" class="text-gray-600 hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#contacto" class="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
        </div>
        <button class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="px-6 py-20">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <img src="/vite.svg" alt="Vue + Vite" class="w-20 h-20 mx-auto mb-6 animate-pulse">
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Bienvenido a
          <span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Vue 3
          </span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Un sitio web moderno construido con Vue 3, Vite y Tailwind CSS. 
          Rápido, elegante y completamente responsivo.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="count++"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Contador: {{ count }}
          </button>
          <button class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            Saber más
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="acerca" class="px-6 py-20 bg-white/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">Características</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="⚡"
            title="Súper Rápido"
            description="Construido con Vite para desarrollo ultrarrápido y hot module replacement instantáneo."
          />
          <FeatureCard 
            icon="🎨"
            title="Diseño Moderno"
            description="Interfaz elegante con Tailwind CSS, completamente responsivo y accesible."
          />
          <FeatureCard 
            icon="🚀"
            title="Fácil Despliegue"
            description="Optimizado para GitHub Pages con workflow automático de CI/CD."
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-6 py-12 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">
          © 2024 Mi Sitio Vue. Creado con ❤️ usando Vue 3, Vite y Tailwind CSS.
        </p>
        <div class="mt-4 flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FeatureCard from './components/FeatureCard.vue'

const count = ref(0)
</script>