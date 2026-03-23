# PRD Pendiente — FluxLine (solo backlog)

> **Versión:** 1.0  
> **Fecha:** 2026-03-22  
> **Estado:** Activo  
> **Proyecto:** FluxLine  
> **Materia:** Automatización de Procesos de Manufactura (APM) — 2026-1S  
> **Universidad:** Universidad Nacional de Colombia  
> **Equipo:** Grupo 4 (6 integrantes)  
> **Caso de estudio:** Planta embotelladora de referencia en Bogotá (sector bebidas)

**Documento maestro de alcance y contexto:** ver `PRD-general.md` (no se duplica aquí el EDT completo, indicadores históricos ni entregables ya cerrados).

> **Cronograma reprogramado:** ver `reprogramacion/reprogramacion_apm_marzo2026.md` para fechas, ruta crítica, festivos y alineación con calendario de clases. Ruta crítica final: Arquitectura → PLC → SCADA → Integración (40 días hábiles). Intermedia: 23-mar-2026 (envío) / 25–27-mar (sustentación). Final: 20–22-may-2026.

---

## Resumen ejecutivo

El proyecto FluxLine tiene definidos nombre, portafolio de productos, línea base AS-IS, indicadores, EDT y un sitio web con estructura lista; **falta completar el detalle de proceso y calidad (fase 1–2)**, el **diseño TO-BE y la arquitectura (fases 3–4)**, la **simulación comparativa en Tecnomatix Plant Simulation (fase 5)**, los **entregables por herramienta** (económico, robótica, PLC, gemelo digital, SCADA), el **relleno académico del sitio**, y el **cierre** (pruebas, video y sustentaciones). Este PRD lista únicamente trabajo pendiente como plan de acción con prioridades, dependencias y criterio de apoyo AI vs equipo.

---

## Cómo leer las prioridades

| Prioridad | Criterio | Contenido en este documento |
|-----------|-----------|-----------------------------|
| **1** | Cadena crítica que habilita diseño detallado, simulación y automatización | Fases **1 a 5** (ítems pendientes) |
| **2** | Entregables de módulos y proyecto integrador alineados a herramientas y evaluación (30% módulos + 70% integrador, según `PRD-general.md`) | Fases **6 a 10** |
| **3** | Contenido web (se alimenta de lo anterior) | Página(s) de módulos **11.5c–11.5j** |
| **4** | Cierre académico y evaluación oral | Fase **11** (excepto 11.5*, que es P3) |

---

## Prioridad 1 — Cadena crítica (Fases 1 a 5)

*Orden sugerido: completar 1.x → 2.x → 3.x → 4.x → 5.x; el modelo conceptual **2.10** antes de profundizar **5.x** en Tecnomatix Plant Simulation.*

### Fase 1 — Alcance y proceso (pendiente)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **1.4** Documentar recetas y parámetros críticos por producto | Word/Markdown, hojas de cálculo | Portafolio de productos y levantamiento existente (`PRD-general.md`) | Híbrido: plantillas y tablas AI; **equipo** valida contra criterio de planta |
| [ ] | **1.5** Identificar transformaciones térmicas/químicas por producto | Literatura, diagramas | 1.4, flujo de proceso | Híbrido: borrador técnico AI; **equipo** cierra supuestos |
| [ ] | **1.6** Definir estrategia de calidad y trazabilidad | Documento, norma interna simulada | 1.4–1.5 | Híbrido; **equipo** firma criterios |
| [ ] | **1.7** Definir interacciones operador–SCADA | Borrador funcional | 1.6, visión preliminar HMI (referencia `PRD-general.md`) | Híbrido; **equipo** alinea con fase 10 |

### Fase 2 — AS-IS profundo (pendiente)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **2.4** Caracterizar estaciones, equipos y recursos | Documento, draw.io | Levantamiento y diagrama general existentes | Híbrido; **equipo** verifica consistencia |
| [ ] | **2.7** Identificar desperdicios / Muda (Lean) | Documento, VSM AS-IS | VSM AS-IS existente | Híbrido; **equipo** valida |
| [ ] | **2.9** Caracterizar fallas típicas | Matriz de fallas | 2.4 | Híbrido; **equipo** aporta criterio |
| [ ] | **2.10** Documentar modelo conceptual de simulación | Documento + notas para Tecnomatix Plant Simulation | 2.4, tiempos DAP | Híbrido; **equipo** define entidades y supuestos |

### Fase 3 — Diseño TO-BE (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **3.1** Objetivos de mejora | Documento | 2.7, 1.x | Híbrido |
| [ ] | **3.2** Propuesta Lean | Documento | 3.1 | Híbrido |
| [ ] | **3.3** VSM futuro | draw.io / VSM | 3.2 | **Equipo** + AI apoyo gráfico |
| [ ] | **3.4** Estrategia multiproducto | Documento | 3.1–3.3 | Híbrido |
| [ ] | **3.5** Cambio de formato | Documento | 3.4 | Híbrido |
| [ ] | **3.6** Fallas y recuperación (TO-BE) | Documento | 2.9, 3.1 | Híbrido |
| [ ] | **3.7** Rechazo y reproceso | Documento | 3.6 | Híbrido |

### Fase 4 — Arquitectura (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **4.1** Modelo ISA-95 / niveles | draw.io, documento | 3.x | Híbrido; **equipo** revisa |
| [ ] | **4.2** Comunicaciones entre niveles | Documento | 4.1 | Híbrido |
| [ ] | **4.3** Red industrial (topología) | Documento / diagrama | 4.2 | **Equipo** + AI |
| [ ] | **4.4** Listado E/S y tags preliminares | Hoja de cálculo | 4.1–4.3, 1.4 | Híbrido; crítico para 8.x/10.x |
| [ ] | **4.5** PFD / P&ID simplificados | draw.io | 4.1 | **Equipo** |
| [ ] | **4.6** Señales y alarmas (filosofía) | Documento | 4.4, 1.7 | Híbrido |
| [ ] | **4.7** Historización (requisitos) | Documento | 4.4, 4.6 | Híbrido |

### Fase 5 — Simulación con Tecnomatix Plant Simulation (completa)

*(Redacción alineada al checklist EDT en `PRD-general.md`, sección «Fase 5: Simulación».)*

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **5.1** Implementar modelo AS-IS en Tecnomatix Plant Simulation | Tecnomatix Plant Simulation | 2.10, DAP/tiempos | **Equipo** (licencia); AI apoyo metodológico |
| [ ] | **5.2** Validar modelo AS-IS | Tecnomatix Plant Simulation, informe | 5.1 | **Equipo** |
| [ ] | **5.3** Simular escenarios AS-IS | Tecnomatix Plant Simulation | 5.2 | **Equipo** |
| [ ] | **5.4** Cuantificar desempeño AS-IS | Informe, gráficos | 5.3 | Híbrido |
| [ ] | **5.5** Diseñar escenarios TO-BE | Documento, Tecnomatix Plant Simulation | 3.x, 5.4 | **Equipo** |
| [ ] | **5.6** Simular modelo TO-BE | Tecnomatix Plant Simulation | 5.5, 5.1 | **Equipo** |
| [ ] | **5.7** Calcular OEE y KPIs por escenario | Hoja, informe | 5.3, 5.6 | Híbrido |
| [ ] | **5.8** Consolidar comparativo AS-IS vs TO-BE | Informe ejecutivo | 5.4, 5.7 | Híbrido |

---

## Prioridad 2 — Fases 6 a 10 (económico, robótica, control, gemelo, SCADA)

*Orden sugerido: **6** (negocio) en paralelo con **7–10** según disponibilidad de licencias; **8 y 9** conviven tras **4.x**; **10** tras **4.x** y **1.7**.*

