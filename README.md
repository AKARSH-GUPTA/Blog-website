<<<<<<< HEAD
# blog-website
=======
# 📝 Blog Website Setup Guide

Follow the steps below to run this blog website locally on your machine.

---

## 🚀 Getting Started

### 1. Clone the Repository
Clone this repository to your local system using:

```bash
git clone <your-repository-url>
```

---

### 2. Install Dependencies
Navigate to the project directory and install all required dependencies:

```bash
npm install
```

---

### 3. Configure Database (PostgreSQL)

Create a `.env` file 

Copy the following details as it is assign the variables your PostgreSQL credentials:

Pg_host="localhost"//local if you are using local postgres
Pg_user="postgres"//mainly postgres
Pg_db=<your database name>
Pg_password=<password of the server>


---

### 4. Create Required Table

Inside the repository, you will find a file named:

blogpost.sql

Run this SQL file in your PostgreSQL database (the one you configured above) to create the required table.

---

### 5. Run the Application

Start the server using:

```bash
npm run index.js
```

---

## ✅ You're Ready!

Once the server starts successfully, your blog website should be running locally.

---

## ⚠️ Notes

- Make sure PostgreSQL is installed and running on your system.
- Ensure the database name matches exactly with the one provided in `index.js`.
- If any port conflicts occur, update the port in your configuration.

---

## 💡 Troubleshooting

- If dependencies fail → try `npm install` again
- If database connection fails → recheck credentials and database status
- If table errors occur → ensure `blogpost.sql` is executed properly

---

Happy Coding! 🚀
>>>>>>> c1c8b8c (this is the blog website with simple crud operations)
