import ProductCardStack from "./Home/ProductCard";

const DropDown = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_mobile" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <ProductCardStack />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_mobile">
          Close
        </label>
      </div>
    </>
  );
};

export default DropDown;
