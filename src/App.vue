<template>
  <div class="min-h-screen bg-stone-50">
            <!-- Header -->
        <Disclosure as="header" :class="[
          'transition-all duration-300 ease-out z-50',
          isScrolled
            ? 'fixed top-0 left-0 right-0 bg-stone-50/95 border-b border-stone-200 shadow-sm'
            : 'absolute top-0 left-0 right-0 bg-transparent'
        ]" v-slot="{ open }" @update:open="handleMenuToggle">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <button 
            @click="scrollToTop"
            class="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 cursor-pointer group hover:scale-105"
          >
                    <div :class="[
          'w-10 h-10 rounded flex items-center justify-center group-hover:scale-105 transition-all duration-300',
          isScrolled ? 'bg-stone-800 group-hover:bg-stone-700' : 'bg-white/90 group-hover:bg-white shadow-md'
        ]">
              <span :class="[
                'font-bold text-lg transition-colors duration-300',
                isScrolled ? 'text-stone-50' : 'text-stone-800'
              ]">C</span>
            </div>
            <span :class="[
              'text-2xl font-light tracking-wide transition-all duration-300',
              isScrolled ? 'text-stone-800' : 'text-stone-100 drop-shadow-lg hover:text-white'
            ]">Charlotte</span>
          </button>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-8">
                        <a :class="[
              'font-medium transition-all duration-300 hover:scale-105',
              isScrolled
                ? 'text-stone-600 hover:text-stone-800'
                : 'text-stone-200 hover:text-white drop-shadow-md'
            ]" href="#bandas">Nuestras Bandas</a>
            <a :class="[
              'font-medium transition-all duration-300 hover:scale-105',
              isScrolled 
                ? 'text-stone-600 hover:text-stone-800' 
                : 'text-stone-200 hover:text-white drop-shadow-md'
            ]" href="#generos">Géneros</a>
            <a :class="[
              'font-medium transition-all duration-300 hover:scale-105',
              isScrolled 
                ? 'text-stone-600 hover:text-stone-800' 
                : 'text-stone-200 hover:text-white drop-shadow-md'
            ]" href="#servicios">Servicios</a>
            <a :class="[
              'font-medium transition-all duration-300 hover:scale-105',
              isScrolled 
                ? 'text-stone-600 hover:text-stone-800' 
                : 'text-stone-200 hover:text-white drop-shadow-md'
            ]" href="#testimonios">Testimonios</a>
            <a :class="[
              'font-medium transition-all duration-300 hover:scale-105',
              isScrolled 
                ? 'text-stone-600 hover:text-stone-800' 
                : 'text-stone-200 hover:text-white drop-shadow-md'
            ]" href="#contacto">Contacto</a>
          </nav>

          <!-- Desktop CTA -->
                    <button :class="[
            'hidden lg:block px-6 py-2 rounded font-medium transition-all duration-300 hover:scale-105',
            isScrolled
              ? 'bg-stone-800 text-stone-50 hover:bg-stone-700 shadow-sm hover:shadow-md'
              : 'bg-white/90 text-stone-800 hover:bg-white shadow-lg hover:shadow-xl'
          ]">
            Consultar Disponibilidad
          </button>

          <!-- Mobile menu button -->
         <DisclosureButton :class="[
            'lg:hidden p-2 rounded-md transition-all duration-300 hover:scale-105',
            isScrolled
              ? 'text-stone-600 hover:text-stone-800 hover:bg-stone-100'
              : 'text-stone-200 hover:text-white hover:bg-white/10'
          ]">
            <span class="sr-only">Abrir menú principal</span>
            <Bars3Icon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-if="open" class="h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>

      <!-- Mobile menu overlay and panel -->
      <div v-show="open" class="lg:hidden">
        <!-- Overlay principal con z-index máximo -->
        <div 
          v-show="open"
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          style="top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; position: fixed !important;"
        ></div>
        
        <!-- Overlay clickeable -->
        <transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <DisclosureButton
            v-show="open"
            as="div"
            class="fixed inset-0 bg-transparent"
            style="top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; position: fixed !important;"
            aria-hidden="true"
          />
        </transition>
        
        <!-- Menu Panel -->
        <transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <DisclosurePanel 
            v-show="open"
            class="fixed top-0 right-0 w-80 h-screen bg-stone-50 shadow-2xl will-change-transform border-l border-stone-200"
            style="top: 0 !important; right: 0 !important; position: fixed !important; height: 100vh !important;"
            static
          >
            <div class="flex flex-col h-full">
              <!-- Header del menú -->
              <div class="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 flex-shrink-0">
                <button 
                  @click="scrollToTop"
                  class="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 group"
                >
                  <div class="w-8 h-8 bg-stone-800 rounded flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                    <span class="text-stone-50 font-bold">C</span>
                  </div>
                  <span class="text-xl font-light text-stone-800 tracking-wide">Charlotte</span>
                </button>
                <DisclosureButton class="p-2 rounded-md text-stone-600 hover:text-stone-800 hover:bg-stone-100 transition-all duration-300">
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>

              <!-- Navigation Links -->
              <div class="flex-1 px-6 py-4 space-y-2 bg-stone-50 flex flex-col justify-start">
                <DisclosureButton
                  as="a"
                  href="#bandas"
                  class="block px-4 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-300 font-medium text-lg transform hover:scale-[1.02]"
                >
                  Nuestras Bandas
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#generos"
                  class="block px-4 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-300 font-medium text-lg transform hover:scale-[1.02]"
                >
                  Géneros
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#servicios"
                  class="block px-4 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-300 font-medium text-lg transform hover:scale-[1.02]"
                >
                  Servicios
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#testimonios"
                  class="block px-4 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-300 font-medium text-lg transform hover:scale-[1.02]"
                >
                  Testimonios
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#contacto"
                  class="block px-4 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-300 font-medium text-lg transform hover:scale-[1.02]"
                >
                  Contacto
                </DisclosureButton>
              </div>

              <!-- Mobile CTA -->
              <div class="px-6 py-4 border-t border-stone-200 bg-stone-50 flex-shrink-0">
                <DisclosureButton
                  as="button"
                  class="w-full bg-stone-800 text-stone-50 px-6 py-3 rounded-lg hover:bg-stone-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Consultar Disponibilidad
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </transition>
      </div>
    </Disclosure>

    <!-- Spacer for fixed header -->
    <div :class="[
      'transition-all duration-300 ease-out',
      isScrolled ? 'h-20' : 'h-0'
    ]"></div>

    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=900&fit=crop&crop=center" 
          alt="Concert stage"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-stone-50/85"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl lg:text-7xl font-light text-stone-800 mb-8 leading-tight">
            Música Curada para
            <span class="font-medium italic">Experiencias Inolvidables</span>
          </h1>
          <p class="text-xl text-stone-700 mb-12 leading-relaxed font-medium">
            Charlotte gestiona un selecto catálogo de bandas de covers especializadas en crear 
            la atmósfera perfecta para cada ocasión. Desde eventos corporativos hasta celebraciones íntimas.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-stone-800 text-stone-50 px-8 py-4 rounded hover:bg-stone-700 transition-colors font-medium shadow-lg">
              Explorar Bandas
            </button>
            <button class="border-2 border-stone-700 text-stone-800 px-8 py-4 rounded hover:bg-stone-800 hover:text-stone-50 transition-colors font-medium">
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section id="generos" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-light text-stone-800 text-center mb-12">Encuentra Tu Sonido</h2>
        <div class="grid lg:grid-cols-5 gap-6">
          <div v-for="genre in musicGenres" :key="genre.name" class="text-center group cursor-pointer">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-3xl group-hover:bg-stone-200 transition-colors">
              {{ genre.icon }}
            </div>
            <h3 class="font-medium text-stone-800 mb-2">{{ genre.name }}</h3>
            <p class="text-sm text-stone-500">{{ genre.bands }} bandas</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Bands -->
    <section id="bandas" class="py-20 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-light text-stone-800 mb-4">Nuestras Bandas Destacadas</h2>
          <p class="text-stone-600 max-w-2xl mx-auto">
            Cada banda está cuidadosamente seleccionada por su calidad musical, 
            profesionalismo y capacidad de conectar con el público.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <BandCard 
            v-for="band in featuredBands" 
            :key="band.name"
            :name="band.name"
            :description="band.description"
            :members="band.members"
            :genres="band.genres"
            :price="band.price"
            :icon="band.icon"
            :image="band.image"
          />
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="servicios" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              🎤
            </div>
            <h3 class="text-xl font-medium text-stone-800 mb-4">Gestión Completa</h3>
            <p class="text-stone-600 leading-relaxed">
              Nos encargamos de todos los aspectos técnicos, logísticos y de coordinación 
              para que tu evento sea perfecto.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              🎵
            </div>
            <h3 class="text-xl font-medium text-stone-800 mb-4">Repertorios Personalizados</h3>
            <p class="text-stone-600 leading-relaxed">
              Adaptamos el repertorio según tu audiencia, ocasión y preferencias 
              para crear la experiencia musical ideal.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              🎪
            </div>
            <h3 class="text-xl font-medium text-stone-800 mb-4">Producción Profesional</h3>
            <p class="text-stone-600 leading-relaxed">
              Equipo de sonido e iluminación de primera calidad, técnicos especializados 
              y montaje profesional incluido.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonios" class="py-20 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-light text-stone-800 text-center mb-16">Lo Que Dicen Nuestros Clientes</h2>
        <div class="grid lg:grid-cols-3 gap-8">
          <TestimonialCard 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            :quote="testimonial.quote"
            :name="testimonial.name"
            :location="testimonial.location"
            :event="testimonial.event"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-light text-stone-800 mb-4">Mantente Al Día</h2>
        <p class="text-stone-600 mb-8">
          Recibe noticias sobre nuevas bandas, ofertas especiales y eventos exclusivos.
        </p>
        <div class="max-w-md mx-auto">
          <!-- Desktop: Flex horizontal -->
          <div class="hidden sm:flex">
            <input 
              type="email" 
              placeholder="Tu email"
              class="flex-1 px-4 py-3 border border-stone-300 rounded-l-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 transition-colors"
            >
            <button class="bg-stone-800 text-stone-50 px-6 py-3 rounded-r-lg hover:bg-stone-700 transition-colors font-medium whitespace-nowrap">
              Suscribirse
            </button>
          </div>
          
          <!-- Mobile: Stacked vertical -->
          <div class="sm:hidden space-y-3">
            <input 
              type="email" 
              placeholder="Tu email"
              class="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 transition-colors text-center"
            >
            <button class="w-full bg-stone-800 text-stone-50 px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors font-medium">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-800 text-stone-300 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-stone-50 rounded flex items-center justify-center">
                <span class="text-stone-800 font-bold">C</span>
              </div>
              <span class="text-xl font-light tracking-wide">Charlotte</span>
            </div>
            <p class="text-stone-400 leading-relaxed">
              Gestión musical profesional para eventos únicos e inolvidables.
            </p>
          </div>
          
          <div>
            <h4 class="font-medium mb-4">Servicios</h4>
            <ul class="space-y-2 text-stone-400">
              <li><a href="#" class="hover:text-stone-300 transition-colors">Bandas de Covers</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Eventos Corporativos</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Bodas & Celebraciones</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Producción Musical</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-4">Géneros</h4>
            <ul class="space-y-2 text-stone-400">
              <li><a href="#" class="hover:text-stone-300 transition-colors">Rock & Pop</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Indie & Alternative</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Disco & Dance</a></li>
              <li><a href="#" class="hover:text-stone-300 transition-colors">Acústico & Lounge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-4">Contacto</h4>
            <ul class="space-y-2 text-stone-400">
              <li>info@charlotte-music.com</li>
              <li>+1 (555) 123-4567</li>
              <li>México, CDMX</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; 2024 Charlotte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

    <!-- Floating Scroll to Top Button -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-75 translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-75 translate-y-4"
    >
      <button
        v-show="isScrolled"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-stone-800 hover:bg-stone-700 text-stone-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-40 group hover:scale-105 active:scale-95"
        aria-label="Volver arriba"
      >
        <ChevronUpIcon class="w-6 h-6 mx-auto group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import BandCard from './components/BandCard.vue'
