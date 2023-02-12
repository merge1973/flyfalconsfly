
import React from 'react';

import './cards.css';

function DocsCards({props}) {
    return (
        <docs-cards className={props}>
            {props.children}
        </docs-cards>
  );
}

export default DocsCards;
