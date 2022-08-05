import React from 'react'
import { ItemMainDiv, ItemDiv, ItemImageDiv, ItemTitleDiv, Image, ItemTitle, Itemp, ItemLink } from './StyledComponents'
import { useDispatch, useSelector } from 'react-redux';


const Item = ({ data, type }) => {
    const { category,
        description,
        icon_url,
        link,
        title } = data
    return (
        <ItemMainDiv >
            <ItemDiv>
                <ItemImageDiv>
                    <Image src={icon_url} item={type} />
                </ItemImageDiv>
                <ItemTitleDiv>
                    <ItemTitle>{title}</ItemTitle>
                    <Itemp>{category}</Itemp>
                </ItemTitleDiv>
            </ItemDiv>
            <ItemLink href={link} target='_blank'>{link}</ItemLink>
            <Itemp>{description}</Itemp>
        </ItemMainDiv>
    )
}
export default Item