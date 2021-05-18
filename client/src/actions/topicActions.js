import axios from "axios";

import {GET_TOPICS} from "./types"

// Gets All the topics and stores them into state
export const getTopics = (userData) => dispatch => {
    axios.post("/api/topic", userData)
    .then(res => dispatch({
        type : GET_TOPICS, 
        payload: res.data
    })
    );
    //.then(res => history.push("/viewTopic"))
    //   .catch(err =>
    //     dispatch({
    //       type: GET_ERRORS,
    //       payload: err.response.data
    //     })
    //   );
  };