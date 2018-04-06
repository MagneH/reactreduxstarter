import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'magne-hustveit', firstName: 'Magne', lastName: 'Hustveit'},
        {id: 'erik-simonsen', firstName: 'Erik', lastName: 'Simonsen'},
        {id: 'j-o-kolnes', firstName: 'Jon Oddvar', lastName: 'Kolnes'}
      ];

      const expected = [
        {value: 'magne-hustveit', text: 'Magne Hustveit'},
        {value: 'erik-simonsen', text: 'Erik Simonsen'},
        {value: 'j-o-kolnes', text: 'Jon Oddvar Kolnes'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
