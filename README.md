# Ember-countup

A [countUp.js](https://inorganik.github.io/countUp.js/) integration for Ember

## Installation

`ember install ember-countup`

## Usage

Basic example
```handlebars
{{count-up startVal=0 endVal=42 duration=2}}
```

Full example, showing default values
```handlebars
{{count-up
    startVal=0
    endVal=42
    duration=2
    decimals=0
    useEasing=false
    useGrouping=false
    separator=','
    decimal='.'
    prefix=''
    suffix=''}}
```

Example using [formattingFn](https://github.com/inorganik/countUp.js/blob/1.7.1/countUp.js#L52)
```handlebars
{{count-up
    startVal=0
    endVal=42
    duration=2
    formattingFn=customFormatting}}
```

```javascript
customFormatting: function(nStr) {
  // I get called on every count up step
}
```

Example using [easingFn](https://github.com/inorganik/countUp.js#custom-easing)
```handlebars
{{count-up
    startVal=0
    endVal=42
    duration=2
    easingFn=customEasing}}
```

```javascript
customEasing: function(t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (1.77635683940025e-15 * tc * ts + 0.999999999999998 * tc + -3 * ts + 3 * t);
}
```

Check out the [dummy app](https://github.com/pogopaule/ember-countup/tree/master/tests/dummy/app) for a working example.

## Styling

Style a `span` with the class `.ember-countup`:

```html
<span id="ember389" class="ember-view ember-countup">42</span>
```
