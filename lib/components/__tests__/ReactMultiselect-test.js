import React from 'react';
import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import ReactMultiselect from '../ReactMultiselect';

describe('ReactMultiselect', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<ReactMultiselect name='John' click={ () => {} } />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div onClick={ () => {} }>John</div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('has a click property', () => {
    let renderer = createRenderer();
    let hasClicked = false;
    let click = () => hasClicked = true;
    renderer.render(<ReactMultiselect name='John' click={ click } />);
    renderer.getRenderOutput().props.onClick();
    expect(hasClicked).toBe(true);
  });
});
