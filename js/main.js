$(document).ready(function() {
    // nice-selct
    $('select').niceSelect();
    
    // Bootstrap modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
});