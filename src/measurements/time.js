/*jshint esversion: 6 */
export default class Time {
    constructor() {
        this.type = 'Time';
        this.timeOfDay = this.dayPeriod();
        this.day = (new Date()).getDay();
        this.weekend = ((this.day === 6) || (this.day === 0));
        this.report(this);
    }
    dayPeriod() {
        let curHr = (new Date()).getHours(),
            dayPeriod = '';
        if (curHr < 3) {
            dayPeriod = 'night';
        } else if (curHr < 11) {
            dayPeriod = 'morning';
        } else if (curHr < 13) {
            dayPeriod = 'midday';
        } else if (curHr < 18) {
            dayPeriod = 'afternoon';
        } else {
            dayPeriod = 'evening';
        }
        return dayPeriod;
    }
    report(data) {
        let measurement_event = new CustomEvent('measurement_event', {
            detail: data
        });
        window.dispatchEvent(measurement_event);
    }
}