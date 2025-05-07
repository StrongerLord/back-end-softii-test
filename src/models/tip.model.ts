import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    quantity: { type: Number, required: true },
    method: {
      type: {
        type: String,
        enum: ["credit_card", "cash", ""],
        required: true,
      },
      information: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tip", TipSchema);
