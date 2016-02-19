var tabList = [
    { 'id': 1, 'name': 'Технологические процессы'},
    { 'id': 2, 'name': 'Технологические операции'},
    { 'id': 3, 'name': 'Инструменты'},
    { 'id': 4, 'name': 'Детали'}
];

ReactDOM.render(
    <Portal tabList={tabList}/>,
    document.getElementById('content')
);