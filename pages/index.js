import Header from "./component/header"
import ProductType from "./component/productType"
import Benefit from "./component/benefit"
import Footer from "./component/footer"
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <ProductType/>
        <Benefit/>
      </main>
      <Footer />
    </>
    
    
  )
}
