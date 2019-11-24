import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details = () => {
    return (
        <DetailsLayout title="Breadcrumb">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="flex items-center">
                                <div className="w4"><Rectangle height={16} /></div>
                                <div className="mh1 f2 black-30">/</div>
                                <div className="w2"><Rectangle height={16} /></div>
                                <div className="mh1 f2 black-30">/</div>
                                <div className="w3"><Rectangle height={16} /></div>
                                <div className="mh1 f2 black-30">/</div>
                                <div className="w2"><Rectangle height={16} /></div>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    /* Content is centered vertically */
    align-items: center;
    display: flex;
">
    <!-- Breadcrumb item -->
    <a>...</a>

    <!-- Separator -->
    <div style="margin: 0 8px;">/</span>

    <!-- Repeated items and separators -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
