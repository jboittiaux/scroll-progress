import React from 'react';
import ReactDOM from 'react-dom';

let pct = 0;
const nodes = document.querySelectorAll('.sp-container');

const handleScroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    pct = (winScroll / height) * 100;

    render();
};

const render = () => {
    let className = 'sp-bar';
    className+= pct === 100 ? ' complete' : '';

    const progress = (<div
        className={ className }
        style={{ width: pct + '%' }}
    ></div>);

    console.log(nodes.forEach((el) => {
        ReactDOM.render(progress, el);
    }));
};

handleScroll();

window.addEventListener('scroll', handleScroll);
