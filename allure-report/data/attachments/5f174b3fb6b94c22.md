# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: promociones.spec.js >> Responsividad móvil — Club MOVIDO$ >> CP-F10 - La página se adapta a viewport móvil sin solapamientos ni desbordes
- Location: tests\promociones.spec.js:225:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - region "top of page"
  - generic [ref=e10]:
    - banner [ref=e11]:
      - generic [ref=e23]:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - link "movii-LOGO.png" [ref=e28] [cursor=pointer]:
                    - /url: https://beneficios.movii.com.co
                    - img "movii-LOGO.png" [ref=e29]
                  - heading "MOVIIDO$" [level=1] [ref=e31]:
                    - link "MOVIIDO$" [ref=e34] [cursor=pointer]:
                      - /url: https://beneficios.movii.com.co
                      - generic [ref=e36]: MOVIIDO$
            - navigation "Sitio" [ref=e38]:
              - list [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]:
                  - link "Centro de ayuda" [ref=e41]:
                    - /url: https://movii-help.freshdesk.com/support/home
                    - paragraph [ref=e44]: Centro de ayuda
                - listitem [ref=e45] [cursor=pointer]:
                  - link "#SomosMOVii" [ref=e46]:
                    - /url: https://www.movii.com.co/somos-movii/
                    - paragraph [ref=e49]: "#SomosMOVii"
            - link "DESCARGA MOVii" [ref=e51] [cursor=pointer]:
              - /url: https://movii.app.link/SOAsm0vseQb
              - generic [ref=e52]: DESCARGA MOVii
    - main [ref=e53]:
      - generic [ref=e58]:
        - generic:
          - generic:
            - generic:
              - img "Portad.jpg" [ref=e73]
              - region "Slide show gallery" [ref=e87]:
                - navigation:
                  - button [ref=e88] [cursor=pointer]
                  - button [ref=e90] [cursor=pointer]
                - link [ref=e94] [cursor=pointer]:
                  - /url: https://beneficios.movii.com.co/post/alfa-hogar
                  - generic [ref=e99]:
                    - paragraph
                - generic [ref=e101]: 1/6
              - generic [ref=e102]:
                - generic:
                  - generic:
                    - heading "Por ser MOVii tienes promos en diferentes categorías en tu app o con tu tarjeta MOVii. Conócelas aquí." [level=1] [ref=e115]
                    - generic [ref=e122]:
                      - generic [ref=e124]:
                        - navigation "Blog" [ref=e125]:
                          - list [ref=e126] [cursor=pointer]:
                            - listitem [ref=e127]:
                              - link "Todas las entradas" [ref=e128]:
                                - /url: https://beneficios.movii.com.co
                            - listitem [ref=e129]:
                              - link "Restaurantes" [ref=e130]:
                                - /url: https://beneficios.movii.com.co/blog/categories/restaurantes
                            - listitem [ref=e131]:
                              - link "Entretenimiento" [ref=e132]:
                                - /url: https://beneficios.movii.com.co/blog/categories/entretenimiento
                            - listitem [ref=e133]:
                              - link "Supermercados" [ref=e134]:
                                - /url: https://beneficios.movii.com.co/blog/categories/supermercados
                            - listitem [ref=e135]:
                              - link "Droguerías" [ref=e136]:
                                - /url: https://beneficios.movii.com.co/blog/categories/droguerías
                            - listitem [ref=e137]:
                              - link "Transporte" [ref=e138]:
                                - /url: https://beneficios.movii.com.co/blog/categories/transporte
                            - listitem [ref=e139]:
                              - link "Deportes" [ref=e140]:
                                - /url: https://beneficios.movii.com.co/blog/categories/deportes
                            - listitem [ref=e141]:
                              - link "Educación" [ref=e142]:
                                - /url: https://beneficios.movii.com.co/blog/categories/educación
                            - listitem [ref=e143]:
                              - link "Viajes" [ref=e144]:
                                - /url: https://beneficios.movii.com.co/blog/categories/viajes
                            - listitem [ref=e145]:
                              - link "Aplicaciones" [ref=e146]:
                                - /url: https://beneficios.movii.com.co/blog/categories/aplicaciones
                            - listitem [ref=e147]:
                              - link "Tecnología" [ref=e148]:
                                - /url: https://beneficios.movii.com.co/blog/categories/tecnología
                            - listitem [ref=e149]:
                              - link "Hogar" [ref=e150]:
                                - /url: https://beneficios.movii.com.co/blog/categories/hogar
                        - button "Buscar" [ref=e154]:
                          - img [ref=e155] [cursor=pointer]
                      - region "Feed del blog" [ref=e164]:
                        - generic [ref=e166]:
                          - generic [ref=e167]:
                            - generic [ref=e170] [cursor=pointer]:
                              - img "Hasta 20% de descuento en ALFA" [ref=e171]
                              - img "Hasta 20% de descuento en ALFA" [ref=e172]
                            - generic [ref=e177]:
                              - generic [ref=e178]:
                                - link "Hasta 20% de descuento en ALFA" [ref=e179] [cursor=pointer]:
                                  - /url: https://beneficios.movii.com.co/post/alfa-hogar
                                  - heading "Hasta 20% de descuento en ALFA" [level=2] [ref=e182]
                                - generic [ref=e186] [cursor=pointer]: "Todos los jueves, ahorra hasta 20% en referencias seleccionadas en ALFA pagando con tu tarjeta Mastercard MOVii. Aplica en tiendas físicas, compras por la Línea Naranja 3188007804 y en alfa.com.co. ¿Cómo participar? Compra un jueves (el beneficio solo aplica ese día). Elige productos de referencias seleccionadas (puedes ver una guía de la colección en la página de la promo). Compra por uno de estos canales: Tienda física (a nivel nacional) Línea Naranja: 3188007804 Web: alfa."
                              - link "Hogar" [ref=e188] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/hogar
                          - generic [ref=e189]:
                            - generic [ref=e192] [cursor=pointer]:
                              - 'img "CORPREFER: 20% de descuento" [ref=e193]'
                              - 'img "CORPREFER: 20% de descuento" [ref=e194]'
                            - generic [ref=e199]:
                              - generic [ref=e200]:
                                - 'link "CORPREFER: 20% de descuento" [ref=e201] [cursor=pointer]':
                                  - /url: https://beneficios.movii.com.co/post/corprefer
                                  - 'heading "CORPREFER: 20% de descuento" [level=2] [ref=e204]'
                                - generic [ref=e208] [cursor=pointer]: Disfruta hasta el 20% de descuento en productos seleccionados en Corprefer con tu tarjetas Mastercard. Recibe hasta un 20% de descuento en productos de Corprefer. Hasta el 10% de descuento en el valor de sus exámenes TOEFL iBT (máximo USD $21 a la TRM promedio vigente del mes), TPO (máximo USD $5 a la TRM promedio vigente del mes) y 20% TOEFL iBT más 1 año de VOXY English Academy (máximo USD $90 a la TRM promedio vigente del mes) en la compra que realicen en Toefl.Corprefer.c
                              - link "Educación" [ref=e210] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/educación
                          - generic [ref=e211]:
                            - generic [ref=e214] [cursor=pointer]:
                              - 'img "MIO: Paga tu pasaje con tu DORADITA" [ref=e215]'
                              - 'img "MIO: Paga tu pasaje con tu DORADITA" [ref=e216]'
                            - generic [ref=e221]:
                              - generic [ref=e222]:
                                - 'link "MIO: Paga tu pasaje con tu DORADITA" [ref=e223] [cursor=pointer]':
                                  - /url: https://beneficios.movii.com.co/post/__mio
                                  - 'heading "MIO: Paga tu pasaje con tu DORADITA" [level=2] [ref=e226]'
                                - generic [ref=e230] [cursor=pointer]: "Desde ahora podrás pagar tu pasaje del MIO sin usar efectivo para pagar solo con tu DORADITA con saldo disponible. Cómo funciona: Ahora solo tendrás que acercar tu tarjeta MOVii sin contacto en los lectores habilitados y al ingresar se realizará un cargo temporal en tu tarjeta equivalente a 1 viaje y durante los siguientes días verás en tu estado de cuenta el cobro total de todos los viajes realizados ese día (recuerda tener saldo en tu DORADITA). Descripción del beneficio"
                              - link "Transporte" [ref=e232] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/transporte
                          - generic [ref=e233]:
                            - generic [ref=e236] [cursor=pointer]:
                              - 'img "Copiloto: 50% de cashback" [ref=e237]'
                              - 'img "Copiloto: 50% de cashback" [ref=e238]'
                            - generic [ref=e243]:
                              - generic [ref=e244]:
                                - 'link "Copiloto: 50% de cashback" [ref=e245] [cursor=pointer]':
                                  - /url: https://beneficios.movii.com.co/post/copiloto
                                  - 'heading "Copiloto: 50% de cashback" [level=2] [ref=e248]'
                                - generic [ref=e252] [cursor=pointer]: "Recibe 50% de cashback pagando tus parqueaderos con tu TAG Copiloto desde la app Copiloto (o Copiloto Conductores). El saldo se acredita en tu cuenta Copiloto para usarlo en peajes y otros servicios habilitados. ¿Cómo participar? Activa tu TAG Copiloto. Entra a la app Copiloto o Copiloto Conductores y conecta tu tarjeta Mastercard MOVii para pagar tus parqueaderos desde la app. Asegúrate de pagar/recargar solo con tu tarjeta Mastercard MOVii. Listo: si cumples las condiciones"
                              - link "Transporte" [ref=e254] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/transporte
                          - generic [ref=e255]:
                            - generic [ref=e258] [cursor=pointer]:
                              - 'img "MEDIPIEL: 35% de descuento" [ref=e259]'
                              - 'img "MEDIPIEL: 35% de descuento" [ref=e260]'
                            - generic [ref=e265]:
                              - generic [ref=e266]:
                                - 'link "MEDIPIEL: 35% de descuento" [ref=e267] [cursor=pointer]':
                                  - /url: https://beneficios.movii.com.co/post/medipiel
                                  - 'heading "MEDIPIEL: 35% de descuento" [level=2] [ref=e270]'
                                - generic [ref=e274] [cursor=pointer]: "Recibe un 35% de descuento en compras de referencias seleccionadas del cuidado de la piel pagando con tu tarjeta MOVii hasta el 31 de diciembre del 2026 Vigencia: Durante periodos específicos y hasta el 31 de diciembre de 2026: Del 11 al 14 de diciembre de 2025. Del 12 al 15 de marzo 2026. Del 25 al 28 de junio 2026. Del 12 al 15 de noviembre 2026. Del 14 al 17 de diciembre 2026. ¿Cómo participar? Aplica para las compras realizadas a través de nuestra tienda online www.medipi"
                              - link "Droguerías" [ref=e276] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/droguerías
                          - generic [ref=e277]:
                            - generic [ref=e280] [cursor=pointer]:
                              - 'img "McDonald''s: 20 % de descuento" [ref=e281]'
                              - 'img "McDonald''s: 20 % de descuento" [ref=e282]'
                            - generic [ref=e287]:
                              - generic [ref=e288]:
                                - 'link "McDonald''s: 20 % de descuento" [ref=e289] [cursor=pointer]':
                                  - /url: https://beneficios.movii.com.co/post/mcdonalds
                                  - 'heading "McDonald''s: 20 % de descuento" [level=2] [ref=e292]'
                                - generic [ref=e296] [cursor=pointer]: 20% de descuento en todas las compras realizadas por al web y app de McDonald's. Por compras realizadas todos los días por valor igual o superior a COP $25.000 con tu tarjeta MOVii Mastercard recibe un 20% de descuento en compras que realices desde la web y app de McDonald’s cualquier día de la semana. ¿Cómo participar? Realiza compras todos los días de la semana desde la app o web de MC pagando con tu tarjeta MOVii y obtén un 20% de descuento hasta el 31 de marzo del 2026 o
                              - link "Restaurantes" [ref=e298] [cursor=pointer]:
                                - /url: https://beneficios.movii.com.co/blog/categories/restaurantes
              - generic [ref=e313]:
                - generic:
                  - generic:
                    - heading "¡Suscríbete para enterarte de nuevas promos!" [level=2] [ref=e314]:
                      - generic [ref=e318]: ¡Suscríbete para enterarte de nuevas promos!
                    - generic [ref=e319]:
                      - generic [ref=e320]: Email *
                      - textbox "Email *" [ref=e322]:
                        - /placeholder: "tu correo "
                    - button "Suscribirme" [ref=e324] [cursor=pointer]:
                      - generic [ref=e325]: Suscribirme
    - contentinfo [ref=e326]:
      - generic [ref=e332]:
        - generic:
          - generic:
            - img "movii-LOGO.png" [ref=e335]
            - img "lateral-img-(2).png" [ref=e338]
            - list "Barra de redes sociales" [ref=e340]:
              - listitem [ref=e341]:
                - link "facebook" [ref=e342] [cursor=pointer]:
                  - /url: https://www.facebook.com/moviiapp/
                  - img "facebook" [ref=e343]
              - listitem [ref=e344]:
                - link "Negro del icono de Instagram" [ref=e345] [cursor=pointer]:
                  - /url: https://www.instagram.com/soymovii/
                  - img "Negro del icono de Instagram" [ref=e346]
              - listitem [ref=e347]:
                - link "twitter" [ref=e348] [cursor=pointer]:
                  - /url: https://twitter.com/soymovii
                  - img "twitter" [ref=e349]
              - listitem [ref=e350]:
                - link "linkedin" [ref=e351] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/movii/
                  - img "linkedin" [ref=e352]
              - listitem [ref=e353]:
                - link "Negro del icono de YouTube" [ref=e354] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UCQtbUmmbtarl7DsCTXK210g
                  - img "Negro del icono de YouTube" [ref=e355]
            - paragraph [ref=e356]:
              - generic [ref=e357]: © Copyright MOVii. Todos los derechos reservados. 2025.
            - img "logo2.png" [ref=e360]
  - region "bottom of page"
