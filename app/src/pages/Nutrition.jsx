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
      <h1>Nutrition Essentials: Your Guide to Healthy Eating</h1>
      <h2>Welcome to Nutrition 101</h2>
      <p>
        Discover the fundamentals of nutrition and how to approach a healthy
        diet as a beginner. Whether you're looking to boost your energy levels,
        improve your overall health, or simply adopt healthier eating habits,
        this guide is here to help you get started.
      </p>

      <h2>Understanding the Basics</h2>
      <h3>1. Balanced Diet Essentials:</h3>
      <ul>
        <li>
          A balanced diet includes a variety of foods from all food groups:
          fruits, vegetables, lean proteins, whole grains, and healthy fats.
        </li>
        <li>
          Aim for a colorful plate with a mix of different foods to ensure
          you're getting a wide range of nutrients.
        </li>
      </ul>

      <h3>2. Portion Control:</h3>
      <ul>
        <li>
          Pay attention to portion sizes to avoid overeating. Use visual cues
          like your hand or a deck of cards to estimate appropriate portion
          sizes.
        </li>
      </ul>

      <h3>3. Hydration Matters:</h3>
      <ul>
        <li>
          Stay hydrated by driking plenty of water throughout the day. Aim for
          at least 8 glasses of water per day, and adjust based on your activity
          level and climate.
        </li>
      </ul>

      <h2>Approaching Diet as a Beginner</h2>
      <h3>1. Start Small:</h3>
      <ul>
        <li>
          Don't feel overwhelmed by trying to change everything at once. Start
          with small, achievable goals and gradually build upon them.
        </li>
      </ul>

      <h3>2.Focus on Whole Foods:</h3>
      <ul>
        <li>
          Choose whole, minimally processed foods over highly processed options.
          Whole foods are typically higher in nutrients and lower in added
          sugars, sodium, and unhealthy fats.
        </li>
      </ul>

      <h3>3. Listen to Your Body:</h3>
      <ul>
        <li>
          Pay attention to how different foods make you feel. Notice how certain
          foods affect your energy levels, mood, digestion, and overall
          well-being.
        </li>
      </ul>

      <h2>Nutritional Data Search Engine</h2>

      <h3>Explore Nutritonal Information:</h3>
      <ul>
        <li>
          Use our Nutritional Data Search Engine to look up the nutritional
          information of various foods.
        </li>
        <li>
          Simply enter the name of the food you're curious about and instantly
          access details such as calories, macronutrient breakdown, and
          micronutrient content.
        </li>
      </ul>

      <h3>Get Started:</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchFood", { required: true })} />

        <button type="submit">Search</button>
      </form>

      {data && (
        <div className={styles.nutritioninfo}>
          {data.foods.map((items) => (
            <>
              <h1>
                {items.food_name.charAt(0).toUpperCase() +
                  items.food_name.slice(1)}
              </h1>
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

      <h2>Start Your Journey to Better Nutrition</h2>
      <p>
        Whether you're looking to lose weight, gain energy, or simply improve
        your health, understanding the basics of nutrition is essential. Use
        this guide as a starting point for your journey to healthier eating
        habits.
      </p>
    </div>
  );
}

export default Nutrition;
