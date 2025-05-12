import { useParams } from "react-router"
import { useGetProductQuery } from "./productApi";
import { baseUrl } from "../../app/mainApi";
import { Button, Card, IconButton, Rating } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {

  const { id } = useParams();

  const { data, isLoading, error } = useGetProductQuery(id);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  console.log(data);

  return (
    <div className="grid grid-cols-3 my-5 gap-5">
      <div>
        <img src={`${baseUrl}${data.image}`} alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="font-medium">{data.title}</h2>
        <p className="text-red-400">Rs.{data.price}</p>
        <Rating readonly value={data.rating} />
        <p>{data.description}</p>
      </div>

      <ProductAddToCart />

    </div>
  )
}



function ProductAddToCart() {
  const [count, setCount] = useState(0);
  const { user } = useSelector((state) => state.userSlice);



  return (
    <Card className="flex items-center space-y-7 justify-center">
      <h1>Product Add</h1>
      <div className="flex gap-3">

        <IconButton
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          size="sm">
          <i className="fas fa-minus" />
        </IconButton>

        <h1>{count}</h1>

        <IconButton
          onClick={() => setCount(count + 1)}
          size="sm">
          <i className="fas fa-add" />
        </IconButton>

      </div>
      <Button disabled={!user || user?.role === 'Admin'}>Add To Cart</Button>
    </Card>
  )
}
