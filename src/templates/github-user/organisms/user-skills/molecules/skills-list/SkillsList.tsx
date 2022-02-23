import { ExpandLess, ExpandMore } from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

import { SkillCategoryDto } from 'src/api/main-backend/specs/api-types';

import { Skill } from './Skill';

interface SkillsListProps extends SkillCategoryDto {
  onCategoryClicked: (id: number) => () => void;
  openedCategoryId?: number;
}

export const SkillsList: React.FC<SkillsListProps> = ({
  onCategoryClicked,
  openedCategoryId,
  id,
  name,
  skills,
}) => {
  const isOpen = openedCategoryId === id;

  return (
    <>
      <ListItemButton onClick={onCategoryClicked(id)}>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {skills.map((skill) => (
            <Skill key={skill.id} {...skill} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
