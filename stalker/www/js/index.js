/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

var isTestingMobile = true;





// costum js
$('.stars').on('click', function () { console.log("clicked"); customPage("stars", $(this).attr("data-info") ); });
$('.spots').on('click', function () { console.log("clicked"); customPage("spots", $(this).attr("data-info") ); });
$('#accesscamera').on('click',function () { startCamera(); });






function customPage(page, data) {  


    switch(page){

        case "spots": 
            $("#spotInfo h1").text(data);

            $("#spotInfo ul").children().remove();
            $("#spotInfo ul").append("<li><a href=''>Tom cruise</a></li>");
            $('#spotInfo ul').listview('refresh');
            break;

        case "stars": 

            $("#starInfo h1").text(data);

            $("#starInfo ul").children().remove();
            $("#starInfo ul").append("<li><a href=''>Östra Fäladen</a></li>");
            $('#starInfo ul').listview('refresh');
            break;
    }
}



function createStars(data) {  

    $('#listTwo').append('<li><a class="stars" href="#stars" data-info="Tom Cruise"><p>Tom Cruise</p></a></li>');
    $('#listTwo').append('<li><a class="stars" href="#stars" data-info="Tom Cruise"><p>Abbey Clancy</p></a></li>');
    $('#listTwo').append('<li><a class="stars" href="#stars" data-info="Tom Cruise"><p>Rita Ora</p></a></li>');
    $('#listTwo').append('<li><a class="stars" href="#stars" data-info="Tom Cruise"><p>Justin Bieber</p></a></li>');
    $('#listTwo').append('<li><a class="stars" href="#stars" data-info="Tom Cruise"><p>Rob Kardashian</p></a></li>');
    
}
function createSpots(data, index, distants, count) {  
    
    $('#listOne').append('<li><a class="spots" href="#spots" data-info="'+data+'" data-index="'+index+'"><div><p>'+data+'</p><p>'+distants+'m away</p> </div><div class="counter"><p >'+count+'</p></div></a></li>');
    
}

var data = [];

function createList() {
 
    

    $('#listTwo li').remove();  
    $('#listOne li').remove();  

    $.ajax({url: "js/json.json", success: function(result){
        var resultat;
        if( isTestingMobile ) {
            resultat = JSON.parse(result);
        } else {
            resultat = result;
        }
        
        for (var key in resultat.street) {
            if (resultat.street.hasOwnProperty(key)) {
                

                data.push({street: key, actors: resultat.street[key]});
                var index = data.length-1;
                
                createSpots(key, index, 200, Object.keys(data[data.length-1].actors.stars).length);
                
                
                
            }
        }
        
    }, complete: function () { $('#listOne').listview('refresh'); }});
    
    
}
createList();
createStars();




function startCamera() {  
    var options = {
        quality:25,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        targetWidth: 400,
        targetHeight:400
    };

    navigator.camera.getPicture(camSuccess, camError, options);
}
function camSuccess(imgData) {  
    $("#img_camPH").attr("src",imgData);
}
function camError(error) {  
    alert(error);
}
function retakePicture() {  
    startCamera();
}


