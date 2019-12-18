var agent = window.navigator.userAgent,
    device = new MobileDetect(agent);

console.log(agent);
console.log(device.os());
document.write(device.os());

if( device.os() == "AndroidOS" ) {
    window.location.replace("intent://bamboowand.github.io/scene.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;");
} else {
    window.location.href = "https://bamboowand.github.io/coffee_machine.usdz";
}

