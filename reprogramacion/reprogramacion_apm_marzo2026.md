# Reprogramación del cronograma APM — corte 22 de marzo de 2026

## 1. Diagnóstico

El cronograma base en `APM.xlsx` y derivados dejó de ser operativo: había paquetes sin fecha, hitos desalineados con las ventanas reales de sustentación y **violaciones de dependencias** (actividades que declaraban predecesoras pero iniciaban antes del fin lógico). Además, el alcance de la **sustentación intermedia** (10 % del integrador) no incluye celda robotizada terminada, PLC, Digital Factory ni SCADA; ese bloque se concentra en la **final** (60 %).

**Estado real a la fecha (22-mar-2026):** constan terminados, con evidencia en repo o documentos: ítems **1.1, 1.2, 1.3, 1.8** (Fase 1 parcial); **2.1, 2.2, 2.3, 2.5, 2.6, 2.8** (Fase 2 parcial); **6.1** (EDT aprobada); **11.5a, 11.5b** (estructura del sitio web). El resto del EDT sigue pendiente o en cierre para la entrega del **23-mar-2026**.

Para la planificación reprogramada se asume —con fines de coherencia académica del cronograma— que las **Fases 1, 2, 3 y 6** se han trabajado de forma **continua durante las semanas previas** al corte (no concentradas en uno o dos días), alineadas con las sesiones del curso. Esa hipótesis se detalla en la sección 6.

---

## 2. Criterios de reprogramación

| Criterio | Aplicación |
|----------|------------|
| Fecha dura intermedia | **23-mar-2026:** materiales de la sustentación intermedia enviados o congelados en versión. |
| Separación intermedia / final | Intermedia: planeación, AS-IS/TO-BE, viabilidad económica preliminar y empaquetado. Final: arquitectura, simulación, robótica, PLC, gemelo digital, SCADA e integración. |
| Festivos descontados | **Semana Santa:** 01–03-abr-2026 (no disponibles para trabajo académico presencial ni hitos de equipo). **Día del Trabajo:** 01-may-2026. |
| Alineación con clases | Cada bloque post-intermedia referencia sesiones del calendario oficial (módulos PLC, Digital Factory, SCADA, OPC, MQTT, afinación). |
| Dependencias respetadas | Se aplica la cadena del PRD: 1→2→3; 3→4, 5, 7; 4→8; 7 y 8→9; 4 y 8→10; **9 y 10 independientes** (paralelismo legítimo); 9 y 10→11. |
| Paralelismo documentado | Mismo tipo de paralelismo explícito en tablas (equipos distintos o prerequisitos ya satisfechos). |

---

## 3. Festivos y días no disponibles

| Periodo | Fechas (2026) | Motivo |
|---------|----------------|--------|
| Semana Santa | 01-abr al 03-abr | Festivos académicos / institucionales |
| Día del Trabajo | 01-may | Festivo nacional |

[^1]: Fuera de estos días, el equipo puede usar fines de semana para trabajo autónomo; en las tablas post-intermedia, las **duraciones en días hábiles** cuentan lunes a viernes **excluyendo** las fechas anteriores.

---

## 4. Alcance intermedia

- **Planeación del proyecto:** EDT, diccionario EDT, secuenciación, responsables y cronograma base (Fase 6 parcial: **6.1–6.3**).
- **Gestión de producción y automatización:** diagnóstico **AS-IS** completo y propuesta **TO-BE** completa (Fases **1–3** según EDT).
- **Evaluación económica preliminar:** inventario de costos, CAPEX/OPEX, flujo de caja e indicadores financieros preliminares (Fase 6: **6.4–6.11**).
- **Materiales de presentación:** sitio web, repositorio GitHub, anexos y diapositivas para la ventana **25–27-mar-2026** (materiales base enviados **23-mar-2026**).

---

## 5. Alcance final

- **Fase 4:** Arquitectura de automatización e instrumentación (ISA-95, comunicaciones, red, E/S, PFD/P&ID).
- **Fase 5:** Simulación productiva completa (Tecnomatix Plant Simulation u herramienta definida en el PRD).
- **Fase 7:** Celda robotizada (diseño, selección, seguridad, RobotStudio).
- **Fase 8:** PLC / Grafcet / Ladder / Logix Emulate.
- **Fase 9:** Gemelo digital / Digital Factory.
- **Fase 10:** SCADA / HMI / OPC / historización.
- **Fase 11:** Integración, video, repositorio y presentación final de cierre.

