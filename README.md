# Frontend-FocusBoostingCommunity
**Proyecto**
- Este proyecto es la creacion del Frontend de una web de venta de diversos servicios para el videojuego "World of Warcraft", usando como moneda de cambio el propio oro dentro del juego, el fin de este proyecto es meramente educativo pero no se descarta en un futuro que salga a la luz, dado que no hay ningun tipo de beneficio lucrativo.

**Tecnologias Usadas**

![js2](https://user-images.githubusercontent.com/114490860/224815744-fae6f0fb-795c-4a0b-b7ed-4a7a2941bc3a.png)![react2](https://user-images.githubusercontent.com/114490860/224815806-d54163b1-b624-44fe-a05b-a57a3358b26b.png)![redux](https://user-images.githubusercontent.com/114490860/224816086-a19996cf-2d35-473f-954d-c892d779f46c.png)

**Guia para usuario**
- Una vez realizado el pedido un miembro con el rol "Booster" le agregara a "Discord" con la ID facilitada para ponerse en contacto sobre como y cuando se realizara el pago y el servicio a realizar, dicho miembro se encargara de manternerse en contacto con el usuario en todo momento indicandole tambien cuando actualiza el estado de su pedido para poder revisarlo en el apartado "Profile".

**Pasos que realizaria un usuario de 0 hasta que realiza un pedido y se completa dicho pedido**
1. En la vista "Home"(Vista principal de la pagina) haria click en el boton de "Register" para asi registrarse.
2. Una vez introducidos todos los campos correctamente se le redireccionaria a la vista "Home", si no esta logueado lo hara ahora.
3. En la parte superior encontrara el link a "Services" donde una vez alli, podra revisar todos los servicios a la venta, teniendo estos debajo un boton para comprar.(Dicho boton SOLO es visible para usuarios logueados).
4. Despues de haber clickado en el boton de comprar en cualquier servicio se le redireccionara al perfil donde podra ver el historial de pedidos realizados y tener un seguimiento de sus pedidos.
5. Una vez loguee un miembro con el rango "Booster" podra revisar en el apartado "Boosts" todos los pedidos y sus estados, pudiendo reclamarlos para realizarlos.
6. Al reclamar un pedido un "Booster" quedara registrado su ID de "Discord" en el apartado de "Reclamado por", una vez hecho esto dicho booster se pondra en contacto con el usuario que ha solicitado dicho pedido para realizar el pago por oro(ingame) y cuando se le realizara el pedido. (Se pondra estado reclamado "Si").
7. Tras contactar con el cliente y realizar el servicio acudira de nuevo a la pagina para registrar dicho pedido como completado. (Apartado done "Si").

**Resumen**
- El proyecto consta de varias vistas, siendo estas las siguientes: 
- Vista Home: Vista principal con banner y varios apartados con texto explicativo.
- Vista Login: Login con email y contraseña.
- Vista Register: Formulario de registro con los apartados Nombre, Contraseña, Email, Battletag, Discord y Server(Menu desplegable).
- Vista Services: Consta de 3 apartados con los servicios puestos a la venta, siendo estos, Mythic+, Raid y Monturas.
- Vista Profile: Vista sencilla con los datos personales del usuario y el historial de pedidos realizados.
- Vista Booster: Vista con todos los pedidos de todos los usuarios para poder reclamarlos y realizarlos. (Solo para rol "Booster").
- Vista Admin: Vista con todos los pedidos realizados de todos los usuarios y la opcion de eliminarlos. (Solo para el rol "Admin").

**Vista Home**
![image](https://user-images.githubusercontent.com/114490860/224817371-7569c95b-c233-44aa-abcc-7c08b3fc5eea.png)

**Vista Login**
![image](https://user-images.githubusercontent.com/114490860/224817482-d3e8cb2f-eebe-466d-adf4-f9b7b320defb.png)

**Vista Register**
![image](https://user-images.githubusercontent.com/114490860/224817552-3096decb-614d-4a14-984f-1b24a07ff0c6.png)

**Vista Services**
![image](https://user-images.githubusercontent.com/114490860/224817650-32ba1d20-c4ee-4792-a37a-743ebc6f23bb.png)

**Vista Profile**
![image](https://user-images.githubusercontent.com/114490860/224817814-dfadfbe3-6431-4ba1-aff3-ea0e399bc203.png)

**Vista Booster**
![image](https://user-images.githubusercontent.com/114490860/224817917-72cef4c9-ca63-4c98-a8fe-5c134abc2f6b.png)

**Vista Admin**
![image](https://user-images.githubusercontent.com/114490860/224820003-d9202a56-3c79-4446-bf1e-934d049c3328.png)

**Bugs**
- Al cargar el perfil por primera vez sale un error avisando que un <div> no puede ser hijo de un <tr>, no impide nada, simplemente limpiar consola y ya no volver a aparecer dicho error aunque refresques la pagina.

**Mejoras futuras**
- Mejor implementacion a la hora de actualizar el estado de los pedidos.
- Añadir formulario de contacto si asi lo desea el usuario.
- Vincular de alguna manera Discord como medio de login y registro.
- Retocar CSS para añadir vida a las vistas.

**Agradecimientos**
- Dar las gracias al equipo de <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> por los conocimientos adquiridos.

**Code by Javier Capilla Martin**
