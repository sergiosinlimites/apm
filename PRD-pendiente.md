# PRD Pendiente — FluxLine (solo backlog)

> **Versión:** 1.0  
> **Fecha:** 2026-03-22  
> **Estado:** Activo  
> **Proyecto:** FluxLine  
> **Materia:** Automatización de Procesos de Manufactura (APM) — 2026-1S  
> **Universidad:** Universidad Nacional de Colombia  
> **Equipo:** Grupo 4 (6 integrantes)  
> **Caso de estudio:** Coca-Cola FEMSA Bogotá (sector bebidas)

**Documento maestro de alcance y contexto:** ver `PRD-general.md` (no se duplica aquí el EDT completo, indicadores históricos ni entregables ya cerrados).

---

## Resumen ejecutivo

El proyecto FluxLine tiene definidos nombre, portafolio de productos, línea base AS-IS, indicadores, EDT y un sitio web con estructura lista; **falta completar el detalle de proceso y calidad (fase 1–2)**, el **diseño TO-BE y la arquitectura (fases 3–4)**, la **simulación comparativa en FlexSim (fase 5)**, los **entregables por herramienta** (económico, robótica, PLC, gemelo digital, SCADA), el **relleno académico del sitio**, y el **cierre** (pruebas, video y sustentaciones). Este PRD lista únicamente trabajo pendiente como plan de acción con prioridades, dependencias y criterio de apoyo AI vs equipo.

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

*Orden sugerido: completar 1.x → 2.x → 3.x → 4.x → 5.x; el modelo conceptual **2.10** antes de profundizar **5.x** en FlexSim.*

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
| [ ] | **2.10** Documentar modelo conceptual de simulación | Documento + notas para FlexSim | 2.4, tiempos DAP | Híbrido; **equipo** define entidades y supuestos |

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

### Fase 5 — Simulación FlexSim (completa)

*(Redacción alineada al checklist EDT en `PRD-general.md`, sección «Fase 5: Simulación».)*

| ID | Tarea | Herramienta principal | Dependencia | Agente AI / Equipo |
|----|--------|------------------------|---------------|---------------------|
| [ ] | **5.1** Implementar modelo AS-IS en FlexSim | FlexSim | 2.10, DAP/tiempos | **Equipo** (licencia); AI apoyo metodológico |
| [ ] | **5.2** Validar modelo AS-IS | FlexSim, informe | 5.1 | **Equipo** |
| [ ] | **5.3** Simular escenarios AS-IS | FlexSim | 5.2 | **Equipo** |
| [ ] | **5.4** Cuantificar desempeño AS-IS | Informe, gráficos | 5.3 | Híbrido |
| [ ] | **5.5** Diseñar escenarios TO-BE | Documento, FlexSim | 3.x, 5.4 | **Equipo** |
| [ ] | **5.6** Simular modelo TO-BE | FlexSim | 5.5, 5.1 | **Equipo** |
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

## Métricas de avance (solo backlog pendiente)

| Métrica | Valor inicial (2026-03-22) |
|---------|----------------------------|
| Total de ítems checkbox en este documento | **84** |
| Ítems completados | **0** (actualizar al marcar `[x]`) |
| Pendientes | **84** |
| Porcentaje de avance del backlog FluxLine | **0%** |

**Cómo actualizar:** contar casillas `[x]` / 84. Los entregables ya terminados descritos en `PRD-general.md` **no** entran en este porcentaje (este archivo es solo lo pendiente).

---

## Riesgos y dependencias externas

| Riesgo o dependencia | Impacto | Mitigación sugerida |
|----------------------|---------|---------------------|
| Licencias **FlexSim**, **RobotStudio**, **Studio 5000 / Logix Emulate**, **Ignition** | Bloquea 5.x, 7.x, 8.x, 9.x, 10.x | Confirmar en laboratorio o PCs del equipo; alternativas académicas acordadas con docentes |
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
