# 📸 Cómo Agregar las Fotos de los Desarrolladores

## 🎯 Objetivo
Agregar las fotos reales de los 4 desarrolladores al proyecto.

---

## 📁 Ubicación de las Fotos

Las fotos deben ir en la carpeta:
```
images/developers/
```

---

## 📋 Nombres de Archivos Requeridos

| Desarrollador | Nombre del Archivo | Tamaño Recomendado |
|--------------|-------------------|-------------------|
| Desarrollador 1 | `dev1.jpg` | 300x300px |
| David Esteban | `dev2.jpg` | 300x300px |
| Jhon Molina | `dev3.jpg` | 300x300px |
| David Salas | `dev4.jpg` | 300x300px |

---

## 🔧 Pasos para Agregar las Fotos

### Opción 1: Copiar Manualmente

1. **Prepara tus fotos:**
   - Formato: JPG o PNG
   - Tamaño: 300x300px (cuadradas)
   - Nombres: dev1.jpg, dev2.jpg, dev3.jpg, dev4.jpg

2. **Copia las fotos:**
   ```
   Copia tus fotos a:
   C:\Users\Inge_Heidy\Desktop\taller mercado libre\images\developers\
   ```

3. **Verifica que estén:**
   ```bash
   dir images\developers
   # Deberías ver: dev1.jpg, dev2.jpg, dev3.jpg, dev4.jpg
   ```

### Opción 2: Desde la Terminal

```bash
# Si tus fotos están en otra carpeta, cópialas:
copy "C:\ruta\a\tu\foto1.jpg" "images\developers\dev1.jpg"
copy "C:\ruta\a\tu\foto2.jpg" "images\developers\dev2.jpg"
copy "C:\ruta\a\tu\foto3.jpg" "images\developers\dev3.jpg"
copy "C:\ruta\a\tu\foto4.jpg" "images\developers\dev4.jpg"
```

---

## 🎨 Optimizar las Fotos (Opcional)

Si tus fotos son muy grandes, puedes optimizarlas:

### Online (Gratis):
1. Ve a: https://tinypng.com/
2. Sube tu foto
3. Descarga la versión optimizada
4. Renombra a dev1.jpg, dev2.jpg, etc.

### Con Paint (Windows):
1. Abre la foto en Paint
2. Redimensionar → 300x300 píxeles
3. Guardar como → dev1.jpg

---

## ✅ Verificar que Funcionan

Después de agregar las fotos:

```bash
# 1. Abrir la página
start index.html

# 2. Scroll hasta "Nuestro Equipo de Desarrollo"

# 3. Deberías ver las 4 fotos reales
```

---

## 🔄 Hacer Commit de las Fotos

Una vez agregadas las fotos:

```bash
# 1. Ver qué archivos agregaste
git status

# 2. Agregar las fotos
git add images/developers/dev1.jpg
git add images/developers/dev2.jpg
git add images/developers/dev3.jpg
git add images/developers/dev4.jpg

# O agregar todas a la vez:
git add images/developers/*.jpg

# 3. Hacer commit
git commit -m "feat: agrega fotos de los 4 desarrolladores"

# 4. Subir a GitHub
git push origin develop
```

---

## 🚨 Si No Tienes las Fotos Ahora

**No hay problema!** El código ya tiene placeholders (imágenes temporales).

Las fotos se mostrarán así:
- Si existe dev1.jpg → Muestra la foto real
- Si NO existe dev1.jpg → Muestra un placeholder con las iniciales

Puedes agregar las fotos después y hacer otro commit.

---

## 📸 Recomendaciones para las Fotos

### ✅ Buenas Prácticas:
- Foto profesional o semi-profesional
- Fondo neutro o uniforme
- Buena iluminación
- Cara visible y centrada
- Formato cuadrado (1:1)

### ❌ Evitar:
- Fotos borrosas
- Fotos muy oscuras
- Fotos con mucho fondo
- Fotos horizontales o verticales (usar cuadradas)

---

## 🎯 Formato Ideal

```
Tamaño: 300x300px
Formato: JPG (más ligero) o PNG (mejor calidad)
Peso: Menos de 200KB
Aspecto: Cuadrado (1:1)
```

---

## 💡 Alternativas si No Tienes Foto

### 1. Usar Avatar de GitHub:
```
https://github.com/[tu-usuario].png
```

### 2. Crear Avatar con Iniciales:
- https://ui-avatars.com/
- Ejemplo: https://ui-avatars.com/api/?name=David+Esteban&size=300

### 3. Usar Placeholder Temporal:
El código ya tiene placeholders automáticos con las iniciales.

---

## 🔍 Verificar las Fotos en el Código

Las fotos están referenciadas en `index.html` línea ~95:

```html
<img src="images/developers/dev1.jpg" alt="Desarrollador 1" class="developer-avatar">
<img src="images/developers/dev2.jpg" alt="David Esteban" class="developer-avatar">
<img src="images/developers/dev3.jpg" alt="Jhon Molina" class="developer-avatar">
<img src="images/developers/dev4.jpg" alt="David Salas" class="developer-avatar">
```

---

## 📊 Estado Actual

```
images/developers/
├── .gitkeep (archivo de marcador)
├── dev1-info.txt (información)
├── dev2-info.txt (información)
├── dev3-info.txt (información)
└── [AQUÍ VAN LAS FOTOS]
    ├── dev1.jpg (pendiente)
    ├── dev2.jpg (pendiente)
    ├── dev3.jpg (pendiente)
    └── dev4.jpg (pendiente)
```

---

## 🚀 Resumen Rápido

1. **Prepara 4 fotos** (300x300px, formato JPG)
2. **Renombra** a dev1.jpg, dev2.jpg, dev3.jpg, dev4.jpg
3. **Copia** a `images/developers/`
4. **Verifica** abriendo index.html
5. **Commit** y push a GitHub

**¡Listo! Las fotos aparecerán en la página.** 📸✨