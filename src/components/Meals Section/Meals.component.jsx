import "./Meals.styles.css";

export default function Meals() {
  return (
    <section className="section-meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="meal">
          <img
            src="/img/meals/meal-1.jpg"
            alt="Japanese Gyozas Meal"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  Multiscore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal">
          <img
            src="/img/meals/meal-2.jpg"
            alt="Avocado Salad"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  Multiscore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon> <span>Vegan</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon> <span>Keto</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon> <span>Paleo</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipies">
        <a href="/" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}
