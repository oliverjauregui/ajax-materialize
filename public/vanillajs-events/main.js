document.addEventListener("DOMContentLoaded", function() {
    console.log("Estoy Listo!!");

    // var forms = document.querySelectorAll("form");
    // var form = forms[0];   //primera coincidencia

    // form.addEventListener("submit", function(event) {
    //     event.preventDefault();
    // 	var first_name = document.querySelectorAll("#first_name")[0].value;
    	
    // 	var message = document.querySelectorAll("#message")[0];
    // 	message.innerHTML = message.innerHTML + "<span>" + first_name + "</span>";
    // });

    // console.log(form);

    // var elements = document.querySelectorAll("li");

    // for (var i = 0; elements.length; i = i + 1) {
    // 	var element = elements[i];

    // 	element.addEventListener("click", function(event) {
    // 		var el = event.target;
    // 		console.log(el.innerHTML);

    // 	})
    // }


    var lista = document.querySelectorAll("ul")[0];

    lista.addEventListener("click", function(event) {
    	var el = event.target;

    	// if (el.tagName.toLowerCase() === "li") {
    	// 	console.log("Click");
    	// }

    	if (el.classList.contains("item")) {
    		console.log("Click en:"  , el.innerHTML);
    	}
    });
})
