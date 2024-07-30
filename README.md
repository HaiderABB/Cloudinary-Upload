# Image Upload Project

A Node.js application that demonstrates how to upload images to Cloudinary using Express and Multer. This project handles image uploads, validates file types, and supports custom filenames.

## Features

- Upload images to Cloudinary
- Validate image file types (JPEG, PNG, GIF)
- Custom image naming

## Technologies

- **Node.js**: Runtime for the server
- **Express**: Web framework
- **Multer**: Middleware for handling file uploads
- **Cloudinary**: Image storage and management
- **dotenv**: Environment variable management

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/image-upload-cloudinary.git
   cd image-upload-cloudinary

2. **Install dependencies**:
   ```bash
   npm install

3. **Configure Environment Variables**:
   ```bash
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

4. **Start the server**:
 ```bash
   npm start
```

5. **Start the server**:
```
curl -X POST http://localhost:3000/Image/Upload
