import mongoose from 'mongoose';
import { database as config } from '../config/config'

mongoose.connect(config.url, config.options);
const db = mongoose.connection;

db.on('error', () => { console.log('connection error'); });
db.once('open', () => {}); //execute script before open


