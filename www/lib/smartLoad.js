/**
 * Created by tdhuy on 11/4/14.
 */
function loadScript(url, callback){
    console.log("Load " + url);
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function bulkLoad($files) {
    for (var i = 0; i < $files.length; i++) {
        loadScript($files[i], function(){});
    }
}