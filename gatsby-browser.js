let initialized = false;

exports.onInitialClientRender = () => {
    initialized = true;
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};

exports.onRouteUpdate = () => {
    if (initialized && 'onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};

exports.onPreRouteUpdate = () => {
    if (initialized && 'onGatsbyPreRouteUpdate' in window && typeof window.onGatsbyPreRouteUpdate === 'function') {
        window.onGatsbyPreRouteUpdate();
    }
};
