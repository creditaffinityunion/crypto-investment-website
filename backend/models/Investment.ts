import mongoose, { Schema, Document } from 'mongoose';

interface IInvestment extends Document {
  userId: string;
  cryptoId: string;
  cryptoName: string;
  cryptoSymbol: string;
  investmentAmount: number;
  quantity: number;
  pricePerUnit: number;
  purchaseDate: Date;
  sellingPrice?: number;
  profit?: number;
  status: 'active' | 'sold' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const investmentSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    cryptoId: {
      type: String,
      required: true,
    },
    cryptoName: {
      type: String,
      required: true,
    },
    cryptoSymbol: {
      type: String,
      required: true,
    },
    investmentAmount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    pricePerUnit: {
      type: Number,
      required: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    sellingPrice: {
      type: Number,
      default: null,
    },
    profit: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'sold', 'cancelled'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Index for finding investments by userId and status
investmentSchema.index({ userId: 1, status: 1 });

const Investment = mongoose.model<IInvestment>('Investment', investmentSchema);

export default Investment;