### Fase 6 — Económico y gestión de proyecto (10 ítems: 6.2–6.11)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **6.2** Cronograma tipo Gantt | MS Project / ProjectLibre / hoja | EDT aprobado (`PRD-general.md`) | Híbrido |
| [ ] | **6.3** Plan de recursos | Documento / hoja | 6.2 | Híbrido |
| [ ] | **6.4** CAPEX | Hoja de cálculo | 6.3, supuestos de 4.x/7.x | **Equipo** cifras |
| [ ] | **6.5** OPEX | Hoja de cálculo | 6.4 | **Equipo** |
| [ ] | **6.6** Precios / ingresos asumidos | Hoja | 6.4–6.5 | **Equipo** `[PRUEBA]` si aplica |
| [ ] | **6.7** Flujo de caja | Hoja | 6.4–6.6 | Híbrido |
| [ ] | **6.8** Indicadores financieros | Hoja, informe | 6.7 | Híbrido |
| [ ] | **6.9** Análisis de sensibilidad | Hoja | 6.8 | Híbrido |
| [ ] | **6.10** Propuesta de valor | Documento | 3.x, 6.8 | Híbrido |
| [ ] | **6.11** Oferta comercial y modelo de negocio | Documento | 6.10 | Híbrido |

### Fase 7 — Celda robotizada (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **7.1** Justificación de robotización | Documento | 2.4, 3.x | Híbrido |
| [ ] | **7.2** Selección de robot / EOAT | Catálogos, RobotStudio | 7.1 | **Equipo** |
| [ ] | **7.3** Layout de celda | RobotStudio, draw.io | 7.2 | **Equipo** |
| [ ] | **7.4** Sensores y actuación | Documento | 7.3 | Híbrido |
| [ ] | **7.5** Tiempos de ciclo | Hoja, RobotStudio | 7.3–7.4 | **Equipo** |
| [ ] | **7.6** Simulación RobotStudio | RobotStudio | 7.2–7.5 | **Equipo** (licencia) |
| [ ] | **7.7** Seguridad (ISO 10218 / enfoque académico) | Documento | 7.3 | Híbrido |
| [ ] | **7.8** Riesgos y mitigaciones | Matriz | 7.x | Híbrido |

### Fase 8 — PLC / Ladder (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **8.1** Filosofía de control | Documento | 4.x | Híbrido |
| [ ] | **8.2** Grafcet / SFC lógico | draw.io | 8.1 | Híbrido |
| [ ] | **8.3** Interlocks | Documento | 8.2 | **Equipo** |
| [ ] | **8.4** Programación Ladder (Studio 5000) | Studio 5000 / RSLogix | 4.4, 8.2–8.3 | **Equipo** (licencia) |
| [ ] | **8.5** Recetas / parámetros en PLC | Studio 5000 | 1.4, 8.4 | **Equipo** |
| [ ] | **8.6** Manejo de fallas en PLC | Studio 5000 | 2.9, 8.4 | **Equipo** |
| [ ] | **8.7** Validación (pruebas) | Logix Emulate / banco | 8.4–8.6 | **Equipo** |

### Fase 9 — Gemelo digital (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **9.1** Modelo 3D / escena digital | Herramienta acordada | 4.x, 7.x opcional | **Equipo** |
| [ ] | **9.2** Sensores virtuales | Entorno gemelo | 9.1 | **Equipo** |
| [ ] | **9.3** Integración con Logix Emulate | Logix Emulate | 8.x, 9.2 | **Equipo** |
| [ ] | **9.4** Pruebas de escenarios | Gemelo + PLC | 9.3 | **Equipo** |
| [ ] | **9.5** Validación del gemelo | Informe | 9.4 | Híbrido |

### Fase 10 — SCADA (completa)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **10.1** ISA-101 / jerarquía de pantallas | Documento | 1.7, 4.6 | Híbrido |
| [ ] | **10.2** Diseño de pantallas HMI | Mockups | 10.1 | Híbrido |
| [ ] | **10.3** Tags y faceplates (especificación) | Lista | 4.4, 10.2 | Híbrido |
| [ ] | **10.4** Proyecto Ignition | Ignition | 10.2–10.3 | **Equipo** (licencia) |
| [ ] | **10.5** OPC / conexión a PLC (especificación) | Documento + Ignition | 8.x, 10.4 | **Equipo** |
| [ ] | **10.6** Alarmas y eventos | Ignition | 4.6, 10.4 | **Equipo** |
| [ ] | **10.7** Roles operador / procedimiento | Documento | 10.1 | Híbrido |
| [ ] | **10.8** Validación SCADA | Informe / checklist | 10.4–10.7 | **Equipo** |

#### Alineación rápida con módulos del curso (referencia)

| Módulo del curso (5% c/u) | Entregas vinculadas en este PRD (sin duplicar texto del programa) |
|---------------------------|-------------------------------------------------------------------|
| Gestión y evaluación de la producción | Indicadores en simulación 5.x, TO-BE 3.x, calidad 1.6 |
| Planeación y evaluación de proyectos | Fase 6 |
| Celdas robotizadas | Fase 7 |
| Digital Factory | Fase 9 |
| PLC / Controladores industriales | Fase 8 |
| SCADA | Fase 10 |

---

## Prioridad 3 — Contenido del sitio web (módulos 11.5c–11.5j)

- [ ] **Revisar y mejorar estilos CSS de las páginas de módulos** — Las páginas en `website/modulos/*.html` tienen estilos más pobres que la landing page (`index.html`). Igualar nivel de diseño, animaciones y pulido visual.

*Sustituir placeholders en las **7 + 1** páginas de módulo del sitio (`website/`) con contenido derivado de cada fase terminada. Mapeo sugerido a archivos actuales:*

| ID | Tarea | Archivo / alcance | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|-------------------|------------------------|---------------|---------------------|
| [ ] | **11.5c** Contenido completo (placeholder → definitivo) | `website/modulos/introduccion.html` | HTML/CSS, `website/` | Visión general del proyecto acordada | Híbrido |
| [ ] | **11.5d** | `website/modulos/produccion.html` | HTML/CSS | Fase 3.x, indicadores 5.x | Híbrido |
| [ ] | **11.5e** | `website/modulos/planeacion.html` | HTML/CSS | Fase 6 | Híbrido |
| [ ] | **11.5f** | `website/modulos/robotica.html` | HTML/CSS | Fase 7 | Híbrido |
| [ ] | **11.5g** | `website/modulos/digital-factory.html` | HTML/CSS | Fase 9 | Híbrido |
| [ ] | **11.5h** | `website/modulos/control.html` | HTML/CSS | Fase 8 | Híbrido |
| [ ] | **11.5i** | `website/modulos/scada.html` | HTML/CSS | Fase 10 | Híbrido |
| [ ] | **11.5j** Página «+1» (landing o sección transversal) | `website/index.html` y/o bloque destacado en sitio | HTML/CSS | Coherencia con resto de páginas | Híbrido |

> Si el mapa de páginas cambia, actualizar solo esta tabla y el enlace en `README.md` / `PRD-general.md`.

---

## Prioridad 4 — Cierre académico (Fase 11, excepto 11.5*)

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **11.1** Criterios de aceptación del entregable integrador | Documento | 3.x–5.x mínimo | Híbrido |
| [ ] | **11.2** Pruebas end-to-end (donde aplique) | Checklist, capturas | 8.x–10.x, 9.x | **Equipo** |
| [ ] | **11.3** Cuadro resumen (indicadores / logros) | Informe una página | 5.x, 6.8 | Híbrido |
| [ ] | **11.4** Repositorio GitHub público (pulido) | Git, README | Contenido estable | **Equipo** + AI texto |
| [ ] | **11.6** Video del proyecto | Editor de video | Avance mayor de fases | **Equipo** |
| [ ] | **11.7** Sustentación intermedia (**10%** integrador) | Presentación | Según cronograma curso | **Equipo** |
| [ ] | **11.8** Sustentación final (**60%** integrador) | Presentación | Proyecto integrado | **Equipo** |
| [ ] | **11.9** Reflexiones (individuales o de grupo, según consigna) | Documento | Post-sustentación | **Equipo** |

---

## Prioridad 0B — Sprint 2: reestructura web, Jira y contenido visual

*Sprint enfocado en reestructurar la navegación, crear nuevas páginas, integrar Jira, añadir diagramas y rediseñar el hero. Todas las tareas dependen del Sprint 1 (Prioridad 0) completado.*

**Prerequisitos confirmados:**

