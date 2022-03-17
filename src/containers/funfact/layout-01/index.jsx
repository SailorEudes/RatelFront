import React from "react";
import Counter from "@components/counter/layout-01";
import { Container } from "@ui/wrapper";
import { SectionWrap, GridWrap, Grid } from "./style";
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    strapiStat {
      data {
        id
        attributes {
          Title
          Number
          Description
      }
    }
    }
  }
`;

const FunFactArea = () => {
  return (
    <SectionWrap>
      <Container>

        <GridWrap >
          <StaticQuery
            query={query}
            render={data => (
              <>
                {data.strapiStat.data.slice(0, 4).map(stat => (
                  <Grid key={stat.id}>
                    <Counter
                      title={stat.attributes.Title}
                      countTo={stat.attributes.Number}
                      text={stat.attributes.Description}
                    />
                  </Grid>
                ))}
              </>
            )}
          />
        </GridWrap>

      </Container>
    </SectionWrap>
  );
};

export default FunFactArea;
