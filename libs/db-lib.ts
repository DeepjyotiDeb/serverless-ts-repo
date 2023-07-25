import { ObjectId, ObjectIdLike } from 'bson';
import * as mongoose from 'mongoose';
let isConnected: number;

export const connectToDatabase = async (): Promise<number> => {
  if (isConnected) {
    return isConnected;
  }
  const { connections } = await mongoose.connect(process.env.DB);
  isConnected = connections[0].readyState;
  return isConnected;
};

export const objectId = async (
  id: string | number | ObjectId | ObjectIdLike | Buffer | Uint8Array
): Promise<mongoose.Types.ObjectId> => {
  return new mongoose.Types.ObjectId(id);
};
