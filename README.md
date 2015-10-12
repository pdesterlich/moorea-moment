# moorea-moment

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
