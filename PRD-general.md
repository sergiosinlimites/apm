# PRD - Automatización de Procesos de Manufactura (APM)

> **Versión:** 2.0  
> **Fecha:** 2026-03-22  
> **Estado:** En desarrollo  
> **Materia:** Automatización de Procesos de Manufactura (2017280 Gr. 01)  
> **Semestre:** 2026-1S  
> **Equipo:** Grupo 4 APM

---

## 0. Equipo de Trabajo

| # | Nombre | Rol |
|---|--------|-----|
| 1 | Dixon Alberto Cuesta Segura | Integrante |
| 2 | Juan Angel Vargas Rodriguez | Integrante |
| 3 | Juan Esteban Otavo García | Integrante |
| 4 | Santiago Camilo Fonseca Prieto | Integrante |
| 5 | Sergio Andrés Bolaños Penagos | Integrante |
| 6 | Sergio Avellaneda Piñeros | Integrante |

---

## 1. Propuestas de Nombre del Proyecto

El nombre debe evocar manufactura de bebidas, automatización industrial y profesionalismo sin imitar marcas existentes.

| # | Nombre | Concepto | Por qué funciona |
|---|--------|---------|------------------|
| 1 | **FluxLine** | Flux (flujo) + Line (línea de producción) | Evoca flujo continuo de producción. Moderno, limpio, fácil de recordar. |
| 2 | **ENVASYS** | Envase + System | Directamente relevante al embotellado. Suena técnico y profesional. |
| 3 | **BevOps** | Beverage + Operations | Como DevOps pero para operaciones de bebidas. Corto y memorable. |
| 4 | **LinePulse** | Line (producción) + Pulse (pulso/monitoreo) | Sugiere monitoreo en tiempo real de la línea. Industrial y tecnológico. |
| 5 | **ProLinea** | Pro (profesional) + Línea (producción) | Híbrido español/inglés. Directo y profesional. |
| 6 | **SABLE** | **S**istema de **A**utomatización de **B**ebidas en **L**ínea de **E**nvasado | Acrónimo completo con significado. Académico y explicativo. |
| 7 | **FormaCraft** | Formula (receta) + Craft (manufactura) | Combina gestión de recetas con artesanía industrial. |
| 8 | **EMBOSYS** | Embotellado + System | Corto, directo, fácil de pronunciar. Muy vinculado al sector. |
| 9 | **PlantaFlow** | Planta (fábrica) + Flow (flujo) | Intuitivo en español e inglés. Evoca flujo de proceso. |
| 10 | **SORBIS** | Latín: "beber/sorber" | Elegante, académico, neutro. Funciona como marca. |

**Recomendación**: **FluxLine** o **ENVASYS** -- ambos son cortos, memorables, profesionales y se ven bien en un sitio web, presentaciones y documentos.

---

## 2. Paleta de Colores

