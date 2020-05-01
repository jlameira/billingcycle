interface State {
  selected?: string;
  visible?: any;
}
interface ActionType {
  type: string;
  payload: string;
}
const INITIAL_STATE: State = { selected: '', visible: false };

const TabReducer = (state: any = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload };
    case 'TAB_SHOWED':
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};

export default TabReducer;
