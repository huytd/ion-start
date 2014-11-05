/**
 * Created by tdhuy on 11/4/14.
 */
$max = $modules.length;
$current = 0;
for (var i = 0; i < $max; i++) {
    var module = $modules[i].replace('Module', '').toLowerCase();
    console.log("Module: " + module);
    loadScript("modules/" + module + "/module.js", function(){
        $current++;
        if ($current == $max) {
            loadScript("js/app.js", function () {
                angular.bootstrap(document, [$app]);
            });
        }
    });
}