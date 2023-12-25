window.onload = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        var apiKey = '4987340a7f0a4fe99b7e92cbc8c7599f';
        var apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                var country = data.results[0].components.country;
    
                // Check if the country is Thailand
                if (country === 'Thailand') {
                    alert('Not available in Myanmar');
                    var allElements = document.querySelectorAll('*');
                    allElements.forEach(function(element) {
                        element.style.display = 'none';
                    });
                }
            })
            .catch(error => console.error('Error fetching geocoding data:', error));
    });
}