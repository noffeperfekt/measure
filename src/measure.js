/*jshint esversion: 6 */
import Bandwidth from "./measurements/bandwidth";
import Sensors from "./measurements/sensors";
import Time from "./measurements/time";
import Format from "./helpers/format";

/**
 * 
 * @param {URL} assetURI Image for measuing download speed
 * @param {HTMLElement} outputTo Element to output result to
 */
((assetURI = "http://"+window.location.host+"/images/internet.jpg", outputTo=false) => {
    let format = new Format();
    document.addEventListener('DOMContentLoaded', function () {
        this.bandwidth = new Bandwidth(assetURI);
        this.sensors = new Sensors();
        this.time = new Time();
    }, false);
    /**
     * handle measusrement-events and output findings
     */
    window.addEventListener('measurement_event', (e) => {
        if(outputTo){ //AS HTML
            outputTo.appendChild(document.createElement('h3')).innerHTML = e.detail.type;
            outputTo.appendChild(document.createElement('pre')).innerHTML = format.syntaxHighlight(e.detail);
        }
        if(window.Measure){ //GLOBAL VARIABLE
            window.Measure.push(e.detail);
        }
        else{  //GLOBAL VARIABLE
            window.Measure = [];
            window.Measure.push(e.detail);
        }
    }, false);
})(undefined, document.querySelector('code'));
// Measure(undefined, document.querySelector('code'));
// Measure(undefined, false);