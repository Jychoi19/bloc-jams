var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var revealPoint = function(point) {
            point.style.opacity = 1;
            point.style.transform = "scaleX(1) translateY(0)";
            point.style.msTransform = "scaleX(1) translateY(0)";
            point.style.WebkitTransform = "scaleX(1) translateY(0)";   
    };
//forEach(pointsArray, revealPoint);
[].forEach.apply(pointsArray, revealPoint);
};

 window.onload = function() {
        if (window.innerHeight > 950) {
         animatePoints(pointsArray);
        }
    window.addEventListener('scroll', function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
         }
    });
 }