$(document).ready(function(){
    
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_iten[category="all"]').addClass('ct_iten-active')

    $('.category_iten').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO===================
        $('.category_iten').removeClass('ct_iten-active');
        $(this).addClass('ct_iten-active');

        // OCULTANDO PRODUCTOS ====================
        $('.product-iten').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-iten').hide();
        } setTimeout(hideProduct,400);

        // MOSTRANDO PRODUCTOS ====================
        function showProduct(){
            $('.product-iten[category="'+catProduct+'"]').show();
            $('.product-iten[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });
        // MOSTRANDO TODOS LOS PRODUCTOS ====================
    $('.category_iten[category="all"]').click(function(){
        function showAll(){
            $('.product-iten').show()
            $('.product-iten').css('transform', 'scale(1)')
        } setTimeout(showAll,400)
    });
});