var seriales = new Array(); //array
var times = new Array(); //array

var getSerial = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/08ae8b61c0a048ef9bb14d7ae5db4a7c/clients/android-63efd7675562b163",
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "9d7cdd11-6bd8-4a37-a1cb-3ea6e99136b6,4ce43290-5d14-405a-aa5e-2980acf4aa50",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}

var getLastModified = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/08ae8b61c0a048ef9bb14d7ae5db4a7c/ap/CNH8JSW8MF/detail",
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "b4257b21-b66f-486f-aec2-08ff34320892,9b183759-737b-463c-abd2-0c1292c21bbf",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}

var getPosition = {
    "async": true,
    "crossDomain": true,
    "url": "https://aruba.easygetpaid.com/hackathon/tenants/08ae8b61c0a048ef9bb14d7ae5db4a7c/sites",
    "method": "GET",
    "headers": {
        "User-Agent": "PostmanRuntime/7.19.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "cad9d874-1b05-493b-af75-e65ee63cbb1f,dc2d3698-a5ba-4563-bdeb-1af0fa514d69",
        "Host": "aruba.easygetpaid.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }
}

$.ajax(getSerial).done(function(response) {
    // console.log(response);

    for (i = 0; i < response.length; i++) {

        seriales.push(response[i].associated_device);
        show_time(seriales[i], i);
    }

});

show_time = function(serial, i) {
    setTimeout(function() {

        getLastModified.url = "https://aruba.easygetpaid.com/hackathon/tenants/08ae8b61c0a048ef9bb14d7ae5db4a7c/ap/".concat(serial, "/detail");

        //get date
        $.ajax(getLastModified).done(function(response) {

            if ((response.last_modified > 1572109200) && (response.last_modified < 1572138000)) {
                console.log(getLastModified.url);
                console.log(response.last_modified);
                show_position(serial, i);
            }
        });
    }, i * 2000);
}

show_position = function(serial, i) {
    setTimeout(function() {
        //get date
        $.ajax(getPosition).done(function(response) {

            for (i = 0; i < response.length; i++) {

                if (response[i].serial == serial) {
                    console.log(response[i].latitude);
                    console.log(response[i].longitude);
                }
            }
        });
    }, i * 1500);
}