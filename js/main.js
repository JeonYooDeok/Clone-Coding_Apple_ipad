//장바구니//
const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')
//장바구니//

//장바구니 토글//
basketStarterEl.addEventListener('click', function(event){
  event.stopPropagation()
  if (basketEl.classList.contains('show')){
    hideBasket()
  }
  else{
    showBasket()
  }
})
basketEl.addEventListener('click', function(event){
  event.stopPropagation()
})
//장바구니 토글//

//장바구니 바깥 클릭시 닫기//
window.addEventListener('click',function(){  
  hideBasket()
})
//장바구니 바깥 클릭시 닫기//

//토글 기능 함수 선언 (호이스팅 되어서 밑에 작성했지만 위에서 사용가능)
function showBasket(){
  basketEl.classList.add('show')
}
function hideBasket(){
  basketEl.classList.remove('show')
}
//토글 기능 함수 선언 (호이스팅 되어서 밑에 작성했지만 위에서 사용가능)

// 검색
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click',showSearch)
searchCloserEl.addEventListener('click',hideSearch)
searchShadowEl.addEventListener('click',hideSearch)

function showSearch(){
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed')
  headerMenuEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach(function (el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
}
function hideSearch(){
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach(function (el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
}