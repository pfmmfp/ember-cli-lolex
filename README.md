# ember-cli-lolex-shim

[![Build Status](https://travis-ci.org/pfmmfp/ember-cli-lolex-shim.svg?branch=master)](https://travis-ci.org/pfmmfp/ember-cli-lolex-shim)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-lolex-shim.svg)](https://emberobserver.com/addons/ember-cli-lolex-shim)

An ember addon for using [lolex](https://github.com/sinonjs/lolex) fake timer in your tests.

## Installation

`ember install ember-cli-lolex-shim`

## Usage

```javascript
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { test } from 'qunit';
import lolex from 'lolex';

moduleForAcceptance('Acceptance | lolex');

test('rocket ship launches', function(assert) {

  // install the clock and make the test async
  const clock = lolex.install(),
    done = assert.async();

  // make sure to tick the clock to the next
  // scheduled event when running async code
  // like visit()
  visit('/launch-page');
  clock.next();
  assert.equal(currentURL(), '/launch-page');

  // let's assume this button starts the countdown
  // triggering launch after 10 seconds
  click('button');
  assert.ok(find('.rocket-ship').hasClass('.still-on-earth'));
  
  // fast forward to see the rocket taking off right away
  // (that's eleven seconds from the previous clock time)
  clock.tick(11000);
  assert.ok(find('.rocket-ship').hasClass('.taking-off'));
  
  // uninstall clock and finish async test
  clock.uninstall();
  done();
});
```

Similar code runs in [this acceptance test](https://github.com/pfmmfp/ember-cli-lolex-shim/blob/master/tests/acceptance/lolex-test.js) from our suite.

## Development

* `git clone <repository-url>` this repository
* `cd ember-cli-lolex-shim`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
