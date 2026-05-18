# Login Error Fix - "Something went wrong"

## Status: Approved Plan Implementation

**Issue:** Generic catch in login/signup, backend Postgres DB likely missing → fetch fail.

**Steps:**
1. [x] Switch backend/database.py to SQLite `sqlite:///./ecom.db` (no Postgres needed)
2. [x] Update login.jsx & signup.jsx: Better error handling (network vs backend errors, console.log)
3. [x] Test backend start `cd backend && python -m uvicorn main:app --reload` (auto creates ecom.db/tables) - running on http://127.0.0.1:8000
4. [x] Test frontend `cd ecommerce && npm start`, signup/login flow no errors - running, backend connected (logs show /login requests)
5. [x] Update TODO complete, attempt_completion

**Notes:** psycopg2 optional for SQLite. Login now shows specific errors.
