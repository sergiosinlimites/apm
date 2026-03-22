# Skill: Gestión del PRD

## Cuándo Usarla

Al crear, actualizar o consultar el PRD-general.md del proyecto, o al documentar decisiones de diseño del proyecto.

## PRD-general.md

El documento maestro del proyecto vive en la raíz: `PRD-general.md`. Contiene:
- Propuestas de nombre y paleta de colores
- Contexto del proyecto y portafolio de productos
- EDT completa con cronograma (11 fases, 88 entregables)
- Diccionario EDT con criterios de cierre y evidencias
- Indicadores de producción AS-IS por producto
- DAP (Diagramas Analíticos de Proceso)
- Plan de desarrollo paso a paso con checkboxes
- Especificación de herramientas y configuración AI

## Actualización

Cuando cambie el alcance, se complete un entregable o se tome una decisión:

1. Leer la sección relevante del PRD
2. Aplicar ediciones mínimas y precisas
3. Marcar checkboxes completados con `[x]`
4. Mantener la misma estructura Markdown
5. Si se agregan datos reales, quitar la marca `[PRUEBA]`

## Decisiones de Diseño

Las decisiones técnicas significativas se documentan brevemente en el PRD o en `docs/decisiones/` con:
- Contexto: qué problema se resuelve
- Alternativas consideradas
- Decisión tomada y razón
- Consecuencias
