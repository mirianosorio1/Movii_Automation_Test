const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { BeneficiosPage } = require('../pages/BeneficiosPage');

// ─── Flujo principal ───────────────────────────────────────────────────────────
test.describe('Flujo principal — Persona → Promociones', () => {

  test('CP-F01 - La pantalla inicial muestra los botones Persona y Empresa', async ({ page }) => {
    const home = new HomePage(page);
    await home.navegar();

    await expect(home.botonPersona).toBeVisible();
    await expect(home.botonEmpresa).toBeVisible();
  });

  test('CP-F02 - Al hacer clic en Persona carga el home con el menú', async ({ page }) => {
    const home = new HomePage(page);
    await home.navegar();
    await home.ingresarComoPersona();
    await home.cerrarPopupSiAparece();

    await expect(page).toHaveURL(/inicio/);
    await expect(home.menuPromociones).toBeVisible();
  });

  test('CP-F03 - Al hacer clic en PROMOCIONES redirige a beneficios.movii.com.co', async ({ page }) => {
    const home = new HomePage(page);
    await home.navegar();
    await home.ingresarComoPersona();
    await home.cerrarPopupSiAparece();
    await home.irAPromociones();

    await page.waitForURL(/beneficios\.movii\.com\.co/);
    await expect(page).toHaveURL(/beneficios\.movii\.com\.co/);
  });

  test('CP-F04 - Visualización de la página MOVIDO$', async ({ page }) => {
    const home = new HomePage(page);
    await home.navegar();
    await home.ingresarComoPersona();
    await home.cerrarPopupSiAparece();
    await home.irAPromociones();
    await page.waitForURL(/beneficios\.movii\.com\.co/);

    const beneficios = new BeneficiosPage(page);
    await expect(beneficios.enlaceCentroAyuda).toBeVisible();
    await expect(beneficios.enlaceSomosMOVii).toBeVisible();
    await expect(beneficios.botonDescarga).toBeVisible();
  });

});

// ─── Filtros por categoría ─────────────────────────────────────────────────────
test.describe('Filtros por categoría — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.navegar();
    await home.ingresarComoPersona();
    await home.cerrarPopupSiAparece();
    await home.irAPromociones();
    await page.waitForURL(/beneficios\.movii\.com\.co/);
  });

  test('CP-F13 - Filtro Todas las entradas muestra todo el contenido', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    // Aplicar un filtro primero
    await beneficios.filtrarPor('Restaurantes');
    await expect(page).toHaveURL(/categories\/restaurantes/);
    // Volver a todas las entradas
    await beneficios.verTodas();
    // La URL ya no debe tener /categories/
    await expect(page).not.toHaveURL(/categories/);
  });

  test('CP-F14 - Filtro por categoría Restaurantes', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.filtrarPor('Restaurantes');

    await expect(page).toHaveURL(/categories\/restaurantes/);
  });

  test('CP-F15 - Filtro por categoría Entretenimiento', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.filtrarPor('Entretenimiento');

    await expect(page).toHaveURL(/categories\/entretenimiento/);
  });

  test('CP-F16 - Filtro por categoría Supermercados', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.filtrarPor('Supermercados');

    await expect(page).toHaveURL(/categories\/supermercados/);
  });

  test('CP-F17 - Filtro por categoría Droguerías', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.filtrarPor('Droguerías');

    await expect(page).toHaveURL(/categories\/droguer/);
  });

});

// ─── Detalle de promoción ──────────────────────────────────────────────────────
test.describe('Detalle de promoción — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    // Ir a resultados de búsqueda de 'alfa' donde sabemos que hay posts visibles
    await page.goto('https://beneficios.movii.com.co/?s=alfa');
  });

  test('CP-F22 - Apertura del detalle desde una tarjeta de promoción', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.abrirPrimeraPromocion();

    // La URL cambia al detalle de la promoción (ya no muestra resultados de búsqueda)
    await expect(page).not.toHaveURL(/\?s=alfa/);
    // El encabezado del detalle es visible
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

});

// ─── Buscador ─────────────────────────────────────────────────────────────────
test.describe('Buscador — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F20 - Buscar un término muestra la URL con el parámetro de búsqueda', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.buscar('alfa');

    // WordPress agrega ?s=término a la URL al ejecutar una búsqueda
    await expect(page).toHaveURL(/[?&]s=alfa/);
  });

});

// ─── Formulario de suscripción ─────────────────────────────────────────────────
test.describe('Formulario de suscripción — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F23 - Suscripción con email válido muestra confirmación', async ({ page }) => {
    test.skip(true, 'Bloqueado: el formulario incluye reCAPTCHA. Requiere test keys de Google para automatización.');
  });

  test('CP-F24 - Validación de email inválido o campo vacío en suscripción', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);

    // Intentar enviar sin llenar el campo
    await beneficios.botonSuscribirse.click();

    // El navegador bloquea el envío y pone el foco en el campo vacío
    await expect(beneficios.campoEmail).toBeFocused();
  });

});
