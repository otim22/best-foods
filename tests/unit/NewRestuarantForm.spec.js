import React from 'react';
import { mount } from 'enzyme';
import NewRestuarantForm from '../../src/components/NewRestuarantForm';

describe('NewRestuarantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestuarantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestuarantName"]')
        .simulate('change', { target: { value: 'Sushi! Place' } });

      wrapper
        .find('button[data-test="saveNewResturantButton"]')
        .simulate('click');
    });
    
    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi! Place');
    });

    it('clear the text field', () => {
      expect(wrapper
        .find('input[data-test="newRestuarantName"]')
        .props().value,
      ).toEqual('');
    });
  });
});
