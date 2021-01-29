# Thymeleaf

## variable expression '$'
- <p> today is: <span th:text="${today}"> 13 february 2020</span> </p>
    - Context에 포함된 변수사용. 기존과 유사

## selection vairable expression '*'
- <p>Name : <span th:text="*{firstName}"> Sebastian </span>.</p>
    - $와 유사하지만 가장 가까운 DOM에 th:object를 찾아서 표현,

## message expressions '#'
- <p th:text="#{home.welcome(${session.user.name})}">인사말(고객명)</p>
    - `home.welcome = HI!! {0}` 이런식으로 message properties 파일위에 정의한경우.

## link url expressions '@' (not override)
- `<a href="detail.html" th:href="@{/order/{orderId}/details(orderId=${o.id})}">view</a>`
    - 링크 상세 표시