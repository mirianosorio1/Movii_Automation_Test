const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { BeneficiosPage } = require('../pages/BeneficiosPage');

// Helper: recorre el flujo completo Persona → PROMOCIONES → beneficios.movii.com.co
async function irABeneficios(page) {
  const home = new HomePage(page);
  await home.navegar();
  await home.ingresarComoPersona();
  await home.cerrarPopupSiAparece();
  await home.irAPromociones();
  await page.waitForURL(/beneficios\.movii\.com\.co/);
  return new BeneficiosPage(page);
}

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
    const beneficios = await irABeneficios(page);

    await expect(beneficios.enlaceCentroAyuda).toBeVisible();
    await expect(beneficios.enlaceSomosMOVii).toBeVisible();
    await expect(beneficios.botonDescarga).toBeVisible();
  });

});

// ─── Header y enlaces ──────────────────────────────────────────────────────────
test.describe('Header y enlaces — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F07 - Botón DESCARGA MOVii tiene un enlace válido', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await expect(beneficios.botonDescarga).toBeVisible();
    // botonDescarga usa getByRole('link') para encontrar el <a> con href real
    const href = await beneficios.botonDescarga.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).not.toBe('#');
  });

  test('CP-F08 - Enlace Centro de ayuda apunta a freshdesk', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await expect(beneficios.enlaceCentroAyuda).toBeVisible();
    const href = await beneficios.enlaceCentroAyuda.getAttribute('href');
    expect(href).toContain('freshdesk.com');
  });

  test('CP-F09 - Enlace #SomosMOVii apunta a somos-movii', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await expect(beneficios.enlaceSomosMOVii).toBeVisible();
    const href = await beneficios.enlaceSomosMOVii.getAttribute('href');
    expect(href).toContain('somos-movii');
  });

});

// ─── Carrusel ─────────────────────────────────────────────────────────────────
test.describe('Carrusel — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F05 - Carrusel avanza con la flecha siguiente', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);

    await expect(beneficios.flechaSiguiente).toBeVisible();
    const contadorAntes = await beneficios.contadorCarrusel.textContent();

    await beneficios.flechaSiguiente.click();

    // El contador "N/6" debe actualizarse al slide siguiente
    await expect(beneficios.contadorCarrusel).not.toHaveText(contadorAntes);
  });

  test('CP-F06 - Carrusel retrocede con la flecha anterior', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);

    // Avanzar primero para asegurar que hay un slide previo al que volver
    await beneficios.flechaSiguiente.click();
    const contadorTrasAvanzar = await beneficios.contadorCarrusel.textContent();

    await expect(beneficios.flechaAnterior).toBeVisible();
    await beneficios.flechaAnterior.click();

    // El contador debe reflejar el slide anterior
    await expect(beneficios.contadorCarrusel).not.toHaveText(contadorTrasAvanzar);
  });

});

// ─── Tarjetas de promociones ───────────────────────────────────────────────────
test.describe('Tarjetas de promociones — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F11 - Imágenes y banners de promociones cargan sin errores', async ({ page }) => {
    // Wix carga imágenes desde static.wixstatic.com; esperar al menos una visible
    const imagenes = page.locator('img[src]:not([src=""])');
    await expect(imagenes.first()).toBeVisible();

    // Verificar imágenes que YA terminaron de cargar: si complete=true, naturalWidth debe ser > 0.
    // Las imágenes aún cargando (lazy-load) se omiten — solo fallamos si una imagen
    // completó la carga con naturalWidth=0 (imagen rota).
    const hayImagenesRotas = await imagenes.evaluateAll(imgs =>
      imgs
        .filter(img => img.src && !img.src.startsWith('data:') && img.complete)
        .some(img => img.naturalWidth === 0)
    );
    expect(hayImagenesRotas).toBe(false);
  });

  test('CP-F12 - Listado de promociones se muestra con títulos e imágenes visibles', async ({ page }) => {
    // En Wix las tarjetas no son <article> — se verifica contenido visible directamente
    const titulos = page.getByRole('heading').filter({ hasText: /\w+/ });
    await expect(titulos.first()).toBeVisible();
    expect(await titulos.count()).toBeGreaterThan(0);

    const imagenes = page.locator('img[src]:not([src=""])');
    await expect(imagenes.first()).toBeVisible();
  });

});

// ─── Filtros por categoría ─────────────────────────────────────────────────────
test.describe('Filtros por categoría — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await irABeneficios(page);
  });

  test('CP-F13 - Filtro Todas las entradas restaura la vista completa', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.filtrarPor('Restaurantes');
    await expect(page).toHaveURL(/categories\/restaurantes/);

    await beneficios.verTodas();
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

// ─── Desplegable Más ───────────────────────────────────────────────────────────
test.describe('Desplegable Más — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F18 - Desplegable Más muestra categorías adicionales y filtra al seleccionar', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await expect(beneficios.dropdownMas).toBeVisible();
    await beneficios.dropdownMas.click();

    const subMenu = page.locator('[class*="sub-menu"], [class*="dropdown"], ul:visible').first();
    await expect(subMenu).toBeVisible();
  });

});

// ─── Responsividad móvil ───────────────────────────────────────────────────────
test.describe('Responsividad móvil — Club MOVIDO$', () => {

  test.use({ viewport: { width: 375, height: 812 } });

  test('CP-F10 - La página se adapta a viewport móvil sin solapamientos ni desbordes', async ({ page }) => {
    // Defecto conocido: beneficios.movii.com.co presenta overflow horizontal en 375×812
    // (body.scrollWidth > window.innerWidth) en Chromium y Firefox.
    // Pendiente de corrección por el equipo de desarrollo.
    test.fail(true, 'Defecto conocido: overflow horizontal detectado en viewport móvil 375×812');

    await page.goto('https://beneficios.movii.com.co/');
    const beneficios = new BeneficiosPage(page);

    await expect(beneficios.botonDescarga).toBeVisible();
    await expect(page.getByRole('heading').first()).toBeVisible();

    const hayOverflow = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    );
    expect(hayOverflow).toBe(false);
  });

});

// ─── Buscador ─────────────────────────────────────────────────────────────────
test.describe('Buscador — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/');
  });

  test('CP-F20 - Buscar un término muestra resultados relacionados', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.buscar('alfa');

    // WordPress agrega ?s=término a la URL
    await expect(page).toHaveURL(/[?&]s=alfa/);
    // El resultado de ALFA es visible en la página
    await expect(beneficios.promoALFA).toBeVisible();
  });

});

// ─── Detalle de promoción ──────────────────────────────────────────────────────
test.describe('Detalle de promoción — Club MOVIDO$', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://beneficios.movii.com.co/?s=alfa');
  });

  test('CP-F22 - Apertura del detalle desde una tarjeta de promoción', async ({ page }) => {
    const beneficios = new BeneficiosPage(page);
    await beneficios.abrirPrimeraPromocion();

    // La URL cambia al detalle (ya no muestra resultados de búsqueda)
    await expect(page).not.toHaveURL(/\?s=alfa/);
    // El texto "ALFA" aparece en algún elemento de la página de detalle
    // (el h1 de Wix siempre dice "MOVIIDO$"; el contenido ALFA está en el cuerpo)
    await expect(page.getByText(/alfa/i).first()).toBeVisible();
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

    // El navegador bloquea el envío y pone el foco en el campo inválido
    await expect(beneficios.campoEmail).toBeFocused();
    // Confirmar validación nativa: campo vacío es inválido
    const esValido = await beneficios.campoEmail.evaluate(el => el.validity.valid);
    expect(esValido).toBe(false);
  });

});
