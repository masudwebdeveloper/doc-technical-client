import Blogs from "../../pages/Blogs/Blogs";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyDocument from "../../pages/MyDocument/MyDocument";
import Register from "../../pages/Register/Register";
import CoursesDetails from "../../share/CoursesDetails/CoursesDetails";
import FrequentlyAQ from "../../share/FrequentlyAQ/FrequentlyAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch('https://doc-technical-server.vercel.app/courses')
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/frequentlyaq',
            element: <FrequentlyAQ></FrequentlyAQ>
         },
         {
            path: '/mydocument',
            element: <MyDocument></MyDocument>
         },
         {
            path: '/courses/:id',
            element: <PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://doc-technical-server.vercel.app/courses/${params.id}`)
         },
         {
            path: '/course-category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`https://doc-technical-server.vercel.app/course-category/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])