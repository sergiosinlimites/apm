<div align="center">

# Gaseo S.A.S.

### Automatización integral para una planta embotelladora en Bogotá

[![Curso](https://img.shields.io/badge/APM-2026--1S-1E293B?style=for-the-badge)](https://github.com/sergiosinlimites/apm)
[![Universidad](https://img.shields.io/badge/Universidad_Nacional_de_Colombia-A8201A?style=for-the-badge)](https://unal.edu.co)
[![Sitio web](https://img.shields.io/badge/GitHub_Pages-Ver_sitio-059669?style=for-the-badge)](https://sergiosinlimites.github.io/apm/)

*Del diagnóstico en planta al gemelo digital: ingeniería de automatización aplicada al sector bebidas.*

[Explorar el sitio](https://sergiosinlimites.github.io/apm/) · [Ver el código](https://github.com/sergiosinlimites/apm)

</div>

---

## Sobre el proyecto

**Gaseo S.A.S.** es una propuesta de ingeniería que parte de una planta embotelladora real en Bogotá. Se levantó el flujo productivo actual, se midió el desempeño y se diseña un estado futuro que integra control industrial, robótica, supervisión SCADA y un gemelo digital para validar las mejoras antes de llevarlas a planta.

---

## El reto · 🎯

| | |
|:---|:---|
| **OEE actual estimado** | ~75% |
| **OEE objetivo** | 95%+ |

Reducir las pérdidas de disponibilidad, velocidad y calidad a lo largo de toda la cadena de valor mediante simulación de eventos discretos, celdas robotizadas, gemelo digital y HMI bajo estándares industriales (ISA-95, ISA-101).

---

## Portafolio de productos · 📦

Tres productos diferenciados por envase, formato y velocidad de línea:

| # | Producto | Envase | Velocidad de referencia |
|---|----------|--------|------------------------|
| 1 | Gaseosa carbonatada 400 ml | Vidrio retornable | 20 000 bot/h |
| 2 | Bebida energética 473 ml | Lata de aluminio | 30 000 latas/h |
| 3 | Agua purificada 1 L | PET no retornable | 15 000 bot/h |

---

## Flujo del proceso (visión rápida)

```
Insumos → Clarificación → Jarabe → Mezcla → Carbonatación → Llenado → Sellado →
Etiquetado → Inspección → Empaque → Embalaje → Paletizado → Almacén → Despacho
```

---

## Los siete pilares del trabajo

Cada bloque aporta una pieza del rompecabezas: teoría, producción, planeación, robótica, digital factory, PLC y SCADA.

| Módulo | Qué cubre |
|--------|-----------|
| **1 · Introducción a la Automatización** | Marco conceptual, Industria 4.0 y niveles de automatización. |
| **2 · Gestión de Producción** | DOP, DAP, VSM, OEE, Takt Time, cuellos de botella y simulación en Tecnomatix. |
| **3 · Planeación y Evaluación** | EDT, cronograma, análisis de utilidad y viabilidad económica (CAPEX/OPEX, VPN, TIR, ROI). |
| **4 · Celdas Robotizadas** | Selección de robot, herramienta terminal, layout, RobotStudio y seguridad. |
| **5 · Digital Factory** | Modelado 3D, sensores virtuales e integración con emulación de controladores. |
| **6 · Controladores industriales (PLC)** | Grafcet, Ladder en Studio 5000, interlocks y gestión de recetas. |
| **7 · SCADA** | ISA-101, diseño HMI, Ignition, tags, alarmas y OPC. |

---

## Dónde estamos · 📍

**Ya consolidado** — Línea base del estado actual (levantamiento, diagramas, indicadores y mapa de flujo de valor), portafolio de tres productos, sitio web multipágina con propuesta y narrativa de inversión, simulación de eventos discretos (modelo AS-IS), cronograma con ruta crítica reprogramada y una base de documentación lista para escalar el diseño futuro.

**En construcción** — Diseño del estado futuro (Lean, VSM objetivo, estrategia multiproducto), arquitectura ISA-95 y red industrial, celda robotizada, lógica PLC, gemelo digital, SCADA en Ignition, cierre de evaluación económica y sustentación final (mayo 2026).

---

## Estructura del repositorio

```
apm/
├── .cursor/                 # Reglas y skills para el flujo de trabajo en Cursor
├── .github/workflows/       # Despliegue continuo a GitHub Pages
├── archivos-drive/          # Material sincronizado con el drive del equipo
├── reprogramacion/          # Cronograma reprogramado
├── scripts/                 # Python (cronograma Excel) y shell (sync)
├── website/                 # Sitio estático: HTML, CSS, JS, imágenes y PDFs
├── requirements.txt
├── serve.py                 # Servidor local de desarrollo
└── APM.ods                  # Hoja de cálculo del proyecto
```

La carpeta `website/` concentra la experiencia pública: landing tipo *pitch*, propuesta técnica, evaluación económica, siete páginas de módulo, contacto, información de la asignatura y páginas legales.

---

## Stack y herramientas · ⚙️

**Ingeniería y planta**

| Área | Herramientas |
|------|----------------|
| Simulación | Tecnomatix Plant Simulation |
| Robótica | RobotStudio (ABB) |
| Control | Studio 5000 / RSLogix (Ladder) |
| Emulación | Logix Emulate |
| SCADA | Ignition (Inductive Automation) |
| Diagramas | draw.io / diagrams.net |

**Repositorio y producto digital**

| Capa | Tecnología |
|------|------------|
| Sitio | HTML5, CSS3, JavaScript (vanilla) |
| Tipografía | Google Fonts — Outfit + Public Sans |
| Despliegue | GitHub Pages + GitHub Actions |
| Scripts | Python 3 (p. ej. openpyxl) |
| Sincronización de datos con Google Drive | rclone + bash |
| Colaboración | Jira Cloud, Cursor IDE |

**Paleta visual del proyecto**

| Rol | Hex |
|-----|-----|
| Primario (granate) | `#A8201A` |
| Primario oscuro | `#6B1410` |
| Secundario (navy) | `#1E293B` |
| Fondo | `#F8FAFC` |
| Éxito | `#059669` |
| Advertencia | `#D97706` |

---

## Ver el sitio en local · 🖥️

Desde la raíz del repositorio:

```bash
python3 serve.py
```

Por defecto el servidor escucha en el **puerto 8766**. Abre en el navegador:

**http://localhost:8766/**

Para otro puerto:

```bash
python3 serve.py 8080
```

*(Opcional)* Entorno Python para scripts:

```bash
python3 -m venv .venv && source .venv/bin/activate   # Linux/macOS
pip install -r requirements.txt
```

---

## Equipo (Grupo 4)

| # | Integrante |
|---|------------|
| 1 | Dixon Alberto Cuesta Segura |
| 2 | Juan Angel Vargas Rodriguez |
| 3 | Juan Esteban Otavo García |
| 4 | Santiago Camilo Fonseca Prieto |
| 5 | Sergio Andrés Bolaños Penagos |
| 6 | Sergio Avellaneda Piñeros |

---

## Docentes

| Profesor | Módulo |
|----------|--------|
| Carlos Julio Cortés R. | Gestión y evaluación de la producción automatizada |
| Luis Miguel Méndez | Introducción a la Automatización / Planeación y Evaluación |
| Víctor Hugo Grisales | Automatización discreta: PLC y SCADA |
| Ricardo Ramírez H. | Celdas de manufactura robotizadas |
| Eduardo Barrera Gualdrón | Coordinación, SCADA |
| Ubaldo García Zaragoza | Digital Factory |

---

## Enlaces

| Recurso | URL |
|---------|-----|
| **Repositorio** | https://github.com/sergiosinlimites/apm |
| **Sitio en vivo** | https://sergiosinlimites.github.io/apm/ |

---

## Licencia

Este proyecto se distribuye bajo la [Licencia MIT](LICENSE).

Proyecto académico de la asignatura **Automatización de Procesos de Manufactura (APM)** — 2026-1S, Universidad Nacional de Colombia.

---

<div align="center">

**Gaseo S.A.S.** · *Ingeniería de bebidas, automatizada de punta a punta.*

</div>
