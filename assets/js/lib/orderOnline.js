if (typeof ooLogError != 'function') {
    var ooLogError = function (error) {
        var req = new XMLHttpRequest();
        var payload = JSON.stringify({ url: document.location.href, line: error.line, stack: error.stack });
        var params = 'message=' + encodeURIComponent(error.name) + '&payload=' + encodeURIComponent(payload) + '&type=embed&level=error';
        req.open('POST', 'https://api.orderonline.id/log', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(params);
    };
}
try {
    if (typeof ooEmbedScript != 'function') {
        var ooEmbedScript = function () {
            !function(w, d, e, v, id, t, s) {
            if (d.getElementById(id)) return;
            t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
            s = d.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://cdn.orderonline.id/js/embed-slim.min.js?v=6.1.15', 'oo-embed-js');
        };
    }
    if (typeof orderOnlineInit != 'function') {
        var orderOnlineInit = function (w, n) {
            if (w.ooe) return;
            n = w.ooe = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
            if (!w._ooe) w._ooe = n;
            n.push = n;n.loaded = !0;n.version = '6.1.15';n.queue = [];
        };
    }
    orderOnlineInit(window);
    ooe('setup', 'redirect', 'https://pendar.orderonline.id');
    ooe('init', 'pendar', 'Bali-paket-1-kotak', null, 'oo-embed-form-Bali-paket-1-kotak-3321', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Bali-paket-2-kotak', null, 'oo-embed-form-Bali-paket-2-kotak-8242', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Bali-paket-4-kotak', null, 'oo-embed-form-Bali-paket-4-kotak-6112', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});        
    ooe('init', 'pendar', 'bandung-paket-1-kotak', null, 'oo-embed-form-bandung-paket-1-kotak-3623', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'bandung-paket-2-kotak', null, 'oo-embed-form-bandung-paket-2-kotak-1459', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'bandung-paket-4-kotak', null, 'oo-embed-form-bandung-paket-4-kotak-2417', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Jogja-paket-1-kotak', null, 'oo-embed-form-Jogja-paket-1-kotak-250', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Jogja-paket-2-kotak', null, 'oo-embed-form-Jogja-paket-2-kotak-4235', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Jogja-paket-4-kotak', null, 'oo-embed-form-Jogja-paket-4-kotak-7006', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    ooe('init', 'pendar', 'Bali-paket-1-kotak-2', null, 'oo-embed-form-Bali-paket-1-kotak-2-2328', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":true,"triggerGtm":false});
    ooe('init', 'pendar', 'bandung-paket-1-kotak-2', '6002f613a9bf8072e87eca24', 'oo-embed-form-bandung-paket-1-kotak-2-8215', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":true,"triggerGtm":false});
    ooe('init', 'pendar', 'Jogja-paket-1-kotak-2', '6002f6368dcbdb66522a94e5', 'oo-embed-form-Jogja-paket-1-kotak-2-4335', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":true,"triggerGtm":false});    
    if (!window.jQuery) {
        !function(w, d, e, v, id, t, s) {
        if (d.getElementById(id)) return;
        t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
        t.addEventListener('load', ooEmbedScript);
        s = d.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://cdn.orderonline.id/js/vendor/jquery.min.js', 'oo-embed-jquery');
    } else {
        ooEmbedScript();
    }

} catch (e) {
    ooLogError(e);
    throw e;
}