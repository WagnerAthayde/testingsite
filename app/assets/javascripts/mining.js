/*
 * rastreamento.js
 * Envia GUID do visitante, URL acessada, Título da janela  e Data/Hora do acesso.
 * A GUID do visitante é armazenada em cookie com prazo de expiração de 1 ano.
 */

$(function() {

    var pathname = window.location.pathname;


    var title = document.title;

    Date.prototype.today = function () {
        return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    }

    Date.prototype.timeNow = function () {
        return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }

    function getDateTime() {
        var newDate = new Date();
        return newDate.today() + " [" + newDate.timeNow() + "]";
    }

    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    function setSuspectGUID(guid) {
        var date = new Date();
        var oneYearExpiration = 365 * 24 * 60 * 60 * 1000;
        date.setTime(date.getTime() + (oneYearExpiration));
        document.cookie = "suspectGUID=" + encodeURI(guid) + "; expires=" + date.toGMTString(); "; path=/";
    }

    function getSuspectGUID() {
        var suspectGUID = "suspectGUID=";
        var i, char;

        var splitted = document.cookie.split(';');
        for (i = 0; i < splitted.length; i++) {
            char = splitted[i];
            while (char.charAt(0) === ' ') {
                char = char.substring(1, char.length);
            }
            if (char.indexOf(suspectGUID) === 0) {
                return decodeURI(char.substring(suspectGUID.length, char.length));
            }
        }
        return null;
    }

    function done() {
    }

    $("#email_form").submit(function(event){
        

        var action = $(this).attr('action');
        var method = $(this).attr('method');


        email = $(this).find('#contact_email').val();
        console.log("Value of email on submit", email)

        var guid = getSuspectGUID();
        if(!guid)
        {
            guid = generateGUID();
            setSuspectGUID(guid);
        }

        var date_time = getDateTime();

        var data = {
            suspect: {
                email: email,
                guid: guid,
                url: pathname,
                title: title,
                access_at: date_time
            }
        };

        $.post(
        "http://localhost:3001/suspects",
        data
        );
      
    });

    var guid = getSuspectGUID();
    if(!guid)
    {
        guid = generateGUID();
        setSuspectGUID(guid);
    }

    var date_time = getDateTime();

    var email = null;

    var data = {
        suspect: {
            email: email,
            guid: guid,
            url: pathname,
            title: title,
            access_at: date_time
        }
    };

    $.post(
        "http://localhost:3001/suspects",
        data
    );

});