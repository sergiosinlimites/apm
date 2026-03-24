# PRD Sprint 5 — Actualización con datos reales del proyecto

> **Versión:** 1.0  
> **Fecha:** 2026-03-24  
> **Estado:** Borrador  
> **Proyecto:** Gaseo S.A.S. (APM 2026-1S, Grupo 4, UNAL)  
> **Prioridad:** Crítica — la página muestra datos de un taller que ya no aplica

---

## 1. Contexto y problema

La página web actual se basa en datos del **Taller 1** y del Excel original `Cálculos indicadores.xlsx` (raíz del Drive), que usaba un modelo con supuestos de alta disponibilidad (97%) y producía OEE >94% para los tres productos. Estos datos **no son el estado AS-IS del proyecto** sino un ejercicio preliminar.

Los entregables actualizados del equipo (`Proyecto entrega 1/Cálculos indicadores.xlsx` y `evaluacion_economica_bebidas_carbonatadas_v2.pdf`) contienen datos significativamente distintos:

| Aspecto | Valor actual en la web | Valor correcto | Fuente |
|---------|------------------------|----------------|--------|
| OEE AS-IS promedio | ~94–95% | **~74%** | Entrega 1 Excel |
| Tercer producto | Agua Purificada 1L PET | **Garrafón 20L PE** | Entrega 1 Excel |
| Demanda Monster | 30,000 latas/h | **9,000 latas/h** | Entrega 1 Excel |
| Demanda Agua → Garrafón | 15,000 bot/h | **900 bot/h** | Entrega 1 Excel |
| Líneas de producción | "3 líneas" + lista de 7 | **No especificar** | Instrucción del equipo |
| Datos financieros | Placeholders genéricos | **Datos reales del PDF** | evaluacion_economica v2 |

**Objetivo:** Actualizar toda la página con los datos reales, sin inventar ni estimar nada que no esté en los archivos del Drive.

---

## 2. Fuentes de datos autorizadas

### 2.1 Archivos en `unal:Archivos página/` (fuente primaria para la web)

| Archivo | Contenido para la página |
|---------|--------------------------|
| `evaluacion_economica_bebidas_carbonatadas_v2.pdf` | Evaluación financiera completa: APU, FCL, VPN, TIR, ROI, Payback, sensibilidad, modelo de negocio — **solo línea Coca-Cola retornable 400mL** |
| `Modelo de negocio (inicial).pdf` | Business Model Canvas (ya convertido a PNG, en uso) |
| `VSM Coca-Cola Retornable.pdf` | VSM AS-IS de gaseosa retornable (ya convertido a PNG, en uso) |
| `Cronograma actual.png` | **NUEVO** — Diagrama de Gantt del cronograma del proyecto |

### 2.2 Archivos en el Drive raíz (datos de producción)

| Archivo | Contenido clave |
|---------|-----------------|
| `Proyecto entrega 1/Cálculos indicadores.xlsx` | OEE, takt, tasas y demanda por producto (versión actualizada con **Garrafón 20L** en lugar de Agua 1L). Incluye datos de máquinas reales (Krones, Videojet) con MTBF, MTTR y tiempos de setup |
| `Cálculos indicadores.xlsx` (raíz) | Versión anterior con Agua 1L y OEE ~94% — **OBSOLETA para el sitio, NO usar** |
| `Diagramas de operaciones de proceso/` | Diagramas: `DiagramaCocaFinal.jpg`, `DiagramaMonsterFinal.jpg`, `DiagramaBotellaAgua.jpg` (este último es para Agua 1L, no para Garrafón) |
| `Copia de Planta Coca Cola.drawio` | Layout de planta con 7 líneas rotuladas — es una **imagen de referencia**, no el diseño final |
| `Planta Coca Cola.png` | Render del layout — **imagen de referencia** |
| `DAP.xlsx` | Diagrama analítico de proceso, actualmente solo para Agua 1L |

---

## 3. Datos reales extraídos — Indicadores de producción (AS-IS)

