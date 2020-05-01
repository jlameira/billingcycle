import { Summary, DashboardModel } from '../model/dashboardModel';

const INITIAL_STATE = {
  summary: { credit: 0, debt: 0 } as Summary,
} as DashboardModel;

const dashBoardReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
};

export default dashBoardReducer;
