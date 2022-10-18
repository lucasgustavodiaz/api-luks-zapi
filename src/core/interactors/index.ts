import {
  createCategoryInteractor,
  getCategoryInteractor,
} from './category.interactor';
import CategoryDataSource from '../../data/category.datasource';
import AuthDatasource from '../../data/auth.datasource';
import { loginAuthInteractor, signinAuthInteractor } from './auth.interactor';
import { getUserByIdInteractor } from './user.interactor';
import UserDatasource from '../../data/user.datasource';

//Repositories
const categoryRepository = new CategoryDataSource();
const authRepository = new AuthDatasource();
const userRepository = new UserDatasource();

//Interactors
const GetCategoryIteractor = getCategoryInteractor(categoryRepository);
const CreateCategoryIteractor = createCategoryInteractor(categoryRepository);
const LoginAuthIteractor = loginAuthInteractor(authRepository);
const SignInAuthIteractor = signinAuthInteractor(authRepository);
const GetUserByIdInteractor = getUserByIdInteractor(userRepository);

const interactors = {
  GetCategoryIteractor,
  CreateCategoryIteractor,
  LoginAuthIteractor,
  SignInAuthIteractor,
  GetUserByIdInteractor,
};

export default interactors;
