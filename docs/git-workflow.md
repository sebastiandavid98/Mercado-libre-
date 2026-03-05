# Flujo de Trabajo Git - MercadoLibre Clone

## Configuración Inicial del Proyecto

### 1. Inicialización del Repositorio
```bash
# Crear repositorio
git init
git add .
git commit -m "feat: estructura inicial del proyecto"

# Configurar repositorio remoto
git remote add origin [URL_DEL_REPOSITORIO]
git push -u origin main
```

### 2. Configurar GitFlow
```bash
# Instalar git-flow (si no está instalado)
# Windows: choco install gitflow-avh
# Mac: brew install git-flow-avh
# Linux: apt-get install git-flow

# Inicializar GitFlow
git flow init
# Usar configuración por defecto:
# - Branch de producción: main
# - Branch de desarrollo: develop
```

## Estructura de Ramas

```
main (producción)
│
└── develop (desarrollo)
    │
    ├── feature/navbar
    ├── feature/product-search
    ├── feature/product-list
    ├── feature/services
    ├── feature/ui-styles
    ├── feature/js-interactions
    └── feature/dev-portfolio
        ├── feature/portafolio-dev1
        ├── feature/portafolio-dev2
        ├── feature/portafolio-dev3
        └── feature/portafolio-dev4
```

## Flujo de Trabajo por Desarrollador

### Paso 1: Crear Rama Feature
```bash
# Asegurarse de estar en develop
git checkout develop
git pull origin develop

# Crear nueva feature branch
git flow feature start portafolio-dev1
# Esto crea y cambia a: feature/portafolio-dev1
```

### Paso 2: Desarrollar Funcionalidad
```bash
# Hacer cambios en el código
# Commits pequeños y descriptivos

git add .
git commit -m "feat: crea estructura del portafolio dev1"

git add css/portfolio.css
git commit -m "style: agrega estilos CSS a tarjeta de portafolio"

git add index.html
git commit -m "feat: agrega sección de servicios al portafolio"
```

### Paso 3: Finalizar Feature
```bash
# Finalizar feature (merge a develop)
git flow feature finish portafolio-dev1

# O manualmente:
git checkout develop
git merge feature/portafolio-dev1
git branch -d feature/portafolio-dev1
```

### Paso 4: Push y Pull Request
```bash
# Subir cambios
git push origin develop

# Crear Pull Request en GitHub/GitLab
# De: feature/portafolio-dev1
# Hacia: develop
```

## Convenciones de Commits

### Formato
```
tipo(scope): descripción

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato/estilo
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos
```bash
feat: agrega navbar responsivo
fix: corrige alineación de productos en mobile
style: mejora espaciado en tarjetas de desarrolladores
docs: actualiza README con instrucciones de instalación
refactor: optimiza función de búsqueda
```

## Plantilla de Portafolio Individual

Cada desarrollador debe crear su portafolio siguiendo esta estructura:

```html
<!-- Agregar dentro de .developers-grid -->
<div class="developer-card">
    <img src="images/developers/dev1.jpg" alt="Desarrollador 1" class="developer-avatar">
    <h3 class="developer-name">[Tu Nombre]</h3>
    <p class="developer-description">
        [Descripción profesional breve]
    </p>
    
    <div class="developer-services">
        <h4>Servicios</h4>
        <div class="services-list">
            <span class="service-tag">Desarrollo Web</span>
            <span class="service-tag">UI/UX Design</span>
            <span class="service-tag">Consultoría</span>
        </div>
    </div>
    
    <div class="developer-technologies">
        <h4>Tecnologías</h4>
        <div class="tech-list">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">CSS</span>
        </div>
    </div>
    
    <a href="https://github.com/[tu-usuario]" class="github-link" target="_blank">
        Ver GitHub
    </a>
</div>
```

## Proceso de Code Review

### Checklist para Pull Requests
- [ ] Código sigue las convenciones del proyecto
- [ ] Funcionalidad implementada correctamente
- [ ] Responsive design funciona en mobile
- [ ] No hay errores de consola
- [ ] Commits son descriptivos y atómicos
- [ ] Documentación actualizada si es necesario

### Comandos para Revisión
```bash
# Ver cambios en el PR
git diff develop..feature/portafolio-dev1

# Probar la rama localmente
git checkout feature/portafolio-dev1
git pull origin feature/portafolio-dev1

# Volver a develop después de revisar
git checkout develop
```

## Release y Despliegue

### Crear Release
```bash
# Crear release branch
git flow release start v1.0.0

# Hacer ajustes finales si es necesario
git add .
git commit -m "chore: prepara release v1.0.0"

# Finalizar release
git flow release finish v1.0.0
# Esto hace merge a main y develop, y crea un tag
```

### Despliegue
```bash
# Subir todo
git push origin main
git push origin develop
git push --tags

# El despliegue automático se activará en GitHub Pages/Vercel
```

## Comandos Útiles

```bash
# Ver estado de ramas
git branch -a

# Ver log de commits
git log --oneline --graph

# Ver diferencias
git diff

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Limpiar archivos no trackeados
git clean -fd

# Ver archivos modificados
git status

# Agregar archivos específicos
git add archivo1.html archivo2.css

# Commit con mensaje largo
git commit -m "feat: agrega portafolio desarrollador

- Estructura HTML del portafolio
- Estilos CSS responsivos
- Integración con grid principal"
```

## Resolución de Conflictos

```bash
# Si hay conflictos al hacer merge
git status  # Ver archivos en conflicto

# Editar archivos manualmente para resolver conflictos
# Buscar marcadores: <<<<<<< ======= >>>>>>>

# Después de resolver
git add archivo-resuelto.html
git commit -m "fix: resuelve conflictos de merge"
```

## Buenas Prácticas

1. **Commits frecuentes**: Hacer commits pequeños y frecuentes
2. **Mensajes descriptivos**: Explicar qué y por qué, no cómo
3. **Revisar antes de commit**: `git diff --staged`
4. **Mantener develop actualizado**: `git pull origin develop` antes de crear features
5. **Probar antes de PR**: Verificar que todo funciona localmente
6. **Code review constructivo**: Comentarios útiles y respetuosos
7. **Documentar cambios importantes**: Actualizar README si es necesario