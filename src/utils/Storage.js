const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  
  const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const remove = (key) => {
    localStorage.removeItem(key);
  };
  
  export { get, set, remove };
  


  // localStorage.setItem("1", JSON.stringify(action.payload));