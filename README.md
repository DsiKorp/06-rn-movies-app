# 🎬 RN Movies App

Una aplicación móvil moderna de películas construida con **React Native** y **Expo**. Explora películas populares, calificadas, próximas a estrenarse y en cartelera. Accede a detalles completos de películas incluyendo información del elenco.

## ✨ Características

- 🎞️ **Carrusel de películas** - Visualiza las películas en cartelera con un carrusel interactivo
- 📺 **Múltiples categorías** - Explora películas populares, mejor calificadas, próximas y en cartelera
- 🔄 **Paginación infinita** - Carga automática de más películas al desplazarse
- 🎭 **Detalles de películas** - Información completa incluyendo sinopsis, duración, calificación y fecha de lanzamiento
- 👥 **Elenco de películas** - Visualiza los actores principales con sus fotos
- 🎨 **Diseño responsivo** - Interfaz moderna con Tailwind CSS (NativeWind)
- 🌙 **Modo oscuro/claro** - Compatibilidad automática con las preferencias del sistema
- ⚡ **Rendimiento optimizado** - Cacheo inteligente con React Query
- 📱 **Cross-platform** - Compatible con iOS, Android y Web

## 🛠️ Stack Tecnológico

### Framework & Runtime
- **React Native** `0.81.5` - Framework para aplicaciones móviles multiplataforma
- **Expo** `~54.0.33` - Plataforma para desarrollar aplicaciones React Native
- **Expo Router** `~6.0.23` - Enrutamiento basado en archivos (file-based routing)
- **React** `19.1.0` - Librería de UI

### Gestión de Estado & Datos
- **@tanstack/react-query** `^5.100.9` - Gestión de estado del servidor y cacheo de datos
- **@tanstack/react-query-devtools** `^5.100.9` - Herramientas de desarrollo para React Query
- **axios** `^1.16.0` - Cliente HTTP para consumir APIs

### Navegación & UI
- **@react-navigation/native** `^7.1.8` - Sistema de navegación base
- **@react-navigation/bottom-tabs** `^7.4.0` - Navegación con pestañas inferiores
- **@react-navigation/elements** `^2.6.3` - Componentes de navegación pre-construidos
- **react-native-gesture-handler** `~2.28.0` - Gestos y animaciones
- **react-native-reanimated** `~4.1.1` - Animaciones de alto rendimiento
- **react-native-reanimated-carousel** `^4.0.3` - Carrusel optimizado con animaciones

### Estilos & Diseño
- **NativeWind** `^4.2.3` - Tailwind CSS para React Native
- **Tailwind CSS** `^3.4.17` - Framework de CSS utilitario
- **@expo/vector-icons** `^15.0.3` - Iconos vectoriales
- **expo-linear-gradient** `^55.0.13` - Componente de gradientes lineales

### Componentes & Utilidades Expo
- **expo-image** `~3.0.11` - Componente optimizado de imágenes
- **expo-font** `~14.0.11` - Carga de fuentes personalizadas
- **expo-constants** `~18.0.13` - Acceso a constantes de la aplicación
- **expo-status-bar** `~3.0.9` - Control de la barra de estado
- **expo-safe-area-context** `~5.6.0` - Contexto de área segura
- **expo-linking** `~8.0.11` - Manejo de deep links
- **expo-haptics** `~15.0.8` - Retroalimentación háptica

### Desarrollo
- **TypeScript** `~5.9.2` - Lenguaje con tipado estático
- **ESLint** `^9.25.0` - Linter de código
- **Babel** `~54.0.10` - Transpilador de JavaScript

## 📁 Estructura del Proyecto

