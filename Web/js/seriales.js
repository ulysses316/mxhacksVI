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

//CustomerId y "cliente"
var getSeriales = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/".concat(CUSTOMER_COY, "/clients/android-63efd7675562b163"),
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "77a16de0-de77-4ae1-ab02-d2cb910a6502,fbe1b960-d106-4b53-bf62-ec87cc0fcd21",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}

//CustomId y Serial
var getLastModified = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/04efe124071b41dc89fc3114be7c0220/ap/CNG7JSW1YM/detail",
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "335a6c35-50fb-4621-bd70-4711d9a02f1f,da58e192-e82c-4e93-83e4-2156ebb01bd1",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}


$.ajax(getSeriales).done(function(response) {
    console.log(response);
    //De las addres checamos la primer para obtener name
    for (i = 0; i < response.length; i++) {

        console.log(response[i].associated_device);
        show_time(response[i].associated_device);
    }
});

show_time = function(serial) {
    setTimeout(function() {

        getLastModified.url = "https://aruba.easygetpaid.com/hackathon/tenants/04efe124071b41dc89fc3114be7c0220/ap/".concat(serial, "/detail"),

            //get date
            $.ajax(getLastModified).done(function(response) {

                if ((response.last_modified >= 1572109200) && (response.last_modified <= 1572138000)) {
                    console.log(getLastModified.url);
                    console.log(response.last_modified);
                }
            });
    }, i * 2000);
}