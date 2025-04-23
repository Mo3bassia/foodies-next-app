# 🍔 Foodies Next.js Application

## 🚀 My First Next.js Project!

This project represents my first experience with the Next.js framework, where I applied many new concepts and technologies to build a food recipe sharing platform.

## 📝 What I Learned in This Project

- ✅ Next.js 15 fundamentals and App Router architecture
- ✅ File-based routing system in Next.js
- ✅ Server Components vs Client Components
- ✅ Data fetching patterns in Next.js
- ✅ Working with Better SQLite3 for local database storage
- ✅ File uploading and local storage implementation
- ✅ Server Actions for form handling (new React feature)
- ✅ Error handling and loading states
- ✅ Creating dynamic routes with parameters ([meal])
- ✅ CSS Modules for component-scoped styling
- ✅ Using slugify for URL-friendly meal names
- ✅ XSS protection for user-generated content

## ⚠️ Important Note

This project is designed to run locally only, as it stores uploaded files on the local file system and uses a local SQLite database. Deployment to production would require modifications to use cloud storage and a production-ready database.

## 🛠️ Technologies Used

- Next.js 15.3.1
- React 19.1.0
- Better SQLite3 11.9.1
- CSS Modules
- slugify 1.6.6
- xss 1.0.15

## ⚙️ Installation and Running

```bash
# Clone the repository
git clone https://github.com/Mo3bassia/foodies-next-app.git

# Navigate to the project directory
cd foodies-next-app

# Install dependencies
npm i

# Run the development server
npm run dev
```

After running these commands, you can visit `http://localhost:3000` to view the project.

## 🗄️ Database

The project uses Better SQLite3 database (meals.db) to store recipe information. The database initializes automatically when the project starts for the first time using the initdb.js script.

## 📋 Implemented Next.js Features

- **App Router**: Modern routing system with nested routes
- **Server Components**: Most components are server components for improved performance
- **Dynamic Routes**: Implemented with [meal] parameter for individual recipe pages
- **Loading States**: Custom loading UI with loading.js
- **Error Handling**: Custom error pages with error.js
- **Not Found Pages**: Custom 404 handling with not-found.js
- **Image Optimization**: Using Next.js Image component for optimized image delivery
- **Server Actions**: Form handling without API routes
- **Metadata API**: SEO optimization for different pages

## 🌟 Key Features

- Browse a collection of food recipes on the homepage
- View detailed information about each recipe
- Add new recipes with title, description, instructions, and image
- Responsive design that works on mobile and desktop
- Image slideshow on the homepage

## 📁 Project Structure

- **app/**: Contains all routes following Next.js App Router convention
  - **page.js**: Home page with featured recipes
  - **meals/**: Recipe listings and individual recipe pages
  - **meals/share/**: Page for adding new recipes
  - **community/**: Community page
- **components/**: Reusable UI components
  - **Header/**: Navigation and site header
  - **meals/**: Recipe-related components
  - **images/**: Image slideshow component
- **lib/**: Utility functions and database connection
  - **actions.js**: Server actions for form handling
  - **meals.js**: Database operations for meals
- **public/**: Static assets and uploaded images
- **assets/**: Source images for the project

## 🔄 Data Flow

1. Database schema is initialized via initdb.js
2. Server components fetch data directly from the database
3. User uploads are processed via Server Actions and stored locally
4. Slugified URLs are generated for each meal for better SEO

## 🎯 Future Improvements

- Add user authentication
- Move to a cloud database for production
- Implement cloud storage for images
- Add search functionality
- Create user profiles and favorites

## 🤝 Contributing

Feel free to fork this project and submit pull requests. Any contributions are welcome!

## 📝 License

This project is open source and available under the MIT License.
