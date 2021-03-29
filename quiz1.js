    function myFunction() {   
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Change this document";
        document.body.appendChild(btn); 
        btn.addEventListener("click",change);
     }
     
 function change() {     
    $(document).ready(function(){
        $("button").click(function(){
            $("#H1").text("CSIE@CGU");
        });
        $("button").click(function(){
            $("#P").text("怎麼那麼棒！！");
        });
    });
 }   