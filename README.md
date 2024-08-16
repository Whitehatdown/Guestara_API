# Guestara_API

## Overview

This API provides endpoints for managing categories and subcategories for a menu management system. It allows you to create, retrieve, update, and delete categories and subcategories.

## Getting Started

### Prerequisites

- **Node.js**: Make sure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: This API uses MongoDB as its database. Ensure MongoDB is installed and running locally or use a cloud MongoDB service.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Whitehatdown/Guestara_API
    cd <repository-folder>
    ```

2. **Install dependencies**:
    Dependancies have been added to the Repository directly, Use the Command below to install them
   ```bash
    npm install
    ```

4. **Configure environment variables**:
   I have added my Secret and Connection Details, To Connect to your Personal DB, Create a `.env` file in the root directory with the following content:
   ```bash
   MONGO_URI=<ENV_AlREADY_HAS_MY_DATABASE_URL>
   PORT=5000

