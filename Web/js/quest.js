var seriales = new Array(); //array
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
  
  $.ajax(getSerial).done(function (response) {
   // console.log(response);

    for( i=0; i<response.length; i++){

        seriales.push(response[i].associated_device);
        display_marker(seriales[i], i );
    }

  });

  display_marker = function( serial, i ) {
    setTimeout(
        function() {

            getLastModified.url = "https://aruba.easygetpaid.com/hackathon/tenants/08ae8b61c0a048ef9bb14d7ae5db4a7c/ap/".concat(serial,"/detail");
            
            //get date
            $.ajax(getLastModified).done(function (response) {

                if( (response.last_modified > 1571109200)  && (response.last_modified< 1572138000) ){
                    console.log(getLastModified.url);
                    console.log(response.last_modified);
                }
              
              });

        }, i * 1500);

}


  

