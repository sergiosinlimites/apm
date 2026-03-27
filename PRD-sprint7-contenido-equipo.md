# PRD Sprint 7 — Contenido de equipo, UX y evaluación económica

> **Versión:** 1.0  
> **Fecha:** 2026-03-27  
> **Estado:** Pendiente de ejecución  
> **Proyecto:** Gaseo S.A.S. (APM 2026-1S, Grupo 4, UNAL)

---

## Resumen ejecutivo

Este sprint alinea el sitio web estático (16 páginas HTML, CSS/JS vanilla, GitHub Pages) con el tono orientado a inversionistas: fotos y perfiles reales del equipo en `contacto.html`, nueva sección de propuesta de valor y OEE en `index.html`, sustitución del formulario Formspree no configurado por un CTA al Google Forms oficial, navegación principal que expone Asignatura y Reflexiones, placeholders más profesionales en módulos con huecos, ampliación de `evaluacion.html` con sensibilidades y riesgos del PDF de referencia, sección bibliográfica en `propuesta.html`, y exclusión de la carpeta privada del Drive del control de versiones mediante `.gitignore`. El orden de trabajo prioriza cambios transversales (`.gitignore`, nav) antes del contenido de contacto y landing, y cierra con evaluación económica y referencias.

---

## Tareas del Sprint

### WEB-31: Fotos del equipo en tarjetas de contacto

**Problema:** Las tarjetas del equipo en `contacto.html` usan avatares con iniciales (elemento `div.team-card__avatar` con texto "DC", "JV", etc.) en lugar de fotos reales. Ya existen archivos en `website/img/fotos/`: `sergio-b.jpg` (Sergio Bolaños), `sergio-a.jpeg` (Sergio Avellaneda), `juan-o.jpeg` (Juan Otavo), `juan-v.jpeg` (Juan Vargas), `santiago-f.jpeg` (Santiago Fonseca). No hay foto de Dixon Alberto Cuesta Segura; debe mantenerse el avatar con iniciales "DC" como respaldo hasta contar con imagen.

**Implementación:**

- Sustituir `div.team-card__avatar` por `img` con la ruta correcta en las cinco tarjetas con foto.
- Conservar avatar con iniciales solo para Dixon.
- CSS: selector `.team-card__avatar img` con `border-radius: 50%`, `width: 80px`, `height: 80px`, `object-fit: cover`.

**Archivos afectados:** `website/contacto.html`, hoja de estilos compartida del sitio (según estructura actual del proyecto).

**Criterio de aceptación:**

- [ ] Cinco de seis integrantes muestran foto real.
- [ ] Dixon muestra avatar con iniciales como fallback.
- [ ] Fotos circulares y tamaño consistente (80×80 px, `object-fit: cover`).

---

### WEB-32: Perfiles detallados del equipo

**Problema:** Las tarjetas solo muestran el rol genérico "Integrante". Se requiere perfil por persona, descripción breve (máximo 120 caracteres) y enlaces (LinkedIn, GitHub, correo) según disponibilidad.

**Datos por integrante:**

| Nombre | Perfil | Descripción (máx. 120 caracteres) | Links |
|--------|--------|-----------------------------------|-------|
| Sergio Andrés Bolaños Penagos | Coordinación y gerencia | Coordinación general, EDT, cronograma, desarrollo web e indicadores de producción. | LinkedIn: https://www.linkedin.com/in/sergioandresbolanos/ · GitHub: https://github.com/sergiosinlimites · Email: sbolanosp@unal.edu.co |
| Sergio Avellaneda Piñeros | Comunicación | VSM, propuesta de valor y modelo de negocio del proyecto. | Email: sfonsecap@unal.edu.co |
| Dixon Alberto Cuesta Segura | Económico | Indicadores financieros y evaluación económica del proyecto. | Email: dcuestas@unal.edu.co |
| Juan Esteban Otavo García | Financiero | Simulaciones de producción, análisis de mejoras en indicadores y OEE. | GitHub: https://github.com/jotavo21 · LinkedIn: https://www.linkedin.com/in/juanot21/ · Email: jotavo@unal.edu.co |
| Santiago Camilo Fonseca Prieto | Diseño | Simulaciones del proceso productivo en Tecnomatix Plant Simulation. | LinkedIn: https://www.linkedin.com/in/santiagofonsecap/ · Email: sfonsecap@unal.edu.co |
| Juan Angel Vargas Rodriguez | Técnico | Elaboración del Value Stream Mapping y análisis de flujo de valor. | GitHub: https://github.com/Juvargasro · Email: juvargasro@unal.edu.co |

