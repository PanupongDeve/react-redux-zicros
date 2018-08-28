/**
* Theme: Zircos Admin Template
* Author: Coderthemes
* Chat application 
*/

!function($) {
    "use strict";

    var ChatApp = function() {
        this.$body = $("body"),
        this.$chatInput = $('.chat-input'),
        this.$chatList = $('.conversation-list'),
        this.$scrollbar = $('.slimScrollBar');
        this.$chatSendBtn = $('.chat-send .btn'),
        this.$renderMessage = function() {
            $('<li class="clearfix"><div class="chat-avatar"><img src="assets/images/users/avatar-1.jpg" alt="male"><i>' + '15:07' + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>John Deo</i><p>' + 'I am Hacked' + '</p></div></div></li>').appendTo('.conversation-list');
            $('<li class="clearfix"><div class="chat-avatar"><img src="assets/images/users/avatar-1.jpg" alt="male"><i>' + '15:07' + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>John Deo</i><p>' + 'I am Hacked' + '</p></div></div></li>').appendTo('.conversation-list');
        }
    };


    //saves chat entry - You should send ajax call to server in order to save chat enrty
    ChatApp.prototype.save = function() {
        var chatText = this.$chatInput.val();
        var chatTime = moment().format("h:mm");
        if (chatText == "") {
            sweetAlert("Oops...", "You forgot to enter your chat message", "error");
            this.$chatInput.focus();
        } else {
            $('<li class="clearfix"><div class="chat-avatar"><img src="assets/images/users/avatar-1.jpg" alt="male"><i>' + chatTime + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>John Deo</i><p>' + chatText + '</p></div></div></li>').appendTo('.conversation-list');
            this.$chatInput.val('');
            this.$chatInput.focus();
            this.$chatList.scrollTo('100%', '100%', {
                easing: 'swing'
            });
        }
    },
    ChatApp.prototype.init = function () {
        var $this = this;
        this.$renderMessage();
        this.$chatInput.val('');
        this.$chatInput.focus();
        this.$chatList.animate({
            scrollTop: '200%'
        }, 800)

        //binding keypress event on chat input box - on enter we are adding the chat into chat list - 
        $this.$chatInput.keypress( async function (ev) {
            var p = ev.which;
            if (p == 13) {
                await $this.save();
                return false;
            }
        });


        //binding send button click
        $this.$chatSendBtn.click(function (ev) {
           $this.save();
           return false;
        });
    },
    //init ChatApp
    $.ChatApp = new ChatApp, $.ChatApp.Constructor = ChatApp
    
}(window.jQuery),

//initializing main application module
function($) {
    "use strict";
    $.ChatApp.init();
}(window.jQuery);