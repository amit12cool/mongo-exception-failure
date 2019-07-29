    
import { Document } from 'mongoose';

export interface Device extends Document {
  readonly deviceId: string;
}