$(document).ready(function(){
    $("#submit").click(function(){
        var SelectedCase = $("#cases").val();
    
        switch(SelectedCase){
            case "case1":
                window.location.href = "cases/case1.html";
                break;
            case "case2":
                window.location.href = "cases/case2.html";
                break;
            case "case3":
                window.location.href = "cases/case3.html";
                break;
        }
    });
});

