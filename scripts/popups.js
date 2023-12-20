// Something TODO

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
  
    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'block';
    
        setTimeout(function () {
          popup.style.display = 'none';
        }, 3000);
      });
  
    closePopupButton.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  });
  