import TestimonialCard from './components/TestimonialCard.vue'

const musicGenres = ref([
  { name: 'Disco & Dance', icon: '🕺', bands: '2' },
  { name: 'Rock & Pop', icon: '🎸', bands: '3' },
  { name: 'Indie & Alternative', icon: '🎵', bands: '2' },
  { name: 'Lounge', icon: '🍸', bands: '1' },
  { name: 'Acústico', icon: '🎤', bands: '1' }
])

const featuredBands = ref([
  {
    name: 'dpeters',
    description: 'Especialistas en música disco y hits bailables modernos. Su energía contagiosa y repertorio de clásicos atemporales garantiza una pista de baile llena toda la noche.',
    members: 6,
    genres: ['Disco', 'Dance', 'Indie Rock', 'Pop'],
    price: '1,200',
    icon: '🕺',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop&crop=face'
  },
  {
    name: 'Radiodelorean',
    description: 'Pop rock en español e inglés que conecta generaciones. Desde ABBA hasta Alejandra Guzmán, crean un ambiente nostálgico y emotivo perfecto para público femenino.',
    members: 5,
    genres: ['Pop Rock', 'Español', 'Clásicos'],
    price: '1,000',
    icon: '💫',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&h=500&fit=crop&crop=face'
  },
  {
    name: 'Ciclotronics',
    description: 'El trío perfecto para ambientes sofisticados. Su estilo indie-pop crea una atmósfera lounge ideal para eventos íntimos y cocktails elegantes.',
    members: 3,
    genres: ['Indie Pop', 'Lounge', 'Ambient'],
    price: '800',
    icon: '🌙',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=500&fit=crop&crop=center'
  },
  {
    name: 'rebenans',
    description: 'Sonido underground y alternativo que abraza lo contemporáneo. Expertos en grunge, indie y rock pop actual, incluyendo Bandalos Chinos y Twenty One Pilots.',
    members: 3,
    genres: ['Grunge', 'Indie', 'Alternative Rock'],
    price: '900',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=500&fit=crop&crop=face'
  },
  {
    name: 'mantalorians',
    description: 'Rock acústico con toque satírico y humor inteligente. Su versatilidad abarca todos los subgéneros del rock en un formato íntimo pero impactante.',
    members: 4,
    genres: ['Rock Acústico', 'Sátira', 'Covers'],
    price: '750',
    icon: '🎸',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop&crop=face'
  }
])

