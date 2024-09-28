function highlight() {
        // Select all <strong> elements and change their color to green
        const boldWords = document.querySelectorAll("strong");
        boldWords.forEach((word) => {
          word.style.color = "green";
        });
      }

      function return_normal() {
        // Select all <strong> elements and change their color back to black
        const boldWords = document.querySelectorAll("strong");
        boldWords.forEach((word) => {
          word.style.color = "black";
        });
      }