### 3.1 OEE AS-IS por producto (fuente: `Proyecto entrega 1/Cálculos indicadores.xlsx`)

| Producto | OEE AS-IS | Takt | Demanda mín. (u/h) | Tasa efectiva R_p (u/h) |
|----------|-----------|------|---------------------|--------------------------|
| Gaseosa Coca-Cola Retornable 400 mL | **71.43%** | 0.18 s/bot | 20,000 | 16,180 |
| Monster Energy (lata 473 mL) | **77.41%** | 0.40 s/lata | 9,000 | 14,400 |
| Garrafón de Agua 20L (PE) | **73.44%** | 4.0 s/unidad | 900 | 864 |

**Promedio simple OEE AS-IS: ~74%**

Notas:
- El Excel de Entrega 1 usa datos de máquinas reales (Krones, Videojet, etc.) con MTBF, MTTR y tiempos de setup — es más realista que el modelo original
- La disponibilidad calculada para Coca-Cola baja a **~92%** (vs. 97% del modelo anterior)
- El OEE del Garrafón es **73.44%** con utilización de solo **6.51%** (baja demanda relativa a capacidad)
- Monster pasa de 30,000 a **9,000 latas/h** de demanda (ajuste basado en el ~20% del mercado colombiano según nota del Excel)

### 3.2 OEE TO-BE objetivo (fuente: `evaluacion_economica_bebidas_carbonatadas_v2.pdf`)

| Componente | Valor TO-BE | Pérdida |
|------------|-------------|---------|
| Disponibilidad (D) | 0.98 | 2% |
| Rendimiento (R) | 0.98 | 2% |
| Calidad (C) | 0.99 | 1% |
| **OEE TO-BE** | **0.95 (95%)** | **5%** |

- Solo modelado para la línea de **Coca-Cola retornable 400mL**
- Capacidad efectiva TO-BE: 19,000 bot/h (de 20,000 nominal)
- Producción anual TO-BE: 136,800,000 bot/año

### 3.3 Indicadores AS-IS que ya no deben mostrarse como los tenemos

El sitio actual muestra estos valores como "AS-IS" — **todos son del modelo obsoleto**:

| Indicador | Gaseosa (actual → correcto) | Monster (actual → correcto) | Agua/Garrafón (actual → correcto) |
|-----------|----------------------------|-----------------------------|------------------------------------|
| Demanda mín. | 20,000 → **20,000** (sin cambio) | 30,000 → **9,000** | 15,000 → **900** |
| Takt | 0.18 → **0.18** (sin cambio) | 0.12 → **0.40** | 0.24 → **4.0** |
| Tasa efectiva | 23,975 → **16,180** | 30,337 → **14,400** | 37,984 → **864** |
| Disponibilidad | 97% → **~92%** | 97% → **por verificar** | 97% → **por verificar** |
| Quality Rate | 97.0% → **por verificar** | 98.7% → **por verificar** | 98.1% → **por verificar** |
| Utilización | 83.4% → **por verificar** | 82.4% → **por verificar** | 39.5% → **6.51%** |
| OEE | 94.1% → **71.43%** | 95.7% → **77.41%** | 95.2% → **73.44%** |

> **Nota sobre "por verificar"**: Los componentes individuales del OEE (D, R, C) solo están desglosados para el TO-BE en el PDF de evaluación. Para el AS-IS, el Excel solo da el OEE total por producto. Los valores individuales deben obtenerse reextrayendo del Excel o dejando el OEE global sin desglosar.

### 3.4 Productos — cambio de tercer producto

| Antes | Ahora |
|-------|-------|
| **Agua Purificada** | **Garrafón de Agua** |
| No retornable 1 L · PET | **20 L · Polietileno (PE)** |
| Consumo diario | **Gran Volumen (GV)** |
| Diagrama: `DiagramaBotellaAgua.jpg` | **Sin diagrama actualizado** (pendiente del equipo) |

---

## 4. Datos reales extraídos — Evaluación económica

Fuente: `evaluacion_economica_bebidas_carbonatadas_v2.pdf` (31 páginas)

