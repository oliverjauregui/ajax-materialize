$(document).ready(function () {
    
      $('input[type="submit"]').on("click", function(event) {
        event.preventDefault();
    
        var first_name = $('#first_name').val();
    
        var last_name = $('#last_name').val();
    
        var gender = $('input[name="gender"]:checked').val();
    
        var interest = $('input[name="interest"]:checked'); 

        var comment = $('#textarea1').val();
    
        var payload = {
            'first_name' : first_name,
            'last_name' : last_name,
            'gender' : gender,
            'comment' : comment,
            'interest' : interest.map(function(i, element){
                return $(element).val();
            }).get()
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
    