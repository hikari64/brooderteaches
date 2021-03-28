import React, {useState} from 'react';
import { BarContainer, BarItem1, BarItem2, BarItem3, BarItem4, BarMenu, BarLinks } from "./PagebarElements";

const PageBar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <>
            <BarContainer>
                <BarMenu>
                    {/* <BarList> */}
                        <BarItem1 isActive={isActive} toggleClass={toggleClass} >
                            <BarLinks to='/item2'>About</BarLinks>
                        </BarItem1>
                        <BarItem2>
                            <BarLinks to='/item1'>Course Preview</BarLinks>
                        </BarItem2>
                        <BarItem3>
                            <BarLinks to='/item1'>Reviews</BarLinks>
                        </BarItem3>
                        <BarItem4>
                            <BarLinks to='/item1'>Projects and Resources</BarLinks>
                        </BarItem4>
                    {/* </BarList> */}
                </BarMenu>
            </BarContainer>
        </>
    )
}

export default PageBar