| Recurso | Estado |
|---------|--------|
| Jira Cloud (`sergioandresbolanospenagos.atlassian.net`) | Instancia correcta; MCP pendiente de re-autorizar (cloudId `176d2d15-ca7e-4300-ac23-8c99b29417af`) |
| Proyecto Jira APM | Pendiente de creación (solo existe "Plan de trabajo QA" — key `QA4`) |
| MCP Atlassian | Operativo — tools: `createJiraIssue`, `searchJiraIssuesUsingJql`, `getVisibleJiraProjects`, etc. |
| Draw.io planta | Disponible en `archivos-drive/Planta Coca Cola` (XML draw.io, 7282 líneas) |
| GitHub repo | `https://github.com/sergiosinlimites/apm` (público) |
| Google Drive | Shared Drive "APM_Grupo4" (rclone configurado) |

---

### WEB-10: Reestructura de navegación principal

**Problema:** La navegación actual (`Inicio · Proceso · Productos · Indicadores · Módulos ▾ · Equipo`) mezcla secciones internas de la landing con páginas independientes. No hay acceso a contacto, información de la asignatura ni reflexiones.

**Navegación objetivo:**

| Posición | Enlace | Tipo | Destino |
|----------|--------|------|---------|
| 1 | Presentación | Anchor | `index.html#inicio` (sección hero) |
| 2 | Contáctenos | Página | `contacto.html` (nueva) |
| 3 | Asignatura | Página | `asignatura.html` (nueva) |
| 4 | Módulos ▾ | Dropdown | Menú desplegable existente (7 módulos) |
| 5 | Reflexiones | Página | `reflexiones.html` (nueva) |

**Elementos que se eliminan del nav:**
- `Proceso`, `Productos`, `Indicadores`, `Equipo` — ya no son enlaces directos en el nav. El contenido sigue en `index.html` pero se accede por scroll, no por nav.

**Implementación:**
- Modificar `<ul class="nav__list">` en `index.html` y todas las páginas de módulo.
- Actualizar `nav__link` hrefs: páginas internas usan rutas relativas (`contacto.html`, `asignatura.html`); desde módulos usar `../contacto.html`.
- El dropdown de Módulos no cambia (ya funciona con click-to-toggle).
- En páginas nuevas, el enlace activo se marca con `nav__link--active`.

**Criterio de aceptación:**
- [ ] Nav muestra exactamente 5 elementos: Presentación, Contáctenos, Asignatura, Módulos ▾, Reflexiones.
- [ ] Todos los enlaces funcionan desde `index.html` y desde cualquier `modulos/*.html`.
- [ ] Responsive: en móvil el menú hamburguesa muestra los 5 elementos + dropdown expandible.
- [ ] El dropdown de Módulos conserva comportamiento click-to-toggle.

---

### WEB-11: Página "Contáctenos" (`contacto.html`)

**Objetivo:** Página de contacto con formulario, datos del equipo, y enlaces a GitHub y Drive.

**Estructura:**

```
contacto.html
├── Hero compacto ("Contáctenos")
├── Sección 1: Formulario de contacto
│   ├── Nombre (text)
│   ├── Email (email)
│   ├── Asunto (select: Consulta general, Asesoría técnica, Colaboración)
│   ├── Mensaje (textarea)
│   └── Botón "Enviar mensaje"
├── Sección 2: Equipo de trabajo
│   └── 6 tarjetas (nombre, rol, email) — migradas de index.html #equipo
├── Sección 3: Enlaces del proyecto
│   ├── GitHub (icono + URL) — repositorio público
│   ├── Google Drive (icono + URL) — carpeta compartida APM_Grupo4
│   └── Jira (icono + URL) — board del proyecto
└── Footer
```

**Formulario — opciones para sitio estático:**

| Opción | Pros | Contras | Recomendación |
|--------|------|---------|---------------|
| **Formspree** (free tier) | 0 backend, 50 envíos/mes, AJAX | Límite mensual | Recomendado MVP |
| **Google Forms embed** | Ilimitado, gratis | Estética limitada, sale de la página | Alternativa |
| **EmailJS** | Client-side, configurable | Requiere API key en JS público | No recomendado |

**Recomendación:** Usar Formspree. El `<form>` apunta a `https://formspree.io/f/{FORM_ID}`. Sin backend. Se necesita que el usuario cree una cuenta gratuita en formspree.io y genere un `FORM_ID`.

**Alternativa sin servicio externo:** Formulario visual sin `action` real + botón que abre `mailto:` con datos pre-rellenados. Funciona siempre, sin dependencias.

**Equipo de trabajo (migración):**
- Mover las 6 `team-card` de `index.html#equipo` a esta página.
- Añadir email de contacto a cada integrante (si disponible).
- En `index.html`, reemplazar `#equipo` con un CTA "Conoce al equipo →" que enlace a `contacto.html#equipo`.

**Enlaces del proyecto:**
- GitHub: `https://github.com/sergiosinlimites/apm`
- Drive: `https://drive.google.com/drive/u/2/folders/0AO2oxGaDvYBvUk9PVA`
- Jira: `https://sergioandresbolanospenagos.atlassian.net/` — espacio APM ya existente.

**Criterio de aceptación:**
- [ ] Formulario de contacto funcional (Formspree o mailto fallback).
- [ ] 6 integrantes con nombre, rol y email.
- [ ] Iconos SVG de GitHub, Drive y Jira con enlaces funcionales.
- [ ] Diseño consistente con el resto del sitio (hero compacto, estilos compartidos).

---

### WEB-12: Página "Asignatura" (`asignatura.html`)

**Objetivo:** Centralizar toda la información de la asignatura y los profesores.

**Estructura:**

```
asignatura.html
├── Hero compacto ("Asignatura")
├── Sección 1: Información del curso
│   ├── Nombre: Automatización de Procesos de Manufactura
│   ├── Código: 2017280 Gr. 01
│   ├── Semestre: 2026-1S
│   ├── Universidad: Universidad Nacional de Colombia
│   ├── Departamento: Ing. Mecánica y Mecatrónica
│   └── Créditos / intensidad horaria (si disponible)
├── Sección 2: Profesores (6 tarjetas)
│   ├── Prof. Carlos Julio Cortés R. — cjcortesr@unal.edu.co — Módulos 2, 3
│   ├── Prof. Luis Miguel Méndez — lmmendezm@unal.edu.co — Módulos 1, 3
│   ├── Prof. Víctor Hugo Grisales — vhgrisalesp@unal.edu.co — Módulo 4
│   ├── Prof. Ricardo Ramírez H. — reramirezh@unal.edu.co — Módulo 5
│   ├── Prof. Eduardo Barrera Gualdrón — ebarrerag@unal.edu.co — Módulo 6
│   └── Prof. Ubaldo García Zaragoza — ugarciaz@unal.edu.co — Módulo 7
├── Sección 3: Estructura de evaluación
│   ├── 30% módulos (5% c/u × 6 profesores)
│   ├── 70% proyecto integrador (10% intermedia + 60% final)
│   └── Tabla resumen
└── Footer
```

**Migración:** La `section--profesores` actual de `index.html` se mueve a esta página. En `index.html` se deja un CTA "Ver asignatura y profesores →" que apunte a `asignatura.html#profesores`.

**Criterio de aceptación:**
- [ ] Información completa del curso.
- [ ] 6 tarjetas de profesores con nombre, email y módulos asignados.
- [ ] Estructura de evaluación legible.
- [ ] Diseño consistente (hero compacto, `.container` con `width: min(1120px, 80%)`).

---

### WEB-13: Página "Reflexiones" (`reflexiones.html`)

**Objetivo:** Documentar aprendizajes del equipo a lo largo del proyecto.

**Estructura:**

```
reflexiones.html
├── Hero compacto ("Reflexiones y Aprendizajes")
├── Introducción (párrafo: propósito de esta sección)
├── Sección: Reflexiones por módulo (o por fase)
│   ├── Tarjeta/acordeón: Módulo 1 — Introducción
│   ├── Tarjeta/acordeón: Módulo 2 — Producción
│   ├── ...
│   └── Tarjeta/acordeón: Módulo 7 — SCADA
├── Sección: Lecciones transversales
│   └── Texto libre / bullets (inicialmente placeholder)
└── Footer
```

