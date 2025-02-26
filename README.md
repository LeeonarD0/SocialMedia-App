# SocialSphere 🌐

A minimalist social media web application built with **Vite** and **React.js**, focusing on core functionalities like creating, viewing, and deleting posts/comments. This project demonstrates fundamental React concepts such as state management with `useState`, component composition, and the integration of **Phosphor Icons** for a sleek UI.

![Demo](https://via.placeholder.com/800x400.png?text=SocialSphere+Demo) *Replace with actual demo image*

## Features ✨

- **Create Posts**: Share your thoughts with a simple text input.
- **View Posts**: Browse all posts in a chronological feed.
- **Add Comments**: Engage with posts by adding comments.
- **Delete Comments**: Remove your comments anytime.
- **Real-Time Updates**: Instant UI updates using React state management.
- **Responsive Design**: Works smoothly on all screen sizes.
- **Phosphor Icons**: Modern and clean icons for intuitive interactions.

## Technologies Used 🛠️

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: Blazing-fast build tool and development server.
- **React DOM**: DOM-specific methods for React.
- **Phosphor Icons**: Versatile icon library for React (`@phosphor-icons/react`).
- **CSS Modules**: For scoped and modular styling.

## Installation 📦

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/SocialSphere.git
   cd SocialSphere
Install dependencies:

bash
Copy
npm install
# or
yarn install
Run the development server:

bash
Copy
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:5173.

Usage 🖱️
Create a Post:
Click the "New Post" button, enter your text, and submit.

Add a Comment:
Click the comment icon on any post, type your message, and submit.

Delete a Comment:
Hover over a comment and click the trash icon to remove it.

View Posts:
Scroll through the feed to see all shared posts.

Code Structure 📂
plaintext
Copy
/src
|-- /components
|   |-- Post.jsx        # Post creation and display component
|   |-- Comment.jsx     # Comment component with delete functionality
|-- /hooks
|   |-- usePosts.js     # Custom hook for post state management
|-- App.jsx             # Main component rendering the feed
|-- main.jsx            # React DOM root
Dependencies 📦
react: ^18.2.0

react-dom: ^18.2.0

@phosphor-icons/react: ^2.0.0

vite: ^4.0.0

Contributing 🤝
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License 📄
This project is licensed under the MIT License. See LICENSE for details.

Made with ❤️ by [Your Name]. Connect with me on Twitter!
