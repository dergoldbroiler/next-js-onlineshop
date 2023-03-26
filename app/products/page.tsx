import List from "./list"; 

const Products = async () => {
    return (
        <section className="jumbotron text-center h-100">
        <div className="container">
          <h1 className="jumbotron-heading m-5">Produkte</h1>
         
        </div>
  
      <div className="album py-5 bg-light h-100">
          <div className="container">
  
            <div className="row">
              
              {/* @ts-expect-error Server Component */}
              <List />
  
            </div>
           </div>
      </div>      
    </section>
    )

}


export default Products;