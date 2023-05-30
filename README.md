# Delivery_app
Front side: JS, React, Redux
Back side: Node.js, Express, MongoDB(mongoose)

Додаток для замовлення товарів з доставкою. 

Single page application з маршрутизацією BrowserRouting. Звертається до вланого серверу, доєднаний до бд MongoDB. 

1. Має строінку з товарами Shop, дані отримуються з БД (products), можна обрати товари і додати до кошика. Можна фільтрувати товари за магазинами. В одному заказі можна обрати товар лише одного продавця: при виборі першого товара, товари інших продавців стають неактивні. 

2. Сторінка кошика Shopping cart, дає можливість перевірити додані довари, змінити кількість або видалити товари з кошика. Підраховується загальна вартість замовлення. Необхідно вказати інформацію про замовника. Кнопка Submit відправляє замовлення на сервер: замовлення зберігаєть в бд (orders), замовник перевіряється та зберігається в бд (customers). 

3. Сторінка Orders (не для користувачів, лише щоб отримати список всіх замовлень) дає можливість визначити період та отримати список замовлень. 

4. Сервер https://delivery-app-api.vercel.app/ 
