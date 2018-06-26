import React from 'react';

import * as tools from '@imports/utils';
import { ExampleText } from '@imports/Text';

const FormExample = (props) => {
  const { exampleStore } = props;
  if (exampleStore.loading) {
    return <div> Loading... </div>;
  }

  return <div> Writing... </div>;
}

export default FormExample;