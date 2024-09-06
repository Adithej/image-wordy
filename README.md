# Image Wordy - MERN Stack Chatbot for Image and Text Analysis

## Build with React+TypeScipt.js , Node+Express.js, MongoDB, Tesseract.js, OpenAI API.

Go to: [Image Wordy](https://image-wordy-1.onrender.com) and login with the following credentials:

```

email : adithya@test.com
password : 123456

```

### UI credits: Aceternity UI

_Image Wordy is a simple chatbot that can take an image and text as input, and analyze the text using
OCR to recognize and extract the content from the image and have analysis using it._

### Landing Page:

<img width="1434" alt="landing page" src="https://github.com/user-attachments/assets/5da99b43-62bb-4bfd-a08c-7bc1dc7b9511">

### Signup Page:

<img width="1434" alt="signup page" src="https://github.com/user-attachments/assets/3de9849c-1884-44cb-9ee1-31e309445474">

### Login Page:

<img width="1434" alt="login page" src="https://github.com/user-attachments/assets/ccab74ab-a22e-44e6-82ed-41d0da99b474">

### Home Page:

<img width="1434" alt="home page" src="https://github.com/user-attachments/assets/247a3dc2-7082-4b4e-859b-0c4424323927">

### Not Found Page:

<img width="1434" alt="Not found page" src="https://github.com/user-attachments/assets/bf91e5eb-ffbb-42f3-8b17-0f2cd7fe328d">

## Run Locally

clone the repo:

```
git clone https://github.com/Adithej/image-wordy.git
```

Go to Project Directory:

```
cd image-wordy
```

Install dependencies for both client and server:

client :

```
cd client
npm install

```

server :

```
cd server
```

Create `.env` file at the root of the server directory.
Copy the contents from`.env.example` to `.env` Add your secret values to `.env` , OPEN-AI API key , MONGO_DB Atlas URL and password, your own secret
Cookie and JWT random string values.

```
npm install
```

Start both client and server:

/image-wordy/client :

```
npm run dev
```

/image-wordy/server :

```
npm run dev
```

Use the testImages at the `TestImages` directory on the root level, or use your English textual images to try out and get insights.
