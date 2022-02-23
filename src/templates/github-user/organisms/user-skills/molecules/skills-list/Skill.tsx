import AddReactionIcon from '@mui/icons-material/AddReaction';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { SkillDto } from 'src/api/main-backend/specs/api-types';

interface SkillProps extends SkillDto {}

export const Skill: React.FC<SkillProps> = ({ id, name }) => (
  <ListItemButton sx={{ pl: 4 }} key={id}>
    <ListItemIcon>
      <AddReactionIcon />
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItemButton>
);
