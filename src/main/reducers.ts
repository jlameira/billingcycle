import { combineReducers } from 'redux';
import dashboardReducer from 'Dashboard/reducer/dashboardReducer';
import TabReducer from 'common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: TabReducer,
});

export default rootReducer;
