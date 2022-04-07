import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
    const {shape,src,size} = props;
    const styles = {
        src: src,
        size: size,
    }

    if(shape ==="circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}/>
            </AspectOutter>    
        )
    }

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://images.unsplash.com/photo-1596592092169-b3f84d01fd76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVBJUI1JUFDJUVCJUE2JTg0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    size: 36,

}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props)=>props.src}");
    background-size: cover;
    background-position: center;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src})
    background-size: cover;
    background-position: center;
    margin: 5px;
`;

export default Image;