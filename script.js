const toggleSwitch = document.querySelector('.toggle-switch');
let monthly = document.querySelectorAll('.monthly');
let annually = document.querySelectorAll('.annually');

toggleSwitch.addEventListener('click', (e)=>{
  e.preventDefault();
  toggleSwitch.classList.toggle('active');
  if (toggleSwitch.classList.contains('active')) {
    for (var i=0;i<monthly.length;i+=1){
      monthly[i].style.display = 'block';
      annually[i].style.display = 'none';
    }
  }else{
    for (var i=0;i<monthly.length;i+=1){
      monthly[i].style.display = 'none';
      annually[i].style.display = 'block';
    }
  }
});

