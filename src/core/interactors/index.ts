import { createCategoryInteractor } from './category.interactor';
import CategoryDataSource from '../../data/category.datasource';
import AuthDatasource from '../../data/auth.datasource';
import { loginAuthInteractor, signinAuthInteractor } from './auth.interactor';

//Repositories
const categoryRepository = new CategoryDataSource();
const authRepository = new AuthDatasource();

//Interactors
const CategoryIteractor = createCategoryInteractor(categoryRepository);
const LoginAuthIteractor = loginAuthInteractor(authRepository);
const SignInAuthIteractor = signinAuthInteractor(authRepository);

const interactors = {
  CategoryIteractor,
  LoginAuthIteractor,
  SignInAuthIteractor,
};

export default interactors;
