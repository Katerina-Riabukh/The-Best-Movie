import { PropagateLoader } from "react-spinners"
import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader1 = () => {

    return (

        <PropagateLoader color="#36d7b7" />
    )
}



export const CatalogMagic = ({
    width = 1366,
    heading = { width: 140, height: 1 },
    row = 2,
    column = 5,
    padding = 12,
    borderRadius = 4,
    ...props
}) => {
    const list = []

    let height

    for (let i = 1; i <= row; i++) {
        for (let j = 0; j < column; j++) {
            const itemWidth = (width - padding * (column + 1)) / column

            const x = padding + j * (itemWidth + padding)

            const height1 = 390

            const height2 = 20

            const height3 = 1

            const space =
                padding + height1 + (padding / 2 + height2) + height3 + padding * 4

            const y1 = padding + heading.height + padding * 2 + space * (i - 1)

            const y2 = y1 + padding + height1

            const y3 = y2 + padding / 2 + height2

            list.push(
                <>
                    <rect
                        x={x}
                        y={y1}
                        rx={borderRadius}
                        ry={borderRadius}
                        width={itemWidth}
                        height={height1}
                    />
                    <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
                    <rect
                        x={x}
                        y={y3}
                        rx={0}
                        ry={0}
                        width={itemWidth * 0.6}
                        height={height3}
                    />
                </>
            )

            if (i === row) {
                height = y3 + height3
            }
        }
    }

    return (
        <ContentLoader
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            backgroundColor="rgba(#9c9ca90,0.36)"
            foregroundColor="#dbdbdb2b"
            {...props}
        >
            {heading && (
                <rect
                    x={padding}
                    y={padding}
                    rx={0}
                    ry={0}
                    width={heading.width}
                    height={heading.height}
                />
            )}
            {list}
        </ContentLoader>
    )
}


export const EventsLoader = props => (
    <ContentLoader

        width={1440}
        height={700}
        viewBox="-60 0 700 300"
        backgroundColor="#f5f5f58b"
        foregroundColor="#dbdbdb2b"
        {...props}
    >
        <rect x="4" y="8" rx="3" ry="3" width="3" height="788" />
        <rect x="6" y="689" rx="3" ry="3" width="669" height="3" />
        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
        <rect x="55" y="42" rx="0" ry="0" width="174" height="300" />
        <rect x="280" y="113" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="123" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="133" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="143" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="51" rx="3" ry="3" width="220" height="8" />
        <rect x="280" y="159" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="172" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="189" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="200" rx="3" ry="3" width="390" height="2" />
        <rect x="280" y="220" rx="3" ry="3" width="110" height="2" />
        <rect x="280" y="230" rx="3" ry="3" width="110" height="2" />
        <rect x="5" y="8" rx="3" ry="3" width="769" height="3" />
        {/* <rect x="406" y="223" rx="14" ry="14" width="72" height="32" /> */}
        {/* <rect x="505" y="224" rx="14" ry="14" width="72" height="32" /> */}
        {/* <rect x="376" y="41" rx="3" ry="3" width="231" height="29" /> */}
    </ContentLoader>
)

