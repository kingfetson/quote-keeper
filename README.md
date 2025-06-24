# 📚 Quote Keeper

A simple web application that allows users to save, view, and delete their favorite quotes using **Local Storage** in the browser.

---

## 🚀 Features

- ✅ Add quotes with author name
- 📦 Store quotes in browser local storage
- 📃 View all saved quotes
- ❌ Remove individual quotes
- 💡 Clean and responsive UI with optional CSS styling

---

## 🛠️ Technologies Used

- **HTML5** – Markup structure
- **CSS3** – Styling (optional)
- **JavaScript (ES6)** – Application logic
- **LocalStorage API** – Data persistence in the browser

---

## 📂 Project Structure

quote-keeper/
├── index.html # Main HTML file
├── styles.css # Optional styling file
└── script.js # Main JavaScript logic


---

## ⚙️ How to Use

1. **Clone the repository**

   git clone https://github.com/kingfetson/quote-keeper.git

Open the app
Open index.html in your browser.

Start Adding Quotes

Type a quote and its author in the input fields.

Click "Add Quote" to save it.

View all your saved quotes below.

Click the ❌ button to remove any quote.

📌 Local Storage Format
Each quote is saved as a JSON string with a unique key like:

{
  "id": 1723865380123,
  "text": "Stay hungry. Stay foolish.",
  "author": "Steve Jobs"
}
🧹 To Reset the App
To clear all stored quotes:

Open your browser’s developer tools.

Go to Application > Local Storage.

Delete all entries starting with quote-.

📄 License
This project is open-source and free to use.


   

