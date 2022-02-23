import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { Storybook } from '@templates';

const StorybookPage: NextPage = () => <Storybook />;

export const getStaticProps: GetStaticProps = (_: unknown) => ({
  props: {},
});

export default StorybookPage;
