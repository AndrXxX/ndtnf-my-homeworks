import { Document, Schema, model } from 'mongoose'

export interface Book {
  id: string;
  title: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
}

const bookSchema = new Schema({
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
})

export const BookModel = model<Book & Document>('Book', bookSchema)
