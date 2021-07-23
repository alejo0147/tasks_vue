<?php

    include('database.php'); // Incluye la conexión a la base de datos.

    $search =$_POST['search']; // Se crea una variable que tendrá el valor que se recibe por el método 
    //POST con el valor search

    if (!empty($search)) { // Se valida si la variable search no está vacia
         $query = "SELECT * FROM task WHERE name LIKE '$search%'"; // Se crea una consulta a la BBDD donde 
    //coincida con la variable search y con % se hace que la busque no solo con el primer elemento sino con todos

         $result = mysqli_query($connection, $query); // Se almacena en una variable el resultado de la conexión 
    // y de la consulta usando la función mysqli_query. al tener el include se puede llamar la variable $connection
         if (!$result) { // Se valida si la variable $result no está vacia 
             die('query Error'. mysqli_error($connection)); // Si está vacia se envía un mensaje de error 
    // Y se concatena con la función de mysqli_error y la variable $connection para ver qué ha ido mal
         }

         $json = array(); // Se crea la variable $json para que guarde el array
         while($row = mysqli_fetch_array($result)){ // Se usa un while para recorra el array de los datos que 
    // que traiga la variable $result. la array se crea con la función mysqli_fetch_array y se guarda en la variable $row
             $json[] = array(  // Por cada recorrido del bucle while creará un arreglo, que será un objeto que 
    // guardará los datos name, descripción y id en este caso.
                 'name'=> $row['name'], // Me recibe el dato y lo guarda en la fila name
                 'description'=> $row['description'],
                 'id'=> $row['id']
             );
         }
         $jsonstring = json_encode($json); // La variable $jsonstring usa la función json_encode y toma el valor
    // de la variable $json 
         echo $jsonstring; // Devuelve el valor almacenado en la variable $jsonstring
    }

?>