```
├── app/                          # Rutas y pantallas de la app
│   ├── _layout.tsx              # Layout raíz
│   ├── index.tsx                # Pantalla inicial (redirect)
│   ├── home/
│   │   └── index.tsx            # Pantalla principal de películas
│   └── movie/
│       └── [id].tsx             # Pantalla de detalles de película
│
├── presentation/                 # Componentes visuales y hooks
│   ├── components/
│   │   └── movies/
│   │       ├── MainSlideShow.tsx        # Carrusel principal
│   │       ├── MovieHorizontalList.tsx  # Lista horizontal de películas
│   │       ├── MoviePoster.tsx          # Componente de póster
│   │       └── movie/
│   │           ├── ActorCard.tsx        # Tarjeta de actor
│   │           ├── MovieCast.tsx        # Lista de elenco
│   │           ├── MovieDescription.tsx # Descripción de película
│   │           └── MovieHeader.tsx      # Header de película
│   └── hooks/
│       ├── useMovies.tsx         # Hook para listar películas
│       └── useMovie.tsx          # Hook para detalles de película
│
├── core/                         # Lógica de negocio
│   ├── actions/
│   │   ├── movie/
│   │   │   ├── get-movie-by-id.action.ts      # Obtener película por ID
│   │   │   └── get-movie-cast.action.ts       # Obtener elenco
│   │   └── movies/
│   │       ├── now-playing.action.ts          # Películas en cartelera
│   │       ├── popular.action.ts              # Películas populares
│   │       ├── top-rated.action.ts            # Mejor calificadas
│   │       └── upcoming.action.ts             # Próximas a estrenarse
│   └── api/
│       └── moviesApi.ts          # Configuración de axios para TMDb
│
├── infrastructure/               # Mapeos e interfaces
│   ├── interfaces/
│   │   ├── movie.interface.ts             # Interfaz de película
│   │   ├── cast.ts                        # Interfaz de actor
│   │   ├── moviedb-response.ts            # Respuesta de TMDb
│   │   ├── moviedb-movie.response.ts      # Respuesta de película
│   │   └── moviedb-credits.response.ts    # Respuesta de créditos
│   └── mappers/
│       ├── movie.mapper.ts       # Mapear datos de TMDb a Movie
│       └── cast.mapper.ts        # Mapear datos de TMDb a Cast
│
├── config/                       # Configuración
│   └── helpers/
│       └── formatter.ts          # Funciones de formateo
│
├── assets/                       # Recursos estáticos
│   └── images/                   # Iconos e imágenes
│
├── app.json                      # Configuración de Expo
├── babel.config.js               # Configuración de Babel
├── eslint.config.js              # Configuración de ESLint
├── metro.config.js               # Configuración de Metro bundler
├── tailwind.config.js            # Configuración de Tailwind CSS
├── tsconfig.json                 # Configuración de TypeScript
└── package.json                  # Dependencias del proyecto
```

## 📋 Requisitos Previos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0
- **Expo CLI** (se instala con las dependencias)

### Opcional (para desarrollo nativo)
- **iOS**: Xcode 15+ (macOS)
- **Android**: Android Studio con SDK 24+

## 🚀 Instalación

### 1. Clonar o descargar el repositorio

```bash
git clone <tu-repo-url>
cd 06-rn-movies-app
```

### 2. Instalar dependencias

```bash
npm install
```

O si usas yarn:

```bash
yarn install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` o `.env.local` en la raíz del proyecto:

```env
EXPO_PUBLIC_MOVIES_API_URL=https://api.themoviedb.org/3/movie
EXPO_PUBLIC_MOVIES_API_KEY=tu_api_key_aqui
```