**Implementación:**

- En cada `team-card`, reemplazar `<p class="team-card__role">Integrante</p>` por el perfil indicado (por ejemplo, "Coordinación y gerencia").
- Añadir `<p class="team-card__desc">` con la descripción (respetar límite de 120 caracteres en pantalla).
- Añadir iconos de enlaces (LinkedIn, GitHub, correo) bajo la descripción.
- Nuevos estilos: `.team-card__desc`, `.team-card__links`, `.team-card__link-icon`.

**Archivos afectados:** `website/contacto.html`, CSS del sitio.

**Criterio de aceptación:**

- [ ] Cada integrante tiene perfil diferenciado (no "Integrante").
- [ ] Descripción de máximo 120 caracteres visible.
- [ ] Enlaces funcionales según disponibilidad (LinkedIn, GitHub, email).
- [ ] Diseño coherente con la paleta y tipografía del sitio (granate #A8201A, navy #1E293B, Outfit + Public Sans).

---

### WEB-33: Descripción de la empresa y propuesta de valor en index.html

**Problema:** El landing no incluye un bloque que explique a Gaseo S.A.S. como empresa ni las dos acciones principales para mejorar el OEE.

**Contenido a integrar (base textual):**  
Somos una empresa enfocada en la integración de sistemas de automatización industrial, y nuestra propuesta se basa en una planta de bebidas con tres líneas de producción. Para mejorar el OEE (actualmente en 75%) se plantean dos acciones principales: primero, la implementación de sensores en puntos críticos de las líneas para medir variables que permitan aplicar mantenimiento predictivo y reducir fallas, junto con un sistema de monitoreo de paradas en tiempo real mediante herramientas como SCADA (supervisión de máquinas) o MES (gestión de producción y cálculo de OEE), lo que facilita la toma de decisiones basada en datos; segundo, la automatización del proceso de paletizado mediante un robot centralizado que atienda las tres líneas, utilizando bandas transportadoras, sistemas de acumulación (buffers) y control inteligente de flujo para gestionar la llegada de producto, lo cual reduce costos frente a múltiples robots, disminuye la dependencia de operación manual y mejora la eficiencia general de la planta.

**Implementación:**

- Nueva sección `#propuesta-valor` entre `#reto` y `#ruta`.
- Párrafo introductorio de contexto arriba de dos tarjetas visuales:
  - **Acción 1:** Sensores + SCADA/MES (monitoreo, mantenimiento predictivo, decisiones con datos).
  - **Acción 2:** Paletizado robótico centralizado (robot único, buffers, bandas, control de flujo).
- Tono profesional orientado a inversionistas; evitar lenguaje académico o de “entrega de curso”.

**Archivos afectados:** `website/index.html`, CSS del sitio.

**Criterio de aceptación:**

- [ ] Sección visible entre "El reto" y "Hoja de ruta".
- [ ] Dos acciones claramente diferenciadas con diseño de tarjetas.
- [ ] Tono profesional, con datos duros (por ejemplo OEE 75%).
- [ ] Sin redacción académica ni de entrega escolar.

---

### WEB-34: Formulario de inversionistas → Google Forms externo

**Problema:** El formulario en `contacto.html` apunta a Formspree (`action="https://formspree.io/f/FORM_ID"`) sin configurar. Debe eliminarse y sustituirse por el formulario Google ya creado.

**URL del formulario:** https://forms.gle/qCGVMUiDxzgHxtpv5  
**Título del formulario:** Formulario de Interés para Inversionistas - Gaseo S.A.S.

**Implementación:**

- Eliminar el `<form>` HTML actual hacia Formspree.
- Sustituir por un CTA: tarjeta con icono, título "¿Interesado en invertir?", texto breve y botón "Completar formulario →" que abre el Google Forms en nueva pestaña (`target="_blank"`, `rel="noopener noreferrer"`).
- Añadir CTA secundario al mismo formulario en la sección `#explorar` (CTA final) de `index.html` (detalle ampliado en WEB-40).

**Archivos afectados:** `website/contacto.html`, `website/index.html` (parcial; ver WEB-40 para evaluación).

**Criterio de aceptación:**

- [ ] Formulario Formspree eliminado de `contacto.html`.
- [ ] CTA claro y atractivo hacia Google Forms en `contacto.html`.
- [ ] Enlace funcional a `https://forms.gle/qCGVMUiDxzgHxtpv5`.
- [ ] Botón o enlace presente en el CTA final del landing (`index.html`).

---

### WEB-35: Sección de recursos bibliográficos

**Problema:** No existe un apartado de bibliografía o referencias para consulta de visitantes.

**Implementación:**

- Añadir sección `#referencias` en `propuesta.html` al final, antes del CTA final (alternativa evaluada: subsección en página de evaluación económica; la opción acordada aquí es `propuesta.html`).
- Listado inicial (formato bibliográfico uniforme: autor, año, título, editorial):

  1. Nakajima, S. (1988). *Introduction to TPM: Total Productive Maintenance*. Productivity Press.
  2. Rother, M., & Shook, J. (1999). *Learning to See: Value Stream Mapping*. Lean Enterprise Institute.
  3. Liker, J. K. (2004). *The Toyota Way: 14 Management Principles*. McGraw-Hill.
  4. Blank, L., & Tarquin, A. (2012). *Ingeniería Económica* (7.ª ed.). McGraw-Hill.
  5. Berk, J., & DeMarzo, P. (2013). *Finanzas Corporativas* (3.ª ed.). Pearson.
  6. Chase, R. B., et al. (2009). *Administración de Operaciones* (12.ª ed.). McGraw-Hill.
  7. Groover, M. P. (2007). *Fundamentals of Modern Manufacturing* (3rd ed.). Wiley.
  8. Sipper, D., & Bulfin, R. L. (1998). *Planeación y Control de la Producción*. McGraw-Hill.
  9. Goldratt, E. M., & Cox, J. (1984). *The Goal*. North River Press.
  10. Hansen, D. R., & Mowen, M. M. (2007). *Administración de Costos* (5.ª ed.). Cengage.

- Presentación: acordeón o lista numerada con estilo bibliográfico.
- Nota visible: la lista es inicial y se ampliará con el tiempo.

**Archivos afectados:** `website/propuesta.html`, CSS del sitio.

**Criterio de aceptación:**

- [ ] Sección de referencias visible en el sitio.
- [ ] Al menos diez referencias listadas con formato consistente.
- [ ] Formato bibliográfico: autor, año, título, editorial.
- [ ] Texto que indique que se añadirán más referencias en el futuro.

---

### WEB-36: Mejorar UX de navegación — Asignatura y Reflexiones accesibles

**Problema:** "Asignatura" y "Reflexiones" solo aparecen en el pie de página; no en el menú principal, lo que dificulta su descubrimiento.

**Implementación (opción recomendada A):** Subítems en el desplegable "Módulos":

```
Módulos ▾
├── Introducción
├── Producción
├── …
├── SCADA
├── ──────────── (separador)
├── Asignatura
└── Reflexiones
```

**Opción B (alternativa):** Nuevo desplegable "Proyecto" con Asignatura, Reflexiones y duplicado de enlace a Inversión si aplica.

**Archivos afectados:** Los 16 archivos HTML del sitio (nav compartido), CSS/JS de menú si aplica.

**Criterio de aceptación:**

- [ ] Asignatura y Reflexiones accesibles desde el menú principal.
- [ ] Comportamiento correcto en escritorio y móvil (submenú o patrón equivalente).
- [ ] Misma estructura de navegación en todas las páginas.

---

### WEB-37: Módulos con placeholders — mejora visual

**Problema:** Cuatro módulos (`control.html`, `robotica.html`, `scada.html`, `digital-factory.html`) dependen en gran parte de `placeholder-card` con texto genérico "Contenido en desarrollo — se actualizará con los entregables del módulo", poco adecuado para audiencia inversionista.

**Estado de referencia:**

| Módulo | Estado |
|--------|--------|
| introduccion.html | Contenido real (falta video) |
| produccion.html | Mixto: DAP/VSM/indicadores reales; huecos en TO-BE y simulación |
| planeacion.html | EDT y cronograma reales; hueco en económica |
| robotica.html | Casi todo placeholder |
| digital-factory.html | Casi todo placeholder |
| control.html | Casi todo placeholder |
| scada.html | Casi todo placeholder |

**Implementación:**

- En los cuatro módulos predominantes en placeholder: diseño más profesional (no solo bloque gris genérico), texto por sección que indique qué se espera y cuándo estará disponible (ej.: "Disponible tras la sustentación final · Mayo 2026").
- Opcional: iconos o SVG por tipo de contenido (Grafcet, Ladder, RobotStudio, etc.).
- En `produccion.html`: mejorar placeholders de TO-BE y simulación con texto específico.
- En `planeacion.html`: mejorar placeholder de económica enlazando a `evaluacion.html` donde ya existe contenido real.

**Archivos afectados:** `website/modulos/robotica.html`, `digital-factory.html`, `control.html`, `scada.html`, `produccion.html`, `planeacion.html`, CSS.

**Criterio de aceptación:**

- [ ] Placeholders con mensaje específico por sección (no solo genérico).
- [ ] Aspecto visual más profesional que el actual.
- [ ] Fecha estimada de disponibilidad visible.
- [ ] Enlaces a secciones ya publicadas donde corresponda (p. ej. evaluación económica).

---

### WEB-38: Actualizar evaluación económica con datos reales

**Problema:** `evaluacion.html` ya refleja en buena parte el PDF `evaluacion_economica_bebidas_carbonatadas_v2.pdf`, pero debe verificarse la fidelidad y completarse con secciones ausentes.

**Datos clave que deben mantenerse o contrastarse con el PDF:**

| Sección | Indicador | Valor |
|---------|-----------|-------|
| Indicadores | ROI | 244,6 % |
| Indicadores | TIR | ~251 % |
| Indicadores | VPN (12 %, 5 años) | $201.935 MM COP |
| Indicadores | Payback simple | ~4,8 meses |
| Inversión | CapEx | $18.000 MM |
| Inversión | Capital de trabajo (envases) | ~$7.000 MM |
| Inversión | Total | $25.000 MM |
| APU | Costo producción | 586,60 COP/bot |
| APU | SGA (15 %) | 225,00 COP/bot |
| APU | Costo total | 811,60 COP/bot |
| APU | Margen operativo | 688,40 COP/bot |
| Estado de resultados | Ingresos | 205.200 MM |
| Estado de resultados | EBITDA | 95.883 MM (46,7 %) |
| Estado de resultados | Utilidad neta | 61.154 MM (29,8 %) |
| Estado de resultados | FCL | 62.954 MM |
| Escenario curva | VPN curva | 148.804 MM |
| Escenario curva | TIR curva | ~152 % |
| Escenario curva | Payback curva | ~9,4 meses |

**Secciones ya presentes y a validar:** indicadores (stat-cards), estructura de inversión, APU consolidado, estado de resultados, flujo de caja 5 años, sensibilidad al OEE, escenario de penetración de mercado, parámetros del modelo.

**Ampliaciones requeridas:**

- Sensibilidad al **precio de venta** (tabla del PDF: pesimista −20 %, base, optimista +20 %).
- Sensibilidad a **ciclos de vida del envase** (10, 15, 20, 25 ciclos).
- Resumen de **riesgos del modelo** (sección 9 del PDF).
- **Conclusiones y recomendaciones** (sección 11 del PDF).
- Nota de **alcance del modelo**: aplica a gaseosa carbonatada 400 ml (u equivalente según PDF).

**Archivos afectados:** `website/evaluacion.html`, posiblemente CSS, enlace de descarga del PDF.

**Criterio de aceptación:**

- [ ] Sección de sensibilidad al precio de venta añadida y alineada al PDF.
- [ ] Sección de sensibilidad a ciclos del envase añadida.
- [ ] Resumen de riesgos del modelo visible.
- [ ] Conclusiones y recomendaciones estratégicas resumidas.
- [ ] Datos existentes verificados contra el PDF; descarga del PDF completa operativa.
- [ ] Alcance explícito (gaseosa carbonatada 400 ml) en nota u apartado visible.

---

### WEB-39: Añadir archivos privados al .gitignore

**Problema:** El contenido de `archivos-drive/APM_Grupo4/privado/` no debe versionarse en GitHub.

**Implementación:** Añadir al `.gitignore` del repositorio:

```
# Archivos privados del equipo
archivos-drive/APM_Grupo4/privado/
```

**Archivos afectados:** `.gitignore` (raíz del repo).

**Criterio de aceptación:**

- [ ] Líneas añadidas en `.gitignore` como se indica.
- [ ] Archivos bajo esa ruta dejan de aparecer en `git status` (si existen; si ya estaban rastreados, puede requerir `git rm --cached` en una tarea de limpieza aparte).

---

### WEB-40: Integrar enlace de formulario Google Forms para inversionistas

**Problema:** Complemento de WEB-34: el mismo formulario debe exponerse de forma homogénea en más puntos del sitio.

**URL:** https://forms.gle/qCGVMUiDxzgHxtpv5

**Implementación:**

1. `index.html` — sección CTA final `#explorar`: botón "Formulario para inversionistas" (o etiqueta equivalente clara) junto a los demás botones; nueva pestaña.
2. `evaluacion.html` — CTA final: botón al mismo formulario; nueva pestaña.
3. `contacto.html` — cubierto en WEB-34 (CTA sustituye Formspree).

**Archivos afectados:** `website/index.html`, `website/evaluacion.html`, `website/contacto.html`.

**Criterio de aceptación:**

- [ ] Enlace visible en `index.html`, `evaluacion.html` y `contacto.html`.
- [ ] Apertura en nueva pestaña con atributos seguros (`noopener`, `noreferrer`).
- [ ] Texto del CTA explícito (p. ej. "Formulario para inversionistas").

---

## Inventario de assets

| Asset | Ubicación / URL | Uso en sprint |
|-------|-----------------|---------------|
| Foto Sergio Bolaños | `website/img/fotos/sergio-b.jpg` | WEB-31 |
| Foto Sergio Avellaneda | `website/img/fotos/sergio-a.jpeg` | WEB-31 |
| Foto Juan Otavo | `website/img/fotos/juan-o.jpeg` | WEB-31 |
| Foto Juan Vargas | `website/img/fotos/juan-v.jpeg` | WEB-31 |
| Foto Santiago Fonseca | `website/img/fotos/santiago-f.jpeg` | WEB-31 |
| Avatar iniciales Dixon | Sin archivo; `div` con "DC" | WEB-31 |
| Google Forms inversionistas | https://forms.gle/qCGVMUiDxzgHxtpv5 | WEB-34, WEB-40 |
| PDF evaluación económica | `evaluacion_economica_bebidas_carbonatadas_v2.pdf` (ruta en repo o Drive según convención del proyecto) | WEB-38 (verificación y descarga) |
| Lista bibliográfica | Contenido en este PRD | WEB-35 |

---

## Orden de ejecución recomendado

```
1. WEB-39 — .gitignore (≈1 min, sin dependencias)
2. WEB-36 — Nav: Asignatura y Reflexiones (≈30 min, 16 HTML)
3. WEB-31 — Fotos del equipo (≈15 min)
4. WEB-32 — Perfiles detallados (≈20 min; depende de WEB-31)
5. WEB-34 + WEB-40 — Google Forms en contacto, index y evaluación (≈20 min)
6. WEB-33 — Propuesta de valor en landing (≈25 min)
7. WEB-37 — Placeholders en módulos (≈40 min)
8. WEB-35 — Recursos bibliográficos (≈15 min)
9. WEB-38 — Evaluación económica completa (≈30 min)
```

**Tiempo estimado total:** ~3,5 h

**Bloqueos / notas:**

- WEB-31: Sin foto de Dixon; mantener fallback con iniciales.
- WEB-35: Lista bibliográfica inicial; crecerá con el tiempo.
- WEB-39: Si archivos privados ya están en el índice de Git, documentar paso de `git rm --cached` fuera del alcance mínimo del PRD si hace falta.

---

## Control de cambios

| Versión | Fecha | Autor / equipo | Cambios |
|---------|--------|----------------|---------|
| 1.0 | 2026-03-27 | Grupo 4 APM | Creación del PRD Sprint 7: equipo, UX, formulario inversionistas, referencias, placeholders, evaluación económica, `.gitignore`. |
