import { Request, Response } from "express";

export const getTemplate = async (req: Request, res: Response) => {
  return res.status(200).json({ data: [] });
};
