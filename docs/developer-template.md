# Plantilla de Portafolio para Desarrolladores

## Instrucciones para Cada Desarrollador

Cada integrante del equipo debe seguir estos pasos para agregar su portafolio al proyecto:

### 1. Crear Rama Feature
```bash
git checkout develop
git pull origin develop
git flow feature start portafolio-dev[X]  # Reemplazar X con tu número
```

### 2. Agregar tu Imagen
- Crear carpeta `images/developers/` si no existe
- Agregar tu foto como `dev[X].jpg` (ej: `dev1.jpg`)
- Tamaño recomendado: 300x300px
- Formato: JPG o PNG

### 3. Código HTML para tu Portafolio

Reemplazar el `<div class="developer-placeholder">` en `index.html` con:

```html
<div class="developer-card">
    <img src="images/developers/dev1.jpg" alt="[Tu Nombre]" class="developer-avatar">
    <h3 class="developer-name">[Tu Nombre Completo]</h3>
    <p class="developer-description">
        [Escribe una descripción profesional de 2-3 líneas sobre ti, 
        tu experiencia y lo que te apasiona del desarrollo]
    </p>
    
    <div class="developer-services">
        <h4>Servicios Ofrecidos</h4>
        <div class="services-list">
            <span class="service-tag">Desarrollo Frontend</span>
            <span class="service-tag">Desarrollo Backend</span>
            <span class="service-tag">UI/UX Design</span>
            <span class="service-tag">Consultoría Tech</span>
            <!-- Agrega/modifica según tus servicios -->
        </div>
    </div>
    
    <div class="developer-technologies">
        <h4>Tecnologías que Manejo</h4>
        <div class="tech-list">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">CSS/SASS</span>
            <span class="tech-tag">Git</span>
            <!-- Agrega tus tecnologías reales -->
        </div>
    </div>
    
    <a href="https://github.com/[tu-usuario-github]" class="github-link" target="_blank">
        Ver mi GitHub
    </a>
</div>
```

### 4. Personalización Requerida

Debes personalizar estos elementos:

#### Información Personal
- **Nombre**: Tu nombre completo
- **Foto**: Tu imagen profesional
- **Descripción**: 2-3 líneas sobre tu perfil profesional
- **GitHub**: Tu usuario real de GitHub

#### Servicios (Elige los que ofreces)
- Desarrollo Frontend
- Desarrollo Backend  
- Desarrollo Full Stack
- UI/UX Design
- Desarrollo Mobile
- DevOps
- Consultoría Técnica
- Mentoring
- Testing/QA

#### Tecnologías (Agrega las que realmente manejas)
**Frontend:**
- HTML5, CSS3, JavaScript
- React, Vue.js, Angular
- SASS, Tailwind CSS
- Bootstrap

**Backend:**
- Node.js, Express
- Python, Django, Flask
- PHP, Laravel
- Java, Spring Boot
- C#, .NET

**Bases de Datos:**
- MySQL, PostgreSQL
- MongoDB, Firebase
- Redis

**Herramientas:**
- Git, GitHub
- Docker
- AWS, Azure
- Figma, Adobe XD

### 5. Ejemplo Completo

```html
<div class="developer-card">
    <img src="images/developers/dev1.jpg" alt="María González" class="developer-avatar">
    <h3 class="developer-name">María González</h3>
    <p class="developer-description">
        Desarrolladora Full Stack con 3 años de experiencia creando aplicaciones web modernas. 
        Apasionada por el código limpio y las mejores prácticas de desarrollo.
    </p>
    
    <div class="developer-services">
        <h4>Servicios Ofrecidos</h4>
        <div class="services-list">
            <span class="service-tag">Desarrollo Full Stack</span>
            <span class="service-tag">API REST</span>
            <span class="service-tag">UI/UX Design</span>
            <span class="service-tag">Mentoring</span>
        </div>
    </div>
    
    <div class="developer-technologies">
        <h4>Tecnologías que Manejo</h4>
        <div class="tech-list">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">CSS/SASS</span>
            <span class="tech-tag">Git</span>
        </div>
    </div>
    
    <a href="https://github.com/mariagonzalez" class="github-link" target="_blank">
        Ver mi GitHub
    </a>
</div>
```

### 6. Commits Recomendados

Hacer commits separados para cada cambio:

```bash
# Agregar estructura
git add index.html
git commit -m "feat: crea estructura del portafolio de [Tu Nombre]"

# Agregar imagen
git add images/developers/dev1.jpg
git commit -m "feat: agrega foto de perfil de [Tu Nombre]"

# Personalizar servicios
git add index.html
git commit -m "feat: agrega servicios ofrecidos por [Tu Nombre]"

# Personalizar tecnologías
git add index.html
git commit -m "feat: agrega tecnologías manejadas por [Tu Nombre]"

# Agregar enlace GitHub
git add index.html
git commit -m "feat: agrega enlace a GitHub de [Tu Nombre]"
```

### 7. Finalizar y Crear PR

```bash
# Finalizar feature
git flow feature finish portafolio-dev1

# Push a develop
git push origin develop

# Crear Pull Request en GitHub
# Título: "feat: agrega portafolio de [Tu Nombre]"
# Descripción: Breve descripción de lo que agregaste
```

### 8. Checklist antes del PR

- [ ] Imagen agregada en `images/developers/`
- [ ] HTML personalizado con tu información real
- [ ] Servicios reflejan lo que realmente ofreces
- [ ] Tecnologías son las que realmente manejas
- [ ] Enlace de GitHub es correcto y funciona
- [ ] Commits son descriptivos y separados por funcionalidad
- [ ] Código probado localmente (abrir `index.html` en navegador)

### 9. Después del Merge

Una vez que tu PR sea aprobado y mergeado:

```bash
# Actualizar tu rama local
git checkout develop
git pull origin develop

# Tu portafolio ya está integrado en el proyecto principal
```

## Consejos Adicionales

1. **Sé auténtico**: Usa información real sobre ti
2. **Mantén profesionalismo**: Descripción clara y concisa
3. **Actualiza tu GitHub**: Asegúrate de que tu perfil esté actualizado
4. **Prueba localmente**: Verifica que todo se vea bien antes del PR
5. **Colabora**: Ayuda a revisar los PRs de tus compañeros

## Recursos Útiles

- [Cómo escribir un buen README](https://github.com/matiassingers/awesome-readme)
- [Guía de commits convencionales](https://www.conventionalcommits.org/)
- [Mejores prácticas de Git](https://git-scm.com/book/en/v2)
- [Optimización de imágenes online](https://tinypng.com/)