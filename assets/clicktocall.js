var miclicktocall;
var miclicktocallFn12716 = function() {
    miclicktocall = new ZadarmaCallmeWidget("miclicktocall");
    //myZadarmaCallmeWidget12716 = new ZadarmaCallmeWidget("miclicktocall");
    miclicktocall.create({
"widgetId": "kAnM93Lt7LuLxrus67pPN2aDyFgLxufDz3za7Bhp5r6Y4Y5kfkjsf9sN3dkTFdvj6yeub5TAL8r9T6Amg6znJNu9k2nyb89d7d3917408ba13d5764ae8176225584c0", "sipId":"445632", "domElement":"miclicktocall" }, { "shape":"square", "language":"en", "width":"0", "dtmf":false, "font": "'Trebuchet MS','Helvetica CY',sans-serif", "color_call": "rgb(255, 255, 255)", "color_bg_call": "rgb(126, 211, 33)", "color_border_call": "rgb(191, 233, 144)", "color_connection": "rgb(255, 255, 255)", "color_bg_connection": "rgb(33, 211, 166)", "color_border_connection": "rgb(144, 233, 211)", "color_calling": "rgb(255, 255, 255)", "color_border_calling": "rgb(255, 218, 128)", "color_bg_calling": "rgb(255, 181, 0)", "color_ended": "rgb(255, 255, 255)", "color_bg_ended": "rgb(164,164,164)", "color_border_ended": "rgb(210, 210, 210)"
    });
};

if (window.addEventListener) {
    window.addEventListener('load', miclicktocallFn12716, false);
    //window.addEventListener('load', miclicktocall, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', miclicktocallFn12716);
    //window.attachEvent('onload', miclicktocall);
}

(function() {
    var script = document.createElement('script');
    script.src = 'https://my.zadarma.com/callmewidget/v2.0.8/loader.js';
    document.getElementById('zadarmaScripts').appendChild(script);
}
());