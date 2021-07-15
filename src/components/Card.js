// sfc = codigo para armar un componente

const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.holoweb.net/~liam/pictures/2007-06-29-san-vivaldo/pages/img_4979/img_4979-300x200.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi omnis inventore qui eius iste ad non cum magnam id maiores tempore laborum illo velit distinctio, culpa soluta voluptas minus..</p>
            <a href="#" className="btn btn-primary">Find out more</a>
           </div>
        </div>
      );
}
 
export default Card;