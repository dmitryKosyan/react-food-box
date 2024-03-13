import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={462}
        viewBox="0 0 300 462"
        backgroundColor="rgb(28 27 27)"
        foregroundColor="rgb(18, 18, 18);"
        {...props}
    >
        <rect x="12" y="224" rx="0" ry="0" width="293" height="18" />
        <rect x="158" y="349" rx="0" ry="0" width="2" height="1" />
        <rect x="10" y="263" rx="0" ry="0" width="292" height="44" />
        <rect x="23" y="13" rx="0" ry="0" width="52" height="0" />
        <circle cx="154" cy="115" r="92" />
        <circle cx="151" cy="119" r="10" />
        <rect x="12" y="327" rx="0" ry="0" width="290" height="17" />
        <rect x="23" y="362" rx="0" ry="0" width="81" height="22" />
        <rect x="67" y="370" rx="0" ry="0" width="12" height="0" />
        <rect x="8" y="402" rx="0" ry="0" width="304" height="41" />
    </ContentLoader>
)

export default Skeleton