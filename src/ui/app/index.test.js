import React from 'react';
import {shallow} from 'enzyme';

import {App} from './';

describe('snapshots', () => {
  it('renders correclty', () => {
    const wrapper = shallow(
      <App
        toggleMenuVisibility={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
