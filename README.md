# MongoDB and Mongoose Challenges - FreeCodeCamp Solution

This repository contains my solution to the MongoDB and Mongoose challenges as part of the FreeCodeCamp curriculum. It's designed to help you understand the intricacies of database operations using MongoDB and the Mongoose library.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB Atlas account or local MongoDB setup.

### Setup

After cloning this repository, install the required dependencies:

```bash
npm install
```

Create a `.env` file in the root of the project. Populate it with your MongoDB connection details:

```bash
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
CLUSTER=your_cluster_name
```

**Note**: Make sure to replace `your_username`, `your_password`, and `your_cluster_name` with your actual MongoDB Atlas credentials.

Start the server:

```bash
npm start
```

## Endpoints

Here are some of the primary endpoints you can explore:

- **GET** `/`: Main endpoint that serves the index page.
- **GET** `/_api/create-and-save-person`: Creates and saves a new person record in the database.
- **POST** `/_api/create-many-people`: Creates and saves multiple person records in the database.
- **POST** `/_api/find-all-by-name`: Finds all people by a specific name.
- **POST** `/_api/find-one-by-food`: Finds a person by their favorite food.
- **GET** `/_api/find-by-id`: Finds a person by their unique ID.
- **POST** `/_api/find-edit-save`: Finds a person by ID, edits their data, then saves the updated record.
- **POST** `/_api/find-one-update`: Finds a person by name and updates their age.
- **POST** `/_api/remove-one-person`: Removes one person by their ID.
- **POST** `/_api/remove-many-people`: Removes all people who match a given name.
- **POST** `/_api/query-tools`: Demonstrates a chained search query tool.

Each endpoint serves a specific function in the database, whether it's creating, reading, updating, or deleting records.
