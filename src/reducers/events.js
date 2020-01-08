import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events= {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // [{"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."}]
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }   
}; 