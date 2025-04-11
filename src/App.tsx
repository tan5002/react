// import "./App.css";
// import Counter from "./components/Counter";
// import Hello from "./components/index";
// import Post from "./components/post";
// import ProductCard from "./components/ProductCard";
// import Hello from "./components/Hello";
// import Toolbar from "./components/Toolbar";
// import ValidatedForm from "./components/VaidatedForm";
// import Product from "./components/product";
// import UserProfile from "./components/UserProfile";

// function App() {
//  return(
//   <>
//   <ProductCard
//     imageUrl= "https://down-vn.img.susercontent.com/file/723ef08a853a2ae6c59d9fbf1faf69ad.webp"
//     name="KAJUTA"
//     category="Night Lamp"
//     price ={90}
//     quantity={1}
//     description="So strongly and metaphysically did I conceive of my situation..."
//     totalPrice ={100}
//     colors={[
//       { color: "#DD32FF", imageUrl: "https://down-vn.img.susercontent.com/file/723ef08a853a2ae6c59d9fbf1faf69ad.webp" },
//       { color: "#388E3C", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m29ea9flctde3e.webp" },
//       { color: "#1976D2", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4sga26yihbqc3.webp" },
//       { color: "#FFC0CB", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmx0t161v7xb46.webp" },
//     ]}
//     />
//     {/* <Product
//     imgSrc="https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg"
//     title = "Đèn bàn"
//     content="Đèn sáng"
//     isBestSeller ={true}
//     /> */}
//     <Hello message="Hello" name="Anh Dao" />
//     <Toolbar/>
//     <ValidatedForm/>
//   </>
//  ); 
// }

// export default App;


// import "./App.css";
// import PostList from "./components/PostList";
// import CreatePost from "./components/CreatePost";
// import { useState } from "react";
// import ProductForm from "./components/VaidatedForm";
// import ProductCard from "./components/ProductCard";
// import CreatePost from "./components/CreatePost";
// import Comment from "./components/Comment";
// import React, {useEffect, useState} from "react";
// import { Post } from "./types/Post";
// import { getUserPosts } from "./services/api";

// function App() {
//   const userId = "7801411"; 1 post
//   const userId = "7801407"; no post found
//   const userId = "7804996"; 1 post

//   State to trigger post list refresh after creating a new post
//   const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

//   Function to handle post creation completion
//   const handlePostCreated = () => {
//     Increment to trigger useEffect in PostList component
//     setRefreshTrigger((prev) => prev + 1);
//   };
//   const App: React.FC = () => {
//     const userId = 1234; ID user cố định (hoặc lấy từ props/state)
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  
//     useEffect(() => {
//       fetchPosts();
//     }, []);
  
//     const fetchPosts = async () => {
//       try {
//         const data = await getUserPosts(userId);
//         setPosts(data);
//       } catch (err) {
//         console.error("Lỗi khi tải bài viết:", err);
//       }
//     };
  
//   return (
//     <>
//       {/* <CreatePost userId={userId} onPostCreated={handlePostCreated} />
//       <PostList userId={userId} refreshTrigger={refreshTrigger} /> */}
//       {/* <ProductForm/> */}
//       {/* <ProductCard
//         imageUrl="https://down-vn.img.susercontent.com/file/723ef08a853a2ae6c59d9fbf1faf69ad.webp"
//         name="KAJUTA"
//         category="Night Lamp"
//         price={90}
//         quantity={1}
//         description="So strongly and metaphysically did I conceive of my situation..."
//         totalPrice={100}
//         colors={[
//           { color: "#DD32FF", imageUrl: "https://down-vn.img.susercontent.com/file/723ef08a853a2ae6c59d9fbf1faf69ad.webp" },
//           { color: "#388E3C", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m29ea9flctde3e.webp" },
//           { color: "#1976D2", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4sga26yihbqc3.webp" },
//           { color: "#FFC0CB", imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmx0t161v7xb46.webp" },
//         ]}
//       /> */}
//       {/* <CreatePost/> */}
//       </>
//   );
// }
import React, { ReactNode, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import StudentsList from './components/StudentsList';
import StudentProfile from './components/StudentProfile';
import Students from './components/Students';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { getUserPosts } from "./services/Api";
import { Post } from "./types/Post";
// import ProductItem from './components/ProductItem';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from './context/CartContext';
function RequireAuth({ children, isAuthenticated }: { children: ReactNode; isAuthenticated: boolean }) {
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userId = 7824135; 
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePostCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    fetchPosts();
  }, [refreshTrigger]);

  const fetchPosts = async () => {
    try {
      const data = await getUserPosts(userId);
      setPosts(data);
    } catch (err) {
      console.error("Lỗi khi tải bài viết:", err);
    }
  };

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <RequireAuth isAuthenticated={isAuthenticated}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route path="/users" element={<UserList />} />
          <Route
            path="/products/:id"
            element={
              <RequireAuth isAuthenticated={isAuthenticated}>
                <ProductDetail />
              </RequireAuth>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/students" element={<Students />}>
            <Route index element={<StudentsList />} />
            <Route path=":id" element={<StudentProfile />} />
          </Route>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        </Routes>
        {/* Post Area */}
        <CreatePost userId={userId} onPostCreated={handlePostCreated} />
        <PostList userId={userId} refreshTrigger={refreshTrigger} posts={posts} />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;

