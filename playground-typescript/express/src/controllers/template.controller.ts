import { Request, Response } from "express";

export const getData = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ status: "success", data: [] });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

export const getDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.status(200).json({ status: "success", id, data: {} });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
