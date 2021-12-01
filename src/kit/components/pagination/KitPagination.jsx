import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import './KitPagination.scss';

const KitPagination = (props) => {
  const {
    total,
    actual,
    onChange,
  } = props;

  return (
    <div className="kit-pagination">
      <Pagination count={total} page={actual} onChange={onChange} color="primary" />
    </div>
  );
};

export default KitPagination;
