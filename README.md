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
{{count-up startVal=0 endVal=42 duration=2 decimals=0 useEasing=false useGrouping=false separator=',' decimal='.' prefix='' suffix=''}}
```

## Styling

Style a `span` with the class `.ember-countup`:

```html
<span id="ember389" class="ember-view ember-countup">42</span>
```
