// BeneficiosPage.js — Representa el club de beneficios (beneficios.movii.com.co)
class BeneficiosPage {
  constructor(page) {
    this.page = page;
    // Zona de filtros (la sección "Blog" que detectamos)
    this.zonaBlog = page.getByLabel('Blog', { exact: true });
    // Tarjetas de contenido: cada post/beneficio es un <article> en WordPress
    this.tarjetas = page.locator('article');
    // Buscador: el botón es un <div role="button" aria-label="Buscar">
    this.botonBuscar = page.locator('[aria-label="Buscar"]');
    this.campoBuscar = page.locator('input[placeholder="Buscar"]');
    // Formulario de suscripción (footer del sitio)
    this.campoEmail       = page.getByRole('textbox', { name: 'Email *' });
    this.botonSuscribirse = page.getByTestId('buttonElement');
    this.mensajeExito     = page.locator('[class*="success"], [class*="gracias"], .wpcf7-response-output');
    // Página MOVIDO$: botón descarga y enlaces del header (CP-F04)
    // tituloPagina no se usa: el texto 'MOVIDO$' en Wix está en elementos SVG/CSS
    this.botonDescarga     = page.getByText('DESCARGA MOVii', { exact: false }).first();
    this.enlaceCentroAyuda = page.getByRole('link', { name: /Centro de ayuda/i });
    this.enlaceSomosMOVii  = page.getByRole('link', { name: /#SomosMOVii/i });
    // Filtro 'Todas las entradas' para volver a ver todo (CP-F13)
    this.todasLasEntradas  = page.getByRole('link', { name: 'Todas las entradas' });
    // Tarjeta de la promoción ALFA en resultados de búsqueda (CP-F22)
    this.promoALFA = page.getByRole('link', { name: 'Hasta 20% de descuento en ALFA' });
  }

  // ACCIÓN: filtrar por una categoría (Restaurantes, Supermercados, etc.)
  async filtrarPor(categoria) {
    await this.zonaBlog.getByRole('link', { name: categoria }).click();
  }

  // ACCIÓN: quitar el filtro y volver a todas las entradas
  async verTodas() {
    await this.todasLasEntradas.click();
  }

  // ACCIÓN: abrir el detalle de la promoción ALFA desde los resultados de búsqueda
  async abrirPrimeraPromocion() {
    await this.promoALFA.click();
  }

  // ACCIÓN: buscar un término
  // El componente de búsqueda es Wix/React con input oculto que no responde
  // a eventos sintéticos. Se navega al endpoint de búsqueda de WordPress (?s=término).
  async buscar(texto) {
    await this.page.goto(`https://beneficios.movii.com.co/?s=${encodeURIComponent(texto)}`);
  }

  // ACCIÓN: completar y enviar el formulario de suscripción
  async suscribirse(email) {
    await this.campoEmail.fill(email);
    await this.botonSuscribirse.click();
  }
}

module.exports = { BeneficiosPage };
