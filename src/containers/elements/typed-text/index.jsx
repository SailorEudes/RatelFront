import React, { useEffect, useRef } from "react";
// import Typed from "react-typed";
// import "react-typed/dist/animatedCursor.css";
import Typed from "typed.js";
import { Container } from "@ui/wrapper";
import { SectionWrap, TypedTextWrap } from "./style";

const TypedText = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["graphic", "web", "interactive"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 40,
            backSpeed: 50,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <SectionWrap>
            <Container>
                <TypedTextWrap>
                    <span className="not-typical">
                        We are a creative studio <br /> focused on{" "}
                    </span>
                    <span ref={el}></span>
                    <span className="not-typical">design</span>
                </TypedTextWrap>
            </Container>
        </SectionWrap>
    );
};

export default TypedText;
