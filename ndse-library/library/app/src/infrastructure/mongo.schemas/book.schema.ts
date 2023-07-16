import { Schema } from 'mongoose';

export const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Не указано название'],
  },
  description: {
    type: String,
    default: '',
  },
  authors: {
    type: String,
    default: '',
  },
  favorite: {
    type: String,
    default: '',
  },
  fileCover: {
    type: String,
    default: '',
  },
  fileName: {
    type: String,
    default: '',
  },
});
