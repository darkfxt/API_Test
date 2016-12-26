Aplicación de Test para Almundo.com
Descripción:
Se trata de una aplicación sencilla que levanta los datos desde una base de datos mongo instalada localmente.
Está desarrollada para que mediante una petición GET a api/hotels devuelva todos los documentos de la colección Hotels
en formato json.
Por otro lado, para cargar los hoteles si la base está vacía, se puede enviar por POST en json los datos del
hotel a agregar con el siguiente formato:
{"name":"Hotel Barato Boston",
"stars":1,
"price":340,
"regimen":"Solo habitación",
"decorators":[{"rec":true}],
"amenities":[{"name":"pool",
              "available":true},
              {"name":"bar",
              "available":true},
              {"name":"wifi",
              "available":true}],
"imagenes":[{"description":"Foto 1", "url":"h_emp_1.jpg"},
            {"description":"Foto 2", "url":"h_emp_2.jpg"},
            {"description":"Foto 3", "url":"h_emp_3.jpg"},
            {"description":"Foto 4", "url":"h_emp_4.jpg"}]
}