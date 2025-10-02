-- Create expenses table
CREATE TABLE
    IF NOT EXISTS expenses (
        id SERIAL PRIMARY KEY,
        amount DECIMAL(10, 2) NOT NULL,
        description VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );