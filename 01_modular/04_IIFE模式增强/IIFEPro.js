(function(window,$){
    let msg = "modular4"
    function foo(){
        console.log("foo()",msg)
    }
    window.modular4 = foo
    $("body").css("background","red")
})(window,JQuary)