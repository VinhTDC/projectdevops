import CustomerItem from "./CustomerItem";
export default function Customer(custo) {
    return (
        <div className="customer_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="customer_taital">What says customers</h1>
              </div>
            </div>
            <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {custo.customer.map((customer) => (
                  <CustomerItem
                    key={customer.id}
                    id={customer.id}
                    fullname={customer.fullname}
                    evaluate={customer.evaluate}
                    image={customer.image}
                  />
                ))}
                
              </div>
              <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      );
};