**Contenido inicial:** Placeholders con texto "Reflexión pendiente — se completará tras la sustentación intermedia y al cierre de cada módulo." Los integrantes llenarán esto manualmente conforme avance el semestre.

**Criterio de aceptación:**
- [ ] 7 espacios (uno por módulo) para reflexiones.
- [ ] Sección transversal para lecciones generales.
- [ ] Placeholders claros que indiquen contenido pendiente.
- [ ] Diseño con acordeones (reutilizar estilo `edt-phase` de planeacion.html).

---

### WEB-14: Footer completo

**Problema:** El footer actual es minimalista (3 líneas de texto). No tiene enlaces a módulos, repositorios ni legal.

**Footer objetivo:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Col 1: FluxLine           Col 2: Módulos        Col 3: Legal  │
│  Logo + tagline            - Introducción         - Privacidad  │
│  Grupo 4 · UNAL 2026-I    - Producción           - Términos    │
│                            - Planeación           - Cookies     │
│  Col 4: Recursos           - Robótica                           │
│  [GitHub] [Drive] [Jira]   - Digital Factory      Col 5: Contacto│
│                            - Control (PLC)        contacto.html │
│                            - SCADA                               │
├─────────────────────────────────────────────────────────────────┤
│  © 2026 FluxLine · Grupo 4 APM · UNAL · Dpto. Ing. Mecánica   │
└─────────────────────────────────────────────────────────────────┘
```

**Iconos SVG:** GitHub (Octocat simplificado), Google Drive, Jira (logo simplificado). Inline SVG para evitar dependencias externas.

**Implementación:**
- Reemplazar `<footer class="site-footer">` en `index.html` y todas las páginas de módulo.
- Grid de 4-5 columnas en desktop, colapsadas en móvil.
- Los mismos enlaces de legal apuntan a `privacidad.html`, `terminos.html`, `cookies.html`.

**Criterio de aceptación:**
- [ ] Footer con 4-5 columnas en desktop, stack en móvil.
- [ ] Enlace funcional a cada módulo.
- [ ] Iconos SVG de GitHub, Drive, Jira con enlaces.
- [ ] Enlaces a privacidad, términos y cookies.
- [ ] Footer consistente en todas las páginas (index + 7 módulos + 3 nuevas + 3 legal = 14 archivos).

---

### WEB-15: Páginas legales

**Archivos:** `privacidad.html`, `terminos.html`, `cookies.html`.

**Contenido:** Texto estándar adaptado a un proyecto académico universitario sin comercio. Puntos clave:

| Página | Contenido principal |
|--------|-------------------|
| `privacidad.html` | No se recopilan datos personales más allá del formulario de contacto. Los datos del formulario se procesan vía Formspree (o mailto). No se usan cookies de seguimiento. Datos se usan solo para responder consultas. Contacto para solicitudes: email del equipo. |
| `terminos.html` | Proyecto académico sin fines de lucro. Contenido con licencia CC BY-NC 4.0 (o la que el equipo elija). No se garantiza exactitud de datos operativos. Propiedad intelectual de la Universidad Nacional. |
| `cookies.html` | El sitio NO usa cookies propias. Si se embede Jira/YouTube, esos servicios pueden usar cookies de terceros. Explicación de qué cookies podrían usarse. |

**Diseño:** Hero compacto genérico + contenido en prosa con subtítulos. Sin componentes especiales.

**Criterio de aceptación:**
- [ ] 3 páginas HTML con contenido apropiado para un proyecto académico.
- [ ] Accesibles desde el footer.
- [ ] Diseño consistente (hero compacto, mismo CSS).

---

### WEB-16: Integración de diagramas e imágenes técnicas

**Problema:** El sitio no tiene imágenes de los diagramas de ingeniería. Todo son tablas de texto. Se necesitan representaciones visuales del proceso (AS-IS y TO-BE).

**Diagramas requeridos:**

| Diagrama | Estado actual | Fuente | Acción |
|----------|--------------|--------|--------|
| **Vista de planta** (layout) | Draw.io XML disponible (`archivos-drive/Planta Coca Cola`) | Archivo existente | Exportar a SVG o PNG desde draw.io; incrustar en `produccion.html` y `index.html#proceso` |
| **VSM AS-IS** (Value Stream Map) | No existe como imagen | Datos en PRD-general.md §5 + §7 DAP | Crear diagrama visual (SVG manual, Mermaid, o imagen placeholder para que el equipo lo llene) |
| **VSM TO-BE** | No existe | Diseño futuro (Fase 3) | Placeholder con texto "Pendiente — Fase 3: Diseño TO-BE" |
| **DAP** (Diagrama Analítico de Proceso) | Tablas en PRD-general.md §7 | 3 productos × 19-25 operaciones | Crear diagrama de flujo visual con símbolos ASME (operación ○, transporte →, inspección □, almacenamiento ▽, demora D) |
| **Diagrama de flujo general** | No existe | Proceso descrito en §5 | Crear flowchart de proceso general (recepción → preparación → llenado → empaque → almacenamiento) |
| **Diagrama de bloques** (arquitectura de automatización) | No existe | Diseño futuro (Fase 4) | Placeholder |

**Formato de imágenes:**
- Preferir SVG para diagramas de ingeniería (escalan sin pérdida, editables).
- PNG como fallback para diagramas complejos.
- Almacenar en `website/img/diagramas/`.

**Acción inmediata (draw.io → SVG):**
1. Abrir `archivos-drive/Copia de Planta Coca Cola.drawio` en draw.io o VS Code con extensión draw.io.
2. Exportar como SVG a `website/img/diagramas/planta-layout-asis.svg`.
3. Alternativa programática: usar `draw.io` CLI (`drawio-export`) o servidor de exportación.

**DAP visual:**
- Generar un diagrama de flujo de proceso ASME con los datos de PRD-general.md §7.
- Se puede crear como SVG inline en HTML o como imagen estática.
- Para cada producto: secuencia vertical/horizontal con símbolos estándar.

**Dónde se incrustan:**
| Diagrama | Página(s) |
|----------|-----------|
| Vista de planta | `produccion.html` (sección "Layout de planta"), `index.html#proceso` (thumbnail) |
| VSM AS-IS | `produccion.html` (sección "Value Stream Map") |
| VSM TO-BE | `produccion.html` (sección "Diseño TO-BE" — placeholder) |
| DAP | `produccion.html` (sección "Diagramas de proceso") |
| Flujo general | `index.html#proceso` (reemplazar texto actual por diagrama) |
| Arquitectura | `control.html` o `scada.html` (placeholder) |

**Criterio de aceptación:**
- [ ] Vista de planta (SVG/PNG) exportada desde draw.io e incrustada en `produccion.html`.
- [ ] DAP visual (al menos 1 producto) con símbolos ASME.
- [ ] Placeholders claros para diagramas pendientes (TO-BE, arquitectura).
- [ ] Directorio `website/img/diagramas/` creado con al menos 2 archivos.
- [ ] Imágenes responsivas con `max-width: 100%` y `alt` descriptivo.

**Nota sobre nombre comercial:** El archivo draw.io se llama "Planta Coca Cola" pero en el sitio se referenciará como "Planta embotelladora de referencia". El contenido interno del draw.io tiene texto genérico ("LINEA 5", "ZONA DE CARGA DE PALLETS") que es aceptable.

---

### WEB-17: Integración Jira — proyecto APM y visualización en sitio

**Estado actual:**
- Instancia: `sergioandresbolanospenagos.atlassian.net`
- CloudId: `176d2d15-ca7e-4300-ac23-8c99b29417af`
- Proyecto existente: "Plan de trabajo QA" (key: `QA4`)
- Proyecto APM: **no existe todavía**
- Scopes: `read:jira-work`, `write:jira-work`

**Paso 1 — Crear proyecto APM en Jira:**

El MCP Atlassian NO tiene herramienta `createJiraProject`. **El usuario debe crear el proyecto manualmente:**

