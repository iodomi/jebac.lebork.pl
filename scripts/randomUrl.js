function getRandomUrl() {
    var urls = [
      "https://theuselessweb.com/sites/rgb/",
      "https://theuselessweb.com/sites/checkbox-race/",
      "https://theuselessweb.com/sites/checkbox-race/",
      "https://checkbox.toys/scale/",
      "https://theuselessweb.com/sites/one-square-minesweeper/",
      "https://theuselessweb.com/sites/doughnut-kitten/",
      "https://theuselessweb.com/sites/pug-in-a-rug/",
      "https://theuselessweb.com/sites/long-doge-challenge/",
      "https://theuselessweb.com/sites/mondrian-and-me/",
      "https://theuselessweb.com/sites/potato-or-tomato/",
      "https://theuselessweb.com/sites/heeeeey-hoooooo/"
    ];

    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    
    return randomUrl;
  }

  function changeIframeUrl() {
    var iframeElement = document.getElementById("diframe");

    iframeElement.src = getRandomUrl();
  }

changeIframeUrl()