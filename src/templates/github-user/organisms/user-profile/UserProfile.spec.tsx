import { screen } from '@testing-library/react';

import { githubProfileQueryHandler } from '@api/msw-handlers';
import { render } from '@tests/renders/render';

import { UserProfile } from './UserProfile';
import { githubProfileQueryMockData } from './mock-data/githubProfileQuery.mock-data';

jest.mock('@logic/delay');

describe('UserProfile component', () => {
  it('should display a user profile', async () => {
    githubProfileQueryHandler(githubProfileQueryMockData, 200, true);

    render(<UserProfile />);

    await screen.findByText(githubProfileQueryMockData.info.name);

    await screen.findByText(githubProfileQueryMockData.info.email);
    await screen.findByText(
      githubProfileQueryMockData.extra.raw_info.followers
    );
    await screen.findByText(
      githubProfileQueryMockData.extra.raw_info.public_repos
    );
  });

  it('should display an error when request failed', async () => {
    githubProfileQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

    render(<UserProfile />);

    await screen.findByText(/we've been unable to load your profile/i);
    expect(screen.getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
  });
});
