import { screen } from '@testing-library/react';

import { skillsQueryHandler } from '@api/msw-handlers';
import { render } from '@tests/renders/render';

import { UserSkills } from './UserSkills';
import { skillsQueryMockData } from './mock-data/skillsQuery.mock-data';

jest.mock('@logic/delay');

describe('UserProfile component', () => {
  it('should display skills', async () => {
    skillsQueryHandler(skillsQueryMockData, 200, true);

    render(<UserSkills />);

    await screen.findByText(skillsQueryMockData[0].name);
  });

  it('should display an error when request failed', async () => {
    skillsQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

    render(<UserSkills />);

    await screen.findByText(/we've been unable to load your skills/i);
    expect(screen.getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
  });
});
