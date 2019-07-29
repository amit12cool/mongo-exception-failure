import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Device } from './interfaces/device.interface';

@Injectable()
export class AppService {
    constructor(@Inject('DEVICE_MODEL') private readonly deviceModel: Model<Device>) {}
    private deviceId: string;
    private token: string;

    async generateToken(deviceId: string): Promise<string> {
        const createdDevice = new this.deviceModel(deviceId);
        const res = await createdDevice.save();
        this.deviceId = res.deviceId;
        this.token = res._id;
        return 'abcd';
    }
    
}
