const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/init.js')}/>
            <script src={withPrefix('js/page-load.js')}/>
            <script src={withPrefix('js/page-unload.js')}/>
            
        </React.Fragment>
    ]);

};
