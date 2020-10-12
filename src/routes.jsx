import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Skills } from './containers/skills';
import { Projects } from './containers/projects';
import { Blog } from './containers/blog';
import { Contact } from './containers/contact';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/skills' component={() => <Skills />} />
        <Route exact path='/projects' component={() => <Projects />} />
        <Route exact path='/blog' component={() => <Blog />} />
        <Route exact path='/contact' component={() => <Contact />} />
    </Switch>
);
