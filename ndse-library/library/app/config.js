module.exports = {
  bookUploadPath: process.env.BOOK_UPLOAD_PATH || 'public/books',
  imagesUploadPath: process.env.IMAGES_UPLOAD_PATH || 'public/images',
  port: process.env.PORT || 3000,
  counterUrl: process.env.COUNTER_URL || "localhost",
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017/mydb",
  cookieSecret: process.env.COOKIE_SECRET || "COOKIE_SECRET",
}
