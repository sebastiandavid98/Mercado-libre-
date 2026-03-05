# 🚀 GUÍA COLABORATIVA - PORTAFOLIOS DE 4 DESARROLLADORES

## 📊 Estado Actual del Proyecto

### ✅ Ramas Creadas

```
main (rama de producción)
 ↓
develop (rama principal de desarrollo) ← Branch base para todas las features
 ↓
├── feature/portafolio-desarrollador-1 ← Dev 1
├── feature/portafolio-desarrollador-2 ← Dev 2
├── feature/portafolio-desarrollador-3 ← Dev 3
└── feature/portafolio-desarrollador-4 ← Dev 4
```

### 📁 Estructura de Carpetas

```
portafolios-desarrolladores/
├── README.md (guía general)
├── desarrollador-1/
│   ├── index.html
│   └── README.md
├── desarrollador-2/
│   ├── index.html
│   └── README.md
├── desarrollador-3/
│   ├── index.html
│   └── README.md
└── desarrollador-4/
    ├── index.html
    └── README.md
```

---

## 🔄 FLUJO DE TRABAJO PARA CADA DESARROLLADOR

### PASO 1: Cambiar a tu rama feature

```bash
# Desarrollador 1
git checkout feature/portafolio-desarrollador-1

# Desarrollador 2
git checkout feature/portafolio-desarrollador-2

# Desarrollador 3
git checkout feature/portafolio-desarrollador-3

# Desarrollador 4
git checkout feature/portafolio-desarrollador-4
```

### PASO 2: Implementar tu portafolio

Edita los archivos en tu carpeta correspondiente:
- `portafolios-desarrolladores/desarrollador-X/index.html`
- `portafolios-desarrolladores/desarrollador-X/css/styles.css` (crea la carpeta)
- `portafolios-desarrolladores/desarrollador-X/js/script.js` (opcional)

### PASO 3: Hacer commits pequeños y claros

Ejemplo (para Desarrollador 1):

```bash
# Cambiar a tu rama
git checkout feature/portafolio-desarrollador-1

# Commit 1: Avatar
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 1: Agregar foto/avatar"

# Commit 2: Nombre
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 2: Agregar nombre e información personal"

# Commit 3: Descripción
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 3: Agregar descripción profesional"

# Commit 4: Servicios
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 4: Agregar servicios ofrecidos"

# Commit 5: Tecnologías
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 5: Agregar tecnologías que maneja"

# Commit 6: GitHub
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 6: Agregar enlace a GitHub"
```

### PASO 4: Hacer push a tu rama

```bash
git push origin feature/portafolio-desarrollador-1
# (reemplaza con tu número de desarrollador)
```

### PASO 5: Crear Pull Request

1. Ve al repositorio (GitHub/GitLab)
2. Crea un PR desde tu rama feature hacia `develop`
3. Agrega descripción de cambios
4. Solicita revisión
5. Una vez aprobado, haz merge

---

## 📋 CARACTERÍSTICAS QUE DEBE INCLUIR CADA PORTAFOLIO

- ✅ **Foto/Avatar** - Imagen de perfil
- ✅ **Nombre Completo** - Nombre legible
- ✅ **Descripción Profesional** - Breve descripción (3-5 líneas)
- ✅ **Servicios Ofrecidos** - Lista de servicios (mínimo 3)
- ✅ **Tecnologías** - Stack tecnológico que manejas
- ✅ **Enlace a GitHub** - Link a tu perfil de GitHub

---

## 🎯 VENTAJAS DE ESTE FLUJO

| Aspecto | Beneficio |
|---------|-----------|
| **Independencia** | Cada dev trabaja en su rama sin afectar a otros |
| **No conflictos** | Cada uno edita su propia carpeta |
| **Historial limpio** | Commits pequeños y descriptivos |
| **Control de calidad** | PR antes de integrar a develop |
| **Escalabilidad** | Fácil agregar más desarrolladores |

---

## ⚠️ CONSIDERACIONES IMPORTANTES

### Actualizar tu rama con cambios de develop

Si otros desarrolladores mergearon sus PRs y quieres tener sus cambios:

```bash
# Traer cambios de develop
git fetch origin develop
git rebase origin/develop
# o usar merge si prefieres
git merge develop
```

### Resolver conflictos (si es necesario)

Si hay conflictos, Git te lo indicará. Resuelve los conflictos manualmente y luego:

```bash
git add .
git commit -m "Resolver conflictos de merge"
git push origin feature/portafolio-desarrollador-X
```

### Mantener tu rama actualizada antes de PR

```bash
git fetch origin
git rebase origin/develop
git push origin feature/portafolio-desarrollador-X --force-with-lease
```

---

## 📅 TIMELINE SUGERIDO

| Etapa | Descripción | Duración |
|-------|-------------|----------|
| **Inicio** | Configuración de estructura | ✅ Completado |
| **Desarrollo** | Cada dev implementa su portafolio | 1-2 semanas |
| **Revisión** | PR reviews y feedback | 3-5 días |
| **Integración** | Merges a develop | 2-3 días |
| **Deploy** | Merge de develop a main | 1 día |

---

## 🔗 REFERENCIAS ÚTILES

### Comandos Git esenciales

```bash
# Ver status
git status

# Ver ramas
git branch -a

# Cambiar rama
git checkout nombre-rama

# Crear rama
git checkout -b nombre-rama

# Hacer commit
git commit -m "mensaje descriptivo"

# Hacer push
git push origin nombre-rama

# Ver historial
git log --oneline
```

### Recomendaciones de commits

- ✅ Commits frecuentes (1-2 por cambio significativo)
- ✅ Mensajes descriptivos y en español
- ✅ Comenzar con verbo (Agregar, Actualizar, Implementar)
- ✅ Ser específico sobre lo que se cambió

---

## 📞 SOPORTE

Cualquier duda sobre el flujo de trabajo:
1. Revisa el README.md en la carpeta de tu desarrollador
2. Consulta la documentación general en `portafolios-desarrolladores/README.md`
3. Comunica con el equipo de liderazgo

---

**Proyecto:** Mercado Libre Clone - Portafolios de Desarrolladores
**Fecha de Inicio:** 5 de Marzo de 2026
**Estado:** Sistema configurado y listo para uso
