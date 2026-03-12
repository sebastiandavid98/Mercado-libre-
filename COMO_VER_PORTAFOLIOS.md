# 🔍 Cómo Ver los Portafolios Creados

## 📍 Ubicación de los Portafolios

Los portafolios están en el archivo **`index.html`** dentro de cada rama feature.

---

## 🌐 Opción 1: Ver en el Navegador (LOCAL)

### Portafolio de David Esteban:

```bash
# 1. Cambiar a la rama
git checkout feature/portafolio-dev2

# 2. Abrir el archivo en el navegador
# En Windows:
start index.html
# O simplemente haz doble clic en index.html
```

### Portafolio de Jhon Molina:

```bash
# 1. Cambiar a la rama
git checkout feature/portafolio-dev3

# 2. Abrir el archivo en el navegador
start index.html
```

### Portafolio de Ejemplo (Juan Pérez):

```bash
git checkout feature/portafolio-dev1
start index.html
```

---

## 💻 Opción 2: Ver en GitHub

### David Esteban (Dev2):
1. Ve a: https://github.com/sebastiandavid98/Mercado-libre-/tree/feature/portafolio-dev2
2. Click en `index.html`
3. Busca la línea ~90 donde está su portafolio

### Jhon Molina (Dev3):
1. Ve a: https://github.com/sebastiandavid98/Mercado-libre-/tree/feature/portafolio-dev3
2. Click en `index.html`
3. Busca la línea ~90 donde está su portafolio

---

## 📂 Opción 3: Ver en VS Code

1. Abre VS Code en la carpeta del proyecto
2. Cambia de rama usando el selector de ramas (abajo a la izquierda)
3. Abre `index.html`
4. Busca la sección `<!-- Portafolio de Desarrolladores -->`
5. Click derecho → "Open with Live Server" (si tienes la extensión)

---

## 🎨 Qué Verás en Cada Portafolio

### David Esteban:
```
┌─────────────────────────────────┐
│         [Imagen DE]             │
│                                 │
│      David Esteban              │
│                                 │
│  Desarrollador Frontend...      │
│                                 │
│  Servicios Ofrecidos:           │
│  • Desarrollo Frontend          │
│  • Diseño Web                   │
│  • Responsive Design            │
│  • Optimización Web             │
│                                 │
│  Tecnologías:                   │
│  HTML5 CSS3 JavaScript          │
│  React Bootstrap Git            │
│                                 │
│  [⭐ Ver mi GitHub]             │
└─────────────────────────────────┘
```

### Jhon Molina:
```
┌─────────────────────────────────┐
│         [Imagen JM]             │
│                                 │
│      Jhon Molina                │
│                                 │
│  Desarrollador Backend...       │
│                                 │
│  Servicios Ofrecidos:           │
│  • Desarrollo Backend           │
│  • API REST                     │
│  • Bases de Datos               │
│  • Integración de Servicios     │
│                                 │
│  Tecnologías:                   │
│  Node.js Express MongoDB        │
│  MySQL JavaScript Git           │
│                                 │
│  [⭐ Ver mi GitHub]             │
└─────────────────────────────────┘
```

---

## 🔍 Ubicación Exacta en el Código

Los portafolios están en `index.html` entre las líneas **88-125** aproximadamente:

```html
<!-- Portafolio de Desarrolladores -->
<section id="desarrolladores" class="developers-portfolio">
    <div class="container">
        <h2>Nuestro Equipo de Desarrollo</h2>
        <div class="developers-grid">
            <!-- AQUÍ ESTÁ EL PORTAFOLIO -->
            <div class="developer-card">
                <img src="..." alt="..." class="developer-avatar">
                <h3 class="developer-name">Nombre</h3>
                <p class="developer-description">...</p>
                <!-- etc -->
            </div>
        </div>
    </div>
</section>
```

---

## 🎯 Comandos Rápidos para Ver Cada Portafolio

### Ver David Esteban:
```bash
git checkout feature/portafolio-dev2
start index.html
```

### Ver Jhon Molina:
```bash
git checkout feature/portafolio-dev3
start index.html
```

### Ver todos los archivos de una rama:
```bash
git checkout feature/portafolio-dev2
dir
# Verás: index.html, css/, js/, images/, etc.
```

---

## 📸 Ver en GitHub (Vista Previa)

### URLs Directas al Código:

**David Esteban:**
```
https://github.com/sebastiandavid98/Mercado-libre-/blob/feature/portafolio-dev2/index.html
```

**Jhon Molina:**
```
https://github.com/sebastiandavid98/Mercado-libre-/blob/feature/portafolio-dev3/index.html
```

---

## 🚀 Ver Todos Juntos (Después del Merge)

Cuando hagas merge de todos los PRs a `develop`, podrás ver todos los portafolios juntos:

```bash
git checkout develop
git pull origin develop
start index.html
```

Y verás los 4 portafolios en una sola página (cuando David Salas complete el suyo).

---

## 💡 Tip: Usar Live Server

Si tienes VS Code con la extensión "Live Server":

1. Abre el proyecto en VS Code
2. Cambia a la rama que quieres ver
3. Click derecho en `index.html`
4. "Open with Live Server"
5. Se abrirá en el navegador con auto-refresh

---

## 📋 Resumen de Ubicaciones

| Desarrollador | Rama | Archivo | Línea Aprox |
|--------------|------|---------|-------------|
| David Esteban | `feature/portafolio-dev2` | `index.html` | 88-125 |
| Jhon Molina | `feature/portafolio-dev3` | `index.html` | 88-125 |
| Juan Pérez (ejemplo) | `feature/portafolio-dev1` | `index.html` | 88-125 |
| David Salas | `feature/portafolio-dev4` | Pendiente | - |

---

## ✅ Verificar que Todo Está Bien

```bash
# Ver todas las ramas
git branch -a

# Ver commits de una rama
git checkout feature/portafolio-dev2
git log --oneline

# Ver diferencias con develop
git diff develop..feature/portafolio-dev2
```

¡Ahora puedes ver todos los portafolios! 🎉