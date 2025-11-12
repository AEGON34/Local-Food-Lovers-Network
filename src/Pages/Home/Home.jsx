
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>

            <div className="text-center text-xl font-bold mt-10">Top rated  </div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
         {data.map(item => <ModelCard key={item._id} item={item}/>)}
      </div>
            
        </div>
    );
};

export default Home;