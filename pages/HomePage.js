// HomePage.js — Hace referencia al sitio principal movii.com.co
class HomePage {
  // El constructor recibe la "página" y guarda los localizadores
  constructor(page) {
    this.page = page;
    this.botonPersona = page.getByRole('link', { name: 'Persona' });
    this.botonEmpresa = page.getByRole('link', { name: 'Empresa' });
    this.cerrarPopup = page.locator('.close-popup');
    this.menuPromociones = page.getByRole('link', { name: 'PROMOCIONES', exact: true });
  }

  // ACCIÓN: ir al sitio
  async navegar() {
    await this.page.goto('https://www.movii.com.co/');
  }

  // ACCIÓN: ingresar como Persona
  async ingresarComoPersona() {
    await this.botonPersona.click();
  }

  // ACCIÓN: cerrar el pop-up si aparece
  async cerrarPopupSiAparece() {
    if (await this.cerrarPopup.isVisible()) {
      await this.cerrarPopup.click();
    }
  }

  // ACCIÓN: ir a Promociones
  async irAPromociones() {
    await this.menuPromociones.click();
  }
}

module.exports = { HomePage };