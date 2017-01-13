import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import lolex from 'lolex';

moduleForAcceptance('Acceptance | lolex');

test('visiting /', function(assert) {
  const fakeTimer = lolex.install(),
    done = assert.async();
  visit('/');
  fakeTimer.next();
  assert.equal(currentURL(), '/');
  click('button');
  assert.equal(find('.finished').text().trim(), 'false', 'the timer has not finished');
  fakeTimer.tick(5010);
  assert.equal(find('.finished').text().trim(), 'true', 'the timer has finished');
  fakeTimer.uninstall();
  done();
});
