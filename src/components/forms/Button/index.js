import React from 'react';
import './styles.scss';

const Button = ({ children, ...othersProps }) => {
    return (
        <button className="btn" {...othersProps}>
            {children}
        </button>
    );
}

export default Button