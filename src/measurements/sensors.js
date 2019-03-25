/*jshint esversion: 6 */
export default class Sensors {
    constructor() {
        this.type = "Sensors";
        this.amientLight = ('ondevicelight' in window);
        this.orientation = ('deviceorientation' in window);
        this.motion = ('devicemotion' in window);
        this.fullScreen = this.fullScreen();
        this.geolocation = (navigator.geolocation) ? true : false;
        this.report(this);
    }
    /**
     * Returns boolean depending on support or not
     */
    fullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        return requestFullScreen && {}.toString.call(requestFullScreen) === '[object Function]';
    }
    /**
     * Dispatch event for Measure to catch.
     * @param {JSON data to go with the event and printed out in gui} data 
     */
    report(data) {
        let measurement_event = new CustomEvent('measurement_event', {
            detail: data
        });
        window.dispatchEvent(measurement_event);
    }
}