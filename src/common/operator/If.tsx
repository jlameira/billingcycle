// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

export default (props: any) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
