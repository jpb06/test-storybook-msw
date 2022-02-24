import { screen } from '@testing-library/react';

import { skillsQueryHandler } from '@api/msw-handlers';
import { render } from '@tests/renders/render';

import { UserSkills } from './UserSkills';
import { skillsQueryMockData } from './mock-data/skillsQuery.mock-data';

jest.mock('@logic/delay');

describe('UserProfile component', () => {
  describe('nominal case', () => {
    it('should match snapshot', async () => {
      skillsQueryHandler(skillsQueryMockData, 200, true);

      const { baseElement } = render(<UserSkills />);

      await screen.findByRole('navigation');

      expect(baseElement).toMatchSnapshot();
    });

    it('should display skills', async () => {
      skillsQueryHandler(skillsQueryMockData, 200, true);

      render(<UserSkills />);

      await screen.findByText(skillsQueryMockData[0].name);
      await screen.findByText(skillsQueryMockData[1].name);
      await screen.findByText(skillsQueryMockData[2].name);
    });
  });

  describe('error case', () => {
    it('should match snapshot', async () => {
      skillsQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

      const { baseElement } = render(<UserSkills />);

      await screen.findByRole('alert');

      expect(baseElement).toMatchSnapshot();
    });

    it('should display an error when request failed', async () => {
      skillsQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

      render(<UserSkills />);

      await screen.findByText(/we've been unable to load your skills/i);
      expect(screen.getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    });
  });
});
