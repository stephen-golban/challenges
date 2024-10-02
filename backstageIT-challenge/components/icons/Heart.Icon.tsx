import React from 'react';

import { SvgType } from './types';

const HeartIcon: React.FC<SvgType> = (props) => {
  return (
    <svg width={11} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.734 2.05A3.363 3.363 0 0 0 7.636 0 3.364 3.364 0 0 0 5.5.764 3.364 3.364 0 0 0 .992.98 3.355 3.355 0 0 0 0 3.366c0 .43.087.878.258 1.334.144.38.35.776.614 1.176.418.631.992 1.29 1.705 1.958A19.09 19.09 0 0 0 4.98 9.74l.301.196a.404.404 0 0 0 .44 0l.301-.196c.05-.033 1.219-.796 2.402-1.904.713-.668 1.287-1.327 1.705-1.958.263-.4.47-.795.614-1.176.171-.456.258-.905.258-1.335a3.33 3.33 0 0 0-.266-1.317ZM5.5 8.912S.968 5.966.968 3.366A2.39 2.39 0 0 1 3.365.982a2.4 2.4 0 0 1 2.136 1.297A2.4 2.4 0 0 1 7.636.982a2.39 2.39 0 0 1 2.398 2.384c0 2.6-4.533 5.547-4.533 5.547Z"
        fill="#fff"
      />
    </svg>
  );
};

export default HeartIcon;
