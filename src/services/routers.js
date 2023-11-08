import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import MediaPage from "../pages/MediaPage";
import BlogPage from "../pages/BlogPage";

const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <App></App>
        ),
    },
    {
        path: "/about",
        element: (
            <AboutPage></AboutPage>
        ),
    },
    {
        path: "/media",
        element: (
            <MediaPage></MediaPage>
        ),
    },
    {
        path: "/blog/:id",
        element: (
            <BlogPage></BlogPage>
        )
    }
    
])
export default routers;