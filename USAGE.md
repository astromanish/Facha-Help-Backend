This API is hosted online at [https://facha-help.herokuapp.com/]

This API has two endpoint in general, one for question and other for answer. Both endpoint has GET, POST, PATCH, DELETE method which you can use.

## Question Endpoint

### GET Method

Make a GET request to [https://facha-help.herokuapp.com/questions] and you will get all stored questions in database as JSON data.

Request Body Content : Nothing 

### POST Method

Make a POST request to [https://facha-help.herokuapp.com/questions] with your question in request body.

Request Body Content :

{
    q_body: (question),
    writer_name: (writer name),
}

### PATCH Method

Make a PATCH request to [https://facha-help.herokuapp.com/questions/(question-id)] with your question id and updated question in request body.

Request Body Content :

{
    q_body: (updated question),
    writer_name: (writer name),
}

### DELETE Method

Make a DELETE request to [https://facha-help.herokuapp.com/questions/(question-id)].

Request Body Content : Nothing

## Answer Endpoint

### GET Method

Just make a GET request to [https://facha-help.herokuapp.com/answers/(question-id)] and you will get all stored answers for this question in database as JSON data.

Request Body Content : Nothing

### POST Method

Make a POST request to [https://facha-help.herokuapp.com/answers/(question-id)] with your answer details in request body.

Request Body Content :

{
    a_body: (answer),
    writer_name: (writer name),
    ques_id: (question id),
}

### PATCH Method

Make a PATCH request to [https://facha-help.herokuapp.com/answers/(question-id)/(answer-id)] with your answer id and updated answer details in request body.

Request Body Content :

{
    a_body: (updated answer),
}

### DELETE Method

Make a DELETE request to [https://facha-help.herokuapp.com/answers/(question-id)/(answer-id)] with answer id in request body.

Request Body Content : Nothing

#### For more details on what's in that request body and JSON data obtained. Make request and see yourself (kuch khud bhi to kro ..xd). You can refer to Facha Help Frontend repo. on my profile for more insights.
