import React from "react";
import ClientLogo from "@ui/client-logo";
import { Container } from "@ui/wrapper";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { SectionWrap } from "./style";
import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios';

const query = graphql`
query {
    strapiPartner {
        data {
          attributes {
            Link
            Title
            Logo {
              data {
                attributes {
                  formats {
                    thumbnail {
                      url
                    }
                  }
                }
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
        <SectionWrap >
            <Container>
                <StaticQuery
                    query={query}
                    render={data => (
                        <>

                            <SwiperSlider options={slider} vAlign="center">
                                {data.strapiPartner.data.map((partner) => {
                                    return (
                                        <SwiperSlide key={partner.id}>
                                            <ClientLogo
                                                layout={1}
                                                title="Image Ratel Roche"
                                                path={partner.attributes.Link}
                                                image={"http://localhost:1337" + partner.attributes.Logo.data.attributes.formats.thumbnail.url}
                                                hoverImage={"http://localhost:1337" + partner.attributes.Logo.data.attributes.formats.thumbnail.url}
                                            />
                                        </SwiperSlide>)
                                })}
                            </SwiperSlider>

                        </>
                    )}
                />

            </Container>
        </SectionWrap >
    );
}

const PartnerAreaOld = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.items && (
                    <SwiperSlider options={slider} vAlign="center">
                        {data.items?.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <ClientLogo
                                        layout={1}
                                        title={item.id}
                                        path={item.path}
                                        image={item.images?.[0]}
                                        hoverImage={item.images?.[1]}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </SwiperSlider>
                )}
            </Container>
        </SectionWrap>
    );
};

export default PartnerArea;
