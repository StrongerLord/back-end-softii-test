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
    res.status(400).json({ error: "Se requiere un array de órdenes" });
    return;
  }

  const processedOrders = orders.map((order) => ({
    ...order,
    method: {
      type: order.method?.type || "cash",
      information: order.method?.information || "",
    },
  }));

  try {
    const insertedTips = await Tip.insertMany(processedOrders);

    res.status(201).json(insertedTips);
  } catch (err: any) {
    console.error("Error de MongoDB:", {
      code: err.code,
      message: err.message,
      stack: err.stack,
      errors: err.writeErrors,
    });

    res.status(500).json({
      error: "Error al guardar propinas",
      details: err.errors || err.message,
    });
  }
};
