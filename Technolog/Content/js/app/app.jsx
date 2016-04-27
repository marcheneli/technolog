var tabList = [
    { 'id': 1, 'name': 'Технологические процессы', 'linkName': 'processes'},
    { 'id': 2, 'name': 'Технологические операции', 'linkName': 'operations'},
    { 'id': 3, 'name': 'Инструменты', 'linkName': 'tools'},
    { 'id': 4, 'name': 'Детали', 'linkName': 'parts'}
];

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routers = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={Main}>
            <Route path="processes" component={TechProcessListSection} />
            <Route path="operations" component={TechOperationListSection} />
            <Route path="tools" component={ToolListSection}>
				<Route path=":toolId" component={ToolEditForm} />
			</Route>
            <Route path="parts" component={PartListSection} />
        </Route>
    </Router>
);

ReactDOM.render(
    routers,
    document.getElementById('content')
);