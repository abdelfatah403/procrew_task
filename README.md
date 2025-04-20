# E-Commerce Product Management System

A modern e-commerce web application built with React and TypeScript, featuring product management, shopping cart functionality, and advanced filtering capabilities.

## Features

### Product Management
- Add, edit, and delete products
- Manage product details including name, description, price, category, stock, and rating
- Upload product images via URL
- Real-time product list updates

### Shopping Experience
- Browse products with responsive grid layout
- View detailed product information in a modal
- Add products to shopping cart
- Manage cart items (update quantity, remove items)
- Real-time cart total calculation

### Advanced Filtering
- Search products by name and description
- Filter by category
- Filter by price range
- Dynamic category list based on available products

### User Interface
- Modern and responsive design
- Interactive product cards with hover effects
- Loading states and error handling
- Clean and intuitive navigation

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (Build tool)
- Context API (State management)

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Cart/          # Shopping cart related components
│   ├── Dashboard/     # Admin dashboard components
│   ├── Layout/        # Layout components
│   └── ProductDetails # Product detail modal
├── context/           # React Context providers
├── data/             # Static data and mock APIs
├── home/             # Home page components
├── hooks/            # Custom React hooks
└── assets/           # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local server address shown in the terminal

## Development

- The project uses TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Context API for state management
- Responsive design principles

## Features in Detail

### Product Management
The admin dashboard allows full CRUD operations on products:
- Create new products with validation
- Update existing product details
- Delete products
- Manage inventory levels

### Shopping Cart
- Add/remove items
- Update quantities
- Calculate total price
- Persistent cart state

### Product Filtering
- Real-time search functionality
- Category-based filtering
- Price range filtering
- Combination of multiple filters

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