Paleta basada en rojo industrial profundo (granate), distinto del rojo brillante de ABB (#FF000F) y Coca-Cola (#F40009). Tono cálido, sofisticado, no chillón.

### Colores Primarios

| Nombre | Hex | Uso principal |
|--------|-----|---------------|
| **Granate 900** | `#6B1410` | Encabezados principales, elementos de máximo énfasis |
| **Granate 700** (Primary) | `#A8201A` | Color de marca principal. Botones, acentos, navegación |
| **Granate 500** | `#CC4A44` | Hover/active states, énfasis secundario |
| **Granate 300** | `#E07070` | Acentos suaves, bordes, indicadores |
| **Granate 100** | `#FAD0D0` | Fondos sutiles, badges, alertas leves |

### Colores Secundarios

| Nombre | Hex | Uso principal |
|--------|-----|---------------|
| **Navy 900** | `#1E293B` | Texto principal, barras de navegación, headers oscuros |
| **Navy 700** | `#334155` | Texto secundario, fondos oscuros |
| **Slate 500** | `#64748B` | Texto terciario, captions, metadata |
| **Slate 200** | `#E2E8F0` | Bordes, separadores, fondos de tarjetas |
| **Slate 50** | `#F8FAFC` | Fondo general de la aplicación/sitio |

### Colores Funcionales

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Success** | `#059669` | Operaciones exitosas, indicadores positivos, OEE alto |
| **Warning** | `#D97706` | Alertas, indicadores de precaución, métricas en rango medio |
| **Error** | `#DC2626` | Errores, fallas, paros, indicadores críticos |
| **Info** | `#2563EB` | Información, enlaces, acciones secundarias |

### Contraste con ABB

| Aspecto | ABB | Este proyecto |
|---------|-----|---------------|
| Rojo principal | `#FF000F` (puro, brillante) | `#A8201A` (granate profundo, cálido) |
| Sensación | Corporativo, tecnológico | Industrial, académico, elegante |
| Complemento | Gris neutro | Navy/Slate con profundidad |

---

## 2B. Profesores del Curso

| Profesor | E-mail | Módulo |
|----------|--------|--------|
| Carlos Julio Cortés R. | cjcortesr@unal.edu.co | Gestión y evaluación de la producción automatizada |
| Luis Miguel Méndez | lmmendezm@unal.edu.co | Introducción a la Automatización / Planeación y Evaluación |
| Víctor Hugo Grisales | vhgrisalesp@unal.edu.co | Automatización discreta: PLC y SCADA |
| Ricardo Ramírez H. | reramirezh@unal.edu.co | Celdas de manufactura robotizadas |
| Eduardo Barrera Gualdrón | ebarrerag@unal.edu.co | — |
| Ubaldo García Zaragoza | ugarciaz@unal.edu.co | Digital Factory |

**Horario:** Miércoles y Viernes 14:00-16:00 · Salón 453-417

---

## 2C. Módulos del Curso y Evaluación

El curso se evalúa por **módulos** (30%) y un **proyecto integrador** (70%). El sitio web del proyecto debe tener **una página por cada módulo** donde se presente el trabajo realizado.

### Módulos (30% de la nota)

| # | Módulo | Profesor | Peso | Página web |
|---|--------|----------|:----:|------------|
| 1 | Introducción a la Automatización en Manufactura | Luis Miguel Méndez | — | `introduccion.html` |
| 2 | Gestión y evaluación de la producción automatizada | Carlos Julio Cortés | 5% | `produccion.html` |
| 3 | Planeación y Evaluación de proyectos | Luis Miguel Méndez | 5% | `planeacion.html` |
| 4 | Celdas de manufactura robotizadas | Ricardo Ramírez | 5% | `robotica.html` |
| 5 | Tecnologías modernas / Digital Factory | Ubaldo García Zaragoza | 5% | `digital-factory.html` |
| 6 | Controladores industriales (PLC) | Víctor Hugo Grisales | 5% | `control.html` |
| 7 | Sistema de supervisión SCADA | Víctor Hugo Grisales | 5% | `scada.html` |

### Proyecto Integrador (70% de la nota)

| Componente | Peso |
|------------|:----:|
| Sustentación intermedia | 10% |
| Sustentación final | 60% |

### Contenido esperado por módulo (basado en proyectos referencia)

Cada página de módulo debe contener el trabajo realizado para ese módulo: diagramas, análisis, resultados de simulación, indicadores, videos, comparativos pre/post automatización, etc. Ejemplos de referencia:

- [Autounal Solutions (2025-2S)](https://autounal-solutions.github.io/sitio_web/index.html)
- [Bicitrónica (semestre anterior)](https://garoperob.github.io/project-page/index.html)

Estructura típica de cada página de módulo:
1. Introducción y contexto del módulo
2. Metodología aplicada
3. Resultados (diagramas, tablas, gráficas, videos, simulaciones)
4. Comparativos (AS-IS vs TO-BE cuando aplique)
5. Conclusiones del módulo

---

## 3. Contexto del Proyecto

### 3.1 Descripción General

Proyecto académico de la materia **Automatización de Procesos de Manufactura (APM)** enfocado en el **sector de bebidas**. El caso de estudio se basa en la visita técnica a la **planta de Coca-Cola FEMSA en Bogotá**, donde se levantó información de las líneas de producción, procesos, tiempos, indicadores y layout de planta.

El proyecto abarca el ciclo completo de ingeniería de automatización: desde el levantamiento del estado actual (AS-IS) hasta el diseño futuro (TO-BE), incluyendo simulación, diseño de control industrial (PLC/Ladder), gemelo digital, celda robotizada y sistema SCADA (Ignition).

### 3.2 Portafolio de Productos

Tres productos diferenciados por envase, formato, velocidad de línea e inspección:

| # | Producto | Formato | Envase | Velocidad mín. | Takt Time |
|---|----------|---------|--------|----------------|-----------|
| 1 | Coca-Cola Clásica 400ml | Retornable | Vidrio | 20,000 bot/h | 0.18 s/bot |
| 2 | Monster Energy 473ml | Lata | Aluminio | 30,000 latas/h | 0.12 s/lata |
| 3 | Agua embotellada 1L | No retornable | PET (soplado) | 15,000 bot/h | 0.24 s/bot |

### 3.3 Layout de Planta (del diagrama .drawio)

La planta documentada incluye las siguientes zonas y líneas:

**Líneas de Producción:**
- Línea 1: Embotellado general
- Línea 2: Embotellado secundario
- Línea 3: Agua / Agua gran volumen
- Línea 4: Latas
- Línea 5: Línea principal de alto volumen
- Línea 6: Línea complementaria
- Línea 7: Línea complementaria

**Zonas de Soporte:**
- Clarificación de azúcar
- Preparación de jarabe terminado
- Distribución y almacenamiento de agua (tanques, fluorescencia)
- Laboratorio (control de calidad)
- Administración de planta

**Zonas de Empaque y Despacho:**
- Empaque (6 estaciones)
- Embalaje (6 estaciones)
- Paletizado (6 estaciones)
- Etiquetado + Revisión de etiquetado
- Almacenamiento (múltiples zonas)
- Almacén de envases retornables
- Zona de carga de pallets
- Carga de camiones

**Flujo General:**
```
Insumos → Clarificación → Jarabe → Mezcla → Carbonatación → Llenado → Sellado → 
Etiquetado → Inspección → Empaque → Embalaje → Paletizado → Almacén → Despacho
```

---

## 4. EDT - Estructura de Desglose del Trabajo

> Fuente: `EDT_Cronograma.xlsx` — datos reales del proyecto.

### 4.1 Resumen por Fase

| # | Fase | Días | % |
|---|------|------|---|
| 1 | Alcance técnico del proceso definido | 8 | 8.3% |
| 2 | Levantamiento de información y análisis AS-IS | 10 | 10.4% |
| 3 | Diseño futuro del proceso definido | 7 | 7.3% |
| 4 | Arquitectura de automatización e instrumentación definida | 8 | 8.3% |
| 5 | Evaluación productiva por simulación completada | 10 | 10.4% |
| 6 | Viabilidad técnico-económica sustentada | 11 | 11.5% |
| 7 | Celda robotizada diseñada y validada | 8 | 8.3% |
| 8 | Sistema de control industrial validado | 9 | 9.4% |
| 9 | Gemelo digital integrado validado | 8 | 8.3% |
| 10 | Supervisión SCADA implementada | 8 | 8.3% |
| 11 | Cierre académico y entregables del curso | 9 | 9.4% |
| | **TOTAL** | **96** | **100%** |

### 4.2 EDT Detallada con Cronograma

#### Fase 1: ALCANCE TÉCNICO DEL PROCESO DEFINIDO (8 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 1.1 | Familia de bebidas y contexto operacional definidos | 1 | |
| 1.2 | Portafolio de tres productos diferenciado | 1 | |
| 1.3 | Especificación de envases y formatos establecida | 1 | |
| 1.4 | Recetas y parámetros críticos documentados | 1 | |
| 1.5 | Transformaciones térmicas/químicas identificadas | 1 | |
| 1.6 | Estrategia de calidad y trazabilidad definida | 1 | |
| 1.7 | Interacción operador–SCADA definida | 1 | |
| 1.8 | Indicadores por producto establecidos | 1 | |

#### Fase 2: LEVANTAMIENTO DE INFORMACIÓN Y ANÁLISIS AS-IS (10 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 2.1 | Levantamiento técnico del proceso consolidado | 2 | |
| 2.2 | Diagrama general del proceso elaborado | 1 | |
| 2.3 | Flujo de materiales e información definido | 1 | |
| 2.4 | Estaciones, equipos y recursos caracterizados | 1 | |
| 2.5 | Tiempos base de operación estimados | 1 | |
| 2.6 | VSM estado actual elaborado | 1 | |
| 2.7 | Desperdicios/Muda identificados | 1 | |
| 2.8 | Indicadores AS-IS calculados | 1 | |
| 2.9 | Fallas típicas y parámetros de mantenimiento caracterizados | 1 | |
| 2.10 | Modelo conceptual de simulación documentado | 1 | |

#### Fase 3: DISEÑO FUTURO DEL PROCESO DEFINIDO (7 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 3.1 | Objetivos de mejora aprobados | 1 | |
| 3.2 | Propuesta Lean/preautomatización formulada | 2 | Actividad crítica |
| 3.3 | VSM estado futuro elaborado | 1 | |
| 3.4 | Estrategia multiproducto definida | 1 | |
| 3.5 | Estrategia de cambio de formato definida | 1 | |
| 3.6 | Estrategia de fallas y recuperación definida | 1 | |
| 3.7 | Estrategia de rechazo y reproceso definida | 1 | |

#### Fase 4: ARQUITECTURA DE AUTOMATIZACIÓN E INSTRUMENTACIÓN (8 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 4.1 | Arquitectura ISA-95 documentada | 2 | Actividad crítica |
| 4.2 | Arquitectura de comunicaciones definida | 1 | |
| 4.3 | Topología de red industrial definida | 1 | |
| 4.4 | Lista de E/S y tags consolidada | 1 | |
| 4.5 | PFD/P&ID del sistema elaborados | 1 | |
| 4.6 | Matriz de señales y alarmas elaborada | 1 | |
| 4.7 | Requisitos de historización, eventos y lotes definidos | 1 | |

#### Fase 5: EVALUACIÓN PRODUCTIVA POR SIMULACIÓN (10 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 5.1 | Modelo AS-IS implementado | 1 | |
| 5.2 | Modelo AS-IS validado | 1 | |
| 5.3 | Escenarios AS-IS simulados | 1 | |
| 5.4 | Desempeño AS-IS cuantificado | 1 | |
| 5.5 | Escenarios TO-BE diseñados | 2 | Actividad crítica |
| 5.6 | Modelo TO-BE simulado | 2 | Actividad crítica |
| 5.7 | OEE y KPIs por escenario calculados | 1 | |
| 5.8 | Comparativo AS-IS vs TO-BE consolidado | 1 | |

#### Fase 6: VIABILIDAD TÉCNICO-ECONÓMICA SUSTENTADA (11 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 6.1 | EDT y diccionario EDT aprobados | 1 | |
| 6.2 | Cronograma base del proyecto estructurado | 1 | |
| 6.3 | Plan de recursos consolidado | 1 | |
| 6.4 | Presupuesto CAPEX/OPEX consolidado | 2 | Actividad crítica |
| 6.5 | Evidencias de precios recopiladas | 1 | |
| 6.6 | Flujo de caja documentado | 1 | |
| 6.7 | Indicadores financieros calculados | 1 | |
| 6.8 | Sensibilidad financiera elaborada | 1 | |
| 6.9 | Propuesta de valor formulada | 1 | |
| 6.10 | Oferta comercial estructurada | 1 | |
| 6.11 | Modelo de negocio resumido definido | 1 | |

#### Fase 7: CELDA ROBOTIZADA DISEÑADA Y VALIDADA (8 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 7.1 | Justificación de robotización sustentada | 1 | |
| 7.2 | Robot y herramienta de toma seleccionados | 1 | |
| 7.3 | Layout de celda elaborado | 1 | |
| 7.4 | Sensores y periféricos de celda definidos | 1 | |
| 7.5 | Tiempos de celda cuantificados | 1 | |
| 7.6 | Simulación RobotStudio validada | 2 | Actividad crítica |
| 7.7 | Medidas de seguridad de celda definidas | 1 | |
| 7.8 | Riesgos de celda evaluados | 1 | |

#### Fase 8: SISTEMA DE CONTROL INDUSTRIAL VALIDADO (9 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 8.1 | Filosofía de control definida | 1 | |
| 8.2 | Grafcet del sistema elaborado | 2 | Actividad crítica |
| 8.3 | Interlocks y permisos definidos | 1 | |
| 8.4 | Lógica Ladder implementada | 2 | Actividad crítica |
| 8.5 | Gestión de recetas implementada | 1 | |
| 8.6 | Manejo de fallas implementado | 1 | |
| 8.7 | Validación funcional del control completada | 1 | |

#### Fase 9: GEMELO DIGITAL INTEGRADO VALIDADO (8 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 9.1 | Modelo 3D del sistema desarrollado | 2 | Actividad crítica |
| 9.2 | Sensores y actuadores virtuales integrados | 2 | Actividad crítica |
| 9.3 | Integración con Logix Emulate implementada | 1 | |
| 9.4 | Pruebas integradas ejecutadas | 2 | |
| 9.5 | Validación funcional del sistema completada | 1 | |

#### Fase 10: SUPERVISIÓN SCADA IMPLEMENTADA (8 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 10.1 | Estándar HMI ISA-101 definido | 1 | |
| 10.2 | Pantallas HMI diseñadas | 1 | |
| 10.3 | Modelo de tags SCADA estructurado | 1 | |
| 10.4 | SCADA en Ignition implementado | 2 | Actividad crítica |
| 10.5 | Comunicación OPC operativa | 1 | |
| 10.6 | Alarmas, eventos e historización configurados | 1 | |
| 10.7 | Interacción del operador habilitada | 1 | |
| 10.8 | Validación funcional con gemelo digital completada | 1 | |

#### Fase 11: CIERRE ACADÉMICO Y ENTREGABLES DEL CURSO (9 días)

| ID | Entregable | Días | Obs. |
|----|-----------|------|------|
| 11.1 | Criterios de aceptación definidos | 1 | |
| 11.2 | Pruebas integrales end-to-end ejecutadas | 2 | |
| 11.3 | Cuadro resumen final consolidado | 1 | |
| 11.4 | Repositorio GitHub curado | 1 | |
| 11.5 | Sitio web del proyecto completado | 1 | |
| 11.6 | Video de proyecto producido | 1 | |
| 11.7 | Sustentación intermedia preparada | 1 | Hito |
| 11.8 | Sustentación final preparada | 1 | Hito |
| 11.9 | Reflexiones de aprendizaje consolidadas | 1 | |

---

## 5. Diccionario EDT

> Fuente: `EDT_Explicado.xlsx` — datos reales del proyecto.

### Fase 1: Alcance Técnico del Proceso Definido

| Código | Entregable | Descripción | Criterio de cierre | Evidencia |
|--------|-----------|-------------|-------------------|-----------|
| 1.1 | Familia de bebidas y contexto operacional definidos | Se establece la familia de bebidas seleccionada, el tipo de línea y el contexto de operación de alto volumen. | Se identifica claramente qué familia de bebidas se trabajará y bajo qué contexto productivo. | Documento de alcance o ficha del proceso seleccionado. |
| 1.2 | Portafolio de tres productos diferenciado | Se definen tres productos distintos con diferencias técnicas relevantes entre ellos. | Los tres productos están identificados y diferenciados al menos por dos criterios no triviales. | Tabla comparativa de productos. |
| 1.3 | Especificación de envases y formatos establecida | Se documentan los envases, formatos y rangos de capacidad asociados a cada producto. | Cada producto tiene definido su tipo de envase, formato y capacidad. | Tabla de envases y formatos. |
| 1.4 | Recetas y parámetros críticos documentados | Se consolidan recetas y variables críticas de operación por producto. | Existe una relación de parámetros críticos por producto y etapa. | Tabla de recetas y variables de proceso. |
| 1.5 | Transformaciones térmicas/químicas identificadas | Se identifican las etapas donde ocurren cambios térmicos, químicos o de acondicionamiento. | Las transformaciones relevantes están asociadas a los productos o etapas correspondientes. | Esquema del proceso con identificación de transformaciones. |
| 1.6 | Estrategia de calidad y trazabilidad definida | Se plantea cómo se controlará la calidad del producto y su seguimiento por lote. | Se documenta una propuesta mínima de control de calidad y trazabilidad. | Documento de control de calidad y trazabilidad. |
| 1.7 | Interacción operador–SCADA definida | Se establecen las acciones del operador y la información que visualizará en SCADA. | Se documentan funciones mínimas del operador durante operación y cambios de producto. | Lista de interacciones operador-SCADA. |
| 1.8 | Indicadores por producto establecidos | Se definen indicadores clave por producto para monitoreo y análisis. | Existe una lista de KPIs por producto con propósito claro. | Tabla de indicadores por producto. |

### Fase 2: Levantamiento de Información y Análisis AS-IS

| Código | Entregable | Descripción | Criterio de cierre | Evidencia |
|--------|-----------|-------------|-------------------|-----------|
| 2.1 | Levantamiento técnico del proceso consolidado | Se recopila y organiza la información técnica del proceso actual. | Existe una base documental consolidada del proceso actual. | Carpeta de evidencias y consolidado documental. |
| 2.2 | Diagrama general del proceso elaborado | Se representa el proceso completo desde insumos hasta despacho. | El diagrama refleja de forma coherente las etapas principales. | Diagrama general del proceso. |
| 2.3 | Flujo de materiales e información definido | Se identifican el flujo físico y el flujo informacional del sistema. | El flujo está descrito y relacionado con el proceso. | Diagrama de flujos. |
| 2.4 | Estaciones, equipos y recursos caracterizados | Se describen las estaciones del proceso, equipos y recursos requeridos. | Existe una relación estructurada de estaciones, equipos y recursos. | Tabla de estaciones y equipos. |
| 2.5 | Tiempos base de operación estimados | Se estiman tiempos de operación, transporte, espera o manipulación. | Se cuenta con tiempos base por etapa o estación. | Tabla de tiempos base. |
| 2.6 | VSM estado actual elaborado | Se construye el mapa de flujo de valor del estado actual. | El VSM representa flujo, tiempos e inventarios relevantes. | VSM AS-IS. |
| 2.7 | Desperdicios/Muda identificados | Se identifican pérdidas y actividades sin valor agregado. | Existe un análisis de desperdicios coherente con el diagnóstico. | Lista de Muda/desperdicios. |
| 2.8 | Indicadores AS-IS calculados | Se calculan métricas base del sistema actual. | Los indicadores están cuantificados y documentados. | Tabla de KPIs AS-IS. |
| 2.9 | Fallas típicas y parámetros de mantenimiento | Se documentan fallas recurrentes y variables de mantenimiento. | Las fallas y parámetros principales están identificados. | Tabla de fallas y mantenimiento. |
| 2.10 | Modelo conceptual de simulación documentado | Se formula conceptualmente el modelo de simulación. | El modelo describe entidades, recursos, colas, reglas y supuestos. | Documento del modelo conceptual. |

### Fases 3–11: Definiciones completas

> Las definiciones completas de las fases 3 a 11 están disponibles en `archivos-drive/extracted/EDT_Explicado.xlsx`. El diccionario cubre **88 entregables** con descripción, criterio de cierre y evidencia esperada para cada uno. Consultar el archivo fuente para las fases:
> - Fase 3: Diseño futuro del proceso
> - Fase 4: Arquitectura de automatización e instrumentación
> - Fase 5: Evaluación productiva por simulación
> - Fase 6: Viabilidad técnico-económica
> - Fase 7: Celda robotizada
> - Fase 8: Sistema de control industrial
> - Fase 9: Gemelo digital
> - Fase 10: Supervisión SCADA
> - Fase 11: Cierre académico y entregables

---

## 6. Indicadores de Producción (AS-IS)

> Fuente: `Cálculos indicadores.xlsx` y `Cálculos indicadores - Anexo.xlsx` — datos reales del proyecto.

### 6.1 Resumen por Producto

| Indicador | Coca-Cola Retornable | Monster Energy (lata) | Agua 1L (PET) |
|-----------|---------------------|----------------------|----------------|
| Demanda mínima | 20,000 bot/h | 30,000 latas/h | 15,000 bot/h |
| Takt time | 0.18 s/bot | 0.12 s/lata | 0.24 s/bot |
| Tiempo de ciclo | 0.124 s | 0.094 s | 0.069 s |
| Tamaño de lote | 1,440 bot | 1,440 latas | 640 bot |
| Tasa de producción | 23,975 bot/h | 30,337 latas/h | 37,984 bot/h |
| Estaciones | 2 líneas | 1 línea | 2 líneas |
| Turnos/semana | 21 | 21 | 21 |
| Horas producción/turno | 7 h | 7 h | 7 h |
| Capacidad semanal | 7,048,541 bot | 8,919,097 latas | 11,167,292 bot |
| Utilización | 83.4% | 82.4% | 39.5% |
| Disponibilidad | 97% | 97% | 97% |
| MTBF | 24,444 s | 24,444 s | 24,444 s |
| MTTR | 756 s | 756 s | 756 s |
| Quality Rate | 97.0% | 98.7% | 98.1% |
| **OEE** | **94.1%** | **95.7%** | **95.2%** |

### 6.2 Fórmulas Clave

```
Takt Time = Tiempo disponible / Demanda
T_ciclo = T_operación + T_manipulación + T_herramienta
T_producción_lote = T_setup + (Q × T_ciclo) + T_no_operativo
Disponibilidad (A) = MTBF / (MTBF + MTTR)
OEE = Disponibilidad × Performance Efficiency × Quality Rate
```

---

## 7. Diagramas Analíticos de Proceso (DAP)

> Fuente: `DAP.xlsx` — datos reales del proyecto. Se documenta el Flow Process Chart para cada producto.

### 7.1 Coca-Cola 400ml Retornable (25 operaciones)

**Flujo:** Saneamiento → Recepción agua → Tratamiento → Control calidad agua → Refinamiento azúcar → Jarabe simple → Mezcla concentrado → Verificación jarabe → Envío a tanque → Enfriamiento → Carbonatación → Envío a línea → Recepción botellas → Rectificado etiquetado → Lavado/desinfección → Inspección automática → Transporte a llenadora → Llenado 400ml → Tapado corona → Verificación nivel/sellado → Codificación lote → Control final → Transporte bodega → Empaque canastillas → Almacenamiento

| Tipo | Cantidad |
|------|----------|
| Operaciones (O) | 16 |
| Transportes (T) | 4 |
| Inspecciones (I) | 4 |
| Almacenamientos (A) | 1 |

### 7.2 Monster Energy Lata (23 operaciones)

**Flujo:** Saneamiento → Recepción agua → Tratamiento → Control calidad → Refinamiento azúcar → Jarabe base (cafeína, aditivos) → Mezcla concentrado Monster → Verificación → Transporte tanque → Enfriamiento → Carbonatación → Transporte línea → Recepción latas vacías → Enjuague latas → Transporte llenadora → Llenado → Sellado → Inspección sellado → Codificación → Control peso → Transporte bodega → Empaque packs → Almacenamiento

### 7.3 Agua Embotellada 1L PET (19 operaciones)

**Flujo:** Saneamiento → Recepción agua cruda → Filtración primaria → Tratamiento/purificación → Control calidad → Transporte tanque → Recepción preformas PET → Soplado botellas → Inspección → Transporte llenadora → Llenado → Colocación tapa → Inspección nivel/tapa → Etiquetado → Codificación → Control final → Transporte bodega → Empaque packs → Almacenamiento

---

## 8. EDT de Producción

> Fuente: `Comenzar a planear su proyecto.docx` — datos reales del proyecto.

La EDT de producción modela los entregables del proceso productivo (no del proyecto académico):

### 1. Insumos de producción disponibles
- 1.1 Agua de proceso disponible
- 1.2 Ingredientes/aditivos disponibles
- 1.3 Envases y cierres disponibles
- 1.4 Material de empaque disponible

### 2. Producto base preparado
- 2.1 Agua tratada disponible
- 2.2 Jarabe/base formulada disponible
- 2.3 Mezcla final preparada
- 2.4 Producto acondicionado térmicamente/carbonatado según receta

### 3. Envases acondicionados
- 3.1 Envases lavados/soplados/alimentados
- 3.2 Cierres/tapas alimentados

### 4. Producto envasado conforme
- 4.1 Unidades llenadas
- 4.2 Unidades cerradas
- 4.3 Unidades inspeccionadas
- 4.4 Unidades codificadas
- 4.5 Unidades rechazadas segregadas

### 5. Producto empacado y despachable
- 5.1 Empaque secundario conformado
- 5.2 Pallets conformados
- 5.3 Lotes trazables y despachables

### 6. Servicios y datos de soporte disponibles
- 6.1 Aire, energía y utilidades disponibles
- 6.2 Datos de producción capturados
- 6.3 Eventos, alarmas y lotes registrados

---

## 9. Herramientas del Proyecto

### 9.1 Herramientas Industriales

| Herramienta | Uso | Fase EDT |
|-------------|-----|----------|
| **FlexSim** | Simulación de procesos AS-IS y TO-BE | 5 |
| **Studio 5000 / RSLogix** | Programación Ladder para PLC Allen-Bradley | 8 |
| **Logix Emulate** | Emulación de controlador para pruebas sin hardware | 8, 9 |
| **RobotStudio (ABB)** | Simulación de celda robotizada | 7 |
| **Ignition (Inductive Automation)** | SCADA, HMI, historización, alarmas | 10 |
| **draw.io / diagrams.net** | Diagramas de planta, PFD, P&ID, arquitectura | 2, 4 |
| **Excel / Google Sheets** | Cálculos de indicadores, EDT, presupuestos | Todas |

### 9.2 Herramientas de Desarrollo y Documentación

| Herramienta | Uso |
|-------------|-----|
| **Cursor IDE** | Editor principal con agentes AI (orquestador + subagentes) |
| **Git / GitHub** | Control de versiones, repositorio del proyecto |
| **HTML/CSS/JS (vanilla)** | Sitio web modular del proyecto (entregable 11.5). Sin frameworks. |
| **Python** | Scripts de análisis de datos, procesamiento de indicadores |
| **Markdown** | Documentación técnica, PRD, reportes |
| **Google Drive** | Almacenamiento compartido del equipo (sincronizado) |

### 9.3 Configuración del Entorno AI (`.cursor/`)

El repositorio usa Cursor IDE con una configuración de agentes AI especializados. El **agente principal actúa exclusivamente como orquestador**: no escribe código directamente, sino que delega en subagentes especializados y coordina su trabajo.

#### Patrón Orquestador

```
┌─────────────────────────────────┐
│     AGENTE PRINCIPAL            │
│     (Solo orquesta)             │
│                                 │
│  - Analiza la tarea             │
│  - Decide qué subagente usar    │
│  - Revisa resultados            │
│  - Coordina siguiente paso      │
│  - NO escribe código            │
└──────────┬──────────────────────┘
           │
     ┌─────┼─────┬──────────┐
     ▼     ▼     ▼          ▼
  ┌─────┐ ┌────┐ ┌────────┐ ┌──────────┐
  │Doc  │ │Web │ │Data    │ │Code      │
  │Write│ │Dev │ │Analyst │ │Reviewer  │
  └─────┘ └────┘ └────────┘ └──────────┘
```

#### Subagentes Disponibles

| Subagente | Responsabilidad |
|-----------|----------------|
| `documentation-writer` | Redacción de documentos, reportes, análisis técnicos |
| `web-developer` | Desarrollo del sitio web del proyecto |
| `data-analyst` | Procesamiento de indicadores, cálculos, gráficos |
| `code-reviewer` | Revisión de calidad de código y documentos |
| `architecture-auditor` | Auditoría de estructura del proyecto y patrones |

#### MCPs Disponibles

Los agentes pueden usar Model Context Protocol (MCP) servers cuando sea necesario:

| MCP Server | Uso |
|------------|-----|
| `engram` | Memoria persistente del agente (decisiones, contexto, bugs, patrones) |
| `notion` | Documentación en Notion (si se configura para el proyecto) |
| `cursor-ide-browser` | Navegación web, testing de sitio web, screenshots |
| `chrome-devtools` | Depuración de frontend del sitio web |

#### Reglas Activas (`.cursor/rules/`)

| Regla | Propósito |
|-------|-----------|
| `orchestrator-pattern.mdc` | El agente principal solo orquesta, no escribe código |
| `apm-project-conventions.mdc` | Convenciones específicas del proyecto APM |
| `python-docstrings-google.mdc` | Estilo Google para docstrings en Python |
| `code-removal-traceability.mdc` | Trazabilidad de código eliminado con markers `[REMOVAL-NNN]` |

#### Skills Disponibles (`.cursor/skills/`)

| Skill | Cuándo se usa |
|-------|---------------|
| `brainstorming` | Antes de cualquier trabajo creativo o decisiones de diseño |
| `systematic-debugging` | Ante errores, fallos o comportamiento inesperado |
| `prd-workflow` | Gestión de documentos PRD del proyecto |
| `project-website` | Desarrollo del sitio web del proyecto |
| `data-analysis` | Análisis de datos de producción e indicadores |

---

## 10. Archivos del Repositorio

> Fuente: `archivos-drive/` — archivos reales del Google Drive del equipo.

| Archivo | Tipo | Contenido |
|---------|------|-----------|
| `Planta Coca Cola.png` | Imagen | Foto/diagrama de la planta |
| `Planta Coca Cola` | .drawio | Diagrama de layout de planta (original) |
| `Copia de Planta Coca Cola.drawio` | .drawio | Diagrama de layout de planta (copia con estilos ajustados) |
| `EDT_Cronograma.xlsx` | Excel | EDT con cronograma y duración por tarea |
| `EDT_Explicado.xlsx` | Excel | Diccionario EDT con criterios y evidencias |
| `DAP.xlsx` | Excel | Diagramas Analíticos de Proceso (3 productos) |
| `Cálculos indicadores.xlsx` | Excel | Indicadores de producción (Coca-Cola, Monster, Agua) |
| `Cálculos indicadores - Anexo.xlsx` | Excel | Indicadores complementarios |
| `Diagramas VSM (final).pdf` | PDF | Value Stream Mapping final |
| `Diagrama en blanco (1).pdf` | PDF | Plantilla de diagrama |
| `DiagramaCocaFinal.jpg` | Imagen | Diagrama de operaciones Coca-Cola |
| `DiagramaMonsterFinal.jpg` | Imagen | Diagrama de operaciones Monster |
| `DiagramaBotellaAgua.jpg` | Imagen | Diagrama de operaciones Agua |
| `Comenzar a planear su proyecto.docx` | Word | Documento de planeación inicial |
| `Documento sin título.docx` | Word | Notas de selección de productos y análisis |
| `Taller_1___Grupo_4.pdf` | PDF | Taller 1 entregado |

---

## 11. Plan de Desarrollo Paso a Paso

Este checklist guía la ejecución del proyecto. Cada item debe marcarse `[x]` al completarse. Los items marcados con `[PRUEBA]` contienen datos de prueba que deben reemplazarse con datos reales.

### Fase 0: Configuración del Repositorio
- [x] Elegir nombre del proyecto: **FluxLine**
- [x] Configurar paleta de colores (granate `#A8201A` como primario)
- [x] Organizar estructura de carpetas del repositorio
- [x] Configurar `.cursor/` con reglas, skills y agents (depurado de Aerosophia)
- [x] Sincronizar `archivos-drive/` con Google Drive (rclone → `unal:APM`)
- [x] Crear `.gitignore` apropiado
- [x] Hacer commit inicial

### Fase 1: Alcance Técnico (EDT 1.x)
- [x] 1.1 Definir familia de bebidas: Sector Bebidas (Coca-Cola FEMSA Bogotá)
- [x] 1.2 Definir portafolio: Coca-Cola 400ml retornable, Monster 473ml lata, Agua 1L PET
- [x] 1.3 Especificar envases: Vidrio retornable, Aluminio lata, PET soplado
- [ ] 1.4 Documentar recetas y parámetros críticos por producto `[PRUEBA: pendiente datos de recetas reales]`
- [ ] 1.5 Identificar transformaciones térmicas/químicas por producto
- [ ] 1.6 Definir estrategia de calidad y trazabilidad
- [ ] 1.7 Definir interacciones operador-SCADA
- [x] 1.8 Establecer indicadores por producto (Takt time, OEE, etc.)

### Fase 2: Levantamiento AS-IS (EDT 2.x)
- [x] 2.1 Consolidar levantamiento técnico (visita Coca-Cola Bogotá)
- [x] 2.2 Elaborar diagrama general del proceso (layout .drawio)
- [x] 2.3 Definir flujo de materiales e información
- [ ] 2.4 Caracterizar estaciones, equipos y recursos `[PRUEBA: pendiente detalle de equipos reales]`
- [x] 2.5 Estimar tiempos base de operación (DAP.xlsx)
- [x] 2.6 Elaborar VSM estado actual (Diagramas VSM final.pdf)
- [ ] 2.7 Identificar desperdicios/Muda `[PRUEBA: pendiente análisis formal]`
- [x] 2.8 Calcular indicadores AS-IS (Cálculos indicadores.xlsx)
- [ ] 2.9 Caracterizar fallas típicas `[PRUEBA: pendiente datos de mantenimiento]`
- [ ] 2.10 Documentar modelo conceptual de simulación

### Fase 3: Diseño Futuro TO-BE (EDT 3.x)
- [ ] 3.1 Formular objetivos de mejora `[PRUEBA: pendiente definición con equipo]`
- [ ] 3.2 Formular propuesta Lean/preautomatización
- [ ] 3.3 Elaborar VSM estado futuro
- [ ] 3.4 Definir estrategia multiproducto
- [ ] 3.5 Definir estrategia de cambio de formato
- [ ] 3.6 Definir estrategia de fallas y recuperación
- [ ] 3.7 Definir estrategia de rechazo y reproceso

### Fase 4: Arquitectura de Automatización (EDT 4.x)
- [ ] 4.1 Documentar arquitectura ISA-95
- [ ] 4.2 Definir arquitectura de comunicaciones
- [ ] 4.3 Definir topología de red industrial
- [ ] 4.4 Consolidar lista de E/S y tags
- [ ] 4.5 Elaborar PFD/P&ID del sistema
- [ ] 4.6 Elaborar matriz de señales y alarmas
- [ ] 4.7 Definir requisitos de historización, eventos y lotes

### Fase 5: Simulación (EDT 5.x)
- [ ] 5.1 Implementar modelo AS-IS en FlexSim
- [ ] 5.2 Validar modelo AS-IS
- [ ] 5.3 Simular escenarios AS-IS
- [ ] 5.4 Cuantificar desempeño AS-IS
- [ ] 5.5 Diseñar escenarios TO-BE
- [ ] 5.6 Simular modelo TO-BE
- [ ] 5.7 Calcular OEE y KPIs por escenario
- [ ] 5.8 Consolidar comparativo AS-IS vs TO-BE

### Fase 6: Viabilidad Económica (EDT 6.x)
- [x] 6.1 Aprobar EDT y diccionario EDT
- [ ] 6.2 Estructurar cronograma base (Gantt)
- [ ] 6.3 Consolidar plan de recursos
- [ ] 6.4 Consolidar presupuesto CAPEX/OPEX `[PRUEBA: pendiente cotizaciones]`
- [ ] 6.5 Recopilar evidencias de precios
- [ ] 6.6 Documentar flujo de caja
- [ ] 6.7 Calcular indicadores financieros (VPN, TIR, ROI, Payback)
- [ ] 6.8 Elaborar sensibilidad financiera
- [ ] 6.9 Formular propuesta de valor
- [ ] 6.10 Estructurar oferta comercial
- [ ] 6.11 Definir modelo de negocio

### Fase 7: Celda Robotizada (EDT 7.x)
- [ ] 7.1 Sustentar justificación de robotización
- [ ] 7.2 Seleccionar robot y herramienta (EOAT)
- [ ] 7.3 Elaborar layout de celda
- [ ] 7.4 Definir sensores y periféricos
- [ ] 7.5 Cuantificar tiempos de celda
- [ ] 7.6 Validar simulación en RobotStudio
- [ ] 7.7 Definir medidas de seguridad
- [ ] 7.8 Evaluar riesgos de celda

### Fase 8: Control Industrial (EDT 8.x)
- [ ] 8.1 Definir filosofía de control
- [ ] 8.2 Elaborar Grafcet del sistema
- [ ] 8.3 Definir interlocks y permisos
- [ ] 8.4 Implementar lógica Ladder en Studio 5000
- [ ] 8.5 Implementar gestión de recetas
- [ ] 8.6 Implementar manejo de fallas
- [ ] 8.7 Completar validación funcional

### Fase 9: Gemelo Digital (EDT 9.x)
- [ ] 9.1 Desarrollar modelo 3D
- [ ] 9.2 Integrar sensores y actuadores virtuales
- [ ] 9.3 Implementar integración con Logix Emulate
- [ ] 9.4 Ejecutar pruebas integradas
- [ ] 9.5 Completar validación funcional

### Fase 10: SCADA (EDT 10.x)
- [ ] 10.1 Definir estándar HMI ISA-101
- [ ] 10.2 Diseñar pantallas HMI
- [ ] 10.3 Estructurar modelo de tags SCADA
- [ ] 10.4 Implementar SCADA en Ignition
- [ ] 10.5 Verificar comunicación OPC
- [ ] 10.6 Configurar alarmas, eventos e historización
- [ ] 10.7 Habilitar interacción del operador
- [ ] 10.8 Completar validación con gemelo digital

### Fase 11: Cierre Académico (EDT 11.x)
- [ ] 11.1 Definir criterios de aceptación
- [ ] 11.2 Ejecutar pruebas end-to-end
- [ ] 11.3 Consolidar cuadro resumen final
- [ ] 11.4 Curar repositorio GitHub
- [x] 11.5a Landing page del sitio web (hero, proceso, productos, indicadores, fases, equipo)
- [x] 11.5b Reestructurar sitio web a arquitectura modular (7 páginas de módulo creadas con placeholder)
- [ ] 11.5c Llenar contenido Módulo 1: Introducción a la Automatización
- [ ] 11.5d Llenar contenido Módulo 2: Gestión y evaluación de la producción
- [ ] 11.5e Llenar contenido Módulo 3: Planeación y Evaluación de proyectos
- [ ] 11.5f Llenar contenido Módulo 4: Celdas de manufactura robotizadas
- [ ] 11.5g Llenar contenido Módulo 5: Digital Factory
- [ ] 11.5h Llenar contenido Módulo 6: Controladores industriales (PLC)
- [ ] 11.5i Llenar contenido Módulo 7: Sistema de supervisión SCADA
- [ ] 11.5j Llenar contenido Evaluación económica
- [ ] 11.6 Producir video del proyecto
- [ ] 11.7 Preparar sustentación intermedia
- [ ] 11.8 Preparar sustentación final
- [ ] 11.9 Consolidar reflexiones de aprendizaje

---

## 12. Estructura Propuesta del Repositorio

```
apm/
├── .cursor/                    # Configuración AI (reglas, skills, agents)
│   ├── agents/                 # Definición de subagentes
│   ├── rules/                  # Reglas de comportamiento
│   ├── skills/                 # Habilidades especializadas
│   └── mcp.json                # Configuración MCP servers
│
├── archivos-drive/             # Sincronizado con Google Drive del equipo
│   ├── extracted/              # Archivos extraídos del zip
│   └── *.drawio, *.xlsx, etc.  # Archivos fuente
│
├── docs/                       # Documentación del proyecto
│   ├── fase-01-alcance/
│   ├── fase-02-as-is/
│   ├── fase-03-to-be/
│   ├── fase-04-arquitectura/
│   ├── fase-05-simulacion/
│   ├── fase-06-economia/
│   ├── fase-07-celda-robotica/
│   ├── fase-08-control/
│   ├── fase-09-gemelo-digital/
│   ├── fase-10-scada/
│   └── fase-11-cierre/
│
├── scripts/                    # Scripts Python para análisis
│   ├── indicadores.py
│   ├── dap_analysis.py
│   └── sync_drive.py
│
├── website/                    # Sitio web modular del proyecto (entregable 11.5)
│   ├── index.html              # Landing page principal
│   ├── css/styles.css          # Estilos compartidos (paleta, tipografía, layout)
│   ├── js/main.js              # JS compartido (nav, scroll, animaciones)
│   ├── modulos/                # Páginas individuales por módulo del curso
│   │   ├── introduccion.html   # Módulo 1: Introducción a la Automatización
│   │   ├── produccion.html     # Módulo 2: Gestión y evaluación de producción
│   │   ├── planeacion.html     # Módulo 3: Planeación y Evaluación
│   │   ├── robotica.html       # Módulo 4: Celdas robotizadas
│   │   ├── digital-factory.html# Módulo 5: Digital Factory
│   │   ├── control.html        # Módulo 6: Controladores industriales (PLC)
│   │   └── scada.html          # Módulo 7: SCADA
│   ├── equipo.html             # Página del equipo (opcional, puede quedar en index)
│   └── assets/                 # Imágenes, videos, diagramas del sitio
│
├── presentaciones/             # Slides de sustentaciones
│
├── PRD-general.md              # Este documento
├── .gitignore
└── README.md
```

---

## 13. Conexión con Google Drive

### Configuración actual: `rclone` v1.73.2

Instalado en `~/.local/bin/rclone`. Remote configurado: `unal` (Google Drive personal).

La carpeta del proyecto en Drive es **`unal:APM`**.

**Descargar Drive → local:**
```bash
scripts/sync_drive.sh pull
```

**Subir local → Drive:**
```bash
scripts/sync_drive.sh push
```

**Listar contenido de Drive:**
```bash
scripts/sync_drive.sh list
```

---

## 14. Conceptos Clave del Proyecto

> Fuente: `Comenzar a planear su proyecto.docx` — contenido académico real.

### PMI / PMP / PM4R

- **PMI** (Project Management Institute): Organización internacional que desarrolla estándares de gestión de proyectos. Relevante para organizar diseño, adquisición de equipos, programación de sistemas de control.
- **PMP** (Project Management Professional): Certificación del PMI que acredita especialistas en gestión de proyectos.
- **PM4R** (Project Management for Results): Metodología del BID orientada a resultados, enfocada en América Latina.

### Los 7 Pasos de Planeación

1. **EDT** — Define el alcance
2. **Cronograma** — Ordena duración, secuencia y ruta crítica
3. **Curva S** — Organiza uso de recursos/costos en el tiempo
4. **Matriz de adquisiciones**
5. **Matriz de riesgos**
6. **Matriz de comunicaciones**
7. **Matriz de asignación de responsabilidades**

### APU (Análisis de Precios Unitarios)

Herramienta para calcular costos unitarios por actividad. Componentes: materiales, mano de obra, equipos/herramientas, transporte. Se aplica para presupuesto CAPEX/OPEX del proyecto.

### Entregables Mínimos del Proyecto

- EDT del proyecto y diccionario EDT
- Cronograma Gantt
- Presupuesto CAPEX/OPEX
- Flujo de caja
- Indicadores VPN/NPV, TIR, ROI, Payback
- Evidencias de precios
- Responsables asignados
- Relación alcance técnico ↔ viabilidad económica

---

## Notas sobre Datos de Prueba

Los siguientes apartados contienen datos de prueba marcados con `[PRUEBA]` que deben ser reemplazados con datos reales del equipo:

| Sección | Qué falta |
|---------|-----------|
| 1.4 Recetas y parámetros críticos | Parámetros reales de operación por producto |
| 2.4 Estaciones y equipos | Detalle real de equipos de la planta |
| 2.7 Desperdicios/Muda | Análisis formal de pérdidas |
| 2.9 Fallas típicas | Datos reales de mantenimiento |
| 3.x Diseño futuro completo | Requiere definición con el equipo |
| 6.4 Presupuesto CAPEX/OPEX | Cotizaciones reales de equipos |
| Fases 7-10 | Desarrollo técnico pendiente (Ladder, SCADA, etc.) |

> Todo lo demás proviene de los archivos reales del equipo (`archivos-drive/`).
