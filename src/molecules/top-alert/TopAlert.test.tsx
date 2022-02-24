import { screen, render } from '@testing-library/react';

import { TopAlert } from './TopAlert';

describe('FullpageBox component', () => {
  const error = 'Oh no!';
  const children = 'My child';

  it('should display a banner and a brand', () => {
    render(
      <TopAlert severity="error" errorText={error}>
        {children}
      </TopAlert>
    );

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
