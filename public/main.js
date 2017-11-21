$(document).ready(function () {
    
      $('input[type="submit"]').on("click", function(event) {
        event.preventDefault();
    
        var first_name = $('#first_name').val();
    
        var last_name = $('#last_name').val();
    
        var sabe_programar = $('input[name="sabe_programar"]:checked').val();
    
        var languages = $('input[name="languages"]:checked'); 

        var comment = $('#textarea1').val();
    
        var payload = {
            'first_name' : first_name,
            'last_name' : last_name,
            'sabe_programar' : sabe_programar,
            'comment' : comment,
            'languages' : languages.map(function(i, element){
                return $(element).val();
            }).get(),
            'comment' : comment
        }
    
        $.ajax('/find' , {
            method: 'post',
            data: payload
        });
    
        $.ajax('/find' , {
            method: 'get',
            data: payload
        });
    
      });
    })
    