import Ember from 'ember';

export default Ember.Controller.extend({
  finished: false,
  actions: {
    countDown() {
      Ember.run.later(() => {
        this.set('finished', true);
      }, 5000);
    }
  }
});
