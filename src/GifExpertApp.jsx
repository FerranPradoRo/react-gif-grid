import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Batman']);

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const deleteCategory = (category) => {
    const newCategories = categories.filter((c) => c != category);
    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          deleteCategory={deleteCategory}
        />
      ))}
    </>
  );
};

export default GifExpertApp;
