import axios from "axios";

export default {
    // Gets all books
    // getTopics: function() {
    //   return axios.get("/api/topics");
    // },
    // // Gets the book with the given id
    // getTopic: function(id) {
    //   return axios.get("/api/topic/" + id);
    // },
    // // Deletes the book with the given id
    // deleteTopic: function(id) {
    //   return axios.delete("/api/topics/" + id);
    // },
    // Saves a book to the database
    saveTopic: function(topicData) {
      return axios.post("/api/topics", topicData);
    }
  };