import React from 'react';
import { mount } from 'enzyme';
import NewRestuarantForm from '../../src/components/NewRestuarantForm';

describe('NewRestuarantForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestuarantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestuarantName"]')
        .simulate('change', { target: { value: 'Sushi! Place' } });

      wrapper
        .find('button[data-test="saveNewResturantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('Sushi! Place');
    });
  });
});