**Alcance del documento:** UNA (1) línea de producción de bebidas carbonatadas retornables 400mL, escenario TO-BE con OEE = 0.95.

### 4.1 Inversión

| Concepto | Valor (COP) | % Total |
|----------|-------------|---------|
| CapEx (activos fijos productivos) | 18,000,000,000 | 72.0% |
| Capital de trabajo (flota envases) | ~7,000,000,000 | 28.0% |
| **Inversión total (I₀)** | **25,000,000,000** | **100%** |

### 4.2 APU consolidado (COP/botella)

| N° | Componente | COP/bot | % Prod. |
|----|-----------|---------|---------|
| 1 | Materia prima directa | 464.00 | 79.08% |
| | — Agua tratada | 4.00 | 0.68% |
| | — Azúcar | 160.00 | 27.27% |
| | — Concentrado de sabor | 100.00 | 17.04% |
| | — CO₂ | 20.00 | 3.41% |
| | — Tapa (corona) | 80.00 | 13.63% |
| | — Etiqueta | 100.00 | 17.04% |
| 2 | Envase retornable (amortizado 20 ciclos) | 60.00 | 10.22% |
| 3 | Lavado del envase | 30.00 | 5.11% |
| 4 | Mano de obra directa | 3.13 | 0.53% |
| 5 | Depreciación (CapEx industrial) | 12.50 | 2.13% |
| 6 | Energía eléctrica (300 kW) | 9.00 | 1.53% |
| 7 | Mantenimiento (4% CapEx) | 5.00 | 0.85% |
| 8 | Personal indirecto (CIF) | 1.56 | 0.27% |
| 9 | Infraestructura (CIF) | 0.55 | 0.09% |
| 10 | Logística directa (CIF) | 0.86 | 0.15% |
| | **Costo de producción (APU)** | **586.60** | **100%** |
| 11 | SGA (15% sobre ingresos) | 225.00 | — |
| | **Costo total (prod. + SGA)** | **811.60** | — |

### 4.3 Estado de resultados (MM COP/año, escenario base TO-BE)

| Concepto | MM COP/año | % Ingresos |
|----------|------------|------------|
| Ingresos (1,500 COP/bot × 136.8M bot) | 205,200 | 100.0% |
| (−) Costos operativos (ex-depreciación) | (78,537) | 38.3% |
| (−) SGA (15% ingresos) | (30,780) | 15.0% |
| **EBITDA** | **95,883** | **46.7%** |
| (−) Depreciación | (1,800) | 0.9% |
| EBIT | 94,083 | 45.8% |
| (−) Impuesto renta (35%) | (32,929) | 16.0% |
| Utilidad neta | 61,154 | 29.8% |
| (+) Depreciación | 1,800 | — |
| **Flujo de caja libre (FCL)** | **62,954** | — |

### 4.4 Indicadores financieros de rentabilidad

| Indicador | Valor | Observación |
|-----------|-------|-------------|
| VPN (12%, 5 años) | **201,935 MM COP** | Indicador primario |
| TIR | **~251%** | Alto por escala de FCL vs inversión |
| ROI anual | **244.6%** | Sobre I₀ = 25,000 MM |
| Payback simple | **~4.8 meses** | Bajo supuesto de demanda plena |
| Payback descontado | **~5.5 meses** | — |

### 4.5 Flujo de caja proyectado (MM COP)

| Año | Inversión | FCL | FCL Descontado (12%) |
|-----|-----------|-----|----------------------|
| 0 | −25,000 | — | — |
| 1 | — | 62,954 | 56,209 |
| 2 | — | 62,954 | 50,187 |
| 3 | — | 62,954 | 44,809 |
| 4 | — | 62,954 | 40,008 |
| 5 | — | 62,954 | 35,722 |
| **Total** | | **314,770** | **226,935** |

### 4.6 Sensibilidad al OEE (extracto clave)

