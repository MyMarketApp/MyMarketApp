function mapStateToProps(state) {
  return {
    user: state.user,
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch({ type: "SetUser", user }),
    addToCart: () => dispatch({ type: "addToCart" }),
  };
}

export { mapStateToProps, mapDispatchToProps };
