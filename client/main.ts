import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/renderRoutes';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
