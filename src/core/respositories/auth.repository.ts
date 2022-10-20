import { AuthLogin, AuthSignIn, AuthDto } from '../dto/Auth';
import { Result } from '../types/response';

export default interface AuthRepository {
  login(login: AuthLogin): Promise<Result<AuthDto>>;
  signin(login: AuthSignIn): Promise<Result<AuthDto>>;
}
