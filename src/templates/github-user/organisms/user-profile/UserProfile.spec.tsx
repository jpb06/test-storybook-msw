import { screen } from '@testing-library/react';

import { githubProfileQueryHandler } from '@api/msw-handlers';
import { render } from '@tests/renders/render';

import { UserProfile } from './UserProfile';
import { githubProfileQueryMockData } from './mock-data/githubProfileQuery.mock-data';

jest.mock('@logic/delay');

describe('UserProfile component', () => {
  describe('nominal case', () => {
    it('should match snapshot', async () => {
      githubProfileQueryHandler(githubProfileQueryMockData, 200, true);

      const { baseElement } = render(<UserProfile />);

      await screen.findByRole('img', { name: /yolo mcbro/i });

      expect(baseElement).toMatchSnapshot();
    });

    it('should display skills', async () => {
      githubProfileQueryHandler(githubProfileQueryMockData, 200, true);

      render(<UserProfile />);

      await screen.findByText(githubProfileQueryMockData.info.name);
      screen.getByText(githubProfileQueryMockData.info.email);
      screen.getByText(githubProfileQueryMockData.extra.raw_info.followers);
      screen.getByText(githubProfileQueryMockData.extra.raw_info.public_repos);
    });
  });

  describe('error case', () => {
    it('should match snapshot', async () => {
      githubProfileQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

      const { baseElement } = render(<UserProfile />);

      await screen.findByRole('alert');

      expect(baseElement).toMatchSnapshot();
    });

    it('should display an error when request failed', async () => {
      githubProfileQueryHandler({ code: 500, message: 'Oh no!' }, 500, true);

      render(<UserProfile />);

      await screen.findByText(/we've been unable to load your profile/i);
      expect(screen.getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    });
  });
});
