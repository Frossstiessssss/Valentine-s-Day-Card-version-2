$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_no = $("#no");
    var btn_yes = $("yes");
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    btn_no.click(function(){
        newButton();
    })

    btn_yes.click(function(){
        nextPage();
    })
    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
    function nextPage(){
        
    }
})