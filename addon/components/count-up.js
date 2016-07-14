import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-countup'],
  tagName: 'span',

  didInsertElement() {
    this._insertAndStartCountUp();
  },

  changed: Ember.observer('startVal', 'endVal', 'decimals', 'duration', 'useEasing', 'easingFn', 'useGrouping', 'separator', 'decimal', 'prefix', 'suffix', 'formattingFn', 'onComplete', function() {
    this._insertAndStartCountUp();
  }),

  _insertAndStartCountUp() {
    Ember.run.next(() => {
      var countup = new CountUp(
        this.get('elementId'),
        this.get('startVal') || 0,
        this.get('endVal') || 0,
        this.get('decimals') || 0,
        this.get('duration') || 2,
        {
          useEasing: this.get('useEasing'),
          easingFn: this.get('easingFn'),
          useGrouping: this.get('useGrouping'),
          separator: this.get('separator') || ',',
          decimal: this.get('decimal') || '.',
          prefix: this.get('prefix') || '',
          suffix: this.get('suffix') || '',
          formattingFn: this.get('formattingFn')
        }
      );

      if (this.attrs.onComplete) {
        countup.start(this.attrs.onComplete);
      } else {
        countup.start();
      }
    });
  }
});

