import React from 'react';
import Header from './header';
import Explorer from './explorer';
import Content from './content';

class Me extends React.Component {
    render() {
        return (
            <>
                <div className="w-full h-full flex flex-row">
                    <Header />
                    <Explorer />
                    <Content />
                </div>
            </>
        );
    }
}

export default Me;
