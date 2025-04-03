import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";
export default class DisplayLottie extends Component {
    render() {
        const animationData = this.props.animationData;
        const style = this.props.style;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
        };
        return (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(Lottie, { animationData: defaultOptions.animationData, loop: defaultOptions.loop, style: style })));
    }
}
//# sourceMappingURL=DisplayLottie.js.map