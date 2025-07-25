## 🟢 WEBSITE IS LIVE HERE : 👇
https://blackhole-search-engine.vercel.app/

## BlackHole - Search Engine with Web Crawler 
📌 Project Overview

BlackHole is a search engine project built using the MERN stack (MongoDB, Express, React, Node.js). It is inspired by Google's interface and functionality, designed to crawl and index web pages, allowing users to search through them efficiently.

This project implements a web crawler that uses the Breadth-First Search (BFS) algorithm and Queue Data Structure to systematically visit and extract data from web pages. Axios and Cheerio are used for making HTTP requests and parsing HTML content, respectively.

The project follows MVC architecture, and employs Agile methodology with iterative development, continuous testing, and feature enhancements.
🎯 Objectives

✅ Web Scraping: Automatically crawls specified web pages and extracts structured data.
✅ Search Engine: Implements keyword-based search with indexed data.
✅ Data Storage: Uses MongoDB for storing crawled pages and search results.
✅ User-Friendly UI: Features a React-based frontend with a minimalist Google-like interface.
✅ Scalability & Performance: Ensures efficient crawling and searching using asynchronous operations.
🛠 Technologies Used
Frontend

    React.js - For building the user interface.

Backend

    Node.js - JavaScript runtime for server-side processing.

    Express.js - Web framework for handling API requests.

Database

    MongoDB - NoSQL database for storing indexed pages.

Libraries & Tools

    Axios - Handles HTTP requests for fetching web content.

    Cheerio - Parses and extracts HTML data.

    Mongoose - ODM library for MongoDB interactions.

    CORS - Manages cross-origin requests between frontend and backend.

    Dotenv - Handles environment variables securely.

⚙️ Implementation Details
Backend (Node.js & Express)

    Express Server - Runs on a specified port to handle API requests.

    MongoDB Connection - Uses Mongoose for database interactions.

    Crawl Functionality:

        Uses Axios to fetch HTML content.

        Extracts titles, descriptions, and links using Cheerio.

        Stores extracted data in MongoDB.

    API Endpoints:

        POST /crawl - Accepts a URL and starts the crawling process.

        GET /search - Searches for relevant data from the database.

Frontend (React)

    User Interface:

        Users can enter URLs to crawl and search for extracted data.

        Displays crawling results in a structured format.

    State Management - Uses React hooks for managing input and fetched data.

    API Calls - Uses Axios to interact with backend APIs.

🚀 How to Run the Project
1️⃣ Clone the Repository

git clone https://github.com/mysteriork/BLACKHOLE-search-engine/new/master

2️⃣ Setup Backend

cd backend
npm install  # Install dependencies
npm start    # Start the backend server

3️⃣ Setup Frontend

cd frontend
npm install  # Install dependencies
npm start    # Start the frontend React app

🚀 The app will be available at: http://localhost:3000
⚡ Challenges Faced

    Error Handling - Implementing robust error handling for network and database issues.

    Data Extraction - Ensuring accurate HTML parsing from different web pages.

    CORS Issues - Configuring CORS to allow communication between frontend and backend.

    Scalability - Managing large-scale web crawling efficiently.

UI SNAPSHOTS OF WEB APP :
1- USER INTERFACE :
![image](https://github.com/user-attachments/assets/67ceacda-a854-4dad-8ce4-a2f3ccd2603e)

- This includes the Main overview of the Website .
Overview
   ![image](https://github.com/user-attachments/assets/6487b155-ba9f-400c-95c0-76939848b403)

2- SEARCH FUNCTIONALITY :
- This includes the interaction between the “ frontend ” and “
backend ” such as - taking the user’s query and getting it matched
with the ‘database’ through the backend ‘server’ and then
returning back the desired data to the user .
Section for taking the Queries
  ![image](https://github.com/user-attachments/assets/ec09c7da-8715-4827-bb8b-7648ffa452f2)
![image](https://github.com/user-attachments/assets/d448c541-984d-4b00-bc43-caaca4d4806c)


3- DISPLAYING RESULTS :
- It is the last but not least step , it includes the final and another
important step i.e Displaying the “ Result ” .
Displaying the results below
![image](https://github.com/user-attachments/assets/6ce09908-2521-4757-a330-c705a00269ad)


🤝 Contributors

 @Mysteriork --- RACHIT KUMAR

License

This project is open-source and available under the MIT License.
