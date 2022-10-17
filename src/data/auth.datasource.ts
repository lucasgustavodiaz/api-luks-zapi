import { AuthLogin, AuthSignIn, AuthDto } from '../core/dto/Auth';
import AuthRepository from '../core/respositories/auth.repository';
import { User } from '@prisma/client';
import prisma from '../config/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export default class AuthDatasource implements AuthRepository {
  public async login(data: AuthLogin): Promise<AuthDto | null> {
    //Check que user no exista en la db
    const existUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!existUser) {
      return null;
    }

    const isMatch = await this.matchPassword(existUser, data.password);

    if (!isMatch) {
      return null;
    }

    const token = this.getSignedToken(existUser);

    return {
      userId: existUser.id,
      name: existUser.name,
      email: existUser.email,
      token,
      expiresIn: 60 * 60 * 1000,
    };
  }

  public async signin(data: AuthSignIn): Promise<AuthDto | null> {
    //Verificar que user no exista en la db
    const existUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existUser) {
      return null;
    }

    //Crear un hash del password
    const salt = await bcrypt.genSalt(10);
    let hasPassword = await bcrypt.hash(data.password, salt);

    //Crear usuario
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hasPassword,
      },
    });

    const token = this.getSignedToken(user);

    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      token,
      expiresIn: 60 * 60 * 1000,
    };
  }

  private getSignedToken(user: User): string {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRE!,
    });
  }

  private async matchPassword(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.password);
  }
}
