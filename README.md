# 💼 Affordmed Frontend Test Submission

## 👨‍🎓 Name: Vigneshwaran N K  
## 🆔 Roll Number: 927622bcs118  

---

## ✅ Q1: 📈 Stock Price Viewer (React App)

### 🚀 Description:
A frontend web app to view real-time stock prices based on company selection and time intervals. Built as part of Affordmed's frontend evaluation using authorized APIs.

### 🔧 Tech Stack:
- React.js (Hooks)
- Axios (for API requests)
- HTML5 + CSS3
- JavaScript (ES6)

---

## 🗂️ Folder Structure
Q1/
├── frontend/  
│ ├── public/  
│ ├── src/  
│ ├── screenshots/  
│ │ └── GOOGL-15min.png ✅  
│ ├── package.json  
│ ├── README.md  

---

## ⚙️ Features

- 🔎 Company dropdown with tickers  
- ⏱️ Time interval selection (15/30/60 min)  
- 📊 Dynamic API call and display of price data  
- 🛠️ CORS-compliant Axios headers with Bearer token  
- 🧪 Tested manually with Postman before coding  

---

## 🧪 Screenshot

### 🖼️ Sample Output (GOOGL - 15 min)
![GOOGL](./screenshots/GOOGL-15min.png)

---

## 🔐 API Used

- **GET /stocks** – To list all companies  
- **GET /stocks/{ticker}?minutes={value}** – To fetch price data  

---

## ⚠️ Notes

- Used `Bearer <access_token>` in the Axios headers.  
- No backend or database — purely frontend with test server APIs.  
- All work was done under the Affordmed test environment with local testing at `http://localhost:3000`.  

---

## ✅ Q2: 🧮 Affordmed Average Calculator

### 📄 Description

This is a frontend microservice app that:
- Fetches numbers (Prime, Fibonacci, Even, Random) from the authorized API  
- Maintains a **sliding window** of **10 unique numbers**  
- Displays:  
  - 🟡 Previous state  
  - 🔵 Current state  
  - 🟢 Newly fetched numbers  
  - 📊 Calculated average of current state  

---

## ⚙️ Tech Stack

- ⚛️ React.js  
- 📦 Axios  
- 💡 JavaScript (ES6)  
- ⏱️ API Timeout control (500ms)  
- 🔐 Bearer Token Authentication  

---

## 💡 How It Works

1. User selects the type of numbers (p/f/e/r).  
2. App fetches new values from `http://20.244.56.144/evaluation-service/{numberid}`.  
3. Stores unique values up to window size (10).  
4. If already full, replaces the **oldest values** with new ones.  
5. Recalculates the average and displays the updated view.  

---

## 🧪 Screenshots

### 🔢 Prime Numbers (p)  
![Q2 Prime](./screenshots/Q2-prime.png)

### 🧬 Fibonacci Numbers (f)  
![Q2 Fibonacci](./screenshots/Q2-fibonnic.png)

### ⚖️ Even Numbers (e)  
![Q2 Even](./screenshots/Q2-even.png)

### 🎲 Random Numbers (r)  
![Q2 Random](./screenshots/Q2-random.png)

---

## 🗂️ Folder Structure
Q2/
├── frontend/  
│ ├── public/  
│ ├── src/  
│ ├── screenshots/  
│ │ ├── Q2-prime.png  
│ │ ├── Q2-fibonnic.png  
│ │ ├── Q2-even.png  
│ │ ├── Q2-random.png  
│ ├── package.json  
│ └── README.md  

---

## 🔐 API Endpoint Format

> Valid `numberid` values:  
> - `primes` → Prime numbers  
> - `fibo` → Fibonacci numbers  
> - `even` → Even numbers  
> - `rand` → Random numbers  

---

## 📝 Notes

- ⏱ Requests strictly timeout after **500ms** to comply with challenge rules.  
- ❌ Skips duplicates using `Set()`.  
- 📈 Average is calculated live after every API fetch.  
- ✅ Fully tested with Postman before development.  

---

## 📫 Contact

- 📧 Email: vigneshkanra@gmail.com  
- 🌐 GitHub: [vigneshkanraS](https://github.com/vigneshkanraS)  
- 💼 Portfolio: [View Portfolio](https://yogeshneelamegam15.my.canva.site/vigneshkanra)

---
