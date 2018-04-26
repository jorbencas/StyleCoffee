import React from 'react';
import CategorysCoffee from './CategoriesCoffees';
import CategorysBooks from './CategoriesBooks';

const Categorys = () => {

        return (
          <div>
            <h1>Tenga el placer de probar toda clase de cafés</h1>
            <CategorysCoffee/>
            <h1>Disfrute de sus generos favoritos</h1>
            <CategorysBooks/> 
          </div>
        );
}

export default(Categorys);