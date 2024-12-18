# RESTful API for Product Management

## Description
This is a simple RESTful API built using Node.js and Express.js for managing a list of products. The API supports basic CRUD operations such as retrieving all products, adding a new product, and deleting a product by ID. Data is stored in an in-memory array for simplicity.

## How to Run

1. **Clone the repository**:
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```
   The server will start running at `http://localhost:3000`.

4. **Test the API**:
   Use Postman or cURL to interact with the endpoints.

## API Endpoints

### 1. Retrieve All Products
- **Endpoint**: `GET /products`
- **Description**: Fetch all products in the list.
- **Example Request**:
  ```bash
  curl http://localhost:3000/products
  ```
- **Response**:
  ```json
  [
    {
      "id": "p1",
      "name": "Laptop",
      "price": 1200,
      "category": "Electronics"
    }
  ]
  ```

### 2. Add a New Product
- **Endpoint**: `POST /products`
- **Description**: Add a new product to the list.
- **Request Body**:
  ```json
  {
    "id": "p1",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
  ```
- **Example Request**:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"id": "p1", "name": "Laptop", "price": 1200, "category": "Electronics"}' http://localhost:3000/products
  ```
- **Response**:
  ```json
  {
    "message": "Product added successfully!",
    "product": {
      "id": "p1",
      "name": "Laptop",
      "price": 1200,
      "category": "Electronics"
    }
  }
  ```

### 3. Delete a Product by ID
- **Endpoint**: `DELETE /products/:id`
- **Description**: Delete a product from the list using its ID.
- **Example Request**:
  ```bash
  curl -X DELETE http://localhost:3000/products/p1
  ```
- **Response**:
  ```json
  {
    "message": "Product deleted successfully!"
  }
  
