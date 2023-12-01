const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

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