---

## 6. Cronograma histórico (fases para intermedia)

Distribución **realista en el tiempo** de las fases que alimentan la intermedia, como si el trabajo hubiera sido continuo desde febrero. Las fechas solapan con la Fase 6 (viabilidad y planeación) de forma paralela donde el PRD lo permite.

| ID | Actividad | Inicio | Fin | Duración (días EDT) | Predecesoras | Ítems EDT incluidos |
|----|-----------|--------|-----|---------------------|--------------|---------------------|
| H-F1 | Fase 1 — Alcance técnico del proceso | 11-feb-2026 | 27-feb-2026 | 8 | — | 1.1–1.8 |
| H-F2 | Fase 2 — Levantamiento AS-IS | 13-feb-2026 | 10-mar-2026 | 10 | H-F1 | 2.1–2.10 |
| H-F3 | Fase 3 — Diseño TO-BE | 10-mar-2026 | 18-mar-2026 | 7 | H-F2 | 3.1–3.7 |
| H-F6 | Fase 6 — Viabilidad y planeación (parcial + económico) | 04-mar-2026 | 22-mar-2026 | 11 | H-F1[^2] | 6.1–6.11 |
| H-CMP | Consolidación, rebaselinado y paquete intermedio | 22-mar-2026 | 23-mar-2026 | 2 | H-F3, H-F6 | Cierre 6.x pendiente + empaquetado |
| H-AFN | Afinación para sustentación | 24-mar-2026 | 27-mar-2026 | 4 | H-CMP | Guion, ensayo, ajustes de presentación |
| H-INT | Ventana de sustentación intermedia (curso) | 25-mar-2026 | 27-mar-2026 | 3 | H-AFN | — |

[^2]: **6.1** puede avanzar en paralelo al cierre de Fase 1; **6.2–6.3** se refuerzan tras la sesión **09** (EDT/cronograma); **6.4–6.11** requieren AS-IS/TO-BE bastante maduros, de ahí el solape tardío con H-F3.

**Alineación con sesiones (extracto):** Fase 1 con sesiones 3–8 (gestión de producción, visita); Fase 2 con visita (**06**), MES (**07–08**), VSM/simulación (**10**); Fase 3 con evaluación económica (**11**) y celdas (**12–14**); Fase 6 con planeación (**09**), evaluación económica (**11**) y trabajo de cierre hasta **22-mar**.

**Ruta crítica intermedia (camino más largo en el grafo histórico):**  
**H-F1 → H-F2 → H-F3 → H-CMP → H-AFN → H-INT**  
La Fase 6 (**H-F6**) corre en paralelo; el cuello de botella de entregables técnicos AS-IS/TO-BE sigue la cadena **1→2→3**. La entrega económica y de planeación debe converger en **H-CMP** el **23-mar-2026**.

---

## 7. Cronograma post-intermedia (fases para final)

Inicio lógico después de la ventana de presentación (**28-mar-2026** en adelante). Se corrigen las dependencias respecto al borrador anterior: **PLC después de Arquitectura**; **Digital Factory después de PLC y Robótica**; **SCADA después de Arquitectura y PLC**, **sin** depender de Digital Factory.

