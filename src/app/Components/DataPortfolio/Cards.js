
import po1 from '../../../public/image/po1.jpg'
import p2 from '../../../public/image/p2.jpg'
import portfolio01 from '../../../public/image/portfolio01.jpg'
import portfolio02 from '../../../public/image/portfolio02.jpg'
import portfolio03 from '../../../public/image/portfolio03.jpg'
import portfolio04 from '../../../public/image/portfolio04.jpg'
import portfolio05 from '../../../public/image/portfolio05.jpg'
import { FaRegHeart } from 'react-icons/fa6'
import { LuHeartHandshake} from 'react-icons/lu'





export const DataCard = [
    { path:'/Dash', src: po1, id: 1, title:"React Website using routing",article:"A project built with React technology provides an effective and dynamic user experience, as it allows for effective and interactive case management. It takes advantage of Tailwind CSS to design an elegant and easily customizable user interface, with effective organization of styles and colors. Framer Motion adds a touch of fluid motion, enhancing the user experience with eye-catching animations and ultra-responsiveness." ,iconHeart:<FaRegHeart /> ,value:50},
    { path:'/portfolio/article', src: portfolio01, id: 2,title:"Weather App using Api",article:"A project built with HTML, CSS and JavaScript technologies is a dynamic website that provides a task management service. It allows users to easily add and edit tasks via a simple user interface beautifully built using HTML and CSS. It uses JavaScript to enhance user interaction, such as updating the menu without reloading the page and showing alerts to notify users of important events." , iconHeart:<FaRegHeart /> ,value:40},
    // { src: portfolio01, id: 3,title:"image3" },
    { path:'/portfolio/', src: portfolio02, id: 4,title:"CRUDs using local storage",article:"A project that uses Next.js, Express.js, MongoDB and Node.js technologies to develop a dynamic and efficient web application. Next.js is used to manage interface aspects effectively, with support for incremental progression and page generation without page reloads. Express.js is used as a server-side framework, providing powerful tools for organizing and simplifying server-side programming. Data is stored in the MongoDB database, providing flexible and powerful storage for unstructured data. The project generally relies on Node.js as the server-side JavaScript runtime environment, enabling fast-performing and scalable applications to be built." ,iconHeart:<FaRegHeart /> , value:45},
    { path:'/portfolio/', src: portfolio03, id: 5,title:"Web Design",article:"App for tecnology & services", iconHeart:<FaRegHeart /> , value:36},
    { path:'/portfolio/', src: portfolio04, id: 6,title:"Development" ,article:"The services provide for design", iconHeart:<FaRegHeart />, value:23},
   
    
]

