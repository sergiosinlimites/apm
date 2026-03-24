# PRD Sprint 6 — Cronograma con fechas reales del xlsx

> **Versión:** 1.0
> **Fecha:** 24-mar-2026
> **Estado:** Borrador
> **Proyecto:** Gaseo S.A.S. (APM 2026-1S, Grupo 4, UNAL)
> **Prioridad:** Alta — las fechas del cronograma deben coincidir con Jira

---

## 1. Contexto y problema

La sección de cronograma en `modulos/planeacion.html` utiliza actualmente una **imagen PNG** del diagrama de Gantt y una lista de hitos (`timeline-mini`) cuyos datos provienen del documento de reprogramación (`reprogramacion_apm_marzo2026.md`), que fue una estimación interna.

El usuario actualizó las fechas reales directamente en **Jira** y las exportó a `Archivos página/Cronograma actual.xlsx`. Estas son la **fuente de verdad** para el cronograma del proyecto.

### Discrepancias principales

| Aspecto | Valor actual en la web | Valor en xlsx (real) |
|---------|------------------------|---------------------|
| Número de fases | 11 | 11 workstreams + 3 transversales (equipo, repo, web, sustentaciones) |
| Entregables | 88 (de EDT_Cronograma.xlsx) | 90 ítems con fechas en Jira |
| Días proyecto | 96 | 96 días-persona en EDT; calendario real: 11-feb a 29-may |
| Hitos en timeline | Solo inicios de fase | Inicios Y fines con estados reales (Done/In Progress/To Do) |
| Sustentación final | 20–22 may | **25–29 may** según xlsx |
| Fases 5, 6 | No en el timeline actual | Paralelas con fases 1–3, deben aparecer |
| Fase 7 (Robótica) | No en timeline | 23-mar a 11-abr |

---

## 2. Fuente de datos

### 2.1 Fuente primaria: `Archivos página/Cronograma actual.xlsx`

Hoja `Basic view` — exportación de Jira con columnas: WBS, Key (APM-NNN), Summary, Assignee, Status, Priority, Issue Type, Description, Due date, Linked Issues, Start date.

### 2.2 Datos completos extraídos

#### Resumen por workstream (fases principales)

| WBS | Fase | Inicio | Fin | Estado |
|-----|------|--------|-----|--------|
| 1 | Alcance técnico del proceso | 2026-02-11 | 2026-02-27 | Done |
| 2 | Levantamiento AS-IS | 2026-02-13 | 2026-03-10 | Done |
| 3 | Diseño futuro y automatización | 2026-03-10 | 2026-03-18 | In Progress |
| 4 | Arquitectura e instrumentación | 2026-03-28 | 2026-04-07 | To Do |
| 5 | Gestión y evaluación producción (simulación) | 2026-03-16 | 2026-04-09 | To Do |
| 6 | Planeación y evaluación de proyectos | 2026-03-04 | 2026-03-23 | To Do |
| 7 | Celda robotizada | 2026-03-23 | 2026-04-11 | To Do |
| 8 | Controladores industriales | 2026-04-08 | 2026-04-18 | To Do |
| 9 | Gemelo digital | 2026-04-20 | 2026-04-29 | To Do |
| 10 | SCADA/HMI | 2026-04-20 | 2026-05-09 | To Do |
| 11 | Validación y entregables finales | 2026-05-11 | 2026-05-23 | To Do |

#### Hitos de sustentación

| Key | Hito | Inicio | Fin |
|-----|------|--------|-----|
| APM-106 | Sustentación 1 | 2026-03-25 | 2026-03-27 |
| APM-107 | Sustentación 2 | 2026-05-25 | 2026-05-29 |

#### Actividades detalladas por fase (con sub-tareas)

