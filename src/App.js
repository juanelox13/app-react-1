import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Card from "./components/Card"
import Footer from "./components/Footer"

const links = ["https://www.holoweb.net/~liam/pictures/2007-06-29-san-vivaldo/pages/img_4979/img_4979-300x200.jpg","https://diccionarioactual.com/wp-content/uploads/2017/01/l%C3%ADnea-300x200.jpg","https://diccionarioactual.com/wp-content/uploads/2016/10/foliaci%C3%B3n-300x200-2.jpg", "https://lh3.googleusercontent.com/proxy/NtPnYYj_yLh7opcPivreR7qUkfWieC2DxiK3xix3085fktCpwCM5q29j4Mo9rndvdnjbQ7VN3NvIvL1xZTTavSGkIZW3f3tpuLmUGhQ4CDZpiHBcD4paYLmLt7m2-Gflw3y5h3BX-aKgmSYPRss"];

function App() {
  return (
    <div className="container-fluid vh-100">
      <Navbar/>
      <Title/>
      <div className="cards d-flex justify-content-around">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
