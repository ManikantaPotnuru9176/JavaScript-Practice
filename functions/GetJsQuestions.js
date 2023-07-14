exports = function({ query, headers, body}, response) {
   const questions = context.services
   .get("mongodb-atlas")
   .db("JS")
   .collection("js-50-questions")
   .find({})
   .toArray();
   
   return questions;
};