1. Ir a `https://sergioandresbolanospenagos.atlassian.net`.
2. Crear un nuevo proyecto de tipo "Team-managed" (simplificado).
3. Nombre: `Automatización de Procesos de Manufactura`.
4. Key: `APM`.
5. Tipo de proyecto: Software (Kanban o Scrum).

**Alternativa:** Si el usuario proporciona permisos de admin, se puede crear vía REST API directo. Pero la interfaz web es más rápida.

**Paso 2 — Poblar con issues del EDT (vía MCP):**

Una vez creado el proyecto APM, se crean issues con la siguiente estructura:

| Tipo Jira | Contenido EDT | Ejemplo |
|-----------|--------------|---------|
| Epic | Fase (11 fases) | "Fase 1: Alcance Técnico del Proceso Definido" |
| Task | Actividad individual (88 actividades) | "1.1 — Familia de bebidas y contexto operacional definidos" |
| Subtask | Sub-entregas o criterios de cierre | (opcional, solo si hay detalle) |

Campos por issue:
- `summary`: ID + nombre del entregable.
- `description`: Descripción del diccionario EDT + criterio de cierre + evidencia.
- `labels`: `edt`, `fase-N`, `intermedia` / `final` según corresponda.
- `dueDate`: Según cronograma de `reprogramacion_apm_marzo2026.md`.

**Paso 3 — Visualización en el sitio web:**

| Opción | Complejidad | Resultado | Recomendación |
|--------|-------------|-----------|---------------|
| **A) Enlace directo** al board público | Baja | Botón "Ver en Jira" abre nueva pestaña | Siempre incluir como mínimo |
| **B) Iframe de Jira Roadmap** | Media | Jira Cloud permite compartir roadmap público (requiere plan Premium o activar "Public access") | Intentar; si no funciona por plan free, fallback a A |
| **C) GitHub Actions fetch** | Alta | CI/CD job que ejecuta `curl` a Jira API con token, genera `jira-data.json`, lo sirve como dato estático | Mejor para producción, pero overengineered para este sprint |
| **D) Timeline JS estático** | Media | Generar un Gantt en HTML/CSS/JS con los datos de EDT hardcoded + link a Jira para datos live | Buena experiencia visual; datos se desactualizan |

**Recomendación para este sprint:** Opción **A + D híbrido**:
1. Enlace directo al board Jira (siempre funciona).
2. Timeline visual en `planeacion.html` generado con los datos del cronograma (reemplazar el placeholder actual).
3. Los datos del timeline se hardcodean en HTML; junto al timeline, un botón "Ver progreso en vivo en Jira →".
4. Si Jira permite embed público, añadir iframe como mejora futura.

**Prerequisito del usuario:**
- [ ] Crear proyecto APM en Jira (key: `APM`).
- [ ] Confirmar si el plan de Jira permite acceso público al board/roadmap (ir a Project Settings → Access → Public access).

**Criterio de aceptación:**
- [ ] Proyecto APM creado en Jira con al menos 11 Epics (fases) y 88 Tasks (actividades).
- [ ] Enlace funcional desde `planeacion.html` al board de Jira.
- [ ] Timeline visual en `planeacion.html` con datos del cronograma.
- [ ] Botón "Ver en Jira" visible y funcional.

---

### WEB-18: Márgenes laterales en secciones con fondo degradé (hero)

**Problema:** Las secciones hero (tanto en `index.html` como en `modulos/*.html`) con background degradé tienen el contenido centrado pero sin restricción de ancho, lo que en pantallas muy anchas se ve estirado. El usuario pide ~10% de margen lateral en estas secciones.

**Secciones afectadas:**
- `.hero` (landing)
- `.hero--compact` (módulos y páginas nuevas)
- Cualquier section con `background: linear-gradient(...)` que ocupe full-width

**Implementación CSS:**
```css
.hero__content {
  width: min(1120px, 80%);
  margin-inline: auto;
}
```

Esto ya debería estar parcialmente resuelto por WEB-03 (`.container` usa `min(1120px, 80%)`), pero el hero content NO usa `.container` — tiene su propio layout centrado con `text-align: center`.

**Acción:** Verificar si `.hero__content` tiene restricción de ancho. Si no, añadir `max-width: 80%` o `width: min(1120px, 80%)`.

**Criterio de aceptación:**
- [ ] En pantallas > 1400px, el contenido del hero no ocupa más del 80% del viewport.
- [ ] En móvil (< 768px), el contenido usa `calc(100% - 2rem)`.
- [ ] El fondo degradé sigue siendo full-width (edge-to-edge).

---

### WEB-19: Rediseño del hero landing — propuesta de valor

**Problema:** El hero actual muestra:
```
PROYECTO ACADÉMICO APM
FluxLine
Automatización de Procesos de Manufactura
Sector Bebidas · Caso de estudio: Planta embotelladora · Bogotá
Grupo 4 · 6 profesores · 2026-I
[Explorar el Proyecto]
```

Esto es informativo pero NO vende. Es demasiado académico para una primera impresión. El usuario quiere algo más llamativo que comunique propuesta de valor.

**Propuesta de rediseño:**

```
Eyebrow:  Caso de estudio · Planta embotelladora
Título:   Transformamos la producción de bebidas con automatización inteligente
Subtítulo: De 83% a 95%+ de eficiencia operativa (OEE) mediante control digital,
           robótica integrada y gemelo digital — todo en una plataforma.
Métricas (3 columnas inline):
  3 productos  |  88 entregables  |  95% OEE objetivo
CTA primario:  [Explorar los Módulos]
CTA secundario: [Ver cronograma en Jira →] (enlace texto, sin botón)
Nota sutil:    Proyecto académico · APM 2026-I · Universidad Nacional de Colombia
```

**Cambios respecto al diseño actual:**
1. **Título**: de "FluxLine" a una frase de propuesta de valor. "FluxLine" pasa al logo del nav (ya está ahí).
2. **Subtítulo**: de genérico a métricas concretas + tecnologías.
3. **Eyebrow**: de "Proyecto académico APM" a "Caso de estudio · Planta embotelladora" (más profesional).
4. **Métricas**: nuevos elementos visuales tipo `stat-counter` en línea.
5. **CTAs**: dos niveles (botón primario + enlace secundario).
6. **Nota académica**: se reduce a una línea sutil al pie del hero (no desaparece, pero no domina).

**CSS nuevo necesario:**
- `.hero__stats` — grid de 3 columnas con separadores.
- `.hero__stat-value` — número grande, bold.
- `.hero__stat-label` — texto pequeño debajo del número.
- `.hero__secondary-cta` — enlace de texto sin botón.
- `.hero__note` — texto sutil, `font-size: 0.8rem`, opacity reducida.

**Criterio de aceptación:**
- [ ] El hero comunica valor antes que identidad académica.
- [ ] Al menos 2-3 métricas concretas visibles sobre el fold.
- [ ] "FluxLine" aparece solo en el logo del nav, no como título principal.
- [ ] CTA primario lleva a `#modulos`, CTA secundario a Jira o `planeacion.html`.
- [ ] La nota académica (universidad, semestre) existe pero no domina.
- [ ] La estética es consistente con el gradiente existente (no cambia paleta).

---

### Orden de ejecución recomendado

```
WEB-18 (márgenes hero)          — CSS puro, 5 min
WEB-19 (rediseño hero landing)  — HTML/CSS, 20 min
WEB-10 (reestructura nav)       — HTML en 14 archivos, 30 min
WEB-12 (asignatura.html)        — nueva página, 20 min
WEB-13 (reflexiones.html)       — nueva página, 15 min
WEB-11 (contacto.html)          — nueva página + formulario, 25 min
WEB-14 (footer completo)        — HTML/CSS en 14 archivos, 30 min
WEB-15 (páginas legales)        — 3 páginas nuevas, 20 min
WEB-16 (diagramas e imágenes)   — exportación + HTML, 40 min
WEB-17 (Jira)                   — depende de acción del usuario, 45 min
```

**Tiempo estimado total:** ~4 horas.

