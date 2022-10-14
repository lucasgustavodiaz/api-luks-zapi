import { createCategoryInteractor } from './category.interactor';
import CategoryDataSource from '../../data/category.datasource';

const categoryRepository = new CategoryDataSource();

const CategoryIteractor = createCategoryInteractor(categoryRepository);

const interactors = {
  CategoryIteractor,
};

export default interactors;
