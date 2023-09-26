import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import checkupui from '/src/assets/images/checkupui.png'
import cybernotes from "/src/assets/images/cybernotes.png";
import newsapp from "/src/assets/images/newsapp.png";
import carrercart from "/src/assets/images/carrercart.png";
import blogpost from "/src/assets/images/blogpost.png";
import DjangoWebapp from "/src/assets/images/DjangoWebapp.png";
import textutils from "/src/assets/images/textutils.png";
import todos from "/src/assets/images/todos.png";
import terminal from "/src/assets/images/terminal.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={textutils}
                isBlog={false}
                title=" Text-Utils Webapp ( React JS, Bootstrap 5 ) : "
                description=" • The Text Utils App is a web application developed using React.js and Bootstrap 5 that provides users with a versatile set of text manipulation tools. • Skills: React JS and Bootstrap 5. "
                ghLink="https://amanshukla4194.github.io/Text-Utils-App/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cybernotes}
                isBlog={false}
                title=" Cyber-Notes Web App ( React JS, Context API, Mongo DB, JWT ) : "
                description="• The Cyber-Notes Web App is a versatile web application built using React.js for the frontend and MongoDB for the backend. This application allows users to create, store, edit, and delete their personal notes securely on a MongoDB server using Context API and JWT. It features user authentication for login and sign out, ensuring that each user has their own private space for managing their notes. • Skills: React JS, Context API, Mongo DB, JWT, database management, API integration, web development (both frontend and backend). "
                ghLink="https://github.com/AmanShukla4194/Cyber-Notes"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={newsapp}
                isBlog={false}
                title=" Mighty-Men News App using Newsapi.org ( React JS - Function/Component based ) : "
                description="• Mighty Men News App is a modern and feature-rich news aggregator application developed using React.js and Bootstrap 5. This application empowers users to stay informed and up-to-date with the latest news from various sources and categories. The core functionality of the app relies on seamless API integration with NewsAPI.org, a leading source for news articles from around the world. • Skills: React JS, Bootstrap 5, API integration, NewsApi.org. "
                ghLink="https://github.com/AmanShukla4194/Mighty-Men_NewsApp_FunctionBased"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={checkupui}
                isBlog={false}
                title=" CheckUp UI - Pharmacy WebApp ( React JS, Django, CSS ) : "
                description=" • CheckUp UI is a comprehensive web application designed to streamline patient information management for healthcare professionals, including doctors, receptionists, and pharmacists. This user-friendly app facilitates easy access to patient details, medication records, and prescription history. The application is built using React.js for the frontend, ensuring a responsive and intuitive user experience, and the user interface design was created using Figma. • Skills: React JS, Normal CSS, Django, database management, API integration, web development (both frontend and backend). "
                ghLink="https://github.com/AmanShukla4194/Checkup-UI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={carrercart}
                isBlog={false}
                title=" Carrer-Cart Blog ( Next JS, WordPress, GraphQL ) : "
                description=" • The Career Cart Blog Post Web App is a dynamic and content-rich web application designed to provide valuable career-related insights and resources to users. This project is built using Next.js, a popular React framework for server-side rendering, and leverages the power of WordPress as a headless CMS with GraphQL Pluggin and Queries integration. • Skills: Next JS, WordPress, Graph QL, database management, API integration, web development (both frontend and backend). "
                ghLink="https://github.com/AmanShukla4194/carrerkarts-blog"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blogpost}
                isBlog={false}
                title=" Personal Blog Website ( Next.js & appwrite.io ) : "
                description=" • Designed and developed a personal blog website using Next.js framework for front-end and Appwrite.io as the backend. • Skills: Next.js, Tailwind CSS, Appwrite.io, database management, API integration, web development (both frontend and backend). "
                ghLink="https://github.com/AmanShukla4194/BlogPost-Next-Js-and-Appwrite"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={DjangoWebapp}
                isBlog={false}
                title=" Based Website ( Django Python ) : "
                description=" • Led the development of a dynamic product-based website using Django framework, incorporating HTML, CSS, and JavaScript, Bootstrap 5. • Skills: Django, Python, HTML, CSS, JavaScript, database management, API integration, web development (both frontend and backend)."
                ghLink="https://github.com/AmanShukla4194/IceCream-Product-View-Website "
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todos}
                isBlog={false}
                title=" Daily Routine Check Todo List Web App ( React JS, Bootstrap 5 ) : "
                description="• The Todo List Web App is a simple yet highly practical web application designed to help users manage their tasks and to-do lists efficiently. This project is developed using React.js for the frontend and utilizes Bootstrap 5 for responsive design and a visually appealing user interface. • Skills: React JS, Bootstrap 5. "
                ghLink="https://github.com/AmanShukla4194/todos-list"
              />
            </Col>
    
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={terminal}
                isBlog={false}
                title=" Product Management System (C/C++):"
                description=" • Developed a product management system using C/C++ and file handling to showcase product information and manipulation of data using CRUD operations. • Skills: C/C++, File Handling. "
                ghLink="https://github.com/AmanShukla4194/Product-Management-System"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={terminal}
                isBlog={false}
                title=" Students Management System ( C/C++ ) : "
                description=" • Created a comprehensive students management system using C/C++ and file handling to manage student records using CRUD operations. • Skills: C/C++, File Handling "
                
                ghLink="https://github.com/AmanShukla4194/Product-Management-System"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={newsapp}
                isBlog={false}
                title=" Mighty-Men News App using Newsapi.org ( React JS - Function/Component based ) : "
                description="• Mighty Men News App is a modern and feature-rich news aggregator application developed using React.js and Bootstrap 5. This application empowers users to stay informed and up-to-date with the latest news from various sources and categories. The core functionality of the app relies on seamless API integration with NewsAPI.org, a leading source for news articles from around the world. • Skills: React JS, Bootstrap 5, API integration, NewsApi.org. " 
                ghLink="https://github.com/AmanShukla4194/Mighty_Men_News_App_ClassBased"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;