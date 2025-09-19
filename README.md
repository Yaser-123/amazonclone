# Amazon Clone

A fully responsive Amazon clone built with React and TailwindCSS. This project replicates the core UI and functionality of Amazon's e-commerce platform.

## 🚀 Live Demo

Visit the live site: [Amazon Clone on GitHub Pages](https://yaser-123.github.io/deals)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Product Catalog**: Browse 12+ carefully curated products
- **Smart Filtering**: Category-based product filtering with sidebar navigation
- **Shopping Cart**: Add, remove, and manage cart items with real-time updates
- **Amazon UI**: Pixel-perfect recreation of Amazon's interface
- **Search Functionality**: Working search bar with product filtering
- **Product Details**: Ratings, reviews, and detailed product information

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS (CDN)
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **Deployment**: GitHub Pages

## 📱 Categories

- **Electronics**: Computers, Mobile Phones, Audio, Gaming, Smart Home
- **Books**: Fiction, Non-Fiction, Textbooks, Children's Books
- **Home & Kitchen**: Appliances, Furniture, Decor, Storage
- **Health & Sports**: Fitness Trackers, Sports Equipment
- **Special Sections**: Best Sellers, New Releases, Deals, Gift Ideas

## 🏗️ Project Structure

```
amazon-clone/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Header with search and navigation
│   │   ├── Sidebar.js         # Category navigation
│   │   ├── ProductGrid.js     # Product display with filtering
│   │   ├── ProductCard.js     # Individual product cards
│   │   └── Footer.js          # Footer with links
│   ├── pages/
│   │   ├── Home.js            # Main landing page
│   │   └── Cart.js            # Shopping cart page
│   ├── context/
│   │   └── CartContext.js     # Global cart state management
│   ├── data/
│   │   └── products.json      # Product database
│   └── App.js                 # Main app component
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yaser-123/Amazon-Clone.git
cd Amazon-Clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 Key Components

### Navbar
- Amazon logo and branding
- Location selector
- Search bar with category dropdown
- Account menu and cart icon
- Responsive mobile navigation

### Sidebar
- Hierarchical category navigation
- Expandable subcategories
- Quick links (Best Sellers, Deals, etc.)
- Filter products by category

### Product Grid
- Responsive grid layout
- Product filtering by category
- Empty state handling
- Clean, card-based design

### Shopping Cart
- Add/remove items
- Quantity management
- Real-time price calculation
- Persistent cart state

## 🎨 Design Features

- **Amazon's Visual Identity**: Exact color scheme and typography
- **Responsive Layouts**: Mobile, tablet, and desktop optimized
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and efficient React patterns

## 🌐 Deployment

This project is automatically deployed to GitHub Pages. Any push to the main branch triggers a new deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Amazon for the original design inspiration
- React team for the amazing framework
- TailwindCSS for the utility-first styling approach
- Create React App for the development setup

## 📞 Contact

**Yaser** - [GitHub Profile](https://github.com/Yaser-123)

Project Link: [https://github.com/Yaser-123/Amazon-Clone](https://github.com/Yaser-123/Amazon-Clone)

---

*This project is for educational purposes and is not affiliated with Amazon.com, Inc.*
