import React, { useState, useEffect } from 'react';
import { useRouteMatch, Switch, Route, useParams } from 'react-router-dom';
import Organization from './Organization';
import OrgCard from './styledComponents/OrgCard';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { useQuery, gql } from '@apollo/client';

const fetchOrgs = gql`
  query {
    getOrgs {
      id
      username
    }
  }
`;

function Organizations() {
  const { loading, err, data } = useQuery(fetchOrgs);
  console.log('loading', loading);
  console.log('err', err);

  const [list, setList] = useState([]);

  let { path, url } = useRouteMatch();

  function showList() {
    return list.map((org, i) => {
      console.log('org item', org);
      return <OrgCard key={i} id={org.id} name={org.username} />;
    });
  }

  async function gqlFetch() {
    if (data) {
      setList(data.getOrgs);
      console.log('udne');
    }
  }

  useEffect(() => {
    gqlFetch();
  }, [data]);

  return (
    <Container>
      <h1>orgniazations</h1>
      <Box display="flex" justifyContent="space-evenly">
        {showList()}
      </Box>
    </Container>
  );
}

export default Organizations;
