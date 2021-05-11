import axios from "axios";

export default {
    
    getTopics: function() {
      return axios.get("/api/topic");
    },
    
    getTopic: function(id) {
      return axios.get("/api/topic" + id);
    },
   
    deleteTopic: function(id) {
      return axios.delete("/api/topic" + id);
    },
 
    saveTopic: function(topicData) {
      return axios.post("/api/topic", topicData);
    }
  };