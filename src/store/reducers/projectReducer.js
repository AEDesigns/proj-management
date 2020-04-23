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
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
