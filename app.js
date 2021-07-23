$(function () {
    console.log('jQery is working'); // Nos da este mensaje para decir que el jQuery está funcionando

    $('#task-result').hide(); // Se selecciona el elemento #task-result del html y se oculta para que no salga al no ser llamado

    $('#search').keyup(function () { // Con #search llama el elemento (id del input) y con keyup toma el evento, en este caso de teclear.

        if ($('#search').val()) { // Se hace esta validación para que no nos dé error en consola al estar vacio

            let search = $('#search').val(); // Von let se dice que la variable search, se toma el valor del input id (#search).
            // console.log(search);  // Se ve por consola el valor de la variable search.
            $.ajax({ // Se hace el llamado al método AJAX
                url: 'task-search.php', // Se hace la petición al servidor, en este caso a la dirección tasks-search.php
                type: 'POST', // El tipo de petición que se hará. en este caso será una de tipo POST por lo que se enviará
                data: {
                    search
                }, // La propiedad data de AJAX nos permite que le podamos enviar un string, un dato o en este caso el valor de la variable search
                // Le envía un objeto una propiedad llamada search que tendrá el valor de search {search: search} que puede quedar {search}
                success: function (response) {
                    // console.log(response);
                    let tasks = JSON.parse(response); // Se crea una variable tasks para tomar los datos de JSON 
                    let template = '';
                    // Te devuelve un arreglo convertido en un objeto por lo que se convirtío en un JSON
                    // console.log(tasks);
                    tasks.forEach(task => { // Se recorre el objeto por aparte
                        template += `<li>
                    ${task.name}
                    </li>`
                        // console.log(task);
                    });
                    $('#container').html(template); // Selecciona el elemento #container y concatena com html(template)

                    $('#task-result').show(); // Se selecciona el elemento #task-result del html y se usa el método show para traerlo al ser usado
                }
            })
        }
    })
});

// console.log('Hello World');