const testimonials = ref([
  {
    quote: 'Charlotte transformó nuestra gala anual en una experiencia musical extraordinaria. La banda dpeters tuvo a todos bailando desde la primera canción. Profesionalismo excepcional.',
    name: 'María González',
    location: 'Ciudad de México',
    event: 'Gala Corporativa 2024'
  },
  {
    quote: 'Para nuestra boda queríamos algo especial y Radiodelorean fue perfecto. Conocían todas nuestras canciones favoritas y crearon un ambiente mágico que nuestros invitados aún recuerdan.',
    name: 'Carlos & Ana Ruiz',
    location: 'Guadalajara, Jalisco',
    event: 'Boda Privada'
  },
  {
    quote: 'El equipo de Charlotte maneja cada detalle con precisión. Ciclotronics ambientó nuestro lanzamiento de producto con el tono exacto que buscábamos. Altamente recomendados.',
    name: 'Diego Herrera',
    location: 'Monterrey, NL',
    event: 'Evento de Lanzamiento'
  }
])

// Estado para controlar si el header debe ser fijo
const isScrolled = ref(false)

// Función para detectar scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Función para scroll suave al top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Funciones para controlar el scroll del body
const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden'
}

const enableBodyScroll = () => {
  document.body.style.overflow = ''
}

// Función para manejar apertura/cierre del menú móvil
const handleMenuToggle = (isOpen) => {
  if (isOpen) {
    disableBodyScroll()
  } else {
    enableBodyScroll()
  }
}

// Lifecycle hooks para el scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  enableBodyScroll() // Asegurar que el scroll se restaure al desmontar
})
</script>
<style scoped>
.header-bg {
  background: rgba(245, 245, 244, 0.95); /* Funciona perfecto */
}
</style>