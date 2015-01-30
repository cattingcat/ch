
React.render(
    <Timer start={Date.now()} />,
    document.querySelector('footer .timer')
);

React.render(
    <HistoryLog />,
    document.querySelector('aside')
);

var routing = [
    { pattern: /.*theme.*/, component: Theme },
    { pattern: /.*chat.*/, component: Chat },
]

React.render(
    <MainView routing={routing} />,
    document.querySelector('main > article')
);