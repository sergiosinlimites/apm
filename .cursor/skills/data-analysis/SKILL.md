# Skill: Análisis de Datos de Producción

## Cuándo Usarla

Al procesar datos de producción, calcular indicadores o generar análisis comparativos para el proyecto APM.

## Fuentes de Datos

| Archivo | Ubicación | Contenido |
|---------|-----------|-----------|
| Indicadores | `archivos-drive/extracted/Cálculos indicadores.xlsx` | OEE, Takt time, tiempos por producto |
| Indicadores Anexo | `archivos-drive/extracted/Cálculos indicadores - Anexo.xlsx` | Datos complementarios |
| DAP | `archivos-drive/extracted/DAP.xlsx` | Flow Process Charts (3 productos) |
| EDT Cronograma | `archivos-drive/extracted/EDT_Cronograma.xlsx` | Duraciones por tarea |

## Indicadores Clave

### Por Producto

| Indicador | Fórmula |
|-----------|---------|
| Takt Time | `T_disponible / Demanda` |
| Tiempo de Ciclo | `T_operación + T_manipulación + T_herramienta` |
| Tasa de Producción | `3600 / T_producción_unidad` |
| Capacidad | `R_p × n × S × H` |
| Utilización | `Producción_real / Capacidad` |
| Disponibilidad | `MTBF / (MTBF + MTTR)` |
| OEE | `Disponibilidad × Performance × Quality_Rate` |

### Productos

| Producto | Takt | OEE |
|----------|------|-----|
| gaseosa carbonatada 400ml retornable | 0.18 s/bot | 94.1% |
| bebida energética lata | 0.12 s/lata | 95.7% |
| Agua 1L PET | 0.24 s/bot | 95.2% |

## Convenciones de Scripts

- Ubicar scripts en `scripts/`
- Usar `openpyxl` para leer Excel, `pandas` para análisis
- Gráficos con `matplotlib` usando la paleta del proyecto
- Resultados en formato tabla (markdown o CSV)
- Google-style docstrings en español
