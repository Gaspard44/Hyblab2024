fetch('data/option.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('educationButton').addEventListener('click', function() {
      showOptions(data.Education.options, data.Education.responses);
    });

    document.getElementById('sportButton').addEventListener('click', function() {
      showOptions(data.Sport.options, data.Sport.responses);
    });

    document.getElementById('residenceButton').addEventListener('click', function() {
      showOptions(data.Residence.options, data.Residence.responses);
    });

    document.getElementById('newsButton').addEventListener('click', function() {
      showOptions(data.News.options, data.News.responses);
    });

    function showOptions(options, responses) {
      var contentDiv = document.getElementById('optionContent');
      contentDiv.innerHTML = ''; // clear the content div
    
      // create a new <div> element to hold the text response
      var textResponseDiv = document.createElement('div');
      textResponseDiv.id = 'textResponse'; // set an id for the div
    
      options.forEach(function(option) {
        var button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
          var response = responses[option];
          var textNode = document.createTextNode('content: ' + option + '  response: ' + response);
          // add the text response to the textResponseDiv
          textResponseDiv.innerHTML = '';
          textResponseDiv.appendChild(textNode);
        });
        contentDiv.appendChild(button);
      });
    
      contentDiv.appendChild(textResponseDiv); // add the textResponseDiv to the contentDiv
    }    
  })
  .catch(error => {
    console.error('Error loading option.json:', error);
  });
