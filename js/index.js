$(document).ready(() => {
    $.get('../xml/ferreteria.xml', (xml) => {
        $(xml).find('Tipo').each((i, tipo)=> {
            let contenedorTipo =
                "<h2>"+$(tipo).attr('nombre')+"</h2> <div class=\"tipo\">";
            $(tipo).find('Producto').each((i2, producto) => {
                let tarjeta =
                    "<div class=\"card\" style=\"width: 18rem;\">"+
                    "<div class=\"card-body\">\n" +
                    "<h5 class=\"card-title\">"+$(producto).find('nombre_prducto').text()+"</h5>\n" +
                    "<h6>"+$(producto).find('marca_producto').text()+"</h6>"+
                    "<p class=\"card-text\">"+$(producto).find('clave').text()+"</p>\n" +
                    "<p class=\"card-text\">"+$(producto).find('codigo').text()+"</p>\n" +
                    "<a href=\"#\" class=\"btn btn-primary\">Comprar ("+$(producto).find('precio').text()+")</a>\n" +
                    "</div></div>";
                contenedorTipo += tarjeta;
                console.log("prod");
            });
            contenedorTipo += "</div>";

            $('#contenedor').append(contenedorTipo);
            console.log("xml")
        });
    });
});
