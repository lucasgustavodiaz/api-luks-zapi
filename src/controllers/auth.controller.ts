import { Request, Response, NextFunction } from 'express';
import interactors from '../core/interactors';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { NotFoundError } from '../errors/not-found-error';

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }
  const { name, email, password } = req.body;
  const signinResponse = await interactors.SignInAuthIteractor({
    name,
    email,
    password,
  });

  res.status(200).json({
    message: 'success',
    ...signinResponse,
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }
  const { email, password } = req.body;
  const loginResponse = await interactors.LoginAuthIteractor({
    email,
    password,
  });

  if (!loginResponse) {
    return next(new NotFoundError());
  }
  res.status(200).json({
    message: 'success',
    ...loginResponse,
  });
};
