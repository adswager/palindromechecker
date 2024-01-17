document.addEventListener('DOMContentLoaded', function () {
  
    const button = document.getElementById('check-btn');
    const input = document.getElementById('text-input');
    const result = document.getElementById('result');
  
    if (button) {
      button.addEventListener('click', () => {
        if (input.value === '') {
          alert('Please input a value');
        }
      });
    }
  
  });
  function palcheck() {
    const input = document.getElementById('text-input');
    const result = document.getElementById('result');
    const str = input.value;
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palindrome = cleanedStr.split('').reverse().join('');
  
    console.log('Input:', cleanedStr);
    console.log('Reversed:', palindrome); 
  
    if (cleanedStr === palindrome) {
      result.innerText = `${input.value} is a Palindrome`;
    } else {
      result.innerText = `${input.value} is not a palindrome`;
    }
  }
  
  
  