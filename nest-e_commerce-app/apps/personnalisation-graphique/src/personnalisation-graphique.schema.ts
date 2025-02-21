import * as mongoose from 'mongoose';

export const PersonnalisationGraphiqueSchema = new mongoose.Schema({
  id: Number,
  ownerId: Number,
  primaryColor: String,
  secondaryColor: String,
  thirdcolor: String,
  firstPolice: String,
  secondaryPolice: String,
  globalBackgroundImage: String,
  otherBackgroundImage: String,
});
