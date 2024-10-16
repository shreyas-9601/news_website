# News Website

A simple news website that fetches real-time news headlines using the [News API](https://newsapi.org/).

## Features
- Displays the latest news headlines from various sources.
- Error handling for API requests.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express.js

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/shreyas-9601/news_website.git
cd news_website_full_stack
```

### Step 2: Set Up the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your News API key:
   ```plaintext
   NEWS_API_KEY=your_news_api_key
   ```

### Step 3: Start the Backend Server
```bash
npm start
```
(Backend runs on `http://localhost:5000`)

### Step 4: Set Up the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../news_website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Step 5: Start the Frontend Application
```bash
npm start
```
(Frontend runs on `http://localhost:3000`)

## Additional Libraries
- **Backend**: `express`, `axios`, `dotenv`
- **Frontend**: `axios`

## License
This project is licensed under the MIT License.
