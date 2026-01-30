🪄 Alohomora Store – E‑commerce con React & Firebase
Alohomora Store es una Single Page Application (SPA) desarrollada con React, que simula una tienda online temática inspirada en el mundo mágico de Harry Potter.
Permite navegar por categorías, ver productos, consultar detalles, agregar items al carrito y finalizar una compra generando una orden en Firestore.
Este proyecto fue desarrollado como entrega final del curso de React.

🚀 Tecnologías utilizadas
- React (componentes, hooks, Virtual DOM)
- React Router DOM (navegación SPA)
- Context API (estado global del carrito)
- Firebase / Firestore (base de datos en la nube)
- CSS para estilos
- Vite como entorno de desarrollo

📦 Funcionalidades principales
🛍️ Catálogo de productos
- Listado dinámico obtenido desde Firestore.
- Filtrado por categorías mediante rutas como /category/:categoryId.
- Vista de detalle de cada producto (/item/:id).
➕ Carrito de compras
- Agregar productos con cantidad seleccionada mediante ItemCount.
- Validaciones de stock y cantidad mínima.
- Ocultamiento del contador luego de agregar al carrito.
- Visualización del carrito con:
- productos
- cantidades
- subtotales
- total general
- Modificación de cantidades y eliminación de items.
- Vaciar carrito completo.
🛒 CartWidget
- Ícono del carrito visible en el NavBar.
- Muestra el total de unidades agregadas al carrito.
🧾 Checkout
- Formulario para completar datos del comprador.
- Validación de email y campos obligatorios.
- Generación de una orden en Firestore.
- Limpieza del carrito al finalizar.
- Visualización del ID de la orden generada.

🔥 Firebase / Firestore
El proyecto utiliza Firestore para:
- almacenar la colección products
- consultar productos y categorías
- generar documentos en la colección orders al finalizar una compra



🧪 Cómo ejecutar el proyecto
- Clonar el repositorio:
git clone https://github.com/FacuGS95/alohomorareact


- Instalar dependencias:
npm install


- Ejecutar en modo desarrollo:
npm run dev


- Abrir en el navegador:
http://localhost:5173

Alohomora Store representa la integración completa de los conceptos fundamentales de React aplicados a un proyecto real: componentes reutilizables, navegación dinámica, manejo global de estado, comunicación con servicios externos y una experiencia de usuario fluida.
La incorporación de Firebase como backend permite gestionar productos y órdenes de compra de manera segura y escalable, completando así el flujo completo de un e‑commerce moderno.
Este proyecto no solo cumple con los requisitos del curso, sino que también sienta una base sólida para futuras mejoras, como autenticación de usuarios, panel de administración, pasarelas de pago o un diseño más avanzado.
Gracias por visitar el repositorio y explorar este desarrollo. ¡Alohomora! 🪄✨





