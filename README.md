# MOVii — Automatización de Pruebas QA

Proyecto de automatización de pruebas para la suite de casos de prueba del flujo **Persona → Promociones → Club MOVIDO$** del sitio [movii.com.co](https://www.movii.com.co).

---

## Tecnologías

| Herramienta | Versión | Uso |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.60.0 | Framework de automatización |
| Node.js | ≥ 18 | Entorno de ejecución |
| JavaScript (CommonJS) | — | Lenguaje de scripting |

Navegadores cubiertos: **Chromium** y **Firefox** (configurados en `playwright.config.js`).

---

## Estructura del proyecto

```
Movii/
├── pages/
│   ├── HomePage.js          # Page Object — movii.com.co
│   └── BeneficiosPage.js    # Page Object — beneficios.movii.com.co
├── tests/
│   └── promociones.spec.js  # Suite de casos de prueba
├── playwright.config.js     # Configuración de Playwright
└── package.json
```

Se usa el patrón **Page Object Model (POM)**: cada página tiene su propia clase con localizadores y acciones, separados del código de prueba.

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/mirianosorio1/Movii_Automation_Test.git
cd Movii_Automation_Test

# 2. Instalar dependencias
npm install

# 3. Instalar navegadores de Playwright
npx playwright install
```

---

## Ejecución

```bash
# Ejecutar todos los tests
npx playwright test

# Ejecutar solo en Chromium
npx playwright test --project=chromium

# Ejecutar un test específico por nombre
npx playwright test -g "CP-F03"

# Ver el reporte HTML después de la ejecución
npx playwright show-report
```

---

## Casos de prueba

### Flujo principal — Persona → Promociones

| ID | Descripción | Estado |
|---|---|---|
| CP-F01 | La pantalla inicial muestra los botones Persona y Empresa | Automatizado |
| CP-F02 | Al hacer clic en Persona carga el home con el menú | Automatizado |
| CP-F03 | Al hacer clic en PROMOCIONES redirige a beneficios.movii.com.co | Automatizado |
| CP-F04 | Visualización de la página MOVIDO$ | Automatizado |

### Filtros por categoría — Club MOVIDO$

| ID | Descripción | Estado |
|---|---|---|
| CP-F13 | Filtro "Todas las entradas" muestra todo el contenido | Automatizado |
| CP-F14 | Filtro por categoría Restaurantes | Automatizado |
| CP-F15 | Filtro por categoría Entretenimiento | Automatizado |
| CP-F16 | Filtro por categoría Supermercados | Automatizado |
| CP-F17 | Filtro por categoría Droguerías | Automatizado |

### Buscador — Club MOVIDO$

| ID | Descripción | Estado |
|---|---|---|
| CP-F20 | Buscar un término muestra la URL con el parámetro de búsqueda | Automatizado |

### Detalle de promoción — Club MOVIDO$

| ID | Descripción | Estado |
|---|---|---|
| CP-F22 | Apertura del detalle desde una tarjeta de promoción | Automatizado |

### Formulario de suscripción — Club MOVIDO$

| ID | Descripción | Estado |
|---|---|---|
| CP-F23 | Suscripción con email válido muestra confirmación | Bloqueado |
| CP-F24 | Validación de email inválido o campo vacío en suscripción | Automatizado |

---

## Bloqueadores conocidos

**CP-F23 — reCAPTCHA en el formulario de suscripción**

El formulario de suscripción incluye un reCAPTCHA de Google que impide la automatización del envío. El test está marcado con `test.skip()` y documenta el bloqueo.

Para desbloquearlo en un entorno controlado se requieren las **test keys de reCAPTCHA** (`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`) que Google provee para testing y que deben ser configuradas en el backend del formulario.

---

## Decisiones técnicas

- **`workers: 1`** — El sitio movii.com.co es lento. Ejecutar tests en paralelo causa timeouts. Con 1 worker los tests son más estables.
- **`timeout: 90000` / `navigationTimeout: 60000`** — Margen amplio para sitios externos con carga variable.
- **`retries: 1`** — Los tests flaky por red se reintentan automáticamente una vez.
- **Búsqueda vía URL (`?s=término`)** — El componente de búsqueda de beneficios.movii.com.co es un widget Wix/React con un input oculto que no responde a eventos sintéticos. Se navega directamente al endpoint de búsqueda de WordPress como alternativa robusta.
- **`screenshot: 'on'` / `video: 'retain-on-failure'`** — Evidencia visual de cada ejecución disponible en el reporte HTML.
