import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Card from "./components/Card"
import Footer from "./components/Footer"

const links = ["https://www.holoweb.net/~liam/pictures/2007-06-29-san-vivaldo/pages/img_4979/img_4979-300x200.jpg","https://diccionarioactual.com/wp-content/uploads/2017/01/l%C3%ADnea-300x200.jpg","https://diccionarioactual.com/wp-content/uploads/2016/10/foliaci%C3%B3n-300x200-2.jpg","https://lh3.googleusercontent.com/proxy/ilcMOooM4ZpHxYkyKFTHnmnZ6xF0Q7HO9sSkftJU1e7VrKX5NzPabMX02FBEcnqQb8l7_BmW14o5ydDa38JM5BSepK3xhrtG1rIviZRkFAeJUijL0Grc6w553GrdUQtJLX4TreG1CZULrk9SLGE"];


// React interpreta solo los arrays por eso está bueno pasarle arrays

// const elementosHtml = [<h1>Hola</h1>,<h2>A</h2>,<i>as</i>]
function App() {
  return (
    <div className="container-fluid vh-100">
      <Navbar/>
      <Title/>
      <div className="cards d-flex justify-content-around flex-wrap">
        {/* Aca lo que hacemos es mapear el array (este metodo nos devuelve otro array), y usamos el parametro
        en un prop del elemento JSX Card: */}
        {links.map((url)=><Card url={url} />)}
        {/* Este es el array de elementos html que directamente puede interpretar React */}
        {/* {elementosHtml} */}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
