import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import lolex from 'lolex';

moduleForAcceptance('Acceptance | lolex');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    let fakeTimer = lolex.install();
    fakeTimer.uninstall();
  });
});
