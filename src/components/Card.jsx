import React from 'react'
import './Card.css'


const Card = ({ cname, capital }) => {
    return (
        <div className="container">
            {/* <p className="container-title">
                Listing all countries 
            </p> */}
            <div className="row">
                <div className="card">
                    <div className="container-card bg-green-box">
                        <svg
                            width={80}
                            height={80}
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x={1}
                                y={1}
                                width={118}
                                height={118}
                                rx={24}
                                fill="url(#paint0_linear_1366_4547)"
                                fillOpacity="0.15"
                                stroke="url(#paint1_radial_1366_4547)"
                                strokeWidth={2}
                            />
                            <path
                                d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z"
                                fill="#54E8A9"
                            />
                            <path
                                d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z"
                                fill="#2FCB89"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1366_4547"
                                    x1="0.0063367"
                                    y1="0.168432"
                                    x2="120.853"
                                    y2="119.009"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2FCB89" stopOpacity="0.7" />
                                    <stop offset="0.489583" stopColor="#2FCB89" stopOpacity={0} />
                                    <stop offset={1} stopColor="#2FCB89" stopOpacity="0.7" />
                                </linearGradient>
                                <radialGradient
                                    id="paint1_radial_1366_4547"
                                    cx={0}
                                    cy={0}
                                    r={1}
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)"
                                >
                                    <stop stopColor="#54E8A9" />
                                    <stop offset={1} stopColor="#1A3E31" stopOpacity="0.2" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <p className="card-title">{cname}</p>
                        <p className="card-description">
                            {capital}
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card