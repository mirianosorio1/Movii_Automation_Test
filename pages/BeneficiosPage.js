class BeneficiosPage {
  constructor(page) {
    this.page = page;

    // Zona de filtros de categoría
    this.zonaBlog = page.getByLabel('Blog', { exact: true });
    // El sitio es Wix: las tarjetas NO son <article> sino divs con data-hook de Wix
    this.tarjetas = page.locator('[data-hook="post-list-item"]');

    // Buscador
    this.botonBuscar = page.locator('[aria-label="Buscar"]');
    this.campoBuscar = page.locator('input[placeholder="Buscar"]');

    // Formulario de suscripción
    this.campoEmail       = page.getByRole('textbox', { name: 'Email *' });
    // Corregido: el sitio real no tiene data-testid; se busca por rol y nombre
    this.botonSuscribirse = page.getByRole('button', { name: /suscribirme/i });
    this.mensajeExito     = page.locator('[class*="success"], [class*="gracias"], .wpcf7-response-output');

    // Header — CP-F04, CP-F07, CP-F08, CP-F09
    // DESCARGA MOVii: buscar el <a> (link role) para poder leer su href (CP-F07)
    // getByText encontraba el <span> interno sin href; getByRole('link') encuentra el <a> padre
    this.botonDescarga     = page.getByRole('link', { name: /DESCARGA MOVii/i });
    this.enlaceCentroAyuda = page.getByRole('link', { name: /Centro de ayuda/i });
    this.enlaceSomosMOVii  = page.getByRole('link', { name: /#SomosMOVii/i });

    // Filtro "Todas las entradas" — CP-F13
    this.todasLasEntradas = page.getByRole('link', { name: 'Todas las entradas' });

    // Tarjeta de la promoción ALFA — CP-F22
    this.promoALFA = page.getByRole('link', { name: /.*ALFA.*/i }).first();

    // Dropdown "Más ▾" en la barra de categorías — CP-F18
    this.dropdownMas = this.zonaBlog
      .locator('button, a, span')
      .filter({ hasText: /^más/i })
      .first();

    // Carrusel banner superior — CP-F05, CP-F06
    // El sitio usa Wix (no Swiper/Slick/Elementor estándar).
    // Los selectores reales requieren inspección del DOM en vivo con DevTools.
    // Usar: page.locator('[aria-label="..."]') o data-hook="..." específico del sitio.
    this.flechaSiguiente    = page.getByTestId('gallery-nextButton');
    this.flechaAnterior     = page.getByTestId('gallery-prevButton');
    this.contadorCarrusel   = page.getByTestId('gallery-counter');
  }

  async filtrarPor(categoria) {
    await this.zonaBlog.getByRole('link', { name: categoria }).click();
  }

  async verTodas() {
    await this.todasLasEntradas.click();
  }

  async abrirPrimeraPromocion() {
    await this.promoALFA.click();
  }

  // El widget de búsqueda (Wix/React) no responde a eventos sintéticos;
  // se navega directamente al endpoint de búsqueda de WordPress.
  async buscar(texto) {
    await this.page.goto(`https://beneficios.movii.com.co/?s=${encodeURIComponent(texto)}`);
  }

  async suscribirse(email) {
    await this.campoEmail.fill(email);
    await this.botonSuscribirse.click();
  }
}

module.exports = { BeneficiosPage };
