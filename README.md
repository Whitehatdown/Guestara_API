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
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following content:
   ```bash
   MONGO_URI=mongodb://localhost:27017/menu-management
   PORT=5000

