import { List, ListSubheader } from '@mui/material';
import React from 'react';

import { useSkillsQuery } from '@api';

import { useSkillsCategorySelection } from './hooks/useSkillsCategorySelection';
import { ListSkeleton } from './molecules/skeletons/ListSkeleton';
import { SkillsList } from './molecules/skills-list/SkillsList';

export const UserSkills = () => {
  const { isLoading, data: skillsCategories } = useSkillsQuery();
  const { openedCategoryId, handleCategoryClick } =
    useSkillsCategorySelection();

  if (isLoading) {
    return <ListSkeleton />;
  }

  return (
    <List
      sx={{ bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Skills
        </ListSubheader>
      }
    >
      {skillsCategories?.map((category) => (
        <SkillsList
          {...category}
          key={category.id}
          openedCategoryId={openedCategoryId}
          onCategoryClicked={handleCategoryClick}
        />
      ))}
    </List>
  );
};