```

# Test source

```ts
  140 |     const hayImagenesRotas = await imagenes.evaluateAll(imgs =>
  141 |       imgs
  142 |         .filter(img => img.src && !img.src.startsWith('data:') && img.complete)
  143 |         .some(img => img.naturalWidth === 0)
  144 |     );
  145 |     expect(hayImagenesRotas).toBe(false);
  146 |   });
  147 | 
  148 |   test('CP-F12 - Listado de promociones se muestra con títulos e imágenes visibles', async ({ page }) => {
  149 |     // En Wix las tarjetas no son <article> — se verifica contenido visible directamente
  150 |     const titulos = page.getByRole('heading').filter({ hasText: /\w+/ });
  151 |     await expect(titulos.first()).toBeVisible();
  152 |     expect(await titulos.count()).toBeGreaterThan(0);
  153 | 
  154 |     const imagenes = page.locator('img[src]:not([src=""])');
  155 |     await expect(imagenes.first()).toBeVisible();
  156 |   });
  157 | 
  158 | });
  159 | 
  160 | // ─── Filtros por categoría ─────────────────────────────────────────────────────
  161 | test.describe('Filtros por categoría — Club MOVIDO$', () => {
  162 | 
  163 |   test.beforeEach(async ({ page }) => {
  164 |     await irABeneficios(page);
  165 |   });
  166 | 
  167 |   test('CP-F13 - Filtro Todas las entradas restaura la vista completa', async ({ page }) => {
  168 |     const beneficios = new BeneficiosPage(page);
  169 |     await beneficios.filtrarPor('Restaurantes');
  170 |     await expect(page).toHaveURL(/categories\/restaurantes/);
  171 | 
  172 |     await beneficios.verTodas();
  173 |     await expect(page).not.toHaveURL(/categories/);
  174 |   });
  175 | 
  176 |   test('CP-F14 - Filtro por categoría Restaurantes', async ({ page }) => {
  177 |     const beneficios = new BeneficiosPage(page);
  178 |     await beneficios.filtrarPor('Restaurantes');
  179 |     await expect(page).toHaveURL(/categories\/restaurantes/);
  180 |   });
  181 | 
  182 |   test('CP-F15 - Filtro por categoría Entretenimiento', async ({ page }) => {
  183 |     const beneficios = new BeneficiosPage(page);
  184 |     await beneficios.filtrarPor('Entretenimiento');
  185 |     await expect(page).toHaveURL(/categories\/entretenimiento/);
  186 |   });
  187 | 
  188 |   test('CP-F16 - Filtro por categoría Supermercados', async ({ page }) => {
  189 |     const beneficios = new BeneficiosPage(page);
  190 |     await beneficios.filtrarPor('Supermercados');
  191 |     await expect(page).toHaveURL(/categories\/supermercados/);
  192 |   });
  193 | 
  194 |   test('CP-F17 - Filtro por categoría Droguerías', async ({ page }) => {
  195 |     const beneficios = new BeneficiosPage(page);
  196 |     await beneficios.filtrarPor('Droguerías');
  197 |     await expect(page).toHaveURL(/categories\/droguer/);
  198 |   });
  199 | 
  200 | });
  201 | 
  202 | // ─── Desplegable Más ───────────────────────────────────────────────────────────
  203 | test.describe('Desplegable Más — Club MOVIDO$', () => {
  204 | 
  205 |   test.beforeEach(async ({ page }) => {
  206 |     await page.goto('https://beneficios.movii.com.co/');
  207 |   });
  208 | 
  209 |   test('CP-F18 - Desplegable Más muestra categorías adicionales y filtra al seleccionar', async ({ page }) => {
  210 |     const beneficios = new BeneficiosPage(page);
  211 |     await expect(beneficios.dropdownMas).toBeVisible();
  212 |     await beneficios.dropdownMas.click();
  213 | 
  214 |     const subMenu = page.locator('[class*="sub-menu"], [class*="dropdown"], ul:visible').first();
  215 |     await expect(subMenu).toBeVisible();
  216 |   });
  217 | 
  218 | });
  219 | 
  220 | // ─── Responsividad móvil ───────────────────────────────────────────────────────
  221 | test.describe('Responsividad móvil — Club MOVIDO$', () => {
  222 | 
  223 |   test.use({ viewport: { width: 375, height: 812 } });
  224 | 
  225 |   test('CP-F10 - La página se adapta a viewport móvil sin solapamientos ni desbordes', async ({ page }) => {
  226 |     // Defecto conocido: beneficios.movii.com.co presenta overflow horizontal en 375×812
  227 |     // (body.scrollWidth > window.innerWidth) en Chromium y Firefox.
  228 |     // Pendiente de corrección por el equipo de desarrollo.
  229 |     test.fail(true, 'Defecto conocido: overflow horizontal detectado en viewport móvil 375×812');
  230 | 
  231 |     await page.goto('https://beneficios.movii.com.co/');
  232 |     const beneficios = new BeneficiosPage(page);
  233 | 
  234 |     await expect(beneficios.botonDescarga).toBeVisible();
  235 |     await expect(page.getByRole('heading').first()).toBeVisible();
  236 | 
  237 |     const hayOverflow = await page.evaluate(() =>
  238 |       document.body.scrollWidth > window.innerWidth
  239 |     );
> 240 |     expect(hayOverflow).toBe(false);
      |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  241 |   });
  242 | 
  243 | });
  244 | 
  245 | // ─── Buscador ─────────────────────────────────────────────────────────────────
  246 | test.describe('Buscador — Club MOVIDO$', () => {
  247 | 
  248 |   test.beforeEach(async ({ page }) => {
  249 |     await page.goto('https://beneficios.movii.com.co/');
  250 |   });
  251 | 
  252 |   test('CP-F20 - Buscar un término muestra resultados relacionados', async ({ page }) => {
  253 |     const beneficios = new BeneficiosPage(page);
  254 |     await beneficios.buscar('alfa');
  255 | 
  256 |     // WordPress agrega ?s=término a la URL
  257 |     await expect(page).toHaveURL(/[?&]s=alfa/);
  258 |     // El resultado de ALFA es visible en la página
  259 |     await expect(beneficios.promoALFA).toBeVisible();
  260 |   });
  261 | 
  262 | });
  263 | 
  264 | // ─── Detalle de promoción ──────────────────────────────────────────────────────
  265 | test.describe('Detalle de promoción — Club MOVIDO$', () => {
  266 | 
  267 |   test.beforeEach(async ({ page }) => {
  268 |     await page.goto('https://beneficios.movii.com.co/?s=alfa');
  269 |   });
  270 | 
  271 |   test('CP-F22 - Apertura del detalle desde una tarjeta de promoción', async ({ page }) => {
  272 |     const beneficios = new BeneficiosPage(page);
  273 |     await beneficios.abrirPrimeraPromocion();
  274 | 
  275 |     // La URL cambia al detalle (ya no muestra resultados de búsqueda)
  276 |     await expect(page).not.toHaveURL(/\?s=alfa/);
  277 |     // El texto "ALFA" aparece en algún elemento de la página de detalle
  278 |     // (el h1 de Wix siempre dice "MOVIIDO$"; el contenido ALFA está en el cuerpo)
  279 |     await expect(page.getByText(/alfa/i).first()).toBeVisible();
  280 |   });
  281 | 
  282 | });
  283 | 
  284 | // ─── Formulario de suscripción ─────────────────────────────────────────────────
  285 | test.describe('Formulario de suscripción — Club MOVIDO$', () => {
  286 | 
  287 |   test.beforeEach(async ({ page }) => {
  288 |     await page.goto('https://beneficios.movii.com.co/');
  289 |   });
  290 | 
  291 |   test('CP-F23 - Suscripción con email válido muestra confirmación', async ({ page }) => {
  292 |     test.skip(true, 'Bloqueado: el formulario incluye reCAPTCHA. Requiere test keys de Google para automatización.');
  293 |   });
  294 | 
  295 |   test('CP-F24 - Validación de email inválido o campo vacío en suscripción', async ({ page }) => {
  296 |     const beneficios = new BeneficiosPage(page);
  297 | 
  298 |     // Intentar enviar sin llenar el campo
  299 |     await beneficios.botonSuscribirse.click();
  300 | 
  301 |     // El navegador bloquea el envío y pone el foco en el campo inválido
  302 |     await expect(beneficios.campoEmail).toBeFocused();
  303 |     // Confirmar validación nativa: campo vacío es inválido
  304 |     const esValido = await beneficios.campoEmail.evaluate(el => el.validity.valid);
  305 |     expect(esValido).toBe(false);
  306 |   });
  307 | 
  308 | });
  309 | 
```