**Fase 1 — Alcance técnico (Done)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-30 | 1.1 Contextualización del proyecto | 2026-02-23 | 2026-02-27 | Done |
| APM-26 | 1.2 Especificación de productos a analizar | 2026-02-14 | 2026-02-19 | Done |
| APM-41 | 1.3 Identificación de procesos | 2026-02-20 | 2026-02-23 | Done |
| APM-49 | 1.4 Indicadores por producto establecidos | 2026-02-24 | 2026-02-26 | Done |

**Fase 2 — Levantamiento AS-IS (Done)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-27 | 2.1 Levantamiento técnico del proceso | 2026-02-13 | 2026-02-14 | Done |
| APM-29 | 2.2 Diagramas de operaciones | 2026-02-16 | 2026-02-18 | Done |
| APM-31 | 2.3 Flujo de materiales e información | 2026-02-19 | 2026-02-21 | Done |
| APM-33 | 2.4 Estaciones, equipos y recursos | 2026-02-23 | 2026-02-24 | Done |
| APM-34 | 2.5 Tiempos base de operación | 2026-02-25 | 2026-02-27 | Done |
| APM-36 | 2.6 Value Stream Map AS-IS | 2026-02-28 | 2026-03-02 | Done |
| APM-37 | 2.7 Desperdicios/Muda identificados | 2026-03-03 | 2026-03-04 | Done |
| APM-38 | 2.8 Indicadores AS-IS calculados | 2026-03-05 | 2026-03-06 | Done |
| APM-39 | 2.9 Fallas y mantenimiento identificados | 2026-03-07 | 2026-03-09 | Done |

**Fase 3 — Diseño futuro (In Progress)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-42 | 3.1 Objetivos de mejora definidos | 2026-03-10 | 2026-03-11 | Done |
| APM-43 | 3.2 Propuesta Lean formulada | 2026-03-12 | 2026-03-13 | Done |
| APM-45 | 3.3 VSM estado futuro | 2026-03-14 | 2026-03-14 | In Progress |
| APM-48 | 3.4 Estrategia multiproducto | 2026-03-14 | 2026-03-14 | Done |
| APM-50 | 3.5 Estrategia cambio de producto | 2026-03-16 | 2026-03-16 | Done |
| APM-51 | 3.6 Estrategia fallas y recuperación | 2026-03-17 | 2026-03-17 | In Progress |
| APM-52 | 3.7 Estrategia rechazo y reproceso | 2026-03-18 | 2026-03-18 | In Progress |