| OEE | Prod. (M bot) | Ingresos (MM) | EBITDA (MM) | VPN (MM) |
|-----|---------------|---------------|-------------|----------|
| 0.70 | 100.8 | 151,200 | 49,983 | 141,887 |
| 0.75 | 108.0 | 162,000 | 57,200 | 165,837 |
| 0.80 | 115.2 | 172,800 | 64,418 | 189,787 |
| 0.85 | 122.4 | 183,600 | 71,636 | 213,737 |
| 0.95 | 136.8 | 205,200 | 95,883 | 201,935 |

### 4.7 Escenario con curva de penetración de mercado

| Indicador | Modelo base (100%) | Curva (50%→95%) | Δ |
|-----------|--------------------|------------------|---|
| VPN | 201,935 MM | 148,804 MM | −26.3% |
| TIR | ~251% | ~152% | −99 p.p. |
| Payback | ~4.8 meses | ~9.4 meses | +4.6 meses |

### 4.8 Otros datos del PDF relevantes

- **Personal por turno:** 5 personas × 3 turnos = 15 total (supervisor, PLC/SCADA, lavado, logística inversa, calidad)
- **Operación:** 24 h/día, 300 días/año = 7,200 h/año
- **Precio Ex-Works:** 1,500 COP/botella (constante)
- **Tasa de descuento:** 12% e.a.
- **Impuesto renta:** 35%
- **Depreciación:** Línea recta, 10 años
- **Flota de envases:** ~6,840,000 botellas (136.8M / 20 ciclos)
- **Riesgo principal:** Azúcar + concentrado = 44.3% del APU de producción

---

## 5. Mapa de cambios por archivo

### 5.1 `website/index.html` (landing page)

| Sección | Líneas aprox. | Cambio requerido |
|---------|---------------|------------------|
| Hero stats — "~75%" | 63–64 | Cambiar a **"~74%"** o mantener "~75%" (es aproximado y aceptable). **Decisión: mantener "~75%" por simplicidad narrativa** |
| Hero stats — "11 Fases · 88 entregables" | 71–72 | Verificar si sigue siendo 88 entregables — **verificar con EDT** |
| Tarjeta "El reto" — OEE 75% | 97 | OK, dice "alrededor del 75%" — aceptable |
| Producto 3: "Agua Purificada" | 205–207 | Cambiar nombre a **"Garrafón de Agua"**, subtítulo a **"20 L · Polietileno"**, tag a **"Gran Volumen (GV)"**. Cambiar SVG del ícono a algo más representativo de un garrafón |
| Producto 3: SVG del ícono | 199–203 | Rediseñar SVG para representar un garrafón (forma más ancha y baja, con asa) |

**Total cambios en index.html: 2 (producto + ícono)**

### 5.2 `website/propuesta.html` (propuesta técnica)

| Sección | Líneas aprox. | Cambio requerido |
|---------|---------------|------------------|
| Descripción "3 líneas con capacidad combinada de 65,000 u/h" | ~60 | **Eliminar referencia a "3 líneas" y "65,000 u/h"**. Reemplazar con descripción genérica: "planta embotelladora con líneas de producción para tres familias de producto" |
| Lista de 7 líneas (Línea 1–7) | ~105–113 | **Eliminar la lista de 7 líneas completa**. Reemplazar con las 3 zonas de producto sin numerar líneas específicas |
| Fichas de producto — Gaseosa | ~164–174 | Actualizar: velocidad queda en 20,000 bot/h, takt queda en 0.18 s/bot, **OEE cambia a 71.4%** |
| Fichas de producto — Energética | ~176–186 | Actualizar: **demanda a 9,000 latas/h**, **takt a 0.40 s/lata**, **OEE a 77.4%** |
| Fichas de producto — Agua → Garrafón | ~188–208 | Cambiar nombre a **"Garrafón 20L"**, **demanda a 900 u/h**, **takt a 4.0 s/u**, **OEE a 73.4%** |
| Diagramas de operación — alt "Agua 1L" | ~225–226 | Cambiar texto alt y pie a **"Garrafón 20L"**. Mantener `DiagramaBotellaAgua.jpg` con nota de que es referencia pendiente de actualizar |
| Imagen de planta (placeholder) | ~actual | Mantener placeholder pero **agregar nota de que es imagen de referencia de la planta Coca-Cola**, no el diseño final del proyecto |
| Sección "Indicadores de Producción (AS-IS)" — Tabla completa | ~242–260 | **Actualizar TODA la tabla** con los datos del §3.3 de este PRD |
| Gauges OEE (SVG + `data-pct`) | ~265–300 | **Actualizar `data-pct`** de 94.1/95.7/95.2 a **71.4/77.4/73.4**. Cambiar etiqueta "Agua Purificada" a "Garrafón 20L" |

