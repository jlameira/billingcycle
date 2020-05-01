import React, { useState, useEffect } from 'react';

interface GridValues {
  children: any;
  cols: any;
}

const Grid: React.FC<GridValues> = ({ children, cols }: GridValues) => {
  const [value, setValue] = useState<string>('12');
  function toCssClasses(numbers: string) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';
    if (cols[0]) classes += `col-xs-${cols[0]} `;
    if (cols[1]) classes += `col-sm-${cols[1]} `;
    if (cols[2]) classes += `col-md-${cols[2]} `;
    if (cols[3]) classes += `col-xs-${cols[3]} `;

    setValue(classes);
  }

  useEffect(() => {
    toCssClasses(cols);
  }, [cols]);

  return <div className={value}>{children}</div>;
};

export default Grid;
