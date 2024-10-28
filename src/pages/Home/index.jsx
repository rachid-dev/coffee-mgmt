import HomeHeader from '../../components/HomeHeader';
import { useNavigate } from 'react-router-dom';
import ProductList from '../../components/ProductList';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <HomeHeader />
        <ProductList/>
        <div className="position-fixed bottom-0 end-0 m-3">
          <button type="button" className="btn btn-success rounded-circle btn-lg" onClick={() => navigate('/product-add')} >
            +
          </button>
        </div>
    </div>

  );
}

export default Home;
