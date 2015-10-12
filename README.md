# moorea-moment

[![Dependency Status](https://david-dm.org/pdesterlich/moorea-moment.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-moment) [![devDependency Status](https://david-dm.org/pdesterlich/moorea-moment/dev-status.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-moment#info=devDependencies)

additional function for moment objects

## function list

`minutesFromMidnight`: returns the number of minutes since midnight

*example*

```javascript
var time = moment().hours(8).minutes(0).seconds(0).milliseconds(0);
console.log(time.minutesFromMidnight());

> 480
```
`secondsFromMidnight`: returns the number of seconds since midnight

*example*

```javascript
var time = moment().hours(8).minutes(0).seconds(0).milliseconds(0);
console.log(time.minutesFromMidnight());

> 28800
```
