import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import MediaPage from "../pages/MediaPage";
import BlogPage from "../pages/BlogPage";
import RequireAuth from "../Requirement/RequireAuth";

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
            <RequireAuth>
                <AboutPage></AboutPage>
            </RequireAuth>
        ),
    },
    {
        path: "/media",
        element: (
            <RequireAuth>
                <MediaPage></MediaPage>
            </RequireAuth>
        ),
    },
    {
        path: "/blog/:id",
        element: (
            <RequireAuth>
                <BlogPage></BlogPage>
            </RequireAuth>
        )
    }

])
export default routers;