import image from "../../images/deborah-rainford-zOlZgELBMRg-unsplash.jpg";

const RecipeInfo = () => {
  return (
    <div className="container">
      <h1 className="text-center">Recipe Info</h1>
      {/* two divs for image and description */}
      <div className="row row-cols-2">
        <div className="row">
          <div className="container col-md-6">
            <img
              src={image}
              alt="recipe"
              className="img-fluid d-block"
              height="400"
              width="400"
            />
          </div>
        </div>
        <div className="container">
          <h3 className="text-center">Recipe name</h3>
          <p className="m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            in! Fugit laborum dolorum autem obcaecati odio, nisi iusto facilis
            quae! Amet, qui. Fugit modi excepturi dolores tenetur ducimus
            provident corporis.
          </p>
          <div className="">
            <h5>serves 6</h5>
            <div className="row row-cols-2">
              <label className="d-none" htmlFor="servingAdjustment">
                Change serving size
              </label>
              <select name="servingAdjustment" id="">
                <option value="">Select One</option>
                <option value="half">1/2</option>
                <option value="double">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
