var CUSTOMER_COY = "eda39e92559043d1b7c2f583d9dab55e";
var CUSTOMER_TLP = "08ae8b61c0a048ef9bb14d7ae5db4a7c";
var CUSTOMER_AOB = "b16ec992e6c946a1846ed0f4b5dbbd77";
var CUSTOMER_CUH = "04efe124071b41dc89fc3114be7c0220";

var PERSONA_1 = "c0:9a:d0:9f:7e:2c";
var PERSONA_2 = "a8:db:03:ff:89:63";
var PERSONA_3 = "a8:db:03:01:60:73";
var PERSONA_4 = "d8:1c:79:67:83:3c";
var PERSONA_5 = "a8:c9:ed:2b:17:2f";
var PERSONA_6 = "30:07:4d:84:02:a0";

var getAdrres = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/".concat(CUSTOMER_COY, "/clients"),
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "e2fbf4f9-77f3-4eec-be8c-fb8f8fbc858b,49c16b43-58e4-4851-9a21-1abbc48c6091",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}

$.ajax(getAdrres).done(function(response) {
    console.log(response);

    //De las addres checamos la primer para obtener name
    for (i = 0; i < response.length; i++) {

        if (response[i].macaddr == PERSONA_6) {
            console.log(response[i].macaddr);
            console.log(response[i].name);
        }
    }

});