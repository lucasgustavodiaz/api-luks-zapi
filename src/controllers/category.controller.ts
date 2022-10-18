import { Request, Response } from 'express';
import interactors from '../core/interactors';

export const getCategory = async (req: Request, res: Response) => {
  const categories = await interactors.GetCategoryIteractor();

  res.status(200).json({ state: 'success', data: categories });
};

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  const category = await interactors.CreateCategoryIteractor(categoryName);

  res.json(category);
};
