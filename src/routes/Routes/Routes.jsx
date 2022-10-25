import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import CoursesDetails from "../../share/CoursesDetails/CoursesDetails";
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
            loader: ()=> fetch('http://localhost:5000/courses')
         },
         {
            path: '/courses/:id',
            element: <PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
         },
         {
            path: '/course-category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/course-category/${params.id}`)
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