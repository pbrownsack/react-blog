import React from 'react';

const styles = {
    position: 'relative',
    minHeight: '100vh',
    width: '85%',
    margin: '0 15%',
    overflowX: 'none',
    backgroundColor: '#e9e9e9'
}

const PageView = (props) => {
    return <div className="page-view" style={styles}>{props.children}</div>
}

export default PageView;