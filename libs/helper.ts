import { ObjectIdLike } from 'bson';
import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

type IDType =
  | string
  | number
  | Types.ObjectId
  | ObjectIdLike
  | Buffer
  | Uint8Array;

export const signInToken = async (
  id: IDType,
  expirationTime: number
): Promise<string> => {
  return jwt.sign(
    {
      id: id,
      expiresIn: `${expirationTime}d`
    },
    process.env.JWT_SECRET
  );
};
