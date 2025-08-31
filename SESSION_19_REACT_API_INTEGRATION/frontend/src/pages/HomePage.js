// import logo from './logo.svg';
import '../App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {

    let navigate = useNavigate();

    const [foods, setFoods] = useState([]);

    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState(0);

    const handleGetFoods = async () => {
        const response = await axios.get('http://localhost:2020/food')
        setFoods(response.data)
    }

    const handleCreateFood = async () => {
        const dish = {
            name: foodName,
            price: foodPrice,
            id: Math.random()
        }

        await axios.post('http://localhost:2020/food', dish)

        setFoodName("")
        setFoodPrice("")

        handleGetFoods();
    }


    useEffect(() => {
        handleGetFoods()
    }, [])




    return (
        <div className="App">
            <header className="App-header">

                <span>
                    <span onClick={() => navigate('')}>Home Page</span>
                    <span onClick={() => navigate('contact')}>Contact Page</span>
                </span>

                {
                    foods.map((item) => {
                        return (
                            <p>
                                {item.name}
                            </p>
                        )
                    })
                }

                <div style={{ border: "1px solid white" }}>
                    <label htmlFor="foodName">Food Name</label>
                    <input type="text" onChange={(e) => setFoodName(e.target.value)} />
                    <br></br>
                    <label htmlFor="foodPrice">Food Price</label>
                    <input type="text" onChange={(e) => setFoodPrice(e.target.value)} />
                    <br></br>
                    <button onClick={handleCreateFood}>Create Dish</button>
                </div>


            </header>
        </div>
    );
}

export default HomePage;
