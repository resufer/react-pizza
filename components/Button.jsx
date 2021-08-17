import React from 'react';
import cn from 'classnames';

export default function Button({ outline, className, children }) {
  return (
    <>
      <button
        className={cn('button', className, {
          'button--outline': outline,
        })}
      >
        {children}
      </button>
    </>
  );
}
