# API Testing with `curl`

Here are five `curl` commands to test various endpoints of your API:

## 1. Create a Category

This command creates a new category.

```bash
curl -X POST http://localhost:5000/api/categories \
-H "Content-Type: application/json" \
-d '{
  "name": "Electronics",
  "image": "https://example.com/electronics.png",
  "description": "All kinds of electronic items",
  "taxApplicability": true,
  "tax": 15,
  "taxType": "percentage"
}'
```

## 2. Create a Subcategory
This command creates a new subcategory under the category with ID 66bf46cbb69dbd67a4bc9e93.

```bash
curl -X POST http://localhost:5000/api/subcategories/66bf46cbb69dbd67a4bc9e93 \
-H "Content-Type: application/json" \
-d '{
  "name": "Smartphones",
  "image": "https://example.com/smartphones.png",
  "description": "Various smartphone models"
}'
```

## 3. Get All Categories
This command retrieves all categories.

```bash
curl -X GET http://localhost:5000/api/categories \
-H "Accept: application/json"
```

## 4. Get All Subcategories
This command retrieves all subcategories for a specific category. Replace 66bf46cbb69dbd67a4bc9e93 with the desired category ID.

```bash
curl -X GET http://localhost:5000/api/subcategories?categoryId=66bf46cbb69dbd67a4bc9e93 \
-H "Accept: application/json"
```

## 5. Delete a Category
This command deletes the category with ID 66bf46cbb69dbd67a4bc9e93.
```bash
curl -X DELETE http://localhost:5000/api/categories/66bf46cbb69dbd67a4bc9e93 \
-H "Accept: application/json"
```
## Summary
- Create a Category: POST /api/categories
- Create a Subcategory: POST /api/subcategories/:categoryId
- Get All Categories: GET /api/categories
- Get All Subcategories: GET /api/subcategories?categoryId=:categoryId
- Delete a Category: DELETE /api/categories/:id

These commands should help you test the basic functionality of your API. Adjust the URLs and IDs as necessary to fit your specific setup.
