This API is hosted online at [https://facha-help.herokuapp.com/]

This API has two endpoint in general, one for question and other for answer. Both endpoint has GET, POST, PATCH, DELETE method which you can use.

## Question Endpoint

### GET Method

Just make a GET request to [https://facha-help.herokuapp.com/questions] and you will get all stored questions in database as JSON data.

### POST Method

Make a POST request to [https://facha-help.herokuapp.com/questions] with your question in request body.

### PATCH Method

Make a PATCH request to [https://facha-help.herokuapp.com/questions] with your question id and updated question in request body.

### DELETE Method

Make a DELETE request to [https://facha-help.herokuapp.com/questions] with question id in request body.

## Answer Endpoint

### GET Method

Just make a GET request to [https://facha-help.herokuapp.com/(question-id)/answers] and you will get all stored answers for this question in database as JSON data.

### POST Method

Make a POST request to [https://facha-help.herokuapp.com/(question-id)/answers] with your answer details in request body.

### PATCH Method

Make a PATCH request to [https://facha-help.herokuapp.com/(question-id)/answers] with your answer id and updated answer details in request body.

### DELETE Method

Make a DELETE request to [https://facha-help.herokuapp.com/(question-id)/answers] with answer id in request body.

#### For more details on what's in that request body and JSON data obtained. Make request and see yourself (kuch khud bhi to kro ..xd). You can refer to Facha Help Frontend and Backend repo. on my profile for more insights.
