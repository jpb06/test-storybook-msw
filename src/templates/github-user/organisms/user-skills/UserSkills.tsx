import { List, ListSubheader } from '@mui/material';
import React from 'react';

import { useSkillsQuery } from '@api';
import { TopAlert } from '@molecules';

import { useSkillsCategorySelection } from './hooks/useSkillsCategorySelection';
import { ListSkeleton } from './molecules/skeletons/ListSkeleton';
import { SkillsList } from './molecules/skills-list/SkillsList';

export const UserSkills = () => {
  const { isLoading, isError, data: skillsCategories } = useSkillsQuery();
  const { openedCategoryId, handleCategoryClick } =
    useSkillsCategorySelection();

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (isError) {
    return (
      <TopAlert
        severity="error"
        errorText="We've been unable to load your skills"
      >
        <ListSkeleton />
      </TopAlert>
    );
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
