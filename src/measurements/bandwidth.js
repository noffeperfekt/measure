/*jshint esversion: 6 */
export default class Bandwidth {
    constructor(URI) {
        this.type = "Bandwidth (download)";
        this.uri = URI + "?cacheBuster=" + Math.random();
        this.Mbps = 0;
        this.kbps = 0;
        this.bps = 0;
        this.bits = this.filesize(this, this.startTest);
        this.Bytes = 0;
        this.kB = 0;
        this.MB = 0;
        this.start = (new Date()).getTime();
        this.end = 0;
        this.duration = 0;
    }
    filesize(bndwth, callback) {
        let client = new XMLHttpRequest();
        //get header in a async mannor
        client.open("HEAD", bndwth.uri, true);
        client.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                try {
                    bndwth.Bytes = parseInt(client.getResponseHeader("Content-Length"), 10);
                    bndwth.bits = bndwth.Bytes * 8; //one byte = 8 bits *duh*
                    callback(bndwth);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        client.send();
    }
    startTest(bndwth) {
        let asset = new Image();
        asset.onload = bndwth.stopTest(bndwth);
        bndwth.start = (new Date()).getTime();
        asset.src = bndwth.uri;
    }
    stopTest(bndwth) {
        bndwth.end = (new Date()).getTime();
        bndwth.duration = (bndwth.end - bndwth.start) / 1000;
        bndwth.kB = (bndwth.Bytes / 1000).toFixed(2);
        bndwth.MB = (bndwth.Bytes / 1000000).toFixed(2);
        bndwth.bps = (bndwth.bits / bndwth.duration).toFixed(2);
        bndwth.kbps = (bndwth.bps / 1024).toFixed(2);
        bndwth.Mbps = (bndwth.kbps / 1024).toFixed(2);
        let measurement_event = new CustomEvent('measurement_event', {
            detail: bndwth
        });
        window.dispatchEvent(measurement_event);
    }
}