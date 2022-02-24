import { Build } from '@mui/icons-material';
import { screen, render } from '@testing-library/react';

import { GlobalIndicator } from './GlobalIndicator';

describe('GlobalIndicator component', () => {
  it('should display a title and its children', () => {
    const title = 'Loading stuff';
    const children = 'children';

    render(
      <GlobalIndicator title={title} Icon={Build}>
        {children}
      </GlobalIndicator>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
