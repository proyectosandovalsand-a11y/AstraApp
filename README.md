#  ASTRA PERFUMERIA — E-Commerce & Catálogo de Alta Perfumería

Catálogo interactivo de alta gama para **ASTRA PERFUMERIA**, inspirado en las mejores tiendas de lujo de Colombia como **Perfumería EAU**, **Blind** y **Loto del Sur**.

<img width="1352" height="628" alt="image" src="https://github.com/user-attachments/assets/a7a358eb-8e76-4e2d-a5a0-aeda2f359e2d" />

---

## 🌟 Novedades y Mejoras Implementadas

### 1. 🛍️ Categorías Rápidas Estilo Stories & Perfumería EAU
- **Perfumería Árabe:** Fenómenos virales como *Lattafa Khamrah* y *Club de Nuit Intense Man*.
- **Nicho de Lujo:** *Baccarat Rouge 540*, *Creed Aventus*, *Delina Exclusif*, *Santal 33*, *Angels' Share*.
- **Decants:** Presentaciones fraccionadas en atomizadores de vidrio fino de 5ml y 10ml desde **$32.000 COP**.
- **Para Ella / Para Él:** Filtros directos con un solo clic.
- **Los Más Vendidos (Bestsellers):** Acceso rápido a las fragancias más solicitadas en Colombia.

### 2. 🔍 Buscador en Tiempo Real con Sugerencias Instantáneas
- Al escribir en el buscador, se despliega un popover inteligente que muestra miniaturas, marca y precios instantáneamente sin recargar la página.

### 3. 🚚 Barra de Envío Gratis Dinámica ($250.000 COP)
- Al agregar productos a la bolsa de compras, un medidor calcula en tiempo real cuánto te falta para obtener **Envío Gratis** a cualquier ciudad de Colombia.

### 4. 🎚️ Filtros Avanzados con Slider de Precios
- Control deslizante de rango de precios en Pesos Colombianos (COP) hasta $2.000.000 COP.
- Filtros por familia olfativa, género, concentración y ocasión.

### 5. 📱 Barra de Navegación Inferior Mobile-First
- En dispositivos móviles, la app cuenta con una barra de navegación inferior tipo aplicación nativa:
  * 🏠 **Catálogo**
  * ⚙️ **Filtros**
  * 🔍 **Buscar**
  * ❤️ **Favoritos**
  * 🛍️ **Bolsa de Compras** (con badge dinámico)

### 6. 💬 Pedidos y Asesoría Directa por WhatsApp (313 885 2832)
- **Pedido de un solo clic:** Envía el nombre del perfume, tamaño seleccionado y precio formateado en COP.
- **Checkout de Bolsa:** Compila el pedido con el nombre del cliente, ciudad de destino y método de pago elegido (Bancolombia, Nequi, Contraentrega, PSE).
- **Botón flotante con efecto pulse:** Siempre visible para hablar con un asesor.

### 7. ⭐ Prueba Social y Preguntas Frecuentes
- Reseñas verificadas de compradores de Bogotá, Medellín y Cali.
- Acordeón interactivo con respuestas sobre originalidad, decants, envíos y contraentrega.

Estructura del proyecto

```
astra-perfumeria/
├── index.html              # Página principal (vista)
├── css/
│   └── styles.css          # Estilos (paleta negro / marfil / dorado)
├── js/
│   ├── productos.js        # Capa de datos: catálogo de 15 fragancias
│   ├── logica.js           # Capa de lógica de negocio (funciones puras)
│   └── app.js              # Capa de presentación: DOM y eventos
├── img/
│   ├── logo.jpg            # Logo de Astra Perfumería
│   └── productos/          # Imágenes de los 15 productos (SVG)
├── tests/
│   └── logica.test.js      # 24 pruebas unitarias
├── docs/
│   ├── ARQUITECTURA.md     # Detalle de la arquitectura
│   ├── PRUEBAS.md          # Plan y casos de prueba
│   └── capturas/           # Capturas de pantalla
├── package.json            # Script "npm test"
├── .gitignore
├── LICENSE
└── README.md
```

Arquitectura

El proyecto usa una **arquitectura por capas** del lado del cliente, inspirada en el patrón **MVC** (Modelo – Vista – Controlador):

```
┌──────────────────────────────────────────────┐
│  VISTA            index.html + styles.css     │  Lo que ve el usuario
└──────────────────────┬───────────────────────┘
                       │ eventos (clic, submit)
┌──────────────────────▼───────────────────────┐
│  CONTROLADOR      js/app.js                   │  Maneja el DOM, el estado
│  (presentación)                                │  y el flujo de compra
└──────────────────────┬───────────────────────┘
                       │ llama funciones puras
┌──────────────────────▼───────────────────────┐
│  LÓGICA DE NEGOCIO  js/logica.js              │  Carrito, totales, filtros,
│                                                │  validaciones, n.º de pedido
└──────────────────────┬───────────────────────┘
                       │ lee
┌──────────────────────▼───────────────────────┐
│  DATOS (MODELO)   js/productos.js             │  Catálogo de productos
│                   localStorage                │  Persistencia del carrito
└──────────────────────────────────────────────┘
```

**Decisiones principales:**

- **Separación de responsabilidades:** `logica.js` no toca el DOM; solo recibe datos y devuelve resultados. Por eso se puede probar en Node.
- **Funciones puras e inmutabilidad:** las funciones del carrito devuelven un arreglo nuevo en lugar de modificar el original, lo que evita errores y facilita las pruebas.
- **Módulos compatibles con navegador y Node:** `productos.js` y `logica.js` se exponen como `window.*` en el navegador y como `module.exports` en Node.
- **Sin backend:** el pago y el envío de correo son simulados. El diseño permite reemplazar la simulación por una API real sin cambiar la lógica.


---

## 🚀 ¿Cómo Abrir la Aplicación?

Haz doble clic en **`abrir_tienda.bat`** o abre directamente **`index.html`** en tu navegador.
