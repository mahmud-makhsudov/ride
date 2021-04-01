const headerProfileWrapper = document.querySelectorAll('.header__profile-wrapper')
const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', check)

function check() {
  checkbox.classList.toggle('active')
}

function fnClick(item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active')
    item.parentElement.querySelector('.profile-box').classList.toggle('active')
  })
}

headerProfileWrapper.forEach(fnClick)





const tabsBtn = document.querySelectorAll('.profile-page__tab');
const tabsItems = document.querySelectorAll('.profile-page__tab-content');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if( ! currentBtn.classList.contains('active') ){

      tabsBtn.forEach(function(item){
        item.classList.remove('active');
      });
  
      tabsItems.forEach(function(item){
        item.classList.remove('active');
      });
  
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    };
  });
}

