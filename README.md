# QuizzApp.github.io/
 QuizzApp of Tai Nguyen 
 
 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif&display=swap" rel="stylesheet">
    <title>Quiz App</title>
   <link rel="stylesheet" type="text/css" href="QuizzApp.css">

</head>
<body>
    
    <h1 id="text"></h1>
    <h1 id="score"></h1>
    <div class="container">
        
        <div id="question-container" class="hide">
            <div id="question">Question</div>
            <div id="answer-buttons" class="btn-grid">
                <button class="btn"id="1">answer1</button>
                <button class="btn" id="2" >answer2</button>
                <button class="btn" id="3" >answer3</button>
                <button class="btn" id="4" >answer4</button>
                
            </div>
        </div>
        <div class="controls">
            <button id="start-btn" class="start-btn btn">Start</button>
            <button id="next-btn" class="next-btn btn hide">Next</button>
        </div>
    </div>
</body>
<script src="QuizzApp.js"></script>

</html>
