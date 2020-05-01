/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Props from '../../model/Props';
import { selectTab } from '../tabActions';
import If from 'common/operator/If';

interface PropsHeader extends Props {
  target: any;
  icon: any;
  label: any;
  tab?: any;
  selectTab?: any;
}

export const TabHeader: any = ({ target, icon, label }: any) => {
  const [newTarget, setTarget] = useState(target);
  const tab = useSelector((state: any) => state.tab);
  const dispatch = useDispatch();
  const selected = tab.selected === newTarget;

  const changeTarget = () => {
    setTarget(target);
    dispatch(selectTab(target));
  };

  const visible: boolean = tab.visible[target];

  return (
    <If test={visible}>
      <li className={selected ? 'active' : ''}>
        <a
          href={undefined}
          data-toggle="tab"
          onClick={changeTarget}
          data-tager={target}
        >
          <i className={`fa fa-${icon}`}></i>
          {label}
        </a>
      </li>
    </If>
  );
};

export default TabHeader;
// class TabHeader extends React.Component<PropsHeader> {
//   render() {
//     const selected = this.props.tab.selected === this.props.target;
//     return (
//       <li className={selected ? 'active' : ''}>
//         <a
//           href={undefined}
//           data-toggle="tab"
//           onClick={() => this.props.selectTab(this.props.target)}
//           data-tager={this.props.target}
//         >
//           <i className={`fa fa-${this.props.icon}`}></i>
//           {this.props.label}
//         </a>
//       </li>
//     );
//   }
// }

// const mapStateProps = (state: any) => ({
//   tab: state.tab,
// });

// const mapDispatchToProps = (dispatch: any) =>
//   bindActionCreators({ selectTab }, dispatch);
// export default connect(mapStateProps, mapDispatchToProps)(TabHeader);
