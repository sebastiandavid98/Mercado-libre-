# Cómo Crear Pull Requests en GitHub

## 🎯 Pull Requests Listos para Crear

Tienes 3 portafolios listos para hacer Pull Request:

### 1. Pull Request de David Esteban (Dev2)

**Paso a paso:**

1. Ve a esta URL directa:
   ```
   https://github.com/sebastiandavid98/Mercado-libre-/compare/develop...feature/portafolio-dev2
   ```

2. Click en el botón verde "Create pull request"

3. Completa la información:
   - **Título:** `feat: agrega portafolio de David Esteban`
   - **Descripción:**
   ```markdown
   ## 📋 Descripción
   Agrega el portafolio profesional de David Esteban al proyecto MercadoLibre Clone.

   ## ✨ Cambios Realizados
   - ✅ Estructura HTML del portafolio
   - ✅ Información personal y profesional
   - ✅ Servicios: Desarrollo Frontend, Diseño Web, Responsive Design, Optimización Web
   - ✅ Tecnologías: HTML5, CSS3, JavaScript, React, Bootstrap, Git
   - ✅ Enlace a GitHub

   ## 📝 Commits
   - feat: crea estructura del portafolio de David Esteban
   - docs: agrega información de imagen para David Esteban

   ## 🧪 Testing
   - [x] Probado localmente en navegador
   - [x] Diseño responsivo verificado
   - [x] Enlaces funcionando correctamente

   ## 👤 Desarrollador
   David Esteban - Frontend Developer
   ```

4. Click en "Create pull request"

---

### 2. Pull Request de Jhon Molina (Dev3)

**Paso a paso:**

1. Ve a esta URL directa:
   ```
   https://github.com/sebastiandavid98/Mercado-libre-/compare/develop...feature/portafolio-dev3
   ```

2. Click en el botón verde "Create pull request"

3. Completa la información:
   - **Título:** `feat: agrega portafolio de Jhon Molina`
   - **Descripción:**
   ```markdown
   ## 📋 Descripción
   Agrega el portafolio profesional de Jhon Molina al proyecto MercadoLibre Clone.

   ## ✨ Cambios Realizados
   - ✅ Estructura HTML del portafolio
   - ✅ Información personal y profesional
   - ✅ Servicios: Desarrollo Backend, API REST, Bases de Datos, Integración de Servicios
   - ✅ Tecnologías: Node.js, Express, MongoDB, MySQL, JavaScript, Git
   - ✅ Enlace a GitHub

   ## 📝 Commits
   - feat: crea estructura del portafolio de Jhon Molina
   - docs: agrega información de imagen para Jhon Molina

   ## 🧪 Testing
   - [x] Probado localmente en navegador
   - [x] Diseño responsivo verificado
   - [x] Enlaces funcionando correctamente

   ## 👤 Desarrollador
   Jhon Molina - Backend Developer
   ```

4. Click en "Create pull request"

---

### 3. Pull Request del Ejemplo (Dev1) - Opcional

**Paso a paso:**

1. Ve a esta URL directa:
   ```
   https://github.com/sebastiandavid98/Mercado-libre-/compare/develop...feature/portafolio-dev1
   ```

2. Click en el botón verde "Create pull request"

3. Completa la información:
   - **Título:** `feat: agrega portafolio de ejemplo (Juan Pérez)`
   - **Descripción:**
   ```markdown
   ## 📋 Descripción
   Agrega un portafolio de ejemplo para que el equipo tenga una referencia.

   ## ✨ Cambios Realizados
   - ✅ Estructura HTML del portafolio
   - ✅ Ejemplo completo de servicios y tecnologías
   - ✅ Mejoras en efectos hover

   ## 📝 Commits
   - feat: crea estructura del portafolio de Juan Pérez
   - docs: agrega información de imagen para Juan Pérez
   - style: mejora efecto hover en tarjeta de portafolio

   ## 👤 Nota
   Este es un portafolio de ejemplo para referencia del equipo.
   ```

4. Click en "Create pull request"

---

## 🔄 Proceso de Revisión y Merge

### Después de crear los PRs:

1. **Revisar el código:**
   - Ve a la pestaña "Files changed" en cada PR
   - Revisa los cambios línea por línea
   - Deja comentarios si es necesario

2. **Aprobar el PR:**
   - Click en "Review changes"
   - Selecciona "Approve"
   - Agrega un comentario: "LGTM! 👍" (Looks Good To Me)
   - Click en "Submit review"

3. **Hacer Merge:**
   - Vuelve a la pestaña "Conversation"
   - Click en "Merge pull request"
   - Confirma el merge
   - Opcionalmente, elimina la rama después del merge

### Orden sugerido de merge:

1. Primero: Dev1 (ejemplo) - opcional
2. Segundo: David Esteban (Dev2)
3. Tercero: Jhon Molina (Dev3)
4. Cuarto: David Salas (Dev4) - cuando esté listo

---

## 📱 Alternativa: Crear PRs desde la página principal

Si prefieres hacerlo desde la interfaz principal:

1. Ve a: https://github.com/sebastiandavid98/Mercado-libre-/pulls

2. Click en "New pull request"

3. Selecciona las ramas:
   - **base:** `develop` (rama destino)
   - **compare:** `feature/portafolio-dev2` (o dev3, dev4)

4. Click en "Create pull request"

5. Completa título y descripción (usa las plantillas de arriba)

6. Click en "Create pull request"

---

## ✅ Checklist para cada PR

Antes de hacer merge, verifica:

- [ ] El código compila sin errores
- [ ] Los estilos se ven correctos
- [ ] El diseño es responsivo
- [ ] Los enlaces funcionan
- [ ] Los commits son descriptivos
- [ ] No hay conflictos con develop
- [ ] Al menos 1 persona ha revisado el código

---

## 🚨 Si hay conflictos

Si GitHub muestra conflictos al hacer merge:

```bash
# En tu máquina local
git checkout feature/portafolio-dev2
git pull origin develop
# Resolver conflictos manualmente
git add .
git commit -m "fix: resuelve conflictos con develop"
git push origin feature/portafolio-dev2
```

Luego intenta el merge nuevamente en GitHub.

---

## 📞 Ayuda

Si tienes problemas:
1. Revisa la documentación en `docs/git-workflow.md`
2. Consulta con el equipo
3. Revisa los PRs de ejemplo en otros proyectos de GitHub

¡Éxito con los Pull Requests! 🚀