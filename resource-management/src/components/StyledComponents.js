import styled, { css } from 'styled-components'

export const devices = {
    s: `(max-width: 767px)`,
    m: `(min-width: 768px)`,
};
export const Image = styled.img`
  height:60px;
  width:60px;
  ${props => props.user && `width:40px;height:40px;border-radius:100px;`}
  ${props => props.item && `width:36px;height:36px;`}
`

export const HeaderDiv = styled.div`
        padding-top:16px;
        padding-bottom:16px;
        padding-left:40px;
        padding-right:40px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:40px;
        border-width:0px 0px 2px 0px;
        border-style: solid;
        border-bottom-color: #D7DFE9;
    `
export const ImageUserDiv = styled.div`
    
`

export const TabMenuMainDiv = styled.div`
    align-items:center;
    margin-top:40px;
    
    @media ${devices.s}{
        display:flex;
        flex-direction:column;
        font-size: 10px;
    }

    @media ${devices.m}{
        display:flex;
        flex-direction:row;
        font-size: 13px;
        padding-left:30%;
        padding-right:30%;
    }
`
export const TabMenuDiv = styled.div`
    width:200px;
    border: 1px solid #D7DFE9;
    border-radius:2px;
    cursor:pointer;
    ${props => props.selected ? 'background: #0B69FF;' : 'background: rgba(215, 223, 233, 0.24)'}
`
export const TabMenuP = styled.p`
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color:${props => props.selected ? '#FFFFFF;' : 'black'}
`

// SearchBarDiv, SearchBarInput 
export const SearchBarMainDiv = styled.div`
    border: 1px solid #D7DFE9;
    border-radius: 3px;
    width:500px;
    display:flex;
    flex-direction:row;
    height:25px;
    padding:8px;
    margin-top:20px;
    margin-bottom:20px;
`

export const SearchBarDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const SearchBarIcon = styled.img`
    width:12px;
    height:12px;
    margin-right:10px;
`

export const SearchBarInput = styled.input`
    width:100%;
    padding:7px;
    height:10px;
    border:0;outline:0;
    input:focus 
    {
        outline:none!important;
    }
`
export const MainDiv = styled.div`
    padding:15px;
    padding-left:5%;
    padding-right:5%;
`
export const AllItemsDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap 
`
export const ItemMainDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px;
    border: 1px solid #D7DFE9;
    border-radius: 4px;
    width:360px;
    margin-right:10px;
    margin-bottom:10px;
`
export const ItemTitleDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    
`
export const ItemDiv = styled.div`
    display:flex;
    flex-direction:row;
`
export const ItemImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: #FFFFFF;
    border: 2px solid #D7DFE9;
    border-radius: 4px;
    padding:5px;
    height:40px;
`
export const ItemTitle = styled.p`
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom:-10px;
    margin-top:1px;
`
export const Itemp = styled.p`
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7E858E;
`
export const ItemLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0B69FF;
`