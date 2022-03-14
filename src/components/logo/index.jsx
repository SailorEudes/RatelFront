import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { LogoWrapper } from "./style";

const Logo = ({ className, variant, ...restProps }) => {
    return (
        <LogoWrapper className={className} $variant={variant} {...restProps}>
            <Link to="/">
                <StaticImage
                    src="../../assets/images/logo/ratelwhite.svg"
                    className="img-fluid static-img light-logo"
                    alt="logo"
                    width={160}
                    height={70}
                />
                <StaticImage
                    src="../../assets/images/logo/ratelblue.svg"
                    className="img-fluid static-img dark-logo"
                    alt="logo"
                    width={160}
                    height={70}
                />
            </Link>
        </LogoWrapper>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["white", "dark"]),
};

Logo.defaultProps = {
    justifyContent: "flex-start",
    variant: "dark",
};

export default Logo;
