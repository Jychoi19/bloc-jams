var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
                
    var revealPoint = function() {
        for (var i = 0; i < points.length; i++) {
            points[i].style.opacity = 1;
            points[i].style.transform = "scaleX(1) translateY(0)";
            points[i].style.msTransform = "scaleX(1) translateY(0)";
            points[i].style.WebkitTransform = "scaleX(1) translateY(0)";   
        };
    };
    revealPoint();
};

 window.onload = function() {
        if (window.innerHeight > 950) {
         aniatePoints(pointsArray);
        }
    window.addEventListener('scroll', function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
         }
    });
 }