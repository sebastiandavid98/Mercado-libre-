# Clon MercadoLibre - Taller Colaborativo

## Descripción del Proyecto
Clon inicial de MercadoLibre desarrollado colaborativamente por un equipo de 4 desarrolladores utilizando GitFlow.

## Estructura del Proyecto
```
mercadolibre-clone/
├── index.html
├── css/
│   ├── styles.css
│   ├── navbar.css
│   ├── products.css
│   └── portfolio.css
├── js/
│   ├── main.js
│   └── search.js
├── images/
│   └── developers/
└── docs/
    └── git-workflow.md
```

## Funcionalidades
- ✅ Navbar responsivo
- ✅ Buscador de productos
- ✅ Sección de productos destacados
- ✅ Sección de servicios
- ✅ Portafolios de desarrolladores
- ✅ Footer

## Equipo de Desarrollo
- **Dev 1**: [Nombre] - Portafolio en `feature/portafolio-dev1`
- **Dev 2**: [Nombre] - Portafolio en `feature/portafolio-dev2`
- **Dev 3**: [Nombre] - Portafolio en `feature/portafolio-dev3`
- **Dev 4**: [Nombre] - Portafolio en `feature/portafolio-dev4`

## Flujo de Trabajo Git
1. Crear rama feature desde develop
2. Desarrollar funcionalidad
3. Commits pequeños y descriptivos
4. Pull Request hacia develop
5. Code review del equipo
6. Merge después de aprobación

## Comandos Git Útiles
```bash
# Inicializar GitFlow
git flow init

# Crear feature branch
git flow feature start portafolio-dev1

# Finalizar feature
git flow feature finish portafolio-dev1

# Crear release
git flow release start v1.0.0
git flow release finish v1.0.0
```

## Despliegue
- GitHub Pages: [URL pendiente]
- Vercel: [URL pendiente]