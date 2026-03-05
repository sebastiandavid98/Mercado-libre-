# Instrucciones para David Salas (Dev 4)

Hola David! Esta es tu rama para agregar tu portafolio al proyecto.

## Pasos a seguir:

### 1. Asegúrate de estar en tu rama
```bash
git checkout feature/portafolio-dev4
```

### 2. Edita el archivo `index.html`

Busca la sección de desarrolladores (línea ~90) y reemplaza el placeholder con tu información:

```html
<div class="developer-card">
    <img src="https://via.placeholder.com/120x120/3483fa/ffffff?text=DS" alt="David Salas" class="developer-avatar">
    <h3 class="developer-name">David Salas</h3>
    <p class="developer-description">
        [Escribe aquí tu descripción profesional de 2-3 líneas]
    </p>
    
    <div class="developer-services">
        <h4>Servicios Ofrecidos</h4>
        <div class="services-list">
            <span class="service-tag">[Tu Servicio 1]</span>
            <span class="service-tag">[Tu Servicio 2]</span>
            <span class="service-tag">[Tu Servicio 3]</span>
        </div>
    </div>
    
    <div class="developer-technologies">
        <h4>Tecnologías que Manejo</h4>
        <div class="tech-list">
            <span class="tech-tag">[Tecnología 1]</span>
            <span class="tech-tag">[Tecnología 2]</span>
            <span class="tech-tag">[Tecnología 3]</span>
            <span class="tech-tag">[Tecnología 4]</span>
        </div>
    </div>
    
    <a href="https://github.com/[tu-usuario]" class="github-link" target="_blank">
        Ver mi GitHub
    </a>
</div>
```

### 3. Hacer commits

```bash
git add index.html
git commit -m "feat: crea estructura del portafolio de David Salas"

# Si agregas tu foto
git add images/developers/dev4.jpg
git commit -m "feat: agrega foto de perfil de David Salas"

# Si haces ajustes de estilo
git add css/portfolio.css
git commit -m "style: personaliza estilos del portafolio"
```

### 4. Subir cambios

```bash
git push origin feature/portafolio-dev4
```

### 5. Crear Pull Request en GitHub

Ve a: https://github.com/sebastiandavid98/Mercado-libre-/pulls
- Click en "New Pull Request"
- Base: `develop`
- Compare: `feature/portafolio-dev4`
- Título: "feat: agrega portafolio de David Salas"
- Descripción: Breve descripción de lo que agregaste

## Ejemplos de otros desarrolladores

Puedes ver los portafolios de tus compañeros en:
- `feature/portafolio-dev1`
- `feature/portafolio-dev2` (David Esteban)
- `feature/portafolio-dev3` (Jhon Molina)

¡Éxito! 🚀