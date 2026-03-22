# Skill: Debugging Sistemático

## Cuándo Usarla

Ante errores, fallos o comportamiento inesperado en scripts, documentos o configuración del proyecto.

## Procedimiento

1. **Reproducir**: Confirmar el error exacto y las condiciones.
2. **Aislar**: Reducir el problema al componente mínimo.
3. **Hipótesis**: Formular 2-3 posibles causas ordenadas por probabilidad.
4. **Probar**: Verificar cada hipótesis con evidencia.
5. **Corregir**: Aplicar el fix mínimo necesario.
6. **Documentar**: Registrar causa raíz y solución.

## Patrones Comunes en APM

| Síntoma | Causa probable |
|---------|---------------|
| Script Python falla al leer Excel | Encoding, nombre de hoja, celda vacía |
| Indicadores no cuadran | Fórmula incorrecta, unidades mezcladas |
| Sitio web no renderiza | Ruta de assets incorrecta, CSS no cargado |
| Diagrama .drawio corrupto | Archivo binario tratado como texto |
| Git merge conflict | Edición simultánea del PRD |

## Anti-patrones

- No cambiar múltiples cosas a la vez
- No asumir la causa sin verificar
- No ignorar warnings
