
// Fetch the JSON data from the data.json file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Access the HTML element
        var reactionScore = document.getElementById('reaction-score');
        var reactionTitle = document.getElementById('reaction-title');
        var memoryScore = document.getElementById('memory-score');
        var verbalScore = document.getElementById('verbal-score');
        var visualScore = document.getElementById('visual-score');
        

        // Check if the JSON data contains the category
        var reactionData = data.find(item => item.category === "Reaction");
        var memoryData = data.find(item => item.category === "Memory");
        var verbalData = data.find(item => item.category === 'Verbal');
        var visualData = data.find(item => item.category === 'Visual');

        if (reactionData) {
            // Populate the HTML element with the score from the JSON data
            reactionScore.textContent = reactionData.score;
            reactionTitle.textContent = reactionData.category;
        } else {
            // Handle the cases where data is not found
            reactionScore.textContent = "N/A";
        }

        if (memoryData) {
            memoryScore.textContent = memoryData.score;
        } else {
            memoryScore.textContent = "N/A";
        }

        if (verbalData) {
            verbalScore.textContent = verbalData.score;
        } else {
            verbalScore.textContent = "N/A";
        }

        if (visualData) {
            visualScore.textContent = visualData.score;
        } else {
            visualScore.textContent = "N/A";
        }
    }) // Catch any erros
    .catch(error => console.error('Error loading JSON data:', error));
