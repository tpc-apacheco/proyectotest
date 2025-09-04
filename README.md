# Mi Sitio Vue 🚀

Un sitio web moderno y estático construido con Vue 3, Vite y Tailwind CSS, optimizado para despliegue en GitHub Pages.

## ✨ Características

- ⚡ **Vue 3** con Composition API
- 🛠️ **Vite** para desarrollo ultrarrápido
- 🎨 **Tailwind CSS** para diseño moderno y responsivo
- 📦 **pnpm** para gestión eficiente de dependencias
- 🚀 **GitHub Actions** para despliegue automático
- 📱 **Responsive Design** compatible con todos los dispositivos
- 🌟 **Componentes reutilizables** y arquitectura escalable

## 🛠️ Tecnologías Utilizadas

- [Vue 3](https://vuejs.org/) - Framework JavaScript progresivo
- [Vite](https://vitejs.dev/) - Herramienta de build rápida
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [pnpm](https://pnpm.io/) - Gestor de paquetes rápido y eficiente
- [GitHub Pages](https://pages.github.com/) - Hosting gratuito

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+ 
- pnpm instalado globalmente

```bash
npm install -g pnpm
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd test-proyecto
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Ejecutar en desarrollo**
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Servidor de desarrollo

# Build
pnpm build        # Construir para producción
pnpm preview      # Preview del build
pnpm serve        # Servir build en puerto 4173

# Despliegue
pnpm deploy       # Desplegar a GitHub Pages (manual)
```

## 🌐 Despliegue en GitHub Pages

### Configuración Automática (Recomendado)

1. **Habilitar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "GitHub Actions"

2. **Push a la rama main**:
```bash
git add .
git commit -m "feat: configuración inicial del proyecto"
git push origin main
```

El workflow de GitHub Actions se ejecutará automáticamente y desplegará tu sitio.

### Configuración Manual

1. **Construir el proyecto**:
```bash
pnpm build
```

2. **Desplegar usando gh-pages**:
```bash
pnpm deploy
```

## 📁 Estructura del Proyecto

```
test-proyecto/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── vite.svg               # Assets públicos
├── src/
│   ├── components/
│   │   └── FeatureCard.vue    # Componente de tarjeta
│   ├── assets/                # Assets del proyecto
│   ├── App.vue               # Componente principal
│   ├── main.js               # Punto de entrada
│   └── style.css             # Estilos de Tailwind
├── index.html                # Template HTML
├── package.json              # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── README.md                # Documentación
```

## 🎨 Personalización

### Colores y Estilos

Edita `tailwind.config.js` para personalizar el tema:

```js
export default {
  theme: {
    extend: {
      colors: {
        'primary': '#your-color',
        'secondary': '#your-color',
      }
    },
  },
}
```

### Componentes

Los componentes están en `src/components/`. Cada componente sigue las mejores prácticas de Vue 3:

- Composition API con `<script setup>`
- Props tipados con `defineProps()`
- Estilos con Tailwind CSS

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env.local` para variables de desarrollo:

```bash
VITE_APP_TITLE=Mi Sitio Vue
VITE_API_URL=https://api.ejemplo.com
```

### Optimización de Build

El proyecto está configurado para:
- Minificación con Terser
- Code splitting automático
- Optimización de assets
- Compatibilidad con GitHub Pages

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'feat: añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa los [Issues existentes](../../issues)
2. Crea un [nuevo Issue](../../issues/new)
3. Consulta la [documentación oficial de Vue 3](https://vuejs.org/)

---

Hecho con ❤️ usando Vue 3, Vite y Tailwind CSS