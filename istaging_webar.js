(function() {
  var agent = window.navigator.userAgent,
      device = new MobileDetect(agent);

  console.log(agent);
  console.log(device.os());
  console.log(device.userAgent());
  
  var base_url = "uriahwu.github.io";
  
  item_name = document.getElementById('');

  android_link = "intent://" + base_url + "/coffee_machine.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;";
  ios_link = "https://" + base_url + "/coffee_machine.usdz";
  
  function createLink(os) {
    var link = document.createElement("a");
    link.innerHTML = "CLICK ME";
    if( os == "AndroidOS" ) {
      link.setAttribute("href", android_link);
    } else if (os == "iOS" ) {
      link.setAttribute("href", ios_link);
    }
    var target = document.getElementById("web_ar");
    target.appendChild(link);
  }

  createLink(device.os());
})()
