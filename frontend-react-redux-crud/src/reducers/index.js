
import { combineReducers } from "redux";
import tutorials from "./tutorials.js";

export default combineReducers({ tutorials });


/* Because we only have a single store in a Redux application.
   We use reducer composition instead of many stores to split 
   data handling logic. 
   
 For example, if you have Auth Reducer that manages authentication
 logic, you can use combineReducers() like following code:
------------------------------------------------------------------

import { combineReducers } from "redux";
import tutorials from "./tutorials";
import auth from "./auth";

export default combineReducers({
  tutorials,
  auth
});
  
   
   */