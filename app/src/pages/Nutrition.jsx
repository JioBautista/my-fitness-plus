import React from "react";
import styles from "../styles/nutrition.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

function Nutrition() {
  const [data, setData] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:3000/nutrition/${data.searchFood}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  console.log(data);
  return (
    <div className={styles.container}>
      <h1>Search food for nutritional data</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchFood", { required: true })} />

        {errors.searchFood && <span>This field is Required</span>}
        
        <button type="submit">Search for food</button>
      </form>

      {data && (
        <div className={styles.nutritioninfo}>
          {data.foods.map((items) => (
            <>
              <h1>{items.food_name}</h1>
              <img src={items.photo.thumb} />
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Nutrition Facts</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    <tr>
                      <td>Calories</td>
                      <td>{items.nf_calories}</td>
                    </tr>
                    <tr>
                      <td>Fat</td>
                      <td>{items.nf_total_fat}</td>
                    </tr>
                    <tr>
                      <td>Carbohydrates</td>
                      <td>{items.nf_total_carbohydrate}</td>
                    </tr>
                    <tr>
                      <td>Protein</td>
                      <td>{items.nf_protein}</td>
                    </tr>
                    <tr>
                      <td>Sugars</td>
                      <td>{items.nf_sugars}</td>
                    </tr>
                    <tr>
                      <td>Fiber</td>
                      <td>{items.nf_dietary_fiber}</td>
                    </tr>
                    <tr>
                      <td>Serving Unit</td>
                      <td>{items.serving_unit}</td>
                    </tr>

                    <tr>
                      <td>Grams</td>
                      <td>{items.serving_weight_grams}</td>
                    </tr>
                  </>
                </tbody>
              </table>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nutrition;
