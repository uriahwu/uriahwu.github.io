(function() {
  var agent = window.navigator.userAgent,
      device = new MobileDetect(agent);

  var base_url = "uriahwu.github.io";
  
  item_name = document.getElementById('');

  android_link = "intent://uriahwu.github.io/coffee_machine.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;";
  ios_link = "https://" + base_url + "/coffee_machine.usdz";
  
  function createLink(os) {
    var link = document.createElement("a");
    
    if( os == "AndroidOS" ) {
      link.setAttribute("href", android_link);
    } else if (os == "iOS" ) {
      link.setAttribute("href", ios_link);
    }
    var target = document.getElementById("web_ar"),
        image = target.children[0];

    image.remove();
    link.appendChild(image);
    target.appendChild(link);
  }

  createLink(device.os());
})()
