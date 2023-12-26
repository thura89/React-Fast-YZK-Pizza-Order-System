import LinkButton from "../../ui/LinkButton";

const EmptyCart = () => {
  return (
    <div className="px-5 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;
