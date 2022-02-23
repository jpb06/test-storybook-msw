import { useState } from 'react';

export const useSkillsCategorySelection = () => {
  const [openedCategoryId, setOpenedCategoryId] = useState<number | undefined>(
    undefined
  );

  const handleCategoryClick = (id: number) => () => {
    setOpenedCategoryId(id);
  };

  return { openedCategoryId, handleCategoryClick };
};