**Obtener API Key:**
1. Ir a [The Movie Database (TMDb)](https://www.themoviedb.org/)
2. Crear una cuenta (es gratuita)
3. Ir a Settings → API
4. Copiar tu API Key
5. Pegar en el archivo `.env`

## ▶️ Ejecutar el Proyecto

### Desarrollo en navegador (Web)

```bash
npm run web
```

Abrirá automáticamente `http://localhost:8081` en tu navegador.

### Desarrollo en emulador Android

```bash
npm run android
```

Requisitos: Android Studio y emulador configurado.

### Desarrollo en simulador iOS

```bash
npm run ios
```

Requisitos: macOS con Xcode instalado.

### Modo desarrollo interactivo

```bash
npm start
```

Este comando abre el menú de Expo donde puedes elegir cómo ejecutar la app:

- Presiona **w** para web
- Presiona **a** para Android
- Presiona **i** para iOS
- Presiona **j** para abrir debugger
- Presiona **r** para recargar

## 📦 Scripts Disponibles

```bash
# Iniciar en modo desarrollo
npm start

# Ejecutar en web
npm run web

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar linter
npm run lint

# Resetear proyecto (limpia caché)
npm run reset-project
```

## 🏗️ Arquitectura de la Aplicación

### Patrón Clean Architecture

El proyecto sigue una arquitectura limpia dividida en capas:

#### 1. **Presentation Layer** (`/presentation`)
Componentes visuales e interacción del usuario:
- Componentes React reutilizables
- Hooks personalizados (`useMovies`, `useMovie`)
- Manejo de UI y UX

#### 2. **Core Layer** (`/core`)
Lógica de negocio:
- **Actions**: Funciones que ejecutan llamadas a API (server actions)
- **API**: Configuración de Axios y cliente HTTP

#### 3. **Infrastructure Layer** (`/infrastructure`)
Transformación y mapeo de datos:
- **Interfaces**: Tipos TypeScript para datos
- **Mappers**: Transformar respuestas de API a modelos internos

#### 4. **Routing Layer** (`/app`)
Sistema de navegación:
- Rutas basadas en archivos (File-based Routing)
- Usa `expo-router` y `@react-navigation`

### Flujo de Datos

```
UI (Presentation) 
    ↓
useMovies Hook (React Query)
    ↓
Actions (nowPlayingMoviesAction, etc.)
    ↓
Axios/moviesApi (HTTP Request)
    ↓
TMDb API
    ↓
MovieMapper (Transform Data)
    ↓
Movie Interface (Typed Data)
    ↓
React Query Cache
    ↓
UI Update
```

## 🎯 Funcionalidades Principales

### Pantalla de Inicio (`/home`)
- **Carrusel principal**: Películas en cartelera con deslizamiento suave
- **Lista de populares**: Películas más populares del momento
- **Top Rated**: Las mejores películas calificadas con paginación infinita
- **Próximos estrenos**: Películas que próximamente se estrenarán

### Pantalla de Detalles (`/movie/[id]`)
- Información completa de la película
- Póster de alta resolución
- Sinopsis, duración, idioma original
- Fecha de lanzamiento y calificación
- Elenco principal con fotos de actores
- Enlaces y metadatos adicionales

## 🔗 Integración con API

La aplicación consume la API de **The Movie Database (TMDb)** v3:

### Endpoints utilizados

```
GET /now_playing    - Películas en cartelera
GET /popular        - Películas populares
GET /top_rated      - Mejor calificadas
GET /upcoming       - Próximas a estrenarse
GET /{movieId}      - Detalles de película
GET /{movieId}/credits - Elenco de película
```

### Configuración

El cliente API se configura en `core/api/moviesApi.ts` con:
- URL base de TMDb
- API Key desde variables de entorno
- Lenguaje por defecto (inglés)

## 📱 Responsive Design

La aplicación está optimizada para:
- Teléfonos móviles (iOS y Android)
- Tablets
- Web (responsive)

Usa **NativeWind** (Tailwind CSS para React Native) para estilos consistentes.

## 🐛 Debugging

### React Query DevTools

Para inspeccionar caché y queries en desarrollo:

```bash
npm start
# Presiona 'j' para abrir el debugger
```

Las devtools mostrarán:
- Estado de queries
- Datos en caché
- Historial de requests

### Logs

Revisa la consola de desarrollo para:
```javascript
console.log(movies.length + ' movies fetched successfully');
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 📚 Recursos Útiles

- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de React Native](https://reactnative.dev/)
- [Documentación de Expo Router](https://expo.github.io/router/)
- [API de The Movie Database](https://www.themoviedb.org/settings/api)
- [NativeWind Documentation](https://nativewind.dev/)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🎓 Aprendizaje

Este proyecto demuestra:
- ✅ Arquitectura limpia en React Native
- ✅ Gestión de estado con React Query
- ✅ Tipado completo con TypeScript
- ✅ Navegación avanzada con Expo Router
- ✅ Consumo de APIs RESTful
- ✅ Mappers y transformación de datos
- ✅ Componentes reutilizables
- ✅ Hooks personalizados
- ✅ Responsive Design
- ✅ Paginación infinita

---

**Hecho con ❤️ usando React Native y Expo**
