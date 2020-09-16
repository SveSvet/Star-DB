## Паттерны разработки на React

### Использование функций
- Функции, которые мы передаем коспоненты, могут быть не только обработчиками событий;
- Функция может инкапсулировать получение данных (в таком случае компонент становится независимым от источника данных)

### Render-функция
- Рендер-функция - это паттерн, который предполагает передачу функции в компонент, которая рендерит часть компонента или весь компонент. 
- Такая функция обычно передает строку или весь элемент. 

### Свойства-элементы
- В качестве значения можно передавать react-элемент: 
`<Card title={<h1>Hi</h1>} />`
- Так можно создавать элементы-контейнеры;
- ... или элементы, которые умеют выбирать или рендерить в зависимости от условия (ошибка, загрузка и т.п.).

### Children
- Компоненту можно передать одно из свойств, переместив его в тело элемента;
- Это свойство будет доступно через props.children;
- Поддерживает любые типы данных: компоненты, типы и др. 
- Можно использовть функцию React.Children.map() для упрощения обработки props.children;
- Child-элементы можно заменять, оборачивать в другие компоненты или скрывать (если вернуть null);

### Клонирование элементов
- React-элементы нельзя изменять, они считаются immutable;
- ...но можно осоздавать модифицированные копии с помомщью React.cloneElement();
- Элементам с помощью React.cloneElement() можно добавлять новые свойства и пропсы. Этим свойством может стать state;

