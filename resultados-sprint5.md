# Resultados Sprint 5 — Actualización con datos reales

> **Fecha:** 24-mar-2026
> **Sprint:** 5 (datos reales)
> **PRD de referencia:** `PRD-sprint5-datos-reales.md`

---

## 1. Archivos del Drive validados y utilizados

### 1.1 Archivos de datos de producción

| Archivo Drive | Datos extraídos | Páginas actualizadas |
|---------------|----------------|----------------------|
| `Proyecto entrega 1/Cálculos indicadores.xlsx` | OEE AS-IS por producto: Gaseosa 71.43%, Energética 77.41%, Garrafón 73.44%. Takt time, demanda mínima, tasa de producción efectiva por producto. Reemplazo de Agua 1L por Garrafón 20L. | `propuesta.html`, `modulos/produccion.html`, `index.html` |
| `Archivos página/evaluacion_economica_bebidas_carbonatadas_v2.pdf` | VPN ($201,935M COP), TIR (~251%), ROI (244.6%), Payback (~4.8 meses). CapEx ($18,000M), Capital de trabajo ($7,000M). APU completo por componente (COP/bot y %Prod). Estado de resultados proyectado. Flujo de caja 5 años. Sensibilidad al OEE. Escenarios de penetración de mercado. Parámetros del modelo. | `evaluacion.html` |
| `Archivos página/Cronograma actual.png` | Imagen del diagrama de Gantt del proyecto. | `modulos/planeacion.html` |
| `Archivos página/Modelo de negocio (inicial).pdf` | Business Model Canvas (ya en uso como PNG desde Sprint anterior). | `index.html` (sin cambios, ya estaba) |
| `Archivos página/VSM Coca-Cola Retornable.pdf` | VSM AS-IS de Gaseosa Retornable (ya en uso como PNG desde Sprint anterior). | `propuesta.html`, `modulos/produccion.html` (sin cambios, ya estaba) |

### 1.2 Archivos del Drive NO utilizados (obsoletos o sin relevancia directa)

| Archivo Drive | Razón de exclusión |
|---------------|-------------------|
| `Cálculos indicadores.xlsx` (raíz) | **OBSOLETO** — versión anterior con OEE ~94% y Agua 1L. Reemplazado por la versión en `Proyecto entrega 1/`. |
| `Cálculos indicadores - Anexo.xlsx` | Datos complementarios del taller anterior, no relevantes para datos actuales. |
| `Copia de Planta Coca Cola.drawio` | Archivo fuente de Draw.io. Se usa `Planta Coca Cola.png` solo como referencia. |
| `DAP.xlsx` | Datos de diagrama analítico solo para Agua 1L (producto descontinuado). |
| `Documento sin título.docx` | Sin contenido relevante. |
| `Comenzar a planear su proyecto.docx` | Plantilla de la materia, no datos del proyecto. |
| `Taller 1/Taller_1___Grupo_4.pdf` | Entrega del taller 1, datos ya superados por la Entrega 1. |
| `Proyecto entrega 1/CocaCola400mL 1.0.spp` | Archivo de Tecnomatix Plant Simulation. No se puede visualizar en web (binario). |

---

## 2. Cambios realizados por archivo HTML

### 2.1 `website/index.html`
- Producto "Agua Purificada 1L PET" reemplazado por "Garrafón de Agua 20L PE" con nuevo icono SVG.
- OEE AS-IS en hero permanece "~75%" (promedio aceptable de 71–77%).
- Modelo de negocio ahora con visor OpenSeadragon (zoom interactivo).

### 2.2 `website/propuesta.html`
- Hero tagline actualizado a "tres familias de producto" (sin mencionar cantidad de líneas).
- Zona card "Líneas de Producción" reemplazada por "Familias de Producto".
- Layout de planta marcado como "imagen de referencia".
- 3 product cards con OEE AS-IS correcto: 71.4%, 77.4%, 73.4%.
- Velocidad y Takt Time de Energética y Garrafón corregidos.
- Tabla de indicadores AS-IS reescrita con 4 filas (Demanda, Takt, Tasa producción, OEE).
- 3 gauges SVG actualizados con porcentajes AS-IS reales.
- Diagrama de Garrafón marcado como "referencia, pendiente de actualizar".
- VSM ahora con visor OpenSeadragon.

### 2.3 `website/modulos/produccion.html`
- Texto introductorio actualizado a "Agua en garrafón (20L)".
- Stat card "3 Líneas de producción" → "3 Familias de producto".
- Rango de throughput: "15k–30k" → "900–20k".
- DAP de Garrafón marcado como "referencia, pendiente de actualizar".
- Texto OEE: "superiores al 94%" → "entre 71% y 77% (AS-IS)".
- KPI cards con valores reales por producto.
- Tabla de indicadores reescrita con datos AS-IS reales.
- VSM narrativo actualizado (demandas y takt times reales para Monster y Garrafón).
- "Lead Time Agua" → "Lead Time Garrafón" con nota de trazabilidad.
- VSM ahora con visor OpenSeadragon.

### 2.4 `website/evaluacion.html`
- Contenido completamente reescrito con datos financieros reales del PDF.
- Nota de alcance: evaluación solo para línea Coca-Cola 400mL.
- Enlace de descarga al PDF original.
- Indicadores financieros: ROI 244.6%, TIR ~251%, VPN $201,935M, Payback ~4.8 meses.
- Estructura de inversión: CapEx $18,000M, Capital trabajo ~$7,000M, Total $25,000M.
- Tabla APU completa (materia prima, empaque, mano de obra, energía, mantenimiento, CIF, SGA).
- Estado de resultados proyectado.
- Flujo de caja 5 años.
- Sensibilidad al OEE.
- Escenario de penetración de mercado.
- Parámetros del modelo.

