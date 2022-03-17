import React from "react";
import PropTypes from "prop-types";
import ClientLogo from "@ui/client-logo";
import { Container } from "@ui/wrapper";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { ItemType } from "@utils/types";
import { SectionWrap } from "./style";
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
query {
    strapiPartner {
        data {
          attributes {
            Link
            createdAt
            Logo {
              data {
                attributes {
                  url
                }
                id
              }
            }
          }
          id
        }
    }
}
`;

const slider = {
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1499: {
            slidesPerView: 6,
        },
    },
};

const sliderStyle = {
    align: "center",
};

const PartnerArea = () => {
    return (
        <SectionWrap>
            <Container>
                <SwiperSlider options={slider} vAlign="center">

                    <StaticQuery
                        query={query}
                        render={data => (
                            <ul>
                                {data.strapiPartner.data.map(partner => (
                                    <SwiperSlide key={partner.id}>
                                        <ClientLogo
                                            layout={1}
                                            title={item.id}
                                            path={item.path}
                                            image={item.images?.[0]}
                                            hoverImage={item.images?.[1]}
                                        />
                                        <li key={partner.id}>{partner.attributes.Logo.data.attributes.url}</li>
                                    </SwiperSlide>
                                ))}
                            </ul>
                        )}
                    />
                </SwiperSlider>
            </Container>
        </SectionWrap>
    );
}


PartnerArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PartnerArea;
