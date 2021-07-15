// sfc = codigo para armar un componente

const Card = ({url}) => {
    return (
        <div className="card  mt-3 mt-xl-0 mb-4" style={{width: "18rem"}}>
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi omnis inventore qui eius iste ad non cum magnam id maiores tempore laborum illo velit distinctio, culpa soluta voluptas minus..</p>
            <a href="#" className="btn btn-primary">Find out more</a>
           </div>
        </div>
      );
}
 
export default Card;