| ID | Actividad | Inicio | Fin | Duración | Predecesoras | Tipo de paralelismo | Clases alineadas (sesión / fecha) | Ítems EDT incluidos |
|----|-----------|--------|-----|----------|--------------|---------------------|-----------------------------------|---------------------|
| T-Arq | Arquitectura (Fase 4) | 28-mar-2026 | 07-abr-2026 | 8 días háb.[^3] | H-INT | Paralelo con T-Rob, T-Sim | — (post-intermedia; intro PLC **17** / 08-abr) | 4.1–4.7 |
| T-Rob | Celda robotizada (Fase 7) | 28-mar-2026 | 07-abr-2026 | 8 días háb. | H-INT | Paralelo con T-Arq, T-Sim | Contenidos ya vistos en **12–14** (marzo) | 7.1–7.8 |
| T-Sim | Simulación productiva (Fase 5) | 28-mar-2026 | 09-abr-2026 | 10 días háb.[^3] | H-INT | Paralelo con T-Arq, T-Rob | VSM/simulación (**10**); refuerzo en taller | 5.1–5.8 |
| T-PLC | Control PLC (Fase 8) | 08-abr-2026 | 16-abr-2026 | 9 días háb. | T-Arq | Secuencial tras arquitectura | **17** 08-abr (Ladder); **19** 15-abr (Grafcet) | 8.1–8.7 |
| T-DF | Gemelo digital / Digital Factory (Fase 9) | 17-abr-2026 | 25-abr-2026 | 9 días háb. | T-PLC, T-Rob | Paralelo con T-SCADA (independencia PRD) | **18** 10-abr durante PLC (asistencia; trabajo DF post-PLC); **20** 17-abr; **23** 24-abr | 9.1–9.5 |
| T-SCADA | Supervisión SCADA (Fase 10) | 22-abr-2026 | 09-may-2026 | 17 días háb.[^4] | T-Arq, T-PLC | Paralelo con T-DF (solape autorizado) | **22** 22-abr; **25** 29-abr; **28** 06-may (OPC); **29** 08-may (HMI) | 10.1–10.7[^5] |
| T-Int | Integración y pruebas E2E (Fase 11 parcial) | 10-may-2026 | 15-may-2026 | 6 días háb. | T-DF, T-SCADA | — | **32** 15-may (afinación) | 11.1–11.2 (parcial) |
| T-Cierre | Cierre académico (Fase 11 parcial) | 10-may-2026 | 19-may-2026 | 10 días háb. | T-SCADA[^6] | Paralelo con T-Int | **32** 15-may | 11.3–11.5, video, repo |
| H-Fin | Sustentación final | 20-may-2026 | 22-may-2026 | 3 días | T-Int, T-Cierre | — | **34–35** | — |
| T-Refl | Reflexiones y cierre administrativo | 23-may-2026 | 27-may-2026 | 5 días háb. | H-Fin | — | **37** 27-may (notas) | 11.x según curso |

[^3]: Entre **28-mar** y **07-abr**, los días **01–03-abr** no cuentan como hábiles para cómputo del equipo.  
[^4]: Entre **22-abr** y **09-may**, excluido **01-may**. Duración extendida respecto al calendario EDT nominal (8 días) para absorber talleres OPC/HMI en mayo.  
[^5]: El ítem **10.8** (validación con gemelo) se cierra en **T-Int** una vez exista DF + SCADA.  
[^6]: El cierre de documentos y video puede iniciar en paralelo al cierre de SCADA; la integración formal espera **T-DF** y **T-SCADA**.

---

## 8. Ruta crítica

### 8.1 Intermedia

**H-F1 → H-F2 → H-F3 → H-CMP → H-AFN → H-INT**  
Es el camino más largo en términos de dependencias técnicas AS-IS/TO-BE hacia el hito de entrega.

### 8.2 Final (corregida)

El camino dominante **no** pasa por Robótica en solitario frente a Simulación, sino por la cadena que acumula la mayor duración de trabajo **secuencial** después de los bloques paralelos iniciales:

**T-Arq → T-PLC → T-SCADA → T-Int → H-Fin**

**Justificación:** Tras **T-PLC**, las ramas **T-DF** (9 días hábiles) y **T-SCADA** (17 días hábiles) son **paralelas** e **independientes**. **T-SCADA** es más larga; por tanto la integración (**T-Int**) queda limitada por la finalización de **T-SCADA** (y debe esperar también **T-DF**, que termina antes). La ruta crítica sigue por **SCADA**, no por Digital Factory.

**Duración acumulada en días hábiles (solo trabajo en cadena crítica, sin contar solapes obligatorios entre actividades paralelas):**

| Tramo | Días hábiles |
|-------|--------------|
| T-Arq | 8 |
| T-PLC | 9 |
| T-SCADA | 17 |
| T-Int | 6 |
| **Subtotal trabajo crítico** | **40** |

