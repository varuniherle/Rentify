# Property Listing Application

This is a basic property listing application where users can register as either a buyer or a seller. Sellers can post properties, and buyers can view and filter these properties.


## Features

### User Registration

- Users can register as either buyers or sellers by providing their first name, last name, email, phone number, and user type.

### Seller Flow

- Sellers can post properties by providing details such as place, area, number of bedrooms, bathrooms, nearby hospitals, and colleges.
- Sellers can view the properties they have posted.
- Sellers can update or delete their properties.

### Buyer Flow

- Buyers can view all posted properties.
- Buyers can filter properties based on various criteria such as place, area, and number of bedrooms.
- Buyers can express interest in a property by clicking an "I'm Interested" button, which reveals the seller's details.

## Installation

### Backend

1. Clone the repository:
2. Install backend dependencies: npm install
3. Set up MongoDB Atlas:
4. Start the server : npm run dev
This will start the React app on port 5000.

Frontend
1. Navigate to the client directory:
2. navigate to the roperty-listing-client: cd property-listing-client
3. Install frontend dependencies: npm install
4. Start the React development server: npm start

This will start the React app on port 3000.

Usage
Open your browser and navigate to http://localhost:3000.
Register as a buyer or seller.
If registered as a seller, navigate to the seller dashboard to post and manage properties.
If registered as a buyer, navigate to the buyer dashboard to view and filter properties.

Technologies Used
Backend:
Node.js
Express
MongoDB with Mongoose
MongoDB Atlas
Nodemon

Frontend:
React
Axios
