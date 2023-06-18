

  // 1
  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }

  const date = '2023-06-18';
  const dayOfWeek = getDayOfWeek(date);
  console.log(`The day of week is ${dayOfWeek}`);


  function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
  }

  const currentDayOfWeek = getCurrentDayOfWeek();
  console.log(`Current day of week is ${currentDayOfWeek}`);


  // 2
  function getResult(numbers) {
    let sumOfSquares = 0;
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  const numbers = [2, 3, 4, 5];
  const result = getResult(numbers).toFixed(3);
  console.log(`The square root of the sum of squares is: ${result}`);


  // 3
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }


  function checkPrime(number) {
    const isNumberPrime = isPrime(number);
    if (isNumberPrime) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }
  const checknumber = 13;

  checkPrime(checknumber);

  // 4
  function openWindow(url, width, height) {
    const windowFeatures = `width=${width},height=${height}`;
    window.open(url, '_blank', windowFeatures);
  }

  function openExampleWindow() {
    const url = 'https://www.example.com';
    const width = 800;
    const height = 600;
    openWindow(url, width, height);
  }
  // openExampleWindow();

  // 5
  function browserDetect() {
    const browserName = navigator.userAgent;
    const browserVersion = navigator.appVersion;

    return {
      name: browserName,
      version: browserVersion
    };
  }
  function displayBrowserInfo() {
    const browserInfo = browserDetect();
    console.log(`Browser Name: ${browserInfo.name}`);
    console.log(`Browser Version: ${browserInfo.version}`);
  }
  displayBrowserInfo();

  // 6
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}`);
          console.log(`Longitude: ${longitude}`);
        },
        function (error) {
          console.log('Error retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  getCurrentLocation();

  // 7a
  document.body.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    alert(`Clicked at coordinates (${x}, ${y})`);
  });

  // 7b
  document.addEventListener("keydown", function(e) {
      // Get the key code of the pressed key
      var keyCode = e.keyCode;
      
      // Display an alert with the key code
      alert(`Key code: ${keyCode}`);
    });

    // 7c
    let imageSrcChange = document.getElementById('img');
    imageSrcChange.addEventListener('mouseover', function (e) {
         imageSrcChange.src = 'images/react.png';
    });

    // 8
    