### 2.5 `website/modulos/planeacion.html`
- Imagen del cronograma integrada con visor OpenSeadragon (zoom interactivo).

### 2.6 Nuevos archivos creados
| Archivo | Origen |
|---------|--------|
| `website/img/pagina/cronograma-actual.png` | `unal:Archivos página/Cronograma actual.png` |
| `website/docs/evaluacion-economica-v2.pdf` | `unal:Archivos página/evaluacion_economica_bebidas_carbonatadas_v2.pdf` |
| `website/js/osd-init.js` | Nuevo — inicializador de OpenSeadragon |

---

## 3. OpenSeadragon integrado

Visor interactivo con zoom profundo (scroll/pinch, hasta 5x resolución) integrado en:

| Página | Imagen | Altura del visor |
|--------|--------|-----------------|
| `index.html` | `modelo-negocio.png` (345KB) | 500px |
| `propuesta.html` | `vsm-cocacola.png` (220KB) | 450px |
| `modulos/produccion.html` | `vsm-cocacola.png` (220KB) | 450px |
| `modulos/planeacion.html` | `cronograma-actual.png` (1.6MB) | 550px |

---

## 4. Pendientes para la primera entrega (sustentación intermedia 25–27 mar 2026)

### 4.1 Archivos por subir al Drive (`unal:Archivos página/`)

| Archivo pendiente | Destino en la web | Prioridad |
|-------------------|-------------------|-----------|
| Layout de planta oficial (diseño propio, no Coca-Cola) | `propuesta.html` placeholder de planta, `produccion.html` | Alta |
| Diagrama de operaciones para Garrafón 20L | `propuesta.html` diagrama de operaciones (reemplaza el de Agua 1L) | Media |
| Screenshots de Tecnomatix (estados por estación, throughput/OEE) | `produccion.html` placeholders de simulación | Media |
| OEE desglosado (Disponibilidad, Performance, Calidad) por producto | `propuesta.html` y `produccion.html` (actualmente solo OEE global) | Baja |
| Evaluación económica para Monster y Garrafón | `evaluacion.html` (actualmente solo Coca-Cola) | Baja — post-intermedia |
| DAP de Garrafón 20L | `produccion.html` sección DAP | Baja |

### 4.2 Datos por verificar/actualizar

| Dato | Estado actual | Acción requerida |
|------|---------------|-----------------|
| "11 Fases · 88 entregables" | En hero de `planeacion.html` | Verificar contra EDT final (Cronograma actual.xlsx muestra 90 ítems con variaciones) |
| Monster demanda vs. tasa efectiva | 9,000 demanda / 14,400 tasa | Confirmar si la tasa efectiva es correcta (produce más de lo demandado) |
| Cronograma con fechas reales del xlsx | Imagen PNG actual (estática) | PRD separado para actualizar la tabla/timeline con datos del xlsx |
| Estadística "96 días, 6 personas" | En planeacion.html | Verificar contra el EDT actualizado (96 días en EDT original) |

### 4.3 Estado de cada página para la intermedia

| Página | Estado | Notas |
|--------|--------|-------|
| `index.html` | **Lista** | Datos actualizados, Garrafón integrado |
| `propuesta.html` | **Lista (con placeholders)** | Falta layout de planta propio y diagrama Garrafón |
| `evaluacion.html` | **Lista** | Datos financieros reales, scope note incluida |
| `modulos/produccion.html` | **Lista (con placeholders)** | Faltan screenshots de Tecnomatix |
| `modulos/planeacion.html` | **Lista** | Cronograma PNG integrado; pendiente actualizar con fechas xlsx |
| `modulos/introduccion.html` | **Sin cambios** | No requería actualización de datos |
| `modulos/robotica.html` | **Sin cambios** | Contenido post-intermedia (Fase 7) |
| `modulos/control.html` | **Sin cambios** | Contenido post-intermedia (Fase 8) |
| `modulos/digital-factory.html` | **Sin cambios** | Contenido post-intermedia (Fase 9) |
| `modulos/scada.html` | **Sin cambios** | Contenido post-intermedia (Fase 10) |
| `contacto.html` | **Lista** | Sin dependencias de datos |
| `asignatura.html` | **Lista** | Sin dependencias de datos |
| `reflexiones.html` | **Lista** | Sin dependencias de datos |
| `privacidad.html` | **Lista** | Legal, sin cambios |
| `terminos.html` | **Lista** | Legal, sin cambios |
| `cookies.html` | **Lista** | Legal, sin cambios |

---

## 5. Resumen de la validación cruzada

Se ejecutó una auditoría `grep` sobre los 16 archivos HTML para confirmar:
- Ninguna referencia restante a "Agua Purificada 1L" o "Agua en botella".
- Ningún OEE AS-IS mayor al 78% (todos los valores actualizados están entre 71–77%).
- Todas las demandas actualizadas: 20,000 (Gaseosa), 9,000 (Monster), 900 (Garrafón).
- Ninguna referencia a "7 líneas de producción".
- "Gaseo S.A.S." presente en todas las páginas (no "FluxLine").
- Evaluación financiera con VPN, TIR, ROI, Payback reales.

**Inconsistencia menor encontrada y corregida:** "Lead Time Agua" → "Lead Time Garrafón" en `produccion.html`.
