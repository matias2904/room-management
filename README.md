# 1- Clonar el o escargar el repositorio
git clone https://github.com/matias2904/room-management.git
cd nombre-del-repositorio
# 2- Instalar dependencias:
npm install
# 3- Ejecutar la aplicación: 
ng serve

En este proyecto, se decidió estructurar la aplicación utilizando componentes standalone para fomentar la modularidad y la simplicidad en el desarrollo. El DashboardComponent actúa como el contenedor principal que gestiona las plantas. Cada planta se representa mediante un FloorComponent, el cual interactúa con el servicio de datos para obtener un arreglo de salas, permitiendo la gestión de múltiples plantas de manera independiente si se llegara a necesitar en el futuro.

Las salas dentro de cada planta se gestionan a través de un RoomComponent, diseñado para facilitar la edición y eliminación de salas de manera eficiente. Esta estructura fue elegida para maximizar la reutilización del código, facilitar la escalabilidad del proyecto y asegurar una separación clara de responsabilidades entre los diferentes componentes.

Además, se hizo un esfuerzo por mantener los componentes lo más nativos posible, asegurando un desarrollo ágil y un código claro. Se trabajó en la implementación de un diseño responsive para asegurar que la aplicación funcione correctamente en dispositivos de diferentes tamaños. Finalmente, se incorporó un filtro para mejorar la usabilidad y permitir una gestión más sencilla de las salas.
