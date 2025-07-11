## 🧑‍💻 How to Set Up Locally
1. Clone the Repository
git clone https://github.com/ujwalbholan/aakashGropuAssignment.git

cd your-repo-name

2. Install Dependencies
Ensure you have Node.js and npm installed, then run:

npm install

3. Start the Development Server

npm run dev

Open http://localhost:5173 in your browser to view the app.

## 🚀 Features

✅ Responsive Design: Optimized for all devices with a modern, user-friendly interface.
🧠 Team & Values: Dedicated sections for "Meet the Team" and "Company Values".
🎡 Dynamic API Content: Integrated with public APIs to display jokes, cat images, and advice.
📩 EmailJS Contact Form: Fully functional contact form with loading and success states.
⚙️ Easy Configuration: Simple setup for local development and deployment.
☁️ Vercel Deployment: Hosted on Vercel for fast and reliable access.

## EmailJS Setup for Contact Form
The contact form uses EmailJS to handle submissions without a backend server.
Steps:

Sign up for a free account at EmailJS.
Create a new email service and template in the EmailJS dashboard.
Update the ContactForm.jsx file with your EmailJS credentials:

emailjs.sendForm(
  "your_service_id",
  "your_template_id",
  form.current,
  "your_public_key"
);

Once configured, form submissions will be sent to your specified email address.

## 🌐 API Page Overview
The /ApiPage component integrates three free public APIs to display dynamic content:



Feature
API Used
Description



🤣 Jokes
JokeAPI
Fetches random single or two-part jokes


😺 Cat Image
TheCatAPI
Displays random cat images


💡 Advice
AdviceSlip
Fetches short advice snippets


Each section includes a refresh button with a loading state to dynamically update content.

## 📍 Live Demo

🔗 Vercel Link: https://aakash-gropu-assignment.vercel.app/
📁 GitHub Repo: https://github.com/ujwalbholan/aakashGropuAssignment


## ✉️ Author

Name: Ujwal Bholan
Email: ujwalbholan@gmail.com
Location: Bhaktapur, Kathmandu