**Total cambios en propuesta.html: ~9 secciones**

### 5.3 `website/modulos/produccion.html` (módulo de producción)

| Sección | Líneas aprox. | Cambio requerido |
|---------|---------------|------------------|
| Texto intro "Agua purificada (1L)" | ~97 | Cambiar a **"Agua en garrafón (20L)"** |
| Stat card "3 Líneas de producción" | ~103–105 | **Eliminar o reformular**. Cambiar a "3 familias de producto" o similar sin especificar número de líneas |
| Stat card "15k–30k u/h" | ~107–109 | Actualizar rango a **"900–20,000 u/h"** (refleja el rango real) |
| Encabezado DAP "Agua Purificada 1L — 10 operaciones" | ~195 | Cambiar a **"Garrafón 20L"** (o poner placeholder si no hay DAP actualizado) |
| Texto narrativo "OEE superiores al 94%" | ~237 | Cambiar a **"OEE entre 71% y 77% en las tres referencias"** |
| Tarjetas KPI (94.1%, 95.7%, 95.2%) | ~239–253 | Actualizar a **71.4%, 77.4%, 73.4%** |
| Disponibilidad "97%" ×3 | ~239–253 | Actualizar según datos reales (si no hay desglose, mostrar solo OEE sin desglosar o indicar "por calcular") |
| Tabla de indicadores completa | ~258–276 | **Misma tabla que propuesta.html** — actualizar con datos del §3.3 |
| Lead times y texto VSM | ~289–293 | Actualizar: **"5.55 bot/s" no aplica**, 30,000 latas/h → 9,000, "Agua Purificada 1L" → "Garrafón 20L", 15,000 bot/h → 900 bot/h |
| Uptime narrativo "95% / 98%" | ~291–292 | Verificar coherencia con disponibilidad AS-IS real (~92% para Coca-Cola) |

**Total cambios en produccion.html: ~10 secciones**

### 5.4 `website/evaluacion.html` (evaluación económica)

| Sección | Líneas aprox. | Cambio requerido |
|---------|---------------|------------------|
| Columnas "Agua 1L" en tablas | ~120–122 | Cambiar a **"Garrafón 20L"** |
| Datos de producción "20,000 / 30,000 / 15,000" y total "65,000 u/h" | ~183–209 | **Actualizar TODO**: 20,000 / 9,000 / 900, total variable, no sumar como "capacidad combinada" |
| Ventas semanales y estimados | ~183–209 | Recalcular con nuevas tasas o **reemplazar con datos reales del PDF** |
| Texto "desde 75% OEE hasta 95%+ OEE" | ~240 | Mantener — es correcto como rango AS-IS→TO-BE |
| **Secciones financieras** (placeholders actuales) | Varias | **POBLAR CON DATOS REALES del §4 de este PRD**: APU, estado de resultados, FCL, indicadores financieros, sensibilidad |
| Nota de alcance | Nueva | **Agregar nota** de que la evaluación económica detallada aplica a la línea de Coca-Cola retornable 400mL (1 línea); las otras líneas están pendientes de evaluación individual |

**Total cambios en evaluacion.html: ~6+ secciones (la más pesada)**

### 5.5 Archivos sin cambios de datos

Estos archivos no contienen datos de producción/indicadores y **no necesitan actualización de datos** (solo verificar coherencia de texto general):

