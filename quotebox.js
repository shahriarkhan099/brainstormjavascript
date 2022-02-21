
// Quote-box
function changeColor(n) {
  switch (n) {
    case 1:
      document.querySelector(".quote").style.background = "#9AD0EC";
      document.querySelector("blockquote").className = ("c1");
      changeQuote();
      break;
    case 2:
      document.querySelector(".quote").style.background = "#E5E3C9";
      document.querySelector("blockquote").className = ("c2");
      changeQuote();
      break;
    case 3:
      document.querySelector(".quote").style.background = "#96CEB4";
      document.querySelector("blockquote").className = ("c3");
      changeQuote();
      break;
    case 4:
      document.querySelector(".quote").style.background = "#FFE6AB";
      document.querySelector("blockquote").className = ("c4");
      changeQuote();
      break;
  }
}

var randomNumber
function changeQuote() {
  randomNumber = Math.floor(Number(Math.random() * 10) + 1)
  switch (randomNumber) {
    case 1:
      document.querySelector("blockquote").innerHTML = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
      document.querySelector(".name").innerHTML = "Nelson Mandela";
      break;
    case 2:
      document.querySelector("blockquote").innerHTML = "Sometimes the questions are complicated and the answers are simple.";
      document.querySelector(".name").innerHTML = "Theodor Seuss Geisel";
      break;
    case 3:
      document.querySelector("blockquote").innerHTML = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.";
      document.querySelector(".name").innerHTML = "Oprah Winfrey";
      break;
    case 4:
      document.querySelector("blockquote").innerHTML = "Our lives are like the wind... or like sounds. We come into being, resonate with each other... Then fade away.";
      document.querySelector(".name").innerHTML = "Hayao Miyazaki";
      break;
    case 5:
      document.querySelector("blockquote").innerHTML = "Do not go where the path may lead, go instead where there is no path and leave a trail.";
      document.querySelector(".name").innerHTML = "Ralph Waldo Emerson";
      break;
    case 6:
      document.querySelector("blockquote").innerHTML = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.";
      document.querySelector(".name").innerHTML = "James Cameron";
      break;
    case 7:
      document.querySelector("blockquote").innerHTML = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
      document.querySelector(".name").innerHTML = "Thomas A. Edison";
      break;
    case 8:
      document.querySelector("blockquote").innerHTML = "In the end, it's not the years in your life that count. It's the life in your years.";
      document.querySelector(".name").innerHTML = "Abraham Lincoln";
      break;
    case 9:
      document.querySelector("blockquote").innerHTML = "Yet, even amidst the hatred and carnage, life is still worth living. It is possible for wonderful encounters and beautiful things to exist.";
      document.querySelector(".name").innerHTML = "Hayao Miyazaki";
      break;
    case 10:
      document.querySelector("blockquote").innerHTML = "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.";
      document.querySelector(".name").innerHTML = "Jim Rohn";
      break;
  }
}
