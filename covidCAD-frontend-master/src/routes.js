import React from 'react';
import  { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import NewExam from './pages/NewExam';
import Exams from './pages/Exams';
import Result from './pages/Result';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/exams" component={Exams} />
                <Route path="/exam/result" component={Result} />
                <Route path="/exam/new" component={NewExam} />
            </Switch>
        </BrowserRouter>
    );
}