La ventana **H-Fin** (20–22-may) suma **3 días calendario** de sustentación (no necesariamente “días hábiles” de desarrollo). El **calendario civil** desde inicio **T-Arq** (28-mar) hasta fin de **H-Fin** (22-may) incluye Semana Santa y el puente del 1-may; la **carga** crítica está en los **40 días hábiles** de trabajo de la cadena anterior.

---

## 9. Holguras

| Actividad | Holgura (lectura) |
|-----------|-------------------|
| **T-Rob** | Misma ventana que T-Arq; no está en la ruta crítica final si el cuello es SCADA. Robótica debe terminar antes o con **T-DF**; con fin **07-abr** y **T-DF** iniciando **17-abr**, hay margen de calendario para cerrar entregables 7.x. |
| **T-Sim** | Paralela a T-Arq y T-Rob; no alimenta directamente a T-PLC en el PRD. Holgura respecto a T-Int: la simulación debe estar lista para la defensa final; conviene fijar entrega interna antes de **H-Fin** (p. ej. revisión en **T-Cierre**). |
| **T-DF** | **Holgura libre hacia T-Int:** termina **25-abr** y SCADA sigue hasta **09-may**. Diferencia aproximada **~8 días hábiles** de duración (17−9) en la paralelización DF vs SCADA; el equipo puede usar ese tiempo para endurecer pruebas con emulador o apoyar SCADA. |
| **T-Cierre** (parcial) | Paralelo a **T-Int**; holgura interna si el video y el repo avanzan antes del **15-may**. |

---

## 10. Técnicas de compresión aplicadas

1. **Paralelismo legítimo (Bloque A):** **T-Arq**, **T-Rob** y **T-Sim** comparten predecesora **H-INT** y no se bloquean entre sí; equipos o subequipos distintos (coherente con el PRD: Fase 4 no exige Fase 5 ni 7 terminadas entre sí antes del siguiente nivel).
2. **Paralelismo legítimo (Bloque C):** **T-DF** y **T-SCADA** son independientes según PRD (Fases 9 y 10); ambas requieren **T-PLC** (y DF además **T-Rob**).
3. **Fast-tracking controlado:** **T-SCADA** inicia **22-abr** mientras **T-DF** podría seguir hasta **25-abr**; el solape (**22–25-abr**) es **tres días hábiles** aproximadamente, justificado porque no hay dependencia DF→SCADA y los tags/PLC ya provienen de **T-Arq** y **T-PLC**.

---

## 11. Lectura estratégica

La **intermedia** debe demostrar dominio del proceso, modelo AS-IS, mejora TO-BE defendible y viabilidad económica preliminar con planeación seria (EDT, cronograma, recursos). La **final** debe demostrar **integración técnica**: arquitectura, simulación, robot, control, gemelo digital, supervisión y validación conjunta.

La corrección de dependencias evita prometer PLC antes de cerrar E/S, o SCADA bloqueado artificialmente por Digital Factory cuando el PRD permite paralelizar Fases 9 y 10.

---

## 12. Recomendación operativa

1. **23-mar-2026:** congelar versión de documentos, web y repo; no abrir nuevos frentes de alcance.
2. **25–27-mar-2026:** priorizar claridad de mensaje y trazabilidad EDT en la sustentación intermedia.
3. **Desde 28-mar-2026:** ejecutar el Bloque A con tres frentes activos (arquitectura, robótica, simulación) y reunión semanal de integración.
4. **Tras T-PLC:** dedicar un responsable explícito a **T-SCADA** (ruta crítica) y otro a **T-DF**, con punto de sincronización diario en la semana **22–25-abr** por el solape.
5. **01-may-2026:** día no hábil; adelantar entregas de OPC/HMI en talleres **06** y **08-may**.
6. **15-may-2026:** usar la sesión de afinación para ensayo completo end-to-end.

---

## 13. Base documental

- `APM.xlsx`
- `EDT_Cronograma.xlsx`
- `EDT_Explicado.xlsx`
- `2026-1 APM Calendario V1.pdf`
- `2026-1 APM Programa.pdf`
- `PRD-general.md` (dependencias entre fases y EDT)
