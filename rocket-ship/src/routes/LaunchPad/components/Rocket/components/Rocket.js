import React, { useState, Component, memo } from 'react';
import _isEqual from 'lodash.isequal';
import RocketCore from './RocketCore';

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(nextProps) {
    return !_isEqual(nextProps, this.props);
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
