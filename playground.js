element.animate([{ // from
    opacity: 0,
    color: "#fff"
  },
  { // to
    opacity: 1,
    ​color: "#000"
  }
], 2000);


document.getElementById("tunnel").animate([
  // keyframes
  {
    transform: 'translateY(0px)'
  },
  {
    transform: 'translateY(-300px)'
  }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});