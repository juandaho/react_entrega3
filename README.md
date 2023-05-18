# Proyecto ALMENTE

Proyecto que presenta los servicios de productos sicologicos para compra, llamado ALMENTE. Los productos en compra son:

- Libros
- Sesiones de Terapia
- Cursos

# Instalación y Configuración

Antes de empezar,  tener instalado Node.js y npm.


1. **Instalar dependencias**

   Navega al directorio del proyecto y ejecuta: `npm install`

- npm install  react-router-dom
- npm install bootstrap


## Base de Datos
La aplicación está conectada con Firebase - Google.

## Detalles de la Aplicación

La aplicación de comercio electrónico está desarrollada en React, que maneja el enrutamiento a varias páginas como la lista de productos, detalles del producto, carrito y la página de pago.

### Componentes

**App** 

Aplicación principal que gestiona el enrutamiento.

**ItemCount**

Un contador de artículos con botones para incrementar, decrementar y agregar artículos al carrito.

**NavBar**

La barra de navegación de la aplicación, que incluye enlaces a diferentes categorías (Libros, Sesiones y Cursos) y un widget del carrito.

**Cart**

Muestra todos los productos en el carrito del usuario, proporciona una opción para eliminar todos los productos y también muestra el costo total de los productos.

**CartContext**

Define el contexto del carrito que permite manejar el estado del carrito (añadir, remover y limpiar artículos) a lo largo de la aplicación React.

**CartItem**

Muestra un artículo en el carrito con su nombre, precio, cantidad y una opción para eliminarlo.

**CartWidget**

Muestra un ícono de carrito que incluye un contador con el total de artículos actualmente en el carrito.

**Checkout**

Gestiona el proceso de pago. Recoge los detalles del comprador, verifica el stock de los productos en el carrito y crea una orden de compra en la base de datos de Firebase.

**CheckoutForm**

Es un formulario que recoge los detalles del comprador (nombre, teléfono y correo electrónico) y los envía al componente padre Checkout al confirmar.

**Item**

Muestra un artículo individual con su nombre, imagen, precio y stock disponible, y proporciona un enlace para ver más detalles.

**ItemDetail**

Muestra detalles más extensos de un artículo, incluyendo la descripción, categoría, precio y una opción para añadir el artículo al carrito.

**ItemDetailContainer**

Busca en la base de datos de Firebase el artículo que corresponde con el ID proporcionado en la URL y muestra sus detalles a través del componente ItemDetail

**ItemList**

Lista todos los productos proporcionados a través de su prop products.

**ItemListContainer**

Recupera los productos de una categoría especificada en la URL desde Firebase y los muestra a través del componente ItemList.js.
