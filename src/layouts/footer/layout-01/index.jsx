import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import cn from "clsx";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { SocialType } from "@utils/types";
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom,
} from "./style";

const Footer = ({ data }) => {
    return (
        <FooterWrap>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={6} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <LogoWidget>
                                    <StaticImage
                                        src="../../../assets/images/logo/ratelblue.svg"
                                        alt="logo"
                                        width={160}
                                    />
                                </LogoWidget>
                                {data?.contact && (
                                    <TextWidget>
                                        {data.contact?.address && (
                                            <Text mb="10px">
                                                {data.contact.address}
                                            </Text>
                                        )}
                                        {data.contact?.email && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`mailto:${data.contact.email}`}
                                                    color="text"
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.email}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.phone && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`tel:${data.contact.phone}`}
                                                    fontWeight="800"
                                                    color="heading"
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.phone}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.website && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={data.contact.website}
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.website}
                                                </Anchor>
                                            </Text>
                                        )}
                                    </TextWidget>
                                )}
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={6} sm={6}>
                            <FooterWidget>
                                <Heading as="h6" mt="-3px" mb="20px">
                                    Support
                                </Heading>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor
                                            path="/"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Forum Support
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Help &amp; FAQ
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Contact Us
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Pricing and plans
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Cookies Policy
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row alignItems="center">
                        <Col md={6} textAlign={["center", null, "left"]}>
                            {data?.copyright && (
                                <Text pb={["15px", 0]}>
                                    &copy; {new Date().getFullYear()}{" "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.copyright,
                                        }}
                                    />
                                </Text>
                            )}
                        </Col>
                        <Col md={6} textAlign={["center", null, "right"]}>
                            {data?.socials && (
                                <Social
                                    space="16px"
                                    tooltip={true}
                                    shape="rounded"
                                    variant="outlined"
                                >
                                    {data.socials.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.link}
                                            title={social.title}
                                        >
                                            <i
                                                className={cn(
                                                    social.icon,
                                                    "link-icon"
                                                )}
                                            ></i>
                                        </SocialLink>
                                    ))}
                                </Social>
                            )}
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    );
};

Footer.propTypes = {
    data: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        copyright: PropTypes.string,
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.string,
            website: PropTypes.string,
        }),
    }),
};

export default Footer;