**Fase 4 — Arquitectura (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-70 | 4.1 Arquitectura ISA-95 | 2026-03-28 | 2026-03-30 | To Do |
| APM-71 | 4.2 Arquitectura de comunicaciones | 2026-03-30 | 2026-03-30 | To Do |
| APM-72 | 4.3 Topología de red industrial | 2026-03-31 | 2026-03-31 | To Do |
| APM-73 | 4.4 Lista de I/O y tags | 2026-04-01 | 2026-04-04 | To Do |
| APM-74 | 4.5 PFD/P&ID del sistema | 2026-04-01 | 2026-04-06 | To Do |
| APM-75 | 4.6 Requisitos historización | 2026-04-06 | 2026-04-07 | To Do |

**Fase 5 — Simulación productiva (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-53 | 5.1 Modelo AS-IS diseñado | 2026-03-16 | 2026-03-19 | To Do |
| APM-54 | 5.2 Modelo AS-IS validado | 2026-03-20 | 2026-03-23 | To Do |
| APM-55 | 5.3 Escenarios AS-IS simulados | 2026-03-24 | 2026-03-26 | To Do |
| APM-56 | 5.4 Desempeño AS-IS cuantificado | 2026-03-27 | 2026-03-28 | To Do |
| APM-57 | 5.5 Modelo TO-BE diseñado | 2026-03-30 | 2026-04-01 | To Do |
| APM-58 | 5.6 Modelo TO-BE validado | 2026-04-02 | 2026-04-03 | To Do |
| APM-61 | 5.7 Modelo TO-BE simulado | 2026-04-04 | 2026-04-06 | To Do |
| APM-59 | 5.8 OEE y KPIs por escenario | 2026-04-07 | 2026-04-08 | To Do |
| APM-60 | 5.9 Comparativo AS-IS vs TO-BE | 2026-04-09 | 2026-04-09 | To Do |

**Fase 6 — Planeación y evaluación (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-76 | 6.1 EDT y diccionario aprobados | 2026-03-04 | 2026-03-05 | To Do |
| APM-77 | 6.2 Cronograma base estructurado | 2026-03-06 | 2026-03-07 | To Do |
| APM-78 | 6.3 Plan de recursos consolidado | 2026-03-09 | 2026-03-10 | To Do |
| APM-79 | 6.4 Presupuesto CAPEX/OPEX | 2026-03-11 | 2026-03-12 | To Do |
| APM-80 | 6.5 Evidencias de precios | 2026-03-13 | 2026-03-14 | To Do |
| APM-81 | 6.6 Flujo de caja documentado | 2026-03-14 | 2026-03-16 | To Do |
| APM-82 | 6.7 Indicadores financieros calculados | 2026-03-16 | 2026-03-17 | To Do |
| APM-83 | 6.8 Propuesta de valor formulada | 2026-03-18 | 2026-03-18 | To Do |
| APM-84 | 6.9 Oferta comercial estructurada | 2026-03-19 | 2026-03-20 | To Do |
| APM-85 | 6.10 Modelo de negocio definido | 2026-03-20 | 2026-03-23 | To Do |

**Fases 7 y 8 — Solo workstream (sin desglose en xlsx)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-8 | 7. Celda robotizada | 2026-03-23 | 2026-04-11 | To Do |
| APM-9 | 8. Controladores industriales | 2026-04-08 | 2026-04-18 | To Do |

**Fase 9 — Gemelo digital (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-100 | 9.1 Modelo 3D del sistema | 2026-04-20 | 2026-04-21 | To Do |
| APM-101 | 9.2 Sensores y actuadores virtuales | 2026-04-22 | 2026-04-23 | To Do |
| APM-102 | 9.3 Integración con Logix Emulate | 2026-04-24 | 2026-04-25 | To Do |
| APM-103 | 9.4 Pruebas integradas | 2026-04-27 | 2026-04-27 | To Do |
| APM-104 | 9.5 Validación funcional | 2026-04-28 | 2026-04-29 | To Do |

**Fase 10 — SCADA/HMI (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-92 | 10.1 Estándar HMI ISA-101 | 2026-04-20 | 2026-04-21 | To Do |
| APM-93 | 10.2 Pantallas HMI diseñadas | 2026-04-22 | 2026-04-23 | To Do |
| APM-94 | 10.3 Modelo de tags SCADA | 2026-04-24 | 2026-04-25 | To Do |
| APM-95 | 10.4 SCADA en Ignition | 2026-04-25 | 2026-04-29 | To Do |
| APM-96 | 10.5 Comunicación OPC operativa | 2026-04-30 | 2026-05-02 | To Do |
| APM-97 | 10.6 Alarmas y eventos configurados | 2026-05-04 | 2026-05-05 | To Do |
| APM-98 | 10.7 Interacción del operador | 2026-05-06 | 2026-05-06 | To Do |
| APM-99 | 10.8 Validación con gemelo digital | 2026-05-04 | 2026-05-09 | To Do |

**Fase 11 — Validación y entregables (To Do)**

| Key | Actividad | Inicio | Fin | Estado |
|-----|-----------|--------|-----|--------|
| APM-108 | 11.1 Criterios de aceptación | 2026-05-11 | 2026-05-11 | To Do |
| APM-109 | 11.2 Pruebas E2E ejecutadas | 2026-05-11 | 2026-05-16 | To Do |
| APM-110 | 11.3 Cuadro resumen final | 2026-05-11 | 2026-05-12 | To Do |
| APM-111 | 11.4 Repositorio GitHub consolidado | 2026-05-13 | 2026-05-14 | To Do |
| APM-112 | 11.5 Sitio web completado | 2026-05-15 | 2026-05-16 | To Do |
| APM-113 | 11.6 Video de proyecto producido | 2026-05-13 | 2026-05-19 | To Do |
| APM-115 | 11.7 Sustentación final preparada | 2026-05-20 | 2026-05-23 | To Do |
| APM-116 | 11.8 Reflexiones de aprendizaje | 2026-05-20 | 2026-05-23 | To Do |

---

## 3. Cambios requeridos en `modulos/planeacion.html`

### 3.1 Actualizar timeline-mini con fechas reales y estados del xlsx

Reemplazar la lista `timeline-mini` actual con una que incluya:
- **Todas las fases** con rango de fechas (inicio – fin)
- **Estado visual** (done/in-progress/todo) según el xlsx
- **Hitos de sustentación** diferenciados
- Fase 5 y 6 que actualmente no aparecen

**HTML propuesto (reemplazo de `<ul class="timeline-mini">`):**

```html
<ul class="timeline-mini reveal" aria-label="Hitos del proyecto">
  <li class="timeline-mini__item timeline-mini__item--done">
    <span class="timeline-mini__label">Fase 1 — Alcance técnico</span>
    <span class="timeline-mini__date">11 feb – 27 feb</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--done">
    <span class="timeline-mini__label">Fase 2 — Levantamiento AS-IS</span>
    <span class="timeline-mini__date">13 feb – 10 mar</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--done">
    <span class="timeline-mini__label">Fase 6 — Planeación y evaluación</span>
    <span class="timeline-mini__date">04 mar – 23 mar</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--active">
    <span class="timeline-mini__label">Fase 3 — Diseño futuro y automatización</span>
    <span class="timeline-mini__date">10 mar – 18 mar</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--active">
    <span class="timeline-mini__label">Fase 5 — Simulación productiva</span>
    <span class="timeline-mini__date">16 mar – 09 abr</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--milestone">
    <span class="timeline-mini__label">Sustentación intermedia</span>
    <span class="timeline-mini__date">25 – 27 mar</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 7 — Celda robotizada</span>
    <span class="timeline-mini__date">23 mar – 11 abr</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 4 — Arquitectura e instrumentación</span>
    <span class="timeline-mini__date">28 mar – 07 abr</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 8 — Controladores industriales</span>
    <span class="timeline-mini__date">08 abr – 18 abr</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 9 — Gemelo digital</span>
    <span class="timeline-mini__date">20 abr – 29 abr</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 10 — SCADA/HMI</span>
    <span class="timeline-mini__date">20 abr – 09 may</span>
  </li>
  <li class="timeline-mini__item">
    <span class="timeline-mini__label">Fase 11 — Validación y entregables</span>
    <span class="timeline-mini__date">11 may – 23 may</span>
  </li>
  <li class="timeline-mini__item timeline-mini__item--milestone">
    <span class="timeline-mini__label">Sustentación final</span>
    <span class="timeline-mini__date">25 – 29 may</span>
  </li>
</ul>
```

### 3.2 Agregar CSS para el estado `--active` y `--milestone`

En `website/css/styles.css`, añadir estilos para:
- `.timeline-mini__item--active` — color de indicador distinto (p.ej. naranja/ámbar) para "In Progress"
- `.timeline-mini__item--milestone` — estilo diferenciado para hitos de sustentación (p.ej. borde dorado o icono especial)

### 3.3 Agregar tabla de cronograma detallado por fase

Después del `timeline-mini`, insertar una tabla HTML colapsable (`<details>`) con las fechas detalladas de cada workstream. Esto permite al visitante ver las fechas sin salir de la página.

**HTML propuesto:**

```html
<details class="cronograma-detail reveal" style="margin-top:2rem">
  <summary style="cursor:pointer;font-weight:600;color:var(--primary);font-size:1.1rem">
    Ver cronograma detallado por fase ▾
  </summary>
  <div class="table-responsive" style="margin-top:1rem">
    <table class="data-table">
      <caption>Cronograma real del proyecto — Fuente: Jira (Cronograma actual.xlsx)</caption>
      <thead>
        <tr>
          <th>Fase</th>
          <th>Actividad</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <!-- Fase 1 -->
        <tr class="phase-header"><td colspan="5"><strong>1. Alcance técnico del proceso</strong> (11 feb – 27 feb)</td></tr>
        <tr><td></td><td>1.1 Contextualización del proyecto</td><td>23 feb</td><td>27 feb</td><td>✓</td></tr>
        <tr><td></td><td>1.2 Especificación de productos</td><td>14 feb</td><td>19 feb</td><td>✓</td></tr>
        <tr><td></td><td>1.3 Identificación de procesos</td><td>20 feb</td><td>23 feb</td><td>✓</td></tr>
        <tr><td></td><td>1.4 Indicadores por producto</td><td>24 feb</td><td>26 feb</td><td>✓</td></tr>
        <!-- Fase 2 -->
        <tr class="phase-header"><td colspan="5"><strong>2. Levantamiento AS-IS</strong> (13 feb – 10 mar)</td></tr>
        <tr><td></td><td>2.1 Levantamiento técnico</td><td>13 feb</td><td>14 feb</td><td>✓</td></tr>
        <tr><td></td><td>2.2 Diagramas de operaciones</td><td>16 feb</td><td>18 feb</td><td>✓</td></tr>
        <tr><td></td><td>2.3 Flujo de materiales e información</td><td>19 feb</td><td>21 feb</td><td>✓</td></tr>
        <tr><td></td><td>2.4 Estaciones y equipos</td><td>23 feb</td><td>24 feb</td><td>✓</td></tr>
        <tr><td></td><td>2.5 Tiempos base de operación</td><td>25 feb</td><td>27 feb</td><td>✓</td></tr>
        <tr><td></td><td>2.6 VSM estado actual</td><td>28 feb</td><td>02 mar</td><td>✓</td></tr>
        <tr><td></td><td>2.7 Desperdicios/Muda</td><td>03 mar</td><td>04 mar</td><td>✓</td></tr>
        <tr><td></td><td>2.8 Indicadores AS-IS</td><td>05 mar</td><td>06 mar</td><td>✓</td></tr>
        <tr><td></td><td>2.9 Fallas y mantenimiento</td><td>07 mar</td><td>09 mar</td><td>✓</td></tr>
        <!-- Fase 3 -->
        <tr class="phase-header"><td colspan="5"><strong>3. Diseño futuro y automatización</strong> (10 mar – 18 mar)</td></tr>
        <tr><td></td><td>3.1 Objetivos de mejora</td><td>10 mar</td><td>11 mar</td><td>✓</td></tr>
        <tr><td></td><td>3.2 Propuesta Lean formulada</td><td>12 mar</td><td>13 mar</td><td>✓</td></tr>
        <tr><td></td><td>3.3 VSM estado futuro</td><td>14 mar</td><td>14 mar</td><td>⟳</td></tr>
        <tr><td></td><td>3.4 Estrategia multiproducto</td><td>14 mar</td><td>14 mar</td><td>✓</td></tr>
        <tr><td></td><td>3.5 Estrategia cambio producto</td><td>16 mar</td><td>16 mar</td><td>✓</td></tr>
        <tr><td></td><td>3.6 Estrategia fallas/recuperación</td><td>17 mar</td><td>17 mar</td><td>⟳</td></tr>
        <tr><td></td><td>3.7 Estrategia rechazo/reproceso</td><td>18 mar</td><td>18 mar</td><td>⟳</td></tr>
        <!-- Fase 4 -->
        <tr class="phase-header"><td colspan="5"><strong>4. Arquitectura e instrumentación</strong> (28 mar – 07 abr)</td></tr>
        <tr><td></td><td>4.1 Arquitectura ISA-95</td><td>28 mar</td><td>30 mar</td><td>—</td></tr>
        <tr><td></td><td>4.2 Arquitectura comunicaciones</td><td>30 mar</td><td>30 mar</td><td>—</td></tr>
        <tr><td></td><td>4.3 Topología red industrial</td><td>31 mar</td><td>31 mar</td><td>—</td></tr>
        <tr><td></td><td>4.4 Lista I/O y tags</td><td>01 abr</td><td>04 abr</td><td>—</td></tr>
        <tr><td></td><td>4.5 PFD/P&ID</td><td>01 abr</td><td>06 abr</td><td>—</td></tr>
        <tr><td></td><td>4.6 Requisitos historización</td><td>06 abr</td><td>07 abr</td><td>—</td></tr>
        <!-- Fase 5 -->
        <tr class="phase-header"><td colspan="5"><strong>5. Simulación productiva</strong> (16 mar – 09 abr)</td></tr>
        <tr><td></td><td>5.1 Modelo AS-IS diseñado</td><td>16 mar</td><td>19 mar</td><td>—</td></tr>
        <tr><td></td><td>5.2 Modelo AS-IS validado</td><td>20 mar</td><td>23 mar</td><td>—</td></tr>
        <tr><td></td><td>5.3 Escenarios AS-IS simulados</td><td>24 mar</td><td>26 mar</td><td>—</td></tr>
        <tr><td></td><td>5.4 Desempeño AS-IS cuantificado</td><td>27 mar</td><td>28 mar</td><td>—</td></tr>
        <tr><td></td><td>5.5 Modelo TO-BE diseñado</td><td>30 mar</td><td>01 abr</td><td>—</td></tr>
        <tr><td></td><td>5.6 Modelo TO-BE validado</td><td>02 abr</td><td>03 abr</td><td>—</td></tr>
        <tr><td></td><td>5.7 Modelo TO-BE simulado</td><td>04 abr</td><td>06 abr</td><td>—</td></tr>
        <tr><td></td><td>5.8 OEE y KPIs por escenario</td><td>07 abr</td><td>08 abr</td><td>—</td></tr>
        <tr><td></td><td>5.9 Comparativo AS-IS vs TO-BE</td><td>09 abr</td><td>09 abr</td><td>—</td></tr>
        <!-- Fase 6 -->
        <tr class="phase-header"><td colspan="5"><strong>6. Planeación y evaluación</strong> (04 mar – 23 mar)</td></tr>
        <tr><td></td><td>6.1 EDT y diccionario aprobados</td><td>04 mar</td><td>05 mar</td><td>—</td></tr>
        <tr><td></td><td>6.2 Cronograma base</td><td>06 mar</td><td>07 mar</td><td>—</td></tr>
        <tr><td></td><td>6.3 Plan de recursos</td><td>09 mar</td><td>10 mar</td><td>—</td></tr>
        <tr><td></td><td>6.4 Presupuesto CAPEX/OPEX</td><td>11 mar</td><td>12 mar</td><td>—</td></tr>
        <tr><td></td><td>6.5 Evidencias de precios</td><td>13 mar</td><td>14 mar</td><td>—</td></tr>
        <tr><td></td><td>6.6 Flujo de caja</td><td>14 mar</td><td>16 mar</td><td>—</td></tr>
        <tr><td></td><td>6.7 Indicadores financieros</td><td>16 mar</td><td>17 mar</td><td>—</td></tr>
        <tr><td></td><td>6.8 Propuesta de valor</td><td>18 mar</td><td>18 mar</td><td>—</td></tr>
        <tr><td></td><td>6.9 Oferta comercial</td><td>19 mar</td><td>20 mar</td><td>—</td></tr>
        <tr><td></td><td>6.10 Modelo de negocio</td><td>20 mar</td><td>23 mar</td><td>—</td></tr>
        <!-- Fases 7–8 -->
        <tr class="phase-header"><td colspan="5"><strong>7. Celda robotizada</strong> (23 mar – 11 abr)</td></tr>
        <tr><td colspan="5" style="font-style:italic;opacity:0.7">Desglose pendiente en Jira</td></tr>
        <tr class="phase-header"><td colspan="5"><strong>8. Controladores industriales</strong> (08 abr – 18 abr)</td></tr>
        <tr><td colspan="5" style="font-style:italic;opacity:0.7">Desglose pendiente en Jira</td></tr>
        <!-- Fase 9 -->
        <tr class="phase-header"><td colspan="5"><strong>9. Gemelo digital</strong> (20 abr – 29 abr)</td></tr>
        <tr><td></td><td>9.1 Modelo 3D del sistema</td><td>20 abr</td><td>21 abr</td><td>—</td></tr>
        <tr><td></td><td>9.2 Sensores y actuadores virtuales</td><td>22 abr</td><td>23 abr</td><td>—</td></tr>
        <tr><td></td><td>9.3 Integración Logix Emulate</td><td>24 abr</td><td>25 abr</td><td>—</td></tr>
        <tr><td></td><td>9.4 Pruebas integradas</td><td>27 abr</td><td>27 abr</td><td>—</td></tr>
        <tr><td></td><td>9.5 Validación funcional</td><td>28 abr</td><td>29 abr</td><td>—</td></tr>
        <!-- Fase 10 -->
        <tr class="phase-header"><td colspan="5"><strong>10. SCADA/HMI</strong> (20 abr – 09 may)</td></tr>
        <tr><td></td><td>10.1 Estándar HMI ISA-101</td><td>20 abr</td><td>21 abr</td><td>—</td></tr>
        <tr><td></td><td>10.2 Pantallas HMI</td><td>22 abr</td><td>23 abr</td><td>—</td></tr>
        <tr><td></td><td>10.3 Modelo de tags SCADA</td><td>24 abr</td><td>25 abr</td><td>—</td></tr>
        <tr><td></td><td>10.4 SCADA en Ignition</td><td>25 abr</td><td>29 abr</td><td>—</td></tr>
        <tr><td></td><td>10.5 Comunicación OPC</td><td>30 abr</td><td>02 may</td><td>—</td></tr>
        <tr><td></td><td>10.6 Alarmas y eventos</td><td>04 may</td><td>05 may</td><td>—</td></tr>
        <tr><td></td><td>10.7 Interacción operador</td><td>06 may</td><td>06 may</td><td>—</td></tr>
        <tr><td></td><td>10.8 Validación con gemelo</td><td>04 may</td><td>09 may</td><td>—</td></tr>
        <!-- Fase 11 -->
        <tr class="phase-header"><td colspan="5"><strong>11. Validación y entregables</strong> (11 may – 23 may)</td></tr>
        <tr><td></td><td>11.1 Criterios de aceptación</td><td>11 may</td><td>11 may</td><td>—</td></tr>
        <tr><td></td><td>11.2 Pruebas E2E</td><td>11 may</td><td>16 may</td><td>—</td></tr>
        <tr><td></td><td>11.3 Cuadro resumen final</td><td>11 may</td><td>12 may</td><td>—</td></tr>
        <tr><td></td><td>11.4 Repositorio consolidado</td><td>13 may</td><td>14 may</td><td>—</td></tr>
        <tr><td></td><td>11.5 Sitio web completado</td><td>15 may</td><td>16 may</td><td>—</td></tr>
        <tr><td></td><td>11.6 Video de proyecto</td><td>13 may</td><td>19 may</td><td>—</td></tr>
        <tr><td></td><td>11.7 Sustentación final preparada</td><td>20 may</td><td>23 may</td><td>—</td></tr>
        <tr><td></td><td>11.8 Reflexiones de aprendizaje</td><td>20 may</td><td>23 may</td><td>—</td></tr>
      </tbody>
    </table>
  </div>
</details>
```

### 3.4 Actualizar stat cards

| Stat | Valor actual | Valor correcto | Acción |
|------|-------------|----------------|--------|
| Entregables | 88 | 88 (EDT base, conservar) | Sin cambio |
| Días | 96 | 96 (EDT base, conservar) | Sin cambio |
| Fases | 11 | 11 (conservar) | Sin cambio |
| Integrantes | 6 | 6 (correcto) | Sin cambio |

### 3.5 Actualizar la fecha de la sustentación final

La sustentación final en el timeline-mini actualmente dice "20–22 may". Según el xlsx real, es **25–29 may**. Cambiar.

### 3.6 Agregar CSS para `.phase-header`, `--active`, `--milestone`

En `website/css/styles.css`:

```css
.timeline-mini__item--active .timeline-mini__label::before {
  background: #f59e0b; /* amber for in-progress */
}

.timeline-mini__item--milestone {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.timeline-mini__item--milestone .timeline-mini__label {
  font-weight: 700;
  letter-spacing: 0.02em;
}

.timeline-mini__item--milestone .timeline-mini__label::before {
  background: #8b5cf6; /* purple for milestones */
  width: 14px;
  height: 14px;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #8b5cf6;
}

.phase-header td {
  background: var(--bg-alt, #f1f5f9);
  padding-top: 1rem;
  border-bottom: 2px solid var(--primary, #2563eb);
}
```

### 3.7 Actualizar nota de ruta crítica

Cambiar la nota actual:
```
Ruta crítica final: Arquitectura → PLC → SCADA → Integración (40 días hábiles)
```
Por:
```
Ruta crítica final: Arquitectura (28 mar) → PLC (08 abr) → SCADA (20 abr) → Integración (11 may) → Sustentación final (25 may) — cadena secuencial más larga del proyecto
```

---

## 4. Inconsistencias a documentar

| Aspecto | Cronograma actual.xlsx | EDT_Cronograma.xlsx | Acción recomendada |
|---------|------------------------|---------------------|--------------------|
| Nomenclatura 11.7/11.8 | "11.8 Sustentación final" / "11.9 Reflexiones" | 11.7 intermedia / 11.8 final / 11.9 reflexiones | Usar nombres del xlsx (fuente de verdad Jira) |
| Fases 7 y 8 desglose | Solo workstream sin subtareas | 7.1–7.8 y 8.1–8.7 con duraciones | Marcar "desglose pendiente en Jira" en la tabla |
| Fase 5 naming | "Modelo AS-IS diseñado/validado" | "Modelo AS-IS implementado" | Usar texto del xlsx |
| 4.6 vs 4.7 | "Requisitos de historización" como 4.6 | "Requisitos" es 4.7; 4.6 es "Matriz de señales" | Usar texto del xlsx |

---

## 5. Orden de ejecución recomendado

1. Agregar CSS para `--active`, `--milestone` y `.phase-header` en `styles.css`
2. Reemplazar el bloque `<ul class="timeline-mini">` completo en `planeacion.html`
3. Insertar el `<details>` con la tabla de cronograma detallado después del `timeline-mini`
4. Actualizar la nota de ruta crítica
5. Verificar consistencia visual (no debe romper el layout existente)

---

## 6. Verificación

- [ ] Timeline muestra las 11 fases + 2 hitos de sustentación
- [ ] Fases 1 y 2 aparecen con estado "done" (verde)
- [ ] Fase 3 aparece con estado "in progress" (ámbar)
- [ ] Fases 4–11 aparecen como "to do" (gris)
- [ ] Sustentación intermedia: 25–27 mar
- [ ] Sustentación final: 25–29 may (corregido de 20–22 may)
- [ ] Tabla detallada colapsable funciona correctamente
- [ ] La tabla muestra las ~70 actividades con fechas del xlsx
- [ ] Nota de ruta crítica incluye fechas reales
- [ ] OpenSeadragon del cronograma PNG sigue funcionando