- `contacto.html`, `asignatura.html`, `reflexiones.html`
- `cookies.html`, `privacidad.html`, `terminos.html`
- `modulos/introduccion.html`, `modulos/planeacion.html`
- `modulos/robotica.html`, `modulos/digital-factory.html`
- `modulos/control.html`, `modulos/scada.html`

---

## 6. Nuevos assets a integrar

### 6.1 `Cronograma actual.png` (NUEVO)

- **Fuente:** `unal:Archivos página/Cronograma actual.png`
- **Destino:** `website/img/pagina/cronograma-actual.png`
- **Ubicación en web:** `modulos/planeacion.html` o `propuesta.html` (sección de cronograma/EDT)
- **Acción:** Copiar a `website/img/pagina/`, agregar `<figure>` con caption "Cronograma del proyecto — Fuente: equipo Gaseo S.A.S."

### 6.2 `evaluacion_economica_bebidas_carbonatadas_v2.pdf` (descargable)

- **Fuente:** `unal:Archivos página/evaluacion_economica_bebidas_carbonatadas_v2.pdf`
- **Destino:** `website/docs/evaluacion-economica-v2.pdf` (o similar)
- **Ubicación en web:** `evaluacion.html` — link de descarga "Descargar informe completo (PDF)"
- **Acción:** Copiar PDF a carpeta de descargas del sitio y agregar link

### 6.3 Diagrama de operaciones — Garrafón (PENDIENTE)

- **Estado:** No existe `DiagramaGarrafonFinal.jpg` en el Drive
- **Acción:** En la web, donde actualmente se muestra `DiagramaBotellaAgua.jpg` con caption "Agua 1L", cambiar el caption a indicar que es un diagrama de referencia pendiente de actualizar, o reemplazar con placeholder

---

## 7. Reglas de actualización

1. **Solo datos de los archivos del Drive.** No inventar, interpolar ni estimar datos que no estén en las fuentes del §2.
2. **Si un dato no tiene fuente, dejar placeholder** con texto "Pendiente de cálculo por el equipo" en lugar de mostrar un número falso.
3. **Imagen de planta Coca-Cola:** puede quedarse pero con caption indicando "Imagen de referencia de planta Coca-Cola — base para el diseño del proyecto".
4. **No especificar número total de líneas de producción.** Referirse a "tres familias de producto" o "tres referencias".
5. **Desglose OEE (D, R, C) para AS-IS:** Solo está disponible de forma consolidada (OEE total). Mostrar OEE total sin desglosar para AS-IS; para TO-BE usar el desglose del PDF (D=98%, R=98%, C=99%).
6. **Datos financieros:** Dejar claro que aplican solo a la línea de Coca-Cola retornable 400mL, no a las tres líneas combinadas.

---

## 8. Orden de ejecución recomendado

| Paso | Tarea | Archivos afectados | Dependencia |
|------|-------|--------------------|-------------|
| 1 | Copiar `Cronograma actual.png` a `website/img/pagina/` | Asset | Ninguna |
| 2 | Copiar PDF de evaluación a `website/docs/` para descarga | Asset | Ninguna |
| 3 | Actualizar `index.html` — producto Garrafón | 1 archivo | Ninguna |
| 4 | Actualizar `propuesta.html` — líneas, fichas, tabla AS-IS, gauges, diagramas | 1 archivo | §3.1, §3.3 |
| 5 | Actualizar `produccion.html` — mismos indicadores + narrativa | 1 archivo | §3.1, §3.3 |
| 6 | Actualizar `evaluacion.html` — columnas + datos financieros reales | 1 archivo | §4.1–§4.7 |
| 7 | Integrar `Cronograma actual.png` en `planeacion.html` o `propuesta.html` | 1 archivo | Paso 1 |
| 8 | Verificación cruzada: revisar coherencia de datos entre todas las páginas | Todos | Pasos 3–7 |

---

## 9. Verificación

### 9.1 Datos que DEBEN aparecer correctamente tras la actualización

