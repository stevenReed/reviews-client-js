import {assert} from 'chai';
import Review from '../../src/Review';
const serviceURL = 'http://service-reviews.dev/api/v1';
describe('Reviews API Functional', function () {
  beforeEach(function () {
    this.api = new Review(serviceURL, 'en');
    this.token = 'qrewqrtqtraessrtgewrtec';
  });

  it('Create SDK Object without locale', function() {
    const testApi = new Review(this.serviceURL);
    assert.deepEqual(testApi.locale);
  });

  it('_isValidId', function () {
    assert.isTrue(this.api._isValidId(1));
    assert.isFalse(this.api._isValidId(0));
    assert.isFalse(this.api._isValidId(null));
    assert.isFalse(this.api._isValidId());
  });
});
