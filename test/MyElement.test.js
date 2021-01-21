import {MyElement} from '../src/MyElement';
import {fixture, html, expect} from '@open-wc/testing';

describe('My Element', () => {

    it('<my-element> is an instance of MyElement', async () => {
        const element = document.createElement('my-element');
        assert.instanceOf(element, MyElement);
    });

    it('has by default an empty string as title', async () => {
        const el = await fixture(html`<my-element></my-element>`);
        assert.equal(el.title, '');
    });

});