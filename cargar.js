

function cargar () {
  $(document).ready(() => {

        $.ajax({
            url: "personas.xml",
            type: "get",
            dataType: 'xml',
            success: function (xml) {
              $(xml).find('persona').each(function () {
                let fila = $('<tr>');
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`));
                fila.append($(`<td>${$(this).find('edad').text()}</td>`));
              $('.tabla tbody').append(fila);
              });
            console.log(xml);
            }
    });
});
};