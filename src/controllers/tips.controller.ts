import { Request, Response } from "express";
import Tip from "../models/tip.model";

export const getTips = async (_req: Request, res: Response) => {
  try {
    const tips = await Tip.find().sort({ createdAt: -1 });
    res.json(tips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tips" });
  }
};

export const postTips = async (req: Request, res: Response): Promise<void> => {
  const orders = req.body;

  if (!Array.isArray(orders)) {
    res.status(400).json({ error: "Payload must be an array of orders" });
    return;
  }

  try {
    const insertedTips = await Tip.insertMany(orders);
    res.status(201).json(insertedTips);
  } catch (err) {
    res.status(500).json({ error: "Failed to save tips" });
  }
};
