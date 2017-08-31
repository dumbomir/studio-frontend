import React from 'react';
import statusMap from './statusMap.json';

class BackendStatusBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiConnectionStatus: 200,
    };
  }

  componentDidMount() {
    fetch('/api/assets/course-v1:edX+DemoX+Demo_Course/?page=0&page_size=50&sort=sort&asset_type=', {
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== this.state.apiConnectionStatus) {
          this.setState({
            apiConnectionStatus: response.status,
          });
        }
      });
  }

  render() {
    return (this.apiConnectionStatus === 200) ?
      null :
      (
        <div className="api-error">
          {statusMap[this.state.apiConnectionStatus]}
        </div>
      );
  }
}

export default BackendStatusBanner;