- [ ] `index.html` hero muestra "~75%" (o "~74%") como OEE AS-IS y "95%+" como TO-BE
- [ ] `index.html` tercer producto es "Garrafón de Agua" / "20 L · PE" / "Gran Volumen (GV)"
- [ ] NO hay referencia a "7 líneas" ni "3 líneas" con número específico en ninguna página
- [ ] NO hay referencia a "Agua Purificada 1L" ni "Agua 1L PET" en ninguna página
- [ ] NO hay referencia a "65,000 u/h" como capacidad combinada
- [ ] `propuesta.html` y `produccion.html` muestran OEE AS-IS de 71.4%, 77.4%, 73.4%
- [ ] `propuesta.html` y `produccion.html` muestran demandas correctas: 20,000 / 9,000 / 900
- [ ] `propuesta.html` y `produccion.html` muestran takt correctos: 0.18 / 0.40 / 4.0
- [ ] `evaluacion.html` muestra datos financieros reales del PDF: VPN 201,935 MM, TIR ~251%, ROI 244.6%, Payback ~4.8 meses
- [ ] `evaluacion.html` muestra APU consolidado con todas las filas del §4.2
- [ ] `evaluacion.html` tiene nota de que la evaluación aplica a la línea de Coca-Cola retornable 400mL
- [ ] `evaluacion.html` tiene link de descarga al PDF completo
- [ ] Imagen de planta tiene caption de "imagen de referencia"
- [ ] `Cronograma actual.png` aparece en alguna página (planeación o propuesta)
- [ ] `data-pct` en gauges SVG de OEE actualizados a los valores correctos
- [ ] Diagrama de operaciones de Agua/Garrafón tiene nota de que está pendiente de actualizar

### 9.2 Datos que NO deben aparecer

- [ ] OEE de 94.1%, 95.7% o 95.2% como "AS-IS"
- [ ] Demanda de 30,000 latas/h para Monster
- [ ] Demanda de 15,000 bot/h para agua
- [ ] "Agua Purificada 1L" o "No retornable 1 L · PET"
- [ ] "65,000 u/h" como capacidad total
- [ ] "7 líneas" o "3 líneas" como número específico
- [ ] Datos financieros inventados o de placeholder genérico cuando hay datos reales

---

## 10. Notas para el equipo

### 10.1 Elementos pendientes de subir al Drive (bloquean completitud)

| Elemento | Destino en la web | Estado |
|----------|-------------------|--------|
| Layout de planta oficial (diseño propio, no Coca-Cola) | `propuesta.html`, `produccion.html` | Pendiente |
| Diagrama de operaciones para Garrafón 20L | `propuesta.html` (reemplaza `DiagramaBotellaAgua.jpg`) | Pendiente |
| Screenshots de simulación Tecnomatix (.spp) | `produccion.html` | Pendiente |
| Indicadores desglosados AS-IS (D, R, C por producto) | `propuesta.html`, `produccion.html` | Solo se tiene OEE total |
| Evaluación económica de las otras líneas (Monster, Garrafón) | `evaluacion.html` | Solo existe para Coca-Cola |
| Datos de DAP para Garrafón 20L | `produccion.html` | DAP actual es de Agua 1L |

### 10.2 Inconsistencias detectadas en archivos del Drive

1. **`Cálculos indicadores.xlsx` (raíz)** sigue con "Agua Embotellada 1L" — no ha sido actualizado al garrafón
2. **`DAP.xlsx`** solo tiene flujo para "Envasado agua 1L" — no tiene Garrafón
3. **`DAP.xlsx` Hoja 1** tiene un OEE calculado de 1.151 (>100%) — posible error de fórmula
4. El OEE del Monster en Entrega 1 (R_p = 14,400) parece mayor que la demanda (9,000) — puede indicar múltiples estaciones o un cálculo diferente; verificar con el equipo

---

## Control de cambios

| Versión | Fecha | Descripción |
|---------|-------|-------------|
| 1.0 | 2026-03-24 | Sprint 5: Actualización de datos reales del proyecto — OEE AS-IS corregido, producto Garrafón, datos financieros del PDF de evaluación económica, eliminación de referencias a 7 líneas, nuevos assets (cronograma, PDF descargable) |
