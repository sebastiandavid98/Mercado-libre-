# Portafolios de Desarrolladores - Mercado Libre Clone

## 📋 Estructura del Proyecto

Este proyecto contiene los portafolios profesionales de 4 desarrolladores que trabajan de forma colaborativa usando Git Flow.

```
portafolios-desarrolladores/
├── desarrollador-1/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── README.md
├── desarrollador-2/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── README.md
├── desarrollador-3/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── README.md
└── desarrollador-4/
    ├── index.html
    ├── css/
    ├── js/
    └── README.md
```

## 🔄 Flujo de Trabajo Git

### Ramas Disponibles

- **main** - Rama de producción (código estable)
- **develop** - Rama de desarrollo principal
- **feature/portafolio-desarrollador-1** - Rama privada del Desarrollador 1
- **feature/portafolio-desarrollador-2** - Rama privada del Desarrollador 2
- **feature/portafolio-desarrollador-3** - Rama privada del Desarrollador 3
- **feature/portafolio-desarrollador-4** - Rama privada del Desarrollador 4

### Proceso de Desarrollo

#### 1. Clonar el repositorio
```bash
git clone <repositorio-url>
cd Mercado-libre-
```

#### 2. Cambiar a tu rama de desarrollo
```bash
# Para Desarrollador 1
git checkout feature/portafolio-desarrollador-1

# Para Desarrollador 2
git checkout feature/portafolio-desarrollador-2

# Y así sucesivamente...
```

#### 3. Crear tu portafolio

Cada desarrollador debe trabajar en su carpeta correspondiente:
- **Desarrollador 1** → `portafolios-desarrolladores/desarrollador-1/`
- **Desarrollador 2** → `portafolios-desarrolladores/desarrollador-2/`
- **Desarrollador 3** → `portafolios-desarrolladores/desarrollador-3/`
- **Desarrollador 4** → `portafolios-desarrolladores/desarrollador-4/`

#### 4. Realizar commits pequeños y claros

Cada cambio debe incluir:
- Foto/avatar
- Nombre completo
- Descripción profesional
- Servicios ofrecidos
- Tecnologías que maneja
- Enlace a GitHub

**Ejemplo de commits:**
```bash
git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 1: Agregar estructura base y avatar"

git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 2: Agregar nombre e información personal"

git add portafolios-desarrolladores/desarrollador-1/css/styles.css
git commit -m "Commit 3: Agregar estilos del portafolio"

git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 4: Agregar descripción profesional y servicios"

git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 5: Agregar tecnologías que maneja"

git add portafolios-desarrolladores/desarrollador-1/index.html
git commit -m "Commit 6: Agregar enlace a GitHub"
```

#### 5. Push a tu rama feature
```bash
git push origin feature/portafolio-desarrollador-1
```

#### 6. Crear un Pull Request (PR)
1. Ir al repositorio en GitHub/GitLab
2. Hacer clic en "Pull Requests" / "Merge Requests"
3. Seleccionar tu rama feature y merge hacia **develop**
4. Agregar descripción explicando los cambios
5. Esperar revisión y aprobación
6. Hacer merge a develop

## 📝 Guía de Contenido del Portafolio

Cada portafolio debe incluir:

### Estructura HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio - [Nombre Desarrollador]</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Contenido aquí -->
</body>
</html>
```

### Secciones Recomendadas
1. **Header/Navbar** - Navegación
2. **Hero Section** - Presentación con avatar
3. **Información Personal** - Nombre y descripción
4. **Servicios** - Qué servicios ofreces
5. **Tecnologías** - Stack tecnológico
6. **Contacto/GitHub** - Links de contacto

## 🎯 Consideraciones Importantes

- ✅ Cada desarrollador trabaja en su rama feature de forma independiente
- ✅ Los cambios no interfieren con otras ramas
- ✅ Usa commits claros y descriptivos
- ✅ Prueba tu código antes de hacer push
- ✅ Espera aprobación del PR antes de hacer merge
- ✅ Mantén tu rama actualizada con develop

## 🚀 Merge a Main (Solo después de integración total)

Una vez que todos los portafolios estén integrados en develop:

```bash
git checkout main
git merge develop
git push origin main
```

---

**Última actualización:** 5 de Marzo de 2026
