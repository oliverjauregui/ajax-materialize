$(document).ready(function () {


      $('input[type="submit"]').on("click", function(event) {
        event.preventDefault();
    
        var first_name = $('#first_name').val();
    
        var last_name = $('#last_name').val();
    
        var carreer = $('input[name="carreer"]:checked').val();
    
        var payload = {
            'first_name' : first_name,
            'last_name' : last_name,
            'carreer' : carreer
        }
    
        $.ajax('/find' , {
            method: 'post',
            data: payload
        });
    
      });
    })


        
     var message = document.querySelectorAll("#message")[0];
     message.innerHTML = message.innerHTML + "<span>" + first_name + last_name + "</span>";