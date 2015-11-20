'use strict';

var moment = require('moment');

(function (moment) {

  /**
   * function minutesFromMidnight
   * returns the number of minutes since midnight
   *
   * @return Number
   **/
  moment.fn.minutesFromMidnight = function () {
    var
      hours = this.hours(),
      minutes = this.minutes();
    return (60 * hours) + minutes;
  };

  /**
   * function secondsFromMidnight
   * returns the number of seconds since midnight
   *
   * @return Number
   **/
  moment.fn.secondsFromMidnight = function () {
    var
      hours = this.hours(),
      minutes = this.minutes(),
      seconds = this.seconds();
    return (60 * 60 * hours) + (60 * minutes) + seconds;
  };

  /**
   * returns the italian day name of the date
   * @return {string} day name of then date
   */
  moment.fn.italianDayOfWeek = function () {
    var result = '';
    switch (this.isoWeekday()) {
      case 1: result = 'lunedi'; break;
      case 2: result = 'martedi'; break;
      case 3: result = 'mercoledi'; break;
      case 4: result = 'giovedi'; break;
      case 5: result = 'venerdi'; break;
      case 6: result = 'sabato'; break;
      case 7: result = 'domenica'; break;
      default: result = 'unknown';
    }

    return result;
  };

})(moment);