**Bloqueos:**
- WEB-11 requiere URL de GitHub y URL de Drive del usuario.
- WEB-17 requiere que el usuario cree el proyecto APM en Jira.
- WEB-16 requiere exportar el draw.io a imagen (posible vía CLI o manual).

---

## Prioridad 0 — Mejoras web inmediatas (sprint actual)

*Estas tareas corrigen problemas visuales, de navegación y de contenido del sitio web que deben resolverse antes de la sustentación intermedia (25–27 mar 2026).*

### WEB-01: Corregir colores del header en páginas de módulo

**Problema:** El header (`site-header`) es transparente inicialmente. Los enlaces de navegación usan `var(--secondary-light)` (`#334155`, texto oscuro) y la marca (`nav__brand`) usa `var(--secondary)`. Sobre el fondo oscuro del hero en las páginas de módulo (`hero--compact` con gradiente `primary-dark → secondary → #0f172a`), estos textos oscuros son invisibles.

**Solución:**

| Elemento | Estado actual | Estado objetivo |
|----------|--------------|-----------------|
| `.nav__link` | `color: var(--secondary-light)` (#334155) | Blanco (`#FFFFFF` o `rgba(248,250,252,0.95)`) cuando el header NO tiene clase `.is-scrolled` en páginas con hero oscuro |
| `.nav__brand` / `.nav__logo-text` | `color: var(--secondary)` (#1E293B) | Blanco cuando no scrolled |
| `.nav__logo-icon` | `color: var(--primary)` (#A8201A) | `var(--primary-100)` (#FAD0D0) o blanco cuando no scrolled |
| `.nav__dropdown-toggle` | `color: var(--secondary-light)` | Blanco cuando no scrolled |
| `.nav__toggle-bar` | `background: var(--secondary)` | Blanco cuando no scrolled |
| Estado `:hover` | `color: var(--primary)` | `color: var(--primary-100)` cuando no scrolled |

**Implementación CSS:**
- Usar la clase `body.module-page` (ya existe en las páginas de módulo) como selector padre.
- Regla: `.module-page .site-header:not(.is-scrolled) .nav__link { color: rgba(248,250,252,0.95); }` y análogas.
- Cuando `.is-scrolled` se agrega (al hacer scroll), el header ya tiene fondo claro y los colores oscuros originales aplican correctamente (no se modifica este comportamiento).
- Verificar que el dropdown menu mantiene fondo blanco con texto oscuro (ya tiene `background: var(--white)` explícito, no debería verse afectado).

**Criterio de aceptación:**
- [ ] En páginas de módulo, los enlaces del header son legibles (texto claro) sobre el hero oscuro.
- [ ] Al hacer scroll, el header transiciona a fondo claro con texto oscuro (comportamiento actual preservado).
- [ ] El dropdown menu mantiene su estilo actual (fondo blanco, texto oscuro).
- [ ] En `index.html` (landing) el comportamiento no cambia (también tiene hero oscuro, necesita la misma corrección; evaluar si `body` de index también necesita clase o si se aplica universalmente con selector `.hero`).

---

### WEB-02: Sección de profesores

**Contexto:** La materia es impartida por 6 profesores, cada uno responsable de uno o más módulos evaluativos. Actualmente solo se menciona a Luis Miguel Méndez en el footer y el hero del landing.

**Datos (fuente: `2026-1 APM Programa (1).pdf`):**

| Profesor | E-mail | Módulo(s) evaluativo(s) | Página(s) web |
|----------|--------|-------------------------|---------------|
| Carlos Julio Cortés R. | cjcortesr@unal.edu.co | 2. Gestión y evaluación de la producción | `produccion.html` |
| Luis Miguel Méndez | lmmendezm@unal.edu.co | 1. Introducción · 3. Planeación y evaluación | `introduccion.html`, `planeacion.html` |
| Víctor Hugo Grisales | vhgrisalesp@unal.edu.co | 6. Automatización discreta: PLC y SCADA | `control.html`, `scada.html` |
| Ricardo Ramirez H. | reramirezh@unal.edu.co | 4. Celdas de manufactura robotizadas | `robotica.html` |
| Eduardo Barrera Gualdron | ebarrerag@unal.edu.co | (coordinación / soporte transversal) | — |
| Ubaldo García Zaragoza | ugarciaz@unal.edu.co | 5. Tecnologías modernas (Digital Factory) | `digital-factory.html` |

> **Nota:** Eduardo Barrera Gualdron aparece en el programa pero no tiene módulo evaluativo propio asignado en el contenido sintético. Incluirlo con rol de coordinación o confirmar con el equipo.

**Implementación:**

1. **Landing (`index.html`):**
   - Añadir nueva sección `#profesores` entre `#equipo` y el footer (o como subsección de `#equipo`).
   - Diseño: grid de 6 tarjetas similares a `team-card` pero con campos adicionales (e-mail, módulo asignado).
   - Cada tarjeta incluye: avatar con iniciales (estilo existente), nombre, e-mail (como `mailto:` link), módulo(s) que dicta.
   - Actualizar el texto del hero (`hero__course`) de "Prof. Luis Miguel Mendez" → "6 profesores · 2026-I" o similar.
   - Actualizar el footer: de "Prof. Luis Miguel Mendez" → "Departamento de Ingeniería Mecánica y Mecatrónica" o listar los 6 nombres.

2. **Páginas de módulo:**
   - Actualizar el `hero__subtitle` de cada página de módulo para reflejar el profesor correcto según la tabla anterior.
   - Ejemplo: `planeacion.html` mantiene "Prof. Luis Miguel Méndez"; `produccion.html` cambia a "Prof. Carlos Julio Cortés R."; etc.

**Criterio de aceptación:**
- [ ] Sección de profesores visible en landing con los 6 nombres, emails y módulos.
- [ ] Cada página de módulo muestra el profesor correcto en el hero.
- [ ] Footer actualizado sin referencia a un solo profesor.
- [ ] Diseño coherente con el estilo visual existente (tarjetas, tipografía, colores).

---

### WEB-03: Aumentar márgenes laterales

**Problema:** Los contenedores actuales tienen márgenes laterales mínimos:
- `.container`: `width: min(1120px, 100% - 2.5rem)` (1.25rem por lado ≈ 20px)
- `.module-content .container`: `width: min(1120px, 100% - 2.5rem)`

En pantallas medianas (1200–1400px) el contenido ocupa casi el 100% del ancho, creando una sensación de apretamiento.

**Solución:**

| Selector | Actual | Propuesto |
|----------|--------|-----------|
| `.container` | `width: min(1120px, 100% - 2.5rem)` | `width: min(1120px, 80%)` |
| `.module-content .container` | `width: min(1120px, 100% - 2.5rem)` | `width: min(1060px, 80%)` |

- `80%` implica 10% de margen a cada lado en pantallas anchas.
- En pantallas < 1120px, el `min()` garantiza que el ancho no supere el contenedor fijo.
- Para móviles (< 768px), mantener `100% - 2rem` via media query para no desperdiciar espacio en pantallas pequeñas.

**Criterio de aceptación:**
- [ ] En desktop (≥1200px), margen lateral visible ~10% por lado.
- [ ] En tablets (768–1199px), margen proporcional (8–10%).
- [ ] En móviles (<768px), margen mínimo ~1rem por lado (sin cambio respecto a actual).
- [ ] Secciones full-width (hero, `module-section--alt`) no se ven afectadas.

---

### WEB-04: Aumentar padding superior del contenido principal

**Problema:** `.module-content` tiene `padding: 0 0 4rem;` — el contenido del módulo comienza inmediatamente después del hero sin espacio de respiración.

**Solución:**

| Selector | Actual | Propuesto |
|----------|--------|-----------|
| `.module-content` | `padding: 0 0 4rem` | `padding: 3rem 0 4rem` |

- 3rem (≈48px) de espacio entre el final del hero y el inicio del contenido.
- Alternativamente, `.module-content__intro` puede recibir `margin-top: 2.5rem` si se prefiere control más fino.

**Criterio de aceptación:**
- [ ] Espacio visible (≥40px) entre el hero del módulo y el primer bloque de contenido.
- [ ] No afecta el landing (`index.html`) que tiene su propia estructura de secciones.

---

### WEB-05: EDT completa con diccionario en `planeacion.html`

**Problema:** Actualmente `planeacion.html` solo muestra la tabla resumen de 11 fases. El usuario requiere **todas las actividades (88 entregables)** con su **diccionario EDT** (descripción, criterio de cierre, evidencia).

**Fuente de datos:** `PRD-general.md` secciones 4.2 (EDT detallada) y 5 (Diccionario EDT).

**Implementación:**

1. **Estructura HTML por fase:**
   Cada fase se representa como un bloque colapsable o sección con:
   - Título de la fase con número y nombre.
   - Tabla de actividades (ID, entregable, días, observaciones).
   - Tabla del diccionario EDT (código, descripción, criterio de cierre, evidencia) como sub-bloque expandible o siempre visible.
   - Indicador visual de actividades críticas (borde rojo o badge).

2. **Diseño propuesto:**
   - Usar `<details>/<summary>` nativo HTML o JavaScript toggle para colapsar/expandir fases.
   - Cada fase muestra un resumen (nombre, días, % del total) y al expandir revela la tabla completa de entregables + diccionario.
   - Fases 1–6 (intermedia) con badge "Sustentación intermedia".
   - Fases 4–10 (post-intermedia) con badge "Sustentación final".
   - Actividades con etiqueta "Actividad crítica" resaltadas con `border-left: 3px solid var(--primary)`.

3. **Volumen estimado:** 11 secciones × (tabla de actividades + tabla de diccionario) = ~22 tablas. Las tablas del diccionario tienen 5 columnas (código, entregable, descripción, criterio, evidencia), lo que genera bastante contenido. Para no saturar visualmente, el uso de acordeones es recomendado.

4. **Componentes CSS nuevos necesarios:**
   - `.edt-phase` (contenedor de fase)
   - `.edt-phase__header` (click para expandir/colapsar)
   - `.edt-phase__badge` (intermedia / final / crítica)
   - `.edt-phase__content` (contenido colapsable)
   - `.edt-dict-table` (tabla del diccionario, más compacta que `data-table`)

**Criterio de aceptación:**
- [ ] Las 11 fases están listadas en `planeacion.html` con sus actividades individuales (88 total).
- [ ] Cada actividad tiene su diccionario EDT (descripción, criterio de cierre, evidencia).
- [ ] Las fases son colapsables para no saturar la página.
- [ ] Actividades críticas están visualmente diferenciadas.
- [ ] Datos consistentes con `PRD-general.md` secciones 4.2 y 5.

---

### WEB-06: Integración con Jira (evaluación de viabilidad)

**Requisito:** Mostrar el cronograma del proyecto en tiempo real conectado a Jira.

**Evaluación de viabilidad:**

| Opción | Complejidad | Requiere | Resultado |
|--------|-------------|----------|-----------|
| **A. Iframe embed de Jira Cloud** | Baja | Proyecto Jira Cloud (free tier), tablero público o enlace compartido | Timeline/Board embebido en la página. Limitado: Jira Cloud free no soporta boards embebidos públicos fácilmente; requiere autenticación. |
| **B. Jira API + JavaScript (cliente)** | Alta | Token API, proxy CORS (Jira no permite CORS desde orígenes arbitrarios) | Cronograma dinámico con datos frescos. Problema: exponer tokens en cliente, necesita backend/proxy. |
| **C. Serverless proxy (Cloudflare Worker / Vercel Function)** | Media | Cuenta Cloudflare/Vercel, token Jira | Proxy seguro que consulta Jira API y devuelve JSON. JS del sitio llama al proxy. Viable para GitHub Pages. |
| **D. CI/CD build-time (GitHub Actions)** | Media | GitHub Actions, token Jira como secret | Genera HTML/JSON estático en cada push o schedule. Datos se refrescan cada N minutos. |
| **E. Enlace externo a Jira** | Mínima | Solo URL del board | Botón "Ver en Jira" que abre el tablero en nueva pestaña. Sin integración real. |

**Recomendación:**

1. **Si ya tienen Jira Cloud (gratuito para ≤10 usuarios):** Opción **D** (GitHub Actions genera un JSON con issues/timeline cada hora, el sitio web lo consume con JavaScript y renderiza un Gantt con librería como `frappe-gantt` o `dhtmlxGantt`). Alternativa rápida: opción **E** como MVP (enlace al board).

2. **Si no tienen Jira:** Opción **E** (crear proyecto Jira Cloud free, configurar board, enlazar desde el sitio). Evolucionar a **D** cuando haya tiempo.

3. **Plugin Atlassian MCP:** Existe el folder `plugin-atlassian-atlassian` en la configuración de Cursor pero está vacío (no configurado). Si se configura, permite gestionar issues desde el IDE pero no resuelve la visualización en el sitio web.

**Prerrequisitos para cualquier opción con datos en vivo:**
- [ ] Crear proyecto Jira Cloud (gratuito) con las 11 fases como épicas y los 88 entregables como issues.
- [ ] Configurar el plugin Atlassian MCP (para gestión desde Cursor).
- [ ] Definir la pipeline de datos (API → proxy/CI → sitio).

**Decisión pendiente:** El equipo debe confirmar si ya dispone de un workspace Jira o si se crea uno nuevo. Según la decisión, se selecciona la opción de integración.

**Criterio de aceptación (MVP):**
- [ ] Al menos un enlace funcional al tablero Jira desde `planeacion.html`.
- [ ] (Stretch) Gantt dinámico renderizado en el sitio con datos de Jira.

---

### WEB-07: Sección "Explorar el Proyecto" con tarjetas de módulos

**Problema:** El botón "Explorar el Proyecto" en el hero del landing actualmente enlaza a `#proceso`. El usuario quiere que lleve a una nueva sección con tarjetas de todos los módulos sobre fondo unicolor.

**Implementación:**

1. **Nueva sección `#modulos`** en `index.html`:
   - Ubicar entre `#indicadores` y `#fases` (o entre `#fases` y `#equipo`).
   - Fondo unicolor sólido: `var(--secondary)` (#1E293B) oscuro o `var(--bg)` (#F8FAFC) claro. Recomendación: fondo oscuro para contraste con las secciones adyacentes.
   - Título: "Módulos del Curso" con subtítulo "6 módulos evaluativos · Proyecto integrador".

2. **Tarjetas de módulo:**
   Cada tarjeta incluye:
   - Icono/ilustración representativa (reusar SVGs existentes del timeline o nuevos).
   - Número y nombre del módulo.
   - Profesor responsable.
   - Descripción breve (1–2 líneas del resultado de aprendizaje del programa).
   - Botón/enlace "Ver módulo →" al HTML correspondiente.

3. **Layout:**
   - Grid de 3 columnas en desktop, 2 en tablet, 1 en móvil.
   - 7 tarjetas (7 módulos evaluativos del sitio): Introducción, Producción, Planeación, Robótica, Digital Factory, Control (PLC), SCADA.

4. **Actualizar el botón hero:** `href="#proceso"` → `href="#modulos"`.

5. **Componentes CSS nuevos:**
   - `.module-explorer` (sección con fondo oscuro).
   - `.module-explorer__grid` (grid de tarjetas).
   - `.module-explorer__card` (tarjeta individual con hover animation).

**Criterio de aceptación:**
- [ ] Botón "Explorar el Proyecto" lleva a sección `#modulos`.
- [ ] 7 tarjetas con nombre, profesor, descripción y enlace funcional.
- [ ] Fondo unicolor distinguible de las secciones adyacentes.
- [ ] Diseño responsive (3→2→1 columnas).
- [ ] Animaciones de reveal y hover consistentes con el sitio.

---

### WEB-08: Visor de video profesional en cada módulo

**Requisito:** Cada página de módulo debe tener un apartado para videos con diseño profesional.

**Implementación:**

1. **Componente `video-showcase`:**
   - Sección dedicada dentro de cada `module-content`.
   - Soporte para múltiples videos (lista/grid de videos del módulo).
   - Cada video muestra: thumbnail (poster), título del video, duración (opcional), botón de reproducción overlay.
   - Diseño: fondo oscuro `var(--secondary)` con tarjetas de video en grid, aspect-ratio 16:9.

2. **Soporte técnico:**
   - `<video>` nativo HTML5 para archivos locales (`.mp4`, `.webm`).
   - Iframe para YouTube/Vimeo (embed responsive con `aspect-ratio: 16/9`).
   - Placeholder cuando no hay video: ilustración SVG + texto "Video en preparación" con estilo sutil.

3. **Componentes CSS nuevos:**
   - `.video-showcase` (sección contenedora).
   - `.video-grid` (grid de videos, 1–2 columnas).
   - `.video-card` (tarjeta individual con poster y overlay).
   - `.video-card__poster` (imagen/thumbnail con overlay de play).
   - `.video-card__play` (botón de play centrado, SVG circle+triangle).
   - `.video-card__info` (título y descripción debajo del video).
   - `.video-card--placeholder` (estado cuando no hay video aún).

4. **Ubicación en cada módulo:**
   - Al final del contenido del módulo, antes del footer.
   - Título: "Videos del Módulo" o "Material Audiovisual".

**Criterio de aceptación:**
- [ ] Las 7 páginas de módulo tienen la sección de videos.
- [ ] Diseño profesional con aspect-ratio 16:9 y overlay de play.
- [ ] Estado placeholder atractivo para módulos sin video aún.
- [ ] Soporte para video nativo (`<video>`) y embeds externos (YouTube/Vimeo).
- [ ] Responsive: 2 columnas → 1 columna en móvil.

---

### WEB-09: Deep links de fases → planeación + botones de navegación cruzada

**Requisito:** Las tarjetas de la sección "Fases del Proyecto" en `index.html` deben:
1. Al hacer click, redirigir a `planeacion.html` en la sección/fase correspondiente.
2. Cada sección del sitio que tenga una "versión extendida" debe tener un botón de navegación hacia ella.

**Implementación:**

1. **Anchors en `planeacion.html`:**
   - Cada fase necesita un `id` único: `#fase-1`, `#fase-2`, ..., `#fase-11`.
   - Estos anchors se colocan en los encabezados de fase de la EDT completa (ver WEB-05).

2. **Links en tarjetas del timeline (`index.html`):**
   - Actualmente algunas tarjetas tienen `<a class="timeline__link" href="modulos/produccion.html#as-is">Ver módulo →</a>`.
   - Cambiar/añadir link a planeación: cada tarjeta de fase debe tener un enlace que lleve a `modulos/planeacion.html#fase-N`.
   - Hacer la tarjeta completa clickable (wrapping `<a>` o JavaScript) además del enlace textual.

3. **Botones de navegación cruzada:**
   - En cada sección relevante, añadir botón "Ver detalle completo →" o "Ver en Planeación →" que enlaza a la versión extendida.
   - Mapeo de secciones con versión extendida:

   | Sección en `index.html` | Versión extendida en |
   |-------------------------|---------------------|
   | `#proceso` (flujo general) | `produccion.html#dap` |
   | `#productos` (portafolio) | `produccion.html#productos` |
   | `#indicadores` (AS-IS) | `produccion.html#indicadores` |
   | `#fases` (Fase N) | `planeacion.html#fase-N` |
   | `#equipo` | — (no tiene versión extendida) |

   - En las páginas de módulo, las secciones que sean resúmenes pueden tener botón "Ver EDT completa →" → `planeacion.html#edt`.

4. **Componente CSS:**
   - `.section__crosslink` (botón de enlace cruzado, estilo outline o ghost con flecha).
   - Ubicar al final de cada sección como acción secundaria.

**Criterio de aceptación:**
- [ ] Las 11 tarjetas de fase en el timeline de `index.html` enlazan a `planeacion.html#fase-N`.
- [ ] `planeacion.html` tiene anchors `#fase-1` a `#fase-11` en las secciones correspondientes.
- [ ] Secciones de `index.html` con versión extendida tienen botón de navegación cruzada.
- [ ] Navegación fluida con scroll suave al anchor destino.

---

### Resumen de prioridades y esfuerzo (Prioridad 0)

| ID | Tarea | Esfuerzo estimado | Dependencia |
|----|-------|-------------------|-------------|
| WEB-01 | Header colors | Bajo (CSS only) | — |
| WEB-02 | Profesores | Medio (HTML+CSS) | Confirmar rol de Eduardo Barrera |
| WEB-03 | Márgenes | Bajo (CSS only) | — |
| WEB-04 | Padding top | Bajo (CSS only) | — |
| WEB-05 | EDT completa + diccionario | Alto (mucho HTML, posible JS para acordeones) | WEB-03, WEB-04, WEB-09 (anchors) |
| WEB-06 | Jira integration | Variable (MVP bajo; completo alto) | Decisión del equipo sobre Jira Cloud |
| WEB-07 | Explorar → módulos cards | Medio (HTML+CSS) | WEB-02 (datos de profesores) |
| WEB-08 | Video showcase | Medio (CSS + placeholder) | — |
| WEB-09 | Deep links + crosslinks | Medio (HTML + JS smooth scroll) | WEB-05 (anchors en planeacion) |

**Orden de ejecución recomendado:**
1. WEB-01 + WEB-03 + WEB-04 (fixes CSS rápidos, sin dependencias)
2. WEB-02 (profesores, desbloquea WEB-07)
3. WEB-07 (sección módulos cards)
4. WEB-05 + WEB-09 (EDT completa con anchors y deep links, son interdependientes)
5. WEB-08 (video showcases en módulos)
6. WEB-06 (Jira, requiere decisión del equipo)

---

## Métricas de avance (solo backlog pendiente)

| Métrica | Valor inicial (2026-03-22) |
|---------|----------------------------|
| Total de ítems checkbox en este documento | **~145** (85 originales + ~25 Sprint 1 + ~35 Sprint 2) |
| Ítems completados | **~25** (Sprint 1 / Prioridad 0 completado) |
| Pendientes | **~120** |
| Porcentaje de avance del backlog FluxLine | **~17%** |

**Cómo actualizar:** contar casillas `[x]` / total. Los entregables ya terminados descritos en `PRD-general.md` **no** entran en este porcentaje (este archivo es solo lo pendiente).

---

## Riesgos y dependencias externas

| Riesgo o dependencia | Impacto | Mitigación sugerida |
|----------------------|---------|---------------------|
| Licencias **Tecnomatix Plant Simulation**, **RobotStudio**, **Studio 5000 / Logix Emulate**, **Ignition** | Bloquea 5.x, 7.x, 8.x, 9.x, 10.x | Confirmar en laboratorio o PCs del equipo; alternativas académicas acordadas con docentes |
| **OPC** y conectividad real vs simulada | Afecta 10.5 y pruebas 11.2 | Acotar alcance a emulación documentada; fijar supuestos en 4.2–4.3 |
| Datos operativos reales de planta | Riesgo de supuestos | Marcar `[PRUEBA]` donde no haya dato verificable; citar fuentes en `PRD-general.md` |
| Calendario de **sustentaciones** (10% + 60%) | Alto impacto en nota | Adelantar 11.6–11.8 en el cronograma 6.2–6.3 |
| Sobrecarga paralela (simulación + PLC + SCADA) | Retrasos en cadena | Priorizar P1 y repartir roles en 6.3 |
| Contenido web **11.5*** dependiente de módulos | Sitio desactualizado | Regla: no publicar página hasta tener fase fuente “listo para revisión” |

---

## Control de cambios

| Versión | Fecha | Cambio |
|---------|-------|--------|
| 1.0 | 2026-03-22 | Creación del PRD pendiente a partir del backlog acordado |
| 1.1 | 2026-03-22 | Añadida Prioridad 0 — 9 mejoras web (WEB-01 a WEB-09): header colors, profesores, márgenes, padding, EDT completa, Jira, módulos cards, video showcase, deep links |
| 1.2 | 2026-03-22 | Añadida Prioridad 0B — Sprint 2: 10 tareas (WEB-10 a WEB-19): reestructura nav, contacto, asignatura, reflexiones, footer, legal, diagramas, Jira live, hero margins, hero redesign |
