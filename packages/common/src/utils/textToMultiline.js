import React from 'react';
import reactStringReplace from 'react-string-replace';

export default text => reactStringReplace(text, '\n', (_, i) => <br key={i} />);
