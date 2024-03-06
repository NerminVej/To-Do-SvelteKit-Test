import { open, Database } from "sqlite";

export const db: Database = open("todo.db");

db.exec(`
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    priority INTEGER
);
`);

