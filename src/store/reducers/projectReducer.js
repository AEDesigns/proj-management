const initState = {
  projects: [
    { id: 1, title: "Lorem Ipsum", content: "dolar set blah" },
    { id: 2, title: "Lorem Ipsum", content: "dolar set blah" },
    { id: 3, title: "Lorem Ipsum", content: "dolar set blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Projects", action.project);
      break;
    default:
      return state;
  }
  return state;
};

export default projectReducer;
