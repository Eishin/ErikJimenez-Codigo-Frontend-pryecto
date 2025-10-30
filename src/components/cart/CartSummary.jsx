export const CartSummary = ({ total, onCheckout, user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center text-xl font-bold mb-6">
        <span>Total:</span>
        <span className="text-purple-600">${total.toFixed(2)}</span>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
      >
        {user ? 'Finalizar Compra' : 'Iniciar sesión para comprar'}
      </button>
    </div>
  );
};