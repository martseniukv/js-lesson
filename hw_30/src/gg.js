React.Component.prototype.render = function(...args) {
    console.log(`Component "${this.constructor.name}" rendered!`);
    return originalRender.apply(this, args);
};