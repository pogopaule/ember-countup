import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-countup'],
  tagName: 'span',

  didInsertElement() {
    this._insertAndStartCountUp();
  },

  changed: Ember.observer('startVal', 'endVal', 'decimals', 'duration', 'useEasing', 'useGrouping', 'separator', 'decimal', 'prefix', 'suffix', function() {
    this._insertAndStartCountUp();
  }),

  _insertAndStartCountUp() {
    Ember.run.next(() => {
      new CountUp(
        this.get('elementId'),
        this.get('startVal') || 0,
        this.get('endVal') || 0,
        this.get('decimals') || 0,
        this.get('duration') || 2,
        {
          useEasing: this.get('useEasing'),
          useGrouping: this.get('useGrouping'),
          separator: this.get('separator') || ',',
          decimal: this.get('decimal') || '.',
          prefix: this.get('prefix') || '',
          suffix: this.get('suffix') || ''
        }
      ).start();
    });
  }
});

