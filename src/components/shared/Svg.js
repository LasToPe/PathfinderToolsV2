import React from 'react';

export default class Svg extends React.PureComponent {
    get editIcon() {
        return (
            <svg version="1.1" viewBox="0 0 383.947 383.947" className="icon icon-edit">
                <g>
                    <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893" />
                    <path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04 C386.027,77.92,386.027,64.373,377.707,56.053z" />
                </g>
            </svg>
        )
    }

    get submitIcon() {
        return (
            <svg viewBox="0 0 32 32" aria-hidden="true" className="icon icon-check">
                <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
            </svg>
        )
    }

    get cancelIcon() {
        return (
            <svg viewBox="0 0 32 32" className="icon icon-clear" aria-hidden="true">
                <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
            </svg>
        )
    }

    get plusIcon() {
        return (
            <svg version="1.1" viewBox="0 0 510 510" className="icon icon-plus">
                <g>
                    <path d="M280.5,153h-51v76.5H153v51h76.5V357h51v-76.5H357v-51h-76.5V153z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/>
                </g>
            </svg>
        )
    }

    get banIcon() {
        return (
            <svg className="icon icon-ban" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 5C9.935 5 5 9.934 5 16c0 6.067 4.935 11 11 11s11-4.933 11-11c0-6.066-4.935-11-11-11zm0 2.75c1.777 0 3.427.569 4.775 1.53L9.279 20.778A8.214 8.214 0 0 1 7.75 16c0-4.549 3.701-8.25 8.25-8.25zm0 16.5a8.2 8.2 0 0 1-4.775-1.53l11.494-11.497A8.205 8.205 0 0 1 24.25 16c0 4.547-3.701 8.25-8.25 8.25z"/>
            </svg>
        )
    }

    render() {
        return this[this.props.icon];
    }
}