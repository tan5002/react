export default function Product(props: { 
    imgSrc: string; 
    title: string; 
    content: string; 
    isBestSeller: boolean; 
    }) { 
    const { imgSrc, title, content, isBestSeller } = props; 
    // let bestSellerLabel; 
    // if (isBestSeller) { 
    // bestSellerLabel = ( 
    // <span className="badge rounded-pill text-bg-danger">Best Seller</span> 
    // ); 
    // } else { 
    // bestSellerLabel = <></>; 
    // } 
    return( 
    <div className="card col-md-4" style={{ width: "18rem" }}> 
    <img src={imgSrc} className="card-img-top" alt="..." /> 
    <div className="card-body"> 
    <h5 className="card-title">{title}</h5> 
    {isBestSeller ? (
          <span className="badge rounded-pill text-bg-danger">Best Seller</span>
        ) : null}
    {/* {bestSellerLabel}  */}
    <p className="card-text">{content}</p> 
    <a href="#" className="btn btn-primary"> 
    Buy Now 
    </a> 
    </div> 
    </div> 
    );
    }
