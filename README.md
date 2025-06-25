# PromtPixel AI - SaaS

## Live Demo
[Click here to view the live demo](https://promptpixelai.vercel.app/) <!-- Replace # with the actual live demo link -->

## Description
PromtPixelAI is an AI-powered image generation SaaS web application built with the MERN stack. It uses the Clipdrop API to generate high-quality images and includes a secure login/signup system.

---

## Features
- AI-based image generation using the Clipdrop API.
- User authentication system with login and signup functionality.
- Clean and modern user interface.

---

## Installation Instructions

1. Clone the repository:
```bash
git clone https://github.com/Darshan1915/PromtPixelAI.git
```

2. Navigate to the project directory:
```bash
cd PromptPixel AI
```

### Server Setup

3. Navigate to the server folder:
```bash
cd Prompt_Pixel_AI_server
```

4. Install dependencies:
```bash
npm install
```

5. Configure environment variables:
   Create a `.env` file in the `server` folder and add the following:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   CLIPDROP_API=<your-clipdrop-api-key>
   RAZORPAY_KEY_ID = <your-RAZORPAY_KEY_ID>
   RAZORPAY_KAY_SECRET = <your-RAZORPAY_KAY_SECRET>
   CURRENCY = INR
   ```

6. Start the server:
```bash
npm run server
```

### Client Setup

7. Navigate to the client folder:
```bash
cd PromptPixel_AI_client
```

8. Install dependencies:
```bash
npm install
```

9. Configure environment variables:
   Create a `.env` file in the `client` folder and add the following:
   ```env
   VITE_BACKEND_URL=<url-for-server-side>
   ```

10. Start the client:
```bash
npm run dev
```

---

## Commands Summary

### Server Commands
- **Install dependencies:** `npm install`
- **Run the server:** `npm run server`

### Client Commands
- **Install dependencies:** `npm install`
- **Run the client:** `npm run dev`

---

## Environment Variables Summary

### Server Folder
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JSON Web Token.
- `CLIPDROP_API`: API key for the Clipdrop API.

### Client Folder
- `VITE_BACKEND_URL`: URL of the server application.

---

Feel free to reach out for further assistance or feature suggestions!
