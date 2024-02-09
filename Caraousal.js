import React from 'react';

export default function Caraousal() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-caption" style={{zIndex:"1"}}>
                    <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/id/1497187093/photo/variety-of-products-on-the-different-aisles-and-shelfs-at-the-supermarket.jpg?s=1024x1024&w=is&k=20&c=2npDaMqpJnMBLwXFcCbbTabhMeTOpz3oETnTRNAMXEI=" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/871227828/photo/unrecognizable-woman-shops-for-produce-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=_d8owt_E53JYBQPJWmKFBJDkXWIYg0eiS1Ur6WLm_n8=" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
