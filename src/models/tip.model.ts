import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    method: {
      type: {
        type: String,
        enum: ["credit_card", "cash"],
        required: true,
      },
      information: {
        type: String,
        default: "", // Valor por defecto
        required: false, // No es obligatorio
      },
    },
  },
  {
    timestamps: true,
    strict: "throw", // Opcional para debug
  }
);

export default mongoose.model("Tip", TipSchema);
