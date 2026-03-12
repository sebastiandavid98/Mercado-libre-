# 🔍 Entender: Commits vs Contenido de la Página

## ❓ Tu Pregunta
"Los commits de mis compañeros deben aparecer en la página, ¿verdad? Porque no aparecen"

## ✅ Respuesta Corta
**NO**, los commits NO aparecen en la página web. Los commits son el historial de Git, no contenido visual.

---

## 📊 Diferencias Clave

### 1️⃣ COMMITS (Historial de Git)
```
✅ Se ven con: git log
✅ Están en: GitHub (pestaña Commits)
❌ NO aparecen en: La página web (index.html)
```

**Ejemplo de commits de David Esteban:**
```
782983b docs: agrega información de imagen para David Esteban
1181cc4 feat: crea estructura del portafolio de David Esteban
```

### 2️⃣ CONTENIDO DE LA PÁGINA (Lo que se ve en el navegador)
```
✅ Se ve en: El navegador (Chrome, Firefox, etc)
✅ Está en: index.html
✅ Aparece: Cuando abres index.html
```

**Ejemplo del portafolio de David Esteban:**
```html
<div class="developer-card">
    <h3>David Esteban</h3>
    <p>Desarrollador Frontend...</p>
    <!-- Esto SÍ aparece en la página -->
</div>
```

---

## 🎯 Cómo Ver los Commits de tus Compañeros

### Opción 1: En la Terminal (Git Log)

```bash
# Ver commits de David Esteban
git checkout feature/portafolio-dev2
git log --oneline

# Resultado:
# 782983b docs: agrega información de imagen para David Esteban
# 1181cc4 feat: crea estructura del portafolio de David Esteban
```

```bash
# Ver commits de Jhon Molina
git checkout feature/portafolio-dev3
git log --oneline

# Resultado:
# 41de915 docs: agrega información de imagen para Jhon Molina
# 8e3e1f1 feat: crea estructura del portafolio de Jhon Molina
```

### Opción 2: En GitHub (Interfaz Web)

**David Esteban:**
1. Ve a: https://github.com/sebastiandavid98/Mercado-libre-/commits/feature/portafolio-dev2
2. Verás todos sus commits con fechas y descripciones

**Jhon Molina:**
1. Ve a: https://github.com/sebastiandavid98/Mercado-libre-/commits/feature/portafolio-dev3
2. Verás todos sus commits con fechas y descripciones

### Opción 3: Ver Todos los Commits Juntos

```bash
git log --all --oneline --graph
```

---

## 🌐 Cómo Ver el PORTAFOLIO en la Página

### David Esteban:
```bash
git checkout feature/portafolio-dev2
start index.html
# Se abre el navegador
# Scroll hasta "Nuestro Equipo de Desarrollo"
# Verás su tarjeta con nombre, servicios, tecnologías
```

### Jhon Molina:
```bash
git checkout feature/portafolio-dev3
start index.html
# Se abre el navegador
# Scroll hasta "Nuestro Equipo de Desarrollo"
# Verás su tarjeta con nombre, servicios, tecnologías
```

---

## 📋 Resumen de Commits Actuales

### David Esteban (feature/portafolio-dev2):
| Commit | Mensaje |
|--------|---------|
| 782983b | docs: agrega información de imagen para David Esteban |
| 1181cc4 | feat: crea estructura del portafolio de David Esteban |

### Jhon Molina (feature/portafolio-dev3):
| Commit | Mensaje |
|--------|---------|
| 41de915 | docs: agrega información de imagen para Jhon Molina |
| 8e3e1f1 | feat: crea estructura del portafolio de Jhon Molina |

---

## 🎨 Lo que SÍ Aparece en la Página

Cuando abres `index.html` en el navegador, verás:

### Sección de David Esteban:
```
┌─────────────────────────────────┐
│    [Imagen con iniciales DE]    │
│                                 │
│      David Esteban              │
│                                 │
│  Desarrollador Frontend         │
│  apasionado por crear...        │
│                                 │
│  Servicios Ofrecidos:           │
│  [Desarrollo Frontend]          │
│  [Diseño Web]                   │
│  [Responsive Design]            │
│  [Optimización Web]             │
│                                 │
│  Tecnologías que Manejo:        │
│  [HTML5] [CSS3] [JavaScript]    │
│  [React] [Bootstrap] [Git]      │
│                                 │
│  [⭐ Ver mi GitHub]             │
└─────────────────────────────────┘
```

---

## 🔄 Flujo Completo

### 1. Tu compañero hace cambios:
```bash
# Edita index.html
git add index.html
git commit -m "feat: agrega mi portafolio"
git push origin feature/portafolio-dev2
```

### 2. Los commits se guardan en Git:
- ✅ Visible en: `git log`
- ✅ Visible en: GitHub (pestaña Commits)
- ❌ NO visible en: La página web

### 3. El contenido se guarda en index.html:
- ✅ Visible en: El navegador
- ✅ Visible en: Cuando abres index.html
- ✅ Visible en: La página web desplegada

---

## 💡 Analogía para Entender

Imagina un libro:

**COMMITS = Historial de ediciones**
- "Capítulo 1 escrito - 10/03/2024"
- "Capítulo 2 revisado - 11/03/2024"
- Este historial NO aparece en el libro final

**CONTENIDO = Lo que lees en el libro**
- El texto del Capítulo 1
- El texto del Capítulo 2
- Esto SÍ aparece cuando lees el libro

---

## 🚀 Comandos Útiles

### Ver commits de una rama:
```bash
git checkout feature/portafolio-dev2
git log --oneline
```

### Ver commits con más detalle:
```bash
git log --pretty=format:"%h - %an, %ar : %s"
```

### Ver qué cambió en un commit:
```bash
git show 1181cc4
```

### Ver todos los commits de todas las ramas:
```bash
git log --all --graph --oneline
```

---

## ✅ Verificación

### Para verificar que los commits existen:
```bash
# David Esteban
git checkout feature/portafolio-dev2
git log --oneline
# Deberías ver 2 commits

# Jhon Molina
git checkout feature/portafolio-dev3
git log --oneline
# Deberías ver 2 commits
```

### Para verificar que el contenido existe:
```bash
# David Esteban
git checkout feature/portafolio-dev2
start index.html
# Deberías ver su portafolio en el navegador

# Jhon Molina
git checkout feature/portafolio-dev3
start index.html
# Deberías ver su portafolio en el navegador
```

---

## 🎯 Conclusión

- ✅ Los commits SÍ existen (en Git/GitHub)
- ✅ Los portafolios SÍ existen (en index.html)
- ❌ Los commits NO aparecen en la página web
- ✅ Los portafolios SÍ aparecen en la página web

**Los commits son el historial de CÓMO se creó el contenido.**
**El contenido es lo que REALMENTE se ve en la página.**

Ambos existen, pero en lugares diferentes! 🎉