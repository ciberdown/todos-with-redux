export const NextAction = () => (dispatch, getState) => {
  //with Redux-thunk nested arrow functions
  const { Page_Number: thisState } = getState();
  dispatch({
    type: "NEXT",
    payload: thisState.page_number + 1,
  });
};
export const PrevAction = () => (dispatch, getState) => {
  const { Page_Number: thisState } = getState();
  if (thisState.page_number > 0)
    dispatch({
      type: "PREV",
      payload: thisState.page_number - 1,
    });
};
