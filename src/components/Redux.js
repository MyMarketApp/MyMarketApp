function mapStateToProps(state) {
  return {
    user: state.user,
    orders: state.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch({ type: "SetUser", user }),
    setOrders: (orders) => dispatch({ type: "SetOrders", orders }),
    removeOrder: (index) => dispatch({ type: "RemoveOrder", index }),
    addOrder: (order) => dispatch({ type: "AddOrder", order }),
    updateOrder: (id, quantity) =>
      dispatch({ type: "UpdateOrder", id, quantity }),
  };
}

export { mapStateToProps, mapDispatchToProps };
