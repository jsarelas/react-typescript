import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from 'containers/Home';
import ES6 from 'containers/ES6';
import Example from 'containers/Example';
//import BasicHoc from '../../hoc/BasicHoc';
import BasicHocES6 from 'hoc/BasicHoc/es6';
import BasicRenderProps from 'renderProps/BasicRenderProps';
import Declaritive from 'containers/Declaritive';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/es6/" component={ES6} />
            <Route path="/examples/" component={Example} />
            <Route path="/hocES6/" component={BasicHocES6} />
            <Route path="/renderprops/" component={BasicRenderProps} />
            <Route path="/declaritive/" component={Declaritive} />
        </Switch>
    )
}

export default Routes;